// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","../FieldInfo","./Content"],function(e,r,t,o,n,i,p,l){return function(e){function r(r){var t=e.call(this)||this;return t.fieldInfos=null,t.type="fields",t}t(r,e),l=r,r.prototype.writeFieldInfos=function(e,r){r.fieldInfos=e&&e.map(function(e){return e.toJSON()})},r.prototype.clone=function(){return new l({fieldInfos:Array.isArray(this.fieldInfos)?n.clone(this.fieldInfos):null})};var l;return o([i.property({type:[p]})],r.prototype,"fieldInfos",void 0),o([i.writer("fieldInfos")],r.prototype,"writeFieldInfos",null),o([i.property({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],r.prototype,"type",void 0),r=l=o([i.subclass("esri.popup.content.FieldsContent")],r)}(i.declared(l))});