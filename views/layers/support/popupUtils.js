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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","@dojo/framework/shim/array","../../../core/maybe","../../../layers/support/fieldUtils"],(function(e,t,i,l,p,a,d){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),l(this,void 0,void 0,(function(){var l,o,r,s,u,n,f,c,h,m,F,b;return i(this,(function(i){switch(i.label){case 0:return a.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return l=i.sent(),o=t.lastEditInfoEnabled,r=e.objectIdField,s=e.typeIdField,u=e.globalIdField,n=e.relationships,p.includes(l,"*")?[2,["*"]]:(c=d.fixFields,h=[e.fields],F=(m=l).concat,(b=o)?[4,d.getFeatureEditFields(e)]:[3,3]);case 2:b=i.sent(),i.label=3;case 3:return f=c.apply(void 0,h.concat([F.apply(m,[b||null])])),s&&f.push(s),f&&r&&d.hasField(e.fields,r)&&-1===f.indexOf(r)&&f.push(r),f&&u&&d.hasField(e.fields,u)&&-1===f.indexOf(u)&&f.push(u),n&&n.forEach((function(t){var i=t.keyField;f&&i&&d.hasField(e.fields,i)&&-1===f.indexOf(i)&&f.push(i)})),[2,f]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:a.isSome(t)&&t.defaultPopupTemplateEnabled&&a.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}));