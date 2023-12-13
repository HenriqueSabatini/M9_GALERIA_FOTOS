/*$(document).ready(function(){*/ /* bloco do jquery, tudo do $ é jqeury */
    /* document.querySelector('header button'); se fosse somente java iriamos escrever dessa forma para querer modificar o botão */
   /*$('header button'); Mas no Jquery precisamos somente do $ e escrever dentro do (----) 
})*/

$(document).ready(function(){
    $('header button').click(function(){ /*aqui colocamos um evento que quando clicar no botao o formulario vai ser expandido para baixo */
        $('form').slideDown(); /*SlideDown animação poara baixo*/
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){ /*em Jquery tambem eliminamos envento usando o .on nesse caso tiramos o evento (e) de recarregar a pagina quando clicamos em enviar (submit) */
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //aqui criamos a contante que vai adicionar imagens por link
        const novoItem = $('<li style="display: none"></li>'); //aqui criamos o que vai aceitar o novo item, como no HTML a nova imagem é um li entao dentro do li temos img div e haref que vao ser colocados abaixo
        //na linha acima colocamos depois do li o display none para poder como uma animação na imagem quando ela aparecer
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); // aqui defimmos que o appendTo vai colocar dentro do li ddo novoItem
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem no tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); //usamos o appendTo para trazer o novo item para o ul e aparecer na pagina
        $(novoItem).fadeIn(2000); //aqui definimos a função da imagem surgir como animação na pagina, e seu tem em milesegundo(2000)
        $('#endereco-imagem-nova').val(''); //aqui definimos que o campo que colocamos o link fique fazio depois de adicionar a imagem
    })
})