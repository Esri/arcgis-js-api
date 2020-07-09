// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../geometry/support/jsonUtils","./packingUtils","./Rect"],(function(r,n,a,t,o){function e(r){for(var n=1/0,a=-1/0,t=1/0,o=-1/0,e=0,i=r;e<i.length;e++)for(var l=0,v=i[e];l<v.length;l++){var f=v[l];f[0]<n&&(n=f[0]),f[0]>a&&(a=f[0]),f[1]<t&&(t=f[1]),f[1]>o&&(o=f[1])}return[n,t,a,o]}function i(r,n){for(var a=2*n,o=r.length,e=new Uint8Array(4*o),i=0;i<o;++i){var l=.5-r[i]/a;t.packFloatRGBA(l,e,4*i)}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.getSDFInfo=function r(n){if(!n)return null;switch(n.type){case"CIMPointSymbol":var a=n.symbolLayers;return a&&1===a.length?r(a[0]):null;case"CIMVectorMarker":var t=n.markerGraphics;if(!t||1!==t.length)return null;var o=t[0];if(!o)return null;var e=o.geometry;if(!e)return null;var i=o.symbol;return!i||"CIMPolygonSymbol"!==i.type&&"CIMLineSymbol"!==i.type?null:{geom:e,asFill:"CIMPolygonSymbol"===i.type};case"sdf":return{geom:n.geom,asFill:n.asFill}}return null},n.getSDFSymbol=function(r){var n=r.markerGraphics;if(!n||1!==n.length)return null;var a=n[0];if(!a)return null;var t=a.symbol;return!t||"CIMPolygonSymbol"!==t.type&&"CIMLineSymbol"!==t.type?null:t},n.getExtent=function(r){return r?r.rings?e(r.rings):r.paths?e(r.paths):a.isExtent(r)?[r.xmin,r.ymin,r.xmax,r.ymax]:null:null},n.getSDFMetrics=function(r,n,a,t,o){var e=r[0],i=r[1],l=r[2],v=r[3];if(l<e||v<i)return[0,0,0];var f=l-e,u=v-i,m=Math.floor(31.5),h=(128-2*(m+1))/Math.max(f,u),y=Math.round(f*h)+2*m,x=Math.round(u*h)+2*m,s=1;n&&(s=x/h/(n.ymax-n.ymin));var g=0,M=0;if(t)if(o){if(n&&a&&n.ymax-n.ymin>0){var d=(n.xmax-n.xmin)/(n.ymax-n.ymin);g=t.x/(a*d),M=t.y/a}}else g=t.x,M=t.y;return g=.5*(n.xmax+n.xmin)+g*(n.xmax-n.xmin),M=.5*(n.ymax+n.ymin)+M*(n.ymax-n.ymin),g-=e,M-=i,g*=h,M*=h,[s,(g+=m)/y-.5,-((M+=m)/x-.5)]},n.buildSDF=function(r){for(var n,a=(n=r.geom)?n.rings?n.rings:n.paths?n.paths:void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax?[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]:null:null,t=function(r){for(var n=1/0,a=-1/0,t=1/0,e=-1/0,i=0,l=r;i<l.length;i++)for(var v=0,f=l[i];v<f.length;v++){var u=f[v];u[0]<n&&(n=u[0]),u[0]>a&&(a=u[0]),u[1]<t&&(t=u[1]),u[1]>e&&(e=u[1])}return new o.default(n,t,a-n,e-t)}(a),e=Math.floor(31.5),l=(128-2*(e+1))/Math.max(t.width,t.height),v=Math.round(t.width*l)+2*e,f=Math.round(t.height*l)+2*e,u=[],m=0,h=a;m<h.length;m++){var y=h[m];if(y&&y.length>1){for(var x=[],s=0,g=y;s<g.length;s++){var M=g[s],d=M[0],c=M[1];d-=t.x,c-=t.y,d*=l,c*=l,d+=e-.5,c+=e-.5,x.push([d,c])}if(r.asFill){var p=x.length-1;x[0][0]===x[p][0]&&x[0][1]===x[p][1]||x.push(x[0])}u.push(x)}}var b=function(r,n,a,t){for(var o=n*a,e=new Array(o),i=t*t+1,l=0;l<o;++l)e[l]=i;for(var v=0,f=r;v<f.length;v++){var u=f[v],m=u.length;for(l=1;l<m;++l){var h=u[l-1],y=u[l],x=void 0,s=void 0;h[0]<y[0]?(x=h[0],s=y[0]):(x=y[0],s=h[0]);var g=void 0,M=void 0;h[1]<y[1]?(g=h[1],M=y[1]):(g=y[1],M=h[1]);var d=Math.floor(x)-t,c=Math.floor(s)+t,p=Math.floor(g)-t,b=Math.floor(M)+t;d<0&&(d=0),c>n&&(c=n),p<0&&(p=0),b>a&&(b=a);for(var S=y[0]-h[0],F=y[1]-h[1],I=S*S+F*F,C=d;C<c;C++)for(var w=p;w<b;w++){var k=(C-h[0])*S+(w-h[1])*F,P=void 0,D=void 0;k<0?(P=h[0],D=h[1]):k>I?(P=y[0],D=y[1]):(k/=I,P=h[0]+k*S,D=h[1]+k*F);var A=(C-P)*(C-P)+(w-D)*(w-D),G=(a-w-1)*n+C;A<e[G]&&(e[G]=A)}}}for(l=0;l<o;++l)e[l]=Math.sqrt(e[l]);return e}(u,v,f,e);return r.asFill&&function(r,n,a,t,o){for(var e=0,i=r;e<i.length;e++)for(var l=i[e],v=l.length,f=1;f<v;++f){var u=l[f-1],m=l[f],h=void 0,y=void 0;u[0]<m[0]?(h=u[0],y=m[0]):(h=m[0],y=u[0]);var x=void 0,s=void 0;u[1]<m[1]?(x=u[1],s=m[1]):(x=m[1],s=u[1]);var g=Math.floor(h),M=Math.floor(y)+1,d=Math.floor(x),c=Math.floor(s)+1;g<t&&(g=t),M>n-t&&(M=n-t),d<t&&(d=t),c>a-t&&(c=a-t);for(var p=d;p<c;++p)if(u[1]>p!=m[1]>p){for(var b=(a-p-1)*n,S=g;S<M;++S)S<(m[0]-u[0])*(p-u[1])/(m[1]-u[1])+u[0]&&(o[b+S]=-o[b+S]);for(S=t;S<g;++S)o[b+S]=-o[b+S]}}}(u,v,f,e,b),[i(b,e),v,f]}}));