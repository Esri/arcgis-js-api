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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./ClassificationDefinition"],function(t,e,i,r,u,o){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.attributeField=null,e.attributeField2=null,e.attributeField3=null,e.fieldDelimiter=null,e.type="unique-value-definition",e}return i(e,t),Object.defineProperty(e.prototype,"uniqueValueFields",{get:function(){var t=[];return this.attributeField&&t.push(this.attributeField),this.attributeField2&&t.push(this.attributeField2),this.attributeField3&&t.push(this.attributeField3),t},enumerable:!0,configurable:!0}),r([u.property()],e.prototype,"attributeField",void 0),r([u.property()],e.prototype,"attributeField2",void 0),r([u.property()],e.prototype,"attributeField3",void 0),r([u.property({json:{write:!0}})],e.prototype,"fieldDelimiter",void 0),r([u.property({dependsOn:["attributeField","attributeField2","attributeField3"],json:{write:!0}})],e.prototype,"uniqueValueFields",null),r([u.property()],e.prototype,"type",void 0),e=r([u.subclass("esri.tasks.support.UniqueValueDefinition")],e)}(u.declared(o))});