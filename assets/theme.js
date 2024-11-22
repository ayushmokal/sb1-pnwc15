// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Search functionality
  const searchButton = document.querySelector('.site-header__search');
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      // Implement search functionality
    });
  }

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.site-header__mobile-nav');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      document.body.classList.toggle('mobile-menu-open');
    });
  }
});