// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./ViewOverlayItem","maquette"],function(t,e,r,i,s,o,n,p){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startX=0,e.startY=0,e.endX=0,e.endY=0,e.width=1,e.color=[0,0,0,1],e.visible=!0,e}return r(e,t),Object.defineProperty(e.prototype,"startPosition",{get:function(){return[this.startX,this.startY]},set:function(t){this._set("startX",t[0]),this._set("startY",t[1])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"endPosition",{get:function(){return[this.endX,this.endY]},set:function(t){this._set("endX",t[0]),this._set("endY",t[1])},enumerable:!0,configurable:!0}),e.prototype.render=function(){var t=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),r=Math.min(this.startY,this.endY),i=Math.max(this.startY,this.endY),s=this.width,o=t-s,n=r-s,d=e-t+2*s,a=Math.max(20,i-r+2*s),h=this.startX-t+s,l=this.startY-r+s,y=this.endX-t+s,c=this.endY-r+s,u=this.width,v="<svg width="+d+" height="+a+"><line x1="+h+" y1="+l+" x2="+y+" y2="+c+' style="stroke: rgba(0, 0, 0, 0.5); stroke-width: '+u+'; stroke-linecap: round;"></line></svg>';return p.h("div",{classes:{"esri-line-overlay-item":!0},styles:{left:o+"px",top:n+"px",width:d+"px",height:a+"px",visibility:this.visible?"visible":"hidden"},innerHTML:v})},i([o.property()],e.prototype,"startX",void 0),i([o.property()],e.prototype,"startY",void 0),i([o.property()],e.prototype,"endX",void 0),i([o.property()],e.prototype,"endY",void 0),i([o.property({dependsOn:["startX","startY"]})],e.prototype,"startPosition",null),i([o.property({dependsOn:["endX","endY"]})],e.prototype,"endPosition",null),i([o.property()],e.prototype,"width",void 0),i([o.property()],e.prototype,"color",void 0),i([o.property()],e.prototype,"visible",void 0),e=i([o.subclass("esri.views.overlay.LineOverlayItem")],e)}(o.declared(s,n))});