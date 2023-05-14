console.log('Hello world!');

const but = document.querySelector('header > button');
const banner = document.querySelector('.banner');


setTimeout(() => {
    banner.style.visibility = 'unset';
    banner.style.position = 'fixed';
    document.querySelector('.allScreen').style.visibility = 'unset';
}, 20000);

document.querySelector('.banner > div > img').addEventListener('click', () => {
    banner.style.visibility = 'hidden';
    document.querySelector('.allScreen').style.visibility = 'hidden';
})