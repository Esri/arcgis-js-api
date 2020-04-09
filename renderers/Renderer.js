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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/jsonMap","../core/JSONSupport","../core/SetUtils","../core/accessorSupport/decorators","./support/AuthoringInfo"],(function(e,t,r,o,n,i,s,u,p,c,a){var l=new s.default({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0});return function(e){function t(t){var r=e.call(this,t)||this;return r.authoringInfo=null,r.type=null,r}return r(t,e),t.prototype.getRequiredFields=function(e){return i(this,void 0,void 0,(function(){var t;return n(this,(function(r){switch(r.label){case 0:return this.collectRequiredFields?(t=new Set,[4,this.collectRequiredFields(t,e)]):[2,[]];case 1:return r.sent(),[2,p.valuesOfSet(t).sort()]}}))}))},t.prototype.getSymbol=function(e,t){},t.prototype.getSymbolAsync=function(e,t){return i(this,void 0,void 0,(function(){return n(this,(function(e){return[2]}))}))},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return JSON.stringify(this)},t.prototype.getMeshHash=function(){return JSON.stringify(this)},o([c.property({type:a,json:{write:!0}})],t.prototype,"authoringInfo",void 0),o([c.property({type:l.apiValues,readOnly:!0,json:{type:l.jsonValues,read:!1,write:{writer:l.write,ignoreOrigin:!0}}})],t.prototype,"type",void 0),t=o([c.subclass("esri.renderers.Renderer")],t)}(c.declared(u.JSONSupport))}));