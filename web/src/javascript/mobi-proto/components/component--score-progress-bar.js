jQuery(function () {

    var $scoreBars = $('.score-bar-container');

    function init() {
        $scoreBars.each(function () {
            var $this = $(this),
                $barVal = $this.find('.score-bar-value'),
                max = parseInt($barVal.data('score-bar-max')),
                val = parseInt($barVal.data('score-bar-val')) || -1;

            if (val > 0) {
                //$barVal.width(Math.ceil((max / val) * 100) + '%');
                $barVal.width(val + '%');
            }
            else {
                $barVal.width('0%');
            }
        });
    }

    init();

});