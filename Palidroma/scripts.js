let word = prompt('Inserisci una parola'); 
console.log('La parola inserita dall utente è:', word)



function palindrome(str) {  
    
    let len = word.length;  
   
    for (let i = 0; i < len / 2; i++) {  
   
        if (word[i] !== word[len - 1 - i]) {  
            alert( 'Questa parola non è palindroma');  
        }  
     
        else {
            alert( 'Questa parola è palindroma');
        }  
    }
}  

let value = palindrome(word);  
    