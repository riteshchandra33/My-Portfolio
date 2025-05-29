// User Data Configuration
const userData = {
    // Personal Information
    name: "Ritesh Somashekar",
    fullName: "Ritesh Somashekar",
    profession: "Data Engineer",
    tagline: "Passionate about creating elegant solutions to complex problems",
    email: "ritesh.chandra33@gmail.com",
    location: "Washington DC, USA",
    availability: "Open for  Full-Time Roles",
    bio: "Seasoned Data Engineer and Business Analyst with 4 years of hands-on experience in designing and optimizing robust ETL pipelines, data quality frameworks, and advanced analytics solutions across the healthcare and academic sectors. Proven expertise in Python, SQL, AWS, and industry-leading tools like Microsoft PowerPlatform, Informatica, Tableau, JIRA and Precisely platforms. Adept at leveraging data visualization tools such as Tableau and Power BI to transform complex datasets into strategic insights. Demonstrated success in automating workflows, enhancing data-driven decision-making, and delivering actionable business intelligence through cross-functional collaboration and innovative data solutions.",
    
    // Social Media Links
    social: {
        github: "https://github.com/riteshchandra33",
        linkedin: "https://www.linkedin.com/in/ritesh-somashekar-0497aa182/",
    },
    
    // GitHub Username for API Integration
    githubUsername: "riteshchandra33",
    
    // Resume Information
    resume: {
        experience: [
            {
                title: "Graduate Research Assistant",
                company: "Costello College of Business - George Mason University",
                period: "August 2024 - Present",
                description: "I designed and implemented Python and R-based algorithms to analyze social cohesion and community coping behaviors during disaster scenarios, leveraging large-scale real-world datasets. Through graph-based analytics, I uncovered key patterns of interaction, revealing that 62% of communities exhibited cohesive behaviors, while 18% demonstrated skeptical or distrustful tendencies in the wake of crises. Utilizing ensemble machine learning models, I forecasted behavioral trends with an RMSE of 0.89, capturing over 87% variance in community response patterns. Visual insights, built using R and Tableau, were instrumental in helping stakeholders identify actionable priorities and enhance strategic planning."
            },
            {
                title: "Data Engineer",
                company: "Carelon Global Solutions(Elevance Health)",
                period: "May 2022 - August 2023",
                description: "I architected and automated over 20 end-to-end ETL pipelines for healthcare analytics as part of projects like Edward Profiling and Invoice Balancing Optimization, using Python, SQL, AWS (S3, Redshift, Athena), and Informatica PowerCenter. These pipelines improved data delivery time by 70% and reduced manual intervention by 90%, accelerating insights for both provider and consumer analytics teams.In the Edward Profiling project, I developed Python-based data quality scripts and SQL optimizations that boosted data validation efficiency by 60%, directly reducing error propagation in downstream dashboards. Additionally, I built scalable web crawlers to ingest and parse over 400,000 structured and semi-structured healthcare reports (XML/JSON), which enhanced data coverage and drove a 3x improvement in report processing throughput. By integrating Precisely (Assure, Data360) with automated triggers and dashboard refresh cycles, I improved operational consistency and enabled real-time visibility for stakeholders. My Tableau and Power BI dashboards translated raw provider data into clear insights, supporting root cause analysis, SLA adherence, and proactive anomaly detection in performance metrics — all contributing to a 25% improvement in data-driven decision accuracy across partner teams."
            },
            {
                title: "Associate ETL Engineer",
                company: "Carelon Global Solutions(Elevance Health)",
                period: "October 2020 - April 2022",
                description: "As part of the Seven Plus Locations project within the Precisely DATA360 ecosystem, I led efforts to streamline data profiling and automate exploratory data analysis (EDA) workflows for multiple hospital networks spanning 7+ regions. The core business use case was to enable data-driven clinical operations and regulatory reporting by reducing manual analysis and improving the consistency of record-keeping. For clients such as ABAF (Advanced Behavioral Analytics Facility) and Inventory Management Teams I built and deployed Python-based data pipelines that integrated disparate health record systems and standardized outputs for Tableau and Power BI dashboards. These visual tools provided real-time access to KPIs such as readmission risk, regional inventory gaps, and care coordination efficiency. I developed custom algorithms to automate medical invoice reconciliation — a critical need for finance teams within payer-provider networks. This solution improved claims balancing accuracy by 70% and reduced invoice-related error rates by over 40%, saving hundreds of hours of manual cross-checking and ensuring better SLA compliance with CMS and private insurers."
            }
        ],
        education: [
            {
                degree: "Master of Science in Data Analytics and Engineering",
                institution: "George Mason University",
                period: "August 2023 - May 2025",
                description: "Graduated with honors. The coursework focused on Analytics and Decision Analysis, Business Analytics, Data Mining, Viz using Tableau, Advanced Machine Learning, Neural Networks, Natural Language Processing, Applied Statistics"
            },
            {
                degree: "Bachelor of Science in Information Science and Engineering",
                institution: "Visvesvaraya Technological University",
                period: "August 2016 - september 2020",
                description: "Graduated with honors. The coursework focused on Machine Learning, Database Management Systems, Data Science Foundations, Python and Java Programming."
            }
        ]
    },
    
    // Skills
    skills: {
        programming: [
            { name: "Python", icon: "fab fa-python", level: 95 },
            { name: "JavaScript", icon: "fab fa-js-square", level: 88 },
            { name: "PySpark", icon: "fas fa-fire", level: 75 },
            { name: "R", icon: "fas fa-chart-line", level: 90 },
            { name: "Scala", icon: "fas fa-chart-line", level: 70 },
            { name: "SQL", icon: "fas fa-database", level: 92 },
            { name: "Linux", icon: "fab fa-linux", level: 85 }
        ],
        dataEngineering: [
            { name: "Data Analytics", icon: "fas fa-chart-bar", level: 95 },
            { name: "Data Profiling", icon: "fas fa-search", level: 90 },
            { name: "Data Warehousing", icon: "fas fa-warehouse", level: 88 },
            { name: "Data Quality Control", icon: "fas fa-warehouse", level: 88 },
            { name: "ETL", icon: "fas fa-exchange-alt", level: 95 },
            { name: "Git", icon: "fab fa-git-alt", level: 92 },
            { name: "Machine Learning", icon: "fas fa-brain", level: 85 },
            { name: "Web Scraping", icon: "fas fa-spider", level: 90 }
        ],
        tools: [
            { name: "Power BI", icon: "fas fa-chart-pie", level: 90 },
            { name: "Tableau", icon: "fas fa-table", level: 92 },
            { name: "Databricks", icon: "fas fa-bolt", level: 88 },
            { name: "Apache Airflow", icon: "fas fa-bolt", level: 88 },
            { name: "Precisely Assure", icon: "fas fa-check-circle", level: 88 },
            { name: "Precisely Data360", icon: "fas fa-sync", level: 85 },
            { name: "AWS", icon: "fab fa-aws", level: 80 },
            { name: "JIRA", icon: "fab fa-jira", level: 85 },
            { name: "MongoDB", icon: "fas fa-leaf", level: 80 },
            { name: "Power Platform", icon: "fas fa-cogs", level: 82 }
        ]
    }
};

// Function to update page with user data
function updatePageWithUserData(data) {
    // Update header and hero section
    document.getElementById('name').textContent = data.name;
    document.getElementById('profession').textContent = data.profession;
    document.getElementById('tagline').textContent = data.tagline;
    
    // Update social links
    if (data.social.github) {
        document.getElementById('github-link').href = data.social.github;
        document.getElementById('footer-github').href = data.social.github;
        document.getElementById('contact-github').textContent = data.social.github.replace('https://', '');
        document.getElementById('more-projects').href = data.social.github;
    }
    
    if (data.social.linkedin) {
        document.getElementById('linkedin-link').href = data.social.linkedin;
        document.getElementById('footer-linkedin').href = data.social.linkedin;
        document.getElementById('contact-linkedin').textContent = data.social.linkedin.replace('https://', '');
    }
    
    // Update about section
    document.getElementById('full-name').textContent = data.fullName;
    document.getElementById('email').textContent = data.email;
    document.getElementById('location').textContent = data.location;
    document.getElementById('availability').textContent = data.availability;
    document.getElementById('email-link').href = `mailto:${data.email}`;
    
    // Update contact section
    document.getElementById('contact-email').textContent = data.email;
    document.getElementById('contact-location').textContent = data.location;
    
    // Update footer
    document.getElementById('footer-name').textContent = data.name;
    
    // Update resume section
    const experienceTimeline = document.getElementById('experience-timeline');
    const educationTimeline = document.getElementById('education-timeline');
    
    // Clear existing content
    experienceTimeline.innerHTML = '';
    educationTimeline.innerHTML = '';
    
    // Add experience items
    data.resume.experience.forEach(exp => {
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
    data.resume.education.forEach(edu => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${edu.period}</div>
            <div class="timeline-content">
                <h4>${edu.degree}</h4>
                <h5>${edu.institution}</h5>
                <p>${edu.description}</p>
            </div>
        `;
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
    data.skills.programming.forEach(skill => {
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
    
    // Add data engineering skills
    data.skills.dataEngineering.forEach(skill => {
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
    data.skills.tools.forEach(skill => {
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
}
