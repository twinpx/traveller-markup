$( '.modal' ).modal();
$( '.modal .modal-close' ).click( function(e) {
  e.preventDefault();
  $( this ).closest( '.modal' ).modal('close');
});