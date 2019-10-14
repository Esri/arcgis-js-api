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

define(["require","exports","../../../../core/arrayUtils","../../../../core/screenUtils","../../support/utils"],function(e,t,r,n,i){function o(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function a(e,t){var r=0;if(e.length===t.length){var n=e.every(function(e,r){return o(e,t[r])});if(n)r=1;else{n=e.slice(0).reverse().every(function(e,r){return o(e,t[r])}),n&&(r=-1)}}return r}function c(e){var t=e.width,r=e.height,i=e.pixelSizeAt(n.createScreenPoint(.5*t,.5*r));if(i<=0&&(i=e.pixelSizeAt(n.createScreenPoint(.5*t,.95*r)))<=0){var o=e.camera.position.clone();o.z=0,i=2*e.pixelSizeAt(o)}return i}function s(e,t){return Math.ceil(c(t)*n.pt2px(n.toPt(e)))}function l(e){return"multipoint"===e?"point":"mesh"===e?"polygon":e}function u(e){var t=i.getBasemapId(e,v,!1);return t?f.indexOf(t)>-1?"light":p.indexOf(t)>-1?"dark":void 0:null}function g(e){if(!e)return[];var t=new Set,n=[e.primaryScheme];e.secondarySchemes&&n.push.apply(n,e.secondarySchemes);for(var i=0,o=n;i<o.length;i++){var a=o[i];a&&"tags"in a&&a.tags&&a.tags.forEach(function(e){return t.add(e)})}return r.keysOfSet(t)}Object.defineProperty(t,"__esModule",{value:!0});var f=["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],p=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],v=[].concat(f).concat(p);t.hasIdenticalColors=a,t.getPixelSize=c,t.toWorldScale=s,t.getStorageType=l,t.getBasemapTheme=u,t.getTagsFromSchemes=g});