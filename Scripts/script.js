


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

/*Tyoed*/
const typed = new Typewriter('#typed-text', {
    strings: [
        "Desenvolvimento Web.",
        "Desenvolvimento Mobile.",
        "Frontend.",
        "Backend."
    ],
    autoStart: true,
    loop: true, // Faz o efeito de digitação repetir infinitamente
    delay: 75 // Ajusta a velocidade da digitação
});

/*Botão topo*/
document.addEventListener('DOMContentLoaded', function () {
  const btnTopo = document.querySelector('.btn-topo'); // Seleciona o botão

  // Função para mostrar ou esconder o botão com base no scroll
  function toggleBtn() {
    if (window.scrollY > 100) {
      btnTopo.style.display = 'flex'; // Mostra o botão quando rolar para baixo
    } else {
      btnTopo.style.display = 'none'; // Esconde o botão quando estiver no topo
    }
  }

  // Função de rolagem suave ao clicar no botão
  btnTopo.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do botão, que seria saltar imediatamente para o topo
    window.scrollTo({
      top: 0, // Vai para o topo
      behavior: 'smooth' // Faz uma rolagem suave
    });
  });

  window.addEventListener('scroll', toggleBtn); // Escuta o evento de rolagem
  toggleBtn(); // Executa ao carregar a página para verificar o estado inicial
});


// Recolhe o botão home

document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Simula o clique para fechar
    }
  });
});
  
