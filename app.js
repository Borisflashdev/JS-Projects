const colorBtn = document.getElementById('button-box');

const randomColorHandler = () => {
    const jolo = Math.random();
    if (jolo <= 0.2 && jolo > 0.1) {
        document.body.style.backgroundColor = 'green';
    } else if (jolo <= 0.3 && jolo > 0.2) {
        document.body.style.backgroundColor = 'red';
    } else if (jolo <= 0.4 && jolo > 0.3) {
        document.body.style.backgroundColor = 'blue';
    } else if (jolo <= 0.5 && jolo > 0.4) {
        document.body.style.backgroundColor = 'yellow';
    } else if (jolo <= 0.6 && jolo > 0.5) {
        document.body.style.backgroundColor = 'brown';
    } else if (jolo <= 0.7 && jolo > 0.6) {
        document.body.style.backgroundColor = 'purple';
    } else if (jolo <= 0.8 && jolo > 0.7) {
        document.body.style.backgroundColor = 'cyan';
    } else if (jolo <= 0.9 && jolo > 0.8) {
        document.body.style.backgroundColor = 'grey';
    } else if (jolo <= 1 && jolo > 0.9) {
        document.body.style.backgroundColor = 'pink';
    }
};

colorBtn.addEventListener('click', randomColorHandler);