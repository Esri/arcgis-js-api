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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/arrayUtils","../../../../core/maybe"],(function(n,t,e,r){function i(n,t,e,r){if(e>=t)return n;null==n&&(n=o());var i=n.isVisibleBit,u=n.data,l=p(u),a=e/l|0,f=e-l*a,s=(t-1)/l|0,h=u,c=r===i;if(!(e<h.length*l)&&c){var g=a+1,d=Math.ceil(1.5*h.length),v=s+1,m=Math.max(g,d);m=Math.min(m,v),(u=new Uint32Array(m)).set(h)}return a<u.length&&(u[a]=function(n,t,e){return n&~(1<<t)|(e?1:0)<<t}(u[a],f,c)),n.data=u,n}function u(n,t){if(null==n)return!0;var e=n.isVisibleBit,r=n.data,i=p(r);return t<r.length*i?v(e,r,t,i):d(n)}function l(n){return r.isSome(n.component)?n.component:-1}function a(n,t,e,r){u(t,r)&&f(n,e[r],y(e[r+1]))}function f(n,t,e){var r=n.length>0?n[n.length-1]:null;(r?r[1]:-1)>=t||n.push([t,e])}function o(n){return void 0===n&&(n=!0),{isVisibleBit:!n,data:new Uint32Array(0)}}function s(n,t){return!c(n,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),t.updateVisibility=function(n,t,e,r){return i(n,B(t),e,r)},t.updateVisibilityWithCount=i,t.getVisibility=u,t.hideAllComponents=function(n){if(null==n)return o(!1);n.isVisibleBit=!0;for(var t=0;t<n.data.length;t++)n.data[t]=0;return n},t.unhideAllComponents=function(n){if(null==n)return null;n.isVisibleBit=!1;for(var t=0;t<n.data.length;t++)n.data[t]=0;return n},t.generateVisibleIndexRanges=function(n,t){var e;if(n)if(g(t))if(0===n.data.length){V=[],A=[[t[0],y(t[t.length-1])]];e=d(n)?A:V}else{e=[];for(var r=n.isVisibleBit,i=n.data,u=p(i),l=i.length*u,a=B(t),f=!1,o=0;o<l&&o<a;o++){var s=v(r,i,o,u);if(s!==f){var h=t[o];if(s)e.push([h,0]);else(m=e[e.length-1])[1]=y(h);f=s}}var c=d(n);if(a>l&&c&&!f)e.push([t[l],y(t[a])]);else if(f){var m=e[e.length-1],b=c?a:Math.min(a,l);m[1]=y(t[b])}}else{var V=[],A=null;e=d(n)?A:V}else e=null;return e},t.addOccludee=function(n,t){return(n=n||[]).push({id:t}),n},t.removeOccludee=function(n,t){if(!n)return n;var e=n.filter((function(n){return n.id!==t}));return 0===e.length?null:e},t.addHighlight=function(n,t,e){var r,i={component:t,id:e};(n=n||[]).push(i);for(var u=l(i),a=n.length-1;a>0&&u<l(n[a-1]);)r=[n[a],n[a-1]],n[a-1]=r[0],n[a]=r[1],--a;return n},t.removeHighlight=function(n,t){if(!n)return n;var e=n.filter((function(n){return n.id!==t}));return 0===e.length?null:e},t.generateHighlightedIndexRanges=function(n,t,e){if(!t)return null;if(!g(e))return!n||d(n)?t.map((function(n){return null})):null;for(var i=e[0],u=y(e[e.length-1]),l=[],o=s(n,e),h=0;h<t.length;++h){var c=t[h].component;if(r.isSome(c))a(l,n,e,c);else if(o)f(l,i,u);else for(var v=0;v<B(e);++v)a(l,n,e,v)}return l.length>0?l:null},t.hasHighlights=function(n,t,e){if(!t)return!1;if(!g(e))return!(n&&!d(n))&&t.length>0;for(var i=s(n,e),u=0,l=t;u<l.length;u++){var a=l[u].component;if(r.isSome(a))return!0;if(i)return!0;if(B(e)>0)return!0}return!1},t.defaultVisibilities=o,t.isAllVisible=s,t.isAllHidden=function(n,t){return!c(n,t,!0)};var h=o();function c(n,t,e){var r=(n=n||h).isVisibleBit,i=n.data,u=e===r,l=B(t);if(0===i.length||0===l)return!u;var a=p(i);if(i.length*a<l&&!u)return!0;for(var f=V(a),o=V(0),s=0;s<i.length-1;s++)if(!u&&i[s]!==f||u&&i[s]!==o)return!0;var c=i.length-1,g=V((l-1)%a+1);return!u&&(i[c]&g)!==g||u&&(i[c]&g)!==o}function g(n){return n.length>0}function d(n){return!n.isVisibleBit}function v(n,t,e,r){var i=e/r|0,u=e-i*r;return function(n,t){return 0!=(n&1<<t)}(t[i],u)===n}function p(n){return 8*n.BYTES_PER_ELEMENT}t.createOffsets=function(n){return n instanceof Uint32Array?n:new Uint32Array(n)},t.hasComponents=g;for(var m=[],b=0;b<65;b++)m.push(Math.pow(2,b)-1);function V(n){return m[n]}function y(n){return n-1}function B(n){return Math.max(0,n.length-1)}t.componentCount=B,t.componentFind=function(n,t){var r=e.binaryIndexOf(n,t,!0);return r>=0?r:null}}));