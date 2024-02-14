 import './styles.css';
console.log('JavaScript is connected!');

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const pageUrl = this.getAttribute('href'); // Получаем URL страницы
    window.location.href = pageUrl; // Переходим на другую страницу
  });
});

// const img = document.createElement('img');
//   img.src = Image;
//   document.body.appendChild(img);
