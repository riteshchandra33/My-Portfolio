// GitHub Integration

// Function to fetch GitHub repositories
async function fetchGitHubRepos() {
    try {
        // Get GitHub username from config
        const username = userData.githubUsername;
        
        if (!username) {
            console.error('GitHub username not provided in config');
            return;
        }
        
        // Fetch repositories from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Display repositories
        displayRepos(repos);
        
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        displayFetchError();
    }
}

// Function to display repositories
function displayRepos(repos) {
    const projectsContainer = document.getElementById('projects-container');
    
    // Clear existing content (except the example project)
    projectsContainer.innerHTML = '';
    
    if (repos.length === 0) {
        projectsContainer.innerHTML = `
            <div class="no-projects">
                <p>No repositories found.</p>
            </div>
        `;
        return;
    }
    
    // Process and display each repository
    repos.forEach(repo => {
        // Skip forked repositories if desired
        // if (repo.fork) return;
        
        // Determine project category based on topics or language
        let category = 'other';
        if (repo.topics && repo.topics.length > 0) {
            if (repo.topics.includes('web') || repo.topics.includes('frontend') || repo.topics.includes('website')) {
                category = 'web';
            } else if (repo.topics.includes('mobile') || repo.topics.includes('android') || repo.topics.includes('ios')) {
                category = 'mobile';
            }
        } else if (repo.language) {
            const webLanguages = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'PHP'];
            const mobileLanguages = ['Swift', 'Kotlin', 'Java', 'Objective-C', 'Dart', 'Flutter'];
            
            if (webLanguages.includes(repo.language)) {
                category = 'web';
            } else if (mobileLanguages.includes(repo.language)) {
                category = 'mobile';
            }
        }
        
        // Create project card
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', category);
        
        // Create tags array
        const tags = [];
        if (repo.language) tags.push(repo.language);
        if (repo.topics && repo.topics.length > 0) {
            // Add up to 3 topics as tags
            repo.topics.slice(0, 3).forEach(topic => {
                if (!tags.includes(topic)) {
                    tags.push(topic);
                }
            });
        }
        
        // Format tags HTML
        const tagsHTML = tags.map(tag => `<span>${tag}</span>`).join('');
        
        // Determine project image based on repository name and topics
        const getProjectImage = (repo) => {
            // Get repository name in lowercase with special characters replaced by hyphens
            const repoName = repo.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
            // Remove any trailing hyphens that might be in the repo name
            const cleanRepoName = repoName.replace(/-+$/, '');
            const customScreenshotPath = `assets/project-screenshots/${cleanRepoName}.jpg`;
            
            // Determine appropriate fallback icon based on repo type
            let fallbackIcon = '<i class="fas fa-code"></i>';
            let fallbackText = 'Project';
            
            // Check repo name and topics to determine the most appropriate fallback
            const name = repo.name.toLowerCase();
            const topics = repo.topics || [];
            const language = repo.language || '';
            
            if (name.includes('data') || name.includes('analytics') || 
                topics.includes('data') || topics.includes('analytics') ||
                language === 'Python' || language === 'R') {
                fallbackIcon = '<i class="fas fa-chart-bar"></i>';
                fallbackText = 'Data Analytics';
            } else if (name.includes('web') || name.includes('site') ||
                topics.includes('web') || topics.includes('website') ||
                language === 'JavaScript' || language === 'HTML') {
                fallbackIcon = '<i class="fas fa-globe"></i>';
                fallbackText = 'Web Development';
            } else if (name.includes('database') || name.includes('sql') ||
                topics.includes('database') || language === 'SQL') {
                fallbackIcon = '<i class="fas fa-database"></i>';
                fallbackText = 'Database';
            }
            
            // Return image with appropriate fallback
            return `
            <div class="project-image custom-screenshot">
                <img src="${customScreenshotPath}" alt="${repo.name} Screenshot" 
                     onerror="this.onerror=null; this.parentNode.innerHTML='${fallbackIcon}<span>${fallbackText}</span>';"
                >
            </div>`;
        };
        
        // Create project card HTML
        projectCard.innerHTML = `
            ${getProjectImage(repo)}
            <div class="project-info">
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available'}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank"><i class="fab fa-github"></i> Code</a>
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                </div>
            </div>
        `;
        
        // Add project card to container
        projectsContainer.appendChild(projectCard);
    });
}

// Function to display fetch error
function displayFetchError() {
    const projectsContainer = document.getElementById('projects-container');
    
    // Display error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fetch-error';
    errorDiv.innerHTML = `
        <p>Failed to load GitHub repositories. Please check your internet connection and try again.</p>
        <button id="retry-fetch" class="btn primary-btn">Retry</button>
    `;
    
    projectsContainer.innerHTML = '';
    projectsContainer.appendChild(errorDiv);
    
    // Add retry button event listener
    document.getElementById('retry-fetch').addEventListener('click', fetchGitHubRepos);
}

// Function to create placeholder for project images
function createProjectImagePlaceholder() {
    // Create assets directory if it doesn't exist
    const assetsDir = document.createElement('div');
    assetsDir.style.display = 'none';
    assetsDir.innerHTML = `
        <img id="project-placeholder" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f3ff'/%3E%3Cpath d='M100,65 L130,115 L70,115 Z' fill='%234a6cf7' fill-opacity='0.5'/%3E%3Ccircle cx='140' cy='80' r='15' fill='%234a6cf7' fill-opacity='0.5'/%3E%3Ctext x='100' y='140' font-family='Arial' font-size='12' text-anchor='middle' fill='%234a6cf7'%3EProject Preview%3C/text%3E%3C/svg%3E" alt="Project Placeholder">
    `;
    document.body.appendChild(assetsDir);
    
    // Create assets directory and save the placeholder image
    // Note: In a real application, you would save this file to the assets directory
    // For this demo, we're using a data URL
}

// Initialize GitHub integration
document.addEventListener('DOMContentLoaded', function() {
    // Create project image placeholder
    createProjectImagePlaceholder();
    
    // Fetch GitHub repositories
    if (typeof userData !== 'undefined' && userData.githubUsername) {
        fetchGitHubRepos();
    }
});
