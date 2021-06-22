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
    import Event from '@/libs/tk90755/events/Event';
    import EventDispatcher from '@/libs/tk90755/events/EventDispatcher';
    import Command from '@/libs/tk90755/commands/Command';
    import Commands from '@/libs/tk90755/commands/Commands';

    const dispatcher:EventDispatcher = new EventDispatcher()
    const commands:Commands = new Commands("testSerialList", false);
    commands.push([
      // [
      new Command( ()=>{
        console.log("func1Dispatch")
        dispatcher.dispatchEvent(new Event('func1Dispatch'));
      }, dispatcher, "func1Dispatch",1  ),
      new Command( ()=>{
        console.log("func2Dispatch")
        setTimeout(()=>{
          dispatcher.dispatchEvent(new Event('func2Dispatch'));
        },2000)
      }, dispatcher, "func2Dispatch",1  )
      // ]
    ])
    commands.execute()
*/
import SerialList from "./SerialList";
export default class Commands extends SerialList {
  constructor(name?: string, debug?: boolean) {
    super(
      name === undefined
        ? "commands_" +
            new Date().getTime().toString(16) +
            Math.floor(1000 * Math.random()).toString(16)
        : name
    );
    this.debug = debug === true;
  }
}
