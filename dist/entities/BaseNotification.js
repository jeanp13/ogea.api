"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseNotification = void 0;

class BaseNotification {
  constructor() {
    this.notifications = void 0;
    this.notifications = new Array();
  }

  AddNotification(message) {
    this.notifications.push({
      message
    });
  }

  isTrue(value, message) {
    if (value) this.notifications.push({
      message
    });
  }

  isRequired(value, message) {
    if (!value || value.length <= 0) this.notifications.push({
      message
    });
  }

  hasMinLen(value, min, message) {
    if (!value || value.length < min) this.notifications.push({
      message
    });
  }

  hasMaxLen(value, max, message) {
    if (!value || value.length > max) this.notifications.push({
      message
    });
  }

  isFixedLen(value, len, message) {
    if (value.length !== len) this.notifications.push({
      message
    });
  }

  isEmail(value, message) {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value)) this.notifications.push({
      message
    });
  }

  get allNotifications() {
    return this.notifications;
  }

  valid() {
    return this.notifications.length === 0;
  }

}

exports.BaseNotification = BaseNotification;