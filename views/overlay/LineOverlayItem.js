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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","../../libs/maquette/index"],(function(t,e,r,o,i,s){"use strict";var n=function(t){function e(e){var r=t.call(this,e)||this;return r.startX=0,r.startY=0,r.endX=0,r.endY=0,r.width=1,r.color=[0,0,0,.5],r.visible=!0,r}return r.__extends(e,t),Object.defineProperty(e.prototype,"startPosition",{get:function(){return[this.startX,this.startY]},set:function(t){this._set("startX",t[0]),this._set("startY",t[1])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"endPosition",{get:function(){return[this.endX,this.endY]},set:function(t){this._set("endX",t[0]),this._set("endY",t[1])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strokeStyle",{get:function(){var t=this.color;return"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineCap",{get:function(){return"round"},enumerable:!1,configurable:!0}),e.prototype.render=function(){var t=this.calculateCoordinates(a),e=t.height,r=t.left,o=t.top,i=t.width,n=t.x1,p=t.x2,d=t.y1,h=t.y2,l="stroke: "+this.strokeStyle+"; stroke-width: "+this.width+"; stroke-linecap: "+this.lineCap+";";return s.h("div",{classes:{"esri-line-overlay-item":!0},styles:{left:r+"px",top:o+"px",width:i+"px",height:e+"px",visibility:this.visible?"visible":"hidden"}},[s.h("svg",{width:i,height:e},[s.h("line",{x1:n,y1:d,x2:p,y2:h,style:l})])])},e.prototype.renderCanvas=function(t){if(this.visible){t.strokeStyle=this.strokeStyle,t.lineWidth=this.width,t.lineCap=this.lineCap;var e=this.calculateCoordinates(a);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}},e.prototype.calculateCoordinates=function(t){var e=Math.min(this.startX,this.endX),r=Math.max(this.startX,this.endX),o=Math.min(this.startY,this.endY),i=Math.max(this.startY,this.endY),s=this.width;return t.left=e-s,t.top=o-s,t.width=r-e+2*s,t.height=Math.max(20,i-o+2*s),t.x1=this.startX-e+s,t.y1=this.startY-o+s,t.x2=this.endX-e+s,t.y2=this.endY-o+s,t},r.__decorate([i.property()],e.prototype,"startX",void 0),r.__decorate([i.property()],e.prototype,"startY",void 0),r.__decorate([i.property()],e.prototype,"endX",void 0),r.__decorate([i.property()],e.prototype,"endY",void 0),r.__decorate([i.property({dependsOn:["startX","startY"]})],e.prototype,"startPosition",null),r.__decorate([i.property({dependsOn:["endX","endY"]})],e.prototype,"endPosition",null),r.__decorate([i.property()],e.prototype,"width",void 0),r.__decorate([i.property()],e.prototype,"color",void 0),r.__decorate([i.property()],e.prototype,"visible",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["color"]})],e.prototype,"strokeStyle",null),e=r.__decorate([i.subclass("esri.views.overlay.LineOverlayItem")],e)}(o),a={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0};return n}));