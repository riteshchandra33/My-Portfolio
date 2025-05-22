// Script to completely remove filter buttons
document.addEventListener('DOMContentLoaded', function() {
    // Remove filter buttons container if it exists
    const filterButtons = document.querySelector('.filter-buttons');
    if (filterButtons) {
        filterButtons.remove();
    }
    
    // Remove any filter buttons that might be dynamically added
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                const filterButtons = document.querySelector('.filter-buttons');
                if (filterButtons) {
                    filterButtons.remove();
                }
            }
        });
    });
    
    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Make sure all project cards are visible
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.display = 'block';
    });
});
