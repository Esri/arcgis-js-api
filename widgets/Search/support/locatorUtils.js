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

define(["require","exports","../../../Graphic","../../../core/maybe","../../../core/promiseUtils","./geometryUtils"],function(e,t,r,o,n,c){function a(e){return e.location?d(e):x(e)}function i(e){var t=e.source,r=e.spatialReference,c=e.view,a=e.suggestTerm,i=e.maxSuggestions,s=e.sourceIndex,u={},l=t.locator,d=f(t,c);if(!l)return n.resolve();t.categories&&(u.categories=t.categories),l.outSpatialReference=r;var x=c&&c.get("extent.center");x&&(u.location=x);var g=a.trim();if(!g)return n.resolve();var v=t.prefix,y=void 0===v?"":v,p=t.suffix,S=void 0===p?"":p,w=""+y+g+S;return u.text=w,d&&(u.searchExtent=o.unwrap(d)),u.maxSuggestions=i,t.countryCode&&(u.countryCode=t.countryCode),l.suggestLocations(u).then(function(e){return m(e,s)})}function s(e){return!!e&&(u(e)||l(e))}function u(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function l(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function d(e){var t=e.source,r=e.spatialReference,o=e.location,n=e.sourceIndex,c=e.view,a=t.locator,i=t.zoomScale,s=t.defaultZoomScale,u=c&&c.scale;return r&&(a.outSpatialReference=r),a.locationToAddress({location:o}).then(function(e){return y([e],{sourceIndex:n,scale:u,view:c,zoomScale:i,defaultZoomScale:s})})}function f(e,t){var r=e.filter,o=e.searchExtent,n=e.withinViewEnabled,a=t&&t.scale,i=t&&t.extent,s=r&&r.geometry,u=c.createExtentFromGeometry(s,t,a),l=n&&i?i:void 0;return u||o||l}function x(e){var t=e.source,r=e.suggestResult,c=e.spatialReference,a=e.view,i=e.maxResults,s=e.sourceIndex,u=t&&t.zoomScale,l=t&&t.defaultZoomScale,d=r.text.trim();if(!d)return n.resolve();var x=!r.key&&t.prefix?t.prefix:"",g=!r.key&&t.suffix?t.suffix:"",m=""+x+d+g,v={},S=t.locator,w=a&&a.scale,I=f(t,a);if(!S)return n.resolve();t.categories&&(v.categories=t.categories),t.locationType&&(v.locationType=t.locationType),c&&(S.outSpatialReference=c);var R=a&&a.get("extent.center");R&&(v.location=R),v.maxLocations=i,I&&(v.searchExtent=o.unwrap(I)),t.countryCode&&(v.countryCode=t.countryCode);var h=r.key;return h&&(v.magicKey=h),v.address={},v.address[t.singleLineFieldName||p]=m,t.outFields&&(v.outFields=t.outFields),S.addressToLocations(v).then(function(e){return y(e,{key:h,scale:w,sourceIndex:s,view:a,zoomScale:u,defaultZoomScale:l})})}function g(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function m(e,t){return e.map(function(e){return g(e,t)})}function v(e,t){var o=t.key,n=t.scale,a=t.sourceIndex,i=t.view,s=t.zoomScale,u=t.defaultZoomScale,l=e.attributes,d=e.extent,f=e.location,x=e.address,g=new r({geometry:f,attributes:l}),m=d||f,v=c.createExtentFromGeometry(m,i,n),y=s?c.scaleExtent(v,i,s):u&&"point"===m.type?c.scaleExtent(v,i,u):v,p=f?f.x+","+f.y:"";return{extent:y,feature:g,key:o,name:x||p,sourceIndex:a}}function y(e,t){return e.map(function(e){return v(e,t)})}Object.defineProperty(t,"__esModule",{value:!0});var p="Single Line Input";t.getResults=a,t.getSuggestions=i,t.isArcGISWorldGeocoder=s});