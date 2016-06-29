$( ".b-header-nav" ).sideNav({
  menuWidth: 300
});

$( '.side-nav-back' ).click( function() {
  $( '#slide-out' ).sideNav( 'hide' );
});

$( 'ul.tabs' ).tabs();

$('.modal-trigger').leanModal();