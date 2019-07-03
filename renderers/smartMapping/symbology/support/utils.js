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

define(["require","exports","@dojo/framework/shim/Set","../../../../Basemap","../../../../core/arrayUtils","../../../../core/screenUtils","../../../../support/basemapUtils"],function(e,t,r,n,o,a,i){function c(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function s(e,t){var r=0;if(e.length===t.length){var n=e.every(function(e,r){return c(e,t[r])});if(n)r=1;else{n=e.slice(0).reverse().every(function(e,r){return c(e,t[r])}),n&&(r=-1)}}return r}function l(e){var t=e.width,r=e.height,n=e.pixelSizeAt(a.createScreenPoint(.5*t,.5*r));if(n<=0&&(n=e.pixelSizeAt(a.createScreenPoint(.5*t,.95*r)))<=0){var o=e.camera.position.clone();o.z=0,n=2*e.pixelSizeAt(o)}return n}function u(e,t){return Math.ceil(l(t)*a.pt2px(a.toPt(e)))}function f(e){return"multipoint"===e?"point":"mesh"===e?"polygon":e}function g(e,t,r){void 0===r&&(r=!0);var o=null;return"string"==typeof e&&t.indexOf(e)>-1?o=e:e instanceof n&&(o=i.getWellKnownBasemapId(e)),r?o||"gray":o}function p(e){var t=g(e,m,!1);return t?d.indexOf(t)>-1?"light":h.indexOf(t)>-1?"dark":void 0:null}function v(e){if(!e)return[];var t=new r.default,n=[e.primaryScheme];e.secondarySchemes&&n.push.apply(n,e.secondarySchemes);for(var a=0,i=n;a<i.length;a++){var c=i[a];c&&"tags"in c&&c.tags&&c.tags.forEach(function(e){return t.add(e)})}return o.keysOfSet(t)}Object.defineProperty(t,"__esModule",{value:!0});var d=["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],h=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],m=[].concat(d).concat(h);t.hasIdenticalColors=s,t.getPixelSize=l,t.toWorldScale=u,t.getStorageType=f,t.getBasemapId=g,t.getBasemapTheme=p,t.getTagsFromSchemes=v});