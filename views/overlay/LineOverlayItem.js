// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","./ViewOverlayItem","../../widgets/libs/maquette/maquette"],function(t,e,r,i,s,o,n,p){var a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startX=0,e.startY=0,e.endX=0,e.endY=0,e.width=1,e.color=[0,0,0,1],e.visible=!0,e}return r(e,t),Object.defineProperty(e.prototype,"startPosition",{get:function(){return[this.startX,this.startY]},set:function(t){this._set("startX",t[0]),this._set("startY",t[1])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"endPosition",{get:function(){return[this.endX,this.endY]},set:function(t){this._set("endX",t[0]),this._set("endY",t[1])},enumerable:!0,configurable:!0}),e.prototype.render=function(){var t=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),r=Math.min(this.startY,this.endY),i=Math.max(this.startY,this.endY),s=this.width,o=t-s,n=r-s,a=e-t+2*s,d=Math.max(20,i-r+2*s),h=this.startX-t+s,y=this.startY-r+s,l=this.endX-t+s,u=this.endY-r+s,c="rgba(0, 0, 0, 0.5)",v=this.width,b="<svg width="+a+" height="+d+">"+("<line x1="+h+" y1="+y+" x2="+l+" y2="+u+' style="stroke: '+c+"; stroke-width: "+v+'; stroke-linecap: round;"></line>')+"</svg>";return p.h("div",{classes:{"esri-line-overlay-item":!0},styles:{left:o+"px",top:n+"px",width:a+"px",height:d+"px",visibility:this.visible?"visible":"hidden"},innerHTML:b})},i([s.property({type:Number})],e.prototype,"startX",void 0),i([s.property({type:Number})],e.prototype,"startY",void 0),i([s.property({type:Number})],e.prototype,"endX",void 0),i([s.property({type:Number})],e.prototype,"endY",void 0),i([s.property({dependsOn:["startX","startY"]})],e.prototype,"startPosition",null),i([s.property({dependsOn:["endX","endY"]})],e.prototype,"endPosition",null),i([s.property({type:Number})],e.prototype,"width",void 0),i([s.property({type:Array})],e.prototype,"color",void 0),i([s.property({type:Boolean})],e.prototype,"visible",void 0),e=i([s.subclass("esri.views.overlay.LineOverlayItem")],e)}(s.declared(o,n));return a});