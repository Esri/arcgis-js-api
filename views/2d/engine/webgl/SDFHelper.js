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

define(["require","exports","./Geometry","./Rect","../../../3d/webgl-engine/lib/Util"],function(r,t,x,y,e){function i(r,t,o){e.packFloatRGBA(r,t,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.packFloat=i;var o=function(){function r(){}return r.checkSDF=function(r){return!0},r.prototype._extractGeometry=function(r){if(!r)return null;var t=r.symbolLayers;if(!t||1!==t.length)return null;var o=t[0];if(!o)return null;var e=o.markerGraphics;if(!e||1!==e.length)return null;var n=e[0];if(!n)return null;var a=n.geometry;if(!a||!a.rings)return null;for(var i=[],l=0,f=a.rings;l<f.length;l++){for(var v=[],y=0,h=f[l];y<h.length;y++){var u=h[y];v.push(new x.Point(u[0],u[1]))}i.push(v)}return i},r.prototype._getEnvelope=function(r){for(var t=1/0,o=-1/0,e=1/0,n=-1/0,a=0,i=r;a<i.length;a++)for(var l=0,f=i[a];l<f.length;l++){var v=f[l];v.x<t&&(t=v.x),v.x>o&&(o=v.x),v.y<e&&(e=v.y),v.y>n&&(n=v.y)}return new y(t,e,o-t,n-e)},r.prototype.buildSDF=function(r){var t=this._extractGeometry(r);if(!t)return null;var o=this._getEnvelope(t);if(o.width<=0||o.height<=0)return null;for(var e=Math.floor(31.5),n=(128-2*(e+0+1))/Math.max(o.width,o.height),a=Math.round(o.width*n),i=Math.round(o.height*n),l=a+2*e,f=i+2*e,v=0,y=t;v<y.length;v++)for(var h=0,u=y[v];h<u.length;h++){var x=u[h];x.x-=o.x,x.y-=o.y,x.x*=n,x.y*=n,x.x+=e-.5,x.y+=e-.5}var p=this._dist_map(t,l,f,e);return this._sign_dist_map(t,l,f,e,p),[this._encodeDistMap(p,e),l,f,a,i,n]},r.prototype._dist_map=function(r,t,o,e){for(var n=t*o,a=new Float32Array(n),i=e*e+1,l=0;l<n;++l)a[l]=i;for(var f=0,v=r;f<v.length;f++){var y=v[f],h=y.length;for(l=1;l<h;++l){var u=y[l-1],x=y[l],p=void 0,d=void 0;d=u.x<x.x?(p=u.x,x.x):(p=x.x,u.x);var g=void 0,s=void 0;s=u.y<x.y?(g=u.y,x.y):(g=x.y,u.y);var c=Math.floor(p)-e,_=Math.floor(d)+e,M=Math.floor(g)-e,m=Math.floor(s)+e;c<0&&(c=0),t<_&&(_=t),M<0&&(M=0),o<m&&(m=o);for(var w=x.x-u.x,F=x.y-u.y,b=w*w+F*F,D=c;D<_;D++)for(var G=M;G<m;G++){var k=(D-u.x)*w+(G-u.y)*F,A=void 0,S=void 0;S=k<0?(A=u.x,u.y):b<k?(A=x.x,x.y):(k/=b,A=u.x+k*w,u.y+k*F);var q=(D-A)*(D-A)+(G-S)*(G-S),E=(o-G-1)*t+D;q<a[E]&&(a[E]=q)}}}for(l=0;l<n;++l)a[l]=Math.sqrt(a[l]);return a},r.prototype._sign_dist_map=function(r,t,o,e,n){for(var a=0,i=r;a<i.length;a++)for(var l=i[a],f=l.length,v=1;v<f;++v){var y=l[v-1],h=l[v],u=void 0,x=void 0;x=y.x<h.x?(u=y.x,h.x):(u=h.x,y.x);var p=void 0,d=void 0;d=y.y<h.y?(p=y.y,h.y):(p=h.y,y.y);var g=Math.floor(u),s=Math.floor(x)+1,c=Math.floor(p),_=Math.floor(d)+1;g<e&&(g=e),t-e<s&&(s=t-e),c<e&&(c=e),o-e<_&&(_=o-e);for(var M=c;M<_;++M)if(y.y>M!=h.y>M){for(var m=(o-M-1)*t,w=g;w<s;++w)w<(h.x-y.x)*(M-y.y)/(h.y-y.y)+y.x&&(n[m+w]=-n[m+w]);for(w=e;w<g;++w)n[m+w]=-n[m+w]}}},r.prototype._encodeDistMap=function(r,t){for(var o=2*t,e=r.length,n=new Uint8Array(4*e),a=0;a<e;++a){i(.5-r[a]/o,n,4*a)}return n},r}();t.SDFHelper=o});