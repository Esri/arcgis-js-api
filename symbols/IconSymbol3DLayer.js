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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/kebabDictionary","../core/screenUtils","../core/urlUtils","./Symbol3DLayer","./support/Symbol3DOutline","./support/Symbol3DResource","../core/accessorSupport/decorators"],function(t,e,r,o,i,p,n,s,a,l,c){var u=i({topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"}),h=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.prototype.readHref=function(t,e,r){return t?n.read(t,r):e.dataURI},e.prototype.writeHref=function(t,e,r){t&&(n.isDataProtocol(t)?e.dataURI=t:e.href=n.write(t,r))},e.prototype.clone=function(){return new e({href:this.href,primitive:this.primitive})},o([c.property({json:{writable:!0,readFrom:["href","dataURI"]}})],e.prototype,"href",void 0),o([c.read("href")],e.prototype,"readHref",null),o([c.write("href")],e.prototype,"writeHref",null),e=o([c.subclass("esri.symbols.support.IconSymbol3DLayerResource")],e)}(c.declared(l["default"])),y=function(t){function e(e){t.call(this),this.material=null,this.resource=null,this.type="Icon",this.size=void 0,this.anchor=void 0,this.outline=void 0}return r(e,t),e.prototype.readAnchor=function(t){return u.fromJSON(t)},e.prototype.writeAnchor=function(t,e){e.anchor=u.toJSON(t)},e.prototype.clone=function(){return new e({anchor:this.anchor,enabled:this.enabled,material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})},o([c.property()],e.prototype,"material",void 0),o([c.property({type:h,json:{writable:!0}})],e.prototype,"resource",void 0),o([c.property()],e.prototype,"type",void 0),o([c.property({json:{writable:!0}}),c.cast(p.toPt)],e.prototype,"size",void 0),o([c.property({type:String})],e.prototype,"anchor",void 0),o([c.read("anchor")],e.prototype,"readAnchor",null),o([c.write("anchor")],e.prototype,"writeAnchor",null),o([c.property({type:a["default"],json:{writable:!0}})],e.prototype,"outline",void 0),e=o([c.subclass("esri.symbols.IconSymbol3DLayer")],e)}(c.declared(s));return y});