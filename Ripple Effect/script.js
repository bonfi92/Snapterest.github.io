$(document).ready(function() {

  var parent, d, x, y;

  $('ul li a').on('click', function (e) {
    parent = $(this).parent();

    if (parent.find('.ink').length === 0) {
      parent.prepend('<span class="ink"></span>')
    }

    ink = parent.find('.ink');

    //Nel caso faccio un doppio click sullo stesso elemento
    ink.removeClass('animate');

    //Se l'altezza e la larghezza sono 0
    if(!ink.height() && !ink.width()) {
      //max restituisce il nemero più grande della lista
      //outerWidth restituisce la larghezza comprendendo padding e bordo. Per il margine passare true come argomento
      d = Math.max(parent.outerWidth(), parent.outerHeight());

      //Imposto la larghezza e l'altezza al valore che ho calcolato
      ink.css({width:d, height:d});
    }

    x = e.pageX - parent.offset().left - ink.width()/2;
    y = e.pageY - parent.offset().top - ink.height()/2;

    ink.css({top: y+'px', left: x+'px'}).addClass('animate');
  });

  /*Click all'interno della pagina*/
  $('*').on('click', function (e) {
    var mouseCircle = $('#mouse-circle');

    //Nel caso faccio un doppio click sullo stesso elemento
    mouseCircle.removeClass('animate');

    x = e.pageX - mouseCircle.width()/2;
    y = e.pageY - mouseCircle.height()/2;

    mouseCircle.css({top: y+'px', left: x+'px'}).addClass('animate');
  });
});
