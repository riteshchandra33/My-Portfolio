// Script to prioritize specific projects in the first row
document.addEventListener('DOMContentLoaded', function() {
    // Wait for the projects to be loaded
    setTimeout(function() {
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) return;
        
        // Priority projects to be displayed in the first row
        const priorityProjects = [
            'Agentic-AI-for-Intelligent-Service-Ticket-Management-and-SLA-Compliance-Monitoring',
            'Diabetes-Dynamics',
            'Veggie-Mingle-Matching',
            'Insurance-Auto-Claims-Analysis',
            'Predicting-Credit-Card-Account-Cancellations',
            'Unveiling-Post-COVID-Job-Dynamics-in-NYC'
        ];
        
        // Get all project cards
        const projectCards = Array.from(projectsContainer.querySelectorAll('.project-card'));
        
        // Function to get project name from card
        function getProjectName(card) {
            const titleElement = card.querySelector('h3');
            return titleElement ? titleElement.textContent : '';
        }
        
        // Sort project cards based on priority
        projectCards.sort((a, b) => {
            const nameA = getProjectName(a);
            const nameB = getProjectName(b);
            
            // Check if project A is in priority list
            const indexA = priorityProjects.findIndex(name => nameA.includes(name) || name.includes(nameA));
            // Check if project B is in priority list
            const indexB = priorityProjects.findIndex(name => nameB.includes(name) || name.includes(nameB));
            
            // If both are in priority list, sort by their order in the priority list
            if (indexA >= 0 && indexB >= 0) {
                return indexA - indexB;
            }
            
            // If only A is in priority list, it comes first
            if (indexA >= 0) return -1;
            
            // If only B is in priority list, it comes first
            if (indexB >= 0) return 1;
            
            // Otherwise, keep original order
            return 0;
        });
        
        // Clear container and re-add cards in the new order
        projectsContainer.innerHTML = '';
        projectCards.forEach(card => {
            projectsContainer.appendChild(card);
        });
    }, 1000); // Wait 1 second for GitHub integration to load projects
});
