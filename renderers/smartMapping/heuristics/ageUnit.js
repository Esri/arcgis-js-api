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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../statistics/summaryStatisticsForAge","../statistics/support/ageUtils","../support/utils"],function(t,i,e,n,s,r,a,u){function o(t){var i=Math.abs(t.avg),e=null;return a.supportedAgeUnits.some(function(t){var n=u.unitValueInDays[t];return i>2*n&&(e=t),!!e}),e}function c(t){return n(this,void 0,void 0,function(){var i,n,a,u,c,l,f,v;return e(this,function(e){switch(e.label){case 0:return i=t.view,n=t.layer,a=t.startTime,u=t.endTime,c="days",[4,r({view:i,layer:n,startTime:a,endTime:u,unit:c})];case 1:if(l=e.sent(),null==l.avg)throw new s("age-unit:insufficient-info","'avg' statistics is invalid");return f=o(l),f===c?[2,{unit:f,statistics:l}]:[4,r({view:i,layer:n,startTime:a,endTime:u,unit:f})];case 2:if(v=e.sent(),null==v.avg)throw new s("age-unit:insufficient-info","'avg' statistics is invalid");return[2,{unit:f,statistics:v}]}})})}return c});