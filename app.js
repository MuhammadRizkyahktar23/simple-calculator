const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('reset')) {
            display.value = '';
        } else if (value === '=') {
            let expression = display.value.replace(/x/g, '*');
            try {
                display.value = eval(expression);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});