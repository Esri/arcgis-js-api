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

define(["require","exports","./aaBoundingRect","./boundsUtils","./jsonUtils","./spatialReferenceUtils"],function(e,r,n,t,s,a){function i(e){if(!e)return null;if(!e.spatialReference)return e;var r=a.getInfo(e.spatialReference);if(!r)return e;var n=r.valid[1];return s.isPolygon(e)?u(e,n):s.isPolyline(e)?h(e,n):e}function h(e,r){var s={paths:[],spatialReference:e.spatialReference},a=t.getBoundsXY(n.create(),e),i=a[0],h=a[2],u=Math.ceil((i-r)/(2*r))*(2*r)+r;if(u>h)s=e;else{for(var l=void 0,o=void 0;u<h;){var p=f(e,u);if(l=p[0],o=p[1],l)for(var g=0,c=l.paths;g<c.length;g++){var d=c[g];s.paths.push(d)}if(null==o)break;e=o,u+=2*r}if(o)for(var B=0,P=o.paths;B<P.length;B++){var d=P[B];s.paths.push(d)}}for(var R=0,X=s.paths;R<X.length;R++)for(var d=X[R],b=v(t.getPointsBoundsCenterX(d),r),M=0,Y=d;M<Y.length;M++){var k=Y[M];k[0]-=2*b*r}return s}function u(e,r){var s,a={rings:[],spatialReference:e.spatialReference},i=t.getBoundsXY(n.create(),e),h=i[0],u=i[2],f=Math.ceil((h-r)/(2*r))*(2*r)+r;if(f>u)a=e;else{for(var o=void 0,p=void 0;f<u;){if(s=l(e,f),o=s[0],p=s[1],o)for(var g=0,c=o.rings;g<c.length;g++){var d=c[g];a.rings.push(d)}if(null==p)break;e=p,f+=2*r}if(p)for(var B=0,P=p.rings;B<P.length;B++){var d=P[B];a.rings.push(d)}}for(var R=0,X=a.rings;R<X.length;R++)for(var d=X[R],b=v(t.getPointsBoundsCenterX(d),r),M=0,Y=d;M<Y.length;M++){var k=Y[M];k[0]-=2*b*r}return a}function f(e,r){var n,s,a=t.getBoundsXY(d,e),i=a[0],h=a[2];if(h<=r)n=e;else if(i>=r)s=e;else{n={paths:[]},s={paths:[]};for(var u=n.paths,f=s.paths,l=0,o=e.paths;l<o.length;l++){var v=o[l],c=t.getPointsBounds(d,v),B=c[0],P=c[2];if(P<=r)u.push(v);else if(B>=r)f.push(v);else{var R=v[0],X=p(R,r),b=[];b.push(R);for(var M=1;M<v.length;M++){var Y=v[M],k=p(Y,r);if(k===X)b.push(Y);else{var y=g(R,Y,r);b.push(y),X?u.push(b):f.push(b),b=[y,Y],X=k}R=Y}X?u.push(b):f.push(b)}}}return[n,s]}function l(e,r){var s,a,i=t.getBoundsXY(n.create(),e),h=i[0];if(i[2]<=r)s=e;else if(h>=r)a=e;else{for(var u=[],f=[],l=[],v=0,c=e.rings;v<c.length;v++){var d=c[v],B=t.getPointsBounds(n.create(),d),P=B[0],R=B[2];if(R<=r)u.push(d);else if(P>=r)f.push(d);else{for(var X=d[d.length-1],b=p(X,r),M=[],Y=0,k=d;Y<k.length;Y++){var y=k[Y],U=p(y,r);if(U===b)M.push(y);else{var j=g(X,y,r);M.push(j),b?u.push(M):f.push(M),l.push(j[1]),M=[],M.push([j[0],j[1]]),M.push(y),b=U}X=y}b?u.push(M):f.push(M)}}l.sort();for(var C=0;C<l.length-1;C+=2){var _=[];_.push([r,l[C]]),_.push([r,l[C+1]]),u.length>0&&u.push(_),f.length>0&&f.push(_)}u.length>0&&(s=o(u)),f.length>0&&(a=o(f))}return[s,a]}function o(e){for(var r,n={rings:[]};e.length>0;){var s=e[0],a=!1,i=s[0],h=i[0],u=i[1],f=s[s.length-1],l=f[0],o=f[1];if(h!==l||u!==o)for(var p=1;p<e.length;p++){var g=e[p],v=g[0],d=v[0],B=v[1],P=g[g.length-1],R=P[0],X=P[1];if(o===B&&l===d){for(r=1;r<g.length;r++)s.push([g[r][0],g[r][1]]);a=!0}else if(o===X&&l===R){for(r=g.length-2;r>=0;r--)s.push([g[r][0],g[r][1]]);a=!0}else if(u===X&&h===R){for(r=0;r<g.length-1;r++)s.splice(r,0,[g[r][0],g[r][1]]);a=!0}else if(u===B&&h===d){for(r=1;r<g.length;r++)s.unshift([g[r][0],g[r][1]]);a=!0}if(a){e.splice(p,1),c(s[0],s[s.length-1])&&(e.shift(),t.getPointsBoundsWidth(s)>0&&n.rings.push(s));break}}a||(e.shift(),s.length,n.rings.push(s))}return n}function p(e,r){return e[0]<r}function g(e,r,n){var t=e[0],s=e[1],a=r[0];return[n,s+(r[1]-s)/(a-t)*(n-t)]}function v(e,r){var n=(e+r)/(2*r);return n%2==1&&n--,Math.floor(n)}function c(e,r){var n=e[0],t=e[1],s=r[0],a=r[1];return n===s&&t===a}Object.defineProperty(r,"__esModule",{value:!0}),r.normalize=i;var d=n.create()});