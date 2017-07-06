// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["../../core/screenUtils","../../Color"],function(e,r){function t(t,o){var i=o.graphic,n=o.renderer,l=o.symbol,f=l.type;if(f!==m&&f!==u){var g=n.getVisualVariablesForType("size"),c=n.getVisualVariablesForType("color"),d=n.getVisualVariablesForType("opacity"),b=n.getVisualVariablesForType("rotation"),T=g&&g[0],V=c&&c[0],h=d&&d[0],P=b&&b[0];if(T){var G=n.getSize(i,{sizeInfo:T,shape:f===a?l.style:null});null!=G&&(f===a?t.size=e.px2pt(G):f===y?(t.width=e.px2pt(G),t.height=e.px2pt(G)):f===p?t.width=e.px2pt(G):t.outline&&(t.outline.width=e.px2pt(G)))}if(V){var L=n.getColor(i,{colorInfo:V});(L&&f===a||f===p||f===s)&&(t.color=r.toJSON(L))}if(h){var v=n.getOpacity(i,{opacityInfo:h});null!=v&&t.color&&(t.color[3]=Math.round(255*v))}if(P){var w=-n.getRotationAngle(i);t.angle=w}}}function o(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function i(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function n(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function l(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}var a="simple-marker-symbol",y="picture-marker-symbol",p="simple-line-symbol",s="simple-fill-symbol",u="shield-label-symbol",m="text-symbol";return{applyVisualVariables:t,createPolylineLayer:l,createPointLayer:n,createMultipointLayer:o,createPolygonLayer:i}});