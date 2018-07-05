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

define(["require","exports","../../../symbols","../../../core/numberUtils","../../../symbols/support/symbolUtils","./utils"],function(e,r,l,n,t,i){function o(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}function s(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}function u(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}function a(e){return"esri.symbols.TextSymbol"===e.declaredClass}function f(e,l,o,s){var u=l.legendOptions,a=u&&u.customValues,f=c(e,o),m=!!f,p=!!a,y=null!=l.minSize&&null!=l.maxSize,v=l.stops&&l.stops.length>1,h=!!l.target;if(m&&(p||y||v&&!h)){var d=t.isVolumetricSymbol(f),L=null,z=null,_=null;z=d&&!v?[l.minDataValue,l.maxDataValue]:a||b(e,l,f,s),!z&&v&&(z=l.stops.map(function(e){return e.value}),(L=l.stops.some(function(e){return!!e.label}))&&(_=l.stops.map(function(e){return e.label})));var x=!d||z&&2===z.length;if(!z||!x)return null;var D=[r.REAL_WORLD_MIN_SIZE,r.REAL_WORLD_MAX_SIZE];return z.map(function(r,t){var o=d?D[t]:S(e,l,f,r,s);return{value:r,symbol:g(f,o),label:L?_[t]:i.getLabelPrefix(t,z.length-1)+n.format(r),size:o}}).reverse()}}function c(e,r){var l=null,n=null;if("simple"===e.type)l=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var t=e.classBreakInfos||e.uniqueValueInfos,i=t&&t[0];l=i&&i.symbol,n=t.length>1}return!l||m(l)?null:(l=l.clone(),(r||n)&&(l.type.indexOf("3d")>-1?p(l):y(l)),l)}function m(e){if(e){if(l.isSymbol3D(e)){return!!e.symbolLayers&&e.symbolLayers.some(function(e){return e&&"fill"===e.type})}return-1!==e.type.indexOf("fill")}}function p(e){t.isVolumetricSymbol(e)||("line-3d"===e.type?e.symbolLayers.forEach(function(e){e.material={color:_}}):e.symbolLayers.forEach(function(e){"icon"!==e.type||e.resource&&e.resource.href?e.material={color:z}:(e.material={color:L},e.outline={color:_,size:1.5})}))}function y(e){-1!==e.type.indexOf("line")?e.color=_:(e.color=L,"simple-marker"===e.type&&(e.outline={color:_,width:1.5}))}function b(e,r,l,t){var i=e.getSizeRangeAtScale(r,t),o=i&&v(i);if(i||o){var s=o.map(function(e){return h(e,r,i)});s=n.round(s);for(var u=1;u<s.length-1;u++){var a=d(e,r,l,s[u],s[u-1],t);a&&(s[u]=a[0],o[u]=a[1])}return s}}function v(e){for(var r=e.minSize,l=e.maxSize,n=D,t=(l-r)/(n-1),i=[],o=0;o<n;o++)i.push(r+t*o);return i}function h(e,r,l){var n=l.minSize,t=l.maxSize,i=r.minDataValue,o=r.maxDataValue,s=null;if(e<=n)s=i;else if(e>=t)s=o;else{var u=(e-n)/(t-n);s=u*(o-i)+i}return s}function d(e,r,l,t,i,o){var s,u=S(e,r,l,t,o),a=S(e,r,l,i,o),f=n.numDigits(t),c=f.fractional,m=x,p=f.integer,y=null,b=null;t>0&&t<1&&(y=Math.pow(10,c),t*=y,p=n.numDigits(t).integer);for(var v=p-1;v>=0;v--){var h=Math.pow(10,v),d=Math.floor(t/h)*h,g=Math.ceil(t/h)*h;null!=y&&(d/=y,g/=y);var L=(d+g)/2;s=n.round([d,L,g],{indexes:[1]}),L=s[1];var z=S(e,r,l,d,o),_=S(e,r,l,g,o),D=S(e,r,l,L,o),E=n.percentChange(u,z,a,null),M=n.percentChange(u,_,a,null),O=n.percentChange(u,D,a,null),R=E.previous<=m,I=M.previous<=m;if(R&&I&&(E.previous<=M.previous?(R=!0,I=!1):(I=!0,R=!1)),R?b=[d,z]:I?b=[g,_]:O.previous<=m&&(b=[L,D]),b)break}return b}function S(e,r,l,n,t){return e.getSize(n,{sizeInfo:r,scale:t,shape:-1!==l.type.indexOf("marker-symbol")?l.style:null})}function g(e,r){var n=e.clone();if(l.isSymbol3D(n))t.isVolumetricSymbol(n)||n.symbolLayers.forEach(function(e){"fill"!==e.type&&(e.size=r)});else if(o(n))n.size=r;else if(s(n)){var i=n.width,f=n.height;n.height=r,n.width=r*(i/f)}else u(n)?n.width=r:a(n)&&n.font&&(n.font.size=r);return n}Object.defineProperty(r,"__esModule",{value:!0}),r.REAL_WORLD_MAX_SIZE=30,r.REAL_WORLD_MIN_SIZE=12;var L=[255,255,255],z=[200,200,200],_=[128,128,128],x=20,D=5;r.getRampStops=f});