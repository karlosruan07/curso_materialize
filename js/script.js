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
