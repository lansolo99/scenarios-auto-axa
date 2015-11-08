$(document)
  .ready(function() {


// RADIO


$('.checkbox')
  .checkbox({
    onChecked: function() {
      console.log("callback")
    }
  })
;








// POPUP


$('.pop')
  .popup({
          transition: 'fade down',
          hoverable: true,
        }
  )
;


// STICKY

$('.ui.sticky')
  .sticky({
    context: '.garanties'
  })
;


// MODAL Sticky
$('.ui.right.rail .long.ui.modal')

  .modal({
          detachable: false,
          inverted: true,
          transition: 'slide down',
          duration: 200
        }
    )
  .modal('attach events', '.trigger', 'toggle')
;


// MODAL Souscription
$('#footer .long.ui.modal')

  .modal({
          detachable: true,
          transition: 'scale',
          duration: 200
        }
    )
  .modal('attach events', '.cta', 'show')
;




})
;
