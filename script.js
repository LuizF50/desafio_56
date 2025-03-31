document.getElementById('calcular').addEventListener('click', function() {
    const inputValor = document.getElementById('inputValor');
    const valorPrimeiroPlaneta = parseInt(inputValor.value);

    if (!isNaN(valorPrimeiroPlaneta)) {
        // CORREÇÃO: Inicializa corretamente os dois primeiros planetas
        // Planeta 1: valor de entrada
        // Planeta 2: quadrado do planeta 1 (conforme regra da sequência)
        let valores = [valorPrimeiroPlaneta, Math.pow(valorPrimeiroPlaneta, 2)];

        // Calcula planetas 3, 4 e 5
        for (let i = 2; i < 5; i++) {
            let valorAtual = Math.pow(valores[i-1], 2) + Math.pow(valores[i-2], 2);
            valores.push(valorAtual);
        }

        // Exibe o valor do quinto planeta (índice 4 no array)
        document.getElementById('resultado').innerText = `O valor do quinto planeta é: ${valores[4]}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor numérico válido.';
    }
});