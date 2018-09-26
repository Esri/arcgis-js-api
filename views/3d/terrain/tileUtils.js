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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/PooledArray","../lib/gl-matrix","./UpsampleInfo","../webgl-engine/materials/internal/MaterialUtil"],function(t,e,r,i,n,a){function o(t){return t[0]+"/"+t[1]+"/"+t[2]}function s(t){return o(t.lij)}function l(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)f(t[r],e);else f(t,e)}function f(t,e){e(t);for(var r=0;r<4;r++){var i=t.children[r];i&&f(i,e)}}function u(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)h(t[r],e);else h(t,e)}function h(t,e){for(var r=0;r<4;r++){var i=t.children[r];i&&h(i,e)}e(t)}function c(t,e,r){if(!e)return!1;var i=e.fullExtent,n=t.extent;if(r){if(n[0]<i.xmin||n[1]<i.ymin||n[2]>i.xmax||n[3]>i.ymax)return!1}else if(i.xmin>n[2]||i.ymin>n[3]||i.xmax<n[0]||i.ymax<n[1])return!1;var a=t.parentSurface.tilingScheme.levels[t.lij[0]].scale;return!(e.minScale>0&&a>1.00000001*e.minScale)&&!(e.maxScale>0&&a<.99999999*e.maxScale)}function v(t,e){var r=t.extent;return e[0]>=r[0]&&e[1]>=r[1]&&e[0]<=r[2]&&e[1]<=r[3]}function d(t,e){for(;e--;)t=t.parent;return t}function p(t,e){var r=t.lij[0]-e.lij[0]-1,i=t.lij[1]>>r,n=t.lij[2]>>r,a=0;return 1&i&&(a+=2),1&n&&(a+=1),e.children[a]}function q(t,e){for(var r=1,i=0,a=0;t!==e;)if(r*=.5,i*=.5,a*=.5,1&t.lij[2]&&(i+=.5),0==(1&t.lij[1])&&(a+=.5),null==(t=t.parent))throw new Error("tile was not a descendant of ancestorTile");var o=n.Pool.acquire();return o.init(e,i,a,r),o}function m(t){for(var e=0;e<t.length;e++){var r=t[e],i=r.parent;if(i)for(var n=0;n<4;n++){var a=i.children[n];if(a&&a!==r&&a.visible)return!0}}return!1}function x(t,e,r,n,o,s,l,f,u){for(var h=s.data,c=s.offsetIdx,v=s.strideIdx,d=t[0],p=t[1],q=t[2],m=e[0],x=e[1],y=e[2],g=m-d,A=x-p,P=y-q,b=r;b<n;b++){var w=l?l[b]:b,I=c+v*o[3*w],T=c+v*o[3*w+1],U=c+v*o[3*w+2],M=h[I],k=h[I+1],E=h[I+2];h[I+3]>=2&&(i.vec3d.set3(M,k,E,j),f(j),M+=j[0],k+=j[1],E+=j[2]);var L=h[T],N=h[T+1],O=h[T+2];h[T+3]>=2&&(i.vec3d.set3(L,N,O,j),f(j),L+=j[0],N+=j[1],O+=j[2]);var W=h[U],z=h[U+1],F=h[U+2];h[U+3]>=2&&(i.vec3d.set3(W,z,F,j),f(j),W+=j[0],z+=j[1],F+=j[2]);var V=L-M,B=N-k,C=O-E,D=W-M,G=z-k,H=F-E,J=A*H-G*P,K=P*D-H*g,Q=g*G-D*A,R=V*J+B*K+C*Q,X=d-M,Y=p-k,Z=q-E,$=Y*C-B*Z,tt=Z*V-C*X,et=X*B-V*Y;if(R>_){var rt=X*J+Y*K+Z*Q;if(rt<0||rt>R)continue;var it=g*$+A*tt+P*et;if(it<0||rt+it>R)continue}else{if(!(R<-_))continue;var rt=X*J+Y*K+Z*Q;if(rt>0||rt<R)continue;var it=g*$+A*tt+P*et;if(it>0||rt+it<R)continue}var nt=(D*$+G*tt+H*et)/R;if(nt>=0){u(nt,a.computeNormal(V,B,C,D,G,H,S),w)}}}Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function t(){this.q=new r,this._last=null,this.done=!0}return t.prototype.resetOne=function(t){this.q.clear(),this.q.push(t),this._last=null,this.done=!1},t.prototype.reset=function(t){this.q.clear(),t&&this.q.pushArray(t),this._last=null,this.done=0===this.q.length},t.prototype.skipSubtree=function(){this._last=null,0===this.q.length&&(this.done=!0)},t.prototype.next=function(){if(this.done)return null;if(this._last){var t=this._last.children;if(t[0])for(var e=3;e>=0;e--){var r=t[e];r&&this.q.push(r)}}return this._last=this.q.pop(),0!==this.q.length||this._last.children[0]||(this.done=!0),this._last},t}();e.IteratorPreorder=y;var g=function(){function t(t){void 0===t&&(t=100),this.q=new r({initialSize:t}),this.done=!0}return t.prototype.reset=function(t){if(this.q.clear(),t){this.q.pushArray(t);for(var e=0;e<this.q.length;++e)for(var r=this.q.data[e],i=0;i<4;i++){var n=r.children[i];n&&this.q.push(n)}}this.done=0===this.q.length},t.prototype.next=function(){var t=this.q.pop();return this.done=0===this.q.length,t},t}();e.IteratorPostorder=g,e.lij2str=o,e.tile2str=s,e.traverseTilesPreorder=l,e.traverseTilesPostorder=u,e.fallsWithinLayer=c,e.isPosWithinTile=v,e.getTileNLevelsUp=d,e.nextTileInAncestry=p,e.computeUpsampleInfoForAncestor=q,e.hasVisibleSiblings=m;var _=Math.pow(2,-52),j=i.vec3d.create(),S=i.vec3d.create();e.intersectSkirts=x});