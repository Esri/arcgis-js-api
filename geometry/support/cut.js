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

define(["require","exports","./aaBoundingRect","./boundsUtils","./jsonUtils","./spatialReferenceUtils"],(function(e,r,n,t,s,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.normalize=void 0,r.normalize=function(e){if(!e)return null;if(!e.spatialReference)return e;var r=i.getInfo(e.spatialReference);if(!r)return e;var a=r.valid[1];return s.isPolygon(e)?function(e,r){var s,i={rings:[],spatialReference:e.spatialReference},a=t.getBoundsXY(n.create(),e),h=a[0],f=a[2],l=Math.ceil((h-r)/(2*r))*(2*r)+r;if(l>f)i=e;else{for(var o=void 0,g=void 0;l<f;){if(s=u(e,l),o=s[0],g=s[1],o)for(var v=0,c=o.rings;v<c.length;v++){var d=c[v];i.rings.push(d)}if(null==g)break;e=g,l+=2*r}if(g)for(var B=0,P=g.rings;B<P.length;B++){d=P[B];i.rings.push(d)}}for(var R=0,X=i.rings;R<X.length;R++){d=X[R];for(var b=p(t.getPointsBoundsCenterX(d),r),M=0,Y=d;M<Y.length;M++){Y[M][0]-=2*b*r}}return i}(e,a):s.isPolyline(e)?function(e,r){var s={paths:[],spatialReference:e.spatialReference},i=t.getBoundsXY(n.create(),e),a=i[0],u=i[2],f=Math.ceil((a-r)/(2*r))*(2*r)+r;if(f>u)s=e;else{for(var l=void 0,o=void 0;f<u;){var g=h(e,f);if(l=g[0],o=g[1],l)for(var v=0,c=l.paths;v<c.length;v++){var d=c[v];s.paths.push(d)}if(null==o)break;e=o,f+=2*r}if(o)for(var B=0,P=o.paths;B<P.length;B++){d=P[B];s.paths.push(d)}}for(var R=0,X=s.paths;R<X.length;R++){d=X[R];for(var b=p(t.getPointsBoundsCenterX(d),r),M=0,Y=d;M<Y.length;M++){Y[M][0]-=2*b*r}}return s}(e,a):e};var a=n.create();function h(e,r){var n,s,i=t.getBoundsXY(a,e),h=i[0];if(i[2]<=r)n=e;else if(h>=r)s=e;else for(var u=(n={paths:[]}).paths,f=(s={paths:[]}).paths,p=0,g=e.paths;p<g.length;p++){var v=g[p],c=t.getPointsBounds(a,v),d=c[0];if(c[2]<=r)u.push(v);else if(d>=r)f.push(v);else{var B=v[0],P=l(B,r),R=[];R.push(B);for(var X=1;X<v.length;X++){var b=v[X],M=l(b,r);if(M===P)R.push(b);else{var Y=o(B,b,r);R.push(Y),P?u.push(R):f.push(R),R=[Y,b],P=M}B=b}P?u.push(R):f.push(R)}}return[n,s]}function u(e,r){var s,i,a=t.getBoundsXY(n.create(),e),h=a[0];if(a[2]<=r)s=e;else if(h>=r)i=e;else{for(var u=[],p=[],g=[],v=0,c=e.rings;v<c.length;v++){var d=c[v],B=t.getPointsBounds(n.create(),d),P=B[0];if(B[2]<=r)u.push(d);else if(P>=r)p.push(d);else{for(var R=d[d.length-1],X=l(R,r),b=[],M=0,Y=d;M<Y.length;M++){var k=Y[M],y=l(k,r);if(y===X)b.push(k);else{var U=o(R,k,r);b.push(U),X?u.push(b):p.push(b),g.push(U[1]),(b=[]).push([U[0],U[1]]),b.push(k),X=y}R=k}X?u.push(b):p.push(b)}}g.sort();for(var j=0;j<g.length-1;j+=2){var m=[];m.push([r,g[j]]),m.push([r,g[j+1]]),u.length>0&&u.push(m),p.length>0&&p.push(m)}u.length>0&&(s=f(u)),p.length>0&&(i=f(p))}return[s,i]}function f(e){for(var r,n={rings:[]};e.length>0;){var s=e[0],i=!1,a=s[0],h=a[0],u=a[1],f=s[s.length-1],l=f[0],o=f[1];if(h!==l||u!==o)for(var p=1;p<e.length;p++){var v=e[p],c=v[0],d=c[0],B=c[1],P=v[v.length-1],R=P[0],X=P[1];if(o===B&&l===d){for(r=1;r<v.length;r++)s.push([v[r][0],v[r][1]]);i=!0}else if(o===X&&l===R){for(r=v.length-2;r>=0;r--)s.push([v[r][0],v[r][1]]);i=!0}else if(u===X&&h===R){for(r=0;r<v.length-1;r++)s.splice(r,0,[v[r][0],v[r][1]]);i=!0}else if(u===B&&h===d){for(r=1;r<v.length;r++)s.unshift([v[r][0],v[r][1]]);i=!0}if(i){e.splice(p,1),g(s[0],s[s.length-1])&&(e.shift(),t.getPointsBoundsWidth(s)>0&&n.rings.push(s));break}}i||(e.shift(),s.length,n.rings.push(s))}return n}function l(e,r){return e[0]<r}function o(e,r,n){var t=e[0],s=e[1],i=r[0];return[n,s+(r[1]-s)/(i-t)*(n-t)]}function p(e,r){var n=(e+r)/(2*r);return n%2==1&&n--,Math.floor(n)}function g(e,r){var n=e[0],t=e[1],s=r[0],i=r[1];return n===s&&t===i}}));