jQuery(function ($) {

    $('.miwt-form input[type=\'range\']').wrap('<div class="range-wrapper"></div>');
    $('.miwt-form .range-wrapper').prepend('<span class="range-display"></span><div class="range-details"></div>');

    function setupRangeDisplay($rangeInput, $instructions, $label) {
        var $rangeParentProp = $rangeInput.parents('.prop'),
            $rangeValDisp = $rangeParentProp.find('.range-display'),
            $rangeDetails = $rangeParentProp.find('.range-details');

        var val = $rangeInput.val();
        $rangeValDisp.text(val);

        $rangeDetails.append($label);
        $rangeDetails.append($instructions);
        $rangeDetails.append($rangeInput);
        $rangeInput.on('input', function() {
            var val = $rangeInput.val();
            $rangeValDisp.text(val);
        });
    }

    function initRangeDisplay($form) {
        var $ranges = $form.find('.prop input[type=\'range\']');
        $ranges.each(function () {
            var $thisRange = $(this);
            setupRangeDisplay(
                $thisRange,
                $thisRange.parents('.prop').find('.instructions'),
                $thisRange.parents('.prop').find('> label')
            );
        });
    }

    function init() {
        var $form = $('.miwt-form');
        $form.each(function(idx, form) {
            var postUpdateFunc = form.submit_options.postUpdate;

            form.submit_options.postUpdate = function() {
                initRangeDisplay($(form));
                postUpdateFunc();
            };
        });

        initRangeDisplay($form);
    }

    init();

});