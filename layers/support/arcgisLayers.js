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

define(["require","exports","tslib","../../request","../../core/Error","./arcgisLayerUrl","./lazyLayerLoader","@dojo/framework/shim/Promise"],(function(e,r,t,n,a,i,s){function u(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,s,u,y,f,d,_,h,v;return t.__generator(this,(function(L){switch(L.label){case 0:if(!(r=i.parse(e)))throw new a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});switch(n=r.serverType,s=r.sublayer,y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},n){case"MapServer":u=null!=s?"FeatureLayer":function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){switch(r.label){case 0:return[4,l(e)];case 1:return[2,r.sent().tileInfo]}}))}))}(e).then((function(e){return e?"TileLayer":"MapImageLayer"}));break;case"ImageServer":u=l(e).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"ImageryTileLayer":"ImageryLayer"}));break;case"SceneServer":u=l(r.url.path).then((function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var t=e.layers[0].layerType;if(null!=r[t])return r[t]}return"SceneLayer"}));break;default:u=y[n]}return f={FeatureLayer:!0,SceneLayer:!0},d={parsedUrl:r,Constructor:null,sublayerIds:null},[4,u];case 1:return _=L.sent(),f[_]&&null==s?[4,o(e)]:[3,3];case 2:1!==(h=L.sent()).length&&(d.sublayerIds=h),L.label=3;case 3:return v=d,[4,c(_)];case 4:return v.Constructor=L.sent(),[2,d]}}))}))}function o(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l(e)];case 1:return(r=t.sent())&&Array.isArray(r.layers)?[2,r.layers.map((function(e){return e.id})).reverse()]:[2,[]]}}))}))}function c(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){return[2,(0,s.layerLookupMap[e])()]}))}))}function l(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){switch(r.label){case 0:return[4,n(e,{responseType:"json",query:{f:"json"}})];case 1:return[2,r.sent().data]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=function(r){return t.__awaiter(this,void 0,void 0,(function(){var n,a,i,s;return t.__generator(this,(function(o){switch(o.label){case 0:return[4,u(r.url)];case 1:return n=o.sent(),a=t.__assign(t.__assign({},r.properties),{url:r.url}),n.sublayerIds?[4,new Promise((function(r,t){e(["../GroupLayer"],r,t)}))]:[2,new n.Constructor(a)];case 2:return i=o.sent(),s=new i({title:n.parsedUrl.title}),function(e,r){return e.sublayerIds.map((function(n){return new e.Constructor(t.__assign(t.__assign({},r),{layerId:n,sublayerTitleMode:"service-name"}))}))}(n,a).forEach((function(e){return s.add(e)})),[2,s]}}))}))}}));