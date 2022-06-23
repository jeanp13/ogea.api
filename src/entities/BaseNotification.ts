export abstract class BaseNotification {
  notifications: Array<{ message: string }>;

  constructor() {
    this.notifications = new Array<{ message: string }>();
  }

  AddNotification(message: string): void {
    this.notifications.push({ message });
  }

  isTrue(value, message) {
    if (value) this.notifications.push({ message });
  }

  isRequired(value, message) {
    if (!value || value.length <= 0) this.notifications.push({ message });
  }

  hasMinLen(value, min, message) {
    if (!value || value.length < min) this.notifications.push({ message });
  }

  hasMaxLen(value, max, message) {
    if (!value || value.length > max) this.notifications.push({ message });
  }

  isFixedLen(value, len, message) {
    if (value.length !== len) this.notifications.push({ message });
  }

  isEmail(value, message) {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value)) this.notifications.push({ message });
  }

  get allNotifications(): Array<{ message: string }> {
    return this.notifications;
  }

  valid(): boolean {
    return this.notifications.length === 0;
  }
}
