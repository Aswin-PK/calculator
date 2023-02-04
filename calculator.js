// To select the display panels

const calculationpanel = document.getElementById("calculationpanel");
const resultpanel = document.getElementById("resultpanel");



// To display numbers and opertors on panel when user click button

function display(value){
    if(!isNaN(value)) 
    {
        // execute if the value is a number

        calculationpanel.value += value;
        resultpanel.value += value;
    }
    else{
        // if clicked an operator it should be displayed only in top panel and value in bottom panel will cleared

        calculationpanel.value += value;
        resultpanel.value = "";
    }
}



function Calculate(){
    // if equal operator pressed without any value in panel then display nothing
    if(calculationpanel.value == ""){
        calculationpanel.value =="";
        return;
    }
    try{
        // calculation of expression 

        resultpanel.value = eval(calculationpanel.value);
    }
    catch(err){
        alert("Invalid operation");
    }
}

// for clearing the panel values
function ClearAll(){
    calculationpanel.value = "";
    resultpanel.value = "";
}

// To delete value in panel one by one 
function DeleteOnebyOne(){
    calculationpanel.value = calculationpanel.value.slice(0, -1);
    resultpanel.value = resultpanel.value.slice(0, -1);
}