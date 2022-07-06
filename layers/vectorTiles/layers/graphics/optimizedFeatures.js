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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Logger"],(function(e,r,t,n){Object.defineProperty(r,"__esModule",{value:!0});var o=n.getLogger("esri.tasks.support.optimizedFeatureSet"),s={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},a=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s},i=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2]},u=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2],e[t+3]=r[n+3]};function h(e,r){var t=e.scale,n=e.translate;return Math.round((r-n[0])/t[0])}function l(e,r){var t=e.scale,n=e.translate;return Math.round((n[1]-r)/t[1])}function c(e,r){var t=e.scale,n=e.translate;return r*t[0]+n[0]}function f(e,r){var t=e.scale;return e.translate[1]-r*t[1]}r.quantizeX=h,r.quantizeY=l,r.hydrateX=c,r.hydrateY=f;var g=function(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1};r.OptimizedFeatureSet=g;var d=function(e,r){void 0===e&&(e=[]),void 0===r&&(r=[]),this.lengths=e,this.coords=r};r.OptimizedGeometry=d;var m=function(e,r,t){void 0===e&&(e=null),void 0===r&&(r={}),this.geometry=e,this.attributes=r,t&&(this.centroid=t)};function v(e){var r=e.coords;return{x:r[0],y:r[1]}}function I(e){var r=new d;return r.coords[0]=e.x,r.coords[1]=e.y,r}function y(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2]}}function p(e){var r=new d;return r.coords[0]=e.x,r.coords[1]=e.y,r.coords[2]=e.z,r}function N(e){var r=e.coords;return{x:r[0],y:r[1],m:r[2]}}function T(e){var r=new d;return r.coords[0]=e.x,r.coords[1]=e.y,r.coords[2]=e.m,r}function b(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function F(e){var r=new d;return r.coords[0]=e.x,r.coords[1]=e.y,r.coords[2]=e.z,r.coords[3]=e.m,r}function M(e,r,t){for(var n=r?t?4:3:t?3:2,o=[],s=0;s<e.coords.length;s+=n){for(var a=[],i=0;i<n;i++)a.push(e.coords[s+i]);o.push(a)}return r?t?{points:o,hasZ:r,hasM:t}:{points:o,hasZ:r}:t?{points:o,hasM:t}:{points:o}}function G(e,r,t){for(var n=r?t?4:3:t?3:2,o=e.coords,s=[],a=0,i=0,u=e.lengths;i<u.length;i++){for(var h=u[i],l=[],c=0;c<h;c++){for(var f=[],g=0;g<n;g++)f.push(o[a++]);l.push(f)}s.push(l)}return r?t?{paths:s,hasZ:r,hasM:t}:{paths:s,hasZ:r}:t?{paths:s,hasM:t}:{paths:s}}function E(e,r,t){for(var n=r?t?4:3:t?3:2,o=e.coords,s=[],a=0,i=0,u=e.lengths;i<u.length;i++){for(var h=u[i],l=[],c=0;c<h;c++){for(var f=[],g=0;g<n;g++)f.push(o[a++]);l.push(f)}s.push(l)}return r?t?{rings:s,hasZ:r,hasM:t}:{rings:s,hasZ:r}:t?{rings:s,hasM:t}:{rings:s}}function w(e,r,n,s){if(!r)return[];switch(r){case"esriGeometryPoint":return function(e,r,t){var n=I;t&&r?n=F:t?n=p:r&&(n=T);for(var o=[],s=0,a=e;s<a.length;s++){var i=a[s],u=i.geometry,h=i.attributes,l=u?n(u):void 0;o.push(new m(l,h))}return o}(e,n,s);case"esriGeometryMultipoint":return function(e,r,t){for(var n=r?t?4:3:t?3:2,o=[],s=0,a=e;s<a.length;s++){var i=a[s],u=i.geometry,h=i.attributes,l=void 0;if(u){(l=new d).lengths[0]=u.points.length;for(var c=l.coords,f=0,g=0,v=u.points;g<v.length;g++)for(var I=v[g],y=0;y<n;y++)c[f++]=I[y]}o.push(new m(l,h))}return o}(e,n,s);case"esriGeometryPolyline":return function(e,r,t){for(var n=r?t?4:3:t?3:2,o=[],s=0,a=e;s<a.length;s++){var i=a[s],u=i.geometry,h=i.attributes,l=void 0;if(u)for(var c=(l=new d).lengths,f=l.coords,g=0,v=0,I=u.paths;v<I.length;v++){for(var y=I[v],p=0,N=y;p<N.length;p++)for(var T=N[p],b=0;b<n;b++)f[g++]=T[b];c.push(y.length)}o.push(new m(l,h))}return o}(e,n,s);case"esriGeometryPolygon":return function(e,r,t){for(var n=r?t?4:3:t?3:2,o=[],s=0,a=e;s<a.length;s++){var i=a[s],u=i.geometry,h=i.centroid,l=i.attributes,c=void 0;if(u)for(var f=(c=new d).lengths,g=c.coords,v=0,y=0,p=u.rings;y<p.length;y++){for(var N=p[y],T=0,b=N;T<b.length;T++)for(var F=b[T],M=0;M<n;M++)g[v++]=F[M];f.push(N.length)}h?o.push(new m(c,l,I(h))):o.push(new m(c,l))}return o}(e,n,s);default:return o.error("convertToFeatureSet:unknown-geometry",new t("Unable to parse unknown geometry type "+r)),[]}}function P(e,r,t,n,o,c){var f,g,d,m,v=s[o],I=r.coords,y=r.lengths,p=t?n?4:3:n?3:2,N=t?n?u:i:n?i:a;if(e.lengths.length=0,e.coords.length=0,!I.length)return e;if(!y.length)return N(e.coords,I,0,0,h(c,I[0]),l(c,I[1])),e.lengths.length=0,e.coords.length=p,e;for(var T=0,b=0,F=b,M=0,G=y;M<G.length;M++){var E=G[M];if(!(E<v)){var w=0;b=F,d=f=h(c,I[T]),m=g=l(c,I[T+1]),N(e.coords,I,b,T,d,m),w++,T+=p,b+=p;for(var P=1;P<E;P++,T+=p)d=h(c,I[T]),m=l(c,I[T+1]),d===f&&m===g||(N(e.coords,I,b,T,d-f,m-g),b+=p,w++,f=d,g=m);w>=v&&(e.lengths.push(w),F=b)}}return e.coords.length=F,e.coords.length?e:null}function z(e,r,t,n,o){var s=r.coords,h=r.lengths,l=t?n?u:i:n?i:a,g=t?n?4:3:n?3:2;if(!s.length)return e.lengths.length=0,e.coords.length=0,e;if(!h.length)return l(e.coords,s,0,0,c(o,s[0]),f(o,s[1])),e.lengths.length=0,e.coords.length=g,e;for(var d=o.scale,m=d[0],v=d[1],I=0,y=0;y<h.length;y++){var p=h[y];e.lengths[y]=p;var N=c(o,s[I]),T=f(o,s[I+1]);l(e.coords,s,I,I,N,T),I+=g;for(var b=1;b<p;b++,I+=g)N+=s[I]*m,T-=s[I+1]*v,l(e.coords,s,I,I,N,T)}return e.lengths.length=h.length,e.coords.length=s.length,e}function O(e,r,t,n,o,s){for(var a=o?s?4:3:s?3:2,i=t,u=t+a,h=0,l=0,c=0,f=0,g=0,d=0,m=n-1;d<m;d++,i+=a,u+=a){var v=r[i],I=r[i+1],y=r[i+2],p=r[u],N=r[u+1],T=r[u+2],b=v*N-p*I;f+=b,h+=(v+p)*b,l+=(I+N)*b,o&&(c+=(y+T)*(b=v*T-p*y),g+=b),v<e[0]&&(e[0]=v),v>e[1]&&(e[1]=v),I<e[2]&&(e[2]=I),I>e[3]&&(e[3]=I),o&&(y<e[4]&&(e[4]=y),y>e[5]&&(e[5]=y))}if(f>0&&(f*=-1),g>0&&(g*=-1),!f)return null;var F=[h,l,.5*f];return o&&(F[3]=c,F[4]=.5*g),F}function x(e,r,t,n,o){for(var s=n?o?4:3:o?3:2,a=r,i=r+s,u=0,h=0,l=0,c=0,f=0,g=t-1;f<g;f++,a+=s,i+=s){var d,m=e[a],v=e[a+1],I=e[a+2],y=e[i],p=e[i+1],N=e[i+2],T=n?_(m,v,I,y,p,N):Y(m,v,y,p);if(T)if(u+=T,n)h+=T*(d=V(m,v,I,y,p,N))[0],l+=T*d[1],c+=T*d[2];else h+=T*(d=S(m,v,y,p))[0],l+=T*d[1]}return u>0?n?[h/u,l/u,c/u]:[h/u,l/u]:t>0?n?[e[r],e[r+1],e[r+2]]:[e[r],e[r+1]]:null}function Y(e,r,t,n){var o=t-e,s=n-r;return Math.sqrt(o*o+s*s)}function _(e,r,t,n,o,s){var a=n-e,i=o-r,u=s-t;return Math.sqrt(a*a+i*i+u*u)}function S(e,r,t,n){return[e+.5*(t-e),r+.5*(n-r)]}function V(e,r,t,n,o,s){return[e+.5*(n-e),r+.5*(o-r),t+.5*(s-t)]}r.OptimizedFeature=m,r.convertToPoint=function(e,r,t){return r?t?b(e):y(e):t?N(e):v(e)},r.convertToMultipoint=M,r.convertToPolyline=G,r.convertToPolygon=E,r.convertFromFeatures=w,r.convertToFeatureSet=function(e){var r=[],n=e.objectIdFieldName,s=e.spatialReference,a=e.transform,i=e.fields,u=e.hasM,h=e.hasZ,l=e.features,c=e.geometryType,f=e.exceededTransferLimit;switch(c){case"esriGeometryPoint":r=function(e,r,t){var n=v;t&&r?n=b:t?n=y:r&&(n=N);for(var o=[],s=0,a=e;s<a.length;s++){var i=a[s],u=i.geometry,h=i.attributes,l=u?n(u):null;o.push({attributes:h,geometry:l})}return o}(l,h,u);break;case"esriGeometryMultipoint":r=function(e,r,t){for(var n=[],o=0,s=e;o<s.length;o++){var a=s[o],i=a.geometry,u=a.attributes,h=void 0;i&&(h=M(i,r,t)),n.push({attributes:u,geometry:h})}return n}(l,h,u);break;case"esriGeometryPolyline":r=function(e,r,t){for(var n=[],o=0,s=e;o<s.length;o++){var a=s[o],i=a.geometry,u=a.attributes,h=void 0;i&&(h=G(i,r,t)),n.push({attributes:u,geometry:h})}return n}(l,h,u);break;case"esriGeometryPolygon":r=function(e,r,t){for(var n=[],o=0,s=e;o<s.length;o++){var a=s[o],i=a.geometry,u=a.attributes,h=a.centroid,l=void 0;if(i&&(l=E(i,r,t)),h){var c=v(h);n.push({attributes:u,centroid:c,geometry:l})}else n.push({attributes:u,geometry:l})}return n}(l,h,u);break;default:o.error("convertToFeatureSet:unknown-geometry",new t("Unable to parse unknown geometry type "+c))}var g={features:r,fields:i,geometryType:c,objectIdFieldName:n,spatialReference:s};return a&&(g.transform=a),f&&(g.exceededTransferLimit=f),u&&(g.hasM=u),h&&(g.hasZ=h),g},r.convertFromFeatureSet=function(e){var r=new g,t=e.hasM,n=e.hasZ,o=e.features,s=e.objectIdFieldName,a=e.spatialReference,i=e.geometryType,u=e.exceededTransferLimit,h=e.transform;return r.fields=e.fields,r.geometryType=i,r.objectIdFieldName=s,r.spatialReference=a,r.features=w(o,i,n,t),u&&(r.exceededTransferLimit=u),t&&(r.hasM=t),n&&(r.hasZ=n),h&&(r.transform=h),r},r.hydrateOptimizedFeatureSet=function(e){var r=e.transform,t=e.features,n=e.hasM,o=e.hasZ;if(!r)return e;for(var s=0,a=t;s<a.length;s++){var i=a[s];z(i.geometry,i.geometry,n,o,r),i.centroid&&z(i.centroid,i.centroid,n,o,r)}return e.transform=null,e},r.quantizeOptimizedFeatureSet=function(e,r){var n=r.geometryType,s=r.features,a=r.hasM,i=r.hasZ;if("esriGeometryEnvelope"===n)return o.error(new t("optimized-features:invalid-geometry-type",'FeatureSet with geometry type "'+n+'" is not supported')),r;if(!e)return r;for(var u=0;u<s.length;u++){var h=s[u],l=new m(new d,h.attributes);P(l.geometry,h.geometry,a,i,n,e),h.centroid&&(l.centroid=new d,P(l.centroid,h.centroid,a,i,"esriGeometryPoint",e)),s[u]=l}return r.transform=e,r},r.quantizeOptimizedGeometry=P,r.quantizeOptimizedGeometryRemoveCollinear=function(e,r,t,n,o,c){var f,g,d,m,v=s[o],I=r.coords,y=r.lengths,p=t?n?4:3:n?3:2,N=t?n?u:i:n?i:a;if(e.lengths.length=0,e.coords.length=0,!I.length)return e;if(!y.length)return N(e.coords,I,0,0,h(c,I[0]),l(c,I[1])),e.lengths.length=0,e.coords.length=p,e;for(var T=0,b=0,F=b,M=0,G=y;M<G.length;M++){var E=G[M];if(!(E<v)){var w=0;b=F,d=f=h(c,I[T]),m=g=l(c,I[T+1]),N(e.coords,I,b,T,d,m),w++,T+=p;for(var P=!1,z=0,O=0,x=1;x<E;x++,T+=p)if(d=h(c,I[T]),m=l(c,I[T+1]),d!==f||m!==g){var Y=d-f,_=m-g;P&&(0===z&&0===Y||0===O&&0===_)?(z+=Y,O+=_,N(e.coords,I,b,T,z,O)):(P=!0,z=Y,O=_,b+=p,w++,N(e.coords,I,b,T,z,O)),f=d,g=m}P&&(b+=p,N(e.coords,I,b,T,z,O)),w>=v&&(e.lengths.push(w),F=b)}}return e.coords.length=F,e.coords.length?e:null},r.getBoundsOptimizedGeometry=function(e,r,t,n){for(var o=t?n?4:3:n?3:2,s=r.coords,a=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY,l=0;l<s.length;l+=o){var c=s[l],f=s[l+1];a=Math.min(a,c),u=Math.max(u,c),i=Math.min(i,f),h=Math.max(h,f)}return e[0]=a,e[1]=i,e[2]=u,e[3]=h,e},r.getQuantizedBoundsOptimizedGeometry=function(e,r,t,n){for(var o=t?n?4:3:n?3:2,s=r.lengths,a=r.coords,i=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY,c=0,f=0,g=s;f<g.length;f++){var d=g[f],m=a[c],v=a[c+1];i=Math.min(m,i),u=Math.min(v,u),h=Math.max(m,h),l=Math.max(v,l),c+=o;for(var I=1;I<d;I++,c+=o){var y=a[c],p=a[c+1];m+=y,v+=p,y<0&&(i=Math.min(i,m)),y>0&&(h=Math.max(h,m)),p<0?u=Math.min(u,v):p>0&&(l=Math.max(l,v))}}return e[0]=i,e[1]=u,e[2]=h,e[3]=l,e},r.hydrateOptimizedGeometry=z,r.getCentroidOptimizedGeometry=function(e,r,t,n){if(!r||!r.lengths.length)return null;e.lengths.length=0,e.coords.length=0;for(var o=e.coords,s=[],a=t?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],i=r.lengths,u=r.coords,h=t?n?4:3:n?3:2,l=0,c=0,f=i;c<f.length;c++){var g=f[c],d=O(a,u,l,g,t,n);d&&s.push(d),l+=g*h}if(s.sort((function(e,r){var n=e[2]-r[2];return 0===n&&t&&(n=e[4]-r[4]),n})),s.length){var m=6*s[0][2];o[0]=s[0][0]/m,o[1]=s[0][1]/m,t&&(m=6*s[0][4],o[2]=0!==m?s[0][3]/m:0),(o[0]<a[0]||o[0]>a[1]||o[1]<a[2]||o[1]>a[3]||t&&(o[2]<a[4]||o[2]>a[5]))&&(o.length=0)}if(!o.length){var v=r.lengths[0]?x(u,0,i[0],t,n):null;if(!v)return null;o[0]=v[0],o[1]=v[1],t&&v.length>2&&(o[2]=v[2])}return e},r.lineCentroid=x,r.getLength2D=Y,r.getLength3D=_,r.getMidpoint2D=S,r.getMidpoint3D=V}));