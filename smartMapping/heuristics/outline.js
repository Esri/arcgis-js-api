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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../geometry/support/scaleUtils","../../renderers/visualVariables/SizeVariable","../statistics/spatialStatistics","../support/utils"],(function(e,r,t,i,a,n,s,o,u){var l=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];function p(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,s,o,l,p,c;return t.__generator(this,(function(y){switch(y.label){case 0:if(r=e.view,!(e&&r&&e.layer))throw new i("outline:missing-parameters","'view' and 'layer' parameters are required");if(n=[0,2,3,1],s=e.layer,o=t.__rest(e,["layer"]),l=u.createLayerAdapter(s,n),p=t.__assign({layerAdapter:l},o),!l)throw new i("outline:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(n).join(", "));return[4,r.when()];case 1:return y.sent(),c=a.isSome(p.signal)?{signal:p.signal}:null,[4,l.load(c)];case 2:if(y.sent(),"polygon"!==l.geometryType)throw new i("outline:not-supported","outline is not supported for geometryType: "+l.geometryType);return[2,p]}}))}))}function c(e,r){var t=e.avgSize,i=n.getScaleForResolution(1,r.spatialReference),a=l.map((function(e){return{size:e.width,value:Math.round(t/e.size*i)}}));return a.sort((function(e,r){return e.value-r.value})),{visualVariables:[new s({target:"outline",valueExpression:"$view.scale",stops:a})],opacity:.25}}return function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a,n,s,u;return t.__generator(this,(function(l){switch(l.label){case 0:return[4,p(e)];case 1:return r=l.sent(),a=r.layerAdapter,n=t.__rest(r,["layerAdapter"]),-1,[4,a.getSampleFeatures(t.__assign({sampleSize:-1,returnGeometry:!0},n))];case 2:return s=l.sent(),[4,o({features:s,geometryType:a.geometryType})];case 3:if(!("avgSize"in(u=l.sent())&&u.avgSize))throw new i("outline:insufficient-info","average polygon size is invalid");return[2,c(u,n.view)]}}))}))}}));