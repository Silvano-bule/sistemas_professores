document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    // Aqui pode enviar os dados ou redirecionar
});


// Cria UMA instância do carrossel e usa em todas as etapas
const carrossel = new bootstrap.Carousel(document.getElementById('carouselForm'), {
    interval: false,
    ride: false
});

// Etapa 1
document.getElementById('avancarEtapa1').addEventListener('click', function () {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos da etapa 1.');
        return;
    }

    carrossel.next();
});

// Etapa 2
document.getElementById('avancarEtapa2').addEventListener('click', function () {
    let disciplina = document.getElementById('disciplina').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let BI = document.getElementById('BI').value.trim();

    if (disciplina === '' || telefone === '' || BI === '') {
        alert(' Por favor, preencha todos os campos da etapa 2.');
        return;
    }

    carrossel.next();
});

document.getElementById('btnCadastrar').addEventListener('click', () => {
    var senha = document.getElementById('senha').value.trim()
    var confirmSenha = document.getElementById('confirmarSenha').value.trim()

    if(senha === '' || confirmSenha === ''){
        alert('Preencha os campos por favor')
    }else{
        window.location.href = 'folders_system/dashboard/inicio/index.html'
    }
})