import { Cipher } from "./services/cipher.js"
import { $orThrows, $ } from "./tools/utils.js"

export function swapperElements(selector1, selector2, swapClass){
  /**
  * @type {[HTMLElement?, HTMLElement?]}
  */
  const [first, second] = [selector1, selector2].map(selector => $(selector))

  return()=>{
    first?.classList.add(swapClass)
    second?.classList.remove(swapClass)
  }
}

const hideNoContent = swapperElements('[data-hide]', '[data-show]', 'hidden')

/**
* @type { HTMLElement[] }
*/
const [
  actionsContainer,
  toCipher,
  result
] = ['[data-action="cipher"]', '[data-area]', '[data-result]']
  .map(selector => $orThrows(selector))


const defaultCipher = new Cipher()

const replace = (action, value, cipherInstance = defaultCipher)=>{
  if(action === 'cipher')
    return cipherInstance.cipher(value)

  if(action === 'decipher')
    return cipherInstance.decipher(value)

  throw new Error('Not supported')
}

actionsContainer.addEventListener('click', ({ target})=>{
  if(!(target instanceof HTMLButtonElement))
    return

  hideNoContent()

  const { value } = toCipher

  const action = target.getAttribute('data-button');

  result.textContent = replace(action, value);

})
