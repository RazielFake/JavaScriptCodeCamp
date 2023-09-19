function rot13(str) {
  let arr = str.split('')
  arr = arr.map(element=>
    element.charCodeAt(0)
  )
  for(let n=0;n<arr.length;n++){
    if(arr[n]===32 || arr[n]===33 || arr[n]===63 || arr[n]===46){
      continue
    }else if(arr[n]+13>90){
      arr[n] = 65 + ((arr[n]+13)-91)
    }else{
      arr[n]+=13
    }
  }
  arr = arr.map(element=>
    String.fromCharCode(element)
  ).join('')
  return arr;
}
