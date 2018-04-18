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

define(["require","exports","../../kernel","../../geometry/Point"],function(e,n,t,r){function a(e,n,t){var r={x:0,y:0};n&&(r.z=0),t&&(r.m=0);for(var a=0,i=e[0],l=0;l<e.length;l++){var f=e[l];if(!1===h(f,i)){var u=o(i,f,n),p=s(i,f,n,t);p.x*=u,p.y*=u,r.x+=p.x,r.y+=p.y,n&&(p.z*=u,r.z+=p.z),t&&(p.m*=u,r.m+=p.m),a+=u,i=f}}return a>0?(r.x/=a,r.y/=a,n&&(r.z/=a),t&&(r.m/=a)):(r.x=e[0][0],r.y=e[0][1],n&&(r.z=e[0][2]),t&&n?r.m=e[0][3]:t&&(r.m=e[0][2])),r}function s(e,n,t,r){var a={x:(e[0]+n[0])/2,y:(e[1]+n[1])/2};return t&&(a.z=(e[2]+n[2])/2),t&&r?a.m=(e[3]+n[3])/2:r&&(a.m=(e[2]+n[2])/2),a}function i(e,n){if(e.length<=1)return 0;for(var t=0,r=1;r<e.length;r++)t+=o(e[r-1],e[r],n);return t}function o(e,n,t){var r=n[0]-e[0],a=n[1]-e[1];if(t){var s=n[2]-n[2];return Math.sqrt(r*r+a*a+s*s)}return Math.sqrt(r*r+a*a)}function h(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function l(e){for(var n={x:0,y:0,spatialReference:u?e.spatialReference.toJSON():e.spatialReference.toJson()},t={x:0,y:0,spatialReference:u?e.spatialReference.toJSON():e.spatialReference.toJson()},s=0,o=0,h=0;h<e.paths.length;h++)if(0!==e.paths[h].length){var l=i(e.paths[h],!0===e.hasZ);if(0===l){var f=a(e.paths[h],!0===e.hasZ,!0===e.hasM);n.x+=f.x,n.y+=f.y,!0===e.hasZ&&(n.z+=f.z),!0===e.hasM&&(n.m+=f.m),++s}else{var f=a(e.paths[h],!0===e.hasZ,!0===e.hasM);t.x+=f.x*l,t.y+=f.y*l,!0===e.hasZ&&(t.z+=f.z*l),!0===e.hasM&&(t.m+=f.m*l),o+=l}}return o>0?(t.x/=o,t.y/=o,!0===e.hasZ&&(t.z/=o),!0===e.hasM&&(t.m/=o),new r(t)):s>0?(n.x/=s,n.y/=s,!0===e.hasZ&&(t.z/=s),!0===e.hasM&&(n.m/=s),new r(n)):null}function f(e){if(0===e.points.length)return null;for(var n=0,t=0,a=0,s=0,i=0;i<e.points.length;i++){var o=e.getPoint(i);!0===o.hasZ&&(a+=o.z),!0===o.hasM&&(s+=o.m),n+=o.x,t+=o.y,s+=o.m}var h={x:n/e.points.length,y:t/e.points.length,spatialReference:null};return h.spatialReference=u?e.spatialReference.toJSON():e.spatialReference.toJson(),!0===e.hasZ&&(h.z=a/e.points.length),!0===e.hasM&&(h.m=s/e.points.length),new r(h)}Object.defineProperty(n,"__esModule",{value:!0});var u=0===t.version.indexOf("4.");n.centroidPolyline=l,n.centroidMultiPoint=f});