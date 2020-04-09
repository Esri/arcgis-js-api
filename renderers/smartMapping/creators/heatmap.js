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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../..","../../../Color","../../../core/Error","../../../core/maybe","./support/utils","../statistics/heatmapStatistics","../support/utils","../symbology/heatmap","../../support/HeatmapColorStop"],(function(e,a,r,t,s,i,n,o,l,m,u,p,c,d){Object.defineProperty(a,"__esModule",{value:!0});function f(e){return s(this,void 0,void 0,(function(){var a,s,i,n,u,c,d,f,h,b;return t(this,(function(t){switch(t.label){case 0:if(!(e&&e.layer&&e.view))throw new o("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");if(a=e.blurRadius,s=e.minRatio,i=e.maxRatio,n=e.fadeToTransparent,(u=r({},e)).blurRadius=null==a?10:a,u.minRatio=null==s?.01:s,u.maxRatio=null==i?1:i,u.fadeToTransparent=null==n||n,c=[0,2,1],d=p.createLayerAdapter(u.layer,c),u.layer=d,!d)throw new o("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(c).join(", "));return f=l.isSome(u.signal)?{signal:u.signal}:null,[4,d.load(f)];case 1:return t.sent(),[4,p.getFieldsList({field:u.field})];case 2:if(h=t.sent(),b=m.verifyBasicFieldValidity(d,h,"heatmap-renderer:invalid-parameters"))throw b;return[2,u]}}))}))}function h(e){return s(this,void 0,void 0,(function(){var a,r,s,i,n;return t(this,(function(t){switch(t.label){case 0:return a=e.scheme,r=null,s=null,[4,m.getBasemapInfo(e.basemap,e.view)];case 1:return i=t.sent(),r=l.isSome(i.basemapId)?i.basemapId:null,s=l.isSome(i.basemapTheme)?i.basemapTheme:null,a?[2,{scheme:c.cloneScheme(a),basemapId:r,basemapTheme:s}]:((n=c.getSchemes({basemap:r,basemapTheme:s}))&&(a=n.primaryScheme,r=n.basemapId,s=n.basemapTheme),[2,{scheme:a,basemapId:r,basemapTheme:s}])}}))}))}function b(e,a){return s(this,void 0,void 0,(function(){var r,s,o,l,u,p,f,b,w,v,y,S,g,T,R,I,H,x,C,O,L;return t(this,(function(t){switch(t.label){case 0:return r=e.fieldOffset,s=a.field,o=a.basemap,l=a.blurRadius,u=a.minRatio,p=a.maxRatio,f=a.fadeToTransparent,b=a.heatmapScheme,w=a.view,[4,h({basemap:o,scheme:b,view:w})];case 1:return v=t.sent(),y=v.scheme,S=v.basemapId,g=v.basemapTheme,T=y.colors,R=T.length,I=!e.count,H=I?[0,100]:[e.min,e.max],x=(p-u)/(R-1),C=T[0],O=[new d.HeatmapColorStop({ratio:0,color:new n([C.r,C.g,C.b,0])}),new d.HeatmapColorStop({ratio:.01,color:new n([C.r,C.g,C.b,0])}),new d.HeatmapColorStop({ratio:f?u:.01,color:C})],m.createColors(T,R).forEach((function(e,a){O.push(new d.HeatmapColorStop({ratio:u+x*a,color:e}))})),L=new i.HeatmapRenderer({blurRadius:l,colorStops:O,field:s,minPixelIntensity:H[0],maxPixelIntensity:H[1]}),null!=r&&(L.fieldOffset=r),[2,{renderer:L,statistics:e,defaultValuesUsed:I,scheme:c.cloneScheme(y),basemapId:S,basemapTheme:g}]}}))}))}a.createRenderer=function(e){return s(this,void 0,void 0,(function(){var a,r;return t(this,(function(t){switch(t.label){case 0:return[4,f(e)];case 1:return(a=t.sent()).statistics?(r=a.statistics,[3,4]):[3,2];case 2:return[4,u({layer:a.layer,field:a.field,fieldOffset:a.fieldOffset,blurRadius:a.blurRadius,view:a.view,signal:a.signal})];case 3:r=t.sent(),t.label=4;case 4:return[2,b(r,a)]}}))}))}}));