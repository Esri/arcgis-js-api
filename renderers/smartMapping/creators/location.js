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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../..","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","./support/utils","../heuristics/outline","../heuristics/sizeRange","../support/utils","../symbology/location"],function(e,i,r,o,a,n,t,l,s,m,p,c,u,d){function y(e){return a(this,void 0,void 0,function(){var i,a,n,l;return o(this,function(o){switch(o.label){case 0:if(!e||!e.layer)throw new t("location-renderer:missing-parameters","'layer' parameter is required");if(i=r({},e),i.symbolType=i.symbolType||"2d",a=[0,2,1,3],n=u.createLayerAdapter(i.layer,a),i.layer=n,!n)throw new t("location-renderer:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(a).join(", "));return[4,n.load()];case 1:if(o.sent(),l=n.geometryType,i.outlineOptimizationEnabled="polygon"===l&&i.outlineOptimizationEnabled,i.sizeOptimizationEnabled=("point"===l||"multipoint"===l||"polyline"===l)&&i.sizeOptimizationEnabled,"mesh"===l)i.symbolType="3d-volumetric",i.colorMixMode=i.colorMixMode||"replace",i.edgesType=i.edgesType||"none";else{if("3d-volumetric-uniform"===i.symbolType&&"point"!==l)throw new t("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new t("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[2,i]}})})}function b(e,i){return a(this,void 0,void 0,function(){var r,a,n,t,s;return o(this,function(o){switch(o.label){case 0:return r=e.locationScheme,a=null,n=null,[4,m.getBasemapInfo(e.basemap,e.view)];case 1:return t=o.sent(),(a=l.isSome(t.basemapId)?t.basemapId:null,n=l.isSome(t.basemapTheme)?t.basemapTheme:null,r)?[2,{scheme:d.cloneScheme(r),basemapId:a,basemapTheme:n}]:(s=d.getSchemes({basemap:a,basemapTheme:n,geometryType:i,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}),s&&(r=s.primaryScheme,a=s.basemapId,n=s.basemapTheme),[2,{scheme:r,basemapId:a,basemapTheme:n}])}})})}function h(e){return a(this,void 0,void 0,function(){var i,r,a,l,u,h,v,f,w,T,S;return o(this,function(o){switch(o.label){case 0:return[4,y(e)];case 1:return i=o.sent(),r=i.layer.geometryType,[4,b(i,r)];case 2:if(a=o.sent(),!(l=a.scheme))throw new t("location-renderer:insufficient-info","Unable to find location scheme");return u=i.view,h=i.layer,[4,s.all([i.outlineOptimizationEnabled?p({view:u,layer:h}):null,i.sizeOptimizationEnabled?c({view:u,layer:h}):null])];case 3:return v=o.sent(),f=v[0],w=v[1],T=f&&f.opacity,S=new n.SimpleRenderer({symbol:m.createSymbol(r,{type:i.symbolType,color:l.color,size:m.getSymbolSizeFromScheme(l,r),outline:m.getSymbolOutlineFromScheme(l,r,T),meshInfo:{colorMixMode:i.colorMixMode,edgesType:i.edgesType}})}),f&&f.visualVariables&&f.visualVariables.length&&(S.visualVariables=f.visualVariables.map(function(e){return e.clone()})),w&&w.minSize&&(S.visualVariables?S.visualVariables.push(w.minSize):S.visualVariables=[w.minSize]),[2,{renderer:S,locationScheme:d.cloneScheme(l),basemapId:a.basemapId,basemapTheme:a.basemapTheme}]}})})}Object.defineProperty(i,"__esModule",{value:!0}),i.createRenderer=h});