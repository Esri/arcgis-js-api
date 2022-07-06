// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/dom","dojo/has","../kernel"],(function(t,e,o,n,i,c){var s=t(null,{declaredClass:"esri.dijit._TouchBase",_preventDefault:!0,_swipeThreshold:20,constructor:function(t,e){this.domNode=n.byId(t),this.events=[o.connect(this.domNode,"touchstart",this,this._touchStartHandler),o.connect(this.domNode,"touchmove",this,this._touchMoveHandler),o.connect(this.domNode,"touchend",this,this._touchEndHandler),o.connect(this.domNode,"onclick",this,this._clickHandler)]},setPreventDefault:function(t){this._preventDefault=t},disableOnClick:function(){o.disconnect(this.events.pop())},_clickHandler:function(t){this._moved?t.preventDefault():this.onclick(t)},_touchStartHandler:function(t){this._moved=!1,this.client_x=t.targetTouches[0].clientX,this.client_y=t.targetTouches[0].clientY,this.down_x=t.targetTouches[0].pageX,this.down_y=t.targetTouches[0].pageY,t.downX=this.down_x,t.downY=this.down_y,this.onTouchStart(t)},_touchMoveHandler:function(t){this._preventDefault&&t.preventDefault(),this._moved=!0,this.up_x=t.targetTouches[0].pageX,this.cur_x=t.targetTouches[0].pageX-this.down_x,this.cur_y=t.targetTouches[0].pageY-this.down_y,t.curX=this.cur_x,t.curY=this.cur_y,this.onTouchMove(t)},_touchEndHandler:function(t){this._moved?(t.curX=this.cur_x,t.curY=this.cur_y,this.down_x-this.up_x>this._swipeThreshold?t.swipeDirection="left":this.up_x-this.down_x>this._swipeThreshold&&(t.swipeDirection="right")):(t.clientX=this.client_x,t.clientY=this.client_y),this.onTouchEnd(t)},onTouchStart:function(t){},onTouchMove:function(t){},onTouchEnd:function(t){},onclick:function(t){}});return i("extend-esri")&&e.setObject("dijit._TouchBase",s,c),s}));