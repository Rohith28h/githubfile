function sortNumbers() {
    
    let input = document.getElementById('numbersInput').value;     
    let numbers = input.split(',').map(Number);    
    numbers.sort((a, b) => a - b);
    document.getElementById('sortedNumbers').innerHTML = 'Sorted array: ' + numbers.join(', ');
}

function convertToLowerCase() {
    let input = document.getElementById('upperval').value;
    let val = input.toLowerCase(); 
    document.getElementById("Numbers").innerHTML = val;
}

function convertToUpperCase() {
    let input = document.getElementById('upperva').value;
    let val = input.toUpperCase(); 
    document.getElementById("Number").innerHTML = val;
}

 


 










   
  
 
 