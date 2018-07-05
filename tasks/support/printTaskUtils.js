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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../Color","../../core/screenUtils"],function(e,r,t,i){function o(e,r){var o=r.graphic,n=r.renderer,l=r.symbol,a=l.type;if(a!==m&&a!==g){var y=n.getVisualVariablesForType("size"),c=n.getVisualVariablesForType("color"),d=n.getVisualVariablesForType("opacity"),T=n.getVisualVariablesForType("rotation"),P=y&&y[0],V=c&&c[0],b=d&&d[0],h=T&&T[0];if(P){var v=a===p?l.style:null,G=n.getSize(o,{sizeInfo:P,shape:v});null!=G&&(a===p?e.size=i.px2pt(G):a===u?(e.width=i.px2pt(G),e.height=i.px2pt(G)):a===s?e.width=i.px2pt(G):e.outline&&(e.outline.width=i.px2pt(G)))}if(V){var L=n.getColor(o,{colorInfo:V});(L&&a===p||a===s||a===f)&&(e.color=t.toJSON(L))}if(b){var w=n.getOpacity(o,{opacityInfo:b});null!=w&&e.color&&(e.color[3]=Math.round(255*w))}if(h){var x=-n.getRotationAngle(o);e.angle=x}}}function n(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function l(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function a(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function y(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}Object.defineProperty(r,"__esModule",{value:!0});var p="simple-marker",u="picture-marker",s="simple-line",f="simple-fill",g="shield-label-symbol",m="text";r.applyVisualVariables=o,r.createMultipointLayer=n,r.createPolygonLayer=l,r.createPointLayer=a,r.createPolylineLayer=y});