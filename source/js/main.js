$( ".b-header-nav" ).sideNav({
  menuWidth: 300
});

$( '.side-nav-back' ).click( function() {
  $( '#slide-out' ).sideNav( 'hide' );
});

if ( document.getElementById( 'bx-panel' ) && $( '.b-header__container' ).length ) {

  $( '#slide-out' ).css({ top: $( '.b-header__container' ).offset().top + 'px' });
  
  $( '#bx-panel-expander, #bx-panel-hider' ).bind( 'click', function() {
    setTimeout( function() {
      $( '#slide-out' ).css({ top: $( '.b-header__container' ).offset().top + 'px' });
    }, 100 );
  });
}

//announcement, tours
//Lazyload
$( '.b-announcement__image, .b-tours__image' ).lazyload();

//cut the title and description
$( '.b-announcement__title' ).each( function() {
  var $title = $( this );
  if ( String( $title.text()).length > 42 ) {
    $title.text( $.trim( String( $title.text()).substring( 0, 41 )) + '...' );
  }
});
$( '.b-announcement__type' ).each( function() {
  var $title = $( this );
  if ( String( $title.text()).length > 72 ) {
    $title.text( $.trim( String( $title.text()).substring( 0, 71 )) + '...' );
  }
});

var $header = $( '.b-header' ),
    $headerContainer = $( '.b-header__container' ),
    headerBorder = $header.offset().top + $header.height() + 50, bxPanelBorder = 0;

$( window ).scroll( function() {
  //animation
  var top = $( document ).scrollTop() + parseInt( window.screen.height ) - 150;
  
  $( '.i-slide-top-animation' ).each( function() {
    if ( $( this ).offset().top < top ) {
      $( this ).addClass( 'i-animated' );
    }
  });
  
  //fixed header
  var scrolled = $( window ).scrollTop();
  
  if ( $( '#bx-panel' ).length && $( '#bx-panel' ).hasClass( 'bx-panel-fixed' )) {
    bxPanelBorder = $( '#bx-panel' ).height();
  } else {
    bxPanelBorder = 0;
  }
  
  if ( scrolled > headerBorder ) {
      
    if ( !$header.hasClass( 'i-fixed' )) {
      $header.addClass( 'i-fixed' );
      $headerContainer.css({ top: '-100px' });
      setTimeout( function() {
        $headerContainer.css({ top: bxPanelBorder + 'px' });
        $( '#slide-out' ).css({ top: bxPanelBorder + 'px' });
      }, 100);
    } else {
      if ( bxPanelBorder !== parseInt( $headerContainer.css( 'top' ), 10)) {
        $headerContainer.css({ top: bxPanelBorder + 'px' });
        $( '#slide-out' ).css({ top: bxPanelBorder + 'px' });
      }
    }
    
  } else {
    $header.removeClass( 'i-fixed' );
    $headerContainer.removeAttr( 'style' );
    $( '#slide-out' ).css({ top: $headerContainer.offset().top + 'px' });
  }
      
}).scroll();