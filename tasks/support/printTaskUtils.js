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

define(["require","exports","@dojo/framework/shim/array","../../Color","../../core/screenUtils","../../renderers/visualVariables/support/visualVariableUtils"],function(e,r,t,i,n,a){function o(e,r){var t=r.graphic,o=r.renderer,l=r.symbol,y=l.type;if(y!==O&&y!==D&&"visualVariables"in o&&o.visualVariables){var s=o.getVisualVariablesForType("size"),u=o.getVisualVariablesForType("color"),p=o.getVisualVariablesForType("opacity"),f=o.getVisualVariablesForType("rotation"),c=s&&s[0],m=u&&u[0],g=p&&p[0],L=f&&f[0];if(c){var d=y===I?l.style:null,V=a.getSize(c,t,{shape:d});null!=V&&(y===I?e.size=n.px2pt(V):y===F?(e.width=n.px2pt(V),e.height=n.px2pt(V)):y===k?e.width=n.px2pt(V):e.outline&&(e.outline.width=n.px2pt(V)))}if(m){var b=a.getColor(m,t);(b&&y===I||y===k||y===C)&&(e.color=i.toJSON(b))}if(g){var v=a.getOpacity(g,t);null!=v&&e.color&&(e.color[3]=Math.round(255*v))}L&&(e.angle=-a.getRotationAngle(o,t))}}function l(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function y(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function s(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function u(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function p(e,r){var i,n=e.allLayerViews.items;if(r===e.scale)i=n.filter(function(e){return!e.suspended});else{i=[];for(var a=0,o=n;a<o.length;a++){var l=o[a];d(l.parent)&&!t.includes(i,l.parent)||(!l.visible||r&&"isVisibleAtScale"in l&&!l.isVisibleAtScale(r)||i.push(l))}}return i}function f(e){return e&&"bing-maps"===e.type}function c(e){return e&&"csv"===e.type}function m(e){return e&&"feature"===e.type}function g(e){return e&&"graphics"===e.type}function L(e){return e&&"group"===e.type}function d(e){return e&&"esri.views.layers.GroupLayerView"===e.declaredClass}function V(e){return e&&"imagery"===e.type}function b(e){return e&&"kml"===e.type}function v(e){return e&&"map-image"===e.type}function T(e){return e&&"map-notes"===e.type}function w(e){return e&&"open-street-map"===e.type}function h(e){return e&&"stream"===e.type}function S(e){return e&&"tile"===e.type}function M(e){return e&&"vector-tile"===e.type}function G(e){return e&&"web-tile"===e.type}function P(e){return e&&"wms"===e.type}function x(e){return e&&"wmts"===e.type}Object.defineProperty(r,"__esModule",{value:!0});var I="simple-marker",F="picture-marker",k="simple-line",C="simple-fill",D="shield-label-symbol",O="text";r.applyVisualVariables=o,r.createMultipointLayer=l,r.createPolygonLayer=y,r.createPointLayer=s,r.createPolylineLayer=u,r.getVisibleLayerViews=p,r.isBingMapsLayer=f,r.isCSVLayer=c,r.isFeatureLayer=m,r.isGraphicsLayer=g,r.isGroupLayer=L,r.isImageryLayer=V,r.isKMLLayer=b,r.isMapImageLayer=v,r.isMapNotesLayer=T,r.isOpenStreetMapLayer=w,r.isStreamLayer=h,r.isTileLayer=S,r.isVectorTileLayer=M,r.isWebTileLayer=G,r.isWMSLayer=P,r.isWMTSLayer=x});