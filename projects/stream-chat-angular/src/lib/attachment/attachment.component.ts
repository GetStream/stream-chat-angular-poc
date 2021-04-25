import { Component, Input, OnInit } from '@angular/core';
import { Attachment } from 'stream-chat';

export const SUPPORTED_VIDEO_FORMATS = ['video/mp4', 'video/ogg', 'video/webm', 'video/quicktime'];

@Component({
  selector: 'attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {
  @Input() attachments!: Attachment[];

  fAttachments: Attachment[] = [];

  constructor() { }

  ngOnInit(): void {
    const attachments = this.attachments;
    const gallery = {
      images: attachments?.filter(
        (attachment) =>
          attachment.type === 'image' && !(attachment.og_scrape_url || attachment.title_link),
      ),
      type: 'gallery',
    };
 
    if (gallery.images?.length >= 2) {
      this.fAttachments = [
        ...attachments.filter(
          (attachment) =>
            !(attachment.type === 'image' && !(attachment.og_scrape_url || attachment.title_link)),
        ),
        gallery,
      ];
      console.log('this.fAttachments ', this.fAttachments)
    } else {
      this.fAttachments = attachments;
    }
  }

  isAudioAttachment = (
    attachment: Attachment,
  ) => attachment.type === 'audio';
  
  isFileAttachment = (
    attachment: Attachment,
  ) =>
    attachment.type === 'file' ||
    (attachment.mime_type &&
      SUPPORTED_VIDEO_FORMATS.indexOf(attachment.mime_type as unknown as string) === -1 &&
      attachment.type !== 'video');
  
  isGalleryAttachment = (
    attachment: Attachment,
  ) => attachment.type === 'gallery';
  
  isImageAttachment = (
    attachment: Attachment,
  ) => attachment.type === 'image' && !attachment.title_link && !attachment.og_scrape_url;
  
  isMediaAttachment = (
    attachment: Attachment,
  ) =>
    (attachment.mime_type && SUPPORTED_VIDEO_FORMATS.indexOf(attachment.mime_type as unknown as string) !== -1) ||
    attachment.type === 'video';
  
}
