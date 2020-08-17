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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../geometry/Point"],(function(n,t,e){"use strict";function r(n,t,e){var r={x:0,y:0};t&&(r.z=0),e&&(r.m=0);for(var i=0,f=n[0],u=0;u<n.length;u++){var s=n[u];if(!1===o(s,f)){var l=h(f,s,t),y=a(f,s,t,e);y.x*=l,y.y*=l,r.x+=y.x,r.y+=y.y,t&&(y.z*=l,r.z+=y.z),e&&(y.m*=l,r.m+=y.m),i+=l,f=s}}return i>0?(r.x/=i,r.y/=i,t&&(r.z/=i),e&&(r.m/=i)):(r.x=n[0][0],r.y=n[0][1],t&&(r.z=n[0][2]),e&&t?r.m=n[0][3]:e&&(r.m=n[0][2])),r}function a(n,t,e,r){var a={x:(n[0]+t[0])/2,y:(n[1]+t[1])/2};return e&&(a.z=(n[2]+t[2])/2),e&&r?a.m=(n[3]+t[3])/2:r&&(a.m=(n[2]+t[2])/2),a}function i(n,t){if(n.length<=1)return 0;for(var e=0,r=1;r<n.length;r++)e+=h(n[r-1],n[r],t);return e}function h(n,t,e){var r=t[0]-n[0],a=t[1]-n[1];if(e){var i=t[2]-t[2];return Math.sqrt(r*r+a*a+i*i)}return Math.sqrt(r*r+a*a)}function o(n,t){if(n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function f(n,t,e){for(void 0===e&&(e=0);n<e;)n+=t;for(var r=e+t;n>=r;)n-=t;return n}function u(n,t){return Math.atan2(t.y-n.y,t.x-n.x)}function s(n,t,e){var r,a,i={x:n.x-t.x,y:n.y-t.y},h={x:e.x-t.x,y:e.y-t.y};return Math.atan2((r=h).x*(a=i).y-a.x*r.y,function(n,t){return n.x*t.x+n.y*t.y}(h,i))}function l(n,t,e,r,a){var i=n[0],h=n[1],o=t[0],f=t[1],u=e[0],s=e[1],l=r[0]-u,y=i-u,c=o-i,x=r[1]-s,g=h-s,v=f-h,M=x*c-l*v;if(0===M)return!1;var p=(l*g-x*y)/M,m=(c*g-v*y)/M;return p>=0&&p<=1&&m>=0&&m<=1&&(a&&(a[0]=i+p*(o-i),a[1]=h+p*(f-h)),!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.centroidPolyline=function(n){for(var t={x:0,y:0,spatialReference:n.spatialReference.toJson()},a={x:0,y:0,spatialReference:n.spatialReference.toJson()},h=0,o=0,f=0;f<n.paths.length;f++)if(0!==n.paths[f].length){var u=i(n.paths[f],!0===n.hasZ);if(0===u){var s=r(n.paths[f],!0===n.hasZ,!0===n.hasM);t.x+=s.x,t.y+=s.y,!0===n.hasZ&&(t.z+=s.z),!0===n.hasM&&(t.m+=s.m),++h}else{s=r(n.paths[f],!0===n.hasZ,!0===n.hasM);a.x+=s.x*u,a.y+=s.y*u,!0===n.hasZ&&(a.z+=s.z*u),!0===n.hasM&&(a.m+=s.m*u),o+=u}}return o>0?(a.x/=o,a.y/=o,!0===n.hasZ&&(a.z/=o),!0===n.hasM&&(a.m/=o),new e(a)):h>0?(t.x/=h,t.y/=h,!0===n.hasZ&&(a.z/=h),!0===n.hasM&&(t.m/=h),new e(t)):null},t.centroidMultiPoint=function(n){if(0===n.points.length)return null;for(var t=0,r=0,a=0,i=0,h=0;h<n.points.length;h++){var o=n.getPoint(h);!0===o.hasZ&&(a+=o.z),!0===o.hasM&&(i+=o.m),t+=o.x,r+=o.y,i+=o.m}var f={x:t/n.points.length,y:r/n.points.length,spatialReference:null};return f.spatialReference=n.spatialReference.toJson(),!0===n.hasZ&&(f.z=a/n.points.length),!0===n.hasM&&(f.m=i/n.points.length),new e(f)},t.angleRad=u,t.angle2D=function(n,t){return f(u(n,t),2*Math.PI)*(180/Math.PI)},t.bearing2D=function(n,t){return f(Math.PI/2-u(n,t),2*Math.PI)*(180/Math.PI)},t.angleBetweenRad=s,t.angleBetween2D=function(n,t,e){return f(s(n,t,e),2*Math.PI)*(180/Math.PI)},t.bearingBetween2D=function(n,t,e){return f(-1*s(n,t,e),2*Math.PI)*(180/Math.PI)};var y=[0,0];t.pathsSelfIntersecting=function(n){for(var t=0;t<n.length;t++){for(var e=n[t],r=0;r<e.length-1;r++)for(var a=e[r],i=e[r+1],h=t+1;h<n.length;h++)for(var o=0;o<n[h].length-1;o++){if(l(a,i,u=n[h][o],s=n[h][o+1],y)&&!(y[0]===a[0]&&y[1]===a[1]||y[0]===u[0]&&y[1]===u[1]||y[0]===i[0]&&y[1]===i[1]||y[0]===s[0]&&y[1]===s[1]))return!0}var f=e.length;if(!(f<3))for(r=0;r<=f-2;r++)for(a=e[r],i=e[r+1],h=r+2;h<=f-2;h++){var u,s;if(l(a,i,u=e[h],s=e[h+1],y)&&!(y[0]===a[0]&&y[1]===a[1]||y[0]===u[0]&&y[1]===u[1]||y[0]===i[0]&&y[1]===i[1]||y[0]===s[0]&&y[1]===s[1]))return!0}}return!1}}));
