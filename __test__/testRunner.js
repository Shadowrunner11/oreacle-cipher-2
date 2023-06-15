/**
* @param {string} name
* @param {()=> {expected: string; found: string}[]} cb
*/
export function test(name, cb, isOn = true){
  if(!isOn)
    return
  const diffs = cb();
  
  console.log(
    `%c${diffs.length? 'Failed': 'Passed'}`,
    `background-color: ${diffs.length?  'red': 'green'}`,
    name
  )

  
  for(const { expected, found } of diffs){
    console.log('expected');
    console.log(`%c${expected}`, 'color: green');

    console.log('found');
    console.log(`%c${found}`, 'color: red');
  }
  
}
