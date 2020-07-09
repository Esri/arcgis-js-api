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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","../../core/libs/gl-matrix-2/vec2","../../core/libs/gl-matrix-2/vec2f64","./viewpointUtils","./ViewState"],(function(e,t,r,o,i,p,a,n,d){var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.left=0,t.top=0,t.right=0,t.bottom=0,t}return r.__extends(t,e),r.__decorate([i.property()],t.prototype,"left",void 0),r.__decorate([i.property()],t.prototype,"top",void 0),r.__decorate([i.property()],t.prototype,"right",void 0),r.__decorate([i.property()],t.prototype,"bottom",void 0),t=r.__decorate([i.subclass("esri.views.2d.PaddedViewState.Padding")],t)}(o);return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o,i=e.apply(this,t)||this;return i.paddedViewState=new d,i._updateContent=(o=a.vec2f64.create(),function(){var e=i._get("size"),t=i._get("padding");if(e&&t){var r=i.paddedViewState;p.vec2.set(o,t.left+t.right,t.top+t.bottom),p.vec2.subtract(o,e,o),p.vec2.copy(r.size,o);var a=r.viewpoint;a&&(i.viewpoint=a)}}),i.watch(["size","padding"],i._updateContent,!0),i.padding=new c,i.size=[0,0],i}return r.__extends(t,e),Object.defineProperty(t.prototype,"padding",{set:function(e){this._set("padding",e||new c)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{set:function(e){if(e){var t=e.clone();this.paddedViewState.viewpoint=e,n.addPadding(t,e,this._get("size"),this._get("padding"));var r=this._viewpoint2D,o=t.targetGeometry;r.center[0]=o.x,r.center[1]=o.y,r.rotation=t.rotation,r.scale=t.scale,r.spatialReference=o.spatialReference,this._update()}},enumerable:!0,configurable:!0}),r.__decorate([i.property()],t.prototype,"paddedViewState",void 0),r.__decorate([i.property({type:c})],t.prototype,"padding",null),r.__decorate([i.property()],t.prototype,"viewpoint",null),t=r.__decorate([i.subclass("esri.views.2d.PaddedViewState")],t)}(d)}));