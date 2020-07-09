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

define(["require","exports","../../../core/arrayUtils","../../../core/screenUtils","../../support/utils"],(function(e,t,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var i=["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],a=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],c=[].concat(i).concat(a);function s(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function l(e){var t=e.width,r=e.height,o=e.pixelSizeAt(e.toMap(n.createScreenPoint(.5*t,.5*r),{exclude:[]}));if(o<=0&&(o=e.pixelSizeAt(e.toMap(n.createScreenPoint(.5*t,.95*r),{exclude:[]})))<=0){var i=e.camera.position.clone();i.z=0,o=2*e.pixelSizeAt(i)}return o}t.hasIdenticalColors=function(e,t){var r=0;if(e.length===t.length){var n=e.every((function(e,r){return s(e,t[r])}));if(n)r=1;else(n=e.slice(0).reverse().every((function(e,r){return s(e,t[r])})))&&(r=-1)}return r},t.getPixelSize=l,t.toWorldScale=function(e,t){return Math.ceil(l(t)*n.pt2px(n.toPt(e)))},t.getStorageType=function(e){return"multipoint"===e?"point":"mesh"===e?"polygon":e},t.getBasemapTheme=function(e){var t=o.getBasemapId(e,c,!1);return t?i.indexOf(t)>-1?"light":a.indexOf(t)>-1?"dark":void 0:null},t.getTagsFromSchemes=function(e){if(!e)return[];var t=new Set,n=[e.primaryScheme];e.secondarySchemes&&n.push.apply(n,e.secondarySchemes);for(var o=0,i=n;o<i.length;o++){var a=i[o];a&&"tags"in a&&a.tags&&a.tags.forEach((function(e){return t.add(e)}))}return r.keysOfSet(t)}}));