$(document)
  .ready(function() {


// RADIO

$('.checkbox')
  .checkbox({

    onChange: function() {

      // Dynamic labels for step 2

      if( $('.personnalisation').length){

      // Store value of selected
      var selectedValue = $(this).parent().children('.label').attr('data-content');

      // Store initial value of 1st option and update new value
      var value = $(this).parent().parent().parent().children('td:nth-child(1)').find('.label').attr('data-content');
      $(this).parent().parent().parent().children('td:nth-child(1)').find('.label').text(value - selectedValue + "€ /an");

      // Store initial value of 2nd option and update new value
      var value = $(this).parent().parent().parent().children('td:nth-child(2)').find('.label').attr('data-content');
      $(this).parent().parent().parent().children('td:nth-child(2)').find('.label').text(value - selectedValue + "€ /an");

      // Store initial value of 3rd option and update new value
      var value = $(this).parent().parent().parent().children('td:nth-child(3)').find('.label').attr('data-content');
      $(this).parent().parent().parent().children('td:nth-child(3)').find('.label').text(value - selectedValue + "€ /an");

      // Overwrite selected option's label with ("included")
      $(this).parent().children('.label').text("INCLUS");
    }

    // Non-combinable checkboxs for step 3

    if( $('.complementaires').length){

      var group = $(this).parent().parent().parent().find('.ui.checkbox');
      var me = $(this).parent();
      var others = $(group).not(me);

      if($(me).checkbox('is unchecked')){
        // $(this).parent().children('.label').text(selectedValue + "€ /an");
      }

      if( $(this).checkbox('is unchecked')){
            $(others).checkbox('set unchecked');
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
