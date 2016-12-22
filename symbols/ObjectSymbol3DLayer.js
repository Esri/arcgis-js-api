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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/promiseUtils","../core/Error","./Symbol3DLayer","./support/Symbol3DMaterial","./support/Symbol3DResource","../views/3d/support/aaBoundingBox","../views/3d/layers/graphics/Graphics3DObjectSymbolLayer","../views/3d/layers/graphics/objectResourceUtils","../core/accessorSupport/decorators"],function(e,r,t,o,i,s,n,h,p,c,u,a,d){var l=function(e){function r(r){e.call(this),this.material=null,this.resource=null,this.type="Object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.heading=void 0}return t(r,e),r.prototype.computeResourceSize=function(){return this._fetchBoundingBox().then(function(e){return c.size(e)})},r.prototype.computeSize=function(){var e=this;return this.computeResourceSize().then(function(r){if(null==e.width&&null==e.height&&null==e.depth)return r;for(var t,o=[e.width,e.height,e.depth],i=0;3>i;i++){var s=o[i];if(null!=s){t=s/r[i];break}}for(var i=0;3>i;i++)null==o[i]&&(o[i]=r[i]*t);return o})},r.prototype.clone=function(){return new r({heading:this.heading,anchor:this.anchor,depth:this.depth,enabled:this.enabled,height:this.height,material:this.material&&this.material.clone(),resource:this.resource&&this.resource.clone(),width:this.width})},r.prototype._fetchBoundingBox=function(){var e=this;if("string"==typeof this.resource.href){var r=this.resource.href;return r===this._cachedResourceUrl?i.resolve(this._cachedResourceBoundingBox):a.fetch(r).then(function(t){return e._cachedResourceBoundingBox=a.computeBoundingBox(t),e._cachedResourceUrl=r,e._cachedResourceBoundingBox})}var t=u.PRIMITIVE_BOUNDING_BOX[this.resource.primitive];return t?i.resolve(t):i.reject(new s("symbol:invalid-resource","The symbol does not have a valid resource"))},o([d.property({type:h["default"]})],r.prototype,"material",void 0),o([d.property({type:p["default"],json:{writable:!0}})],r.prototype,"resource",void 0),o([d.property()],r.prototype,"type",void 0),o([d.property({json:{writable:!0}})],r.prototype,"width",void 0),o([d.property({json:{writable:!0}})],r.prototype,"height",void 0),o([d.property({json:{writable:!0}})],r.prototype,"depth",void 0),o([d.property({json:{writable:!0}})],r.prototype,"anchor",void 0),o([d.property({json:{writable:!0}})],r.prototype,"heading",void 0),r=o([d.subclass("esri.symbols.ObjectSymbol3DLayer")],r)}(d.declared(n));return l});