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
import EventDispatcher from "../events/EventDispatcher";
import CommandObject from "./CommandObject";
import ParallelList from "./ParallelList";
import Command from "./Command";
export default class SerialList extends CommandObject {
  private _debug: boolean;
  private _commands: Array<Command | ParallelList>;
  private _current: Command | ParallelList | undefined;
  private _index: number;
  private _isRunning: boolean;
  private _isComplete: boolean;
  private _isCancel: boolean;
  private _count: number;
  constructor(name: string) {
    super(
      name === undefined
        ? new Date().getTime().toString(16) +
            Math.floor(1000 * Math.random()).toString(16)
        : name
    );
    this._debug = false;
    this._commands = [];
    this._current = undefined;
    this._index = 0;
    this._isRunning = false;
    this._isComplete = false;
    this._isCancel = false;
    this._count = 0;
  }

  _onCompleteHandler(e: Event | undefined): void {
    if (e !== undefined) {
      const event: Event = e as Event;
      const currentTarget: EventDispatcher = event.currentTarget;
      const type: string = event.type;
      const listener: (e: Event) => void = currentTarget.listener;
      currentTarget.removeEventListener(type, listener);
    } else {
      if (this._current !== undefined) {
        const current: Command = this._current as Command;
        current.removeEventListener(Event.COMPLETE, this._onCompleteHandler);
      }
      if (this._debug === true) {
        console.log(
          "[" + this.name + "]:" + this._index + " complete"
        );
      }
      if (this._commands.length !== 0) {
        if (++this._index < this._commands.length && this._isCancel === false) {
          this._next();
        } else {
          this.end();
        }
      } else {
        this.end();
      }
    }
  }

  _next(): void {
    if (this._debug === true) {
      console.log("[" + this.name + "]:" + this._index + " start");
    }
    if (this._commands[this._index] instanceof Command === true) {
      const command: Command = this._commands[this._index] as Command;
      this._current = command;
      command.addEventListener(Event.COMPLETE, () => {
        this._onCompleteHandler(undefined);
      });
      command.start();
    } else if (this._commands[this._index] instanceof ParallelList === true) {
      const parallelList: ParallelList = this._commands[
        this._index
      ] as ParallelList;
      this._current = parallelList;
      parallelList.addEventListener(Event.COMPLETE, () => {
        this._onCompleteHandler(undefined);
      });
      parallelList.execute();
    }
  }

  _checkError(): void {
    if (this._isRunning === true)
      throw new Error("this command is already running");
    if (this._isComplete === true)
      throw new Error("this command is already completed");
  }

  push($commands: Array<Command | Array<Command>>): void {
    this._checkError();
    const commandsLength: number = $commands.length;
    for (let i = 0; i < commandsLength; i++) {
      if ($commands[i] instanceof Array) {
        if ($commands[i].length !== 0) {
          const parallel = new ParallelList(this.name);
          const parallelsCommands: Array<Command> = $commands[i] as Array<
            Command
          >;
          parallel.push(parallelsCommands);
          this._commands.push(parallel);
        }
      } else {
        const command: Command = $commands[i] as Command;
        this._commands.push(command);
      }
    }
  }

  execute(): void {
    this._checkError();
    if (this._commands.length !== 0) {
      this._isRunning = true;
      this._next();
    } else {
      throw new Error("this commands length are Zero");
    }
  }

  cancel(): void {
    if (this._isComplete === false) {
      this._isCancel = true;
      if (this._current instanceof Command === true) {
        const command: Command = this._current as Command;
        command.removeEventListener(Event.COMPLETE, this._onCompleteHandler);
        command.stop();
      } else if (this._current instanceof ParallelList === true) {
        const parallelList: ParallelList = this._current as ParallelList;
        parallelList.removeEventListener(
          Event.COMPLETE,
          this._onCompleteHandler
        );
      }
      this.end();
    }
  }

  end(): void {
    this._commands = [];
    this._current = undefined;
    this._isRunning = false;
    this._isComplete = true;
    if (this._debug === true) console.log("[" + this.name + "]:End");
  }

  // __________________________________________________________________________________
  // getter & setter
  get debug(): boolean {
    return this._debug;
  }

  set debug(value: boolean) {
    this._debug = value;
  }

  get length(): number {
    return this._commands.length;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  get isComplete(): boolean {
    return this._isComplete;
  }

  get isCancel(): boolean {
    return this._isCancel;
  }

  get commands(): Array<Command | ParallelList> {
    return this._commands;
  }
}
