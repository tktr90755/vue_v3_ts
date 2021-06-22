/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.events.EventDispatcher.ts
 * @author
 * @version 0.1.0
 * @update
 * @example 
    import Event from '@/libs/tk90755/events/Event';
    import EventDispatcher from '@/libs/tk90755/events/EventDispatcher';
    const example1 =(e:Event):void =>{
      console.log("kitayo1",e);
    }
    const example2 =(e:Event):void =>{
      console.log("kitayo2",e);
    }
    const dispatcher:EventDispatcher = new EventDispatcher()
    dispatcher.addEventListener('say1', example1);
    dispatcher.addEventListener('say1', example2);
    console.log(dispatcher.hasEventListener("say1"))
    console.log(dispatcher.getEventListeners("say1"))
    dispatcher.removeEventListener("say1",example1)
    dispatcher.removeEventListener("say1",example2)
    console.log(dispatcher.hasEventListener("say1"))
    dispatcher.dispatchEvent(new Event("say1"))
*/
import Event from "./Event";
export default class EventDispatcher {
  private _currentTarget: EventDispatcher = this;
  private listeners: { [name: string]: Array<(e: Event) => void> } = {};
  private _listener: (e: Event) => void;

  constructor() {
    this._listener = (e: Event) => {
      console.log(e);
    };
  }

  addEventListener(type: string, listener: (e: Event) => void): void {
    if (type === undefined) {
      throw new Error("Event type is not found.");
    }
    if (!Object.prototype.hasOwnProperty.call(this.listeners, type)) {
      this.listeners[type] = [];
    }
    if (typeof listener === "function") {
      this.listeners[type].push(listener);
      this._listener = listener;
    } else {
      throw new Error("listener is not a function.");
    }
  }

  removeEventListener(type: string, listener: (e: Event) => void): void {
    if (Object.prototype.hasOwnProperty.call(this.listeners, type)) {
      let lItr: number;
      let lCount: number;
      const listeners: Array<(e: Event) => void> = this.listeners[type];
      for (
        lItr = 0, lCount = Object.keys(this.listeners).length;
        lItr < lCount;
        ++lItr
      ) {
        if (listeners[lItr] === listener) {
          this.listeners[type].splice(lItr, 1);
          break;
        }
      }
    }
  }

  getEventListeners(type: string): Array<(e: Event) => void> {
    if (this.hasEventListener(type)) {
      return this.listeners[type];
    }
    return [];
  }

  hasEventListener(type: string): boolean {
    if (Object.prototype.hasOwnProperty.call(this.listeners, type)) {
      if (this.listeners[type].length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  dispatchEvent(event: Event): void {
    event.currentTarget = this._currentTarget;
    if (Object.prototype.hasOwnProperty.call(this.listeners, event.type)) {
      let lItr: number;
      let lCount: number;
      const listeners: Array<(e: Event) => void> = this.listeners[event.type];
      let listener: (e: Event) => void;
      for (
        lItr = 0, lCount = Object.keys(listeners).length;
        lItr < lCount;
        ++lItr
      ) {
        listener = listeners[lItr];
        listener(event);
      }
    }
  }

  // __________________________________________________________________________________
  // getter & setter
  get currentTarget(): EventDispatcher {
    return this._currentTarget;
  }

  get listener(): (e: Event) => void {
    return this._listener;
  }
}
