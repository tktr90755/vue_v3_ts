/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.data.Ref.ts
 * @author
 * @version 0.1.0
 * @update
 * @example 
		import Ref from '@/libs/tk90755/data/Ref';
    
    const ref:Ref = Ref.instance;
    ref.set(():void=>{console.log("@@@")},"func")
    ref.set("str hoge","str")
    ref.set(10,"num")
    ref.set(new Item(():void=>{console.log("Item kitayo!")}, "mc0"),"item")


    const func:()=>void = ref.get("func") as ()=>void
    const str:string = ref.get("str") as string
    const num:number = ref.get("num") as number
    const item:Item = ref.get("item") as Item

    func()
    console.log(str + str)
    console.log(num + num)
    console.log(item.name)

    ref.kill("str")
    console.log(ref.get("str"))
    ref.killAll()
    console.log(ref.get("func"))
    console.log(ref.get("num"))
    console.log(ref.get("item"))
 */
export default class Ref {
  private static _instance: Ref;
  private _objectList: { [s: string]: unknown };
  constructor() {
    this._objectList = {};
  }

  public static get instance(): Ref {
    if (!this._instance) this._instance = new Ref();
    return this._instance;
  }

  public get(id: string): unknown {
    return this._objectList[id];
  }

  public set(instance: unknown, id: string): void {
    if (this._objectList[id] === undefined) {
      this._objectList[id] = instance;
    } else {
      throw id +
        "というインスタンス名は" +
        this._objectList[id] +
        "において使用されています。";
    }
  }

  public kill(id: string): void {
    if (this._objectList[id]) {
      delete this._objectList[id];
    } else {
      throw id + "というインスタンスはリストに登録されていません。";
    }
  }

  public killAll(): void {
    for (const i in this._objectList) {
      if (this.has(i) === true) delete this._objectList[i];
    }
  }

  public has(id: string): boolean {
    return this._objectList[id] !== undefined;
  }
}
