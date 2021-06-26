/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.display.ticker.Renderer.ts
 * @author
 * @version 0.1.0
 * @update
 */
import ITicker from "./ITicker";
export default class Renderer implements ITicker {
  private static _instance: Renderer;
  private numListeners: number;
  private _listeners: { [s: string]: () => void };
  private _timer: number;
  private fps: number;
  constructor() {
    this.numListeners = 0;
    this._listeners = {};
    this._timer = 0;
    this.fps = 60;
  }

  public static get instance(): Renderer {
    if (!this._instance) this._instance = new Renderer();
    return this._instance;
  }

  public add(instance: () => void, id: string): void {
    if (this._listeners[id] === undefined) {
      this._listeners[id] = instance;
      if (this.numListeners++ === 0) {
        this.resume();
      }
    } else {
      throw id +
        "というインスタンス名は" +
        this._listeners[id] +
        "において使用されています。";
    }
  }

  public kill(id: string): void {
    if (this.has(id)) {
      if (--this.numListeners <= 0) this.pause();
      delete this._listeners[id];
    } else {
      throw id + "というインスタンスはリストに登録されていません。";
    }
  }

	public killAll():void{
		this.pause();
    this.numListeners = 0;
    this._listeners = {};
    this._timer = 0;
	}

  public pause(): void {
    clearTimeout(this._timer);
    this._timer = 0;
  }

  public resume(): void {
    if (this.numListeners !== 0) {
      this._timer = setInterval((): void => {
        this.render();
      }, 1000 / this.fps);
    }
  }

  public has(id: string): boolean {
    return this._listeners[id] !== undefined;
  }

  private render(): void {
    for (const key in this._listeners) {
      this._listeners[key]();
    }
  }
}
