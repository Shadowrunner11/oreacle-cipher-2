import { defaultAluraDict } from "../config/cipher.js";
import { reversePojo, rexifyKeys } from "../tools/index.js";

export class Cipher{
  #dict
  #reversedDict
  #rexified
  #reverseRexified

  constructor(dict = defaultAluraDict){
    this.#dict = dict
    this.#reversedDict = reversePojo(dict)
    this.#rexified = rexifyKeys(dict, 'g')
    this.#reverseRexified = rexifyKeys(this.#reversedDict, 'g')
  }

  /**
   * @param {Record<string, string>} dict 
   * @param {RegExp} regexp 
   * @param {string} text 
   */
  #replace(text, dict, regexp){
    return text.replace(regexp, match => dict[match])
  }

  cipher(text){
    return this.#replace(text, this.#dict, this.#rexified)
  }

  decipher(text){
    return this.#replace(text, this.#reversedDict, this.#reverseRexified)
  }
}
