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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","@dojo/framework/shim/array","../../../core/maybe","../../../layers/support/fieldUtils"],function(e,t,l,p,i,o,r){function a(e,t){return void 0===t&&(t=e.popupTemplate),p(this,void 0,void 0,function(){var p,a,u,d,n,s,c,f,m,F,b;return l(this,function(l){switch(l.label){case 0:return o.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return p=l.sent(),(a=t.lastEditInfoEnabled,u=e.objectIdField,d=e.typeIdField,i.includes(p,"*"))?[2,["*"]]:(s=r.fixFields,c=[e.fields],m=(f=p).concat,F=[[d]],b=a,b?[4,r.getFeatureEditFields(e)]:[3,3]);case 2:b=l.sent(),l.label=3;case 3:return n=s.apply(void 0,c.concat([m.apply(f,F.concat([b||null]))])),n&&u&&r.hasField(e.fields,u)&&-1===n.indexOf(u)&&n.push(u),[2,n]}})})}function u(e,t){return e.popupTemplate?e.popupTemplate:o.isSome(t)&&t.defaultPopupTemplateEnabled&&o.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=a,t.getFetchPopupTemplate=u});