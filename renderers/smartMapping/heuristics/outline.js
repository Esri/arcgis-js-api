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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/utils","../../visualVariables/SizeVariable"],(function(e,r,t,i,a,n,s,o,u,l,p,c){var y=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];function v(e){return i(this,void 0,void 0,(function(){var r,i,u,l,c,y,v;return t(this,(function(t){switch(t.label){case 0:if(r=e.view,!(e&&r&&e.layer))throw new s("outline:missing-parameters","'view' and 'layer' parameters are required");if(i=[0,2,3,1],u=e.layer,l=n(e,["layer"]),c=p.createLayerAdapter(u,i),y=a({layerAdapter:c},l),!c)throw new s("outline:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(i).join(", "));return[4,r.when()];case 1:return t.sent(),v=o.isSome(y.signal)?{signal:y.signal}:null,[4,c.load(v)];case 2:if(t.sent(),"polygon"!==c.geometryType)throw new s("outline:not-supported","outline is not supported for geometryType: "+c.geometryType);return[2,y]}}))}))}function d(e,r){var t=e.avgSize,i=u.getScaleForResolution(1,r.spatialReference),a=y.map((function(e){return{size:e.width,value:Math.round(t/e.size*i)}}));return a.sort((function(e,r){return e.value-r.value})),{visualVariables:[new c({target:"outline",valueExpression:"$view.scale",stops:a})],opacity:.25}}return function(e){return i(this,void 0,void 0,(function(){var r,i,o,u,p;return t(this,(function(t){switch(t.label){case 0:return[4,v(e)];case 1:return r=t.sent(),i=r.layerAdapter,o=n(r,["layerAdapter"]),-1,[4,i.getSampleFeatures(a({sampleSize:-1,returnGeometry:!0},o))];case 2:return u=t.sent(),[4,l({features:u,geometryType:i.geometryType})];case 3:if(!("avgSize"in(p=t.sent())&&p.avgSize))throw new s("outline:insufficient-info","average polygon size is invalid");return[2,d(p,o.view)]}}))}))}}));