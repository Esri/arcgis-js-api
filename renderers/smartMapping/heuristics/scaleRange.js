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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/utils"],(function(e,r,a,t,n,i,s,l,o,c,u){function p(e){return t(this,void 0,void 0,(function(){var r,t,o,c,p,m,f,g;return a(this,(function(a){switch(a.label){case 0:if(r=e.view,t=e.sampleSize,!(e&&r&&e.layer))throw new s("scale-range:missing-parameters","'view' and 'layer' parameters are required");if(o=[0,2,3,1],c=e.layer,p=i(e,["layer"]),m=u.createLayerAdapter(c,o),(f=n({layerAdapter:m},p)).sampleSize=t||500,!m)throw new s("scale-range:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(o).join(", "));return[4,r.when()];case 1:return a.sent(),g=l.isSome(f.signal)?{signal:f.signal}:null,[4,m.load(g)];case 2:return a.sent(),[2,f]}}))}))}function m(e,r,a){if(void 0===a&&(a=!0),e.constraints&&"effectiveLODs"in e.constraints){for(var t=e.constraints.effectiveLODs,n=null,i=0,s=a?t:t.slice(0).reverse();i<s.length;i++){var l=s[i];if(!(a?l.scale>r:l.scale<r)){n=l;break}}return n}}function f(e,r,a,t){var n=e.view,i=e.snapToLOD,l=e.layerAdapter;if(i){var o=m(n,r),c=m(n,a,!1);r=o?o.scale:r,a=c?c.scale:a}if(r<a)throw new s("scale-range:invalid","calculated minScale is less than maxScale.");return a>r/2&&(a=Math.floor(a/2)),r>1e8&&(r=0),"polygon"!==l.geometryType&&(a=0),{minScale:Math.ceil(r),maxScale:Math.floor(a),spatialStatistics:t}}return function(e){return t(this,void 0,void 0,(function(){var r,t,n,i,s,l,u,m,g,S;return a(this,(function(a){switch(a.label){case 0:return[4,p(e)];case 1:return r=a.sent(),t=r.view,n=r.sampleSize,i=r.layerAdapter,s=r.signal,[4,i.getSampleFeatures({view:t,sampleSize:n,returnGeometry:!0,signal:s})];case 2:return l=a.sent(),[4,c({features:l,geometryType:i.geometryType})];case 3:return u=a.sent(),m=function(e,r,a){var t=function(e,r){var a=null,t=null,n=null,i=null;switch(e){case"point":case"multipoint":a=(s=r).avgMinDistance,t=12,n=s.minDistance,i=320;break;case"polyline":a=(s=r).avgLength,t=30,n=s.minLength,i=320;break;case"polygon":var s;a=(s=r).avgSize,t=15,n=s.minSize,i=640}return{resolutionForMinScale:a>0?a/t:null,resolutionForMaxScale:n>0?n/i:null}}(e.geometryType,r);return{minScale:o.getScaleForResolution(t.resolutionForMinScale,a.spatialReference),maxScale:o.getScaleForResolution(t.resolutionForMaxScale,a.spatialReference)}}(i,u,t),g=m.minScale,S=m.maxScale,[2,f(r,g,S,u)]}}))}))}}));