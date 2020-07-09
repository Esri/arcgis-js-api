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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/jsonMap","../core/Logger","../core/promiseUtils","../core/accessorSupport/decorators","../portal/Portal","../support/persistableUrlUtils","./Symbol","./support/Thumbnail","@dojo/framework/shim/Promise"],(function(e,t,r,o,l,s,p,i,n,a,y){var c=l.getLogger("esri.symbols.WebStyleSymbol"),u=o.strict()({styleSymbolReference:"web-style"});return function(t){function o(e){var r=t.call(this,e)||this;return r.styleName=null,r.portal=null,r.styleUrl=null,r.thumbnail=null,r.name=null,r.type="web-style",r}var l;return r.__extends(o,t),l=o,o.prototype.read=function(e,r){this.portal=r?r.portal:void 0,t.prototype.read.call(this,e,r)},o.prototype.clone=function(){return new l({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},o.prototype.fetchSymbol=function(e){return this._fetchSymbol("webRef",e)},o.prototype.fetchCIMSymbol=function(e){return this._fetchSymbol("cimRef",e)},o.prototype._fetchSymbol=function(t,o){return r.__awaiter(this,void 0,void 0,(function(){var l,p;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(t,r){e(["./support/styleUtils"],t,r)}))];case 1:return l=r.sent(),s.throwIfAborted(o),(p=l.resolveWebStyleSymbol(this,{portal:this.portal},t,o)).catch((function(e){c.error("#fetchSymbol()","Failed to create symbol from style",e)})),[2,p]}}))}))},r.__decorate([p.property({json:{write:!1}})],o.prototype,"color",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],o.prototype,"styleName",void 0),r.__decorate([p.property({type:i,json:{write:!1}})],o.prototype,"portal",void 0),r.__decorate([p.property({type:String,json:{read:n.read,write:n.write}})],o.prototype,"styleUrl",void 0),r.__decorate([p.property({type:y.default,json:{read:!1}})],o.prototype,"thumbnail",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],o.prototype,"name",void 0),r.__decorate([p.property({type:u.apiValues,readOnly:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],o.prototype,"type",void 0),o=l=r.__decorate([p.subclass("esri.symbols.WebStyleSymbol")],o)}(a)}));