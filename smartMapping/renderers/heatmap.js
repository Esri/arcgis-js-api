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

define(["require","exports","tslib","../../Color","../../renderers","../../core/Error","../../core/maybe","../../renderers/support/HeatmapColorStop","./support/utils","../statistics/heatmapStatistics","../support/utils","../symbology/heatmap"],(function(e,a,r,t,s,i,n,l,o,m,u,c){Object.defineProperty(a,"__esModule",{value:!0});function d(e){return r.__awaiter(this,void 0,void 0,(function(){var a,t,s,l,m,c,d,p,f,h;return r.__generator(this,(function(b){switch(b.label){case 0:if(!(e&&e.layer&&e.view))throw new i("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");if(a=e.blurRadius,t=e.minRatio,s=e.maxRatio,l=e.fadeToTransparent,(m=r.__assign({},e)).blurRadius=null==a?10:a,m.minRatio=null==t?.01:t,m.maxRatio=null==s?1:s,m.fadeToTransparent=null==l||l,c=[0,2,1],d=u.createLayerAdapter(m.layer,c),m.layer=d,!d)throw new i("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(c).join(", "));return p=n.isSome(m.signal)?{signal:m.signal}:null,[4,d.load(p)];case 1:return b.sent(),[4,u.getFieldsList({field:m.field})];case 2:if(f=b.sent(),h=o.verifyBasicFieldValidity(d,f,"heatmap-renderer:invalid-parameters"))throw h;return[2,m]}}))}))}function p(e){return r.__awaiter(this,void 0,void 0,(function(){var a,t,s,i,l;return r.__generator(this,(function(r){switch(r.label){case 0:return a=e.scheme,t=null,s=null,[4,o.getBasemapInfo(e.basemap,e.view)];case 1:return i=r.sent(),t=n.isSome(i.basemapId)?i.basemapId:null,s=n.isSome(i.basemapTheme)?i.basemapTheme:null,a?[2,{scheme:c.cloneScheme(a),basemapId:t,basemapTheme:s}]:((l=c.getSchemes({basemap:t,basemapTheme:s}))&&(a=l.primaryScheme,t=l.basemapId,s=l.basemapTheme),[2,{scheme:a,basemapId:t,basemapTheme:s}])}}))}))}function f(e,a){return r.__awaiter(this,void 0,void 0,(function(){var i,n,m,u,d,f,h,b,w,v,y,_,g,T,R,S,I,x,O,L,C;return r.__generator(this,(function(r){switch(r.label){case 0:return i=e.fieldOffset,n=a.field,m=a.basemap,u=a.blurRadius,d=a.minRatio,f=a.maxRatio,h=a.fadeToTransparent,b=a.heatmapScheme,w=a.view,[4,p({basemap:m,scheme:b,view:w})];case 1:return v=r.sent(),y=v.scheme,_=v.basemapId,g=v.basemapTheme,T=y.colors,R=T.length,S=!e.count,I=S?[0,100]:[e.min,e.max],x=(f-d)/(R-1),O=T[0],L=[new l({ratio:0,color:new t([O.r,O.g,O.b,0])}),new l({ratio:.01,color:new t([O.r,O.g,O.b,0])}),new l({ratio:h?d:.01,color:O})],o.createColors(T,R).forEach((function(e,a){L.push(new l({ratio:d+x*a,color:e}))})),C=new s.HeatmapRenderer({blurRadius:u,colorStops:L,field:n,minPixelIntensity:I[0],maxPixelIntensity:I[1]}),null!=i&&(C.fieldOffset=i),[2,{renderer:C,statistics:e,defaultValuesUsed:S,scheme:c.cloneScheme(y),basemapId:_,basemapTheme:g}]}}))}))}a.createRenderer=function(e){return r.__awaiter(this,void 0,void 0,(function(){var a,t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,d(e)];case 1:return(a=r.sent()).statistics?(t=a.statistics,[3,4]):[3,2];case 2:return[4,m({layer:a.layer,field:a.field,fieldOffset:a.fieldOffset,blurRadius:a.blurRadius,view:a.view,signal:a.signal})];case 3:t=r.sent(),r.label=4;case 4:return[2,f(t,a)]}}))}))}}));