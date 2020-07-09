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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../Graphic","../../../core/maybe","../../../core/maybe","../../../core/promiseUtils","../../../geometry/Polygon","./geometryUtils"],(function(e,t,o,r,n,a,i,c){Object.defineProperty(t,"__esModule",{value:!0});function s(e,t){var o=e.filter,r=e.withinViewEnabled,n=t&&t.scale,a=t&&t.extent,i=o&&o.geometry;return c.createExtentFromGeometry(i,t,n)||(r&&a?a:void 0)}function u(e,t){return e.map((function(e){return function(e,t){var r=t.key,a=t.scale,s=t.sourceIndex,u=t.view,l=t.zoomScale,f=t.defaultZoomScale,d=e.attributes,g=e.extent,m=e.location,x=e.address,y=new o({geometry:m,attributes:d}),v=g||m,p=c.createExtentFromGeometry(v,u,a),S="number"==typeof l?c.scaleExtent(p,u,l):"number"==typeof f&&"point"===v.type?c.scaleExtent(p,u,f):p,w=m?m.x+","+m.y:"",I=x||w,R=y.clone();return n.isSome(S)&&(R.geometry=i.fromExtent(S)),{extent:S,feature:y,target:R,key:r,name:I,sourceIndex:s}}(e,t)}))}t.getResults=function(e,t){return e.location?function(e,t){var o=e.source,r=e.spatialReference,n=e.location,a=e.sourceIndex,i=e.view,c=o.locator,s=o.zoomScale,l=o.defaultZoomScale,f=i&&i.scale,d=t&&t.signal;r&&(c.outSpatialReference=r);return c.locationToAddress({location:n},{signal:d}).then((function(e){return u([e],{sourceIndex:a,scale:f,view:i,zoomScale:s,defaultZoomScale:l})}))}(e,t):function(e,t){var o=e.source,n=e.suggestResult,i=e.spatialReference,c=e.view,l=e.maxResults,f=e.sourceIndex,d=o&&o.zoomScale,g=o&&o.defaultZoomScale;if(!n.text.trim())return a.resolve();var m=!n.key&&o.prefix?o.prefix:"",x=!n.key&&o.suffix?o.suffix:"",y=""+m+n.text+x,v={},p=o.locator,S=c&&c.scale,w=s(o,c),I=t&&t.signal;if(!p)return a.resolve();o.categories&&(v.categories=o.categories);o.locationType&&(v.locationType=o.locationType);i&&(p.outSpatialReference=i);var R=c&&c.get("extent.center");R&&(v.location=R);v.maxLocations=l,w&&(v.searchExtent=r.unwrap(w));o.countryCode&&(v.countryCode=o.countryCode);var b=n.key;b&&(v.magicKey=b);v.address={},v.address[o.singleLineFieldName||"Single Line Input"]=y,o.outFields&&(v.outFields=o.outFields);return p.addressToLocations(v,{signal:I}).then((function(e){return u(e,{key:b,scale:S,sourceIndex:f,view:c,zoomScale:d,defaultZoomScale:g})}))}(e,t)},t.getSuggestions=function(e,t){var o=e.source,n=e.spatialReference,i=e.view,c=e.suggestTerm,u=e.maxSuggestions,l=e.sourceIndex,f={},d=o.locator,g=s(o,i),m=t&&t.signal;if(!d)return a.resolve();o.categories&&(f.categories=o.categories),d.outSpatialReference=n;var x=i&&i.get("extent.center");if(x&&(f.location=x),!c.trim())return a.resolve();var y=o.prefix,v=void 0===y?"":y,p=o.suffix,S=""+v+c+(void 0===p?"":p);return f.text=S,g&&(f.searchExtent=r.unwrap(g)),f.maxSuggestions=u,o.countryCode&&(f.countryCode=o.countryCode),d.suggestLocations(f,{signal:m}).then((function(e){return function(e,t){return e.map((function(e){return function(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}(e,t)}))}(e,l)}))},t.isArcGISWorldGeocoder=function(e){return!!e&&(function(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e)||function(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e))}}));