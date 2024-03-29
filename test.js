

// Get references to the input fields
var input1 = document.getElementById("no1");
var input2 = document.getElementById("no2");

// Add event listeners to listen for changes in the input fields
input1.addEventListener("input", updateValues);
input2.addEventListener("input", updateValues);

// Function to update the values of n1 and n2
function updateValues() {
    n1 = input1.value;
    n2 = input2.value;
}
function add() {
    var result = parseInt(n1) + parseInt(n2);
    console.log(result);
    document.getElementById("result").innerText = result;
}function subtract() {
    var result = parseInt(n1) - parseInt(n2);
    console.log(result);
    document.getElementById("result").innerText = result;
}function multiply() {
    var result = parseInt(n1) * parseInt(n2);
    console.log(result);
    document.getElementById("result").innerText = result;
}function divide() {
    var result = parseInt(n1) / parseInt(n2);
    console.log(result);
    document.getElementById("result").innerText = result;
}



// // add = document.getElementById("add")
// // add.addEventListener("click",(n1,n2) =>{
   
//     // var result = parseInt(n1) + parseInt(n2)
//     // console.log(result)
//     // document.getElementById("result").innerText = result
    
// // }}
// function add() {
    
// let n1 = document.getElementById("no1").value
// let n2 = document.getElementById("no2").value
//     var result = parseInt(n1) + parseInt(n2)
//     console.log(result)
//     document.getElementById("result").innerText = result

// }

// function subtract() {
//     let n1 = document.getElementById("no1").value
//     let n2 = document.getElementById("no2").value
//     var result = parseInt(n1) - parseInt(n2)
//     console.log(result)
//     document.getElementById("result").innerText = result
// }

// function multiply() {
//     let n1 = document.getElementById("no1").value
//     let n2 = document.getElementById("no2").value
//     var result = parseInt(n1) * parseInt(n2)
//     console.log(result)
//     document.getElementById("result").innerText = result
// }

// function divide() {
//     let n1 = document.getElementById("no1").value
//     let n2 = document.getElementById("no2").value
//     var result = parseInt(n1) / parseInt(n2)
//     console.log(result)
//     document.getElementById("result").innerText = result
// }






