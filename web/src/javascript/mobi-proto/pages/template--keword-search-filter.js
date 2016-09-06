/**
 * Created by mlickei on 9/6/16.
 */
jQuery(function($) {

    var $keywordSearch = null;

    function initKeywordBox() {
        if($keywordSearch == null) {
            $keywordSearch = $('.search-constraints > div:first-child');
            var $searchBtn = $keywordSearch.find('.search-actions-container .btn.filter-btn');

            $searchBtn.on('click', function () {
                $keywordSearch.toggleClass('shown');
            });
        }
    }

    function init() {
        var $form = $('.miwt-form');

        $form.each(function (idx, form) {
            var postUpdateFunc = form.submit_options.postUpdate;

            form.submit_options.postUpdate = function () {
                if(postUpdateFunc)
                {
                    postUpdateFunc();
                }

                initKeywordBox();
            };
        });

        initKeywordBox();
    }

    init();

});
