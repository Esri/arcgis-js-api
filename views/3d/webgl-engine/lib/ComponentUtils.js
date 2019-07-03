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

define(["require","exports","../../../../core/arrayUtils","../../../../core/maybe"],function(n,e,t,r){function i(n,e,t,r){if(M(e,t)){null==n&&(n=p());var i=n.isVisibleBit,u=n.data,l=E(u),a=t/l|0,o=t-l*a,f=I(e),s=f-1,h=s/l|0,c=u,g=c.length*l,v=t<g,d=r===i;if(!v&&d){var m=a+1,b=Math.ceil(1.5*c.length),V=h+1,y=Math.max(m,b);y=Math.min(y,V),u=new Uint32Array(y),u.set(c)}a<u.length&&(u[a]=w(u[a],o,d)),n.data=u}return n}function u(n,e){if(null!=n){var t=n.isVisibleBit,r=n.data,i=E(r);return e<r.length*i?C(t,r,e,i):H(n)}return!0}function l(n){var e;if(null==n)e=p(!1);else{e=n,e.isVisibleBit=!0;for(var t=0;t<e.data.length;t++)e.data[t]=0}return e}function a(n){var e;if(null==n);else{e=n,e.isVisibleBit=!1;for(var t=0;t<e.data.length;t++)e.data[t]=0}return e}function o(n,e){var t;if(n)if(x(e))if(0===n.data.length){var r=[],i=[[e[0],_(e[e.length-1])]];t=H(n)?i:r}else{t=[];for(var u=n.isVisibleBit,l=n.data,a=E(l),o=l.length*a,f=I(e),s=!1,h=0;h<o&&h<f;h++){var c=C(u,l,h,a);if(c!==s){var g=e[h];if(c)t.push([g,0]);else{var v=t[t.length-1];v[1]=_(g)}s=c}}var d=H(n);if(f>o&&d&&!s)t.push([e[o],_(e[f])]);else if(s){var v=t[t.length-1],p=d?f:Math.min(f,o);v[1]=_(e[p])}}else{var r=[],i=null;t=H(n)?i:r}else t=null;return t}function f(n){return r.isSome(n.component)?n.component:-1}function s(n,e,t,r){var i;n=n||[];var u={component:e,options:t,id:r};n.push(u);for(var l=f(u),a=n.length-1;a>0&&l<f(n[a-1]);)i=[n[a],n[a-1]],n[a-1]=i[0],n[a]=i[1],--a;return n}function h(n,e){if(!n)return n;var t=n.filter(function(n){return n.id!==e});return 0===t.length?null:t}function c(n,e,t,r,i){u(e,r)&&g(n,e,t,t[r],_(t[r+1]),i)}function g(n,e,t,r,i,u){var l=n.length>0?n[n.length-1]:null,a=l?l.range[1]:-1,o=l?l.options:null;if(!(a>=r))if(a+1===r&&o===u)l.range[1]=i;else{var f={range:[r,i],options:u};n.push(f)}}function v(n,e,t){if(!e)return null;if(!x(t)){return!n||H(n)?e.map(function(n){return{range:null,options:n.options}}):null}for(var i=t[0],u=_(t[t.length-1]),l=[],a=m(n,t),o=0;o<e.length;++o){var f=e[o].options,s=e[o].component;if(r.isSome(s))c(l,n,t,s,f);else if(a)g(l,n,t,i,u,f);else for(var h=0;h<I(t);++h)c(l,n,t,h,f)}return l.length>0?l:null}function d(n,e,t){if(!e)return!1;if(!x(t)){return!!(!n||H(n))&&e.length>0}for(var i=m(n,t),u=0,l=e;u<l.length;u++){var a=l[u].component;if(r.isSome(a))return!0;if(i)return!0;if(I(t)>0)return!0}return!1}function p(n){return void 0===n&&(n=!0),{isVisibleBit:!n,data:new Uint32Array(0)}}function m(n,e){return!y(n,e)}function b(n,e){return!V(n,e)}function V(n,e){return A(n,e,!0)}function y(n,e){return A(n,e,!1)}function A(n,e,t){var r=!1;n=n||R;var i=n.isVisibleBit,u=n.data,l=I(e),a=E(u),o=u.length*a,f=t===i;if(0===u.length||0===l)r=!f;else if(o<l&&!f)r=!0;else{for(var s=U(a),h=U(0),c=0;c<u.length-1;c++)if(r=!f&&u[c]!==s||f&&u[c]!==h)return r;var g=u.length-1,v=(l-1)%a+1,d=U(v);r=!f&&(u[g]&d)!==d||f&&(u[g]&d)!==h}return r}function B(n){return Array.isArray(n)?new Uint32Array(n):n}function M(n,e){return e<I(n)}function x(n){return n.length>0}function H(n){return!n.isVisibleBit}function C(n,e,t,r){var i=t/r|0,u=t-i*r;return S(e[i],u)===n}function E(n){return 8*n.BYTES_PER_ELEMENT}function w(n,e,t){return n&~(1<<e)|(t?1:0)<<e}function S(n,e){return 0!=(n&1<<e)}function U(n){return P[n]}function _(n){return n-1}function I(n){return Math.max(0,n.length-1)}function O(n,e){var r=t.binaryIndexOf(n,e,!0);return r>=0?r:null}Object.defineProperty(e,"__esModule",{value:!0}),e.updateVisibility=i,e.getVisibility=u,e.hideAllComponents=l,e.unhideAllComponents=a,e.generateVisibleIndexRanges=o,e.addHighlight=s,e.removeHighlight=h,e.generateHighlightedIndexRanges=v,e.hasHighlights=d,e.defaultVisibilities=p,e.isAllVisible=m,e.isAllHidden=b,e.hasVisible=V,e.hasHidden=y;var R=p();e.createOffsets=B,e.hasComponent=M,e.hasComponents=x;for(var P=[],T=0;T<65;T++)P.push(Math.pow(2,T)-1);e.componentCount=I,e.componentFind=O});