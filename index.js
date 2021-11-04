//1-1// Asal Sayı -Tekli Parametre
function asalMi(number){  
  if(number <= 1){
    return false;
  }
  for(let i=2; i<number-1; i++){
    if(number % i ===0){
      return false;
    }
  }
  return true;
}

asalMi(1);

//1-2// Asal Sayı -Çoklu Parametre
function asalMi2(...numbers){
  numbers.filter(num => {
    for(let i=2; i<num-1; i++){
      if(num % i === 0){
        return console.log("false for ",num);
      }      
    }
    return console.log("true for ",num);
  })
}

asalMi2(3,5,7,9);

//4// 1000 e kadar olan tüm asal sayıları listele -Tekli Parametre
function neKadarAsal(n){
  let arr1 = [];
  let arr2 = [];
  let x = 1;
  while(x < n+1){
    arr1.push(x);
    x++;
  }
  arr1.filter(num => {
    if(asalMi(num)){
      arr2.push(num);
    }
  });
  console.log("1 -",n, "arası Asal Sayılar: ");
  console.log(arr2);  
}

neKadarAsal(1000);

//3// 1000 e kadar Mükemmel Sayı -Tekli Parametre
function neKadarMukemmel(n){
  let x = 1;
  let arr1 = [];
  let arr2 = [];
  function mukemmelMi(num){
    if(num <= 0){
      return false;
    }
    let temp=0;
    for(let i=1; i <= (num/2); i++){
    if(num % i ===0){
      temp += i;
      }
    }
    if(temp === num){
      return true;
    } else {
      return false;
    }
  }
  while(x < n+1){
    arr1.push(x);
    x++;
  }
  arr1.filter(el => {
    if(mukemmelMi(el)){
      arr2.push(el);
    }
  });
  console.log("1 -",n, "arası Mükemmel Sayılar: ");
  console.log(arr2);
}

neKadarMukemmel(10000);

//2// Arkadaş Sayı İkilisi
function arkadasSayilarMi(number1, number2){
    function bolenlerinToplam(number){
    let total = 0;
    for(let i=1 ;i<number ;i++){
        if(number%i === 0) total += i
    }
    return total;
    }

    if(bolenlerinToplam(number1)=== number2 && bolenlerinToplam(number2)=== number1){ 
        return console.log(number1, " ve ", number2, " arkadastir.");
    } else {
        return console.log(number1, " ve ", number2, " arkadas degildir.");
    }    
}

arkadasSayilarMi(220,284);