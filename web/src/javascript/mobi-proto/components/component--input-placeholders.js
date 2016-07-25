jQuery(function($) {

    var $placeHolderForms = $('.placeholder-form');

    var LABEL_INPUT_CONTAINER_SELECTOR = '.prop-group .prop';

    function setInputPlaceholder($input, placeholderTxt) {
        $input.attr('placeholder', placeholderTxt);
    }

    function init() {
        $placeHolderForms.find(LABEL_INPUT_CONTAINER_SELECTOR).each(function() {
            var $this = $(this),
                $label = $this.find('label'),
                labelTxt = $label.text(),
                $input = $this.find('input');

            setInputPlaceholder($input, labelTxt);
        });
    }

    init();

});