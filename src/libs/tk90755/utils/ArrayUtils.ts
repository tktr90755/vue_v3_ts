/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.utils.ArrayUtils.ts
 * @author
 * @version 0.1.0
 * @update
 */
export default class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils is class only of static method.");
  }

  /**
   * 配列から最大値を探す
   * @static
   * @method findMax
   * @param  {array} nums 数値を格納した配列
   * @return {number}
   * @example 
    console.log(ArrayUtils.findMax([110, 200, 100])); //200
   */
  static findMax(nums: Array<number>): number {
    return Math.max.apply(null, nums);
  }

  /**
   * 配列から最小値を探す
   * @static
   * @method findMin
   * @param  {array} nums 数値を格納した配列
   * @return {number}
   * @example 
    console.log(ArrayUtils.findMin([110, 200, 100])); //100
   */
  static findMin(nums: Array<number>): number {
    return Math.min.apply(null, nums);
  }

  /**
   * 配列をシャッフルして返す
   * @static
   * @method shuffle
   * @param {array} ary シャッフルする配列
   * @return {array} 配列をシャッフルして返す
   */
  // static shuffle(ary: any): Array<any> {
  //   return ary.sort(() => {
  //     return Math.random() - 0.5;
  //   });
  // }

  /**
   * Number型の配列をシャッフルして返す
   * @static
   * @method shuffleNumbers
   * @param {array} number シャッフルする配列
   * @return {array} number 配列をシャッフルして返す
   */
  static shuffleNumbers(ary: Array<number>): Array<number> {
    return ary.sort(() => {
      return Math.random() - 0.5;
    });
  }

  /**
   * String型の配列をシャッフルして返す
   * @static
   * @method shuffleNumbers
   * @param {array} string シャッフルする配列
   * @return {array} string 配列をシャッフルして返す
   */
  static shuffleStrings(ary: Array<string>): Array<string> {
    return ary.sort(() => {
      return Math.random() - 0.5;
    });
  }

  /**
   * 配列を反転して返す
   * @static
   * @method inverse
   * @param {array} ary 反転する配列
   * @return {array} 配列を反転して返す
   * @example 
    console.log(ArrayUtils.inverse<string>(["1","2","3","4","5","6","7","8","9"])); // ["9", "8", "7", "6", "5", "4", "3", "2", "1"]
    console.log(ArrayUtils.inverse<number>([1,2,3,4,5,6,7,8,9]));                   // [9, 8, 7, 6, 5, 4, 3, 2, 1]
    console.log(ArrayUtils.inverse<number|string>([1,2,"3",4,5,6,7,8,9]));          // [9, 8, 7, 6, 5, 4, "3", 2, 1]
   */
  static inverse<T>(ary: Array<T>): Array<T> {
    const ret: Array<T> = new Array<T>();
    const len: number = ary.length;
    for (let i = 0; i < len; i++) {
      ret[i] = ary[len - 1 - i];
    }
    return ret;
  }

  /**
   * Number型の配列を反転して返す
   * @static
   * @method inverse
   * @param {array} number 反転する配列
   * @return {array} number 配列を反転して返す
   * @example 
    console.log(ArrayUtils.inverseNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])) //[9, 8, 7, 6, 5, 4, 3, 2, 1]
   */
  static inverseNumbers(ary: Array<number>): Array<number> {
    const ret: Array<number> = new Array<number>();
    const len: number = ary.length;
    for (let i = 0; i < len; i++) {
      ret[i] = ary[len - 1 - i];
    }
    return ret;
  }

  /**
   * String型の配列を反転して返す
   * @static
   * @method inverse
   * @param {array} string 反転する配列
   * @return {array} string 配列を反転して返す
   * @example 
    console.log(ArrayUtils.inverseStrings(["1","2","3","4","5","6","7","8","9"])) //["9", "8", "7", "6", "5", "4", "3", "2", "1"]
   */
  static inverseStrings(ary: Array<string>): Array<string> {
    const ret: Array<string> = new Array<string>();
    const len: number = ary.length;
    for (let i = 0; i < len; i++) {
      ret[i] = ary[len - 1 - i];
    }
    return ret;
  }

  /**
   * 配列からランダムな値を返す
   * @static
   * @method random
   * @param {array} ary 値を返す配列
   * @return {any} ランダムな値
   * @example 
    console.log(ArrayUtils.random<string>(["1","2","3","4","5","6","7","8","9"]))
    console.log(ArrayUtils.random<number>([1,2,3,4,5,6,7,8,9]))
    console.log(ArrayUtils.random<number|string>([1,2,"3",4,5,6,7,8,9]))
   */
  static random<T>(ary: Array<T>): T {
    return ary[(Math.random() * ary.length) >> 0];
  }

  /**
   * Number型の配列からランダムな値を返す
   * @static
   * @method random
   * @param {array} ary 値を返す配列
   * @return {any} ランダムな値
   * @example 
    console.log(ArrayUtils.random([1,2,3,4,5,6,7,8,9]));
   */
  static randomNumber(ary: Array<number>): number {
    return ary[(Math.random() * ary.length) >> 0] as number;
  }

  /**
   * String型の配列からランダムな値を返す
   * @static
   * @method random
   * @param {array} ary 値を返す配列
   * @return {any} ランダムな値
   * @example 
    console.log(ArrayUtils.random([1,2,3,4,5,6,7,8,9]));
   */
  static randomString(ary: Array<string>): string {
    return ary[(Math.random() * ary.length) >> 0] as string;
  }

  /**
   * 配列に指定した要素を含んでいるかどうかを判定する
   * @static
   * @method isContain
   * @param {array} ary 判定用配列
   * @param {array} value ジャッジ
   * @return {boolean} 
   * @example 
    console.log(ArrayUtils.isContain<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // true
    console.log(ArrayUtils.isContain<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
    console.log(ArrayUtils.isContain<string>(["A", "B"], "A")); // true
    console.log(ArrayUtils.isContain<string>(["A", "B"], "C")); // false
    console.log(ArrayUtils.isContain<string|number>(["A", "B"], 99)); // false
   */
  static isContain<T>(ary: Array<T>, value: T): boolean {
    return ary.indexOf(value) != -1;
  }

  /**
   * Number型の指定した要素を含んでいるかどうかを判定する
   * @static
   * @method isContainInNumbers
   * @param {array} ary 判定用配列
   * @param {array} value ジャッジ
   * @return {boolean} 
   * @example 
    console.log(ArrayUtils.isContainInNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // true
    console.log(ArrayUtils.isContainInNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
   */
  static isContainInNumbers(ary: Array<number>, value: number): boolean {
    return ary.indexOf(value) != -1;
  }

  /**
   * String型の指定した要素を含んでいるかどうかを判定する
   * @static
   * @method isContainInStrings
   * @param {array} ary 判定用配列
   * @param {array} value ジャッジ
   * @return {boolean} 
   * @example 
    console.log(ArrayUtils.isContainInStrings(["A", "B"], "A")); // true
    console.log(ArrayUtils.isContainInStrings(["A", "B"], "C")); // false
   */
  static isContainInStrings(ary: Array<string>, value: string): boolean {
    return ary.indexOf(value) != -1;
  }

  /**
   * 配列のコピー
   * @static
   * @method isContainInStrings
   * @param {array} ary 判定用配列
   * @param {array} value ジャッジ
   * @return {boolean} 
   * @example 
    const arr:Array<string> = ["aaa","bbb"]
    console.log(ArrayUtils.copy(arr))
    const arr2:Array<string|number> = ["aaa",0]
    console.log(ArrayUtils.copy<string|number>(arr2))
   */
  static copy<T>(ary: Array<T>): Array<T> {
    const newArr = [];
    for (let i = 0; i < ary.length; i++) {
      newArr.push(ary[i]);
    }
    return newArr;
  }
}
