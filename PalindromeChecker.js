function palindrome(str) {
  str = str.replace(/[ ,._:\()-/]/g,'')
  str = str.replace('|','').toLowerCase()
  let arr = str.split('')
  let m = arr.length-1
  for(let n=0;n<arr.length;n++){
    if(arr[n]!==arr[m]){
      return false
    }
    m--
  }
  return true;
}
