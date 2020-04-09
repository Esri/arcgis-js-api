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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../request","../../core/Error","./arcgisLayerUrl","./lazyLayerLoader","@dojo/framework/shim/Promise"],(function(e,r,t,n,a,u,i,s,o){function c(e){return a(this,void 0,void 0,(function(){var r,t,u,o,c,d,h,p,v,L;return n(this,(function(b){switch(b.label){case 0:if(!(r=s.parse(e)))throw new i("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});switch(t=r.serverType,u=r.sublayer,c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},t){case"MapServer":o=null!=u?"FeatureLayer":function(e){return a(this,void 0,void 0,(function(){return n(this,(function(r){switch(r.label){case 0:return[4,f(e)];case 1:return[2,r.sent().tileInfo]}}))}))}(e).then((function(e){return e?"TileLayer":"MapImageLayer"}));break;case"ImageServer":o=f(e).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"}));break;case"SceneServer":o=f(r.url.path).then((function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var t=e.layers[0].layerType;if(null!=r[t])return r[t]}return"SceneLayer"}));break;default:o=c[t]}return d={FeatureLayer:!0,SceneLayer:!0},h={parsedUrl:r,Constructor:null,sublayerIds:null},[4,o];case 1:return p=b.sent(),d[p]&&null==u?[4,l(e)]:[3,3];case 2:1!==(v=b.sent()).length&&(h.sublayerIds=v),b.label=3;case 3:return L=h,[4,y(p)];case 4:return L.Constructor=b.sent(),[2,h]}}))}))}function l(e){return a(this,void 0,void 0,(function(){var r;return n(this,(function(t){switch(t.label){case 0:return[4,f(e)];case 1:return(r=t.sent())&&Array.isArray(r.layers)?[2,r.layers.map((function(e){return e.id})).reverse()]:[2,[]]}}))}))}function y(e){return a(this,void 0,void 0,(function(){return n(this,(function(r){return[2,(0,o.layerLookupMap[e])()]}))}))}function f(e){return a(this,void 0,void 0,(function(){return n(this,(function(r){switch(r.label){case 0:return[4,u(e,{responseType:"json",query:{f:"json"}})];case 1:return[2,r.sent().data]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=function(r){return a(this,void 0,void 0,(function(){var a,u,i,s;return n(this,(function(n){switch(n.label){case 0:return[4,c(r.url)];case 1:return a=n.sent(),u=t({},r.properties,{url:r.url}),a.sublayerIds?[4,new Promise((function(r,t){e(["../GroupLayer"],r,t)}))]:[2,new a.Constructor(u)];case 2:return i=n.sent(),s=new i({title:a.parsedUrl.title}),function(e,r){return e.sublayerIds.map((function(n){return new e.Constructor(t({},r,{layerId:n,sublayerTitleMode:"service-name"}))}))}(a,u).forEach((function(e){return s.add(e)})),[2,s]}}))}))}}));