/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["require","exports","../../../Color","../../../symbols","../../../symbols/support/cimSymbolUtils","../../../symbols/support/utils","../../../renderers/support/numberUtils","./utils"],(function(e,l,n,t,i,o,s,r){"use strict";const a=30,u=12,c=[255,255,255],m=[200,200,200],p=[128,128,128],f=20,y=5;function b(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}function d(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}function h(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}function v(e){return"esri.symbols.TextSymbol"===e.declaredClass}function S(e,l){const n=e.length-1;return e.map(((e,t)=>r.createStopLabel(e,t,n,l)))}async function g(e,l,n,t,i,r){var a,u;const c=l.legendOptions,m=c&&c.customValues,p=x(e,n),f=!!p,y=!!m,b=null!=l.minSize&&null!=l.maxSize,d=l.stops&&l.stops.length>1,h=!!l.target;if(!f||!y&&!(b||d&&!h))return;const v=o.isVolumetricSymbol(p);let g=null,V=null,L=null;V=v&&!d?s.round([l.minDataValue,l.maxDataValue]):m||await D(l,p,t,i);const C=null==e?void 0:e.authoringInfo,I="univariate-color-size"===(null==C?void 0:C.type),O=I&&"above-and-below"===(null==C?void 0:C.univariateTheme);if(!V&&d&&(V=l.stops.map((e=>e.value)),g=l.stops.some((e=>!!e.label)),g&&(L=l.stops.map((e=>e.label)))),v&&(null==(a=V)?void 0:a.length)>2&&!O&&(V=[V[0],V[V.length-1]]),!V)return null;I&&5!==(null==(u=V)?void 0:u.length)&&(V=k({minSize:V[0],maxSize:V[V.length-1]}));const E=v?w(e,V):null,R=o.getSymbolOutlineSize(p),P=g?null:S(V,r);return(await Promise.all(V.map((async(n,o)=>{const s=v?E[o]:await M(l,p,n,t,i);return{value:n,symbol:_(O&&"class-breaks"===e.type?z(e,o):p,s),label:g?L[o]:P[o],size:s,outlineSize:R}})))).reverse()}function w(e,l){const n=null==e?void 0:e.authoringInfo,t="univariate-color-size"===(null==n?void 0:n.type);let i=[u,a];if(t){const e=l[0],n=l[l.length-1],t=u,o=a;i=l.map((l=>t+(l-e)/(n-e)*(o-t)))}return t&&"below"===(null==n?void 0:n.univariateTheme)&&i.reverse(),i}function z(e,l){const n=e.classBreakInfos,t=n.length,i=t<2||!(l>=2)?n[0].symbol.clone():n[t-1].symbol.clone();return e.visualVariables.some((e=>"color"===e.type))&&(i.type.indexOf("3d")>-1?L(i):C(i)),i}function x(e,l){let n=null,t=null;if("simple"===e.type)n=e.symbol;else if("class-breaks"===e.type){const l=e.classBreakInfos;n=l&&l[0]&&l[0].symbol,t=l.length>1}else if("unique-value"===e.type){const l=e.uniqueValueInfos;n=l&&l[0]&&l[0].symbol,t=l.length>1}return!n||V(n)?null:(n=n.clone(),(l||t)&&(n.type.indexOf("3d")>-1?L(n):C(n)),n)}function V(e){if(e){if(t.isSymbol3D(e)){return!!e.symbolLayers&&e.symbolLayers.some((e=>e&&"fill"===e.type))}return-1!==e.type.indexOf("fill")}return!1}function L(e){"line-3d"===e.type?e.symbolLayers.forEach((e=>{e.material={color:p}})):e.symbolLayers.forEach((e=>{"icon"!==e.type||e.resource&&e.resource.href?e.material={color:m}:(e.material={color:c},e.outline={color:p,size:1.5})}))}function C(e){"cim"===e.type?i.applyCIMSymbolColor(e,new n(m)):-1!==e.type.indexOf("line")?e.color=p:(e.color=c,"simple-marker"===e.type&&(e.outline={color:p,width:1.5}))}async function D(l,n,t,i){const o=(await new Promise((function(l,n){e(["../../../renderers/visualVariables/support/visualVariableUtils"],l,n)}))).getSizeRangeAtScale(l,t,i),r=o&&k(o);if(!o&&!r)return;let a=r.map((e=>I(e,l,o)));a=s.round(a);for(let e=1;e<a.length-1;e++){const o=await O(l,n,a[e],a[e-1],t,i);o&&(a[e]=o[0],r[e]=o[1])}return a}function k(e){const l=e.minSize,n=e.maxSize,t=y,i=(n-l)/(t-1),o=[];for(let s=0;s<t;s++)o.push(l+i*s);return o}function I(e,l,n){const t=n.minSize,i=n.maxSize,o=l.minDataValue,s=l.maxDataValue;let r=null;if(e<=t)r=o;else if(e>=i)r=s;else{r=(e-t)/(i-t)*(s-o)+o}return r}async function O(e,l,n,t,i,o){const r=await M(e,l,n,i,o),a=await M(e,l,t,i,o),u=s.numDigits(n),c=u.fractional,m=f;let p=u.integer,y=null,b=null;n>0&&n<1&&(y=10**c,n*=y,p=s.numDigits(n).integer);for(let f=p-1;f>=0;f--){const t=10**f;let u=Math.floor(n/t)*t,c=Math.ceil(n/t)*t;null!=y&&(u/=y,c/=y);let p=(u+c)/2;[,p]=s.round([u,p,c],{indexes:[1]});const d=await M(e,l,u,i,o),h=await M(e,l,c,i,o),v=await M(e,l,p,i,o),S=s.percentChange(r,d,a,null),g=s.percentChange(r,h,a,null),w=s.percentChange(r,v,a,null);let z=S.previous<=m,x=g.previous<=m;if(z&&x&&(S.previous<=g.previous?(z=!0,x=!1):(x=!0,z=!1)),z?b=[u,d]:x?b=[c,h]:w.previous<=m&&(b=[p,v]),b)break}return b}async function M(l,n,t,i,o){const{getSize:s}=await new Promise((function(l,n){e(["../../../renderers/visualVariables/support/visualVariableUtils"],l,n)}));return s(l,t,{scale:i,view:o,shape:"simple-marker"===n.type?n.style:null})}function _(e,l){const n=e.clone();if(t.isSymbol3D(n))o.isVolumetricSymbol(n)||n.symbolLayers.forEach((e=>{"fill"!==e.type&&(e.size=l)}));else if(b(n))n.size=l;else if(d(n)){const e=n.width,t=n.height;n.height=l,n.width=l*(e/t)}else h(n)?n.width=l:v(n)&&n.font&&(n.font.size=l);return n}l.REAL_WORLD_MAX_SIZE=a,l.REAL_WORLD_MIN_SIZE=u,l.getRampStops=g,Object.defineProperty(l,"__esModule",{value:!0})}));
