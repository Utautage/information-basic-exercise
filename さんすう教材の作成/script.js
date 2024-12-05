document.addEventListener("DOMContentLoaded", () => {
    const question = document.getElementById("question");
    const submit = document.getElementById("submit");
    const change = document.getElementById("change");
    let dividend, divisor, quotient, remainder;
    function changeQuestion() {
        dividend = Math.floor(90 * Math.random()) + 10;
        divisor = Math.floor(90 * Math.random()) + 10;
        remainder = dividend % divisor;
        quotient = (dividend - remainder) / divisor;
        question.innerHTML = `${dividend} ÷ ${divisor} = ?`;
    }
    submit.addEventListener("click", () => {
        if (parseInt(document.input.quotient.value) === quotient && parseInt(document.input.remainder.value) === remainder) {
            alert("正解！");
        } else {
            alert(`不正解、答えは${quotient}あまり${remainder}です`);
        }
    });
    change.addEventListener("click", () => {
        changeQuestion();
        document.input.quotient.value = 0;
        document.input.remainder.value = 0;
    });
    changeQuestion();
});
