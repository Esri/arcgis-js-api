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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../statistics/summaryStatisticsForAge","../statistics/support/ageUtils","../support/utils"],(function(t,i,s,n,e,r,a,u,o){return function(t){return n(this,void 0,void 0,(function(){var i,n,c,l,p;return s(this,(function(s){switch(s.label){case 0:return n=e({},t,{unit:i="days"}),[4,a(n)];case 1:if(null==(c=s.sent()).avg)throw new r("age-unit:insufficient-info","'avg' statistics is invalid");return f=c,g=Math.abs(f.avg),v=null,u.supportedAgeUnits.some((function(t){var i=o.unitValueInDays[t];return g>2*i&&(v=t),!!v})),(l=v)===i?[2,{unit:l,statistics:c}]:(n.unit=l,[4,a(n)]);case 2:if(null==(p=s.sent()).avg)throw new r("age-unit:insufficient-info","'avg' statistics is invalid");return[2,{unit:l,statistics:p}]}var f,g,v}))}))}}));