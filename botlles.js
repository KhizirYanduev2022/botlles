

// function  generateSingleStanza(n) {
//     for(let n =99;n>=0;n--){
//       let  botl = ''
    
//         let res = n % 10
//          if(res === 1 && n!==11 ){ // botl 
//       botl = `${n} бутылка`
//         } else if (res>=2 && res <= 4 && !(n>12 &&  n <= 14)){
//         botl = `${n} бутылки` 
//         } else{
//          botl = `${n}  бутылок`

//         }
//         /////\
//          }
     

        
//     console.log(`${botl}  пива на стене, ${botl} пива,Возьми одну, пусти по кругу, ${n-=1} пива на стене`)
     
//     }


// generateSingleStanza(99)



function  generateSingl(n){
   
    let botl = ''
    if((5 <= n % 10) && (n % 10 <= 10)){
        botl = (`${n} бутылок`)
    } else if ((2 <= n % 10)&&(n%10 <= 5)){
        botl = (`${n} бутылки`)
    } else if (n==1){
        botl = (`${n} бутылка`)
    }else if (n % 10 === 0 ){
        botl = (`${n} бутылок`)
    } else if (4 < n && n < 21){
        botl = (`${n} бутылок`)
    } else if (1 === n % 10){
        botl = (`${n} бутылка`)
    } 
    
    
    return botl
}
  function generate(n) {
    for (let i = 1; i <=n; n--){
       if(n===1){
        console.log(`${generateSingl(n)} пива на стене, ${generateSingl(n)} пива, 
        Возьми одну, пусти по кругу, нет бутылок на стене`)
       } else{
        console.log(`${generateSingl(n)} пива на стене, ${generateSingl(n)} пива, 
        Возьми одну, пусти по кругу,  ${generateSingl(n-1)} пива на стене, нет бутылок на стене`)
       
       }
       
    }
}

generate(99)
