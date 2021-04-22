/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../geometry/Point","../../geometry/support/intersects"],(function(t,n,e){"use strict";function r(t,n,e){const r={x:0,y:0};n&&(r.z=0),e&&(r.m=0);let s=0,i=t[0];for(let c=0;c<t.length;c++){const h=t[c];if(!1===l(h,i)){const t=a(i,h,n),l=o(i,h,n,e);l.x*=t,l.y*=t,r.x+=l.x,r.y+=l.y,n&&(l.z*=t,r.z+=l.z),e&&(l.m*=t,r.m+=l.m),s+=t,i=h}}return s>0?(r.x/=s,r.y/=s,n&&(r.z/=s),e&&(r.m/=s)):(r.x=t[0][0],r.y=t[0][1],n&&(r.z=t[0][2]),e&&n?r.m=t[0][3]:e&&(r.m=t[0][2])),r}function o(t,n,e,r){const o={x:(t[0]+n[0])/2,y:(t[1]+n[1])/2};return e&&(o.z=(t[2]+n[2])/2),e&&r?o.m=(t[3]+n[3])/2:r&&(o.m=(t[2]+n[2])/2),o}function s(t,n){if(t.length<=1)return 0;let e=0;for(let r=1;r<t.length;r++)e+=a(t[r-1],t[r],n);return e}function a(t,n,e){const r=n[0]-t[0],o=n[1]-t[1];if(e){const t=n[2]-n[2];return Math.sqrt(r*r+o*o+t*t)}return Math.sqrt(r*r+o*o)}function l(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}function i(t){const e={x:0,y:0,spatialReference:t.spatialReference.toJSON()},o={x:0,y:0,spatialReference:t.spatialReference.toJSON()};let a=0,l=0;for(let n=0;n<t.paths.length;n++){if(0===t.paths[n].length)continue;const i=s(t.paths[n],!0===t.hasZ);if(0===i){const o=r(t.paths[n],!0===t.hasZ,!0===t.hasM);e.x+=o.x,e.y+=o.y,!0===t.hasZ&&(e.z+=o.z),!0===t.hasM&&(e.m+=o.m),++a}else{const e=r(t.paths[n],!0===t.hasZ,!0===t.hasM);o.x+=e.x*i,o.y+=e.y*i,!0===t.hasZ&&(o.z+=e.z*i),!0===t.hasM&&(o.m+=e.m*i),l+=i}}return l>0?(o.x/=l,o.y/=l,!0===t.hasZ&&(o.z/=l),!0===t.hasM&&(o.m/=l),new n(o)):a>0?(e.x/=a,e.y/=a,!0===t.hasZ&&(o.z/=a),!0===t.hasM&&(e.m/=a),new n(e)):null}function c(t){if(0===t.points.length)return null;let e=0,r=0,o=0,s=0;for(let n=0;n<t.points.length;n++){const a=t.getPoint(n);!0===a.hasZ&&(o+=a.z),!0===a.hasM&&(s+=a.m),e+=a.x,r+=a.y,s+=a.m}const a={x:e/t.points.length,y:r/t.points.length,spatialReference:null};return a.spatialReference=t.spatialReference.toJSON(),!0===t.hasZ&&(a.z=o/t.points.length),!0===t.hasM&&(a.m=s/t.points.length),new n(a)}function h(t,n){return t.x*n.x+t.y*n.y}function f(t,n){return t.x*n.y-n.x*t.y}function u(t,n,e=0){for(;t<e;)t+=n;const r=e+n;for(;t>=r;)t-=n;return t}function y(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function g(t,n){return u(y(t,n),2*Math.PI)*(180/Math.PI)}function x(t,n){return u(Math.PI/2-y(t,n),2*Math.PI)*(180/Math.PI)}function p(t,n,e){const r={x:t.x-n.x,y:t.y-n.y},o={x:e.x-n.x,y:e.y-n.y};return Math.atan2(f(r,o),h(r,o))}function M(t,n,e){return u(p(t,n,e),2*Math.PI)*(180/Math.PI)}function m(t,n,e){return u(-1*p(t,n,e),2*Math.PI)*(180/Math.PI)}const z=[0,0];function P(t){for(let n=0;n<t.length;n++){const r=t[n];for(let s=0;s<r.length-1;s++){const o=r[s],a=r[s+1];for(let r=n+1;r<t.length;r++)for(let n=0;n<t[r].length-1;n++){const s=t[r][n],l=t[r][n+1];if(e.segmentIntersects(o,a,s,l,z)&&!(z[0]===o[0]&&z[1]===o[1]||z[0]===s[0]&&z[1]===s[1]||z[0]===a[0]&&z[1]===a[1]||z[0]===l[0]&&z[1]===l[1]))return!0}}const o=r.length;if(!(o<3))for(let t=0;t<=o-2;t++){const n=r[t],s=r[t+1];for(let a=t+2;a<=o-2;a++){const t=r[a],o=r[a+1];if(e.segmentIntersects(n,s,t,o,z)&&!(z[0]===n[0]&&z[1]===n[1]||z[0]===t[0]&&z[1]===t[1]||z[0]===s[0]&&z[1]===s[1]||z[0]===o[0]&&z[1]===o[1]))return!0}}}return!1}t.angle2D=g,t.angleBetween2D=M,t.angleBetweenRad=p,t.angleRad=y,t.bearing2D=x,t.bearingBetween2D=m,t.centroidMultiPoint=c,t.centroidPolyline=i,t.pathsSelfIntersecting=P,Object.defineProperty(t,"__esModule",{value:!0})}));
