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

define(["require","exports","tslib","../core/jsonMap","../core/JSONSupport","../core/SetUtils","../core/accessorSupport/decorators","./support/AuthoringInfo"],(function(e,t,r,o,n,i,s,u){"use strict";var a=new o.default({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0});return function(e){function t(t){var r=e.call(this,t)||this;return r.authoringInfo=null,r.type=null,r}return r.__extends(t,e),t.prototype.getRequiredFields=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return this.collectRequiredFields?(t=new Set,[4,this.collectRequiredFields(t,e)]):[2,[]];case 1:return r.sent(),[2,i.valuesOfSet(t).sort()]}}))}))},t.prototype.getSymbol=function(e,t){},t.prototype.getSymbolAsync=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2]}))}))},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return JSON.stringify(this)},t.prototype.getMeshHash=function(){return JSON.stringify(this)},r.__decorate([s.property({type:u,json:{write:!0}})],t.prototype,"authoringInfo",void 0),r.__decorate([s.property({type:a.apiValues,readOnly:!0,json:{type:a.jsonValues,read:!1,write:{writer:a.write,ignoreOrigin:!0}}})],t.prototype,"type",void 0),t=r.__decorate([s.subclass("esri.renderers.Renderer")],t)}(n.JSONSupport)}));