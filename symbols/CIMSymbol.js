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

define(["require","exports","tslib","../core/lang","../core/promiseUtils","../core/string","../core/accessorSupport/decorators","../layers/support/fieldUtils","./Symbol"],(function(e,t,r,o,a,i,n,s,c){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.data=null,r.type="cim",r}var c;return r.__extends(t,e),c=t,t.prototype.readData=function(e,t){return t},t.prototype.writeData=function(e,t){if(e)for(var r in e)t[r]=e[r]},t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,i,n;return r.__generator(this,(function(r){switch(r.label){case 0:return"CIMSymbolReference"!==this.data.type?[3,2]:(o=this.data,(i=o.primitiveOverrides)?(n=i.map((function(r){var o=r.valueExpressionInfo;return s.collectArcadeFieldNames(e,t,o.expression)})),[4,a.all(n)]):[3,2]);case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},t.prototype.clone=function(){return new c({data:o.clone(this.data)})},t.prototype.hash=function(){return i.numericHash(JSON.stringify(this.data)).toString()},r.__decorate([n.property({json:{write:!1}})],t.prototype,"color",void 0),r.__decorate([n.property({json:{write:!0}})],t.prototype,"data",void 0),r.__decorate([n.reader("data",["symbol"])],t.prototype,"readData",null),r.__decorate([n.writer("data")],t.prototype,"writeData",null),r.__decorate([n.enumeration({CIMSymbolReference:"cim"},{readOnly:!0})],t.prototype,"type",void 0),t=c=r.__decorate([n.subclass("esri.symbols.CIMSymbol")],t)}(c)}));