function arrayDiff(a, b) {
  
    let res = []
    
    a.forEach(x => {
      let found = b.indexOf(x)
      if (found==-1) {
        res.push(x)
      }
    })
    
    return res
  }
  
  let result = arrayDiff([3,4], [3], [4])
  console.log(result)