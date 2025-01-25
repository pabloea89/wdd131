const currentYear = new Date().getFullYear();
const lastModified= document.lastModified;

document.getElementById('currentyear').textContent = `${currentYear} | Pablo Acuna | Argentina`;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;