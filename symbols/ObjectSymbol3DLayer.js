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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/promiseUtils","../core/Error","./Symbol3DLayer","./support/Symbol3DMaterial","./support/Symbol3DResource","../views/3d/support/aaBoundingBox","../views/3d/layers/graphics/Graphics3DObjectSymbolLayer","../views/3d/layers/graphics/objectResourceUtils","../core/accessorSupport/decorators"],function(e,r,t,o,i,s,n,h,c,p,u,a,d){var l=10,y=v=function(e){function r(r){var t=e.call(this)||this;return t.material=null,t.resource=null,t.type="Object",t.width=void 0,t.height=void 0,t.depth=void 0,t.anchor=void 0,t.heading=void 0,t}return t(r,e),r.prototype.computeResourceSize=function(){return this._fetchBoundingBox().then(function(e){return p.size(e)})},r.prototype.computeSize=function(){var e=this;return this.computeResourceSize().then(function(r){return e.computeSizeWithResourceSize(r)})},r.prototype.computeSizeWithResourceSize=function(e){if(null==this.width&&null==this.height&&null==this.depth){var r=this._isPrimitive()?l:1;return[r*e[0],r*e[1],r*e[2]]}for(var t,o=[this.width,this.depth,this.height],i=0;3>i;i++){var s=o[i];if(null!=s){t=s/e[i];break}}for(var i=0;3>i;i++)null==o[i]&&(o[i]=e[i]*t);return o},r.prototype.clone=function(){return new v({heading:this.heading,anchor:this.anchor,depth:this.depth,enabled:this.enabled,height:this.height,material:this.material&&this.material.clone(),resource:this.resource&&this.resource.clone(),width:this.width})},r.prototype._fetchBoundingBox=function(){var e=this;if(this._isPrimitive()){var r=u.PRIMITIVE_BOUNDING_BOX[this.resource.primitive];return r?i.resolve(r):i.reject(new s("symbol:invalid-resource","The symbol does not have a valid resource"))}var t=this.resource.href;return t===this._cachedResourceUrl?i.resolve(this._cachedResourceBoundingBox):a.fetch(t).then(function(r){return e._cachedResourceBoundingBox=a.computeBoundingBox(r),e._cachedResourceUrl=t,e._cachedResourceBoundingBox})},r.prototype._isPrimitive=function(){return!this.resource||"string"!=typeof this.resource.href},r}(d.declared(n));o([d.property({type:h["default"]})],y.prototype,"material",void 0),o([d.property({type:c["default"],json:{write:!0}})],y.prototype,"resource",void 0),o([d.property()],y.prototype,"type",void 0),o([d.property({json:{write:!0}})],y.prototype,"width",void 0),o([d.property({json:{write:!0}})],y.prototype,"height",void 0),o([d.property({json:{write:!0}})],y.prototype,"depth",void 0),o([d.property({json:{write:!0}})],y.prototype,"anchor",void 0),o([d.property({json:{write:!0}})],y.prototype,"heading",void 0),y=v=o([d.subclass("esri.symbols.ObjectSymbol3DLayer")],y);var v;return y});