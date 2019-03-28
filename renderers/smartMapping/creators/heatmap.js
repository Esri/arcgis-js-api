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

define(["require","exports","../../../core/tsSupport/assignHelper","../..","../../../Color","../../../core/promiseUtils","./support/utils","../statistics/heatmapStatistics","../support/utils","../symbology/heatmap","../../support/HeatmapColorStop","../../../support/basemapUtils"],function(e,a,r,t,i,s,o,n,l,p,m,u){function c(e){if(!(e&&e.layer&&e.view))return s.reject(o.createError("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required"));var a=e.blurRadius,t=e.minRatio,i=e.maxRatio,n=e.fadeToTransparent,p=r({},e);p.blurRadius=null==a?10:a,p.minRatio=null==t?.01:t,p.maxRatio=null==i?1:i,p.fadeToTransparent=null==n||n;var m=[0,2,1],u=l.createLayerAdapter(p.layer,m);return p.layer=u,u?u.load().then(function(){var e=l.getFieldsList({field:p.field}),a=o.verifyBasicFieldValidity(u,e,"heatmap-renderer:invalid-parameters");return a?s.reject(a):p}):s.reject(o.createError("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(m).join(", ")))}function d(e){var a,r=e.scheme;if(r)r=p.cloneScheme(r),a="string"==typeof e.basemap?e.basemap:u.getWellKnownBasemapId(e.basemap);else{var t=p.getSchemes({basemap:e.basemap});r=t&&t.primaryScheme,a=t&&t.basemapId}return{scheme:r,basemapId:a}}function f(e,a){var r=e.fieldOffset,s=a.field,n=a.basemap,l=a.blurRadius,u=a.minRatio,c=a.maxRatio,f=a.fadeToTransparent,b=a.heatmapScheme,y=d({basemap:n,scheme:b}),v=y.scheme,R=y.basemapId,S=v.colors,w=S.length,g=!e.count,x=g?[0,100]:[e.min,e.max],C=(c-u)/(w-1),H=S[0],I=[new m.HeatmapColorStop({ratio:0,color:new i([H.r,H.g,H.b,0])}),new m.HeatmapColorStop({ratio:h,color:new i([H.r,H.g,H.b,0])}),new m.HeatmapColorStop({ratio:f?u:h,color:H})];o.createColors(S,w).forEach(function(e,a){I.push(new m.HeatmapColorStop({ratio:u+C*a,color:e}))});var T=new t.HeatmapRenderer({blurRadius:l,colorStops:I,field:s,minPixelIntensity:x[0],maxPixelIntensity:x[1]});return null!=r&&(T.fieldOffset=r),{renderer:T,statistics:e,defaultValuesUsed:g,scheme:p.cloneScheme(v),basemapId:R}}function b(e){return c(e).then(function(e){return(e.statistics?s.resolve(e.statistics):n({layer:e.layer,field:e.field,fieldOffset:e.fieldOffset,blurRadius:e.blurRadius,view:e.view})).then(function(a){return f(a,e)})})}Object.defineProperty(a,"__esModule",{value:!0});var h=.01;a.createRenderer=b});