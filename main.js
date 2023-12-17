$(document).ready(function(){

    $('form').on('submit', function(e){ /*em Jquery tambem eliminamos evento usando o .on nesse caso tiramos o evento (e) de recarregar a pagina quando clicamos em enviar (submit) */
        e.preventDefault();
    
        const novaTarefa = $('#nova-tarefa').val(); 
        const novoItem = $(`<li>${novaTarefa}</li>`); 
       
        $(novoItem).appendTo('ul'); //usamos o appendTo para trazer o novo item para o ul e aparecer na pagina
        $('#nova-tarefa').val(''); //aqui definimos que o campo que colocamos o a tarefa fique vazio
    })     

    $('ul').on('click','li',function(e){
        $(this).css('text-decoration','line-through');
    })
})
