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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./viewpointUtils","./ViewState","./libs/gl-matrix/common","./libs/gl-matrix/mat2d","./libs/gl-matrix/vec2"],function(e,t,r,o,n,i,p,a,d,s,c){var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.left=0,t.top=0,t.right=0,t.bottom=0,t}return r(t,e),o([i.property()],t.prototype,"left",void 0),o([i.property()],t.prototype,"top",void 0),o([i.property()],t.prototype,"right",void 0),o([i.property()],t.prototype,"bottom",void 0),t=o([i.subclass("esri.views.2d.PaddedViewState.Padding")],t)}(i.declared(n));return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.content=new a,o.padding=new l,o.size=c.fromValues(0,0),o}return r(t,e),Object.defineProperty(t.prototype,"clipRect",{get:function(){var e=this.worldScreenWidth;if(!e)return null;var t=d.toRadian(this.rotation),r=Math.abs(Math.cos(t)),o=Math.abs(Math.sin(t)),n=this.width*r+this.height*o;if(e>n)return null;var i=c.clone(this.screenCenter),p=s.fromTranslation(s.create(),i);return s.rotate(p,p,t),c.negate(i,i),s.translate(p,p,i),c.transformMat2d(i,this.paddedScreenCenter,p),{top:-Math.round(n),left:Math.round(i[0]-.5*e),right:Math.round(i[0]+.5*e),bottom:+Math.round(n)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"padding",{set:function(e){this._set("padding",e||new l),this._updateContent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{set:function(e){this._set("size",e),this._updateContent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddedScreenCenter",{get:function(){var e=this.content.size,t=this.padding,r=c.scale(c.create(),e,.5);return r[0]=r[0]+t.left,r[1]=r[1]+t.top,r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{set:function(e){var t=e.clone();this.content.viewpoint=e,p.addPadding(t,e,this._get("size"),this._get("padding")),this._set("viewpoint",p.addPadding(t.clone(),e,this._get("size"),this._get("padding")))},enumerable:!0,configurable:!0}),t.prototype._updateContent=function(){var e=c.create(),t=this._get("size"),r=this._get("padding");if(t&&r){var o=this.content;c.set(e,r.left+r.right,r.top+r.bottom),c.subtract(e,t,e),o.size=e;var n=o.viewpoint;n&&(this.viewpoint=n)}},o([i.shared({transform:{dependsOn:["padding"]}})],t.prototype,"properties",void 0),o([i.property({dependsOn:["worldScreenWidth","rotation","paddedScreenCenter","screenCenter"],readOnly:!0})],t.prototype,"clipRect",null),o([i.property()],t.prototype,"content",void 0),o([i.property({type:l})],t.prototype,"padding",null),o([i.property()],t.prototype,"size",null),o([i.property({dependsOn:["size","padding"],readOnly:!0})],t.prototype,"paddedScreenCenter",null),o([i.property()],t.prototype,"viewpoint",null),t=o([i.subclass("esri.views.2d.PaddedViewState")],t)}(i.declared(a))});