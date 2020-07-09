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

define(["require","exports","tslib","@dojo/framework/shim/array","../../../core/maybe","../../../layers/support/fieldUtils"],(function(e,i,t,l,s,d){Object.defineProperty(i,"__esModule",{value:!0}),i.getRequiredFields=function(e,i){return void 0===i&&(i=e.popupTemplate),t.__awaiter(this,void 0,void 0,(function(){var a,r,u,p,n,o,f,c,h;return t.__generator(this,(function(m){switch(m.label){case 0:return s.isSome(i)?[4,i.getRequiredFields(e.fields)]:[2,[]];case 1:return a=m.sent(),r=i.lastEditInfoEnabled,u=e.objectIdField,p=e.typeIdField,n=e.globalIdField,o=e.relationships,l.includes(a,"*")?[2,["*"]]:r?[4,d.getFeatureEditFields(e)]:[3,3];case 2:return c=m.sent(),[3,4];case 3:c=[],m.label=4;case 4:return f=c,h=d.fixFields(e.fields,t.__spreadArrays(a,f)),p&&h.push(p),h&&u&&d.hasField(e.fields,u)&&-1===h.indexOf(u)&&h.push(u),h&&n&&d.hasField(e.fields,n)&&-1===h.indexOf(n)&&h.push(n),o&&o.forEach((function(i){var t=i.keyField;h&&t&&d.hasField(e.fields,t)&&-1===h.indexOf(t)&&h.push(t)})),[2,h]}}))}))},i.getFetchPopupTemplate=function(e,i){return e.popupTemplate?e.popupTemplate:s.isSome(i)&&i.defaultPopupTemplateEnabled&&s.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}));