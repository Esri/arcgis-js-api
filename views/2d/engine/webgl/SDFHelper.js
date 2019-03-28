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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./Geometry","./Rect","../../../3d/webgl-engine/lib/Util"],function(r,n,S,C,o){function F(r,n,t){o.packFloatRGBA(r,n,t)}function I(r){if(!r)return null;switch(r.type){case"CIMPointSymbol":var n=r.symbolLayers;return n&&1===n.length?I(n[0]):null;case"CIMVectorMarker":var t=r.markerGraphics;if(!t||1!==t.length)return null;var o=t[0];if(!o)return null;var a=o.geometry;if(!a||!a.rings&&!a.paths)return null;a.paths&&(a={rings:a.paths.map(function(r){for(var n=r.slice(),t=r.length-2;0<=t;t--)n.push(r[t]);return n})});var e=o.symbol;return!e||"CIMPolygonSymbol"!==e.type&&"CIMLineSymbol"!==e.type?null:{marker:r,polygon:a,symbol:e}}return null}Object.defineProperty(n,"__esModule",{value:!0}),n.packFloat=F,n.checkSDF=function(r){return null!==I(r)},n.getSDFSymbol=function(r){var n=r.markerGraphics;if(!n||1!==n.length)return null;var t=n[0];if(!t)return null;var o=t.symbol;return!o||"CIMPolygonSymbol"!==o.type&&"CIMLineSymbol"!==o.type?null:o},n.buildSDF=function(r){var n=I(r);if(!n)return null;var t=function(r){if(!r)return null;var n=r.rings;if(!n)return null;for(var t=[],o=0,a=n;o<a.length;o++){for(var e=[],l=0,i=a[o];l<i.length;l++){var y=i[l];e.push(new S.Point(y[0],y[1]))}t.push(e)}return t}(n.polygon);if(!t)return null;var o=function(r){for(var n=1/0,t=-1/0,o=1/0,a=-1/0,e=0,l=r;e<l.length;e++)for(var i=0,y=l[e];i<y.length;i++){var v=y[i];v.x<n&&(n=v.x),v.x>t&&(t=v.x),v.y<o&&(o=v.y),v.y>a&&(a=v.y)}return new C(n,o,t-n,a-o)}(t),a=Math.floor(31.5),e=(128-2*(a+0+1))/Math.max(o.width,o.height),l=Math.round(o.width*e),i=Math.round(o.height*e),y=l+2*a,v=i+2*a,u=1,f=n.marker.frame;if(f){var h=f.ymax-f.ymin;u=o.height/h}o.width>o.height&&(u*=v/i/2);var x=n.marker.anchorPoint,g=0,m=0;if(x){var c=.5*(f.xmax+f.xmin)+x.x*(f.xmax-f.xmin),s=.5*(f.ymax+f.ymin)+x.y*(f.ymax-f.ymin);c-=o.x,s-=o.y,c*=e,s*=e,g=(c+=a-.5)/y-.5,m=(s+=a-.5)/v-.5}for(var M=0,d=t;M<d.length;M++)for(var p=0,b=d[M];p<b.length;p++){var k=b[p];k.x-=o.x,k.y-=o.y,k.x*=e,k.y*=e,k.x+=a-.5,k.y+=a-.5}var w=function(r,n,t,o){for(var a=n*t,e=new Float32Array(a),l=o*o+1,i=0;i<a;++i)e[i]=l;for(var y=0,v=r;y<v.length;y++)for(var u=v[y],f=u.length,i=1;i<f;++i){var h=u[i-1],x=u[i],g=void 0,m=void 0;m=h.x<x.x?(g=h.x,x.x):(g=x.x,h.x);var c=void 0,s=void 0;s=h.y<x.y?(c=h.y,x.y):(c=x.y,h.y);var M=Math.floor(g)-o,d=Math.floor(m)+o,p=Math.floor(c)-o,b=Math.floor(s)+o;M<0&&(M=0),n<d&&(d=n),p<0&&(p=0),t<b&&(b=t);for(var k=x.x-h.x,w=x.y-h.y,S=k*k+w*w,C=M;C<d;C++)for(var F=p;F<b;F++){var I=(C-h.x)*k+(F-h.y)*w,P=void 0,G=void 0;G=I<0?(P=h.x,h.y):S<I?(P=x.x,x.y):(I/=S,P=h.x+I*k,h.y+I*w);var A=(C-P)*(C-P)+(F-G)*(F-G),D=(t-F-1)*n+C;A<e[D]&&(e[D]=A)}}for(var i=0;i<a;++i)e[i]=Math.sqrt(e[i]);return e}(t,y,v,a);return function(r,n,t,o,a){for(var e=0,l=r;e<l.length;e++)for(var i=l[e],y=i.length,v=1;v<y;++v){var u=i[v-1],f=i[v],h=void 0,x=void 0;x=u.x<f.x?(h=u.x,f.x):(h=f.x,u.x);var g=void 0,m=void 0;m=u.y<f.y?(g=u.y,f.y):(g=f.y,u.y);var c=Math.floor(h),s=Math.floor(x)+1,M=Math.floor(g),d=Math.floor(m)+1;c<o&&(c=o),n-o<s&&(s=n-o),M<o&&(M=o),t-o<d&&(d=t-o);for(var p=M;p<d;++p)if(u.y>p!=f.y>p){for(var b=(t-p-1)*n,k=c;k<s;++k)k<(f.x-u.x)*(p-u.y)/(f.y-u.y)+u.x&&(a[b+k]=-a[b+k]);for(var k=o;k<c;++k)a[b+k]=-a[b+k]}}}(t,y,v,a,w),[function(r,n){for(var t=2*n,o=r.length,a=new Uint8Array(4*o),e=0;e<o;++e){var l=.5-r[e]/t;F(l,a,4*e)}return a}(w,a),y,v,u,g,m]}});