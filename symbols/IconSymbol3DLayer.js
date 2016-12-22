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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/kebabDictionary","../core/promiseUtils","../core/screenUtils","../core/urlUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/Symbol3DOutline","./support/Symbol3DMaterial","./support/Symbol3DResource","../views/3d/layers/graphics/Graphics3DIconSymbolLayer"],function(e,t,r,o,i,n,p,s,c,u,a,l,h,y,f){var d=n({topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"}),m=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.readHref=function(e,t,r){return e?c.read(e,r):t.dataURI},t.prototype.writeHref=function(e,t,r){e&&(c.isDataProtocol(e)?t.dataURI=e:t.href=c.write(e,r))},t.prototype.clone=function(){return new t({href:this.href,primitive:this.primitive})},o([u.property({json:{writable:!0,readFrom:["href","dataURI"]}})],t.prototype,"href",void 0),o([u.read("href")],t.prototype,"readHref",null),o([u.write("href")],t.prototype,"writeHref",null),t=o([u.subclass("esri.symbols.support.IconSymbol3DLayerResource")],t)}(u.declared(y["default"])),b=function(e){function t(t){e.call(this),this.material=null,this.resource=null,this.type="Icon",this.size=void 0,this.anchor=void 0,this.outline=void 0}return r(t,e),t.prototype.readAnchor=function(e){return d.fromJSON(e)},t.prototype.writeAnchor=function(e,t){t.anchor=d.toJSON(e)},t.prototype.computeResourceSize=function(){return this.resource.href?this._fetchImage().then(function(e){return[e.width,e.height]}):this.resource.primitive?p.resolve(f.PRIMITIVE_SIZE):void 0},t.prototype.computeSize=function(){var e=this;return this.computeResourceSize().then(function(t){if(null==e.size)return t;var r=t[0]/t[1];return r>1?[e.size,e.size/r]:[e.size*r,e.size]})},t.prototype.clone=function(){return new t({anchor:this.anchor,enabled:this.enabled,material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})},t.prototype._fetchImage=function(){return i(this.resource.href,{responseType:"image"}).then(function(e){return e.data})},o([u.property({type:h["default"]})],t.prototype,"material",void 0),o([u.property({type:m,json:{writable:!0}})],t.prototype,"resource",void 0),o([u.property()],t.prototype,"type",void 0),o([u.property({json:{writable:!0}}),u.cast(s.toPt)],t.prototype,"size",void 0),o([u.property({type:String})],t.prototype,"anchor",void 0),o([u.read("anchor")],t.prototype,"readAnchor",null),o([u.write("anchor")],t.prototype,"writeAnchor",null),o([u.property({type:l["default"],json:{writable:!0}})],t.prototype,"outline",void 0),t=o([u.subclass("esri.symbols.IconSymbol3DLayer")],t)}(u.declared(a));return b});