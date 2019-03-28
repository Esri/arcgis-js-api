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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../Graphic","../../../core/promiseUtils","./geometryUtils"],function(e,t,r,n,o){function i(e){return e.location?l(e):f(e)}function c(e){var t=e.source,r=e.spatialReference,o=e.view,i=e.suggestTerm,c=e.maxSuggestions,s=e.sourceIndex,a={},u=t.locator,l=o&&o.scale,f=d(t,o);if(!u)return n.resolve();t.categories&&(a.categories=t.categories),u.outSpatialReference=r;var g=y(o,t,l);g&&(a.location=g.location,a.distance=g.distance);var v=i.trim();if(!v)return n.resolve();var m=t.prefix,p=void 0===m?"":m,S=t.suffix,w=void 0===S?"":S,h=""+p+v+w;return a.text=h,f&&(a.searchExtent=f),a.maxSuggestions=c,t.countryCode&&(a.countryCode=t.countryCode),u.suggestLocations(a).then(function(e){return x(e,s)})}function s(e){return!!e&&(a(e)||u(e))}function a(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function u(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function l(e){var t=e.source,r=e.spatialReference,n=e.location,o=e.distance,i=e.sourceIndex,c=e.view,s=t.locator,a=t.zoomScale,u=c&&c.scale;return r&&(s.outSpatialReference=r),s.locationToAddress(n,o).then(function(e){return m([e],{sourceIndex:i,scale:u,view:c,zoomScale:a})})}function d(e,t){var r=e.filter,n=e.searchExtent,i=e.withinViewEnabled,c=t&&t.scale,s=t&&t.extent,a=r&&r.geometry,u=o.createExtentFromGeometry(a,t,c),l=i&&s?s:void 0;return u||n||l}function f(e){var t=e.source,r=e.suggestResult,o=e.spatialReference,i=e.view,c=e.maxResults,s=e.sourceIndex,a=t&&t.zoomScale,u=r.text.trim();if(!u)return n.resolve();var l=!r.key&&t.prefix?t.prefix:"",f=!r.key&&t.suffix?t.suffix:"",g=""+l+u+f,x={},v=t.locator,S=i&&i.scale,w=d(t,i);if(!v)return n.resolve();t.categories&&(x.categories=t.categories),o&&(v.outSpatialReference=o);var h=y(i,t,S);h&&(x.location=h.location,x.distance=h.distance),x.maxLocations=c,w&&(x.searchExtent=w),t.countryCode&&(x.countryCode=t.countryCode);var I=r.key;return I&&(x.magicKey=I),x.address={},x.address[t.singleLineFieldName||p]=g,t.outFields&&(x.outFields=t.outFields),v.addressToLocations(x).then(function(e){return m(e,{key:I,scale:S,sourceIndex:s,view:i,zoomScale:a})})}function g(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function x(e,t){return e.map(function(e){return g(e,t)})}function v(e,t){var n=t.key,i=t.scale,c=t.sourceIndex,s=t.view,a=t.zoomScale,u=e.attributes,l=e.extent,d=e.location,f=e.address,g=new r({geometry:d,attributes:u}),x=l||d,v=o.createExtentFromGeometry(x,s,i),m=a?o.scaleExtent(v,s,a):v,y=d?d.x+","+d.y:"";return{extent:m,feature:g,key:n,name:f||y,sourceIndex:c}}function m(e,t){return e.map(function(e){return v(e,t)})}function y(e,t,r){var n=t.localSearchOptions;if(e&&n&&n.hasOwnProperty("distance")&&n.hasOwnProperty("minScale")){var o=n.minScale,i=n.distance;if(!o||r&&r<=o)return{location:e.get("extent.center"),distance:i}}}Object.defineProperty(t,"__esModule",{value:!0});var p="Single Line Input";t.getResults=i,t.getSuggestions=c,t.isArcGISWorldGeocoder=s});