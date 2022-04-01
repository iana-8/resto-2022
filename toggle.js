function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.nav-links');

    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}