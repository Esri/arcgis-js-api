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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../core/screenUtils","../../Color"],function(e,r){function t(t,i){var o=i.graphic,n=i.renderer,l=i.symbol,g=l.type;if(g!==f&&g!==s){var m=n.getVisualVariablesForType("size"),c=n.getVisualVariablesForType("color"),d=n.getVisualVariablesForType("opacity"),T=n.getVisualVariablesForType("rotation"),V=m&&m[0],h=c&&c[0],P=d&&d[0],b=T&&T[0];if(V){var G=n.getSize(o,{sizeInfo:V,shape:g===a?l.style:null});null!=G&&(g===a?t.size=e.px2pt(G):g===y?(t.width=e.px2pt(G),t.height=e.px2pt(G)):g===p?t.width=e.px2pt(G):t.outline&&(t.outline.width=e.px2pt(G)))}if(h){var L=n.getColor(o,{colorInfo:h});(L&&g===a||g===p||g===u)&&(t.color=r.toJSON(L))}if(P){var v=n.getOpacity(o,{opacityInfo:P});null!=v&&t.color&&(t.color[3]=Math.round(255*v))}if(b){var w=-n.getRotationAngle(o);t.angle=w}}}function i(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function o(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function n(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function l(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}var a="simple-marker",y="picture-marker",p="simple-line",u="simple-fill",s="shield-label-symbol",f="text";return{applyVisualVariables:t,createPolylineLayer:l,createPointLayer:n,createMultipointLayer:i,createPolygonLayer:o}});