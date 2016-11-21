$( ".b-header-nav" ).sideNav({
  menuWidth: 300
});

$( '.side-nav-back' ).click( function() {
  $( '#slide-out' ).sideNav( 'hide' );
});

if ( document.getElementById( 'bx-panel' )) {
  $( '#slide-out' ).css({ top: $( '#bx-panel' ).height() + 'px' });
  
  $( '#bx-panel-expander, #bx-panel-hider' ).bind( 'click', function() {
    setTimeout( function() {
      $( '#slide-out' ).css({ top: $( '#bx-panel' ).height() + 'px' });
    }, 100 );
  });
}

$('.modal-trigger').leanModal();