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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/urlUtils","../core/Logger","../core/requireUtils","./Symbol","../portal/Portal","./support/Thumbnail"],function(t,e,r,o,l,p,y,n,i,s,a){var u=y.getLogger("esri.symbols.WebStyleSymbol"),c=function(e){function y(t){var r=e.call(this,t)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.thumbnail=null,r.name=null,r.type="web-style",r}return r(y,e),i=y,y.prototype._readStyleUrl=function(t,e,r){return p.read(t,r)},y.prototype._writeStyleUrl=function(t,e,r,o){e.styleUrl=p.write(t,o),p.isAbsolute(e.styleUrl)&&(e.styleUrl=p.normalize(e.styleUrl))},y.prototype._writeType=function(t,e,r,o){e.type="styleSymbolReference"},y.prototype.read=function(t,e){return this.portal=e?e.portal:void 0,this.inherited(arguments,[t,e]),this},y.prototype.clone=function(){return new i({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},y.prototype.fetchSymbol=function(){var e=this;return n.when(t,"./support/styleUtils").then(function(t){var r=t.resolveWebStyleSymbol(e,{portal:e.portal});return r.otherwise(function(t){u.error("#fetchSymbol()","Failed to create symbol from style",t)}),r})},o([l.property({json:{write:!1}})],y.prototype,"color",void 0),o([l.property({type:String,json:{write:!0}})],y.prototype,"styleName",void 0),o([l.property({type:s,json:{write:!1}})],y.prototype,"portal",void 0),o([l.property({type:String,json:{write:!0}})],y.prototype,"styleUrl",void 0),o([l.reader("styleUrl")],y.prototype,"_readStyleUrl",null),o([l.writer("styleUrl")],y.prototype,"_writeStyleUrl",null),o([l.property({type:a["default"],json:{read:!1}})],y.prototype,"thumbnail",void 0),o([l.property({type:String,json:{write:!0}})],y.prototype,"name",void 0),o([l.property({type:String,readOnly:!0,json:{read:!1}})],y.prototype,"type",void 0),o([l.writer("type")],y.prototype,"_writeType",null),y=i=o([l.subclass("esri.symbols.WebStyleSymbol")],y);var i}(l.declared(i));return c});