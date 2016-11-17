(function($){
    $.fn.ravenTooltip = function (options) {
        var settings = $.extend({
            height: 25,
            padding: 5,
            backgroundColor: 'yellow'
        }, options);

        //Tooltip holder.
        var tooltipHolder = $('#tooltip-holder');

        //Create markup for tooltip holder if non-existing
        if (tooltipHolder.length === 0) {
            tooltipHolder =  $('<div/>', {
                id: 'tooltip-holder',
                class: 'tooltip-holder'
            }).appendTo($('body'));
        }
        //Set basic styles
        tooltipHolder.css({
            position: 'absolute',
            border: '1px solid black',
            display: 'none',
            backgroundColor: settings.backgroundColor,
            padding: '5px',
            textAlign: 'center'
        });

        //Define handler for mouseIn
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

        //Define handler for mouseout
        var handleMouseLeave = function handleMouseLeave(ev) {
            tooltipHolder
                .html('')
                .hide();
        }

        //For each element, define mouseenter & mouseleave events
        this.each(function (index, element) {
            $(element)
                .mouseenter(handleMouseEnter.bind(this))
                .mouseleave(handleMouseLeave.bind(this));
        });
    };
})(jQuery);
