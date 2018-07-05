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

define(["require","exports","../../../core/PooledArray","./UpsampleInfo","../webgl-engine/lib/gl-matrix","../webgl-engine/materials/internal/MaterialUtil"],function(t,e,r,i,n,a){function l(t,e,r){return t+"/"+e+"/"+r}function o(t){return t.lij[0]+"/"+t.lij[1]+"/"+t.lij[2]}function s(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)f(t[r],e);else f(t,e)}function f(t,e){e(t);for(var r=0;r<4;r++){var i=t.children[r];i&&f(i,e)}}function u(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)c(t[r],e);else c(t,e)}function c(t,e){for(var r=0;r<4;r++){var i=t.children[r];i&&c(i,e)}e(t)}function h(t,e,r){if(!e)return!1;var i=e.fullExtent,n=t.extent;if(r){if(n[0]<i.xmin||n[1]<i.ymin||n[2]>i.xmax||n[3]>i.ymax)return!1}else if(i.xmin>n[2]||i.ymin>n[3]||i.xmax<n[0]||i.ymax<n[1])return!1;var a=t.parentSurface.tilingScheme.levels[t.lij[0]].scale;return!(e.minScale>0&&a>1.00000001*e.minScale)&&!(e.maxScale>0&&a<.99999999*e.maxScale)}function v(t,e){var r=t.extent;return e[0]>=r[0]&&e[1]>=r[1]&&e[0]<=r[2]&&e[1]<=r[3]}function d(t,e){for(;e>0;)t=t.parent,e--;return t}function p(t,e){var r=t.lij[0]-e.lij[0]-1,i=t.lij[1]>>r,n=t.lij[2]>>r,a=0;return 1&i&&(a+=2),1&n&&(a+=1),e.children[a]}function y(t,e){for(var r=1,n=0,a=0;t!==e;)if(r*=.5,n*=.5,a*=.5,1&t.lij[2]&&(n+=.5),0==(1&t.lij[1])&&(a+=.5),null==(t=t.parent))throw new Error("tile was not a descendant of ancestorTile");var l=i.Pool.acquire();return l.init(e,n,a,r),l}function m(t){var e;Array.isArray(t)?e=t:(j[0]=t,e=j);for(var r=0;r<e.length;r++){var i=e[r],n=i.parent;if(n)for(var a=0;a<4;a++){var l=n.children[a];if(l&&l!==i&&l.visible)return!0}}return!1}function x(t,e,r,i,l,o,s,f,u){for(var c=o.data,h=o.offsetIdx,v=o.strideIdx,d=t[0],p=t[1],y=t[2],m=e[0],x=e[1],q=e[2],g=m-d,j=x-p,w=q-y,P=r;P<i;P++){var b=s?s[P]:P,I=h+v*l[3*b],T=h+v*l[3*b+1],U=h+v*l[3*b+2],M=c[I],k=c[I+1],z=c[I+2];c[I+3]>=2&&(n.vec3d.set3(M,k,z,S),f(S),M+=S[0],k+=S[1],z+=S[2]);var E=c[T],L=c[T+1],N=c[T+2];c[T+3]>=2&&(n.vec3d.set3(E,L,N,S),f(S),E+=S[0],L+=S[1],N+=S[2]);var W=c[U],F=c[U+1],O=c[U+2];c[U+3]>=2&&(n.vec3d.set3(W,F,O,S),f(S),W+=S[0],F+=S[1],O+=S[2]);var V=E-M,B=L-k,C=N-z,D=W-M,G=F-k,H=O-z,J=j*H-G*w,K=w*D-H*g,Q=g*G-D*j,R=V*J+B*K+C*Q,X=d-M,Y=p-k,Z=y-z,$=Y*C-B*Z,tt=Z*V-C*X,et=X*B-V*Y;if(R>A){var rt=X*J+Y*K+Z*Q;if(rt<0||rt>R)continue;var it=g*$+j*tt+w*et;if(it<0||rt+it>R)continue}else{if(!(R<-A))continue;var rt=X*J+Y*K+Z*Q;if(rt>0||rt<R)continue;var it=g*$+j*tt+w*et;if(it>0||rt+it<R)continue}var nt=(D*$+G*tt+H*et)/R;if(nt>=0){u(nt,a.computeNormal(V,B,C,D,G,H,_),b)}}}Object.defineProperty(e,"__esModule",{value:!0});var q=function(){function t(t){void 0===t&&(t=100),this.q=new r({initialSize:t}),this._last=null,this.done=!0}return t.prototype.reset=function(t){this.q.clear(),t&&this.q.pushAny(t),this._last=null,this.done=0===this.q.length},t.prototype.skip=function(){this._last=null,0===this.q.length&&(this.done=!0)},t.prototype.next=function(){if(this.done)return null;if(null!==this._last){var t=this._last.children;if(t[0])for(var e=4;e>=0;e--){var r=t[e];r&&this.q.push(r)}}return this._last=this.q.pop(),0!==this.q.length||this._last.children[0]||(this.done=!0),this._last},t}();e.IteratorPreorder=q;var g=function(){function t(t){void 0===t&&(t=100),this.q=new r({initialSize:t}),this.done=!0}return t.prototype.reset=function(t){this.q.clear(),this.q.pushAny(t);for(var e=0;e<this.q.length;)for(var r=this.q.data[e++],i=0;i<4;i++){var n=r.children[i];n&&this.q.push(n)}this.done=0===this.q.length},t.prototype.next=function(){var t=this.q.pop();return this.done=0===this.q.length,t},t}();e.IteratorPostorder=g,e.lij2str=l,e.tile2str=o,e.traverseTilesPreorder=s,e.traverseTilesPostorder=u,e.fallsWithinLayer=h,e.isPosWithinTile=v,e.getTileNLevelsUp=d,e.nextTileInAncestry=p,e.computeUpsampleInfoForAncestor=y;var j=[null];e.hasVisibleSiblings=m;var A=Math.pow(2,-52),S=n.vec3d.create(),_=n.vec3d.create();e.intersectSkirts=x});