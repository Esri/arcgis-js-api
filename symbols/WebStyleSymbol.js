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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/Logger","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","../portal/Portal","./Symbol","./support/Thumbnail"],function(t,e,r,o,l,p,y,n,i,s,a){var u=l.getLogger("esri.symbols.WebStyleSymbol");return function(e){function l(t){var r=e.call(this,t)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.thumbnail=null,r.name=null,r.type="web-style",r}return r(l,e),s=l,l.prototype._readStyleUrl=function(t,e,r){return y.read(t,r)},l.prototype._writeStyleUrl=function(t,e,r,o){e.styleUrl=y.write(t,o),y.isAbsolute(e.styleUrl)&&(e.styleUrl=y.normalize(e.styleUrl))},l.prototype._writeType=function(t,e,r,o){e.type="styleSymbolReference"},l.prototype.read=function(t,e){return this.portal=e?e.portal:void 0,this.inherited(arguments,[t,e]),this},l.prototype.clone=function(){return new s({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},l.prototype.fetchSymbol=function(){var e=this;return p.create(function(e){return t(["./support/styleUtils"],e)}).then(function(t){var r=t.resolveWebStyleSymbol(e,{portal:e.portal});return r.catch(function(t){u.error("#fetchSymbol()","Failed to create symbol from style",t)}),r})},o([n.property({json:{write:!1}})],l.prototype,"color",void 0),o([n.property({type:String,json:{write:!0}})],l.prototype,"styleName",void 0),o([n.property({type:i,json:{write:!1}})],l.prototype,"portal",void 0),o([n.property({type:String,json:{write:!0}})],l.prototype,"styleUrl",void 0),o([n.reader("styleUrl")],l.prototype,"_readStyleUrl",null),o([n.writer("styleUrl")],l.prototype,"_writeStyleUrl",null),o([n.property({type:a.default,json:{read:!1}})],l.prototype,"thumbnail",void 0),o([n.property({type:String,json:{write:!0}})],l.prototype,"name",void 0),o([n.property({type:String,readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),o([n.writer("type")],l.prototype,"_writeType",null),l=s=o([n.subclass("esri.symbols.WebStyleSymbol")],l);var s}(n.declared(s))});