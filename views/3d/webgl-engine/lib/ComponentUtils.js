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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/arrayUtils"],function(n,t,e){function i(n,t,e,i){if(A(t,e)){null==n&&(n=v());var r=n.isVisibleBit,l=n.data,u=C(l),a=e/u|0,o=e-u*a,f=_(t),s=f-1,h=s/u|0,c=l,g=c.length*u,d=e<g,p=i===r;if(!d&&p){var b=a+1,m=Math.ceil(1.5*c.length),V=h+1,y=Math.max(b,m);y=Math.min(y,V),l=new Uint32Array(y),l.set(c)}a<l.length&&(l[a]=E(l[a],o,p)),n.data=l}return n}function r(n,t){if(null!=n){var e=n.isVisibleBit,i=n.data,r=C(i);return t<i.length*r?x(e,i,t,r):M(n)}return!0}function l(n){var t;if(null==n)t=v(!1);else{t=n,t.isVisibleBit=!0;for(var e=0;e<t.data.length;e++)t.data[e]=0}return t}function u(n){var t;if(null==n);else{t=n,t.isVisibleBit=!1;for(var e=0;e<t.data.length;e++)t.data[e]=0}return t}function a(n,t){var e;if(n)if(B(t))if(0===n.data.length){var i=[],r=[[t[0],U(t[t.length-1])]];e=M(n)?r:i}else{e=[];for(var l=n.isVisibleBit,u=n.data,a=C(u),o=u.length*a,f=_(t),s=!1,h=0;h<o&&h<f;h++){var c=x(l,u,h,a);if(c!==s){var g=t[h];if(c)e.push([g,0]);else{var v=e[e.length-1];v[1]=U(g)}s=c}}var d=M(n);if(f>o&&d&&!s)e.push([t[o],U(t[f])]);else if(s){var v=e[e.length-1],p=d?f:Math.min(f,o);v[1]=U(t[p])}}else{var i=[],r=null;e=M(n)?r:i}else e=null;return e}function o(n){return null===n.component?-1:n.component}function f(n,t,e,i){var r;n=n||[];var l={component:t,options:e,id:i};n.push(l);for(var u=o(l),a=n.length-1;a>0&&u<o(n[a-1]);)r=[n[a],n[a-1]],n[a-1]=r[0],n[a]=r[1],--a;return n}function s(n,t){if(n){var e=n.filter(function(n){return n.id!==t});return 0===e.length?null:e}return n}function h(n,t,e,i,l){r(t,i)&&c(n,t,e,e[i],U(e[i+1]),l)}function c(n,t,e,i,r,l){var u=n.length>0?n[n.length-1]:null,a=u?u.range[1]:-1,o=u?u.options:null;if(!(a>=i))if(a+1===i&&o===l)u.range[1]=r;else{var f={range:[i,r],options:l};n.push(f)}}function g(n,t,e){if(t){if(B(e)){for(var i=e[0],r=U(e[e.length-1]),l=[],u=d(n,e),a=0;a<t.length;++a){var o=t[a].options,f=t[a].component;if(null!==f)h(l,n,e,f,o);else if(u)c(l,n,e,i,r,o);else for(var s=0;s<_(e);++s)h(l,n,e,s,o)}return l.length>0?l:null}var u=!n||M(n);return u?t.map(function(n){return{range:null,options:n.options}}):null}return null}function v(n){return void 0===n&&(n=!0),{isVisibleBit:!n,data:new Uint32Array(0)}}function d(n,t){return!m(n,t)}function p(n,t){return!b(n,t)}function b(n,t){return V(n,t,!0)}function m(n,t){return V(n,t,!1)}function V(n,t,e){var i=!1;n=n||O;var r=n.isVisibleBit,l=n.data,u=_(t),a=C(l),o=l.length*a,f=e===r;if(0===l.length||0===u)i=!f;else if(o<u&&!f)i=!0;else{for(var s=w(a),h=w(0),c=0;c<l.length-1;c++)if(i=!f&&l[c]!==s||f&&l[c]!==h)return i;var g=l.length-1,v=(u-1)%a+1,d=w(v);i=!f&&(l[g]&d)!==d||f&&(l[g]&d)!==h}return i}function y(n){return Array.isArray(n)?new Uint32Array(n):n}function A(n,t){return t<_(n)}function B(n){return n.length>0}function M(n){return!n.isVisibleBit}function x(n,t,e,i){var r=e/i|0,l=e-r*i;return H(t[r],l)===n}function C(n){return 8*n.BYTES_PER_ELEMENT}function E(n,t,e){return n&~(1<<t)|(e?1:0)<<t}function H(n,t){return 0!=(n&1<<t)}function w(n){return R[n]}function U(n){return n-1}function _(n){return Math.max(0,n.length-1)}function I(n,t){var i=e.binaryIndexOf(n,t,!0);return i>=0?i:null}Object.defineProperty(t,"__esModule",{value:!0}),t.updateVisibility=i,t.getVisibility=r,t.hideAllComponents=l,t.unhideAllComponents=u,t.generateVisibleIndexRanges=a,t.addHighlight=f,t.removeHighlight=s,t.generateHighlightedIndexRanges=g,t.defaultVisibilities=v,t.isAllVisible=d,t.isAllHidden=p,t.hasVisible=b,t.hasHidden=m;var O=v();t.createOffsets=y,t.hasComponent=A,t.hasComponents=B;for(var R=[],P=0;P<65;P++)R.push(Math.pow(2,P)-1);t.componentCount=_,t.componentFind=I});