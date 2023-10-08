const btn = document.getElementById("button");
const result = document.getElementById("result");
btn.addEventListener('click', show);
result.innerHTML = " ";

function refresh(){
    document.querySelector('#input').value = " ";
}

function show(){
    const input = document.querySelector('#input').value;
    let inputVal = input.split(" ").join("");
    let polyndrome = "";
    /* or
    input.replace(" ", "") 
    */
    if(input == 0 || input == ""){
        result.style.color = "red";
        result.innerHTML = "Invalid, Please type Something.";
    }

    else if(inputVal.length<2){
        result.style.color = "red";
        result.innerHTML = "it's a Single letter. Please enter more.";
    }
    else if(Number(inputVal)){
        result.style.color = "red";
        result.innerHTML = "Please enter a word or a Statement.";
    }

    else{
        for(let i=(inputVal.length-1); i>=0; i--){
        polyndrome += inputVal[i];
        console.log(polyndrome);
        }
        if(inputVal === polyndrome){
        result.style.color = "lightgreen";
        result.innerText = "Yeah, this is a Palyndrome.";
        }
        else{
        result.style.color = "red";
        result.innerHTML = "Oh No!, this is not a Palyndrome.";
        }
    }
}    
