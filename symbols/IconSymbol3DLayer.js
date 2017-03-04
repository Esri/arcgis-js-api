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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/kebabDictionary","../core/promiseUtils","../core/screenUtils","../core/urlUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/Symbol3DOutline","./support/Symbol3DMaterial","./support/Symbol3DResource","../views/3d/layers/graphics/Graphics3DIconSymbolLayer"],function(e,r,t,o,i,n,p,s,u,c,a,l,h,y,f){var d=n({topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"}),m=b=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.readHref=function(e,r,t){return e?u.read(e,t):r.dataURI},r.prototype.writeHref=function(e,r,t,o){e&&(u.isDataProtocol(e)?r.dataURI=e:r.href=u.write(e,o))},r.prototype.clone=function(){return new b({href:this.href,primitive:this.primitive})},r}(c.declared(y["default"]));o([c.property({json:{write:!0,read:{source:["href","dataURI"]}}})],m.prototype,"href",void 0),o([c.reader("href")],m.prototype,"readHref",null),o([c.writer("href")],m.prototype,"writeHref",null),m=b=o([c.subclass("esri.symbols.support.IconSymbol3DLayerResource")],m);var v=S=function(e){function r(r){var t=e.call(this)||this;return t.material=null,t.resource=null,t.type="Icon",t.size=void 0,t.anchor=void 0,t.outline=void 0,t}return t(r,e),r.prototype.readAnchor=function(e){return d.fromJSON(e)},r.prototype.writeAnchor=function(e,r){r.anchor=d.toJSON(e)},r.prototype.computeResourceSize=function(){return this.resource.href?this._fetchImage().then(function(e){return[e.width,e.height]}):this.resource.primitive?p.resolve(f.PRIMITIVE_SIZE):void 0},r.prototype.computeSize=function(){var e=this;return this.computeResourceSize().then(function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]})},r.prototype.clone=function(){return new S({anchor:this.anchor,enabled:this.enabled,material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})},r.prototype._fetchImage=function(){return i(this.resource.href,{responseType:"image"}).then(function(e){return e.data})},r}(c.declared(a));o([c.property({type:h["default"]})],v.prototype,"material",void 0),o([c.property({type:m,json:{write:!0}})],v.prototype,"resource",void 0),o([c.property()],v.prototype,"type",void 0),o([c.property({json:{write:!0}}),c.cast(s.toPt)],v.prototype,"size",void 0),o([c.property({type:String})],v.prototype,"anchor",void 0),o([c.reader("anchor")],v.prototype,"readAnchor",null),o([c.writer("anchor")],v.prototype,"writeAnchor",null),o([c.property({type:l["default"],json:{write:!0}})],v.prototype,"outline",void 0),v=S=o([c.subclass("esri.symbols.IconSymbol3DLayer")],v);var b,S;return v});