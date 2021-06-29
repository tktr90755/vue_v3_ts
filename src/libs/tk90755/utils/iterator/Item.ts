/**
 * Copyright 2021, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 *
 * @title tktr90755.utils.iterator.Item.ts
 * @author
 * @version 0.1.0
 * @update
 *
 */
export default class Item {
  private _content: () => void;
  private _name: string;

  constructor(content: () => void, name: string) {
    this._content = content;
    this._name = name;
  }
  
  get content(): () => void {
    return this._content;
  }
  get name(): string {
    return this._name;
  }
}
