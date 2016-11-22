( function($) {

  'use strict';
  
  $( function() {
    
    $('.b-impression-block .fotorama').on('fotorama:ready', function (e, fotorama) {
    
      $( '.b-impression-block' ).each( function() {
        var $impressionBlock = $( this );
        
        $impressionBlock.find( '.b-impression-block__image' ).each( function() {
          var $image = $( this );
          var src = $image.data( 'image' );
          
          var $img = $( '<img src="' + src + '" width="1" height="1" alt="" style="position: absolute; top: 0; left: 0; visibility: hidden;">' );
          $impressionBlock.append( $img );
          
          if( $img[0].complete ) {
            show();
          } else {
            $img.load( function() {
              show();
            });
          }
          
          function show() {
            $image.css({ backgroundImage: "url(" + src + ")" })
            .closest( '.b-impression-block__container' ).addClass( 'i-show' );
            $img.remove();
          }
        });
      });
      
    });
      
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));