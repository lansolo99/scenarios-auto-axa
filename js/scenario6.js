$(document)
  .ready(function() {


// POPUP

    $('.pop')
    .popup({
      transition: 'fade down',
      hoverable: true,
    }
  )
  ;



// RADIO GARANTIES

$('#niveauxGaranties .ui.checkbox')
  .checkbox({
    onChange: function() {

      var group = $(this).parent().parent().parent().find('.ui.checkbox');
      var me = $(this).parent();
      var others = $(group).not(me);

      if( $(me).hasClass('checked')){
          // is not checked
            console.log();
            $('#niveauxGaranties .ui.striped.padded.table tr th span.active').removeClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td span.active').removeClass("selected");

          if( $(me).hasClass('formule1')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule1').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(2) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(2) span.active').addClass("selected");
          }

          if( $(me).hasClass('formule2')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule2').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(3) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(3) span.active').addClass("selected");
          }

          if( $(me).hasClass('formule3')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule3').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(4) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(4) span.active').addClass("selected");
          }

          if( $(me).hasClass('formule4')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule4').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(5) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(5) span.active').addClass("selected");
          }

          if( $(me).hasClass('formule5')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule5').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(6) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(6) span.active').addClass("selected");
          }

          if( $(me).hasClass('formule6')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule6').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(7) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(7) span.active').addClass("selected");
          }

          if( $(me).hasClass('formule7')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule7').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(8) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(8) span.active').addClass("selected");
          }

          if( $(me).hasClass('formule8')){
            $(me).parent().parent().parent().parent().find('.checkbox.formule8').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(9) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(9) span.active').addClass("selected");
          }

          }else{
            // is already checked
      }

    }

  })
;


// RADIO PACKS

$('#packs .ui.checkbox')
  .checkbox({
    onChange: function() {

      var group = $(this).parent().parent().parent().find('.ui.checkbox');
      var me = $(this).parent();
      var others = $(group).not(me);

      if( $(this).checkbox('is unchecked')){
            $(others).checkbox('set unchecked');

      }

      if( $(me).hasClass('checked')){
          // is not checked
            console.log();
            $('#packs .ui.striped.padded.table tr th span.active').removeClass("selected");
            $('#packs .ui.striped.padded.table tr td span.active').removeClass("selected");

          if( $(me).hasClass('initial')){
            $(me).parent().parent().parent().parent().find('.checkbox.initial').checkbox('set checked');
            $('#packs .ui.striped.padded.table tr th:nth-child(2) span.active').addClass("selected");
            $('#packs .ui.striped.padded.table tr td:nth-child(2) span.active').addClass("selected");
          }

          if( $(me).hasClass('equilibre')){
            $(me).parent().parent().parent().parent().find('.checkbox.equilibre').checkbox('set checked');
            $('#packs .ui.striped.padded.table tr th:nth-child(3) span.active').addClass("selected");
            $('#packs .ui.striped.padded.table tr td:nth-child(3) span.active').addClass("selected");
          }

          if( $(me).hasClass('confort')){
            $(me).parent().parent().parent().parent().find('.checkbox.confort').checkbox('set checked');
            $('#packs .ui.striped.padded.table tr th:nth-child(4) span.active').addClass("selected");
            $('#packs .ui.striped.padded.table tr td:nth-child(4) span.active').addClass("selected");
          }


          }else{
            // is already checked
            $('#packs .ui.striped.padded.table tr th span.active').removeClass("selected");
            $('#packs .ui.striped.padded.table tr td span.active').removeClass("selected");
      }

    }

  })
;





})
;
