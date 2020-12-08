$(function() {
    $(".optipic-carousel").on("click", ".optipic-carousel-ctrl", function(e) {
        e.preventDefault();
        var _this = $(this);
        var _parent = _this.parents(".optipic-carousel:first");
        var _scrollableParent = _parent.find(".optipic-carousel-scrollable-line:first");
        var currentScroll = _scrollableParent.scrollLeft();
        var newScroll = currentScroll;
        var stepPx = _parent.find(".optipic-carousel-element:first").outerWidth();
        var maxScrollValue  = _scrollableParent[0].scrollWidth;
        //var _prevButton = _parent.find(".optipic-carousel-ctrl.prev:first");
        //var _nextButton = _parent.find(".optipic-carousel-ctrl.next:first");
        
        if(!stepPx) {
            stepPx = 200;
        }
        console.log('stepPx', stepPx);
        console.log(_parent);
        
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
            //_scrollableParent.scrollLeft(newScroll);
            _scrollableParent.animate({scrollLeft: newScroll}, 800);
        }
        
        /*if(newScroll==0) {
            _prevButton.hide();
            _nextButton.show();
        }
        else if(newScroll==maxScrollValue) {
            _prevButton.show();
            _nextButton.hide();
        }
        else {
            _prevButton.show();
            _nextButton.show();
        }*/
    });
});