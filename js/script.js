//navbar

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
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
