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

define(["require","exports","tslib","../../PopupTemplate","../../core/Error","../../core/promiseUtils","../../intl/messages","./support/utils"],(function(e,r,n,i,t,a,o,s){"use strict";function l(e){return n.__awaiter(this,void 0,void 0,(function(){var r,i,a,o;return n.__generator(this,(function(n){switch(n.label){case 0:return r=e.layer,i=e.renderer,[4,r.load()];case 1:if(n.sent(),"unique-value"!==(a=i||r.renderer).type)throw new t("relationship-popup:invalid-parameters","renderer.type must be 'unique-value'");if(!(o=a.authoringInfo)||"relationship"!==o.type)throw new t("relationship-popup:invalid-parameters","renderer.authoringInfo.type must be 'relationship'");if(!(o.field1&&o.field1.field&&o.field2&&o.field2.field))throw new t("relationship-popup:invalid-parameters","'field1' and/or 'field2' properties are missing in renderer.authoringInfo");return[2,{layer:r,renderer:a}]}}))}))}function p(e,r,t){return void 0===t&&(t="divide"),n.__awaiter(this,void 0,void 0,(function(){var a,o,l,p,u;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,s.getFieldAndExpressionInfos({renderer:e,layer:r,normFieldExpressionTemplate:t})];case 1:return a=n.sent(),o=a.fieldInfos,l=a.expressionInfos,p=i.bind,u={},[4,s.getContentFromFieldInfos(r,{fieldInfos:o,expressionInfos:l})];case 2:return[2,new(p.apply(i,[void 0,(u.content=n.sent(),u.fieldInfos=o,u.expressionInfos=l,u)]))]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=void 0,r.getTemplates=function(e){return n.__awaiter(this,void 0,void 0,(function(){var r,i,t,s,u,d,f,c,h,m,v;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,a.all([l(e),o.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return r=n.sent(),i=r[0],t=i.renderer,s=i.layer,u=r[1],f={name:"relationship",title:u.relationshipPopupTitle},[4,p(t,s)];case 2:return f.value=n.sent(),d=f,c=[],function(e){var r=e.authoringInfo;return!(!r.field1.normalizationField&&!r.field2.normalizationField)}(t)?(m=(h=c).push,v={name:"relationship-percent",title:u.relationshipNormFieldAsPercent},[4,p(t,s,"percentage")]):[3,4];case 3:m.apply(h,[(v.value=n.sent(),v)]),n.label=4;case 4:return[2,{primaryTemplate:d,secondaryTemplates:c}]}}))}))}}));