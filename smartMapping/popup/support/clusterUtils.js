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

define(["require","exports","tslib","../../../PopupTemplate","../../../intl/messages","../../../intl/substitute","../../../layers/support/fieldUtils","../../../popup/ExpressionInfo","../../../popup/FieldInfo","../../../popup/support/FieldInfoFormat","../../support/clusterUtils","../../../views/2d/layers/support/clusterUtils"],(function(e,t,i,s,r,l,a,n,u,o,p,d){"use strict";function m(e){var t=e.fieldName,i=e.label,s=e.type,r=a.numericTypes.indexOf(s)>-1,l=new u({fieldName:t,label:i,visible:!0,format:r?{places:"integer"===s||"small-integer"===s?0:2,digitSeparator:!0}:null});return"date"===s&&(l.format=new o({dateFormat:"short-date-short-time"})),l}function f(e,t){var i=t.getField(e);return i&&(i.alias||i.name)}function c(e,t,i){var s,r=t.attributeInfo,a=t.statisticType,n=r.field,u=r.normalizationField,o="";if("avg"===a?s=u?i.clusters.avgNormFieldLabel:i.clusters.avgFieldLabel:"type"===a&&(s=i.clusters.predominantFieldLabel),s){var p=r.valueExpression?r.valueExpressionTitle:f(n,e),d=u&&f(u,e);o=l.substitute(s,{fieldLabel:p||"",normFieldLabel:d||""})}return o}function b(e,t,i,s){var r,a=t.attributeInfo,n=t.statisticType,u=a.field,o=a.normalizationField,p="";if("avg"===n?r=o?s.clusters.avgNormFieldSummary:s.clusters.avgFieldSummary:"type"===n&&(r=s.clusters.predominantFieldSummary),r){var d=a.valueExpression?a.valueExpressionTitle:f(u,e),m=o&&f(o,e);p=l.substitute(r,{fieldLabel:d||"",normFieldLabel:m||"",fieldValue:"{"+i+"}"})}return p}Object.defineProperty(t,"__esModule",{value:!0}),t.createPopupTemplate=void 0,t.createPopupTemplate=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var a,u,o,f,v,g,y,F,h,x,T,I,N,w,L;return i.__generator(this,(function(i){switch(i.label){case 0:return d.isClusterCompatibleRenderer(t)?(a=p.getStatisticInfos(e,t),[4,r.loadMessageBundle("esri/smartMapping/t9n/smartMapping")]):[2,null];case 1:for(u=i.sent(),o=u.clusters.predominantNoneValue,f="unique-value"===t.type?t.uniqueValueInfos:[],g=[],y=[],(v=[]).push(l.substitute(u.clusters.countSummary,{count:"{"+p.clusterCountField+"}"})),g.push(m({fieldName:p.clusterCountField,label:u.clusters.numFeatures,type:"integer"})),F=0,h=a;F<h.length;F++)x=h[F],T=x.statisticType,I=x.attributeInfo,N=p.getClusterField(I,T),w=c(e,x,u),"avg"===T?(v.push(b(e,x,N,u)),g.push(m({fieldName:N,label:w,type:"double"}))):"type"===T&&(L="expression/"+N,v.push(b(e,x,L,u)),y.push(new n({name:N,title:w,returnType:"string",expression:p.getPredominantTypeExpression(f,N,o)})),g.push(m({fieldName:L})));return[2,new s({fieldInfos:g,expressionInfos:y,content:v.join("<br/><br/>")})]}}))}))}}));