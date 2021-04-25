import { generateRandomId, getRandomInt } from '../../utils';
import { Attachment } from 'stream-chat';

const image_url = 'http://www.jackblack.com/tenac_iousd.bmp';

export const generateAttachmentAction = (a: Attachment = {}) => ({
  name: generateRandomId(),
  text: generateRandomId(),
  value: generateRandomId(),
  ...a,
});

export const generateVideoAttachment = (a: Attachment = {}) => ({
  asset_url:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  mime_type: 'video/mp4',
  title: generateRandomId(),
  type: 'media',
  ...a,
});

export const generateImageAttachment = (a: Attachment = {}) => {
  const randomSeed = getRandomInt(1, 1000);
  const image = `https://picsum.photos/seed/${randomSeed}/100/100`;

  return {
    image_url: image,
    text: generateRandomId(),
    thumb_url: image,
    asset_url: image,
    title: generateRandomId(),
    type: 'image',
    ...a,
  }
};

export const generateImageUploadPreview = (a: Attachment = {}) => ({
  file: {
    uri: image_url,
  },
  id: generateRandomId(),
  state: 'uploaded',
  ...a,
});

export const generateAudioAttachment = (a: Attachment = {}) => ({
  asset_url: 'http://www.jackblack.com/tribute.mp3',
  description: generateRandomId(),
  image_url,
  text: generateRandomId(),
  title: generateRandomId(),
  type: 'audio',
  ...a,
});

export const generateFileAttachment = (a: Attachment = {}) => ({
  asset_url:
    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  description: generateRandomId(),
  file_size: 1337,
  mime_type: generateRandomId(),
  text: generateRandomId(),
  title: generateRandomId(),
  type: 'file',
  ...a,
});

export const generateFileUploadPreview = (a: Attachment = {}) => ({
  file: {
    name: 'dummy.pdf',
    type: 'file',
    ...a,
  },
  id: generateRandomId(),
  state: 'uploaded',
  ...a,
});

export const generateCardAttachment = (a: Attachment = {}) => ({
  image_url,
  og_scrape_url: generateRandomId(),
  text: generateRandomId(),
  thumb_url: image_url,
  title: generateRandomId(),
  title_link: generateRandomId(),
  ...a,
});

export const generateImgurAttachment = () =>
  generateCardAttachment({ type: 'imgur' });

export const generateGiphyAttachment = () =>
  generateCardAttachment({ type: 'giphy' });
