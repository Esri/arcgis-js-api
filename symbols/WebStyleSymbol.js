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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/urlUtils","../core/Logger","../core/requireUtils","./Symbol","../portal/Portal"],function(e,t,r,o,l,p,y,n,s,i){var a=y.getLogger("esri.symbols.WebStyleSymbol"),u=function(t){function y(e){var r=t.call(this,e)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.name=null,r.type="web-style",r}return r(y,t),s=y,y.prototype._readStyleUrl=function(e,t,r){return p.read(e,r)},y.prototype._writeStyleUrl=function(e,t,r,o){t.styleUrl=p.write(e,o),p.isAbsolute(t.styleUrl)&&(t.styleUrl=p.normalize(t.styleUrl))},y.prototype._writeType=function(e,t,r,o){t.type="styleSymbolReference"},y.prototype.read=function(e,t){return this.portal=t?t.portal:void 0,this.inherited(arguments,[e,t]),this},y.prototype.clone=function(){return new s({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},y.prototype.fetchSymbol=function(){var t=this;return n.when(e,"./support/styleUtils").then(function(e){var r=e.resolveWebStyleSymbol(t,{portal:t.portal});return r.otherwise(function(e){a.error("#fetchSymbol()","Failed to create symbol from style",e)}),r})},o([l.property({json:{write:!1}})],y.prototype,"color",void 0),o([l.property({type:String,json:{write:!0}})],y.prototype,"styleName",void 0),o([l.property({type:i,json:{write:!1}})],y.prototype,"portal",void 0),o([l.property({type:String,json:{write:!0}})],y.prototype,"styleUrl",void 0),o([l.reader("styleUrl")],y.prototype,"_readStyleUrl",null),o([l.writer("styleUrl")],y.prototype,"_writeStyleUrl",null),o([l.property({type:String,json:{write:!0}})],y.prototype,"name",void 0),o([l.property({type:String,readOnly:!0,json:{read:!1}})],y.prototype,"type",void 0),o([l.writer("type")],y.prototype,"_writeType",null),y=s=o([l.subclass("esri.symbols.WebStyleSymbol")],y);var s}(l.declared(s));return u});