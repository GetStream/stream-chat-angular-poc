import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StreamChatAngularModule } from 'stream-chat-angular';
import { MyChannelPreviewComponent } from './my-channel-preview/my-channel-preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MyChannelPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StreamChatAngularModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
