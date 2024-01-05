function addProject() {
    // Get project details from the form
    var projectName = document.getElementById('projectName').value;
    var projectDescription = document.getElementById('projectDescription').value;
    console.log(projectName);
    // Validate if project name and description are not empty
    if (projectName && projectDescription) {
        // Create a new project element
        var projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `<h3>${projectName}</h3><p>${projectDescription}</p>`;

        // Append the project to the Projects View section
        document.getElementById('projectsView').appendChild(projectElement);

        // Clear the form fields
        document.getElementById('projectName').value = '';
        document.getElementById('projectDescription').value = '';
    } else {
        alert('Please fill in both project name and description.');
    }
}
