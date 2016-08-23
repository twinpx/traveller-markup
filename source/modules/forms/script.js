$( 'ul.tabs' ).tabs();
$( '.b-forms .tab' ).not( '.disabled' ).find( 'a' ).not( '.modal-trigger' ).click( function() {
  $( '.b-forms__tab' ).hide();
});
$( '#form-menu a.active' ).each( function() {
  $( this ).removeClass( 'active' );
  $( $( this ).attr( 'href' )).hide();
});