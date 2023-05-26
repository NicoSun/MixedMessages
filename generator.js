let adjArray = adjectives();
let nounArray = nouns();
let verbsArray = verbs();


function setMessage(elementID,message){
    document.getElementById(elementID).innerHTML = message;
}

function generateNewMessage(){
    let adjbNumber = Math.floor(Math.random()*adjArray.length);
    let nounNumber = Math.floor(Math.random()*nounArray.length);
    let verbNumber = Math.floor(Math.random()*verbsArray.length);

    let adj = adjArray[adjbNumber].toLowerCase();
    let noun = nounArray[nounNumber].toLowerCase();
    let verb = verbsArray[verbNumber].toLowerCase();

    setMessage("testField",`I ${verb} ${adj} ${noun}!`);
}


setMessage("message","Hello, click the button below!");
document.getElementById("messageGen").addEventListener("click",generateNewMessage);


// const reader = new FileReader();
// let verbs = reader.readAsText({"./words/verbs.txt"});















