export { $, $$ } from '../js/tools/utils.js'

export const compareStyles = (cssComputed, stylesPojo) => {
  const diffs = []

  for (const key in stylesPojo){
    const expectedValue = stylesPojo[key];

    const value = cssComputed.getPropertyValue(key);
    
    if(expectedValue !== value)
      diffs.push({expected: expectedValue, found: value});
  }

  
  return diffs
}
