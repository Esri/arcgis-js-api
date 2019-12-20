// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/utils","../../visualVariables/SizeVariable"],function(e,r,t,i,a,n,s,o,u,l){function p(e){return i(this,void 0,void 0,function(){var r,i,s,o;return t(this,function(t){switch(t.label){case 0:if(r=e.view,i=e.layer,!(e&&r&&i))throw new n("outline:missing-parameters","'view' and 'layer' parameters are required");if(s=a({},e),o=[0,2,3,1],s.layer=u.createLayerAdapter(i,o),!s.layer)throw new n("outline:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(o).join(", "));return[4,r.when()];case 1:return t.sent(),[4,s.layer.load()];case 2:if(t.sent(),"polygon"!==s.layer.geometryType)throw new n("outline:not-supported","outline is not supported for geometryType: "+s.layer.geometryType);return[2,s]}})})}function c(e,r){var t=e.avgSize,i=r.view,a=s.getScaleForResolution(1,i.spatialReference),n=v.map(function(e){return{size:e.width,value:Math.round(t/e.size*a)}});return n.sort(function(e,r){return e.value-r.value}),{visualVariables:[new l({target:"outline",valueExpression:"$view.scale",stops:n})],opacity:.25}}function y(e){return i(this,void 0,void 0,function(){var r,i,a,s,u,l;return t(this,function(t){switch(t.label){case 0:return[4,p(e)];case 1:return r=t.sent(),i=r.view,a=-1,s=r.layer,[4,s.getSampleFeatures({view:i,sampleSize:a,returnGeometry:!0})];case 2:return u=t.sent(),[4,o({features:u,geometryType:s.geometryType})];case 3:if(!("avgSize"in(l=t.sent())&&l.avgSize))throw new n("outline:insufficient-info","average polygon size is invalid");return[2,c(l,r)]}})})}var v=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];return y});