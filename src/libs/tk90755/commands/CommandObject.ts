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
import EventDispatcher from "../events/EventDispatcher";
export default class CommandObject extends EventDispatcher {
  private _name: string;
  constructor(_name: string) {
    super();
    this._name = _name;
  }
  get name(): string {
    return this._name;
  }

  get length():number{
    return 0;
  }
}
