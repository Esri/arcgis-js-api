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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../Graphic","../../../core/promiseUtils","./geometryUtils"],function(e,t,r,n,o){function i(e){return e.location?c(e):u(e)}function a(e){var t=e.source,r=e.spatialReference,o=e.view,i=e.suggestTerm,a=e.maxSuggestions,c=e.sourceIndex,u={},l=t.locator,d=o&&o.scale,x=s(t,o);if(!l)return n.resolve();t.categories&&(u.categories=t.categories),l.outSpatialReference=r;var m=g(o,t,d);m&&(u.location=m.location,u.distance=m.distance);var v=i.trim();if(!v)return n.resolve();var y=t.prefix,p=void 0===y?"":y,S=t.suffix,h=void 0===S?"":S,R=""+p+v+h;return u.text=R,x&&(u.searchExtent=x),u.maxSuggestions=a,t.countryCode&&(u.countryCode=t.countryCode),l.suggestLocations(u).then(function(e){return f(e,c)})}function c(e){var t=e.source,r=e.spatialReference,n=e.location,o=e.distance,i=e.sourceIndex,a=e.view,c=t.locator,s=t.zoomScale,u=a&&a.scale;return r&&(c.outSpatialReference=r),c.locationToAddress(n,o).then(function(e){return x([e],i,a,u,s)})}function s(e,t){var r=e.filter,n=e.searchExtent,i=e.withinViewEnabled,a=t&&t.scale,c=t&&t.extent,s=r&&r.geometry,u=o.createExtentFromGeometry(s,t,a),l=i&&c?c:void 0;return u||n||l}function u(e){var t=e.source,r=e.suggestResult,o=e.spatialReference,i=e.view,a=e.maxResults,c=e.sourceIndex,u=t&&t.zoomScale,l=r.text.trim();if(!l)return n.resolve();var f=!r.key&&t.prefix?t.prefix:"",d=!r.key&&t.suffix?t.suffix:"",v=""+f+l+d,y={},p=t.locator,S=i&&i.scale,h=s(t,i);if(!p)return n.resolve();t.categories&&(y.categories=t.categories),o&&(p.outSpatialReference=o);var R=g(i,t,S);return R&&(y.location=R.location,y.distance=R.distance),y.maxLocations=a,h&&(y.searchExtent=h),t.countryCode&&(y.countryCode=t.countryCode),r.key&&(y.magicKey=r.key),y.address={},y.address[t.singleLineFieldName||m]=v,t.outFields&&(y.outFields=t.outFields),p.addressToLocations(y).then(function(e){return x(e,c,i,S,u)})}function l(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function f(e,t){return e.map(function(e){return l(e,t)})}function d(e,t,n,i,a){var c=e.attributes,s=e.extent,u=e.location,l=e.address,f=new r({geometry:u,attributes:c}),d=s||u,x=o.createExtentFromGeometry(d,n,i),g=a?o.scaleExtent(x,n,a):x,m=u?u.x+","+u.y:null,v=l||m;return{extent:g,feature:f,name:v,sourceIndex:t}}function x(e,t,r,n,o){return e.map(function(e){return d(e,t,r,n,o)})}function g(e,t,r){var n=t.localSearchOptions;if(e&&n&&n.hasOwnProperty("distance")&&n.hasOwnProperty("minScale")){var o=n.minScale,i=n.distance;if(!o||r&&o>=r)return{location:e.get("extent.center"),distance:i}}}Object.defineProperty(t,"__esModule",{value:!0});var m="Single Line Input";t.getResults=i,t.getSuggestions=a});