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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/array","../../Color","../../core/screenUtils"],function(e,r,t,i,n){function a(e,r){var t=r.graphic,a=r.renderer,o=r.symbol,l=o.type;if(l!==C&&l!==z&&"visualVariables"in a&&a.visualVariables){var y=a.getVisualVariablesForType("size"),s=a.getVisualVariablesForType("color"),u=a.getVisualVariablesForType("opacity"),p=a.getVisualVariablesForType("rotation"),f=y&&y[0],c=s&&s[0],m=u&&u[0],g=p&&p[0];if(f){var L=l===I?o.style:null,d=a.getSize(t,{sizeInfo:f,shape:L});null!=d&&(l===I?e.size=n.px2pt(d):l===x?(e.width=n.px2pt(d),e.height=n.px2pt(d)):l===F?e.width=n.px2pt(d):e.outline&&(e.outline.width=n.px2pt(d)))}if(c){var V=a.getColor(t,{colorInfo:c});(V&&l===I||l===F||l===k)&&(e.color=i.toJSON(V))}if(m){var b=a.getOpacity(t,{opacityInfo:m});null!=b&&e.color&&(e.color[3]=Math.round(255*b))}g&&(e.angle=-a.getRotationAngle(t))}}function o(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function l(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function y(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function s(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function u(e,r){var i,n=e.allLayerViews.items;if(r===e.scale)i=n.filter(function(e){return!e.suspended});else{i=[];for(var a=0,o=n;a<o.length;a++){var l=o[a];L(l.parent)&&!t.includes(i,l.parent)||(!l.visible||r&&"isVisibleAtScale"in l&&!l.isVisibleAtScale(r)||i.push(l))}}return i}function p(e){return e&&"bing-maps"===e.type}function f(e){return e&&"csv"===e.type}function c(e){return e&&"feature"===e.type}function m(e){return e&&"graphics"===e.type}function g(e){return e&&"group"===e.type}function L(e){return e&&"esri.views.layers.GroupLayerView"===e.declaredClass}function d(e){return e&&"imagery"===e.type}function V(e){return e&&"kml"===e.type}function b(e){return e&&"map-image"===e.type}function v(e){return e&&"map-notes"===e.type}function T(e){return e&&"open-street-map"===e.type}function w(e){return e&&"stream"===e.type}function h(e){return e&&"tile"===e.type}function S(e){return e&&"vector-tile"===e.type}function M(e){return e&&"web-tile"===e.type}function G(e){return e&&"wms"===e.type}function P(e){return e&&"wmts"===e.type}Object.defineProperty(r,"__esModule",{value:!0});var I="simple-marker",x="picture-marker",F="simple-line",k="simple-fill",z="shield-label-symbol",C="text";r.applyVisualVariables=a,r.createMultipointLayer=o,r.createPolygonLayer=l,r.createPointLayer=y,r.createPolylineLayer=s,r.getVisibleLayerViews=u,r.isBingMapsLayer=p,r.isCSVLayer=f,r.isFeatureLayer=c,r.isGraphicsLayer=m,r.isGroupLayer=g,r.isImageryLayer=d,r.isKMLLayer=V,r.isMapImageLayer=b,r.isMapNotesLayer=v,r.isOpenStreetMapLayer=T,r.isStreamLayer=w,r.isTileLayer=h,r.isVectorTileLayer=S,r.isWebTileLayer=M,r.isWMSLayer=G,r.isWMTSLayer=P});