export class Util {
  addEventListener(ele: HTMLElement, eventType: string, callback: any) {
    if (ele.addEventListener) {
      return ele.addEventListener(eventType, callback, false);
    } else if (ele["attachEvent"]) {
      return ele["attachEvent"](eventType, callback);
    } else {
      return (ele["on" + eventType] = callback);
    }
  }

  removeEventListener(ele: HTMLElement, eventType: string, callback: any) {
    if (ele.removeEventListener) {
      return ele.removeEventListener(eventType, callback, false);
    } else if (ele["detachEvent"]) {
      return ele["detachEvent"](eventType, callback);
    } else {
      return (ele["on" + eventType] = null);
    }
  }

  isArray(val: any): boolean {
    return Object.prototype.toString.call(val) === "[object Array]";
  }

  randomColor(): string {
    return "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
  }

  isPureNumber(val: any): boolean {
    if (typeof val === "number" || !val) return true;
    else return false;
  }
}
