$(document)
  .ready(function() {


// RADIO



$('.checkbox')
  .checkbox({
    onChecked: function() {

    }
  })
;




// Tiers
$('.checkbox').checkbox('attach events', '.tiers.button', 'uncheck');
$('.tiers.checkbox').checkbox('attach events', '.tiers.button', 'check');

// Tiers etendu
$('.checkbox').checkbox('attach events', '.tiersEtendu.button', 'uncheck');
$('.etendu.checkbox').checkbox('attach events', '.tiersEtendu.button', 'check');

// Tous risques
$('.checkbox').checkbox('attach events', '.tousRisques.button', 'uncheck');
$('.tousRisques.checkbox').checkbox('attach events', '.tousRisques.button', 'check');


// Reset
$('.checkbox').checkbox('attach events', '.resetAll.button', 'uncheck');



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
    // onTopVisible: function() {
    //   $('.ui.right.rail').css("display", "none");
    // },
    onBottomVisible: function() {
        $('#footer').addClass("stickyFooter");
        // $('#avantages').addClass("passedFooter");
        $('#avantages').css("padding-bottom","150px");
    }
  })
;

})
;
