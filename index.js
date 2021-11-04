//1-1// Asal Sayı
function asalMi(number){
  for(let i=2; i<number-1; i++){
    if(number % i ===0){
      return false;
    }
  }
  return true;
}

asalMi(19);

//1-2// Asal Sayı
function asalMi2(...numbers){
  numbers.filter(num => {
    for(let i=2; i<num-1; i++){
      if(num % i === 0){
        return console.log("false for ",num);
      }      
    }
    return console.log("true for ",num)
  })
}

asalMi2(3,5,7,9);