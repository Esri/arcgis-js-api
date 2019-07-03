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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/utils"],function(e,r,a,t,n,i,s,l,o){function c(e){return t(this,void 0,void 0,function(){var r,t,s,l,c;return a(this,function(a){switch(a.label){case 0:if(r=e.view,t=e.layer,s=e.sampleSize,!(e&&r&&t))throw new i("scale-range:missing-parameters","'view' and 'layer' parameters are required");if(l=n({},e),c=[0,2,3,1],l.layer=o.createLayerAdapter(t,c),l.sampleSize=s||S,!l.layer)throw new i("scale-range:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(c).join(", "));return[4,r.when()];case 1:return a.sent(),[4,l.layer.load()];case 2:return a.sent(),[2,l]}})})}function u(e,r){var a=h,t=g/4,n=w,i=g/4,s=d,l=g/2,o=null,c=null,u=null,p=null;switch(e){case"point":case"multipoint":var v=r;o=v.avgMinDistance,c=a,u=v.minDistance,p=t;break;case"polyline":var v=r;o=v.avgLength,c=n,u=v.minLength,p=i;break;case"polygon":var v=r;o=v.avgSize,c=s,u=v.minSize,p=l}return{resolutionForMinScale:o>0?o/c:null,resolutionForMaxScale:u>0?u/p:null}}function p(e,r,a){var t=e.geometryType,n=u(t,r);return{minScale:s.getScaleForResolution(n.resolutionForMinScale,a.spatialReference),maxScale:s.getScaleForResolution(n.resolutionForMaxScale,a.spatialReference)}}function v(e,r,a){if(void 0===a&&(a=!0),e.constraints&&"effectiveLODs"in e.constraints){for(var t=e.constraints.effectiveLODs,n=a?t:t.slice(0).reverse(),i=null,s=0,l=n;s<l.length;s++){var o=l[s];if(!(a?o.scale>r:o.scale<r)){i=o;break}}return i}}function f(e,r,a,t){var n=e.view,s=e.snapToLOD,l=e.layer;if(s){var o=v(n,r),c=v(n,a,!1);r=o?o.scale:r,a=c?c.scale:a}if(r<a)throw new i("scale-range:invalid","calculated minScale is less than maxScale.");return a>r/2&&(a=Math.floor(a/2)),r>y&&(r=0),"polygon"!==l.geometryType&&(a=0),{minScale:Math.ceil(r),maxScale:Math.floor(a),spatialStatistics:t}}function m(e){return t(this,void 0,void 0,function(){var r,t,n,i,s,o,u,v,m;return a(this,function(a){switch(a.label){case 0:return[4,c(e)];case 1:return r=a.sent(),t=r.view,n=r.sampleSize,i=r.layer,[4,i.getSampleFeatures({view:t,sampleSize:n})];case 2:return s=a.sent(),[4,l({features:s,geometryType:i.geometryType})];case 3:return o=a.sent(),u=p(i,o,t),v=u.minScale,m=u.maxScale,[2,f(r,v,m,o)]}})})}var S=500,y=1e8,g=1280,h=12,w=30,d=15;return m});