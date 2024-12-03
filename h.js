const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.classList.toggle('dark');
    });
});