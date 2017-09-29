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

define(["require","exports"],function(n,t){function e(n,t,e,i){if(A(t,e)){null==n&&(n=g());var r=n.isVisibleBit,l=n.data,u=x(l),a=e/u|0,o=e-u*a,f=_(t),s=f-1,h=s/u|0,c=l,v=c.length*u,d=v>e,p=i===r,b=!d&&p;if(b){var m=1.5,V=a+1,B=Math.ceil(c.length*m),y=h+1,M=Math.max(V,B);M=Math.min(M,y),l=new Uint32Array(M),l.set(c)}a<l.length&&(l[a]=C(l[a],o,p)),n.data=l}return n}function i(n,t){if(null!=n){var e=n.isVisibleBit,i=n.data,r=x(i),l=i.length*r;return l>t?M(e,i,t,r):y(n)}return!0}function r(n){var t;if(null==n)t=g(!1);else{t=n,t.isVisibleBit=!0;for(var e=0;e<t.data.length;e++)t.data[e]=0}return t}function l(n){var t;if(null==n);else{t=n,t.isVisibleBit=!1;for(var e=0;e<t.data.length;e++)t.data[e]=0}return t}function u(n,t){var e;if(n)if(B(t))if(0===n.data.length){var i=[],r=[[t[0],w(t[t.length-1])]];e=y(n)?r:i}else{e=[];for(var l=n.isVisibleBit,u=n.data,a=x(u),o=u.length*a,f=_(t),s=!1,h=0;o>h&&f>h;h++){var c=M(l,u,h,a);if(c!==s){var g=t[h];if(c)e.push([g,0]);else{var v=e[e.length-1];v[1]=w(g)}s=c}}var d=y(n);if(f>o&&d&&!s)e.push([t[o],w(t[f])]);else if(s){var v=e[e.length-1],p=d?f:Math.min(f,o);v[1]=w(t[p])}}else{var i=[],r=null;e=y(n)?r:i}else e=null;return e}function a(n){return null===n.component?-1:n.component}function o(n,t,e,i){n=n||[];var r={component:t,options:e,id:i};n.push(r);for(var l=a(r),u=n.length-1;u>0&&l<a(n[u-1]);)o=[n[u],n[u-1]],n[u-1]=o[0],n[u]=o[1],--u;return n;var o}function f(n,t){if(n){var e=n.filter(function(n){return n.id!==t});return 0===e.length?null:e}return n}function s(n,t,e,r,l){var u=i(t,r);if(u){var a=e[r],o=w(e[r+1]);h(n,t,e,a,o,l)}}function h(n,t,e,i,r,l){var u=n.length>0?n[n.length-1]:null,a=u?u.range[1]:-1,o=u?u.options:null;if(!(a>=i))if(a+1===i&&o===l)u.range[1]=r;else{var f={range:[i,r],options:l};n.push(f)}}function c(n,t,e){if(t){if(B(e)){for(var i=e[0],r=w(e[e.length-1]),l=[],u=v(n,e),a=0;a<t.length;++a){var o=t[a].options,f=t[a].component;if(null!==f)s(l,n,e,f,o);else if(u)h(l,n,e,i,r,o);else for(var c=0;c<_(e);++c)s(l,n,e,c,o)}return l.length>0?l:null}var u=!n||y(n);return u?t.map(function(n){return{range:null,options:n.options}}):null}return null}function g(n){return void 0===n&&(n=!0),{isVisibleBit:!n,data:new Uint32Array(0)}}function v(n,t){return!b(n,t)}function d(n,t){return!p(n,t)}function p(n,t){return m(n,t,!0)}function b(n,t){return m(n,t,!1)}function m(n,t,e){var i=!1;n=n||R;var r=n.isVisibleBit,l=n.data,u=_(t),a=x(l),o=l.length*a,f=e===r;if(0===l.length||0===u)i=!f;else if(u>o&&!f)i=!0;else{for(var s=H(a),h=H(0),c=0;c<l.length-1;c++)if(i=!f&&l[c]!==s||f&&l[c]!==h)return i;var g=l.length-1,v=(u-1)%a+1,d=H(v);i=!f&&(l[g]&d)!==d||f&&(l[g]&d)!==h}return i}function V(n){return Array.isArray(n)?new Uint32Array(n):n}function A(n,t){return t<_(n)}function B(n){return n.length>0}function y(n){return!n.isVisibleBit}function M(n,t,e,i){var r=e/i|0,l=e-r*i;return E(t[r],l)===n}function x(n){var t=8;return n.BYTES_PER_ELEMENT*t}function C(n,t,e){return n&~(1<<t)|(e?1:0)<<t}function E(n,t){return 0!==(n&1<<t)}function H(n){return U[n]}function w(n){return n-1}function _(n){return Math.max(0,n.length-1)}Object.defineProperty(t,"__esModule",{value:!0}),t.updateVisibility=e,t.getVisibility=i,t.hideAllComponents=r,t.unhideAllComponents=l,t.generateVisibleIndexRanges=u,t.addHighlight=o,t.removeHighlight=f,t.generateHighlightedIndexRanges=c,t.defaultVisibilities=g,t.isAllVisible=v,t.isAllHidden=d,t.hasVisible=p,t.hasHidden=b;var R=g();t.createOffsets=V,t.hasComponent=A,t.hasComponents=B;for(var U=[],I=0;65>I;I++)U.push(Math.pow(2,I)-1);t.componentCount=_});