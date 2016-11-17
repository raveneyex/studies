(function($){
    $.fn.ravenTooltip = function (options) {
        var settings = $.extend({
            height: 25,
            padding: 5,
            backgroundColor: 'yellow'
        }, options);

        var tooltipHolder = $('#tooltip-holder');

        if (tooltipHolder.length === 0) {
            tooltipHolder =  $('<div/>', {
                id: 'tooltip-holder',
                class: 'tooltip-holder'
            }).css({
                position: 'absolute',
                display: 'none',
                backgroundColor: settings.backgroundColor,
                padding: '5px'
            }).appendTo($('body'));
        }

        var handleMouseEnter = function handleMouseEnter(ev) {
            var $element = $(ev.currentTarget);
            var position = $element.position();
            var tooltipText = $element.data('tooltip');
            tooltipHolder
                .html(tooltipText)
                .css({
                    height: settings.height,
                    left: position.left,
                    top: position.top - (settings.height + (settings.padding * 2))
                }).show();
        }

        var handleMouseLeave = function handleMouseEnter(ev) {
            tooltipHolder.html(''); //Clean single tooltip.
            tooltipHolder.hide();
        }

        this.each(function (index, element) {
            var $element = $(element);
            $element.mouseenter(handleMouseEnter);
            $element.mouseleave(handleMouseLeave);
        });
    };
})(jQuery);
