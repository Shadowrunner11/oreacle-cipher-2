/**
* @param {string} selector
* @param {Element} node
*/
export const $ = (selector, node = document.body)=> node.querySelector(selector);

/**
* @param {string} selector
* @param {Element} node
*/
export const $$ = (selector, node = document.body) => [...node.querySelectorAll(selector)];

export const $orThrows = (selector, node = document.body) => {
  const result = $(selector, node)

  if(!result)
    throw new Error(`Element ${selector} not found`)

  return result
}
