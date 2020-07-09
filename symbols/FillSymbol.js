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

define(["require","exports","tslib","../core/jsonMap","../core/accessorSupport/decorators","./SimpleLineSymbol","./Symbol"],(function(e,t,o,r,l,i,n){var s=new r.default({esriSFS:"simple-fill",esriPFS:"picture-fill"});return function(e){function t(t){var o=e.call(this,t)||this;return o.outline=null,o.type=null,o}return o.__extends(t,e),t.prototype.hash=function(){return this.type+"."+(this.outline&&this.outline.hash())},o.__decorate([l.property({type:i,json:{default:null,write:!0}})],t.prototype,"outline",void 0),o.__decorate([l.property({type:s.apiValues,readOnly:!0,json:{type:s.jsonValues}})],t.prototype,"type",void 0),t=o.__decorate([l.subclass("esri.symbols.FillSymbol")],t)}(n)}));