import Bowser from 'bowser';

export enum ClassName {
  ASSISTANT_INFO = 'lovelyflows-assistant-info',
  AVATAR = 'lovelyflows-avatar',
  BUBBLE = 'lovelyflows-bubble',
  BUTTON = 'lovelyflows-button',
  CARD = 'lovelyflows-card',
  CAROUSEL = 'lovelyflows-carousel',
  CHAT = 'lovelyflows-chat',
  CHAT_INPUT = 'lovelyflows-chat-input',
  FEEDBACK = 'lovelyflows-feedback',
  FOOTER = 'lovelyflows-footer',
  HEADER = 'lovelyflows-header',
  ICON = 'lovelyflows-icon',
  IMAGE = 'lovelyflows-image',
  INPUT = 'lovelyflows-input',
  LAUNCHER = 'lovelyflows-launcher',
  LOADER = 'lovelyflows-loader',
  MESSAGE = 'lovelyflows-message',
  PROMPT = 'lovelyflows-prompt',
  SYSTEM_RESPONSE = 'lovelyflows-system-response',
  TIMESTAMP = 'lovelyflows-timestamp',
  TOOLTIP = 'lovelyflows-tooltip',
  TYPING_INDICATOR = 'lovelyflows-typing-indicator',
  USER_RESPONSE = 'lovelyflows-user-response',
  WIDGET = 'lovelyflows-widget',

  PROACTIVE_CLOSE = 'lovelyflows-proactive-close',
  PROACTIVE_MESSAGE = 'lovelyflows-proactive-message',
  PROACTIVE = 'lovelyflows-proactive',
}

export const DEVICE_INFO = Bowser.parse(window.navigator.userAgent);
