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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","./summaryStatistics","./support/ageUtils","./support/ageUtils","../support/utils"],(function(e,r,t,i,a,s,n,u,o,l){function m(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,o,m,p,d,c,g;return t.__generator(this,(function(y){switch(y.label){case 0:if(!(e&&e.layer&&e.startTime&&e.endTime&&e.unit))throw new i("summary-statistics-for-age:missing-parameters","'layer', 'startTime', 'endTime' and 'unit' parameters are required");if(r=[0,2,1,3],n=e.layer,o=t.__rest(e,["layer"]),m=l.createLayerAdapter(n,r),p=t.__assign({layerAdapter:m},o),!m)throw new i("summary-statistics-for-age:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(r).join(", "));return d=p.view,c=a.isSome(p.signal)?{signal:p.signal}:null,[4,s.all([d&&d.when(),m.load(c)])];case 1:if(y.sent(),g=u.verifyDates(m,p.startTime,p.endTime,"summary-statistics-for-age:invalid-parameters"))throw g;if(-1===u.supportedAgeUnits.indexOf(p.unit))throw new i("summary-statistics-for-age:invalid-parameters","Supported units are: "+u.supportedAgeUnits.join(", "));return[2,p]}}))}))}return function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,i,a,s,u,l,p,d,c,g,y,f,_,v;return t.__generator(this,(function(w){switch(w.label){case 0:return[4,m(e)];case 1:return r=w.sent(),i=r.layerAdapter,a=t.__rest(r,["layerAdapter"]),s=a.view,u=a.startTime,l=a.endTime,p=a.unit,d=a.minValue,c=a.maxValue,g=a.signal,y=o.getAgeExpressions({layer:i,startTime:u,endTime:l,unit:p}),f=y.valueExpression,_=y.statisticsQuery,v=t.__assign(t.__assign({layer:i,valueExpression:f},_),{minValue:d,maxValue:c,view:s,signal:g}),[2,n(v)]}}))}))}}));