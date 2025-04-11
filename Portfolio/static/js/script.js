document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
      strings: [
        "Developer",
        "Designer",
        "Problem Solver",
        "ML Enthusiast",
        "Team Player"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|"
    });
  });

  // Enable Bootstrap Tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl);
});
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}


// skills

function filterSkills(category, btn) {
  const cards = document.querySelectorAll('.skill-card');
  document.querySelectorAll('.btn-group .btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  cards.forEach(card => {
    card.classList.add('fadeOut');
    setTimeout(() => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
        card.classList.remove('fadeOut');
      } else {
        card.style.display = 'none';
      }
    }, 200);
  });
}
  
// projects

  document.addEventListener("DOMContentLoaded", function () {
    // Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
  
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
  
