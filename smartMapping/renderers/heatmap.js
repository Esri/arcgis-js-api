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

define(["require","exports","tslib","../../Color","../../renderers","../../core/Error","../../core/maybe","../../renderers/support/HeatmapColorStop","./support/utils","../statistics/heatmapStatistics","../support/utils","../support/adapters/support/layerUtils","../symbology/heatmap"],(function(e,a,r,t,s,i,n,l,o,u,m,c,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.createRenderer=void 0;function p(e){return r.__awaiter(this,void 0,void 0,(function(){var a,t,s,l,u,d,p,f,h,b;return r.__generator(this,(function(w){switch(w.label){case 0:if(!(e&&e.layer&&e.view))throw new i("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");if(a=e.blurRadius,t=e.minRatio,s=e.maxRatio,l=e.fadeToTransparent,(u=r.__assign({},e)).blurRadius=null==a?10:a,u.minRatio=null==t?.01:t,u.maxRatio=null==s?1:s,u.fadeToTransparent=null==l||l,d=[0,2,1],p=c.createLayerAdapter(u.layer,d),u.layer=p,!p)throw new i("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(d).join(", "));return f=n.isSome(u.signal)?{signal:u.signal}:null,[4,p.load(f)];case 1:return w.sent(),[4,m.getFieldsList({field:u.field})];case 2:if(h=w.sent(),b=o.verifyBasicFieldValidity(p,h,"heatmap-renderer:invalid-parameters"))throw b;return[2,u]}}))}))}function f(e){return r.__awaiter(this,void 0,void 0,(function(){var a,t,s,i,l;return r.__generator(this,(function(r){switch(r.label){case 0:return a=e.scheme,t=null,s=null,[4,o.getBasemapInfo(e.basemap,e.view)];case 1:return i=r.sent(),t=n.isSome(i.basemapId)?i.basemapId:null,s=n.isSome(i.basemapTheme)?i.basemapTheme:null,a?[2,{scheme:d.cloneScheme(a),basemapId:t,basemapTheme:s}]:((l=d.getSchemes({basemap:t,basemapTheme:s}))&&(a=l.primaryScheme,t=l.basemapId,s=l.basemapTheme),[2,{scheme:a,basemapId:t,basemapTheme:s}])}}))}))}function h(e,a){return r.__awaiter(this,void 0,void 0,(function(){var i,n,u,m,c,p,h,b,w,v,y,_,g,R,T,S,I,x,O,L,C;return r.__generator(this,(function(r){switch(r.label){case 0:return i=e.fieldOffset,n=a.field,u=a.basemap,m=a.blurRadius,c=a.minRatio,p=a.maxRatio,h=a.fadeToTransparent,b=a.heatmapScheme,w=a.view,[4,f({basemap:u,scheme:b,view:w})];case 1:return v=r.sent(),y=v.scheme,_=v.basemapId,g=v.basemapTheme,R=y.colors,T=R.length,S=!e.count,I=S?[0,100]:[e.min,e.max],x=(p-c)/(T-1),O=R[0],L=[new l({ratio:0,color:new t([O.r,O.g,O.b,0])}),new l({ratio:.01,color:new t([O.r,O.g,O.b,0])}),new l({ratio:h?c:.01,color:O})],o.createColors(R,T).forEach((function(e,a){L.push(new l({ratio:c+x*a,color:e}))})),C=new s.HeatmapRenderer({blurRadius:m,colorStops:L,field:n,minPixelIntensity:I[0],maxPixelIntensity:I[1]}),null!=i&&(C.fieldOffset=i),[2,{renderer:C,statistics:e,defaultValuesUsed:S,scheme:d.cloneScheme(y),basemapId:_,basemapTheme:g}]}}))}))}a.createRenderer=function(e){return r.__awaiter(this,void 0,void 0,(function(){var a,t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,p(e)];case 1:return(a=r.sent()).statistics?(t=a.statistics,[3,4]):[3,2];case 2:return[4,u({layer:a.layer,field:a.field,fieldOffset:a.fieldOffset,blurRadius:a.blurRadius,view:a.view,signal:a.signal})];case 3:t=r.sent(),r.label=4;case 4:return[2,h(t,a)]}}))}))}}));