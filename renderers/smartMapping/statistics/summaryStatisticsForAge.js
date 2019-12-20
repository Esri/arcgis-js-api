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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/promiseUtils","./summaryStatistics","./support/ageUtils","./support/ageUtils","../support/utils"],function(e,r,t,i,s,a,n,o,u,p,l){function m(e){return s(this,void 0,void 0,function(){var r,s,o,p,m;return i(this,function(i){switch(i.label){case 0:if(!(e&&e.layer&&e.startTime&&e.endTime&&e.unit))throw new a("summary-statistics-for-age:missing-parameters","'layer', 'startTime', 'endTime' and 'unit' parameters are required");if(r=t({},e),s=[0,2,1,3],o=l.createLayerAdapter(r.layer,s),r.layer=o,!o)throw new a("summary-statistics-for-age:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(s).join(", "));return p=r.view,[4,n.all([p&&p.when(),o.load()])];case 1:if(i.sent(),m=u.verifyDates(o,r.startTime,r.endTime,"summary-statistics-for-age:invalid-parameters"))throw m;if(-1===u.supportedAgeUnits.indexOf(r.unit))throw new a("summary-statistics-for-age:invalid-parameters","Supported units are: "+u.supportedAgeUnits.join(", "));return[2,r]}})})}function c(e){return s(this,void 0,void 0,function(){var r,s,a,n,u,l,c,d,f,y;return i(this,function(i){switch(i.label){case 0:return[4,m(e)];case 1:return r=i.sent(),s=r.view,a=r.startTime,n=r.endTime,u=r.unit,l=r.layer,c=p.getAgeExpressions({layer:l,startTime:a,endTime:n,unit:u}),d=c.valueExpression,f=c.statisticsQuery,y=t({layer:l,valueExpression:d},f,{view:s}),[2,o(y)]}})})}return c});