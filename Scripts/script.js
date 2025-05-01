


(function(){
    emailjs.init("rTs86hwBaSaesZM1C"); // Substitua com seu user ID do EmailJS
})();

document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let msg = document.getElementById("msgErro");

    var templateParams = {
        from_name: document.getElementById("nome").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("mensagem").value
    };

    emailjs.send("service_o6lp9yi", "template_c59rdmm", templateParams) //Service ID e Template ID
    .then(function(response) {
        msg.innerText = "E-mail enviado com sucesso!";
        msg.style.color = "green";
        msg.style.textAlign = "center";
        msg.style.marginBottom = "10px";
        document.getElementById("contato-form").reset();
    }, function(error) {
        msg.innerText = "Falha ao enviar e-mail!";
        msg.style.color = "red";
        msg.style.textAlign = "center";
        msg.style.marginBottom = "10px";
    });
});

/*Scroll*/
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o hash na URL
  
      const targetId = this.getAttribute('href').substring(1); // remove o #
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
  
        // Remove o hash da URL sem recarregar
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    });
  });
  
