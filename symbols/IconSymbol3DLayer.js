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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/kebabDictionary","../core/urlUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/Symbol3DOutline","./support/Symbol3DMaterial","./support/Symbol3DResource","./support/materialUtils"],function(e,t,r,o,i,n,p,l,s,a,u,c){var y=i({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"},{ignoreUnknown:!0}),d=f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.readHref=function(e,t,r){return e?n.read(e,r):t.dataURI},t.prototype.writeHref=function(e,t,r,o){e&&(n.isDataProtocol(e)?t.dataURI=e:t.href=n.write(e,o))},t.prototype.clone=function(){return new f({href:this.href,primitive:this.primitive})},t}(p.declared(u["default"]));o([p.property({json:{write:!0,read:{source:["href","dataURI"]}}})],d.prototype,"href",void 0),o([p.reader("href")],d.prototype,"readHref",null),o([p.writer("href")],d.prototype,"writeHref",null),d=f=o([p.subclass("esri.symbols.support.IconSymbol3DLayerResource")],d);var h=m=function(e){function t(t){var r=e.call(this)||this;return r.material=null,r.resource=null,r.type="icon",r.size=void 0,r.anchor=void 0,r.outline=void 0,r}return r(t,e),t.prototype.clone=function(){return new m({anchor:this.anchor,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})},t}(p.declared(l));o([p.property({type:a["default"]})],h.prototype,"material",void 0),o([p.property({type:d,json:{write:!0}})],h.prototype,"resource",void 0),o([p.property()],h.prototype,"type",void 0),o([p.property(c.screenSizeProperty)],h.prototype,"size",void 0),o([p.property({type:String,json:{read:y.read,write:y.write}})],h.prototype,"anchor",void 0),o([p.property({type:s["default"],json:{write:!0}})],h.prototype,"outline",void 0),h=m=o([p.subclass("esri.symbols.IconSymbol3DLayer")],h);var f,m;return h});