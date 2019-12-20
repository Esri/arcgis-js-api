// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/jsonMap","../core/Logger","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","../portal/Portal","./Symbol","./support/Thumbnail"],function(t,e,r,o,l,p,n,i,s,y,a,c,u,d){function h(){return p(this,void 0,void 0,function(){return l(this,function(e){return[2,s.create(function(e){return t(["./support/styleUtils"],e)})]})})}var f=i.getLogger("esri.symbols.WebStyleSymbol"),m=n.strict()({styleSymbolReference:"web-style"});return function(t){function e(e){var r=t.call(this,e)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.thumbnail=null,r.name=null,r.type="web-style",r}r(e,t),n=e,e.prototype.read=function(t,e){this.portal=e?e.portal:void 0,this.inherited(arguments,[t,e])},e.prototype.clone=function(){return new n({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},e.prototype.fetchSymbol=function(t){return this._fetchSymbol("webRef",t)},e.prototype.fetchCIMSymbol=function(t){return this._fetchSymbol("cimRef",t)},e.prototype._fetchSymbol=function(t,e){return p(this,void 0,void 0,function(){var r,o;return l(this,function(l){switch(l.label){case 0:return[4,h()];case 1:return r=l.sent(),s.throwIfAborted(e),o=r.resolveWebStyleSymbol(this,{portal:this.portal},t,e),o.catch(function(t){f.error("#fetchSymbol()","Failed to create symbol from style",t)}),[2,o]}})})};var n;return o([a.property({json:{write:!1}})],e.prototype,"color",void 0),o([a.property({type:String,json:{write:!0}})],e.prototype,"styleName",void 0),o([a.property({type:c,json:{write:!1}})],e.prototype,"portal",void 0),o([a.property({type:String,json:{read:y.read,write:y.write}})],e.prototype,"styleUrl",void 0),o([a.property({type:d.default,json:{read:!1}})],e.prototype,"thumbnail",void 0),o([a.property({type:String,json:{write:!0}})],e.prototype,"name",void 0),o([a.property({type:m.apiValues,readOnly:!0,json:{type:m.jsonValues,read:!1,write:m.write}})],e.prototype,"type",void 0),e=n=o([a.subclass("esri.symbols.WebStyleSymbol")],e)}(a.declared(u))});