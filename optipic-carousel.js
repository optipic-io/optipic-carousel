$(function() {
    $(".optipic-carousel").on("click", ".optipic-carousel-ctrl", function(e) {
        e.preventDefault();
        var _this = $(this);
        var _parent = _this.parents(".optipic-carousel:first");
        var _scrollableParent = _parent.find(".optipic-carousel-scrollable-line:first");
        var currentScroll = _scrollableParent.scrollLeft();
        var newScroll = currentScroll;
        var stepPx = _parent.find(".optipic-carousel-item:first").outerWidth();
        var maxScrollValue  = _scrollableParent[0].scrollWidth;
        
        if(!stepPx) {
            stepPx = 200;
        }
        
        var direction = false;
        if(_this.hasClass("prev")) {
            direction = 'prev';
            newScroll -= stepPx;
            if(newScroll<0) {
                newScroll = 0;
            }
        }
        else if(_this.hasClass("next")) {
            direction = 'next';
            newScroll += stepPx;
            if(newScroll > maxScrollValue) {
                newScroll = maxScrollValue;
            }
        }
        
        if(currentScroll!=newScroll) {
            _scrollableParent.animate({scrollLeft: newScroll}, 800);
        }
    });
});