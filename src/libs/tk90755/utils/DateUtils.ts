export default class DateUtils {
  constructor() {
    throw new Error("DateUtils is class only of static method.");
  }

  /**
   * date を unixtimeに変換する
   * @static
   * @method unixTime
   * @param {date} date 計りたい時刻
   * @type {int} unixtimeを整数値にして返す
   * @example 
    console.log(DateUtils.unixTime());
    console.log(DateUtils.unixTime(new Date( 2012, 11, 5, 3, 15, 30 ))); //1354644930000
   */
  static unixTime(date?: Date): number {
    date = date === undefined ? new Date() : date;
    const unixTime = date.getTime();
    return unixTime;
  }
}
