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

define(["require","exports","../../../Graphic","../../../core/maybe","../../../core/promiseUtils","./geometryUtils"],function(e,t,r,o,n,c){function i(e){return e.location?d(e):g(e)}function s(e){var t=e.source,r=e.spatialReference,c=e.view,i=e.suggestTerm,s=e.maxSuggestions,a=e.sourceIndex,u={},l=t.locator,d=f(t,c);if(!l)return n.resolve();t.categories&&(u.categories=t.categories),l.outSpatialReference=r;var g=c&&c.get("extent.center");g&&(u.location=g);var x=i.trim();if(!x)return n.resolve();var m=t.prefix,y=void 0===m?"":m,p=t.suffix,w=void 0===p?"":p,S=""+y+x+w;return u.text=S,d&&(u.searchExtent=o.unwrap(d)),u.maxSuggestions=s,t.countryCode&&(u.countryCode=t.countryCode),l.suggestLocations(u).then(function(e){return v(e,a)})}function a(e){return!!e&&(u(e)||l(e))}function u(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function l(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function d(e){var t=e.source,r=e.spatialReference,o=e.location,n=e.sourceIndex,c=e.view,i=t.locator,s=t.zoomScale,a=c&&c.scale;return r&&(i.outSpatialReference=r),i.locationToAddress({location:o}).then(function(e){return y([e],{sourceIndex:n,scale:a,view:c,zoomScale:s})})}function f(e,t){var r=e.filter,o=e.searchExtent,n=e.withinViewEnabled,i=t&&t.scale,s=t&&t.extent,a=r&&r.geometry,u=c.createExtentFromGeometry(a,t,i),l=n&&s?s:void 0;return u||o||l}function g(e){var t=e.source,r=e.suggestResult,c=e.spatialReference,i=e.view,s=e.maxResults,a=e.sourceIndex,u=t&&t.zoomScale,l=r.text.trim();if(!l)return n.resolve();var d=!r.key&&t.prefix?t.prefix:"",g=!r.key&&t.suffix?t.suffix:"",x=""+d+l+g,v={},m=t.locator,w=i&&i.scale,S=f(t,i);if(!m)return n.resolve();t.categories&&(v.categories=t.categories),t.locationType&&(v.locationType=t.locationType),c&&(m.outSpatialReference=c);var I=i&&i.get("extent.center");I&&(v.location=I),v.maxLocations=s,S&&(v.searchExtent=o.unwrap(S)),t.countryCode&&(v.countryCode=t.countryCode);var R=r.key;return R&&(v.magicKey=R),v.address={},v.address[t.singleLineFieldName||p]=x,t.outFields&&(v.outFields=t.outFields),m.addressToLocations(v).then(function(e){return y(e,{key:R,scale:w,sourceIndex:a,view:i,zoomScale:u})})}function x(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function v(e,t){return e.map(function(e){return x(e,t)})}function m(e,t){var o=t.key,n=t.scale,i=t.sourceIndex,s=t.view,a=t.zoomScale,u=e.attributes,l=e.extent,d=e.location,f=e.address,g=new r({geometry:d,attributes:u}),x=l||d,v=c.createExtentFromGeometry(x,s,n),m=a?c.scaleExtent(v,s,a):v,y=d?d.x+","+d.y:"";return{extent:m,feature:g,key:o,name:f||y,sourceIndex:i}}function y(e,t){return e.map(function(e){return m(e,t)})}Object.defineProperty(t,"__esModule",{value:!0});var p="Single Line Input";t.getResults=i,t.getSuggestions=s,t.isArcGISWorldGeocoder=a});