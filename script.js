fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(data => {
        const bitcoinValue = data.BRL.buy;
        document.getElementById('bitcoinValue').textContent = `Valor da compra do Bitcoin em Reais: R$ ${bitcoinValue}`;
    })
    .catch(error => console.error('Erro:', error));