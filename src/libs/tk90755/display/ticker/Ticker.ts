/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.utils.Ticker.ts
 * @author
 * @version 0.1.0
 * @update
 * @example 
    import Ticker from '@/libs/tk90755/display/ticker/Ticker';
    
    const ticker:Ticker = Ticker.instance;
    ticker.add(():void=>{console.log("tick test:", Math.random())},"tickTest")
    setTimeout(()=>{
      if(ticker.has("tickTest"))ticker.kill("tickTest")
      ticker.pause()
    },1000)
    setTimeout(()=>{
      ticker.killAll()
      ticker.useExRenderer = true;
    },2000)
 */
import ITicker from "./ITicker";
import Renderer from "./Renderer";
import ExRenderer from "./ExRenderer";
export default class Ticker {
  private static _instance: Ticker;
  private _renderer: ITicker;
  public _useExRenderer: boolean;
  constructor() {
    this._renderer = ExRenderer.instance;
    this._useExRenderer = true;
  }

  public static get instance(): Ticker {
    if (!this._instance) this._instance = new Ticker();
    return this._instance;
  }

  public add(instance: () => void, id: string) {
    this._renderer.add(instance, id);
  }

  public kill(id: string): void {
    this._renderer.kill(id);
  }

  public killAll(): void {
    this._renderer.killAll();
  }

  public pause(): void {
    this._renderer.pause();
  }

  public resume(): void {
    this._renderer.resume();
  }

  public has(id: string): boolean {
    return this._renderer.has(id);
  }

  // __________________________________________________________________________________
  // getter & setter
  get useExRenderer(): boolean {
    return this._useExRenderer;
  }
  set useExRenderer(value: boolean) {
    if (value === false) this._renderer = Renderer.instance;
    else if (value === true) this._renderer = ExRenderer.instance;
    this._useExRenderer = value;
    Renderer.instance.killAll();
    ExRenderer.instance.killAll();
  }
}
