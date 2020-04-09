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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../..","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","./support/utils","../heuristics/outline","../heuristics/sizeRange","../support/utils","../symbology/location"],(function(e,i,r,a,o,n,t,l,s,m,p,c,u,d){function y(e){return o(this,void 0,void 0,(function(){var i,o,n,s,m;return a(this,(function(a){switch(a.label){case 0:if(!e||!e.layer)throw new t("location-renderer:missing-parameters","'layer' parameter is required");if((i=r({},e)).symbolType=i.symbolType||"2d",o=[0,2,1,3],n=u.createLayerAdapter(i.layer,o),i.layer=n,!n)throw new t("location-renderer:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(o).join(", "));return s=l.isSome(i.signal)?{signal:i.signal}:null,[4,n.load(s)];case 1:if(a.sent(),m=n.geometryType,i.outlineOptimizationEnabled="polygon"===m&&i.outlineOptimizationEnabled,i.sizeOptimizationEnabled=("point"===m||"multipoint"===m||"polyline"===m)&&i.sizeOptimizationEnabled,"mesh"===m)i.symbolType="3d-volumetric",i.colorMixMode=i.colorMixMode||"replace",i.edgesType=i.edgesType||"none";else{if("3d-volumetric-uniform"===i.symbolType&&"point"!==m)throw new t("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new t("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[2,i]}}))}))}function b(e,i){return o(this,void 0,void 0,(function(){var r,o,n,t,s;return a(this,(function(a){switch(a.label){case 0:return r=e.locationScheme,o=null,n=null,[4,m.getBasemapInfo(e.basemap,e.view)];case 1:return t=a.sent(),o=l.isSome(t.basemapId)?t.basemapId:null,n=l.isSome(t.basemapTheme)?t.basemapTheme:null,r?[2,{scheme:d.cloneScheme(r),basemapId:o,basemapTheme:n}]:((s=d.getSchemes({basemap:o,basemapTheme:n,geometryType:i,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}))&&(r=s.primaryScheme,o=s.basemapId,n=s.basemapTheme),[2,{scheme:r,basemapId:o,basemapTheme:n}])}}))}))}Object.defineProperty(i,"__esModule",{value:!0}),i.createRenderer=function(e){return o(this,void 0,void 0,(function(){var i,r,o,l,u,h,v,f,w,g,S,T;return a(this,(function(a){switch(a.label){case 0:return[4,y(e)];case 1:return i=a.sent(),r=i.layer.geometryType,[4,b(i,r)];case 2:if(o=a.sent(),!(l=o.scheme))throw new t("location-renderer:insufficient-info","Unable to find location scheme");return u=i.view,h=i.layer,v=i.signal,[4,s.all([i.outlineOptimizationEnabled?p({view:u,layer:h,signal:v}):null,i.sizeOptimizationEnabled?c({view:u,layer:h,signal:v}):null])];case 3:return f=a.sent(),w=f[0],g=f[1],S=w&&w.opacity,T=new n.SimpleRenderer({symbol:m.createSymbol(r,{type:i.symbolType,color:l.color,size:m.getSymbolSizeFromScheme(l,r),outline:m.getSymbolOutlineFromScheme(l,r,S),meshInfo:{colorMixMode:i.colorMixMode,edgesType:i.edgesType}})}),w&&w.visualVariables&&w.visualVariables.length&&(T.visualVariables=w.visualVariables.map((function(e){return e.clone()}))),g&&g.minSize&&(T.visualVariables?T.visualVariables.push(g.minSize):T.visualVariables=[g.minSize]),[2,{renderer:T,locationScheme:d.cloneScheme(l),basemapId:o.basemapId,basemapTheme:o.basemapTheme}]}}))}))}}));