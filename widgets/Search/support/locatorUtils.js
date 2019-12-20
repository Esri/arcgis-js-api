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

define(["require","exports","../../../Graphic","../../../core/maybe","../../../core/promiseUtils","./geometryUtils"],function(e,t,r,o,n,a){function i(e,t){return e.location?d(e,t):g(e,t)}function c(e,t){var r=e.source,a=e.spatialReference,i=e.view,c=e.suggestTerm,s=e.maxSuggestions,u=e.sourceIndex,l={},d=r.locator,g=f(r,i),x=t&&t.signal;if(!d)return n.resolve();r.categories&&(l.categories=r.categories),d.outSpatialReference=a;var v=i&&i.get("extent.center");if(v&&(l.location=v),!c.trim())return n.resolve();var y=r.prefix,p=void 0===y?"":y,S=r.suffix,w=void 0===S?"":S,I=""+p+c+w;return l.text=I,g&&(l.searchExtent=o.unwrap(g)),l.maxSuggestions=s,r.countryCode&&(l.countryCode=r.countryCode),d.suggestLocations(l,{signal:x}).then(function(e){return m(e,u)})}function s(e){return!!e&&(u(e)||l(e))}function u(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function l(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function d(e,t){var r=e.source,o=e.spatialReference,n=e.location,a=e.sourceIndex,i=e.view,c=r.locator,s=r.zoomScale,u=r.defaultZoomScale,l=i&&i.scale,d=t&&t.signal;return o&&(c.outSpatialReference=o),c.locationToAddress({location:n},{signal:d}).then(function(e){return y([e],{sourceIndex:a,scale:l,view:i,zoomScale:s,defaultZoomScale:u})})}function f(e,t){var r=e.filter,o=e.searchExtent,n=e.withinViewEnabled,i=t&&t.scale,c=t&&t.extent,s=r&&r.geometry,u=a.createExtentFromGeometry(s,t,i),l=n&&c?c:void 0;return u||o||l}function g(e,t){var r=e.source,a=e.suggestResult,i=e.spatialReference,c=e.view,s=e.maxResults,u=e.sourceIndex,l=r&&r.zoomScale,d=r&&r.defaultZoomScale;if(!a.text.trim())return n.resolve();var g=!a.key&&r.prefix?r.prefix:"",x=!a.key&&r.suffix?r.suffix:"",m=""+g+a.text+x,v={},S=r.locator,w=c&&c.scale,I=f(r,c),R=t&&t.signal;if(!S)return n.resolve();r.categories&&(v.categories=r.categories),r.locationType&&(v.locationType=r.locationType),i&&(S.outSpatialReference=i);var h=c&&c.get("extent.center");h&&(v.location=h),v.maxLocations=s,I&&(v.searchExtent=o.unwrap(I)),r.countryCode&&(v.countryCode=r.countryCode);var E=a.key;return E&&(v.magicKey=E),v.address={},v.address[r.singleLineFieldName||p]=m,r.outFields&&(v.outFields=r.outFields),S.addressToLocations(v,{signal:R}).then(function(e){return y(e,{key:E,scale:w,sourceIndex:u,view:c,zoomScale:l,defaultZoomScale:d})})}function x(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function m(e,t){return e.map(function(e){return x(e,t)})}function v(e,t){var o=t.key,n=t.scale,i=t.sourceIndex,c=t.view,s=t.zoomScale,u=t.defaultZoomScale,l=e.attributes,d=e.extent,f=e.location,g=e.address,x=new r({geometry:f,attributes:l}),m=d||f,v=a.createExtentFromGeometry(m,c,n),y=s?a.scaleExtent(v,c,s):u&&"point"===m.type?a.scaleExtent(v,c,u):v,p=f?f.x+","+f.y:"";return{extent:y,feature:x,key:o,name:g||p,sourceIndex:i}}function y(e,t){return e.map(function(e){return v(e,t)})}Object.defineProperty(t,"__esModule",{value:!0});var p="Single Line Input";t.getResults=i,t.getSuggestions=c,t.isArcGISWorldGeocoder=s});