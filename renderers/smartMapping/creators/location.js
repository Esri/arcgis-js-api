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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../..","../../../core/Error","../../../core/maybe","./support/utils","../heuristics/outline","../support/utils","../symbology/location"],function(e,r,o,a,i,t,n,s,l,m,c,p){function u(e){return i(this,void 0,void 0,function(){var r,i,t,s;return a(this,function(a){switch(a.label){case 0:if(!e||!e.layer)throw new n("location-renderer:missing-parameters","'layer' parameter is required");if(r=o({},e),r.symbolType=r.symbolType||"2d",i=[0,2,1,3],t=c.createLayerAdapter(r.layer,i),r.layer=t,!t)throw new n("location-renderer:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(i).join(", "));return[4,t.load()];case 1:if(a.sent(),s=t.geometryType,r.outlineOptimizationEnabled="polygon"===s&&r.outlineOptimizationEnabled,"mesh"===s)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==s)throw new n("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new n("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[2,r]}})})}function d(e,r){return i(this,void 0,void 0,function(){var o,i,t,n,m;return a(this,function(a){switch(a.label){case 0:return o=e.locationScheme,i=null,t=null,[4,l.getBasemapInfo(e.basemap,e.view)];case 1:return n=a.sent(),(i=s.isSome(n.basemapId)?n.basemapId:null,t=s.isSome(n.basemapTheme)?n.basemapTheme:null,o)?[2,{scheme:p.cloneScheme(o),basemapId:i,basemapTheme:t}]:(m=p.getSchemes({basemap:i,basemapTheme:t,geometryType:r,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}),m&&(o=m.primaryScheme,i=m.basemapId,t=m.basemapTheme),[2,{scheme:o,basemapId:i,basemapTheme:t}])}})})}function y(e){return i(this,void 0,void 0,function(){var r,o,i,s,c,y,b,h,f;return a(this,function(a){switch(a.label){case 0:return[4,u(e)];case 1:return r=a.sent(),o=r.layer.geometryType,[4,d(r,o)];case 2:if(i=a.sent(),!(s=i.scheme))throw new n("location-renderer:insufficient-info","Unable to find location scheme");return c={layer:r.layer,view:r.view},r.outlineOptimizationEnabled?[4,m(c)]:[3,4];case 3:return b=a.sent(),[3,5];case 4:b=null,a.label=5;case 5:return y=b,h=y&&y.opacity,f=new t.SimpleRenderer({symbol:l.createSymbol(o,{type:r.symbolType,color:s.color,size:l.getSymbolSizeFromScheme(s,o),outline:l.getSymbolOutlineFromScheme(s,o,h),meshInfo:{colorMixMode:r.colorMixMode,edgesType:r.edgesType}})}),y&&y.visualVariables&&y.visualVariables.length&&(f.visualVariables=y.visualVariables.map(function(e){return e.clone()})),[2,{renderer:f,locationScheme:p.cloneScheme(s),basemapId:i.basemapId,basemapTheme:i.basemapTheme}]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.createRenderer=y});