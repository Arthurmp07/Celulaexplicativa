const items = document.querySelectorAll('.item');
const overlay = document.querySelector('.overlay');
const descriptionElement = document.getElementById('description');

items.forEach(item => {
    item.addEventListener('click', () => {
        const description = item.getAttribute('data-description');
        descriptionElement.textContent = description;

        items.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        overlay.style.display = 'flex';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});