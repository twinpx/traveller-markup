$( 'ul.tabs' ).tabs();

$( '.b-forms .tab' ).not( '.disabled' ).find( 'a' ).not( '.modal-trigger' ).click( function() {
  $( '.b-forms__tab' ).hide();
});

$( '#form-menu a.active' ).each( function() {
  $( this ).removeClass( 'active' );
  $( $( this ).attr( 'href' )).hide();
});

$( '.b-forms__image' ).each( function() {
  var $image = $( this );
  var src = $image.data( 'image' );
  
  var $img = $( '<img src="' + src + '" width="1" height="1" alt="" style="position: absolute; top: 0; left: 0; visibility: hidden;">' );
  $image.parent().append( $img );
  
  if( $img[0].complete ) {
    show();
  } else {
    $img.load( function() { 
      show();
    });
  }
  
  function show() {
    $image.css({ backgroundImage: "url(" + src + ")" })
    .closest( '.b-forms__container' ).addClass( 'i-show' );
    $img.remove();
  }
});