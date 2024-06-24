var   connection_url_get='https://sheets.googleapis.com/v4/spreadsheets/1o3moGN4MT1oTr9bCt51r5CvDaIIuE8PImzHDyCcbNxE/values/Feuille%201?key=AIzaSyAuASNlIBt9OEPyvasG1jN4IxkiCWMqtTY';

var projects;
function get_messages(){
    fetch(connection_url_get).then(response => {
    
        if (!response.ok) {
        throw new Error(`Erreur de réseau (statut ${response.status})`);
        }
        return response.json();
    })
    .then(data => {
        
        projects=data.values;
        console.log(projects);
        var project_html="";
        for(let i=1;i<projects.length;i++){
            let project=projects[i];
            console.log(project);
            project_html+=`<tr>
            <td data-label="Name">${project[0]}</td>
            <td data-label="Email">${project[1]}</td>
            <td data-label="Number">${project[2]}</td>
            <td data-label="Message">${project[3]}</td>
            <td data-label="Date">${project[4]}</td>
          </tr>`;
            
        }
        document.getElementById("messagebody").innerHTML=project_html;
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });
}

window.onload=function(){
    get_messages();
}