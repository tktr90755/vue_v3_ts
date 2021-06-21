/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.utils.MathUtils.ts
 * @author
 * @version 0.1.0
 * @update
*/
export default class MathUtils {
  constructor() {
    throw new Error("MathUtils is class only of static method.");
  }

  /**
   * 値の符号化
   * numが正なら+1.0、0.0なら0.0、負なら-1.0を返す
   * @static
   * @method sign
   * @param  {number} num
   * @return {number} -1, 0, 1のいずれかの値
   * @example 
    console.log(MathUtils.sign(46));  //  1 
    console.log(MathUtils.sign(-34)); // -1
   */
  static sign(num: number): number {
    if (0 < num) {
      return 1;
    } else if (0 > num) {
      return -1;
    } else {
      return 0;
    }
  }

  /**
   * 小数点を取り出す
   * @static
   * @method fract
   * @param  {number} num
   * @return {number}
   * @example 
    console.log(MathUtils.fract(46.39)); //0.39
   */
  static fract(num: number): number {
    const value: number = num - Math.floor(num);
    return Math.floor(value * 100) / 100;
  }

  /**
   * 浮動小数点をカット(要修正)
   * @static
   * @method fract
   * @param  {number} num
   * @return {number}
   * @example 
    let i = 0;
    setInterval(() => {
      i += 0.1;
      console.log(MathUtils.omitFloat(i,1000));
    }, 100);
   */
  static omitFloat(num: number, digit: number): number {
    digit = isNaN(digit) === true ? 100 : digit;
    if (digit <= 0) throw new Error("digit is should be over 1.");
    return Math.floor(num * digit) / digit;
  }

  /**
   * 値の有効範囲を適用して返す
   * @static
   * @method clamp
   * @param {number} num 数値
   * @param {number} min 最小値
   * @param {number} max 最大値
   * @return {number} 有効範囲を適用した数値
   * @example 
    console.log(MathUtils.clamp(50,30,100));    //50
    console.log(MathUtils.clamp(0,30,100));     //30
    console.log(MathUtils.clamp(500,30,100));   //100
   */
  static clamp(num: number, min: number, max: number): number {
    return Math.max(Math.min(num, max), min);
  }

  /**
   * 階乗の計算
   * @static
   * @method factorial
   * @param {number} num 階乗数
   * @return {number}
   * @example 
    console.log(MathUtils.clamp(50,30,100));    //50
    console.log(MathUtils.clamp(0,30,100));     //30
    console.log(MathUtils.clamp(500,30,100));   //100
   */
  static factorial(num: number): number {
    let total = 1;
    while (num) {
      total = total * num;
      num -= 1;
    }
    return total;
  }

  /**
   * 範囲内に値があるか
   * @static
   * @method inRange
   * @param  {number} val 数値
   * @param  {number} min 最小値
   * @param  {number} max 最大値
   * @return {boolean}
   * @example 
    console.log(MathUtils.inRange(12,10,20)); //true
    console.log(MathUtils.inRange(21,10,20)); //false
   */
  static inRange(val: number, min: number, max: number): boolean {
    return val >= Math.min(min, max) && val <= Math.max(min, max);
  }

  /**
   * 正規化(0.0-1.0)
   * @static
   * @method normalize
   * @param  {number} val 正規化する値
   * @param  {number} min   最小値
   * @param  {number} max   最大値
   * @return {number}       正規化した値
   * @example 
    console.log(MathUtils.normalize(50,0,100)); //0.5
    console.log(MathUtils.normalize(21,10,20)); //1.1
   */
  static normalize(val: number, min: number, max: number): number {
    return (val - min) / (max - min);
  }
}
