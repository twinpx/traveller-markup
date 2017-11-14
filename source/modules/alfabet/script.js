$( '.b-alfabet__nav' ).delegate( 'a', 'click', function(e) {
  e.preventDefault();
  
  var $a = $( this );
  
  if ( $a.hasClass( 'i-active' )) {
    return;
  }
  
  $( '.b-alfabet__nav a, .b-alfabet__list .row' ).removeClass( 'i-active' );
  $a.addClass( 'i-active' );
  $( '#' + $a.data( 'id' )).addClass( 'i-active' );
});