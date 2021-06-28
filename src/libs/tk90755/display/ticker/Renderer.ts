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
  private _listeners: { [s: string]: () => void };
  private _timer: number;
  constructor() {
    this._listeners = {};
    this._timer = 0;
  }

  public static get instance(): Renderer {
    if (!this._instance) this._instance = new Renderer();
    return this._instance;
  }

  public add(instance: () => void, id: string): void {
    if (this._listeners[id] === undefined) {
      this._listeners[id] = instance;
    } else {
      throw id +
        "というインスタンス名は" +
        this._listeners[id] +
        "において使用されています。";
    }
    if (Object.keys(this._listeners).length !== 0) {
      this._timer = window.requestAnimationFrame(() => { this.render() })
    }
  }

  public kill(id: string): void {
    if (this.has(id)) {
      delete this._listeners[id];
    } else {
      throw id + "というインスタンスはリストに登録されていません。";
    }
    if (Object.keys(this._listeners).length === 0) {
      window.cancelAnimationFrame(this._timer)
      this._timer = 0
    }
  }

	public killAll():void{
		this.pause();
    this._listeners = {};
    if (this._timer != 0) {
      window.cancelAnimationFrame(this._timer)
    }
    this._timer = 0
	}

  public pause(): void {
    if (this._timer != 0) {
      window.cancelAnimationFrame(this._timer)
    }
    this._timer = 0
  }

  public resume(): void {
    if (Object.keys(this._listeners).length !== 0) {
      this._timer = window.requestAnimationFrame(() => { this.render() })
    }
  }

  public has(id: string): boolean {
    return this._listeners[id] !== undefined;
  }

  private render(): void {
    for (const key in this._listeners) {
      this._listeners[key]();
    }

    if (Object.keys(this._listeners).length >= 1) {
      window.cancelAnimationFrame(this._timer)
      this._timer = window.requestAnimationFrame(() => {
        this.render()
      })
    }
  }
}
