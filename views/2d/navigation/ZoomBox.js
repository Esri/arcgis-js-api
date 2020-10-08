// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Accessor","../../../core/screenUtils","../../../core/accessorSupport/decorators"],(function(t,e,r,i,o,n){"use strict";var a="esri-zoom-box__container",s="esri-zoom-box__overlay",h="esri-zoom-box__overlay-background",l="esri-zoom-box__outline",c="Shift",u="Ctrl";return function(t){function e(e){var r=t.call(this,e)||this;return r._container=null,r._overlay=null,r._backgroundShape=null,r._boxShape=null,r._box={x:0,y:0,width:0,height:0},r._redraw=r._redraw.bind(r),r}return r.__extends(e,t),e.prototype.destroy=function(){this.view=null},Object.defineProperty(e.prototype,"view",{set:function(t){var e=this;this._handles&&this._handles.forEach((function(t){t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[c],(function(t){return e._handleDrag(t,1)})),t.on("drag",[c,u],(function(t){return e._handleDrag(t,-1)})))},enumerable:!1,configurable:!0}),e.prototype._start=function(){this._createContainer(),this._createOverlay(),this.navigation.begin()},e.prototype._update=function(t,e,r,i){this._box.x=t,this._box.y=e,this._box.width=r,this._box.height=i,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))},e.prototype._end=function(t,e,r,i,n){var a=this.view,s=a.toMap(o.createScreenPoint(t+.5*r,e+.5*i)),h=Math.max(r/a.width,i/a.height);-1===n&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:s,scale:a.scale*h})},e.prototype._updateBox=function(t,e,r,i){var o=this._boxShape;o.setAttributeNS(null,"x",""+t),o.setAttributeNS(null,"y",""+e),o.setAttributeNS(null,"width",""+r),o.setAttributeNS(null,"height",""+i),o.setAttributeNS(null,"class",l)},e.prototype._updateBackground=function(t,e,r,i){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,r,i,this.view.width,this.view.height))},e.prototype._createContainer=function(){var t=document.createElement("div");t.className=a,this.view.root.appendChild(t),this._container=t},e.prototype._createOverlay=function(){var t=this.view.width,e=this.view.height,r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),r.setAttributeNS(null,"class",h);var i=document.createElementNS("http://www.w3.org/2000/svg","rect"),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.setAttributeNS(null,"class",s),o.appendChild(r),o.appendChild(i),this._container.appendChild(o),this._backgroundShape=r,this._boxShape=i,this._overlay=o},e.prototype._destroyOverlay=function(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null},e.prototype._toSVGPath=function(t,e,r,i,o,n){var a=t+r,s=e+i;return"M 0 0 L "+o+" 0 L "+o+" "+n+" L 0 "+n+" ZM "+t+" "+e+" L "+t+" "+s+" L "+a+" "+s+" L "+a+" "+e+" Z"},e.prototype._handleDrag=function(t,e){var r,i,o,n,a=t.x,s=t.y,h=t.origin.x,l=t.origin.y;switch(a>h?(r=h,o=a-h):(r=a,o=h-a),s>l?(i=l,n=s-l):(i=s,n=l-s),t.action){case"start":this._start();break;case"update":this._update(r,i,o,n);break;case"end":this._end(r,i,o,n,e)}t.stopPropagation()},e.prototype._redraw=function(){if(this._rafId&&(this._rafId=null,this._overlay)){var t=this._box,e=t.x,r=t.y,i=t.width,o=t.height;this._updateBox(e,r,i,o),this._updateBackground(e,r,i,o),this._rafId=requestAnimationFrame(this._redraw)}},r.__decorate([n.property()],e.prototype,"navigation",void 0),r.__decorate([n.property()],e.prototype,"view",null),e=r.__decorate([n.subclass("esri.views.2d.navigation.ZoomBox")],e)}(i)}));