const form = document.querySelector("#formulario");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = e.target.querySelector("#peso").value;
    const height = e.target.querySelector("#altura").value;

    if (!weight || isNaN(weight)) {
        setResult('Peso inválido', false);
        return;
    }

    if (!height || isNaN(height)) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(Number(weight), Number(height));
    const imcLevel = getImcLevel(imc);

    const msg = `Seu IMC é ${imc} e você está com ${imcLevel}`;
    setResult(msg, true);
});

function getImc(weight, height)  {
    return (weight / height ** 2).toFixed(2);
}

function getImcLevel(imc) {
    if (imc >= 39.9) return "Obesidade Grau III";
    if (imc >= 35) return "Obesidade Grau II";
    if (imc >= 29.9) return "Obesidade Grau I";
    if (imc >= 24.9) return "Acima do peso";
    if (imc >= 18.5) return "Peso Normal";
    return "Abaixo do peso";
}

function setResult(msg, isValid) {
    const result = document.querySelector("#resultado");
    result.innerHTML = '';

    const p = document.createElement("p");

    if (isValid) {
        p.classList.add("paragrafo-resultado");
    } else {
        p.classList.add("bad");
    }

    p.innerHTML = msg;
    result.appendChild(p);
}
