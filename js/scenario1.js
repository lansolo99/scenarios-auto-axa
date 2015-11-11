$(document)
  .ready(function() {


// RADIO

$('.checkbox')
  .checkbox({
    onChecked: function() {
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
$('#footer .ui.modal')

  .modal({
          detachable: true,
          transition: 'scale',
          duration: 200,
          onShow: function(){
            $('.garanties .ui.right.rail').css("z-index","3");
          },
          onHide: function(){
            $('.garanties .ui.right.rail').css("z-index","5");
          }
        }
    )
  .modal('attach events', '.cta', 'show')
;



// FOOTER Sticky
$('#footer .ui.sticky')
  .sticky({
    context: '.garanties'
  })
;


// VISIBILITY MANAGEMENT
$('#footer')
  .visibility({
    onBottomVisible: function() {
        $('#footer').addClass("stickyFooter");
        $('#avantages').css("padding-bottom","150px");
    }
  })
;
})
;
