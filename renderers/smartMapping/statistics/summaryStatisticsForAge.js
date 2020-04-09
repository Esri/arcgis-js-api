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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","./summaryStatistics","./support/ageUtils","./support/ageUtils","../support/utils"],(function(e,r,t,i,a,s,n,o,u,l,p,m,c){function d(e){return a(this,void 0,void 0,(function(){var r,a,l,m,d,y,f,g;return i(this,(function(i){switch(i.label){case 0:if(!(e&&e.layer&&e.startTime&&e.endTime&&e.unit))throw new n("summary-statistics-for-age:missing-parameters","'layer', 'startTime', 'endTime' and 'unit' parameters are required");if(r=[0,2,1,3],a=e.layer,l=s(e,["layer"]),m=c.createLayerAdapter(a,r),d=t({layerAdapter:m},l),!m)throw new n("summary-statistics-for-age:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(r).join(", "));return y=d.view,f=o.isSome(d.signal)?{signal:d.signal}:null,[4,u.all([y&&y.when(),m.load(f)])];case 1:if(i.sent(),g=p.verifyDates(m,d.startTime,d.endTime,"summary-statistics-for-age:invalid-parameters"))throw g;if(-1===p.supportedAgeUnits.indexOf(d.unit))throw new n("summary-statistics-for-age:invalid-parameters","Supported units are: "+p.supportedAgeUnits.join(", "));return[2,d]}}))}))}return function(e){return a(this,void 0,void 0,(function(){var r,a,n,o,u,p,c,y,f,g,v,w,h,T;return i(this,(function(i){switch(i.label){case 0:return[4,d(e)];case 1:return r=i.sent(),a=r.layerAdapter,n=s(r,["layerAdapter"]),o=n.view,u=n.startTime,p=n.endTime,c=n.unit,y=n.minValue,f=n.maxValue,g=n.signal,v=m.getAgeExpressions({layer:a,startTime:u,endTime:p,unit:c}),w=v.valueExpression,h=v.statisticsQuery,T=t({layer:a,valueExpression:w},h,{minValue:y,maxValue:f,view:o,signal:g}),[2,l(T)]}}))}))}}));