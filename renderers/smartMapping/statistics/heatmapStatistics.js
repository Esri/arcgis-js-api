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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","../../../layers/support/fieldUtils","./support/utils","../support/utils"],function(e,r,t,i,a,s,l){function u(e){if(!(e&&e.layer&&e.view))return i.reject(s.createError("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required"));var r=t({},e);r.blurRadius=null==r.blurRadius?10:r.blurRadius;var a=[0,2,1],u=l.createLayerAdapter(r.layer,a);return r.layer=u,u?u.load().then(function(){var e=r.field,t=e?u.getField(e):null,a=l.getFieldsList({field:e}),n=s.verifyBasicFieldValidity(u,a,"heatmap-statistics:invalid-parameters");if(n)return i.reject(n);if(t){var p=s.verifyFieldType(u,t,"heatmap-statistics:invalid-parameters",f);if(p)return i.reject(p)}return r}):i.reject(s.createError("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(a).join(", ")))}function n(e){return u(e).then(function(e){var r=e.layer,t={field:e.field,fieldOffset:e.fieldOffset,blurRadius:e.blurRadius,features:e.features,view:e.view};return r.heatmapStatistics(t)})}var f=a.numericTypes;return n});