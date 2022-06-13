const arr = [];

let elInput = document.querySelector('input[name=text]');

elInput.addEventListener('change', (elInput) => {
    let text = elInput.target.value;
    textStr = String(text);
    arr.push(textStr);
    elInput.target.value = '';
    render();
})

const render = () => {
    let html = '';
    arr.forEach((val) => {
        html = html + '<li>' + val + '</li>';
    });
    const rootEl = document.querySelector('.root');
    rootEl.innerHTML = html;
}
