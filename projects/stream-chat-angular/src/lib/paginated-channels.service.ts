import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Channel, ChannelFilters, ChannelOptions, ChannelSort, StreamChat } from 'stream-chat';
import uniqBy from 'lodash.uniqby';
import { ChatClientService } from './chat-client.service';
import { AsyncSubject, BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class PaginatedChannelsService implements OnDestroy{
  channels: Channel[] = [];

  private chatEventSubscribers: Array<{
    unsubscribe: () => void;
  }> = [];

  private client!: StreamChat;
  private onChannelListUpdatedEvent = new Subject<Channel[]>();

  constructor(private chatClientService: ChatClientService) {}

  ngOnDestroy(): void {
    this.chatEventSubscribers.forEach(s => {
      s.unsubscribe();
    })
    this.onChannelListUpdatedEvent.complete();
  }
  
  getChannels = (filters: ChannelFilters, sort: ChannelSort, options: ChannelOptions): Observable<Array<Channel>> => {
    this.client = this.chatClientService.getClient();
    this.client?.queryChannels(filters, sort, options).then((channels) => {
      this.channels = channels;
      this.addChatEventListeners();
      this.onChannelListUpdatedEvent.next(channels);
    });

    return this.onChannelListUpdatedEvent
      .asObservable()
      .pipe(
        catchError(this.handleError)
      );
  }

  private messageNewListener = () => this.client
    ?.on(
      'message.new',
      event => {
        const channelInList = this.channels.filter((channel) => channel.cid === event.cid).length > 0;

        if (!channelInList && event.channel_type) {
          const channel = this.client.channel(event.channel_type, event.channel_id);
          this.channels = uniqBy([channel, ...this.channels], 'cid');
        }

        this.moveChannelToTop(event.cid || '');

        this.onChannelListUpdatedEvent.next(this.channels)
      }
    )

  private addChatEventListeners = () => {
    this.chatEventSubscribers.push(this.messageNewListener());
  }

  private moveChannelToTop = (cid: string) => {
    // get channel index
    const channelIndex = this.channels.findIndex((channel) => channel.cid === cid);

    if (channelIndex <= 0) return;

    // get channel from channels
    const channel = this.channels[channelIndex];

    // remove channel from current position
    this.channels.splice(channelIndex, 1);
    // add channel at the start
    this.channels.unshift(channel);
  };

  /**
   * TODO: Implement this function
   * 
   * @param operation 
   * @param result 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
