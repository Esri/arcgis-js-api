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

define(["require","exports","tslib","../core/lang","../core/promiseUtils","../core/accessorSupport/decorators","../layers/support/fieldUtils","../portal/Portal","./Symbol","./cim/cimSymbolUtils"],(function(t,e,r,o,l,a,i,s,n,p){return function(t){function e(e){var r=t.call(this,e)||this;return r.data=null,r.portal=null,r.styleUrl="",r.type="cim",r}var n;return r.__extends(e,t),n=e,e.prototype.readData=function(t,e){return e},e.prototype.writeData=function(t,e){if(t)for(var r in t)e[r]=t[r]},e.prototype.readStyleUrl=function(t,e){return e.symbolUrl?e.symbolUrl:t},e.prototype.writeStyleUrl=function(t,e){t&&(e.symbolUrl=t)},e.prototype.collectRequiredFields=function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var o,a,s;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,p.fetchSymbol(this)];case 1:return r.sent(),"CIMSymbolReference"!==this.data.type?[3,3]:(o=this.data,(a=o.primitiveOverrides)?(s=a.map((function(r){var o=r.valueExpressionInfo;return i.collectArcadeFieldNames(t,e,o.expression)})),[4,l.all(s)]):[3,3]);case 2:r.sent(),r.label=3;case 3:return[2]}}))}))},e.prototype.clone=function(){return new n({color:this.color.clone(),data:o.clone(this.data),portal:this.portal,styleName:this.styleName,styleUrl:this.styleUrl})},e.prototype.hash=function(){return this.color.hash()+"."+this.data+"."+this.portal+"."+this.styleName+"."+this.styleUrl},r.__decorate([a.property({json:{write:!1}})],e.prototype,"color",void 0),r.__decorate([a.property({json:{write:!0}})],e.prototype,"data",void 0),r.__decorate([a.reader("data",["symbol"])],e.prototype,"readData",null),r.__decorate([a.writer("data")],e.prototype,"writeData",null),r.__decorate([a.property({type:s,json:{write:!1}})],e.prototype,"portal",void 0),r.__decorate([a.property({json:{write:!0}})],e.prototype,"styleName",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],e.prototype,"styleUrl",void 0),r.__decorate([a.reader("styleUrl",["styleUrl","symbolUrl"])],e.prototype,"readStyleUrl",null),r.__decorate([a.writer("styleUrl")],e.prototype,"writeStyleUrl",null),r.__decorate([a.enumeration({CIMSymbolReference:"cim"})],e.prototype,"type",void 0),e=n=r.__decorate([a.subclass("esri.symbols.CIMSymbol")],e)}(n)}));