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
    console.log(ArrayUtils.inverse(["1","2","3","4","5","6","7","8","9"])); //["9", "8", "7", "6", "5", "4", "3", "2", "1"]
   */
  // static inverse(ary: any): Array<any> {
  //   const ret:Array<any> = new Array<any>();
  //   const len:number = ary.length;
  //   for (let i = 0; i < len; i++) {
  //     ret[i] = ary[len - 1 - i];
  //   }
  //   return ret;
  // }

  /**
   * Number型の配列を反転して返す
   * @static
   * @method inverse
   * @param {array} number 反転する配列
   * @return {array} number 配列を反転して返す
   * @example 
    console.log(ArrayUtils.inverseNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[9, 8, 7, 6, 5, 4, 3, 2, 1]
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
    console.log(ArrayUtils.inverseStrings(["1","2","3","4","5","6","7","8","9"])); //["9", "8", "7", "6", "5", "4", "3", "2", "1"]
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
    console.log(ArrayUtils.random(["1","2","3","4","5","6","7","8","9"]));
   */
  // static random(ary: Array<any>): any {
  //   return ary[(Math.random() * ary.length) >> 0] as any;
  // }

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
    console.log(ArrayUtils.isContains([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // true
    console.log(ArrayUtils.isContains([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
    console.log(ArrayUtils.isContains(["A", "B"], "A")); // true
    console.log(ArrayUtils.isContains(["A", "B"], "C")); // false
   */
  // static isContain(ary: Array<any>, value: any): any {
  //   return ary.indexOf(value) != -1;
  // }

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
}
