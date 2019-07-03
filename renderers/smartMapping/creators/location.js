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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../..","../../../core/Error","./support/utils","../heuristics/outline","../support/utils","../symbology/location"],function(e,r,o,i,t,n,a,l,s,c,m){function p(e){return t(this,void 0,void 0,function(){var r,t,n,l;return i(this,function(i){switch(i.label){case 0:if(!e||!e.layer)throw new a("location-renderer:missing-parameters","'layer' parameter is required");if(r=o({},e),r.symbolType=r.symbolType||"2d",t=[0,2,1,3],n=c.createLayerAdapter(r.layer,t),r.layer=n,!n)throw new a("location-renderer:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(t).join(", "));return[4,n.load()];case 1:if(i.sent(),l=n.geometryType,r.outlineOptimizationEnabled="polygon"===l&&r.outlineOptimizationEnabled,"mesh"===l)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==l)throw new a("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new a("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[2,r]}})})}function u(e,r){var o=e.locationScheme,i=e.basemap;if(o)o=m.cloneScheme(o);else{var t=m.getSchemes({basemap:e.basemap,geometryType:r,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view});o=t&&t.primaryScheme,i=t&&t.basemapId}return{scheme:o,basemapId:i}}function y(e){return t(this,void 0,void 0,function(){var r,o,t,c,y,d,b,f,h;return i(this,function(i){switch(i.label){case 0:return[4,p(e)];case 1:if(r=i.sent(),o=r.layer.geometryType,t=u(r,o),!(c=t.scheme))throw new a("location-renderer:insufficient-info","Unable to find location scheme");return y={layer:r.layer,view:r.view},r.outlineOptimizationEnabled?[4,s(y)]:[3,3];case 2:return b=i.sent(),[3,4];case 3:b=null,i.label=4;case 4:return d=b,f=d&&d.opacity,h=new n.SimpleRenderer({symbol:l.createSymbol(o,{type:r.symbolType,color:c.color,size:l.getSymbolSizeFromScheme(c,o),outline:l.getSymbolOutlineFromScheme(c,o,f),meshInfo:{colorMixMode:r.colorMixMode,edgesType:r.edgesType}})}),d&&d.visualVariables&&d.visualVariables.length&&(h.visualVariables=d.visualVariables.map(function(e){return e.clone()})),[2,{renderer:h,locationScheme:m.cloneScheme(c),basemapId:t.basemapId}]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.createRenderer=y});