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

define(["require","exports","tslib","../../renderers","../../core/Error","../../core/maybe","../../core/promiseUtils","../heuristics/outline","../heuristics/sizeRange","./support/utils","../support/utils","../symbology/location"],(function(e,i,r,a,n,o,t,l,s,m,c,p){function u(e){return r.__awaiter(this,void 0,void 0,(function(){var i,a,t,l,s;return r.__generator(this,(function(m){switch(m.label){case 0:if(!e||!e.layer)throw new n("location-renderer:missing-parameters","'layer' parameter is required");if((i=r.__assign({},e)).symbolType=i.symbolType||"2d",a=[0,2,1,3],t=c.createLayerAdapter(i.layer,a),i.layer=t,!t)throw new n("location-renderer:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(a).join(", "));return l=o.isSome(i.signal)?{signal:i.signal}:null,[4,t.load(l)];case 1:if(m.sent(),s=t.geometryType,i.outlineOptimizationEnabled="polygon"===s&&i.outlineOptimizationEnabled,i.sizeOptimizationEnabled=("point"===s||"multipoint"===s||"polyline"===s)&&i.sizeOptimizationEnabled,"mesh"===s)i.symbolType="3d-volumetric",i.colorMixMode=i.colorMixMode||"replace",i.edgesType=i.edgesType||"none";else{if("3d-volumetric-uniform"===i.symbolType&&"point"!==s)throw new n("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new n("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[2,i]}}))}))}function d(e,i){return r.__awaiter(this,void 0,void 0,(function(){var a,n,t,l,s;return r.__generator(this,(function(r){switch(r.label){case 0:return a=e.locationScheme,n=null,t=null,[4,m.getBasemapInfo(e.basemap,e.view)];case 1:return l=r.sent(),n=o.isSome(l.basemapId)?l.basemapId:null,t=o.isSome(l.basemapTheme)?l.basemapTheme:null,a?[2,{scheme:p.cloneScheme(a),basemapId:n,basemapTheme:t}]:((s=p.getSchemes({basemap:n,basemapTheme:t,geometryType:i,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}))&&(a=s.primaryScheme,n=s.basemapId,t=s.basemapTheme),[2,{scheme:a,basemapId:n,basemapTheme:t}])}}))}))}Object.defineProperty(i,"__esModule",{value:!0}),i.createRenderer=function(e){return r.__awaiter(this,void 0,void 0,(function(){var i,o,c,y,b,h,v,f,w,g,T,S;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,u(e)];case 1:return i=r.sent(),o=i.layer.geometryType,[4,d(i,o)];case 2:if(c=r.sent(),!(y=c.scheme))throw new n("location-renderer:insufficient-info","Unable to find location scheme");return b=i.view,h=i.layer,v=i.signal,[4,t.all([i.outlineOptimizationEnabled?l({view:b,layer:h,signal:v}):null,i.sizeOptimizationEnabled?s({view:b,layer:h,signal:v}):null])];case 3:return f=r.sent(),w=f[0],g=f[1],T=w&&w.opacity,S=new a.SimpleRenderer({symbol:m.createSymbol(o,{type:i.symbolType,color:y.color,size:m.getSymbolSizeFromScheme(y,o),outline:m.getSymbolOutlineFromScheme(y,o,T),meshInfo:{colorMixMode:i.colorMixMode,edgesType:i.edgesType}})}),w&&w.visualVariables&&w.visualVariables.length&&(S.visualVariables=w.visualVariables.map((function(e){return e.clone()}))),g&&g.minSize&&(S.visualVariables?S.visualVariables.push(g.minSize):S.visualVariables=[g.minSize]),[2,{renderer:S,locationScheme:p.cloneScheme(y),basemapId:c.basemapId,basemapTheme:c.basemapTheme}]}}))}))}}));