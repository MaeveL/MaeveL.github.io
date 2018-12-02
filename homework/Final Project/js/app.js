
    $('.moreVans-js').on('click', function() {
        $(this).fadeOut();
        $('.visibleVans-js').fadeOut();
        $('#moreVansContainer').fadeIn();
    });
    $('#calculateROI').on('click', function () {
        $(this).text('Update your calculations');
        var kilometerCost = $('#kilometerCosts').val();
        var kilometerGains = $('#kilometerGains').val();
        console.log(kilometerCost);
        totalCosts = (totalCost * totalGain) + (+kilometerCost * +kilometerGains);


        //calculate vehicle costs
        if($('.amountVans-js').val() > 0){
            deliveryVanIndex = $('.amountVans-js').val();
        }else {
            deliveryVanIndex = 0;
            $('.delivery-van.active').each(function () {
                deliveryVanIndex++;
            });
        }
        totalCosts = totalCosts * +deliveryVanIndex;
        $('.totalROIMonth').text(Math.round(totalCosts));
        $('.numberVehicles').text(deliveryVanIndex);
        $('#roiReturns, #step5').fadeIn();
    });

    $('.delivery-van:not(.first)').on('click', function () {
        $(this).toggleClass('active');
        var count = parseInt($(this).data('count'));
        if($(this).hasClass('active')){

            $('.delivery-van').filter(function(){
                if(parseInt($(this).data('count')) < count){
                    $(this).addClass('active');
                }
            });
        }else{
            $('.delivery-van').filter(function(){
                if(parseInt($(this).data('count')) >= count){
                    $(this).removeClass('active');
                }
            });
        }
    });
    $('.nextStep-js').on('click', function () {
        $(this).fadeOut();
        $($(this).data('step-id')).slideDown();
        if($(this).data('step-id') == '#step2') {
            totalCost = +$('#averageChargeRate').val() + +$('#averageWageRate').val();
            $('#totalCostText, .totalGainCost').text(totalCost);
            $('#totalCost').fadeIn();
        }else if($(this).data('step-id') == '#step3'){
            totalGain = +$('#savedHours').val() + +$('#billableHours').val();
            $('#totalGainText, .totalGainHoursMonth').text(totalGain);
            $('#totalGain').fadeIn();
        }else if($(this).data('step-id') == '#step4'){
            var kilometerCost = +$('#kilometerGains').val() * +$('#kilometerCosts').val();
            $('#totalKilometerText,.totalGainKilometersMonth').text(kilometerCost);
            $('#totalKilometers').fadeIn();
        }
    });
    $('#kilometerCostsSlider').on('change input', function () {
        $('#kilometerCosts').val($(this).val());
        var kilometerCost = +$('#kilometerGains').val() * +$('#kilometerCosts').val();
        $('#totalKilometerText,.totalGainKilometersMonth').text(kilometerCost);
        $('#totalKilometers, #step4').fadeIn();
        $('#stepNext3').fadeOut();
    });
    $('#kilometerGainsSlider').on('change input', function () {
        $('#kilometerGains').val($(this).val());
        var kilometerCost = +$('#kilometerGains').val() * +$('#kilometerCosts').val();
        $('#totalKilometerText,.totalGainKilometersMonth').text(kilometerCost);
        $('#totalKilometers, #step4').fadeIn();
        $('#stepNext3').fadeOut();
    });
    $('#averageChargeSlider').on('change input', function () {
        $('#averageChargeRate').val($(this).val());
        totalCost = +$('#averageChargeRate').val() + +$('#averageWageRate').val();
        $('#totalCostText, .totalGainCost').text(totalCost);
        $('#totalCost, #step2').fadeIn();
        $('#stepNext1').fadeOut();
    });
    $('#averageWageSlider').on('change input', function () {
        $('#averageWageRate').val($(this).val());
        totalCost = +$('#averageChargeRate').val() + +$('#averageWageRate').val();
        $('#totalCostText, .totalGainCost').text(totalCost);
        $('#totalCost, #step2').fadeIn();
        $('#stepNext1').fadeOut();
    });
    $('#savedHoursSlider').on('change input', function () {
        $('#savedHours').val($(this).val());
        totalGain = +$('#savedHours').val() + +$('#billableHours').val();
        $('#totalGainText, .totalGainHoursMonth').text(totalGain);
        $('#totalGain, #step3').fadeIn();
        $('#stepNext2').fadeOut();
    });
    $('#billableHoursSlider').on('change input', function () {
        $('#billableHours').val($(this).val());
        totalGain = +$('#savedHours').val() + +$('#billableHours').val();
        $('#totalGainText, .totalGainHoursMonth').text(totalGain);
        $('#totalGain, #step3').fadeIn();
        $('#stepNext2').fadeOut();
    });