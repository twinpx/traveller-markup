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

//announcement, tours
$( '.b-announcement, .b-tours' ).each( function() {
  var $announcement = $( this );
  
  $announcement.find( '.b-announcement__image, .b-tours__image' ).each( function() {
    var $image = $( this );
    var src = $image.parent().data( 'image' );
    
    var $img = $( '<img src="' + src + '" width="1" height="1" alt="" style="position: absolute; top: 0; left: 0; visibility: hidden;">' );
    $announcement.append( $img );
    
    if ( $img[0].complete ) {
      show( $image, $img, src );
    } else {
      $img.load( function() { 
        show( $image, $img, src );
      });
    }
  });
    
  function show( $image, $img, src ) {
    $image.css({ backgroundImage: "url(" + src + ")" }).addClass( 'i-show' );
    $img.remove();
  }
});