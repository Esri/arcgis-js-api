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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../core/screenUtils","../../../geometry/support/scaleUtils","./scaleRange","../support/utils","../../visualVariables/SizeVariable"],function(e,r,a,t,n,i,s,l,o,u,c){function p(e){return t(this,void 0,void 0,function(){var r,t,s,l;return a(this,function(a){switch(a.label){case 0:if(r=e.view,t=e.layer,!(e&&r&&t))throw new i("size-range:missing-parameters","'view' and 'layer' parameters are required");if(s=n({},e),l=[0,2,3,1],s.layer=u.createLayerAdapter(t,l),!s.layer)throw new i("size-range:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(l).join(", "));return[4,r.when()];case 1:return a.sent(),[4,s.layer.load()];case 2:if(a.sent(),"polygon"!==s.layer.geometryType)throw new i("size-range:not-supported","sizeRange is not supported for geometryType: "+s.layer.geometryType);return[2,s]}})})}function f(e,r){var a=Math.ceil(e/r),t=Math.ceil(a/4);t<4?t=4:t>16&&(t=16);var n=5*t;return{min:t,max:n<50?50:n}}function v(e,r){var a=e.view,t=e.layer,n=t.fullExtent,i=t.minScale||w,s=t.maxScale||g,o=r.minScale||0,u=r.maxScale||0,c=n?l.getScale(a,n):0;return c=c<i&&c>s?c:0,{scales:[i,s,o,u,c].map(Math.round).sort(function(e,r){return e-r}).filter(function(e,r,a){return!!e&&a.indexOf(e)===r}).filter(function(e,r,a){return!r||Math.abs(e-a[r-1])>5}),fullExtentScale:c}}function m(e,r){var a=r.spatialStatistics,t=r.minScale,n=r.maxScale;if(!("avgSize"in a&&a.avgSize))throw new i("size-range:insufficient-info","average polygon size is invalid");var l=a.avgSize,o=e.view,u=o.resolution,p=o.scale,m=u/p,y=v(e,{minScale:t,maxScale:n}),w=y.scales,g=y.fullExtentScale,S=[],h=[];return w.forEach(function(e,r){var a=f(l,m*e),t=a.min,n=a.max,i=w.indexOf(g),o=i>-1&&r>i?2:1;S.push({value:e,size:s.px2pt(t/o)}),h.push({value:e,size:s.px2pt(n/o)})}),{minSize:new c({valueExpression:"$view.scale",stops:S}),maxSize:new c({valueExpression:"$view.scale",stops:h})}}function y(e){return t(this,void 0,void 0,function(){var r,t,n,i;return a(this,function(a){switch(a.label){case 0:return[4,p(e)];case 1:return r=a.sent(),t=r.view,n=r.layer,[4,o({layer:n,view:t})];case 2:return i=a.sent(),[2,m(r,i)]}})})}var w=1128.497176,g=591657527.591555;return y});