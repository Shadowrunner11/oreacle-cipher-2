import { compareStyles } from './DOMtools.js'

class ExpectObject {
  #value

  constructor(value){
    this.#value = value;
  }

  toBe(value){
    const diffs = [];

    if(!Object.is(this.#value, value))
      diffs.push({
        expected: value,
        found: this.#value
      });

    return diffs
  }

  /**
   * 
   * @param {Record<string, string>} value 
   */
  cssToHave(value, pseudo){
    return compareStyles(
      getComputedStyle(this.#value, pseudo), 
      value
    )
  }
}

export const expect = (value)=> new ExpectObject(value);
