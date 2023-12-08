document.addEventListener("DOMContentLoaded", function() {
    const totalSumValue = document.querySelector('#total-sum-value');

    document.querySelector('.eraser').addEventListener("click", function() {
        location.reload();
    })

    let totalSum = 0.0;

    function sumTwoNumber(){
        var input1 = parseFloat(document.getElementById('number1').value);
        var input2 = parseFloat(document.getElementById('number2').value);
    
        if(!isNaN(input1) && !isNaN(input2)){
            var result = input1 + input2;

            if(result > 90){
                totalSumValue.style.backgroundColor = "green";
                totalSumValue.style.color = "black";
            }else if(result >= 50 && result <= 90){
                totalSumValue.style.backgroundColor = "yellow";
                totalSumValue.style.color = "black";
            }else if(result < 50){
                totalSumValue.style.backgroundColor = "red";
                totalSumValue.style.color = "white";
            }
    
            document.getElementById('total-sum-value').textContent = 'The result is: ' + result;
        }
    }

    sumTwoNumber();
    console.log(totalSum);

    document.getElementById('number1').addEventListener('input', sumTwoNumber);
    document.getElementById('number2').addEventListener('input', sumTwoNumber);
})
