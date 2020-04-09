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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/lang","../core/promiseUtils","../core/accessorSupport/decorators","../layers/support/fieldUtils","../portal/Portal","./Symbol","./support/cimSymbolUtils"],(function(t,e,r,o,l,a,s,p,i,n,y,c,u){return function(t){function e(e){var r=t.call(this,e)||this;return r.data=null,r.portal=null,r.styleUrl="",r.type="cim",r}var c;return r(e,t),c=e,e.prototype.readData=function(t,e){return e.symbol},e.prototype.writeData=function(t,e){t&&(e.symbol=t)},e.prototype.readStyleUrl=function(t,e){return e.symbolUrl?e.symbolUrl:t},e.prototype.writeStyleUrl=function(t,e){t&&(e.symbolUrl=t)},e.prototype.collectRequiredFields=function(t,e){return a(this,void 0,void 0,(function(){var r,o,a,s,i,y,c;return l(this,(function(l){switch(l.label){case 0:return[4,u.fetchSymbol(this)];case 1:l.sent(),r="object"==typeof this.data&&this.data.length,o=r?this.data:[this.data],a=0,s=o,l.label=2;case 2:return a<s.length?(i=s[a],(y=i.primitiveOverrides)?(c=y.map((function(r){var o=r.valueExpressionInfo;return n.collectArcadeFieldNames(t,e,o.expression)})),[4,p.all(c)]):[3,4]):[3,5];case 3:l.sent(),l.label=4;case 4:return a++,[3,2];case 5:return[2]}}))}))},e.prototype.clone=function(){return new c({color:this.color.clone(),data:s.clone(this.data),portal:this.portal,styleName:this.styleName,styleUrl:this.styleUrl})},e.prototype.hash=function(){return this.color.hash()+"."+this.data+"."+this.portal+"."+this.styleName+"."+this.styleUrl},o([i.property({json:{write:!1}})],e.prototype,"color",void 0),o([i.property({json:{write:!0}})],e.prototype,"data",void 0),o([i.reader("data",["data","symbol"])],e.prototype,"readData",null),o([i.writer("data")],e.prototype,"writeData",null),o([i.property({type:y,json:{write:!1}})],e.prototype,"portal",void 0),o([i.property({json:{write:!0}})],e.prototype,"styleName",void 0),o([i.property({type:String,json:{write:!0}})],e.prototype,"styleUrl",void 0),o([i.reader("styleUrl",["styleUrl","symbolUrl"])],e.prototype,"readStyleUrl",null),o([i.writer("styleUrl")],e.prototype,"writeStyleUrl",null),o([i.enumeration.serializable()({CIMSymbolReference:"cim"})],e.prototype,"type",void 0),e=c=o([i.subclass("esri.symbols.CIMSymbol")],e)}(i.declared(c))}));