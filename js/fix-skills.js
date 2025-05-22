// Fix skills display
document.addEventListener('DOMContentLoaded', function() {
    // Wait for the skills to be populated
    setTimeout(function() {
        // Find all skill items
        const skillItems = document.querySelectorAll('.skill-item');
        const programmingSkills = document.getElementById('programming-skills');
        let javaFound = false;
        let linuxFound = false;
        let javascriptFound = false;
        
        // Check existing skills
        skillItems.forEach(item => {
            const nameElement = item.querySelector('h4');
            if (nameElement) {
                if (nameElement.textContent === 'Java') {
                    // Replace Java with JavaScript
                    nameElement.textContent = 'JavaScript';
                    javaFound = true;
                    
                    // Replace Java icon with JavaScript icon
                    const iconElement = item.querySelector('.skill-icon i');
                    if (iconElement) {
                        iconElement.className = 'fab fa-js-square';
                    }
                }
                
                if (nameElement.textContent === 'Linux') {
                    linuxFound = true;
                }
                
                if (nameElement.textContent === 'JavaScript') {
                    javascriptFound = true;
                }
            }
        });
        
        // If Linux not found, add it
        if (!linuxFound && programmingSkills) {
            const linuxSkill = document.createElement('div');
            linuxSkill.className = 'skill-item';
            linuxSkill.innerHTML = `
                <div class="skill-icon"><i class="fab fa-linux"></i></div>
                <h4>Linux</h4>
                <div class="skill-level">
                    <div class="skill-progress" style="width: 85%"></div>
                </div>
            `;
            programmingSkills.appendChild(linuxSkill);
        }
        
        // If JavaScript not found and Java wasn't replaced, add JavaScript
        if (!javascriptFound && !javaFound && programmingSkills) {
            const jsSkill = document.createElement('div');
            jsSkill.className = 'skill-item';
            jsSkill.innerHTML = `
                <div class="skill-icon"><i class="fab fa-js-square"></i></div>
                <h4>JavaScript</h4>
                <div class="skill-level">
                    <div class="skill-progress" style="width: 88%"></div>
                </div>
            `;
            programmingSkills.appendChild(jsSkill);
        }
    }, 500); // Wait 500ms for other scripts to run
});
