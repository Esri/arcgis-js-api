// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/Logger","../core/promiseUtils","../core/accessorSupport/decorators","../portal/Portal","../support/persistableUrlUtils","./Symbol","./support/Thumbnail","@dojo/framework/shim/Promise"],(function(t,e,r,o,l,s,i,n,p,a){"use strict";var y=o.getLogger("esri.symbols.WebStyleSymbol");return function(e){function o(t){var r=e.call(this,t)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.thumbnail=null,r.name=null,r.type="web-style",r}var p;return r.__extends(o,e),p=o,o.prototype.read=function(t,r){this.portal=r?r.portal:void 0,e.prototype.read.call(this,t,r)},o.prototype.clone=function(){return new p({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},o.prototype.fetchSymbol=function(t){return this._fetchSymbol("webRef",t)},o.prototype.fetchCIMSymbol=function(t){return this._fetchSymbol("cimRef",t)},o.prototype._fetchSymbol=function(e,o){return r.__awaiter(this,void 0,void 0,(function(){var s,i;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(e,r){t(["./support/styleUtils"],e,r)}))];case 1:return s=r.sent(),l.throwIfAborted(o),(i=s.resolveWebStyleSymbol(this,{portal:this.portal},e,o)).catch((function(t){y.error("#fetchSymbol()","Failed to create symbol from style",t)})),[2,i]}}))}))},r.__decorate([s.property({json:{write:!1}})],o.prototype,"color",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],o.prototype,"styleName",void 0),r.__decorate([s.property({type:i,json:{write:!1}})],o.prototype,"portal",void 0),r.__decorate([s.property({type:String,json:{read:n.read,write:n.write}})],o.prototype,"styleUrl",void 0),r.__decorate([s.property({type:a.default,json:{read:!1}})],o.prototype,"thumbnail",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],o.prototype,"name",void 0),r.__decorate([s.enumeration({styleSymbolReference:"web-style"},{readOnly:!0})],o.prototype,"type",void 0),o=p=r.__decorate([s.subclass("esri.symbols.WebStyleSymbol")],o)}(p)}));