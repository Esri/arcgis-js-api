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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/urlUtils","../core/Logger","../core/requireUtils","./Symbol","../portal/Portal"],function(t,e,r,o,l,p,y,i,n,s){var a=y.getLogger("esri.symbols.WebStyleSymbol"),u=function(e){function y(t){e.call(this,t),this.styleName=null,this.portal=null,this.styleUrl=null,this.name=null,this.type="web-style-symbol"}return r(y,e),y.prototype._readStyleUrl=function(t,e,r){return p.read(t,r)},y.prototype._writeStyleUrl=function(t,e,r){e.styleUrl=p.write(t,r)},y.prototype._writeType=function(t,e,r){e.type="styleSymbolReference"},y.prototype.read=function(t,e){return this.portal=e?e.portal:void 0,this.inherited(arguments,[t,e]),this},y.prototype.clone=function(){return new y({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},y.prototype.fetchSymbol=function(){var e=this;return i.when(t,"./support/symbolUtils").then(function(t){var r=t.fetchStyleSymbol(e,{portal:e.portal});return r.otherwise(function(t){a.error("#fetchSymbol()","Failed to create symbol from style",t)}),r})},o([l.property({json:{writable:!1}})],y.prototype,"color",void 0),o([l.property({type:String,json:{writable:!0}})],y.prototype,"styleName",void 0),o([l.property({type:s,json:{writable:!1}})],y.prototype,"portal",void 0),o([l.property({type:String,json:{writable:!0}})],y.prototype,"styleUrl",void 0),o([l.read("styleUrl")],y.prototype,"_readStyleUrl",null),o([l.write("styleUrl")],y.prototype,"_writeStyleUrl",null),o([l.property({type:String,json:{writable:!0}})],y.prototype,"name",void 0),o([l.property({type:String,readOnly:!0,json:{readable:!1}})],y.prototype,"type",void 0),o([l.write("type")],y.prototype,"_writeType",null),y=o([l.subclass("esri.symbols.WebStyleSymbol")],y)}(l.declared(n));return u});