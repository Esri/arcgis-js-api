// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","@dojo/framework/shim/array","../../../core/maybe","../../../layers/support/fieldUtils"],function(e,t,l,i,p,a,d){function o(e,t){return void 0===t&&(t=e.popupTemplate),i(this,void 0,void 0,function(){var i,o,r,u,s,n,c,f,m,F,h;return l(this,function(l){switch(l.label){case 0:return a.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return i=l.sent(),(o=t.lastEditInfoEnabled,r=e.objectIdField,u=e.typeIdField,s=e.globalIdField,p.includes(i,"*"))?[2,["*"]]:(c=d.fixFields,f=[e.fields],F=(m=i).concat,h=o,h?[4,d.getFeatureEditFields(e)]:[3,3]);case 2:h=l.sent(),l.label=3;case 3:return n=c.apply(void 0,f.concat([F.apply(m,[h||null])])),u&&n.push(u),n&&r&&d.hasField(e.fields,r)&&-1===n.indexOf(r)&&n.push(r),n&&s&&d.hasField(e.fields,s)&&-1===n.indexOf(s)&&n.push(s),[2,n]}})})}function r(e,t){return e.popupTemplate?e.popupTemplate:a.isSome(t)&&t.defaultPopupTemplateEnabled&&a.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=o,t.getFetchPopupTemplate=r});