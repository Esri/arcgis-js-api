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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/kebabDictionary","../core/urlUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DOutline","./support/Symbol3DResource"],function(e,t,r,o,i,n,p,l,s,a,c){var u=i({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"},{ignoreUnknown:!0}),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i=t,t.prototype.readHref=function(e,t,r){return e?n.read(e,r):t.dataURI},t.prototype.writeHref=function(e,t,r,o){e&&(n.isDataProtocol(e)?t.dataURI=e:(t.href=n.write(e,o),n.isAbsolute(t.href)&&(t.href=n.normalize(t.href))))},t.prototype.clone=function(){return new i({href:this.href,primitive:this.primitive})},o([p.property({json:{write:!0,read:{source:["href","dataURI"]}}})],t.prototype,"href",void 0),o([p.reader("href")],t.prototype,"readHref",null),o([p.writer("href",{href:{type:String},dataURI:{type:String}})],t.prototype,"writeHref",null),t=i=o([p.subclass("esri.symbols.support.IconSymbol3DLayerResource")],t);var i}(p.declared(c.default));return function(e){function t(t){var r=e.call(this)||this;return r.material=null,r.resource=null,r.type="icon",r.size=12,r.anchor=void 0,r.outline=void 0,r}return r(t,e),i=t,t.prototype.clone=function(){return new i({anchor:this.anchor,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})},o([p.property()],t.prototype,"material",void 0),o([p.property({type:y,json:{write:!0}})],t.prototype,"resource",void 0),o([p.property()],t.prototype,"type",void 0),o([p.property(s.screenSizeProperty)],t.prototype,"size",void 0),o([p.property({type:String,json:{read:u.read,write:u.write}})],t.prototype,"anchor",void 0),o([p.property({type:a.default,json:{write:!0}})],t.prototype,"outline",void 0),t=i=o([p.subclass("esri.symbols.IconSymbol3DLayer")],t);var i}(p.declared(l))});