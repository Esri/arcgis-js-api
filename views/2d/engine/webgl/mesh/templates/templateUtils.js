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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/libs/earcut/earcut","../../../../../../layers/graphics/OptimizedGeometry","../../definitions","../../TileClipper","../bufcut","../Tesselator"],(function(r,e,o,t,n,a,s,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.clip=e.clipMarshall=e.triangulateLibtess=e.triangulateEarcut=e.triangulate=e.triangleArea=e.area=void 0;var u=new l.default,i=new a.TileClipper(0,0,0,1,128);function c(r,e,o){for(var t=0,n=1;n<o;n++){var a=r[2*(e+n-1)],s=r[2*(e+n-1)+1];t+=(r[2*(e+n)]-a)*(r[2*(e+n)+1]+s)}return t}function d(r,e,o,t,n){for(var a=0,s=o;s<t;s+=3){var l=2*(r.getValue(s)-n),u=2*(r.getValue(s+1)-n),i=2*(r.getValue(s+2)-n);a+=Math.abs((e[l]-e[i])*(e[u+1]-e[l+1])-(e[l]-e[u])*(e[i+1]-e[l+1]))}return a}function f(r,e,o,t,n,a,s,l){var u=((r-n)*(a-l)-(e-l)*(n-s))/((r-o)*(a-l)-(e-t)*(n-s));return u<0||u>1?null:{x:Math.round(r+u*(o-r)),y:Math.round(e+u*(t-e))}}i.setExtent(n.TILE_SIZE),e.area=c,e.triangleArea=d,e.triangulate=function(r,e,o){var t=e.coords,n=e.lengths;if(e.hasIndeterminateRingOrder)return!1;for(var a=r.length,l=0,u=0;u<n.length;){for(var i=u,f=n[u],g=c(t,l,f),h=[];++i<n.length;){var v=n[i],p=c(t,l+f,v);if(!(p>0))break;g+=p,h.push(l+f),f+=v}var b=r.length;s.bufcut(r,t,l,l+f,h,2,o);var y=d(r,t,b,r.length,o),M=Math.abs(g);if(Math.abs((y-M)/Math.max(1e-7,M))>1e-5)return r.seek(a),!1;u=i,l+=f}return!0},e.triangulateEarcut=function(r,e,t){var n=e.coords,a=e.lengths;if(e.hasIndeterminateRingOrder)return!1;for(var s=0,l=0;l<a.length;){for(var u=l,i=a[l],d=[];++u<a.length;){var f=a[u];if(!(c(n,s+i,f)>0))break;d.push(s+i-s),i+=f}for(var g=s+i,h=e.coords.slice(2*s,2*g),v=0,p=o.earcut(h,d,2);v<p.length;v++){var b=p[v];r.push(b+t+s)}l=u,s+=i}return!0},e.triangulateLibtess=function(r,e,o,t){var n=[],a=o.coords,s=o.lengths;u.beginPolygon(r,n);for(var l=0,i=0;i<s.length;i++){var c=o.lengths[i];u.beginContour();for(var d=0;d<c;d++){var f=[a[2*(l+d)],a[2*(l+d)+1],0];u.addVertex(f,f)}u.endContour(),l+=c}for(u.endPolygon(),d=0;d<n.length;d++)e.push(n[d]+t)},e.clipMarshall=function(r){if(!function(r,e,o){for(var t=0,n=0;n<r.lengths.length;n++){for(var a=r.lengths[n],s=0;s<a;s++){var l=r.coords[2*(s+t)],u=r.coords[2*(s+t)+1];if(l<e||l>o||u<e||u>o)return!0}t+=a}return!1}(r,-128,n.TILE_SIZE+128))return r;i.reset(3);for(var e=0,o=0;o<r.lengths.length;o++){var a=r.lengths[o],s=r.coords[2*(0+e)],l=r.coords[2*(0+e)+1];i.moveTo(s,l);for(var u=1;u<a;u++)s=r.coords[2*(u+e)],l=r.coords[2*(u+e)+1],i.lineTo(s,l);i.close(),e+=a}var c=i.result(!1);if(!c)return null;for(var d=[],f=[],g=0,h=c;g<h.length;g++){for(var v=0,p=0,b=o=h[g];p<b.length;p++){var y=b[p];f.push(y.x),f.push(y.y),v++}d.push(v)}return new t.default(d,f)},e.clip=function(r,e,o){void 0===o&&(o=0);for(var t=-o,n=e+o,a=0,s=0,l=0,u=0;u<r.lengths.length;u++){for(var i=r.lengths[u],c=l+i,d=0,g=null;a!==c;){for(var h=r.coords[2*a],v=r.coords[2*a+++1],p=h<t||h>=n||v<t||v>=n,b=p;a!==c&&p===b;)p||(r.coords[2*s]=h,r.coords[2*s+++1]=v,d++),h=r.coords[2*a],v=r.coords[2*a+++1],p=h<t||h>=n||v<t||v>=n;if(a!==c){var y=r.coords[2*(a-2)],M=r.coords[2*(a-2)+1],x=f(y,M,h,v,t,t,n,t)||f(y,M,h,v,n,t,n,n)||f(y,M,h,v,n,n,t,n)||f(y,M,h,v,t,t,t,n);x&&(r.coords[2*s]=x.x,r.coords[2*s+++1]=x.y,d++,g||(g=x)),p||(r.coords[2*s]=h,r.coords[2*s+++1]=v,d++)}else p?g&&(r.coords[2*s]=g.x,r.coords[2*s+++1]=g.y,d++):(r.coords[2*s]=h,r.coords[2*s+++1]=v,d++)}r.lengths[u]=d,l+=i}}}));