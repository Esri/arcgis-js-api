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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./../../core/libs/gl-matrix-2/gl-matrix","./viewpointUtils","./ViewState"],function(e,t,r,o,i,n,p,a,c){var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.left=0,t.top=0,t.right=0,t.bottom=0,t}return r(t,e),o([n.property()],t.prototype,"left",void 0),o([n.property()],t.prototype,"top",void 0),o([n.property()],t.prototype,"right",void 0),o([n.property()],t.prototype,"bottom",void 0),t=o([n.subclass("esri.views.2d.PaddedViewState.Padding")],t)}(n.declared(i));return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.content=new c,o._updateContent=function(){var e=p.vec2f64.create();return function(){var t=o._get("size"),r=o._get("padding");if(t&&r){var i=o.content;p.vec2.set(e,r.left+r.right,r.top+r.bottom),p.vec2.subtract(e,t,e),p.vec2.copy(i.size,e);var n=i.viewpoint;n&&(o.viewpoint=n)}}}(),o.watch(["size","padding"],o._updateContent,!0),o.padding=new d,o.size=[0,0],o}return r(t,e),Object.defineProperty(t.prototype,"padding",{set:function(e){this._set("padding",e||new d)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{set:function(e){if(e){var t=e.clone();this.content.viewpoint=e,a.addPadding(t,e,this._get("size"),this._get("padding"));var r=this._viewpoint2D,o=t.targetGeometry;r.center[0]=o.x,r.center[1]=o.y,r.rotation=t.rotation,r.scale=t.scale,r.spatialReference=o.spatialReference,this._update()}},enumerable:!0,configurable:!0}),o([n.property()],t.prototype,"content",void 0),o([n.property({type:d})],t.prototype,"padding",null),o([n.property()],t.prototype,"viewpoint",null),t=o([n.subclass("esri.views.2d.PaddedViewState")],t)}(n.declared(c))});