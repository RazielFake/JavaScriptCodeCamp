function diffArray(arr1, arr2) {
  arr1 = arr1.sort()
  arr2 = arr2.sort()
  let [n, m] = [0, 0]
  for(n;n<arr1.length;n++){
    for(m;m<arr2.length;){
      if(arr1[n]===arr2[m]){
        arr1.splice(n,1)
        arr2.splice(m,1)
        [n, m] = [0, 0]
      }else{
        m++
      }
    }
  }
  return arr1.concat(arr2);
}
