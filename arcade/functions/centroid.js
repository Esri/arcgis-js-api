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

define(["require","exports","../../geometry/Point","../../kernel"],function(e,n,t,r){function a(e,n,t){var r={x:0,y:0};n&&(r.z=0),t&&(r.m=0);for(var a=0,i=e[0],l=0;l<e.length;l++){var f=e[l];if(h(f,i)){var u=o(i,f,n),p=s(i,f,n,t);p.x*=u,p.y*=u,n&&(p.z*=u),t&&(p.m*=u),a+=u,i=f}}return a>0?(r.x/=a,r.y/=a,n&&(r.z/=a),t&&(r.m/=a)):(r.x=e[0][0],r.y=e[0][1],n&&(r.z=e[0][2]),t&&n?r.m=e[0][3]:t&&(r.m=e[0][2])),r}function s(e,n,t,r){var a={x:(e[0]+n[0])/2,y:(e[1]+n[1])/2};return t&&(a.z=(e[2]+n[2])/2),t&&r?a.m=(e[3]+n[3])/2:r&&(a.m=(e[2]+n[2])/2),a}function i(e,n){if(e.length<=1)return 0;for(var t=0,r=1;r<e.length-1;r++)t+=o(e[r-1],e[r],n);return t}function o(e,n,t){var r=n[0]-e[0],a=n[1]-e[1];if(t){var s=n[2]-n[2];return Math.sqrt(r*r+a*a+s*s)}return Math.sqrt(r*r+a*a)}function h(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function l(e){for(var n={x:0,y:0,spatialReference:u?e.spatialReference.toJSON():e.spatialReference.toJson()},r={x:0,y:0,spatialReference:u?e.spatialReference.toJSON():e.spatialReference.toJson()},s=0,o=0,h=0;h<e.paths.length;h++)if(0!==e.paths[h].length){var l=i(e.paths[h],e.hasZ===!0);if(0===l){var f=a(e.paths[h],e.hasZ===!0,e.hasM===!0);n.x+=f.x,n.y+=f.y,e.hasZ===!0&&(n.z+=f.z),e.hasM===!0&&(n.m+=f.m),++s}else{var f=a(e.paths[h],e.hasZ===!0,e.hasM===!0);r.x+=f.x*l,r.y+=f.y*l,e.hasZ===!0&&(r.z+=f.z*l),e.hasM===!0&&(r.m+=f.m*l),o+=l}}return o>0?(r.x/=o,r.y/=o,e.hasZ===!0&&(r.z/=o),e.hasM===!0&&(r.m/=o),new t(r)):s>0?(n.x/=s,n.y/=s,e.hasZ===!0&&(r.z/=s),e.hasM===!0&&(n.m/=s),new t(n)):null}function f(e){if(0===e.points.length)return null;for(var n=0,r=0,a=0,s=0,i=0;i<e.points.length;i++){var o=e.getPoint(i);o.hasZ===!0&&(a+=o.z),o.hasM===!0&&(s+=o.m),n+=o.x,r+=o.y,s+=o.m}var h={x:n/e.points.length,y:r/e.points.length,spatialReference:null};return h.spatialReference=u?e.spatialReference.toJSON():e.spatialReference.toJson(),e.hasZ===!0&&(h.z=a/e.points.length),e.hasM===!0&&(h.m=s/e.points.length),new t(h)}Object.defineProperty(n,"__esModule",{value:!0});var u=0===r.version.indexOf("4.");n.centroidPolyline=l,n.centroidMultiPoint=f});