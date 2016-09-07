jQuery(function ($) {

    $('.miwt-form input[type=\'range\']').wrap('<div class="range-wrapper"></div>');
    $('.miwt-form .range-wrapper').prepend('<span class="range-display"></span>');

    function setupRangeDisplay($rangeInput) {
        var $rangeWrapper = $rangeInput.parent().find('.range-wrapper'),
            $rangeValDisp = $rangeInput.parent().find('.range-display');

        var val = $rangeInput.val();
        $rangeValDisp.text(val);

        $rangeWrapper.append($rangeInput);
        $rangeInput.on('input', function() {
            var val = $rangeInput.val();
            $rangeValDisp.text(val);
        });
    }

    function initRangeDisplay($form) {
        var $ranges = $form.find('.prop input[type=\'range\']');
        $ranges.each(function () {
            setupRangeDisplay($(this));
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