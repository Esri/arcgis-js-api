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

define(["require","exports","../../../core/numberUtils","../../../symbols/support/symbolUtils","./utils"],function(e,r,n,l,t){function i(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}function o(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}function a(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}function u(e){return"esri.symbols.TextSymbol"===e.declaredClass}function s(e){return"esri.symbols.Symbol3D"===e.declaredClass}function f(e,i,o,a){var u=i.legendOptions,s=u&&u.customValues,f=c(e,o),m=!!f,p=!!s,y=null!=i.minSize&&null!=i.maxSize,b=i.stops&&i.stops.length>1,d=!!i.target;if(m&&(p||y||b&&!d)){var h=l.isVolumetricSymbol(f),x=null,z=null,L=null;z=h&&!b?[i.minDataValue,i.maxDataValue]:s||v(e,i,f,a),!z&&b&&(z=i.stops.map(function(e){return e.value}),(x=i.stops.some(function(e){return!!e.label}))&&(L=i.stops.map(function(e){return e.label})));var _=!h||z&&2===z.length;if(!z||!_)return null;var O=[r.REAL_WORLD_MIN_SIZE,r.REAL_WORLD_MAX_SIZE];return z.map(function(r,l){var o=h?O[l]:S(e,i,f,r,a);return{value:r,symbol:g(f,o),label:x?L[l]:t.getLabelPrefix(l,z.length-1)+n.format(r),size:o}}).reverse()}}function c(e,r){var n=null,l=null;if("simple"===e.type)n=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var t=e.classBreakInfos||e.uniqueValueInfos,i=t&&t[0];n=i&&i.symbol,l=t.length>1}return!n||m(n)?null:(n=n.clone(),(r||l)&&(n.type.indexOf("3d")>-1?p(n):y(n)),n)}function m(e){if(e){if(e.type.indexOf("3d")>-1){var r=e.symbolLayers;return!!r&&r.some(function(e){return e&&"fill"===e.type})}return-1!==e.type.indexOf("fill")}}function p(e){l.isVolumetricSymbol(e)||(-1!==e.type.indexOf("line-3d")?e.symbolLayers.forEach(function(e){e.material={color:L}}):e.symbolLayers.forEach(function(e){"icon"!==e.type||e.resource&&e.resource.href?e.material={color:z}:(e.material={color:x},e.outline={color:L,size:1.5})}))}function y(e){-1!==e.type.indexOf("line")?e.color=L:(e.color=x,"simple-marker"===e.type&&(e.outline={color:L,width:1.5}))}function v(e,r,l,t){var i=e.getSizeRangeAtScale(r,t),o=i&&b(i);if(i||o){var a=o.map(function(e){return d(e,r,i)});a=n.round(a);for(var u=1;u<a.length-1;u++){var s=h(e,r,l,a[u],a[u-1],t);s&&(a[u]=s[0],o[u]=s[1])}return a}}function b(e){for(var r=e.minSize,n=e.maxSize,l=O,t=(n-r)/(l-1),i=[],o=0;o<l;o++)i.push(r+t*o);return i}function d(e,r,n){var l=n.minSize,t=n.maxSize,i=r.minDataValue,o=r.maxDataValue,a=null;if(e<=l)a=i;else if(e>=t)a=o;else{var u=(e-l)/(t-l);a=u*(o-i)+i}return a}function h(e,r,l,t,i,o){var a=S(e,r,l,t,o),u=S(e,r,l,i,o),s=n.numDigits(t),f=s.fractional,c=_,m=s.integer,p=null,y=null;t>0&&t<1&&(p=Math.pow(10,f),t*=p,m=n.numDigits(t).integer);for(var v=m-1;v>=0;v--){var b=Math.pow(10,v),d=Math.floor(t/b)*b,h=Math.ceil(t/b)*b;null!=p&&(d/=p,h/=p);var g=(d+h)/2;I=n.round([d,g,h],{indexes:[1]}),g=I[1];var x=S(e,r,l,d,o),z=S(e,r,l,h,o),L=S(e,r,l,g,o),O=n.percentChange(a,x,u,null),D=n.percentChange(a,z,u,null),E=n.percentChange(a,L,u,null),M=O.previous<=c,R=D.previous<=c;if(M&&R&&(O.previous<=D.previous?(M=!0,R=!1):(R=!0,M=!1)),M?y=[d,x]:R?y=[h,z]:E.previous<=c&&(y=[g,L]),y)break}return y;var I}function S(e,r,n,l,t){return e.getSize(l,{sizeInfo:r,scale:t,shape:-1!==n.type.indexOf("marker-symbol")?n.style:null})}function g(e,r){var n=e.clone();if(s(n))l.isVolumetricSymbol(n)||n.symbolLayers.forEach(function(e){"fill"!==e.type&&(e.size=r)});else if(i(n))n.size=r;else if(o(n)){var t=n.width,f=n.height;n.height=r,n.width=r*(t/f)}else a(n)?n.width=r:u(n)&&n.font&&(n.font.size=r);return n}Object.defineProperty(r,"__esModule",{value:!0}),r.REAL_WORLD_MAX_SIZE=30,r.REAL_WORLD_MIN_SIZE=12;var x=[255,255,255],z=[200,200,200],L=[128,128,128],_=20,O=5;r.getRampStops=f});