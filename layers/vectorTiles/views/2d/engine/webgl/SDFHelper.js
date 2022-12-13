// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./Geometry","./Rect","../../../3d/webgl-engine/lib/Util"],(function(r,t,o,e,n){function a(r,t,o){n.packFloatRGBA(r,t,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.packFloat=a;var i=function(){function r(){}return r.checkSDF=function(r){return!0},r.prototype._extractGeometry=function(r){if(!r)return null;var t=r.symbolLayers;if(!t||1!==t.length)return null;var e=t[0];if(!e)return null;var n=e.markerGraphics;if(!n||1!==n.length)return null;var a=n[0];if(!a)return null;var i=a.geometry;if(!i||!i.rings)return null;for(var l=[],f=0,v=i.rings;f<v.length;f++){for(var y=[],h=0,u=v[f];h<u.length;h++){var x=u[h];y.push(new o.Point(x[0],x[1]))}l.push(y)}return l},r.prototype._getEnvelope=function(r){for(var t=1/0,o=-1/0,n=1/0,a=-1/0,i=0,l=r;i<l.length;i++)for(var f=0,v=l[i];f<v.length;f++){var y=v[f];y.x<t&&(t=y.x),y.x>o&&(o=y.x),y.y<n&&(n=y.y),y.y>a&&(a=y.y)}return new e(t,n,o-t,a-n)},r.prototype.buildSDF=function(r){var t=this._extractGeometry(r);if(!t)return null;var o=this._getEnvelope(t);if(o.width<=0||o.height<=0)return null;for(var e=Math.floor(31.5),n=(128-2*(e+0+1))/Math.max(o.width,o.height),a=Math.round(o.width*n),i=Math.round(o.height*n),l=a+2*e,f=i+2*e,v=0,y=t;v<y.length;v++)for(var h=0,u=y[v];h<u.length;h++){var x=u[h];x.x-=o.x,x.y-=o.y,x.x*=n,x.y*=n,x.x+=e-.5,x.y+=e-.5}var p=this._dist_map(t,l,f,e);return this._sign_dist_map(t,l,f,e,p),[this._encodeDistMap(p,e),l,f,a,i,n]},r.prototype._dist_map=function(r,t,o,e){for(var n=t*o,a=new Float32Array(n),i=e*e+1,l=0;l<n;++l)a[l]=i;for(var f=0,v=r;f<v.length;f++){var y=v[f],h=y.length;for(l=1;l<h;++l){var u=y[l-1],x=y[l],p=void 0,d=void 0;u.x<x.x?(p=u.x,d=x.x):(p=x.x,d=u.x);var g=void 0,s=void 0;u.y<x.y?(g=u.y,s=x.y):(g=x.y,s=u.y);var c=Math.floor(p)-e,_=Math.floor(d)+e,M=Math.floor(g)-e,m=Math.floor(s)+e;c<0&&(c=0),_>t&&(_=t),M<0&&(M=0),m>o&&(m=o);for(var w=x.x-u.x,F=x.y-u.y,b=w*w+F*F,D=c;D<_;D++)for(var G=M;G<m;G++){var k=(D-u.x)*w+(G-u.y)*F,A=void 0,S=void 0;k<0?(A=u.x,S=u.y):k>b?(A=x.x,S=x.y):(k/=b,A=u.x+k*w,S=u.y+k*F);var q=(D-A)*(D-A)+(G-S)*(G-S),E=(o-G-1)*t+D;q<a[E]&&(a[E]=q)}}}for(l=0;l<n;++l)a[l]=Math.sqrt(a[l]);return a},r.prototype._sign_dist_map=function(r,t,o,e,n){for(var a=0,i=r;a<i.length;a++)for(var l=i[a],f=l.length,v=1;v<f;++v){var y=l[v-1],h=l[v],u=void 0,x=void 0;y.x<h.x?(u=y.x,x=h.x):(u=h.x,x=y.x);var p=void 0,d=void 0;y.y<h.y?(p=y.y,d=h.y):(p=h.y,d=y.y);var g=Math.floor(u),s=Math.floor(x)+1,c=Math.floor(p),_=Math.floor(d)+1;g<e&&(g=e),s>t-e&&(s=t-e),c<e&&(c=e),_>o-e&&(_=o-e);for(var M=c;M<_;++M)if(y.y>M!=h.y>M){for(var m=(o-M-1)*t,w=g;w<s;++w)w<(h.x-y.x)*(M-y.y)/(h.y-y.y)+y.x&&(n[m+w]=-n[m+w]);for(w=e;w<g;++w)n[m+w]=-n[m+w]}}},r.prototype._encodeDistMap=function(r,t){for(var o=2*t,e=r.length,n=new Uint8Array(4*e),i=0;i<e;++i){a(.5-r[i]/o,n,4*i)}return n},r}();t.SDFHelper=i}));