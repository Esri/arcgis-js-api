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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../symbols","../../../core/numberUtils","../../../symbols/support/symbolUtils","./utils"],function(e,r,n,l,t,i){function o(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}function s(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}function u(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}function a(e){return"esri.symbols.TextSymbol"===e.declaredClass}function f(e,n,o,s){var u=n.legendOptions,a=u&&u.customValues,f=c(e,o),m=!!f,p=!!a,y=null!=n.minSize&&null!=n.maxSize,v=n.stops&&n.stops.length>1,d=!!n.target;if(m&&(p||y||v&&!d)){var h=t.isVolumetricSymbol(f),L=null,z=null,_=null;z=h&&!v?l.round([n.minDataValue,n.maxDataValue]):a||b(e,n,f,s),!z&&v&&(z=n.stops.map(function(e){return e.value}),(L=n.stops.some(function(e){return!!e.label}))&&(_=n.stops.map(function(e){return e.label})));var x=!h||z&&2===z.length;if(!z||!x)return null;var D=[r.REAL_WORLD_MIN_SIZE,r.REAL_WORLD_MAX_SIZE];return z.map(function(r,t){var o=h?D[t]:S(e,n,f,r,s);return{value:r,symbol:g(f,o),label:L?_[t]:i.getLabelPrefix(t,z.length-1)+l.format(r),size:o}}).reverse()}}function c(e,r){var n=null,l=null;if("simple"===e.type)n=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var t=e.classBreakInfos||e.uniqueValueInfos,i=t&&t[0];n=i&&i.symbol,l=t.length>1}return!n||m(n)?null:(n=n.clone(),(r||l)&&(n.type.indexOf("3d")>-1?p(n):y(n)),n)}function m(e){if(e){if(n.isSymbol3D(e)){return!!e.symbolLayers&&e.symbolLayers.some(function(e){return e&&"fill"===e.type})}return-1!==e.type.indexOf("fill")}}function p(e){t.isVolumetricSymbol(e)||("line-3d"===e.type?e.symbolLayers.forEach(function(e){e.material={color:_}}):e.symbolLayers.forEach(function(e){"icon"!==e.type||e.resource&&e.resource.href?e.material={color:z}:(e.material={color:L},e.outline={color:_,size:1.5})}))}function y(e){-1!==e.type.indexOf("line")?e.color=_:(e.color=L,"simple-marker"===e.type&&(e.outline={color:_,width:1.5}))}function b(e,r,n,t){var i=e.getSizeRangeAtScale(r,t),o=i&&v(i);if(i||o){var s=o.map(function(e){return d(e,r,i)});s=l.round(s);for(var u=1;u<s.length-1;u++){var a=h(e,r,n,s[u],s[u-1],t);a&&(s[u]=a[0],o[u]=a[1])}return s}}function v(e){for(var r=e.minSize,n=e.maxSize,l=D,t=(n-r)/(l-1),i=[],o=0;o<l;o++)i.push(r+t*o);return i}function d(e,r,n){var l=n.minSize,t=n.maxSize,i=r.minDataValue,o=r.maxDataValue,s=null;if(e<=l)s=i;else if(e>=t)s=o;else{var u=(e-l)/(t-l);s=u*(o-i)+i}return s}function h(e,r,n,t,i,o){var s,u=S(e,r,n,t,o),a=S(e,r,n,i,o),f=l.numDigits(t),c=f.fractional,m=x,p=f.integer,y=null,b=null;t>0&&t<1&&(y=Math.pow(10,c),t*=y,p=l.numDigits(t).integer);for(var v=p-1;v>=0;v--){var d=Math.pow(10,v),h=Math.floor(t/d)*d,g=Math.ceil(t/d)*d;null!=y&&(h/=y,g/=y);var L=(h+g)/2;s=l.round([h,L,g],{indexes:[1]}),L=s[1];var z=S(e,r,n,h,o),_=S(e,r,n,g,o),D=S(e,r,n,L,o),E=l.percentChange(u,z,a,null),M=l.percentChange(u,_,a,null),O=l.percentChange(u,D,a,null),R=E.previous<=m,I=M.previous<=m;if(R&&I&&(E.previous<=M.previous?(R=!0,I=!1):(I=!0,R=!1)),R?b=[h,z]:I?b=[g,_]:O.previous<=m&&(b=[L,D]),b)break}return b}function S(e,r,n,l,t){return e.getSize(l,{sizeInfo:r,scale:t,shape:-1!==n.type.indexOf("marker-symbol")?n.style:null})}function g(e,r){var l=e.clone();if(n.isSymbol3D(l))t.isVolumetricSymbol(l)||l.symbolLayers.forEach(function(e){"fill"!==e.type&&(e.size=r)});else if(o(l))l.size=r;else if(s(l)){var i=l.width,f=l.height;l.height=r,l.width=r*(i/f)}else u(l)?l.width=r:a(l)&&l.font&&(l.font.size=r);return l}Object.defineProperty(r,"__esModule",{value:!0}),r.REAL_WORLD_MAX_SIZE=30,r.REAL_WORLD_MIN_SIZE=12;var L=[255,255,255],z=[200,200,200],_=[128,128,128],x=20,D=5;r.getRampStops=f});