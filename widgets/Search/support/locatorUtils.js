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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../Graphic","../../../core/maybe","../../../core/maybe","../../../core/promiseUtils","../../../geometry/Polygon","./geometryUtils"],(function(e,t,o,r,n,i,c,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArcGISWorldGeocoder=t.getSuggestions=t.getResults=void 0;function a(e,t){var o=e.filter,r=e.withinViewEnabled,n=t&&t.scale,i=t&&t.extent,c=o&&o.geometry;return s.createExtentFromGeometry(c,t,n)||(r&&i?i:void 0)}function u(e,t){return e.map((function(e){return function(e,t){var r=t.key,i=t.scale,a=t.sourceIndex,u=t.view,l=t.zoomScale,d=t.defaultZoomScale,f=e.attributes,g=e.extent,m=e.location,x=e.address,y=new o({geometry:m,attributes:f}),v=g||m,p=s.createExtentFromGeometry(v,u,i),S="number"==typeof l?s.scaleExtent(p,u,l):"number"==typeof d&&"point"===v.type?s.scaleExtent(p,u,d):p,w=m?m.x+","+m.y:"",I=x||w,R=y.clone();return n.isSome(S)&&(R.geometry=c.fromExtent(S)),{extent:S,feature:y,target:R,key:r,name:I,sourceIndex:a}}(e,t)}))}t.getResults=function(e,t){return e.location?function(e,t){var o=e.source,r=e.spatialReference,n=e.location,i=e.sourceIndex,c=e.view,s=o.locator,a=o.zoomScale,l=o.defaultZoomScale,d=c&&c.scale,f=t&&t.signal;r&&(s.outSpatialReference=r);return s.locationToAddress({location:n},{signal:f}).then((function(e){return u([e],{sourceIndex:i,scale:d,view:c,zoomScale:a,defaultZoomScale:l})}))}(e,t):function(e,t){var o=e.source,n=e.suggestResult,c=e.spatialReference,s=e.view,l=e.maxResults,d=e.sourceIndex,f=o&&o.zoomScale,g=o&&o.defaultZoomScale;if(!n.text.trim())return i.resolve();var m=!n.key&&o.prefix?o.prefix:"",x=!n.key&&o.suffix?o.suffix:"",y=""+m+n.text+x,v={},p=o.locator,S=s&&s.scale,w=a(o,s),I=t&&t.signal;if(!p)return i.resolve();o.categories&&(v.categories=o.categories);o.locationType&&(v.locationType=o.locationType);c&&(p.outSpatialReference=c);var R=s&&s.get("extent.center");R&&(v.location=R);v.maxLocations=l,w&&(v.searchExtent=r.unwrap(w));o.countryCode&&(v.countryCode=o.countryCode);var b=n.key;b&&(v.magicKey=b);v.address={},v.address[o.singleLineFieldName||"Single Line Input"]=y,o.outFields&&(v.outFields=o.outFields);return p.addressToLocations(v,{signal:I}).then((function(e){return u(e,{key:b,scale:S,sourceIndex:d,view:s,zoomScale:f,defaultZoomScale:g})}))}(e,t)},t.getSuggestions=function(e,t){var o=e.source,n=e.spatialReference,c=e.view,s=e.suggestTerm,u=e.maxSuggestions,l=e.sourceIndex,d={},f=o.locator,g=a(o,c),m=t&&t.signal;if(!f)return i.resolve();o.categories&&(d.categories=o.categories),f.outSpatialReference=n;var x=c&&c.get("extent.center");if(x&&(d.location=x),!s.trim())return i.resolve();var y=o.prefix,v=void 0===y?"":y,p=o.suffix,S=""+v+s+(void 0===p?"":p);return d.text=S,g&&(d.searchExtent=r.unwrap(g)),d.maxSuggestions=u,o.countryCode&&(d.countryCode=o.countryCode),f.suggestLocations(d,{signal:m}).then((function(e){return function(e,t){return e.map((function(e){return function(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}(e,t)}))}(e,l)}))},t.isArcGISWorldGeocoder=function(e){return!!e&&(function(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e)||function(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e))}}));