const searchContainer = document.querySelector('.search-container');
const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active')
    searchBar.focus()
})

// Toggle