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

define(["require","exports","@dojo/framework/shim/array","../../core/screenUtils","../../renderers/visualVariables/support/visualVariableUtils"],(function(e,r,t,i,n){Object.defineProperty(r,"__esModule",{value:!0});function a(e){return e&&"esri.views.layers.GroupLayerView"===e.declaredClass}r.applyVisualVariables=function(e,r){var t=r.graphic,a=r.renderer,o=r.symbol,l=o.type;if("text"!==l&&"shield-label-symbol"!==l&&"visualVariables"in a&&a.visualVariables){var s=a.getVisualVariablesForType("size"),y=a.getVisualVariablesForType("color"),u=a.getVisualVariablesForType("opacity"),p=a.getVisualVariablesForType("rotation"),f=s&&s[0],c=y&&y[0],m=u&&u[0],g=p&&p[0];if(f){var L="simple-marker"===l?o.style:null,d=n.getSize(f,t,{shape:L});null!=d&&("simple-marker"===l?e.size=i.px2pt(d):"picture-marker"===l?(e.width=i.px2pt(d),e.height=i.px2pt(d)):"simple-line"===l?e.width=i.px2pt(d):e.outline&&(e.outline.width=i.px2pt(d)))}if(c){var V=n.getColor(c,t);(V&&"simple-marker"===l||"simple-line"===l||"simple-fill"===l)&&(e.color=V?V.toJSON():void 0)}if(m){var b=n.getOpacity(m,t);null!=b&&e.color&&(e.color[3]=Math.round(255*b))}g&&(e.angle=-n.getRotationAngle(a,t))}},r.createMultipointLayer=function(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}},r.createPolygonLayer=function(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}},r.createPointLayer=function(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}},r.createPolylineLayer=function(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}},r.getVisibleLayerViews=function(e,r){var i,n=e.allLayerViews.items;if(r===e.scale)i=n.filter((function(e){return!e.suspended}));else{i=[];for(var o=0,l=n;o<l.length;o++){var s=l[o];a(s.parent)&&!t.includes(i,s.parent)||(!s.visible||r&&"isVisibleAtScale"in s&&!s.isVisibleAtScale(r)||i.push(s))}}return i},r.isBingMapsLayer=function(e){return e&&"bing-maps"===e.type},r.isCSVLayer=function(e){return e&&"csv"===e.type},r.isFeatureLayer=function(e){return e&&"feature"===e.type},r.isGraphicsLayer=function(e){return e&&"graphics"===e.type},r.isGroupLayer=function(e){return e&&"group"===e.type},r.isImageryLayer=function(e){return e&&"imagery"===e.type},r.isKMLLayer=function(e){return e&&"kml"===e.type},r.isMapImageLayer=function(e){return e&&"map-image"===e.type},r.isMapNotesLayer=function(e){return e&&"map-notes"===e.type},r.isOpenStreetMapLayer=function(e){return e&&"open-street-map"===e.type},r.isStreamLayer=function(e){return e&&"stream"===e.type},r.isTileLayer=function(e){return e&&"tile"===e.type},r.isVectorTileLayer=function(e){return e&&"vector-tile"===e.type},r.isWebTileLayer=function(e){return e&&"web-tile"===e.type},r.isWMSLayer=function(e){return e&&"wms"===e.type},r.isWMTSLayer=function(e){return e&&"wmts"===e.type}}));