/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.utils.iterator.Iterator.ts
 * @author
 * @version 0.1.0
 * @update
 * @example 
import Item from '@/libs/tk90755/utils/iterator/Item';
import Iterator from '@/libs/tk90755/utils/iterator/Iterator';

var ite = new Iterator();
ite.addItem(new Item(():void=> { console.log("mc0"); }, "mc0"));
ite.addItem(new Item(():void=> { console.log("mc1"); }, "mc1"));
ite.addItem(new Item(():void=> { console.log("mc2"); }, "mc2"));
console.log("fastName:"+ite.fast().name);
console.log("lastName:"+ite.last().name);
setInterval(function(){
    // console.log("random:"+ite.random().name);
    // console.log("shuffle:"+ite.shuffle().name);

    if(ite.hasNext()){
    console.log("shuffle:"+ite.next().name);
    }else{
    console.log("shuffle:"+ite.fast().name);
    }

    // if(ite.hasPrev()){
    //   console.log("next:"+ite.prev().name);
    // }else{
    //   console.log("prev:"+ite.last().name);
    // }
}, 1000);
 */
import ArrayUtils from "../ArrayUtils";
import Item from "./Item.js";
export default class Iterator {
  private _list: Array<Item>;
  private _index: number;
  private shuffleList: Array<Item> | undefined;
  private shuffleCount: number;
  constructor() {
    this._list = [];
    this._index = 0;
    this.shuffleList = undefined;
    this.shuffleCount = NaN;
  }

  // 次のItem存在するかどうか
  hasNext(): boolean {
    const judge = this._index >= this._list.length - 1;
    return !judge;
  }

  // 一つ前のItem存在するかどうか
  hasPrev(): boolean {
    const judge = this._index < 1;
    return !judge;
  }

  // asFast 最初のItem存在するかどうか
  hasFast(): boolean {
    const judge = this._list[0] == undefined;
    return !judge;
  }

  // 最後のItem存在するかどうか
  hasLast(): boolean {
    const judge = this._list[this._list.length - 1] == undefined;
    return !judge;
  }

  /**
   * チョイスしたItemが存在するかどうか
   * @param	index 存在を確認したいItemの番号
   */
  hasPickup(index: number): boolean {
    const judge = this._list[index] == undefined;
    return !judge;
  }

  // 次へ進む
  next(): Item {
    this._index++;
    return this.getItemAt(this._index);
  }

  // 前へ戻る
  prev(): Item {
    this._index--;
    return this.getItemAt(this._index);
  }

  /**
   * 特定のItemの取得
   * @method pickup
   * @param {number} index 取り出したいItemの番号
   * @return {Item}
   */
  pickup(index: number): Item {
    this._index = index;
    return this.getItemAt(index);
  }

  // 最初のItemを取得
  fast(): Item {
    this._index = 0;
    return this._list[0];
  }

  // 最後のItemを取得
  last(): Item {
    this._index = this._list.length - 1;
    return this.pickup(this._list.length - 1);
  }

  // shuffleとの違いは連続して同じ物が出る事があるということ(0->2->2->3とかね)
  random(): Item {
    const r: number = Math.floor(Math.random() * this._list.length);
    return this.pickup(r);
  }

  /**
   * shuffle   randomとの違いは連続して同じ物が出ないということ
   * @method shuffle
   * @param {() => void} init シャッフル開始時のコールバック
   * @param {() => void} update シャッフル中のコールバック
   * @param {() => void} complete シャッフル終了時のコールバック
   * @return {Item}
   */
  shuffle(
    init?: () => void | undefined,
    update?: () => void | undefined,
    complete?: () => void | undefined
  ): Item {
    let i;
    let l;
    let clone;
    if (this.shuffleList === undefined) {
      if (init !== undefined) init();
      this.shuffleCount = 0;
      this.shuffleList = [];
      clone = ArrayUtils.copy(this._list);
      l = clone.length;
      for (i = 0; i < l; i++) {
        const r = Math.floor(Math.random() * clone.length);
        this.shuffleList[i] = clone[r];
        clone.splice(r, 1);
      }
    }

    const targetItem = this.shuffleList[this.shuffleCount];
    if (update !== undefined) update();
    if (this.shuffleCount >= this.length - 1) {
      if (complete !== undefined) complete();
      this.shuffleCount = -1;
      this.shuffleList = undefined;
    }
    this.shuffleCount++;
    let currentCount = 0;
    l = this._list.length;
    for (i = 0; i < l; i++) {
      if (targetItem === this._list[i]) {
        currentCount = i;
      }
    }
    return this.pickup(currentCount);
  }

  killShuffle(): void {
    this.shuffleList = undefined;
  }

  /**
   * アイテムを追加
   * @method getItemAt
   * @param {item} item 追加したいItem
   * @return {void}
   */
  addItem(item: Item): void {
    this.killShuffle(); // 追加したらシャッフルメソッドを初期化
    this._list[this._list.length] = item;
  }

  /**
   * アイテムを削除
   * @method getItemAt
   * @param {string} name 追加したいItem名
   * @return {void}
   */
  killItem(name: string): void {
    let isKilled = false;
    for (let i = 0; i < this._list.length; i++) {
      if (isKilled === false) {
        const tmpItem: Item = this._list[i];
        if (tmpItem.name == name) {
          isKilled = true;
          console.log(
            "listからID[ " + tmpItem.name + " ]の要素を削除しました。"
          );
          this._list.splice(i, 1);
          // killしたらカウントは初期値に戻る
          this._index = 0;
          this.killShuffle(); // 削除したらシャッフルメソッドを初期化
        }
      }
    }
    if (isKilled === false)
      console.log("指定したID[ " + name + " ]はlistに存在しませんでした。");
  }

  // アイテムを全削除
  allKillItem(): void {
    this._list = [];
    this._index = 0;
    this.killShuffle(); // 削除したらシャッフルメソッドを初期化
  }

  /**
   * アイテムを取得するだけ
   * @method getItemAt
   * @param {number} index 取り出したいItemの番号
   * @return {Item}
   */
  getItemAt(index: number): Item {
    return this._list[index];
  }

  // 現在のアイテムを取得
  currentItem(): Item {
    return this._list[this._index];
  }

  // 格納しているリストの長さ
  get length(): number {
    return this._list.length;
  }

  // 格納しているリストそのもの
  get list(): Array<Item> {
    return this._list;
  }

  // 現在のインデックス
  get index(): number {
    return this._index;
  }
}
