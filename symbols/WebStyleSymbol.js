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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/urlUtils","./Symbol","../portal/Portal","./support/symbolUtils"],function(t,e,r,o,l,p,y,n,i){var s=function(t){function e(e){t.call(this,e),this.styleName=null,this.portal=null,this.styleUrl=null,this.name=null,this.type="web-style-symbol"}return r(e,t),e.prototype._readStyleUrl=function(t,e,r){var o=r&&r.url&&r.url.path;return p.normalize(p.makeAbsolute(t,o))},e.prototype._writeStyleUrl=function(t,e,r){var o=r&&r.url&&r.url.path;e.styleUrl=p.makeRelative(t,o)},e.prototype._writeType=function(t,e,r){e.type="styleSymbolReference"},e.prototype.read=function(t,e){return this.portal=e?e.portal:void 0,this.inherited(arguments,[t,e]),this},e.prototype.clone=function(){return new e({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},e.prototype.fetchSymbol=function(){var t=this;return i.fetchStyle(this,{portal:this.portal}).then(function(e){return i.fetchSymbolFromStyle(e,t.name)})},o([l.property({json:{writable:!1}})],e.prototype,"color",void 0),o([l.property({type:String,json:{writable:!0}})],e.prototype,"styleName",void 0),o([l.property({type:n,json:{writable:!1}})],e.prototype,"portal",void 0),o([l.property({type:String,json:{writable:!0}})],e.prototype,"styleUrl",void 0),o([l.read("styleUrl")],e.prototype,"_readStyleUrl",null),o([l.write("styleUrl")],e.prototype,"_writeStyleUrl",null),o([l.property({type:String,json:{writable:!0}})],e.prototype,"name",void 0),o([l.property({type:String,readOnly:!0,json:{readable:!1}})],e.prototype,"type",void 0),o([l.write("type")],e.prototype,"_writeType",null),e=o([l.subclass("esri.symbols.WebStyleSymbol")],e)}(l.declared(y));return s});