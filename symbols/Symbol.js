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

define(["require","exports","tslib","../Color","../core/jsonMap","../core/JSONSupport","../core/accessorSupport/decorators"],(function(e,r,o,t,l,i,n){"use strict";var s=new l.default({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"}),p=0;return function(e){function r(r){var o=e.call(this,r)||this;return o.id="sym"+p++,o.type=null,o}return o.__extends(r,e),Object.defineProperty(r.prototype,"color",{set:function(e){this._set("color",e)},enumerable:!1,configurable:!0}),r.prototype.readColor=function(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e},r.prototype.collectRequiredFields=function(e,r){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){return[2]}))}))},r.prototype.hash=function(){return JSON.stringify(this.toJSON())},r.prototype.clone=function(){},o.__decorate([n.property({type:s.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:s.write}}})],r.prototype,"type",void 0),o.__decorate([n.property({type:t,value:new t([0,0,0,1]),json:{write:{allowNull:!0}}})],r.prototype,"color",null),o.__decorate([n.reader("color")],r.prototype,"readColor",null),r=o.__decorate([n.subclass("esri.symbols.Symbol")],r)}(i.JSONSupport)}));