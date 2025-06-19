window.onload = function () {
    const imagemSalva = localStorage.getItem('fotoPerfil')
    if (imagemSalva) {
        document.querySelectorAll('.foto-perfil').forEach(function (img) {
            img.src = imagemSalva;
        });
    }
}

document.getElementById('selectoImagem').addEventListener('change', function () {
    const arquivo = this.files[0];

    if (arquivo && arquivo.type.startsWith('image/')) {
        const leitor = new FileReader();

        leitor.onload = function (e) {
            const novaImagem = e.target.result;

            // Atualiza todas as imagens com classe .foto-perfil
            document.querySelectorAll('.foto-perfil').forEach(function (img) {
                img.src = novaImagem;
            });

            // Armazena a imagem para uso posterior
            localStorage.setItem('fotoPerfilTemp', novaImagem); // Salva temporariamente até clicar em "Salvar"
        }

        leitor.readAsDataURL(arquivo);
    }
})

function salvarImagem() {
    // Pega a imagem temporária que foi carregada
    const imagem = localStorage.getItem('fotoPerfilTemp');

    if (imagem) {
        localStorage.setItem("fotoPerfil", imagem); // Salva como definitiva
    }

    const modal = new bootstrap.Modal(document.getElementById('modalSucesso'));
    modal.show();
}
