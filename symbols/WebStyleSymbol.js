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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/kebabDictionary","../core/Logger","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","../portal/Portal","./Symbol","./support/Thumbnail"],function(e,t,r,o,l,p,n,s,i,y,a,u){var c=p.getLogger("esri.symbols.WebStyleSymbol"),d=l.strict()({styleSymbolReference:"web-style"});return function(t){function l(e){var r=t.call(this,e)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.thumbnail=null,r.name=null,r.type="web-style",r}r(l,t),p=l,l.prototype.read=function(e,t){return this.portal=t?t.portal:void 0,this.inherited(arguments,[e,t]),this},l.prototype.clone=function(){return new p({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},l.prototype.fetchSymbol=function(){var t=this;return n.create(function(t){return e(["./support/styleUtils"],t)}).then(function(e){var r=e.resolveWebStyleSymbol(t,{portal:t.portal});return r.catch(function(e){c.error("#fetchSymbol()","Failed to create symbol from style",e)}),r})};var p;return o([i.property({json:{write:!1}})],l.prototype,"color",void 0),o([i.property({type:String,json:{write:!0}})],l.prototype,"styleName",void 0),o([i.property({type:y,json:{write:!1}})],l.prototype,"portal",void 0),o([i.property({type:String,json:{read:s.read,write:s.write}})],l.prototype,"styleUrl",void 0),o([i.property({type:u.default,json:{read:!1}})],l.prototype,"thumbnail",void 0),o([i.property({type:String,json:{write:!0}})],l.prototype,"name",void 0),o([i.property({type:d.apiValues,readOnly:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],l.prototype,"type",void 0),l=p=o([i.subclass("esri.symbols.WebStyleSymbol")],l)}(i.declared(a))});