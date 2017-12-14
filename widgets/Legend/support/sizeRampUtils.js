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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../symbols/support/symbolUtils","../../../core/numberUtils","./utils"],function(e,r,n,l,t){function i(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}function o(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}function a(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}function u(e){return"esri.symbols.TextSymbol"===e.declaredClass}function s(e){return"esri.symbols.Symbol3D"===e.declaredClass}function f(e,i,o,a){var u=i.legendOptions,s=u&&u.customValues,f=c(e,o),m=!!f,p=!!s,y=null!=i.minSize&&null!=i.maxSize,b=i.stops&&i.stops.length>1,d=!!i.target;if(m&&(p||y||b&&!d)){var h=n.isVolumetricSymbol(f),x=null,z=null,L=null;z=h&&!b?[i.minDataValue,i.maxDataValue]:s||v(e,i,f,a),!z&&b&&(z=i.stops.map(function(e){return e.value}),x=i.stops.some(function(e){return!!e.label}),x&&(L=i.stops.map(function(e){return e.label})));var _=!h||z&&2===z.length;if(!z||!_)return null;var O=[r.REAL_WORLD_MIN_SIZE,r.REAL_WORLD_MAX_SIZE],D=z.map(function(r,n){var o=h?O[n]:S(e,i,f,r,a),u=g(f,o),s=x?L[n]:t.getLabelPrefix(n,z.length-1)+l.format(r);return{value:r,symbol:u,label:s,size:o}});return D.reverse()}}function c(e,r){var n=null,l=null;if("simple"===e.type)n=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var t=e.classBreakInfos||e.uniqueValueInfos,i=t&&t[0];n=i&&i.symbol,l=t.length>1}return!n||m(n)?null:(n=n.clone(),(r||l)&&(n.type.indexOf("3d")>-1?p(n):y(n)),n)}function m(e){if(e){if(e.type.indexOf("3d")>-1){var r=e.symbolLayers;return r?r.some(function(e){return e&&"fill"===e.type}):!1}return-1!==e.type.indexOf("fill")}}function p(e){n.isVolumetricSymbol(e)||(-1!==e.type.indexOf("line-3d")?e.symbolLayers.forEach(function(e){e.material={color:L}}):e.symbolLayers.forEach(function(e){"icon"!==e.type||e.resource&&e.resource.href?e.material={color:z}:(e.material={color:x},e.outline={color:L,size:1.5})}))}function y(e){-1!==e.type.indexOf("line")?e.color=L:(e.color=x,"simple-marker"===e.type&&(e.outline={color:L,width:1.5}))}function v(e,r,n,t){var i=e.getSizeRangeAtScale(r,t),o=i&&b(i);if(i||o){var a=o.map(function(e){return d(e,r,i)});a=l.round(a);for(var u=1;u<a.length-1;u++){var s=h(e,r,n,a[u],a[u-1],t);s&&(a[u]=s[0],o[u]=s[1])}return a}}function b(e){for(var r=e.minSize,n=e.maxSize,l=O,t=(n-r)/(l-1),i=[],o=0;l>o;o++)i.push(r+t*o);return i}function d(e,r,n){var l=n.minSize,t=n.maxSize,i=r.minDataValue,o=r.maxDataValue,a=null;if(l>=e)a=i;else if(e>=t)a=o;else{var u=(e-l)/(t-l);a=u*(o-i)+i}return a}function h(e,r,n,t,i,o){var a=S(e,r,n,t,o),u=S(e,r,n,i,o),s=l.numDigits(t),f=s.fractional,c=_,m=s.integer,p=null,y=null;t>0&&1>t&&(p=Math.pow(10,f),t*=p,m=l.numDigits(t).integer);for(var v=m-1;v>=0;v--){var b=Math.pow(10,v),d=Math.floor(t/b)*b,h=Math.ceil(t/b)*b;null!=p&&(d/=p,h/=p);var g=(d+h)/2;I=l.round([d,g,h],{indexes:[1]}),g=I[1];var x=S(e,r,n,d,o),z=S(e,r,n,h,o),L=S(e,r,n,g,o),O=l.percentChange(a,x,u,null),D=l.percentChange(a,z,u,null),E=l.percentChange(a,L,u,null),M=O.previous<=c,R=D.previous<=c;if(M&&R&&(O.previous<=D.previous?(M=!0,R=!1):(R=!0,M=!1)),M?y=[d,x]:R?y=[h,z]:E.previous<=c&&(y=[g,L]),y)break}return y;var I}function S(e,r,n,l,t){return e.getSize(l,{sizeInfo:r,scale:t,shape:-1!==n.type.indexOf("marker-symbol")?n.style:null})}function g(e,r){var l=e.clone();if(s(l))n.isVolumetricSymbol(l)||l.symbolLayers.forEach(function(e){"fill"!==e.type&&(e.size=r)});else if(i(l))l.size=r;else if(o(l)){var t=l.width,f=l.height;l.height=r,l.width=r*(t/f)}else a(l)?l.width=r:u(l)&&l.font&&(l.font.size=r);return l}Object.defineProperty(r,"__esModule",{value:!0}),r.REAL_WORLD_MAX_SIZE=30,r.REAL_WORLD_MIN_SIZE=12;var x=[255,255,255],z=[200,200,200],L=[128,128,128],_=20,O=5;r.getRampStops=f});