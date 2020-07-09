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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/utils"],(function(e,a,r,t,n,i,s,l){function o(e){return r.__awaiter(this,void 0,void 0,(function(){var a,i,s,o,c,u,p,m;return r.__generator(this,(function(f){switch(f.label){case 0:if(a=e.view,i=e.sampleSize,!(e&&a&&e.layer))throw new t("scale-range:missing-parameters","'view' and 'layer' parameters are required");if(s=[0,2,3,1],o=e.layer,c=r.__rest(e,["layer"]),u=l.createLayerAdapter(o,s),(p=r.__assign({layerAdapter:u},c)).sampleSize=i||500,!u)throw new t("scale-range:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(s).join(", "));return[4,a.when()];case 1:return f.sent(),m=n.isSome(p.signal)?{signal:p.signal}:null,[4,u.load(m)];case 2:return f.sent(),[2,p]}}))}))}function c(e,a,r){if(void 0===r&&(r=!0),e.constraints&&"effectiveLODs"in e.constraints){for(var t=e.constraints.effectiveLODs,n=null,i=0,s=r?t:t.slice(0).reverse();i<s.length;i++){var l=s[i];if(!(r?l.scale>a:l.scale<a)){n=l;break}}return n}}function u(e,a,r,n){var i=e.view,s=e.snapToLOD,l=e.layerAdapter;if(s){var o=c(i,a),u=c(i,r,!1);a=o?o.scale:a,r=u?u.scale:r}if(a<r)throw new t("scale-range:invalid","calculated minScale is less than maxScale.");return r>a/2&&(r=Math.floor(r/2)),a>1e8&&(a=0),"polygon"!==l.geometryType&&(r=0),{minScale:Math.ceil(a),maxScale:Math.floor(r),spatialStatistics:n}}return function(e){return r.__awaiter(this,void 0,void 0,(function(){var a,t,n,l,c,p,m,f,g,v;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o(e)];case 1:return a=r.sent(),t=a.view,n=a.sampleSize,l=a.layerAdapter,c=a.signal,[4,l.getSampleFeatures({view:t,sampleSize:n,returnGeometry:!0,signal:c})];case 2:return p=r.sent(),[4,s({features:p,geometryType:l.geometryType})];case 3:return m=r.sent(),f=function(e,a,r){var t=function(e,a){var r=null,t=null,n=null,i=null;switch(e){case"point":case"multipoint":r=(s=a).avgMinDistance,t=12,n=s.minDistance,i=320;break;case"polyline":r=(s=a).avgLength,t=30,n=s.minLength,i=320;break;case"polygon":var s;r=(s=a).avgSize,t=15,n=s.minSize,i=640}return{resolutionForMinScale:r>0?r/t:null,resolutionForMaxScale:n>0?n/i:null}}(e.geometryType,a);return{minScale:i.getScaleForResolution(t.resolutionForMinScale,r.spatialReference),maxScale:i.getScaleForResolution(t.resolutionForMaxScale,r.spatialReference)}}(l,m,t),g=f.minScale,v=f.maxScale,[2,u(a,g,v,m)]}}))}))}}));