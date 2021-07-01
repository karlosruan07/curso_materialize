
M.AutoInit();

//navbar

$(document).ready(function () {
  $(".dropdown-trigger").dropdown({

  });
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});

//chips

$('.chips').chips();
  $('.chips-initial').chips({
    data: [{
      tag: 'Apple',
    }, {
      tag: 'Microsoft',
    }, {
      tag: 'Google',
    }],
  });
  $('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
  });
  $('.chips-autocomplete').chips({
    autocompleteOptions: {
      data: {
        'Apple': null,
        'Microsoft': null,
        'Google': null,
        'ata': null,
        'abacaxi': null,
        'abacate': null
        
      },
      limit: Infinity, //se for um valor inteiro, mostra a quantidade de valores de acordo com relacionamento
      minLength: 2     //define uma quantidade de valores iniciais para poder ser mostrado a pesquisa
    }
  });

//formulários

$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'img/avatar_masculino.png'
    },
  });
});

//formulário de opção

$(document).ready(function(){
  $('select').formSelect();
});

//datepicker

/*$(document).ready(function(){
  $('.datepicker').datepicker();
});*/
var diaSemana = ['Domingo ', 'Segunda-Feira ', 'Terca-Feira ', 'Quarta-Feira ', 'Quinta-Feira ', 'Sexta-Feira ', 'Sabado'];
var mesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
var data = new Date();
var hoje = diaSemana[data.getDay()] + ', ' + mesAno[data.getMonth()] + ' de ' + data.getFullYear();
$("#dataPesquisa").attr("value", hoje);
$(".datepicker").pickadate({
  monthsFull: mesAno,
  monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  weekdaysFull: diaSemana,
  weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  selectMonths: true,
  selectYears: true,
  clear: "Limpar",
  format: 'ddd, d/mm/yyyy',
  today: "Hoje",
  close: "Fechar",
  min: new Date(data.getFullYear() - 2, 0, 1),//primeiro parâmetro é a quantidade de anos passados
  max: new Date(data.getFullYear() + 2, 11, 31),//primeiro parâmetro é a quantidade de anos futuros
  closeOnSelect: true
});

$("#dataPesquisa").click(function (event) {
  event.stopPropagation();
  $(".datepicker").first().pickadate("picker").open();
});

//timepicker

$(document).ready(function(){
  $('.timepicker').timepicker();
});

//JS (courrosel ...)

$(document).ready(function(){
  $('.carousel').carousel({
    indicators : true,
    
  });
  
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators : true
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

/*$('.next').click(function() {
  $('.carousel').carousel('next') 
})*/

window.document.getElementById('prox_slide').addEventListener('click', function(){
  $('.carousel').carousel('next')
})

//parallax

$(document).ready(function(){
  $('.parallax').parallax();
});

//materialboxed

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//slides

$(document).ready(function(){
  $('.slider').slider();
});

// collapsible

$(document).ready(function(){
  $('.collapsible').collapsible();
});
            
//Modal

$(document).ready(function(){
  $('.modal').modal();
});

//toast

function botao2() {
  M.toast({html: 'I am a toast!'})
}

function botao3() {
  var toastHTML = '<span>I am toast content</span><a href="https://youtube.com"> <button class="btn-flat toast-action">Undo</button></a>';
  M.toast({html: toastHTML, classes:'rounded'});
}

function botao4() {
  var toastHTML = '<span>I am toast content</span>';
  M.toast({html: toastHTML, classes:'rounded', activationPercent : 5 , completeCallback: function(){
    window.location = "https://youtube.com"
  }});
}

//tooltip

function tooltip() {
  //alert('weofidsnklwfodns')
  $('.tooltipped').tooltip();
}

//scrollspy

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});   

//tabs

$(document).ready(function(){
  $('ul.tabs').tabs({
    swipeable : true,
  });
});



      

