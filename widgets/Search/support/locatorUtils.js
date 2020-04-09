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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../Graphic","../../../core/maybe","../../../core/promiseUtils","./geometryUtils"],(function(e,t,r,o,n,a){Object.defineProperty(t,"__esModule",{value:!0});function i(e,t){var r=e.filter,o=e.searchExtent,n=e.withinViewEnabled,i=t&&t.scale,c=t&&t.extent,s=r&&r.geometry;return a.createExtentFromGeometry(s,t,i)||o||(n&&c?c:void 0)}function c(e,t){return e.map((function(e){return function(e,t){var o=t.key,n=t.scale,i=t.sourceIndex,c=t.view,s=t.zoomScale,u=t.defaultZoomScale,l=e.attributes,d=e.extent,f=e.location,g=e.address,x=new r({geometry:f,attributes:l}),m=d||f,v=a.createExtentFromGeometry(m,c,n),y=s?a.scaleExtent(v,c,s):u&&"point"===m.type?a.scaleExtent(v,c,u):v,p=f?f.x+","+f.y:"";return{extent:y,feature:x,key:o,name:g||p,sourceIndex:i}}(e,t)}))}t.getResults=function(e,t){return e.location?function(e,t){var r=e.source,o=e.spatialReference,n=e.location,a=e.sourceIndex,i=e.view,s=r.locator,u=r.zoomScale,l=r.defaultZoomScale,d=i&&i.scale,f=t&&t.signal;o&&(s.outSpatialReference=o);return s.locationToAddress({location:n},{signal:f}).then((function(e){return c([e],{sourceIndex:a,scale:d,view:i,zoomScale:u,defaultZoomScale:l})}))}(e,t):function(e,t){var r=e.source,a=e.suggestResult,s=e.spatialReference,u=e.view,l=e.maxResults,d=e.sourceIndex,f=r&&r.zoomScale,g=r&&r.defaultZoomScale;if(!a.text.trim())return n.resolve();var x=!a.key&&r.prefix?r.prefix:"",m=!a.key&&r.suffix?r.suffix:"",v=""+x+a.text+m,y={},p=r.locator,S=u&&u.scale,w=i(r,u),I=t&&t.signal;if(!p)return n.resolve();r.categories&&(y.categories=r.categories);r.locationType&&(y.locationType=r.locationType);s&&(p.outSpatialReference=s);var R=u&&u.get("extent.center");R&&(y.location=R);y.maxLocations=l,w&&(y.searchExtent=o.unwrap(w));r.countryCode&&(y.countryCode=r.countryCode);var h=a.key;h&&(y.magicKey=h);y.address={},y.address[r.singleLineFieldName||"Single Line Input"]=v,r.outFields&&(y.outFields=r.outFields);return p.addressToLocations(y,{signal:I}).then((function(e){return c(e,{key:h,scale:S,sourceIndex:d,view:u,zoomScale:f,defaultZoomScale:g})}))}(e,t)},t.getSuggestions=function(e,t){var r=e.source,a=e.spatialReference,c=e.view,s=e.suggestTerm,u=e.maxSuggestions,l=e.sourceIndex,d={},f=r.locator,g=i(r,c),x=t&&t.signal;if(!f)return n.resolve();r.categories&&(d.categories=r.categories),f.outSpatialReference=a;var m=c&&c.get("extent.center");if(m&&(d.location=m),!s.trim())return n.resolve();var v=r.prefix,y=void 0===v?"":v,p=r.suffix,S=""+y+s+(void 0===p?"":p);return d.text=S,g&&(d.searchExtent=o.unwrap(g)),d.maxSuggestions=u,r.countryCode&&(d.countryCode=r.countryCode),f.suggestLocations(d,{signal:x}).then((function(e){return function(e,t){return e.map((function(e){return function(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}(e,t)}))}(e,l)}))},t.isArcGISWorldGeocoder=function(e){return!!e&&(function(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e)||function(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e))}}));