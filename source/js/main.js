$( ".b-header-nav" ).sideNav({
  menuWidth: 390
});

$( '.side-nav-back' ).click( function() {
  $( '#slide-out' ).sideNav( 'hide' );
});

$( 'ul.tabs' ).tabs();