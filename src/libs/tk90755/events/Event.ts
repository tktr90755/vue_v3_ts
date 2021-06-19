/**
 * Copyright 2014, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.events.Event.js
 * @author
 * @version 0.1.0
 * @update
 *
 */
import EventDispatcher from "./EventDispatcher"
export default class Event {
  //   constructor(type:string, origin, bubbles, cancelable) {
  //     if (type === null || type === undefined) {
  //       throw new Error("Have to set Event Type.");
  //     }
  //     this._type = type;
  //     this._origin = origin || null;
  //     this._bubbles = typeof bubbles === "boolean" ? bubbles : false;
  //     this._cancelable = typeof cancelable === "boolean" ? cancelable : false;
  //     this._currentTarget;

  //     this.flags;
  //     this.preventDefaults;
  //   }

  private _type: string;
  constructor(_type: string) {
    if (_type === null || _type === undefined) {
      throw new Error("Have to set Event Type.");
    }
    this._type = _type;
  }

  // __________________________________________________________________________________
  // getter & setter
  private _currentTarget!: EventDispatcher;
  get currentTarget(): EventDispatcher {
    return this._currentTarget;
  }
  set currentTarget(value: EventDispatcher) {
    this._currentTarget = value;
  }

  get type(): string {
    return this._type;
  }

  // __________________________________________________________________________________
  // event types
  static INIT(): string {
    return "init";
  }
  static START(): string {
    return "start";
  }
  static UPDATE(): string {
    return "update";
  }
  static COMPLETE(): string {
    return "complete";
  }

  static ERROR(): string {
    return "error";
  }
  static IO_ERROR(): string {
    return "ioError";
  }
  static SECURITY_ERROR(): string {
    return "securityError";
  }

  static CHANGE(): string {
    return "change";
  }
  static CANCEL(): string {
    return "cancel";
  }
  static RENDER(): string {
    return "render";
  }

  static RESIZE(): string {
    return "resize";
  }
  static TICKER(): string {
    return "ticker";
  }
}
