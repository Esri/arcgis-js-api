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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators","./layers/support/timeUtils"],function(e,t,r,i,o,n,p){return function(e){function t(t){var r=e.call(this)||this;return r.value=0,r.unit=null,r}return r(t,e),i([n.property({type:Number,json:{write:!0}})],t.prototype,"value",void 0),i([n.property({type:p.timeUnitKebabDictionary.apiValues,json:{type:p.timeUnitKebabDictionary.jsonValues,read:p.timeUnitKebabDictionary.read,write:p.timeUnitKebabDictionary.write}})],t.prototype,"unit",void 0),t=i([n.subclass("esri.TimeSpan")],t)}(n.declared(o))});