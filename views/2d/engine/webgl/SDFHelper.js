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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./Geometry","./Rect"],function(r,t,o,n){function e(r,t,o){return t>r?t:r>o?o:r}function a(r){return r-Math.floor(r)}function i(r,t,o){r=e(r,0,.9999991);var n=a(r*v[0]),i=a(r*v[1]),l=a(r*v[2]),u=a(r*v[3]);t[o+0]=256*(n-n*f[0]),t[o+1]=256*(i-n*f[1]),t[o+2]=256*(l-i*f[2]),t[o+3]=256*(u-l*f[3])}Object.defineProperty(t,"__esModule",{value:!0});var v=[16777216,65536,256,1],f=[0,1/256,1/256,1/256];t.packFloat=i;var l=function(){function r(){}return r.checkSDF=function(r){return!0},r.prototype._extractGeometry=function(r){if(!r)return null;var t=r.symbolLayers;if(!t||1!==t.length)return null;var n=t[0];if(!n)return null;var e=n.markerGraphics;if(!e||1!==e.length)return null;var a=e[0];if(!a)return null;var i=a.geometry;if(!i||!i.rings)return null;for(var v=[],f=0,l=i.rings;f<l.length;f++){for(var u=l[f],y=[],h=0,x=u;h<x.length;h++){var p=x[h];y.push(new o.Point(p[0],p[1]))}v.push(y)}return v},r.prototype._getEnvelope=function(r){for(var t=1/0,o=-(1/0),e=1/0,a=-(1/0),i=0,v=r;i<v.length;i++)for(var f=v[i],l=0,u=f;l<u.length;l++){var y=u[l];y.x<t&&(t=y.x),y.x>o&&(o=y.x),y.y<e&&(e=y.y),y.y>a&&(a=y.y)}return new n(t,e,o-t,a-e)},r.prototype.buildSDF=function(r){var t=this._extractGeometry(r);if(!t)return null;var o=this._getEnvelope(t);if(o.width<=0||o.height<=0)return null;for(var n=128,e=1,a=0,i=Math.floor(.5*(.5*n-e-a)),v=n-2*(i+a+e),f=Math.max(o.width,o.height),l=v/f,u=Math.round(o.width*l),y=Math.round(o.height*l),h=u+2*i,x=y+2*i,p=0,d=t;p<d.length;p++)for(var c=d[p],g=0,s=c;g<s.length;g++){var _=s[g];_.x-=o.x,_.y-=o.y,_.x*=l,_.y*=l,_.x+=i-.5,_.y+=i-.5}var M=this._dist_map(t,h,x,i);return this._sign_dist_map(t,h,x,i,M),[this._encodeDistMap(M,i),h,x,u,y,l]},r.prototype._dist_map=function(r,t,o,n){for(var e=t*o,a=new Float32Array(e),i=n*n+1,v=0;e>v;++v)a[v]=i;for(var f=0,l=r;f<l.length;f++)for(var u=l[f],y=u.length,v=1;y>v;++v){var h=u[v-1],x=u[v],p=void 0,d=void 0;h.x<x.x?(p=h.x,d=x.x):(p=x.x,d=h.x);var c=void 0,g=void 0;h.y<x.y?(c=h.y,g=x.y):(c=x.y,g=h.y);var s=Math.floor(p)-n,_=Math.floor(d)+n,M=Math.floor(c)-n,m=Math.floor(g)+n;0>s&&(s=0),_>t&&(_=t),0>M&&(M=0),m>o&&(m=o);for(var w=x.x-h.x,D=x.y-h.y,F=w*w+D*D,G=s;_>G;G++)for(var b=M;m>b;b++){var k=(G-h.x)*w+(b-h.y)*D,S=void 0,q=void 0;0>k?(S=h.x,q=h.y):k>F?(S=x.x,q=x.y):(k/=F,S=h.x+k*w,q=h.y+k*D);var A=(G-S)*(G-S)+(b-q)*(b-q),E=(o-b-1)*t+G;A<a[E]&&(a[E]=A)}}for(var v=0;e>v;++v)a[v]=Math.sqrt(a[v]);return a},r.prototype._sign_dist_map=function(r,t,o,n,e){for(var a=0,i=r;a<i.length;a++)for(var v=i[a],f=v.length,l=1;f>l;++l){var u=v[l-1],y=v[l],h=void 0,x=void 0;u.x<y.x?(h=u.x,x=y.x):(h=y.x,x=u.x);var p=void 0,d=void 0;u.y<y.y?(p=u.y,d=y.y):(p=y.y,d=u.y);var c=Math.floor(h),g=Math.floor(x)+1,s=Math.floor(p),_=Math.floor(d)+1;n>c&&(c=n),g>t-n&&(g=t-n),n>s&&(s=n),_>o-n&&(_=o-n);for(var M=s;_>M;++M)if(u.y>M!=y.y>M){for(var m=(o-M-1)*t,w=c;g>w;++w)w<(y.x-u.x)*(M-u.y)/(y.y-u.y)+u.x&&(e[m+w]=-e[m+w]);for(var w=n;c>w;++w)e[m+w]=-e[m+w]}}},r.prototype._encodeDistMap=function(r,t){for(var o=2*t,n=r.length,e=new Uint8Array(4*n),a=0;n>a;++a){var v=.5-r[a]/o;i(v,e,4*a)}return e},r}();t.SDFHelper=l});