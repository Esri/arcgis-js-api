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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../..","../../../Color","../../../core/Error","../../../core/maybe","./support/utils","../statistics/heatmapStatistics","../support/utils","../symbology/heatmap","../../support/HeatmapColorStop"],function(e,a,r,t,s,i,n,o,l,m,u,p,c,d){function f(e){return s(this,void 0,void 0,function(){var a,s,i,n,l,u,c,d,f;return t(this,function(t){switch(t.label){case 0:if(!(e&&e.layer&&e.view))throw new o("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");if(a=e.blurRadius,s=e.minRatio,i=e.maxRatio,n=e.fadeToTransparent,l=r({},e),l.blurRadius=null==a?10:a,l.minRatio=null==s?.01:s,l.maxRatio=null==i?1:i,l.fadeToTransparent=null==n||n,u=[0,2,1],c=p.createLayerAdapter(l.layer,u),l.layer=c,!c)throw new o("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(u).join(", "));return[4,c.load()];case 1:return t.sent(),[4,p.getFieldsList({field:l.field})];case 2:if(d=t.sent(),f=m.verifyBasicFieldValidity(c,d,"heatmap-renderer:invalid-parameters"))throw f;return[2,l]}})})}function h(e){return s(this,void 0,void 0,function(){var a,r,s,i,n;return t(this,function(t){switch(t.label){case 0:return a=e.scheme,r=null,s=null,[4,m.getBasemapInfo(e.basemap,e.view)];case 1:return i=t.sent(),(r=l.isSome(i.basemapId)?i.basemapId:null,s=l.isSome(i.basemapTheme)?i.basemapTheme:null,a)?[2,{scheme:c.cloneScheme(a),basemapId:r,basemapTheme:s}]:(n=c.getSchemes({basemap:r,basemapTheme:s}),n&&(a=n.primaryScheme,r=n.basemapId,s=n.basemapTheme),[2,{scheme:a,basemapId:r,basemapTheme:s}])}})})}function b(e,a){return s(this,void 0,void 0,function(){var r,s,o,l,u,p,f,b,v,y,S,T,R,g,I,H,x,C,O,L;return t(this,function(t){switch(t.label){case 0:return r=e.fieldOffset,s=a.field,o=a.basemap,l=a.blurRadius,u=a.minRatio,p=a.maxRatio,f=a.fadeToTransparent,b=a.heatmapScheme,[4,h({basemap:o,scheme:b})];case 1:return v=t.sent(),y=v.scheme,S=v.basemapId,T=v.basemapTheme,R=y.colors,g=R.length,I=!e.count,H=I?[0,100]:[e.min,e.max],x=(p-u)/(g-1),C=R[0],O=[new d.HeatmapColorStop({ratio:0,color:new n([C.r,C.g,C.b,0])}),new d.HeatmapColorStop({ratio:w,color:new n([C.r,C.g,C.b,0])}),new d.HeatmapColorStop({ratio:f?u:w,color:C})],m.createColors(R,g).forEach(function(e,a){O.push(new d.HeatmapColorStop({ratio:u+x*a,color:e}))}),L=new i.HeatmapRenderer({blurRadius:l,colorStops:O,field:s,minPixelIntensity:H[0],maxPixelIntensity:H[1]}),null!=r&&(L.fieldOffset=r),[2,{renderer:L,statistics:e,defaultValuesUsed:I,scheme:c.cloneScheme(y),basemapId:S,basemapTheme:T}]}})})}function v(e){return s(this,void 0,void 0,function(){var a,r,s;return t(this,function(t){switch(t.label){case 0:return[4,f(e)];case 1:return a=t.sent(),a.statistics?(s=a.statistics,[3,4]):[3,2];case 2:return[4,u({layer:a.layer,field:a.field,fieldOffset:a.fieldOffset,blurRadius:a.blurRadius,view:a.view})];case 3:s=t.sent(),t.label=4;case 4:return r=s,[2,b(r,a)]}})})}Object.defineProperty(a,"__esModule",{value:!0});var w=.01;a.createRenderer=v});