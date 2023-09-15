const simBtn = document.getElementById("sim");
const noBtn = document.getElementById("no");
const quiz = document.querySelector(".quiz");

simBtn.addEventListener("click", (e) => {
    const answerPositive = document.createElement("p");
    answerPositive.innerHTML = `Muito obrigado minha princesa!`
    quiz.appendChild(answerPositive);
})

noBtn.addEventListener("click", (e) => {
    if (confirm("Tem certeza???")) {
        if (confirm("Absoluta???")) {
            confirm("100%???")
            const answerNegative = document.createElement("p");
            answerNegative.innerHTML = `Vá pra merda!`
            quiz.appendChild(answerNegative);
        } 
    } 
});