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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/arrayUtils"],function(n,t,i){function e(n,t,i,e){if(p(t,i)){null==n&&(n=h());var r=n.isVisibleBit,a=n.data,l=A(a),u=i/l|0,s=i-l*u,f=M(t),o=f-1,c=o/l|0,d=a,v=d.length*l,g=v>i,b=e===r,V=!g&&b;if(V){var y=1.5,B=u+1,m=Math.ceil(d.length*y),x=c+1,E=Math.max(B,m);E=Math.min(E,x),a=new Uint32Array(E),a.set(d)}u<a.length&&(a[u]=C(a[u],s,b)),n.data=a}return n}function r(n,t){if(null!=n){var i=n.isVisibleBit,e=n.data,r=A(e),a=e.length*r;return a>t?m(i,e,t,r):B(n)}return!0}function a(n){return void 0===n&&(n=0),{startComponentIdx:n}}function l(n,t,e,r){if(null==n)return!0;var a=B(n),l=t.length>0&&e<t[t.length-1];if(l){var s=n.isVisibleBit,f=n.data,o=A(f),h=f.length*o,c=r?r.startComponentIdx:null;c&&u(t,c,e)?h>c&&(a=m(s,f,c,o)):c&&u(t,c+1,e)?(c+=1,h>c&&(a=m(s,f,c,o))):(c=i.binaryIndexOf(t,e,!0),h>c&&(a=m(s,f,c,o))),r&&(r.startComponentIdx=c)}return a}function u(n,t,i){return n[t]<=i&&n[t+1]>i}function s(n){var t;if(null==n)t=h(!1);else{t=n,t.isVisibleBit=!0;for(var i=0;i<t.data.length;i++)t.data[i]=0}return t}function f(n){var t;if(null==n);else{t=n,t.isVisibleBit=!1;for(var i=0;i<t.data.length;i++)t.data[i]=0}return t}function o(n,t){var i;if(n)if(y(t))if(0===n.data.length){var e=[],r=[[t[0],I(t[t.length-1])]];i=B(n)?r:e}else{i=[];for(var a=n.isVisibleBit,l=n.data,u=A(l),s=l.length*u,f=M(t),o=-1,h=null,c=0;s>c&&f>c;c++){var d=m(a,l,c,u);if(d!==h){var v=t[c],g=i[i.length-1];d?i.push([v,o]):g&&(g[1]=I(v)),h=d}}var b=i[i.length-1];if(b&&b[1]===o){var V=I(t[t.length-1]);b[1]=V}}else{var e=[],r=null;i=B(n)?r:e}else i=null;return i}function h(n){return void 0===n&&(n=!0),{isVisibleBit:!n,data:new Uint32Array(0)}}function c(n,t){return!g(n,t)}function d(n,t){return!v(n,t)}function v(n,t){return b(n,t,!0)}function g(n,t){return b(n,t,!1)}function b(n,t,i){var e=!1;n=n||w;var r=n.isVisibleBit,a=n.data,l=M(t),u=A(a),s=a.length*u,f=i===r;if(0===a.length||0===l)e=!f;else if(l>s&&!f)e=!0;else{for(var o=E(u),h=E(0),c=0;c<a.length-1;c++)if(e=!f&&a[c]!==o||f&&a[c]!==h)return e;var d=a.length-1,v=(l-1)%u+1,g=E(v);e=!f&&(a[d]&g)!==g||f&&(a[d]&g)!==h}return e}function V(n){return Array.isArray(n)?new Uint32Array(n):n}function p(n,t){return t<M(n)}function y(n){return n.length>0}function B(n){return!n.isVisibleBit}function m(n,t,i,e){var r=i/e|0,a=i-r*e;return x(t[r],a)===n}function A(n){var t=8;return n.BYTES_PER_ELEMENT*t}function C(n,t,i){return n&~(1<<t)|(i?1:0)<<t}function x(n,t){return 0!==(n&1<<t)}function E(n){return U[n]}function I(n){return n-1}function M(n){return n.length-1}t.updateVisibility=e,t.getVisibility=r,t.createVisibilityCache=a,t.lookupOffsetVisibility=l,t.hideAllComponents=s,t.unhideAllComponents=f,t.generateVisibleIndexRanges=o,t.defaultVisibilities=h,t.isAllVisible=c,t.isAllHidden=d,t.hasVisible=v,t.hasHidden=g;var w=h();t.createOffsets=V,t.hasComponent=p,t.hasComponents=y;for(var U=[],O=0;65>O;O++)U.push(Math.pow(2,O)-1)});