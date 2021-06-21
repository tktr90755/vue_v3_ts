/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.events.CommandObject.ts
 * @author
 * @version 0.1.0
 * @update
 * @example 

*/
import Event from "../events/Event";
import CommandObject from "./CommandObject";
import EventDispatcher from "../events/EventDispatcher";
export default class Command extends CommandObject {
  private _func: () => void;
  private _dispatcher: EventDispatcher;
  private _eventType: string;

  private _delay: number;
  private _timer: number;

  constructor(
    func: () => void,
    dispatcher: EventDispatcher,
    eventType: string,
    delay?: number,
    name?: string
  ) {
    super(
      name === undefined
        ? new Date().getTime().toString(16) +
            Math.floor(1000 * Math.random()).toString(16)
        : name
    );
    this._func = func;
    this._dispatcher = dispatcher;
    this._eventType = eventType;
    this._delay = delay === undefined ? 0 : delay;
    this._timer = NaN;
  }

  completeHandler(): void {
    this._dispatcher.removeEventListener(this._eventType, this.completeHandler);
    this.finish();
  }

  start(): void {
    const f = (): void => {
      this._dispatcher.addEventListener(this._eventType, this.completeHandler);
      // this._func.apply(null, arguments[0])
      this._func();
    };

    if (this._delay === 0) {
      f();
    } else {
      this._timer = window.setTimeout((): void => {
        f();
      }, this._delay * 1000);
    }
  }

  stop(): void {
    this.completeHandler();
  }

  finish(): void {
    if (isNaN(this._timer) === false) {
      window.clearTimeout(this._timer);
      this._timer = NaN;
    }
    this.dispatchEvent(new Event(Event.COMPLETE));
  }

  // __________________________________________________________________________________
  // getter & setter
  get dispatcher(): EventDispatcher {
    return this._dispatcher;
  }
}
