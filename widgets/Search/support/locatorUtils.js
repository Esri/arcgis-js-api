// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../Graphic","../../../core/promiseUtils","./geometryUtils"],function(e,t,r,n,o){function i(e){return e.location?c(e):u(e)}function a(e){var t=e.source,r=e.spatialReference,o=e.view,i=e.suggestTerm,a=e.maxSuggestions,c=e.sourceIndex,u={},l=t.locator,d=o&&o.scale,x=s(t,o);if(!l)return n.resolve();t.categories&&(u.categories=t.categories),l.outSpatialReference=r;var v=g(o,t,d);v&&(u.location=v.location,u.distance=v.distance);var m=i.trim();if(!m)return n.resolve();var y=t.prefix,p=void 0===y?"":y,h=t.suffix,S=void 0===h?"":h,R=""+p+m+S;return u.text=R,x&&(u.searchExtent=x),u.maxSuggestions=a,t.countryCode&&(u.countryCode=t.countryCode),l.suggestLocations(u).then(function(e){return f(e,c)})}function c(e){var t=e.source,r=e.spatialReference,n=e.location,o=e.distance,i=e.sourceIndex,a=t.locator;return r&&(a.outSpatialReference=r),a.locationToAddress(n,o).then(function(e){return x([e],i)})}function s(e,t){var r=e.filter,n=e.searchExtent,i=e.withinViewEnabled,a=t&&t.scale,c=t&&t.extent,s=r&&r.geometry,u=o.createExtentFromGeometry(s,t,a),l=i&&c?c:void 0;return u||n||l}function u(e){var t=e.source,r=e.suggestResult,o=e.spatialReference,i=e.view,a=e.maxResults,c=e.sourceIndex,u=r.text.trim();if(!u)return n.resolve();var l=!r.key&&t.prefix?t.prefix:"",f=!r.key&&t.suffix?t.suffix:"",d=""+l+u+f,m={},y=t.locator,p=i&&i.scale,h=s(t,i);if(!y)return n.resolve();t.categories&&(m.categories=t.categories),o&&(y.outSpatialReference=o);var S=g(i,t,p);return S&&(m.location=S.location,m.distance=S.distance),m.maxLocations=a,h&&(m.searchExtent=h),t.countryCode&&(m.countryCode=t.countryCode),r.key&&(m.magicKey=r.key),m.address={},m.address[t.singleLineFieldName||v]=d,t.outFields&&(m.outFields=t.outFields),y.addressToLocations(m).then(function(e){return x(e,c)})}function l(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function f(e,t){return e.map(function(e){return l(e,t)})}function d(e,t){var n=e.attributes,o=e.extent,i=e.location,a=e.address,c=new r({geometry:i,attributes:n}),s=i?i.x+","+i.y:null,u=a||s;return{extent:o,feature:c,name:u,sourceIndex:t}}function x(e,t){return e.map(function(e){return d(e,t)})}function g(e,t,r){var n=t.localSearchOptions;if(e&&n&&n.hasOwnProperty("distance")&&n.hasOwnProperty("minScale")){var o=n.minScale,i=n.distance;if(!o||r&&o>=r)return{location:e.get("extent.center"),distance:i}}}Object.defineProperty(t,"__esModule",{value:!0});var v="Single Line Input";t.getResults=i,t.getSuggestions=a});