const inputField = document.getElementById("inputField")
const countButtonLuas = document.getElementById("countButtonLuas")
const countButtonKeliling = document.getElementById("countButtonKeliling")

inputField.addEventListener('input', function(){
    var inputValue = inputField.value.trim();
    console.log(inputValue);
    if(validateInteger(inputValue)){
        countButtonKeliling.disabled = false;
        countButtonLuas.disabled = false;
    } else {
        countButtonLuas.disabled = true;
        countButtonKeliling.disabled = true;
    }
})

countButtonKeliling.addEventListener('click',function(){
    var inputValue = inputField.value.trim();
    var KelilingResult = inputValue * 4;
    document.getElementById('hasil-hitung').innerHTML = "K = 4 x S <br> Hasil Keliling = " + KelilingResult;
    console.log(KelilingResult);
})

countButtonLuas.addEventListener('click',function(){
    var inputValue = inputField.value.trim();
    var LuasResult =  inputValue * inputValue;
    document.getElementById('hasil-hitung').innerHTML = "L = S x S <br> Hasil Luas = " + LuasResult;
    console.log(LuasResult);
})

resetButton.addEventListener('click',function(){
    document.getElementById('hasil-hitung').innerHTML = "";
    document.getElementById('inputField').value = "";
    countButtonLuas.disabled = true;
    countButtonKeliling.disabled = true;
})

function validateInteger(inputValue){
    const integerRegex = /^-?\d+$/
    return integerRegex.test(inputValue)
}