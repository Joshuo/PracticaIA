const btnVerde = document.getElementById('btnVerde');
const btnRojo = document.getElementById('btnRojo');
const btnAzul = document.getElementById('btnAzul');

btnRojo.addEventListener('click', () => {
    
    
    document.body.style.backgroundColor = 'red';
});

btnVerde.addEventListener('click', () => {
    
    
    document.body.style.backgroundColor = 'green';
});

btnAzul.addEventListener('click', () => {
    
    
    document.body.style.backgroundColor = 'blue';
});