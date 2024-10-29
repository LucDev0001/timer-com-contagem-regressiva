const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const digitalDisplay = document.getElementById('digital-display');

const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const comecar = document.getElementById('comecar');

let interval;

for (let i = 0; i <= 60; i++) {
    minutos.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 0; i < 60; i++) {
    segundos.innerHTML += `<option value="${i}">${i}</option>`;
}

comecar.addEventListener('click', function() {
    let minutoAtual = parseInt(minutos.value);
    let segundoAtual = parseInt(segundos.value);

    clearInterval(interval);
    interval = setInterval(function() {
        if (segundoAtual === 0) {
            if (minutoAtual === 0) {
                alert("Acabou!");
                document.getElementById("sound").play();
                clearInterval(interval);
                return;
            }
            minutoAtual--;
            segundoAtual = 59;
        } else {
            segundoAtual--;
        }

        const secondAngle = segundoAtual * 6; // 360° / 60 = 6° por segundo
        const minuteAngle = (minutoAtual * 60 + segundoAtual) * 0.1; // 360° / 3600 = 0.1° por segundo

        secondHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;

        digitalDisplay.innerHTML = `${minutoAtual < 10 ? '0' : ''}${minutoAtual}:${segundoAtual < 10 ? '0' : ''}${segundoAtual}`;
    }, 1000);
});