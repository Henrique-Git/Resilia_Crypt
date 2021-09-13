function changeRadioBase64(){
    let caesar = document.getElementById('caesar');
    let base64 = document.getElementById('base64');
    let increment = document.getElementById('increment');

    if(base64.checked == true){
        caesar.checked = false;
        increment.style.display = 'none';   
    }
}

function changeRadioCaesar(){
    let caesar = document.getElementById('caesar');
    let base64 = document.getElementById('base64');
    let increment = document.getElementById('increment');

    if(caesar.checked == true){
        base64.checked = false;
        increment.style.display = 'block';
    }    
}

function changeRadioCrypt(){
    let crypt = document.getElementById('crypt');
    let decrypt = document.getElementById('decrypt');
    let button = document.querySelector('.button');

    if(crypt.checked == true){
        decrypt.checked = false;
        button.setAttribute('onclick', 'crypt()');
        button.innerHTML = 'Crypt <i class="fas fa-lock"></i>';   
    }
}

function changeRadioDecrypt(){
    let crypt = document.getElementById('crypt');
    let decrypt = document.getElementById('decrypt');
    let button = document.querySelector('.button');

    if(decrypt.checked == true){
        crypt.checked = false;
        button.setAttribute('onclick', 'decrypt()');
        button.innerHTML = 'Decrypt <i class="fas fa-unlock"></i>';
    }    
}

function crypt(){
    let caesar = document.getElementById('caesar');
    let base64 = document.getElementById('base64');
    let takeInput = document.getElementById('baseText');
    let cryptText = document.getElementById('returnText');

    let text = takeInput.value;

    if(caesar.checked == true){
        let takeIncrement = document.getElementById('increment');

        let inc = parseInt(takeIncrement.value);

        let newArray = text.split('');

        for(let i=0; i<newArray.length; i++){
            if(newArray[i] != ' '){

                var upperFormula = ((newArray[i].charCodeAt(0) - 65 + inc) % 26) + 65;
                var lowerFormula = ((newArray[i].charCodeAt(0) - 97 + inc) % 26) + 97;

                if(newArray[i].charCodeAt(0) >= 65 && newArray[i].charCodeAt(0) <= 90){
                    newArray[i] = String.fromCharCode(upperFormula);
                }
                else if(newArray[i].charCodeAt(0) >= 97 && newArray[i].charCodeAt(0) <= 122){
                    newArray[i] = String.fromCharCode(lowerFormula);
                }
            }    
        }
        cryptText.value = newArray.join('');
    }
    
    else if(base64.checked == true){
        let crypted = window.btoa(text);

        cryptText.value = crypted;
    }
}

function decrypt(){
    let caesar = document.getElementById('caesar');
    let base64 = document.getElementById('base64');
    let takeInput = document.getElementById('baseText');
    let cryptText = document.getElementById('returnText');
    
    let text = takeInput.value;
    
    if(caesar.checked == true){

        let takeIncrement = document.getElementById('increment');

        let inc = parseInt(takeIncrement.value);

        let newArray = text.split('');

        for(let i=0; i<newArray.length; i++){
            if(newArray[i] != ' '){

                var upperFormula = ((newArray[i].charCodeAt(0) - 65 - inc) % 26) + 65;
                var lowerFormula = ((newArray[i].charCodeAt(0) - 97 - inc) % 26) + 97;

                if(newArray[i].charCodeAt(0) >= 65 && newArray[i].charCodeAt(0) <= 90){
                    newArray[i] = String.fromCharCode(upperFormula);
                }
                else if(newArray[i].charCodeAt(0) >= 97 && newArray[i].charCodeAt(0) <= 122){
                    newArray[i] = String.fromCharCode(lowerFormula);
                }
            }    
        }
        cryptText.value = newArray.join('');
    }

    else if(base64.checked == true){
        let crypted = window.atob(text);

        cryptText.value = crypted;
    }   
}

