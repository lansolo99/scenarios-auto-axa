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


// AIDE AU CHOIX STICKY (scenario 1bis)

if ( $( ".selectionneur" ).length ) {

  // Set selection
  handlerTiers = {
    activate: function() {
          $('.ui.card').css("border","none");
          $('.ui.card.tiers').css("border","2px solid #1bb526");
          }
  };
  handlerEtendu = {
          activate: function() {
            console.log("etendu");
            $('.ui.card').css("border","none");
            $('.ui.card.etendu').css("border","2px solid #1bb526");
          }
  };

  handlerTousRisques = {
          activate: function() {
            $('.ui.card').css("border","none");
            $('.ui.card.tousRisques').css("border","2px solid #1bb526");
          }
  };
  handlerResetAll = {
          activate: function() {
            $('.ui.card').css("border","none");
          }
  };

  $('.selectionneur .button.tiers').on('click', handlerTiers.activate);
  $('.selectionneur .button.tiersEtendu').on('click', handlerEtendu.activate);
  $('.selectionneur .button.tousRisques').on('click', handlerTousRisques.activate);
  $('.selectionneur .button.resetAll').on('click', handlerResetAll.activate);

  }




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
