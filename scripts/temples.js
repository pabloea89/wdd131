// Footer
const currentYear = new Date().getFullYear();
const lastModified= document.lastModified;

document.getElementById('currentyear').textContent = `${currentYear} | Pablo Acuna | Temples`;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// Hamburger Menu 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav'); 

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); 
    hamButton.classList.toggle('open'); 
});
