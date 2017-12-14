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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./viewpointUtils","./ViewState","./libs/gl-matrix/vec2","./libs/gl-matrix/mat2d","./libs/gl-matrix/common","../../core/Accessor"],function(e,t,r,n,o,i,p,a,d,s,c){var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.left=0,t.top=0,t.right=0,t.bottom=0,t}return r(t,e),n([o.property()],t.prototype,"left",void 0),n([o.property()],t.prototype,"top",void 0),n([o.property()],t.prototype,"right",void 0),n([o.property()],t.prototype,"bottom",void 0),t=n([o.subclass("esri.views.2d.PaddedViewState.Padding")],t)}(o.declared(c)),u=function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=e.apply(this,t)||this;return n.content=new p,n.padding=new l,n.size=a.fromValues(0,0),n}return r(t,e),Object.defineProperty(t.prototype,"clipRect",{get:function(){var e=this.worldScreenWidth;if(!e)return null;var t=s.toRadian(this.rotation),r=Math.abs(Math.cos(t)),n=Math.abs(Math.sin(t)),o=this.width*r+this.height*n;if(e>o)return null;var i=a.clone(this.screenCenter),p=d.fromTranslation(d.create(),i);return d.rotate(p,p,t),a.negate(i,i),d.translate(p,p,i),a.transformMat2d(i,this.paddedScreenCenter,p),{top:-Math.round(o),left:Math.round(i[0]-.5*e),right:Math.round(i[0]+.5*e),bottom:+Math.round(o)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"padding",{set:function(e){this._set("padding",e||new l),this._updateContent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{set:function(e){this._set("size",e),this._updateContent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddedScreenCenter",{get:function(){var e=this.content.size,t=this.padding,r=a.scale(a.create(),e,.5);return r[0]=r[0]+t.left,r[1]=r[1]+t.top,r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{set:function(e){var t=e.clone();this.content.viewpoint=e,i.addPadding(t,e,this._get("size"),this._get("padding")),this._set("viewpoint",i.addPadding(t.clone(),e,this._get("size"),this._get("padding")))},enumerable:!0,configurable:!0}),t.prototype._updateContent=function(){var e=a.create(),t=this._get("size"),r=this._get("padding");if(t&&r){var n=this.content;a.set(e,r.left+r.right,r.top+r.bottom),a.subtract(e,t,e),n.size=e;var o=n.viewpoint;o&&(this.viewpoint=o)}},n([o.shared({transform:{dependsOn:["padding"]}})],t.prototype,"properties",void 0),n([o.property({dependsOn:["worldScreenWidth","rotation","paddedScreenCenter","screenCenter"],readOnly:!0})],t.prototype,"clipRect",null),n([o.property()],t.prototype,"content",void 0),n([o.property({type:l})],t.prototype,"padding",null),n([o.property()],t.prototype,"size",null),n([o.property({dependsOn:["size","padding"],readOnly:!0})],t.prototype,"paddedScreenCenter",null),n([o.property()],t.prototype,"viewpoint",null),t=n([o.subclass("esri.views.2d.PaddedViewState")],t)}(o.declared(p));return u});