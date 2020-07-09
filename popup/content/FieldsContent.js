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

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","../FieldInfo","./Content"],(function(e,t,o,r,n,i,s){return function(e){function t(t){var o=e.call(this,t)||this;return o.fieldInfos=null,o.type="fields",o}var s;return o.__extends(t,e),s=t,t.prototype.writeFieldInfos=function(e,t){t.fieldInfos=e&&e.map((function(e){return e.toJSON()}))},t.prototype.clone=function(){return new s({fieldInfos:Array.isArray(this.fieldInfos)?r.clone(this.fieldInfos):null})},o.__decorate([n.property({type:[i]})],t.prototype,"fieldInfos",void 0),o.__decorate([n.writer("fieldInfos")],t.prototype,"writeFieldInfos",null),o.__decorate([n.property({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=s=o.__decorate([n.subclass("esri.popup.content.FieldsContent")],t)}(s)}));