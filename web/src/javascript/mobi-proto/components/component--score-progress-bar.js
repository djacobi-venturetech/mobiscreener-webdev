jQuery(function () {

    var $form = $('.miwt-form');

    function evaulateScoreBars($scoreBars) {
        $scoreBars.each(function () {
            var $this = $(this),
                $barVal = $this.find('.score-bar-value'),
                max = parseInt($barVal.data('score-bar-max')),
                val = parseInt($barVal.data('score-bar-val')) || -1;

            if (val > 0) {
                $barVal.width(Math.ceil((val / max) * 100) + '%');
            }
            else {
                $barVal.width('0%');
            }
        });
    }

    function init() {
        $form.each(function(idx, form) {
            var postUpdateFunc = form.submit_options.postUpdate;

            form.submit_options.postUpdate = function() {
                evaulateScoreBars($('.score-bar-container'));
                postUpdateFunc();
            };
        });

        evaulateScoreBars($('.score-bar-container'));
    }

    init();

});