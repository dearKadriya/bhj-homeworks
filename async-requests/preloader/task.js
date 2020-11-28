let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let loader = document.getElementById('loader');
        loader.classList.remove('loader_active');
        const responseJson = JSON.parse(xhr.responseText);
        let valute = responseJson.response.Valute;
        for(var elem in valute) {
            parseCurrency(valute[elem]);
        }

    }
};

function parseCurrency(elem) {
    let exchangeRate = document.getElementById('items');
    let item = document.createElement('div');
    item.classList.add('item');
    exchangeRate.appendChild(item);
    let itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.innerText = elem.CharCode;
    item.appendChild(itemCode);
    let itemValue = document.createElement('div');
    itemValue.classList.add('item__value')
    itemValue.innerText = elem.Value;
    item.appendChild(itemValue);
    let itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.innerText = 'руб.';
    item.appendChild(itemCurrency);
}