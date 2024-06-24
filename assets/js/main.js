function close_dialog(){
    document.getElementById("dialog").style.display="none";
}

function send_message(){
    let nom = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let phone = document.getElementById("phone").value;
    let data = {
        name:nom,
        email:email,
        message:message,
        number:phone,
        date: new Date().toLocaleString()
    }
    connection_url="https://sheet.best/api/sheets/d1b9499b-d955-4639-8613-77c380dc6de1";
    if(data.email!="" && data.name!="" && data.message!="" && data.number!=""){

        fetch(connection_url, {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((data) => {
        
        console.log(data);
         })
        .catch((error) => {
            console.log(error);
        });
        document.getElementById("dialog").style.display="block";
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        document.getElementById("phone").value="";
    }
    else{
        alert("veuillez remplir tous les champs");
    }
    
    
}