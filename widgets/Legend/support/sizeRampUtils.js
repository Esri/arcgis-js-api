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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../symbols","../../../core/numberUtils","../../../symbols/support/utils","./utils"],function(e,r,n,l,i,t){function o(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}function u(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}function s(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}function a(e){return"esri.symbols.TextSymbol"===e.declaredClass}function f(e,n,o,u,s){var a=n.legendOptions,f=a&&a.customValues,m=c(e,o),p=!!m,y=!!f,v=null!=n.minSize&&null!=n.maxSize,S=n.stops&&n.stops.length>1,d=!!n.target;if(p&&(y||v||S&&!d)){var z=i.isVolumetricSymbol(m),L=null,_=null,x=null;_=z&&!S?l.round([n.minDataValue,n.maxDataValue]):f||b(e,n,m,u,s),!_&&S&&(_=n.stops.map(function(e){return e.value}),(L=n.stops.some(function(e){return!!e.label}))&&(x=n.stops.map(function(e){return e.label})));var D=!z||_&&2===_.length;if(!_||!D)return null;var E=[r.REAL_WORLD_MIN_SIZE,r.REAL_WORLD_MAX_SIZE],M=i.getSymbolOutlineSize(m);return _.map(function(r,i){var o=z?E[i]:h(e,n,m,r,u,s);return{value:r,symbol:g(m,o),label:L?x[i]:t.getLabelPrefix(i,_.length-1)+l.format(r),size:o,outlineSize:M}}).reverse()}}function c(e,r){var n=null,l=null;if("simple"===e.type)n=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var i=e.classBreakInfos||e.uniqueValueInfos,t=i&&i[0];n=t&&t.symbol,l=i.length>1}return!n||m(n)?null:(n=n.clone(),(r||l)&&(n.type.indexOf("3d")>-1?p(n):y(n)),n)}function m(e){if(e){if(n.isSymbol3D(e)){return!!e.symbolLayers&&e.symbolLayers.some(function(e){return e&&"fill"===e.type})}return-1!==e.type.indexOf("fill")}}function p(e){i.isVolumetricSymbol(e)||("line-3d"===e.type?e.symbolLayers.forEach(function(e){e.material={color:_}}):e.symbolLayers.forEach(function(e){"icon"!==e.type||e.resource&&e.resource.href?e.material={color:L}:(e.material={color:z},e.outline={color:_,size:1.5})}))}function y(e){-1!==e.type.indexOf("line")?e.color=_:(e.color=z,"simple-marker"===e.type&&(e.outline={color:_,width:1.5}))}function b(e,r,n,i,t){var o=e.getSizeRangeAtScale(r,i,t),u=o&&v(o);if(o||u){var s=u.map(function(e){return S(e,r,o)});s=l.round(s);for(var a=1;a<s.length-1;a++){var f=d(e,r,n,s[a],s[a-1],i,t);f&&(s[a]=f[0],u[a]=f[1])}return s}}function v(e){for(var r=e.minSize,n=e.maxSize,l=D,i=(n-r)/(l-1),t=[],o=0;o<l;o++)t.push(r+i*o);return t}function S(e,r,n){var l=n.minSize,i=n.maxSize,t=r.minDataValue,o=r.maxDataValue,u=null;if(e<=l)u=t;else if(e>=i)u=o;else{var s=(e-l)/(i-l);u=s*(o-t)+t}return u}function d(e,r,n,i,t,o,u){var s,a=h(e,r,n,i,o,u),f=h(e,r,n,t,o,u),c=l.numDigits(i),m=c.fractional,p=x,y=c.integer,b=null,v=null;i>0&&i<1&&(b=Math.pow(10,m),i*=b,y=l.numDigits(i).integer);for(var S=y-1;S>=0;S--){var d=Math.pow(10,S),g=Math.floor(i/d)*d,z=Math.ceil(i/d)*d;null!=b&&(g/=b,z/=b);var L=(g+z)/2;s=l.round([g,L,z],{indexes:[1]}),L=s[1];var _=h(e,r,n,g,o,u),D=h(e,r,n,z,o,u),E=h(e,r,n,L,o,u),M=l.percentChange(a,_,f,null),O=l.percentChange(a,D,f,null),R=l.percentChange(a,E,f,null),I=M.previous<=p,V=O.previous<=p;if(I&&V&&(M.previous<=O.previous?(I=!0,V=!1):(V=!0,I=!1)),I?v=[g,_]:V?v=[z,D]:R.previous<=p&&(v=[L,E]),v)break}return v}function h(e,r,n,l,i,t){return e.getSize(l,{sizeInfo:r,scale:i,view:t,shape:-1!==n.type.indexOf("marker-symbol")?n.style:null})}function g(e,r){var l=e.clone();if(n.isSymbol3D(l))i.isVolumetricSymbol(l)||l.symbolLayers.forEach(function(e){"fill"!==e.type&&(e.size=r)});else if(o(l))l.size=r;else if(u(l)){var t=l.width,f=l.height;l.height=r,l.width=r*(t/f)}else s(l)?l.width=r:a(l)&&l.font&&(l.font.size=r);return l}Object.defineProperty(r,"__esModule",{value:!0}),r.REAL_WORLD_MAX_SIZE=30,r.REAL_WORLD_MIN_SIZE=12;var z=[255,255,255],L=[200,200,200],_=[128,128,128],x=20,D=5;r.getRampStops=f});