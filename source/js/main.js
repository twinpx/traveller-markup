$( ".b-header-nav" ).sideNav({
  menuWidth: 300
});

$( '.side-nav-back' ).click( function() {
  $( '#slide-out' ).sideNav( 'hide' );
});

$( 'ul.tabs' ).tabs();
$( '.b-forms .tab a' ).click( function() {
  $( '.b-forms__tab' ).hide();
});

$('.modal-trigger').leanModal();