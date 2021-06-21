/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.events.Event.js
 * @author
 * @version 0.1.0
 * @update
 *
 */
import EventDispatcher from "./EventDispatcher";
export default class Event {
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
  static get INIT(): string {
    return "init";
  }
  static get START(): string {
    return "start";
  }
  static get UPDATE(): string {
    return "update";
  }
  static get COMPLETE(): string {
    return "complete";
  }

  static get ERROR(): string {
    return "error";
  }
  static get IO_ERROR(): string {
    return "ioError";
  }
  static get SECURITY_ERROR(): string {
    return "securityError";
  }

  static get CHANGE(): string {
    return "change";
  }
  static get CANCEL(): string {
    return "cancel";
  }
  static get RENDER(): string {
    return "render";
  }

  static get RESIZE(): string {
    return "resize";
  }
  static get TICKER(): string {
    return "ticker";
  }
}
