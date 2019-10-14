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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/utils","../../visualVariables/SizeVariable"],function(e,t,r,i,a,n,s,o,u,l){function p(e){return i(this,void 0,void 0,function(){var t,i,s,o;return r(this,function(r){switch(r.label){case 0:if(t=e.view,i=e.layer,!(e&&t&&i))throw new n("outline:missing-parameters","'view' and 'layer' parameters are required");if(s=a({},e),o=[0,2,3,1],s.layer=u.createLayerAdapter(i,o),!s.layer)throw new n("outline:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(o).join(", "));return[4,t.when()];case 1:return r.sent(),[4,s.layer.load()];case 2:if(r.sent(),"polygon"!==s.layer.geometryType)throw new n("outline:not-supported","outline is not supported for geometryType: "+s.layer.geometryType);return[2,s]}})})}function c(e,t){var r=e.avgSize,i=t.view,a=s.getScaleForResolution(1,i.spatialReference),n=v.map(function(e){return{size:e.width,value:Math.round(r/e.size*a)}});return n.sort(function(e,t){return e.value-t.value}),{visualVariables:[new l({target:"outline",valueExpression:"$view.scale",stops:n})],opacity:.25}}function y(e){return i(this,void 0,void 0,function(){var t,i,a,s,u,l;return r(this,function(r){switch(r.label){case 0:return[4,p(e)];case 1:return t=r.sent(),i=t.view,a=-1,s=t.layer,[4,s.getSampleFeatures({view:i,sampleSize:a})];case 2:return u=r.sent(),[4,o({features:u,geometryType:s.geometryType})];case 3:if(!("avgSize"in(l=r.sent())&&l.avgSize))throw new n("outline:insufficient-info","average polygon size is invalid");return[2,c(l,t)]}})})}var v=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];return y});