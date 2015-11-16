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

          if( $(me).hasClass('tiers')){
            $(me).parent().parent().parent().parent().find('.checkbox.tiers').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(2) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(2) span.active').addClass("selected");
          }

          if( $(me).hasClass('tiersEssentiel')){
            $(me).parent().parent().parent().parent().find('.checkbox.tiersEssentiel').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(3) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(3) span.active').addClass("selected");
          }

          if( $(me).hasClass('tiersEtendu')){
            $(me).parent().parent().parent().parent().find('.checkbox.tiersEtendu').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(4) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(4) span.active').addClass("selected");
          }

          if( $(me).hasClass('tousRisques')){
            $(me).parent().parent().parent().parent().find('.checkbox.tousRisques').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(5) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(5) span.active').addClass("selected");
          }

          if( $(me).hasClass('tousRisquesEtendu')){
            $(me).parent().parent().parent().parent().find('.checkbox.tousRisquesEtendu').checkbox('set checked');
            $('#niveauxGaranties .ui.striped.padded.table tr th:nth-child(6) span.active').addClass("selected");
            $('#niveauxGaranties .ui.striped.padded.table tr td:nth-child(6) span.active').addClass("selected");
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
