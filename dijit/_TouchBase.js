define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/dom","dojo/has","../kernel"],function(t,e,o,n,i,c){var s=t(null,{declaredClass:"esri.dijit._TouchBase",_preventDefault:!0,_swipeThreshold:20,constructor:function(t){this.domNode=n.byId(t),this.events=[o.connect(this.domNode,"touchstart",this,this._touchStartHandler),o.connect(this.domNode,"touchmove",this,this._touchMoveHandler),o.connect(this.domNode,"touchend",this,this._touchEndHandler),o.connect(this.domNode,"onclick",this,this._clickHandler)]},setPreventDefault:function(t){this._preventDefault=t},disableOnClick:function(){o.disconnect(this.events.pop())},_clickHandler:function(t){this._moved?t.preventDefault():this.onclick(t)},_touchStartHandler:function(t){this._moved=!1,this.client_x=t.targetTouches[0].clientX,this.client_y=t.targetTouches[0].clientY,this.down_x=t.targetTouches[0].pageX,this.down_y=t.targetTouches[0].pageY,t.downX=this.down_x,t.downY=this.down_y,this.onTouchStart(t)},_touchMoveHandler:function(t){this._preventDefault&&t.preventDefault(),this._moved=!0,this.up_x=t.targetTouches[0].pageX,this.cur_x=t.targetTouches[0].pageX-this.down_x,this.cur_y=t.targetTouches[0].pageY-this.down_y,t.curX=this.cur_x,t.curY=this.cur_y,this.onTouchMove(t)},_touchEndHandler:function(t){this._moved?(t.curX=this.cur_x,t.curY=this.cur_y,this.down_x-this.up_x>this._swipeThreshold?t.swipeDirection="left":this.up_x-this.down_x>this._swipeThreshold&&(t.swipeDirection="right")):(t.clientX=this.client_x,t.clientY=this.client_y),this.onTouchEnd(t)},onTouchStart:function(){},onTouchMove:function(){},onTouchEnd:function(){},onclick:function(){}});return i("extend-esri")&&e.setObject("dijit._TouchBase",s,c),s});