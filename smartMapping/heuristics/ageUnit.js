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

define(["require","exports","tslib","../../core/Error","../statistics/summaryStatisticsForAge","../statistics/support/ageUtils","../support/utils"],(function(t,i,s,n,a,e,r){return function(t){return s.__awaiter(this,void 0,void 0,(function(){var i,u,o,c,f;return s.__generator(this,(function(l){switch(l.label){case 0:return i="days",u=s.__assign(s.__assign({},t),{unit:i}),[4,a(u)];case 1:if(null==(o=l.sent()).avg)throw new n("age-unit:insufficient-info","'avg' statistics is invalid");return g=o,v=Math.abs(g.avg),_=null,e.supportedAgeUnits.some((function(t){var i=r.unitValueInDays[t];return v>2*i&&(_=t),!!_})),(c=_)===i?[2,{unit:c,statistics:o}]:(u.unit=c,[4,a(u)]);case 2:if(null==(f=l.sent()).avg)throw new n("age-unit:insufficient-info","'avg' statistics is invalid");return[2,{unit:c,statistics:f}]}var g,v,_}))}))}}));