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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","./summaryStatistics","./support/ageUtils","./support/ageUtils","../support/adapters/support/layerUtils"],(function(e,r,t,a,i,s,n,u,o,l){"use strict";function m(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,o,m,p,d,c,y;return t.__generator(this,(function(g){switch(g.label){case 0:if(!(e&&e.layer&&e.startTime&&e.endTime&&e.unit))throw new a("summary-statistics-for-age:missing-parameters","'layer', 'startTime', 'endTime' and 'unit' parameters are required");if(r=[0,2,1,3],n=e.layer,o=t.__rest(e,["layer"]),m=l.createLayerAdapter(n,r),p=t.__assign({layerAdapter:m},o),!m)throw new a("summary-statistics-for-age:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(r).join(", "));return d=p.view,c=i.isSome(p.signal)?{signal:p.signal}:null,[4,s.all([d&&d.when(),m.load(c)])];case 1:if(g.sent(),y=u.verifyDates(m,p.startTime,p.endTime,"summary-statistics-for-age:invalid-parameters"))throw y;if(-1===u.supportedAgeUnits.indexOf(p.unit))throw new a("summary-statistics-for-age:invalid-parameters","Supported units are: "+u.supportedAgeUnits.join(", "));return[2,p]}}))}))}return function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a,i,s,u,l,p,d,c,y,g,f,_,v;return t.__generator(this,(function(w){switch(w.label){case 0:return[4,m(e)];case 1:return r=w.sent(),a=r.layerAdapter,i=t.__rest(r,["layerAdapter"]),s=i.view,u=i.startTime,l=i.endTime,p=i.unit,d=i.minValue,c=i.maxValue,y=i.signal,g=o.getAgeExpressions({layer:a,startTime:u,endTime:l,unit:p}),f=g.valueExpression,_=g.statisticsQuery,v=t.__assign(t.__assign({layer:a,valueExpression:f},_),{minValue:d,maxValue:c,view:s,signal:y}),[2,n(v)]}}))}))}}));