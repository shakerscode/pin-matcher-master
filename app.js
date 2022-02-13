// function gettingPinNumber(){
//     const pin = Math.round(Math.random() * 10000) ;
//     const pinString = pin + '';
//     if(pinString.length == 4){
//         return pin; 
//     }
//     else{
//         return gettingPinNumber();
//     }
// }

// function getPin(){
//    const pin = gettingPinNumber();
//    document.getElementById('displaying-pin').value = pin;
// }

// document.getElementById('key-pad').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     const inputNumber = document.getElementById('displaying-num');
//     if(isNaN(number)){
//         if(number == 'C'){
//             inputNumber.value = '';
//         }
//         if(number == '<'){
              
//         }
//     }
//     else{
//         const previousNum = inputNumber.value;
//         const newNumber = previousNum + number;
//         inputNumber.value = newNumber;
//     }
 
// })
// document.getElementById('submit-btn').addEventListener('click', function(){
//         const pinNum = document.getElementById('displaying-pin').value;
//         const displayPin = document.getElementById('displaying-num').value;     
//         const successNotif = document.getElementById('match-success');
//         const faildNotif = document.getElementById('match-failed');
        
//         if(pinNum == displayPin){
//             successNotif.style.display = 'block';
//             faildNotif.style.display = 'none';
            
//         }
//         else{
//             faildNotif.style.display = 'block';
//             successNotif.style.display = 'none';
//         }
// })


