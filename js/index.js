$(document).ready(function(){
	
    /* ---------- Circle Progess Bars ---------- */
    var divElement = $('div'); //log all div elements

    if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {

    } else {

            $(".greenCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 120,
            'height': 120,
            'fgColor': '#b9e672',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
                    'skin':'tron'
        });

        $(".orangeCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 160,
            'height': 160,
            'fgColor': '#ff7252',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
                    'skin':'tron'
        });

            $(".lightOrangeCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 120,
            'height': 120,
            'fgColor': '#ff7252',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
                    'skin':'tron'
        });

        $(".blueCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 120,
            'height': 120,
            'fgColor': '#2FABE9',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
                    'skin':'tron'
        });

            $(".yellowCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 120,
            'height': 120,
            'fgColor': '#e7e572',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
                    'skin':'tron'
        });

            $(".pinkCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 160,
                    'top':0,
            'height': 160,
            'fgColor': '#666666',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
                    'skin':'tron'
        });
        
        $.fn.tagcloud.defaults = {
            size: {start: 8, end: 12, unit: 'pt'},
            color: {start: '#cde', end: '#f52'}
        };

        $(function () {
            $('.backlinks span').tagcloud();
        });
    }	
});