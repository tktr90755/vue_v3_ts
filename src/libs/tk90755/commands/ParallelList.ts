/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.events.ParallelList.ts
 * @author
 * @version 0.1.0
 * @update
 * @example 

*/
import Event from "../events/Event";
import CommandObject from "./CommandObject";
import Command from "./Command";
export default class ParallelList extends CommandObject {
  private _commands: Array<Command | Array<Command>>;
  private _numCompleted: number;
  private _isRunning: boolean;
  private _isComplete: boolean;
  constructor(name: string) {
    super(
      name === undefined
        ? new Date().getTime().toString(16) +
            Math.floor(1000 * Math.random()).toString(16)
        : name
    );
    this._commands = [];
    this._numCompleted = 0;
    this._isRunning = false;
    this._isComplete = false;
  }

  _onCompleteHandler = ($event: Event): void => {
    if ($event.currentTarget)
      $event.currentTarget.removeEventListener(
        Event.COMPLETE,
        this._onCompleteHandler
      );
    this._numCompleted++;
    if (this._numCompleted === this._commands.length) {
      this.end();
    }
  };

  _checkError(): void {
    if (this._isRunning === true)
      throw new Error("this command is already running");
    if (this._isComplete === true)
      throw new Error("this command is already completed");
  }

  push(commands: Array<Command | Array<Command>>): void {
    this._checkError();
    const commandsLength = commands.length;
    for (let i = 0; i < commandsLength; i++) {
      if (commands[i] instanceof Array) {
        if (commands[i].length !== 0) {
          for (let j = 0; j < commands[i].length; j++) {
            this._commands.push(commands[j]);
          }
        }
      } else {
        this._commands.push(commands[i]);
      }
    }
  }

  execute(): void {
    this._checkError();
    for (const i in this._commands) {
      const command: Command = this._commands[i] as Command;
      command.addEventListener(Event.COMPLETE, this._onCompleteHandler);
      command.start();
    }
  }

  cancel(): void {
    if (this._isComplete === false) {
      for (const i in this._commands) {
        const command: Command = this._commands[i] as Command;
        command.removeEventListener(Event.COMPLETE, this._onCompleteHandler);
        command.stop();
      }
      this.end();
    }
  }

  end(): void {
    this._commands = [];
    this._numCompleted = 0;
    this._isRunning = false;
    this._isComplete = true;
    this.dispatchEvent(new Event(Event.COMPLETE));
  }

  // __________________________________________________________________________________
  // getter & setter
  get length(): number {
    return this._commands.length;
  }
}
