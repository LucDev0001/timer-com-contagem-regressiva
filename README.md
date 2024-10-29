# Timer com Contagem Regressiva

Este repositório contém um código JavaScript que implementa um timer com contagem regressiva, exibindo a contagem em formato digital e utilizando ponteiros de relógio para representar visualmente os minutos e segundos.

## Descrição

O projeto permite que o usuário defina uma quantidade específica de minutos e segundos. Quando o botão "Começar" é pressionado, o timer inicia a contagem regressiva. O timer é exibido tanto digitalmente quanto através de animações CSS que giram as mãos do relógio.

## Funcionalidades

- **Definição de Tempo**: O usuário pode selecionar minutos e segundos através de menus suspensos.
- **Contagem Regressiva**: Inicia uma contagem regressiva que atualiza a cada segundo.
- **Visualização Gráfica**: Utiliza CSS para rotacionar as mãos do relógio conforme o tempo avança.
- **Alerta Sonoro**: Um alerta sonoro é acionado quando o tempo se esgota.

## Estrutura do Código

### JavaScript

```javascript
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const digitalDisplay = document.getElementById('digital-display');

const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const comecar = document.getElementById('comecar');

let interval;

// Preenche os menus suspensos com opções de minutos e segundos
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
```

## Instruções de Uso

1. **Clone o Repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
   
2. **Abra o arquivo HTML** em um navegador para visualizar e interagir com o timer.

3. **Selecione os Minutos e Segundos** desejados e clique no botão "Começar" para iniciar a contagem regressiva.

4. **Escute o Alerta** quando a contagem chegar a zero.

## Requisitos

- Um navegador moderno com suporte a JavaScript e CSS.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
