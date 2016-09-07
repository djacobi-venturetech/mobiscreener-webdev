jQuery(function ($) {

    var $backBtn;

    function goBackInHistory() {
        window.history.back();
    }

    function initBackBtn() {


        //setTimeout(function () {
        $backBtn = $('.candidate-actions .candidate-action-back button.btn');
        var clone = $backBtn.clone(true);
        $backBtn.parent().append(clone);
        $backBtn.remove();
        clone.click(function () {
            goBackInHistory();
        });
        //}, 250);
    }

    function init() {
        var $form = $('.miwt-form');

        $form.on('click', function() {
            var $target = $(this);
            console.log($target);
        });

        $form.each(function (idx, form) {
            var postUpdateFunc = form.submit_options.postUpdate;

            form.submit_options.postUpdate = function () {
                initBackBtn();
                postUpdateFunc();
            };
        });

        initBackBtn();
    }

    init();

});