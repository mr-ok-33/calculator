let input = document.getElementById("input");

function appendValue(val){
    input.value +=  val;
}

function clearInput(){
    input.value = "";
}
function backSpace(){
   input.value = input.value.slice(0,-1);
}

function calculate(){

    let inputvalue = input.value;

    try {
        
        if(!/^[0-9+\-*/%.]+$/.test(inputvalue)){
            throw new Error("Invalid");
        }
        let result = new Function("return " + inputvalue)();
        input.value = result;

    } catch (error) {
        input.value = "ERROR";
    }    

}


