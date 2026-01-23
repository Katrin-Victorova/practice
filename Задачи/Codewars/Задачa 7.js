// найти пропущенный элемент в 2-м массиве

let index;
function findMissing(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++){
    index = arr2.indexOf(arr1[i]);
    if(index > -1){
    arr2.splice(index, 1);
    console.log(arr2);
    } else {
    return arr1[i];
    }
  }
};