// Initialize the portfolio website
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // Check if userData exists
    if (typeof userData !== 'undefined') {
        console.log("userData found:", userData.name);
        
        // Update header and hero section
        document.getElementById('name').textContent = userData.name;
        document.getElementById('profession').textContent = userData.profession;
        document.getElementById('tagline').textContent = userData.tagline;
        
        // Update social links
        if (userData.social.github) {
            document.getElementById('github-link').href = userData.social.github;
            document.getElementById('footer-github').href = userData.social.github;
            if (document.getElementById('contact-github')) {
                document.getElementById('contact-github').textContent = userData.social.github.replace('https://', '');
            }
            if (document.getElementById('more-projects')) {
                document.getElementById('more-projects').href = userData.social.github;
            }
        }
        
        if (userData.social.linkedin) {
            document.getElementById('linkedin-link').href = userData.social.linkedin;
            document.getElementById('footer-linkedin').href = userData.social.linkedin;
            if (document.getElementById('contact-linkedin')) {
                document.getElementById('contact-linkedin').textContent = userData.social.linkedin.replace('https://', '');
            }
        }
        
        // Update about section
        document.getElementById('full-name').textContent = userData.fullName;
        document.getElementById('email').textContent = userData.email;
        document.getElementById('location').textContent = userData.location;
        document.getElementById('availability').textContent = userData.availability;
        document.getElementById('email-link').href = `mailto:${userData.email}`;
        
        // Update about description with bio
        if (userData.bio && document.getElementById('about-description')) {
            document.getElementById('about-description').textContent = userData.bio;
        }
        
        // Update contact section
        document.getElementById('contact-email').textContent = userData.email;
        document.getElementById('contact-location').textContent = userData.location;
        
        // Update footer
        document.getElementById('footer-name').textContent = userData.name;
        
        // Update resume section
        const experienceTimeline = document.getElementById('experience-timeline');
        const educationTimeline = document.getElementById('education-timeline');
        
        // Clear existing content
        experienceTimeline.innerHTML = '';
        educationTimeline.innerHTML = '';
        
        // Add experience items
        userData.resume.experience.forEach(exp => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-date">${exp.period}</div>
                <div class="timeline-content">
                    <h4>${exp.title}</h4>
                    <h5>${exp.company}</h5>
                    <p>${exp.description}</p>
                </div>
            `;
            experienceTimeline.appendChild(timelineItem);
        });
        
        // Add education items
        userData.resume.education.forEach(edu => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            // Create HTML content with explicit checks for each property
            let htmlContent = `
                <div class="timeline-dot"></div>
                <div class="timeline-date">${edu.period}</div>
                <div class="timeline-content">
                    <h4>${edu.degree}</h4>
                    <h5>${edu.institution}</h5>
            `;
            
            // Only add description if it exists
            if (edu.description) {
                htmlContent += `<p>${edu.description}</p>`;
            }
            
            htmlContent += `</div>`;
            timelineItem.innerHTML = htmlContent;
            educationTimeline.appendChild(timelineItem);
        });
        
        // Update skills section
        const programmingSkills = document.getElementById('programming-skills');
        const frameworkSkills = document.getElementById('framework-skills');
        const toolsSkills = document.getElementById('tools-skills');
        
        // Clear existing content
        programmingSkills.innerHTML = '';
        frameworkSkills.innerHTML = '';
        toolsSkills.innerHTML = '';
        
        // Add programming skills
        userData.skills.programming.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-icon"><i class="${skill.icon}"></i></div>
                <h4>${skill.name}</h4>
                <div class="skill-level">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            `;
            programmingSkills.appendChild(skillItem);
        });
        
        // Add framework skills
        userData.skills.frameworks.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-icon"><i class="${skill.icon}"></i></div>
                <h4>${skill.name}</h4>
                <div class="skill-level">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            `;
            frameworkSkills.appendChild(skillItem);
        });
        
        // Add tools skills
        userData.skills.tools.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-icon"><i class="${skill.icon}"></i></div>
                <h4>${skill.name}</h4>
                <div class="skill-level">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            `;
            toolsSkills.appendChild(skillItem);
        });
        
        console.log("Portfolio data updated successfully");
    } else {
        console.error("userData not found");
    }
});
