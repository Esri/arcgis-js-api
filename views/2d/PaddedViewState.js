// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./viewpointUtils","./ViewState","./math/vec2","./math/mat2d","./math/common","../../core/Accessor"],function(e,t,r,n,i,o,a,p,d,s,c){var u=function(e){function t(){e.apply(this,arguments),this.left=0,this.top=0,this.right=0,this.bottom=0}return r(t,e),t=n([i.subclass("esri.views.2d.PaddedViewState.Padding")],t)}(i.declared(c)),h=function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];e.apply(this,t),this.content=new a,this.padding=new u,this.size=p.fromValues(0,0)}return r(t,e),Object.defineProperty(t.prototype,"clipRect",{get:function(){var e=this.worldScreenWidth;if(!e)return null;var t=s.toRadian(this.rotation),r=Math.abs(Math.cos(t)),n=Math.abs(Math.sin(t)),i=this.width*r+this.height*n;if(e>i)return null;var o=p.clone(this.screenCenter),a=d.fromTranslation(d.create(),o);return d.rotate(a,a,t),p.negate(o,o),d.translate(a,a,o),p.transformMat2d(o,this.paddedScreenCenter,a),{top:-Math.round(i),left:Math.round(o[0]-.5*e),right:Math.round(o[0]+.5*e),bottom:+Math.round(i)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"padding",{set:function(e){this._set("padding",e||new u),this._updateContent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{set:function(e){this._set("size",e),this._updateContent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddedScreenCenter",{get:function(){var e=this.content.size,t=this.padding,r=p.scale(p.create(),e,.5);return r[0]=r[0]+t.left,r[1]=r[1]+t.top,r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{set:function(e){var t=e.clone();this.content.viewpoint=e,o.addPadding(t,e,this._get("size"),this._get("padding")),this._set("viewpoint",o.addPadding(t.clone(),e,this._get("size"),this._get("padding")))},enumerable:!0,configurable:!0}),t.prototype._updateContent=function(){var e=p.create(),t=this._get("size"),r=this._get("padding");if(t&&r){var n=this.content;p.set(e,r.left+r.right,r.top+r.bottom),p.subtract(e,t,e),n.size=e;var i=n.viewpoint;i&&(this.viewpoint=i)}},n([i.shared({transform:{dependsOn:["padding"]}})],t.prototype,"properties",void 0),n([i.property({dependsOn:["worldScreenWidth","rotation","paddedScreenCenter","screenCenter"],readOnly:!0})],t.prototype,"clipRect",null),n([i.property()],t.prototype,"content",void 0),n([i.property({type:u})],t.prototype,"padding",null),n([i.property()],t.prototype,"size",null),n([i.property({dependsOn:["size","padding"],readOnly:!0})],t.prototype,"paddedScreenCenter",null),n([i.property()],t.prototype,"viewpoint",null),t=n([i.subclass("esri.views.2d.PaddedViewState")],t)}(i.declared(a));return h});