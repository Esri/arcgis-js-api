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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/urlUtils","../core/Logger","../core/requireUtils","./Symbol","../portal/Portal"],function(t,e,r,o,l,p,y,n,i,s){var a=y.getLogger("esri.symbols.WebStyleSymbol"),u=c=function(e){function o(t){var r=e.call(this,t)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.name=null,r.type="web-style-symbol",r}return r(o,e),o.prototype._readStyleUrl=function(t,e,r){return p.read(t,r)},o.prototype._writeStyleUrl=function(t,e,r,o){e.styleUrl=p.write(t,o)},o.prototype._writeType=function(t,e,r,o){e.type="styleSymbolReference"},o.prototype.read=function(t,e){return this.portal=e?e.portal:void 0,this.inherited(arguments,[t,e]),this},o.prototype.clone=function(){return new c({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},o.prototype.fetchSymbol=function(){var e=this;return n.when(t,"./support/symbolUtils").then(function(t){var r=t.fetchStyleSymbol(e,{portal:e.portal});return r.otherwise(function(t){a.error("#fetchSymbol()","Failed to create symbol from style",t)}),r})},o}(l.declared(i));o([l.property({json:{write:!1}})],u.prototype,"color",void 0),o([l.property({type:String,json:{write:!0}})],u.prototype,"styleName",void 0),o([l.property({type:s,json:{write:!1}})],u.prototype,"portal",void 0),o([l.property({type:String,json:{write:!0}})],u.prototype,"styleUrl",void 0),o([l.reader("styleUrl")],u.prototype,"_readStyleUrl",null),o([l.writer("styleUrl")],u.prototype,"_writeStyleUrl",null),o([l.property({type:String,json:{write:!0}})],u.prototype,"name",void 0),o([l.property({type:String,readOnly:!0,json:{read:!1}})],u.prototype,"type",void 0),o([l.writer("type")],u.prototype,"_writeType",null),u=c=o([l.subclass("esri.symbols.WebStyleSymbol")],u);var c;return u});