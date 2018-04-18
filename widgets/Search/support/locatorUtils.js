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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../Graphic","../../../core/promiseUtils","./geometryUtils"],function(e,t,r,n,o){function i(e){return e.location?c(e):u(e)}function a(e){var t=e.source,r=e.spatialReference,o=e.view,i=e.suggestTerm,a=e.maxSuggestions,c=e.sourceIndex,u={},l=t.locator,f=o&&o.scale,x=s(t,o);if(!l)return n.resolve();t.categories&&(u.categories=t.categories),l.outSpatialReference=r;var m=g(o,t,f);m&&(u.location=m.location,u.distance=m.distance);var v=i.trim();if(!v)return n.resolve();var y=t.prefix,p=void 0===y?"":y,S=t.suffix,h=void 0===S?"":S,w=""+p+v+h;return u.text=w,x&&(u.searchExtent=x),u.maxSuggestions=a,t.countryCode&&(u.countryCode=t.countryCode),l.suggestLocations(u).then(function(e){return d(e,c)})}function c(e){var t=e.source,r=e.spatialReference,n=e.location,o=e.distance,i=e.sourceIndex,a=e.view,c=t.locator,s=t.zoomScale,u=a&&a.scale;return r&&(c.outSpatialReference=r),c.locationToAddress(n,o).then(function(e){return x([e],{sourceIndex:i,scale:u,view:a,zoomScale:s})})}function s(e,t){var r=e.filter,n=e.searchExtent,i=e.withinViewEnabled,a=t&&t.scale,c=t&&t.extent,s=r&&r.geometry,u=o.createExtentFromGeometry(s,t,a),l=i&&c?c:void 0;return u||n||l}function u(e){var t=e.source,r=e.suggestResult,o=e.spatialReference,i=e.view,a=e.maxResults,c=e.sourceIndex,u=t&&t.zoomScale,l=r.text.trim();if(!l)return n.resolve();var d=!r.key&&t.prefix?t.prefix:"",f=!r.key&&t.suffix?t.suffix:"",v=""+d+l+f,y={},p=t.locator,S=i&&i.scale,h=s(t,i);if(!p)return n.resolve();t.categories&&(y.categories=t.categories),o&&(p.outSpatialReference=o);var w=g(i,t,S);w&&(y.location=w.location,y.distance=w.distance),y.maxLocations=a,h&&(y.searchExtent=h),t.countryCode&&(y.countryCode=t.countryCode);var I=r.key;return I&&(y.magicKey=I),y.address={},y.address[t.singleLineFieldName||m]=v,t.outFields&&(y.outFields=t.outFields),p.addressToLocations(y).then(function(e){return x(e,{key:I,scale:S,sourceIndex:c,view:i,zoomScale:u})})}function l(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function d(e,t){return e.map(function(e){return l(e,t)})}function f(e,t){var n=t.key,i=t.scale,a=t.sourceIndex,c=t.view,s=t.zoomScale,u=e.attributes,l=e.extent,d=e.location,f=e.address,x=new r({geometry:d,attributes:u}),g=l||d,m=o.createExtentFromGeometry(g,c,i),v=s?o.scaleExtent(m,c,s):m,y=d?d.x+","+d.y:"";return{extent:v,feature:x,key:n,name:f||y,sourceIndex:a}}function x(e,t){return e.map(function(e){return f(e,t)})}function g(e,t,r){var n=t.localSearchOptions;if(e&&n&&n.hasOwnProperty("distance")&&n.hasOwnProperty("minScale")){var o=n.minScale,i=n.distance;if(!o||r&&r<=o)return{location:e.get("extent.center"),distance:i}}}Object.defineProperty(t,"__esModule",{value:!0});var m="Single Line Input";t.getResults=i,t.getSuggestions=a});