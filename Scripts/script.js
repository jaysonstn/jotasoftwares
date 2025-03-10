(function(){
    emailjs.init("rTs86hwBaSaesZM1C"); //  User ID do EmailJS
})();

document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let msg = document.getElementById("msgErro") //Recupera div vazia no html
    
    // Captura os valores dos inputs
    var templateParams = {
        from_name: document.getElementById("nome").value,  // Nome do remetente
        from_email: document.getElementById("email").value, // E-mail do remetente
        message: document.getElementById("mensagem").value // Mensagem do usuário
    };

    // Enviar via EmailJS
    emailjs.send("service_o6lp9yi", "template_c59rdmm", templateParams) //Service ID e Template ID
    .then(function(response) {
        msg.innerText = "E-mail enviado com sucesso!";
        msg.style.color = "green";
        msg.style.textAlign = "center";
        msg.style.marginBottom = "10px";
        
        //alert("✅E-mail enviado com sucesso!");
        document.getElementById("contato-form").reset();
    }, function(error) {
        msg.innerText = "Falha ao enviar e-mail!";
        msg.style.color = "red";
        msg.style.textAlign = "center";
        msg.style.marginBottom = "10px";
        
        //alert("❌Erro ao enviar e-mail: " + JSON.stringify(error));
    });
});

  
  
  
  
