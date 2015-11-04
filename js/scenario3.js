$(document)
  .ready(function() {


// RADIO

// $('.ui.three.cards .button')
//   .state({
//   text: {
//     inactive   : 'SÉLECTIONNER',
//     active     : 'SÉLECTIONNÉ'
//   }
// })
// ;






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


$('#footer .ui.sticky')
  .sticky({
    context: '.garanties'
  })
;


// VISIBILITY MANAGEMENT
$('#footer')
  .visibility({
    onTopVisible: function() {
      $('.ui.right.rail').css("display", "none");
    },
    onBottomVisible: function() {
        $('#footer').addClass("stickyFooter");
        // $('#avantages').addClass("passedFooter");
        $('#avantages').css("padding-bottom","150px");
    }
  })
;

})
;
