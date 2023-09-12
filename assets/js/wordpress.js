fetch('assets/data/projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('projectsContainer');
        
        projects.forEach(project => {
            const fullLink = `https://${project.title}`;
            const updatedDescription = project.description.replace(/(([\da-z\.-]+)\.(lv|com))/gi, function(match) {
				return `<a href="https://${match}">${match}</a>`;
			});

            const projectHTML = `
                <h3>${project.title}</h3>
                <span class="image main"><img src="${project.image}" alt="" /></span>
                <p><a href="${fullLink}">${project.title}</a> ${updatedDescription}</p>
            `;
            container.innerHTML += projectHTML;
        });
    })
    .catch(error => {
        console.error("Kļūda ielādējot projektus:", error);
    });