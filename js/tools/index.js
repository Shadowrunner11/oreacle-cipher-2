export const reversePojo = pojo => Object.keys(pojo).reduce((acm,key)=> {
  acm[pojo[key]] = key

  return acm
}, {})


export const rexifyKeys = (dict, options) => new RegExp(Object.keys(dict).join('|'), options)
