$(document)
  .ready(function() {


// RADIO GARANTIES

$('.ui.three.cards .ui.checkbox')
  .checkbox({
    onChange: function() {

      var group = $(this).parent().parent().parent().parent().parent().find('.ui.checkbox');
      var me = $(this).parent();
      var others = $(group).not(me);

      if( $(this).checkbox('is unchecked')){
            $(others).checkbox('set unchecked');

      }
    }

  })
;

// RADIO SELECTIONNEUR DE GARANTIES

$('.selectionneur .ui.checkbox')
  .checkbox({
    onChange: function() {

      var group = $(this).parent().parent().find('.ui.checkbox');
      var me = $(this).parent();
      var others = $(group).not(me);

      if( $(this).checkbox('is unchecked')){
            $(others).checkbox('set unchecked');

      }

      if ( $( ".selectionneur" ).length ) {

            if( $(me).hasClass('checked')){
                // is not checked

                $('.ui.card').css("border","none");

                if( $(me).hasClass('tiers')){
                  $('.ui.card.tiers').css("border","2px solid #1bb526");
                }
                if( $(me).hasClass('tiersEtendu')){
                  $('.ui.card.etendu').css("border","2px solid #1bb526");
                }
                if( $(me).hasClass('tousRisques')){
                  $('.ui.card.tousRisques').css("border","2px solid #1bb526");
                }
            }else{
              // is already checked
              $('.ui.card').css("border","none");

            }

          }
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

  // $('.selectionneur .checkbox.tiers').on('click', handlerTiers.activate);
  // $('.selectionneur .checkbox.tiersEtendu').on('click', handlerEtendu.activate);
  // $('.selectionneur .checkbox.tousRisques').on('click', handlerTousRisques.activate);
  // $('.selectionneur .checkbox.resetAll').on('click', handlerResetAll.activate);




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
