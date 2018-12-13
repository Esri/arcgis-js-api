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

define(["require","exports","../../../core/PooledArray","../../../core/libs/gl-matrix-2/gl-matrix","./UpsampleInfo","../webgl-engine/materials/internal/MaterialUtil"],function(t,e,r,i,n,a){function s(t){return t[0]+"/"+t[1]+"/"+t[2]}function o(t){return s(t.lij)}function l(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)f(t[r],e);else f(t,e)}function f(t,e){e(t);for(var r=0;r<4;r++){var i=t.children[r];i&&f(i,e)}}function u(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)c(t[r],e);else c(t,e)}function c(t,e){for(var r=0;r<4;r++){var i=t.children[r];i&&c(i,e)}e(t)}function h(t,e,r){if(!e)return!1;var i=e.fullExtent,n=t.extent;if(r){if(n[0]<i.xmin||n[1]<i.ymin||n[2]>i.xmax||n[3]>i.ymax)return!1}else if(i.xmin>n[2]||i.ymin>n[3]||i.xmax<n[0]||i.ymax<n[1])return!1;var a=t.parentSurface.tilingScheme.levels[t.lij[0]].scale;return!(e.minScale>0&&a>1.00000001*e.minScale)&&!(e.maxScale>0&&a<.99999999*e.maxScale)}function v(t,e){var r=t.extent;return e[0]>=r[0]&&e[1]>=r[1]&&e[0]<=r[2]&&e[1]<=r[3]}function p(t,e){for(;e--;)t=t.parent;return t}function d(t,e){var r=t.lij[0]-e.lij[0]-1,i=t.lij[1]>>r,n=t.lij[2]>>r,a=0;return 1&i&&(a+=2),1&n&&(a+=1),e.children[a]}function m(t,e){for(var r=1,i=0,a=0;t!==e;)if(r*=.5,i*=.5,a*=.5,1&t.lij[2]&&(i+=.5),0==(1&t.lij[1])&&(a+=.5),null==(t=t.parent))throw new Error("tile was not a descendant of ancestorTile");var s=n.Pool.acquire();return s.init(e,i,a,r),s}function q(t){for(var e=0;e<t.length;e++){var r=t[e],i=r.parent;if(i)for(var n=0;n<4;n++){var a=i.children[n];if(a&&a!==r&&a.visible)return!0}}return!1}function x(t,e,r,n,s,o,l,f,u){for(var c=o.data,h=o.offsetIdx,v=o.strideIdx,p=t[0],d=t[1],m=t[2],q=e[0],x=e[1],y=e[2],g=q-p,S=x-d,P=y-m,b=r;b<n;b++){var w=l?l[b]:b,I=h+v*s[3*w],T=h+v*s[3*w+1],U=h+v*s[3*w+2],M=c[I],k=c[I+1],E=c[I+2];c[I+3]>=2&&(i.vec3.set(j,M,k,E),f(j),M+=j[0],k+=j[1],E+=j[2]);var L=c[T],N=c[T+1],O=c[T+2];c[T+3]>=2&&(i.vec3.set(j,L,N,O),f(j),L+=j[0],N+=j[1],O+=j[2]);var W=c[U],F=c[U+1],V=c[U+2];c[U+3]>=2&&(i.vec3.set(j,W,F,V),f(j),W+=j[0],F+=j[1],V+=j[2]);var z=L-M,B=N-k,C=O-E,D=W-M,G=F-k,H=V-E,J=S*H-G*P,K=P*D-H*g,Q=g*G-D*S,R=z*J+B*K+C*Q,X=p-M,Y=d-k,Z=m-E,$=Y*C-B*Z,tt=Z*z-C*X,et=X*B-z*Y;if(R>_){var rt=X*J+Y*K+Z*Q;if(rt<0||rt>R)continue;var it=g*$+S*tt+P*et;if(it<0||rt+it>R)continue}else{if(!(R<-_))continue;var rt=X*J+Y*K+Z*Q;if(rt>0||rt<R)continue;var it=g*$+S*tt+P*et;if(it>0||rt+it<R)continue}var nt=(D*$+G*tt+H*et)/R;if(nt>=0){u(nt,a.computeNormal(z,B,C,D,G,H,A),w)}}}Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function t(){this.q=new r,this._last=null,this.done=!0}return t.prototype.resetOne=function(t){this.q.clear(),this.q.push(t),this._last=null,this.done=!1},t.prototype.reset=function(t){this.q.clear(),t&&this.q.pushArray(t),this._last=null,this.done=0===this.q.length},t.prototype.skipSubtree=function(){this._last=null,0===this.q.length&&(this.done=!0)},t.prototype.next=function(){if(this.done)return null;if(this._last){var t=this._last.children;if(t[0])for(var e=3;e>=0;e--){var r=t[e];r&&this.q.push(r)}}return this._last=this.q.pop(),0!==this.q.length||this._last.children[0]||(this.done=!0),this._last},t}();e.IteratorPreorder=y;var g=function(){function t(){this.q=new r,this.done=!0}return t.prototype.reset=function(t){if(this.q.clear(),t){this.q.pushArray(t);for(var e=0;e<this.q.length;++e)for(var r=this.q.data[e],i=0;i<4;i++){var n=r.children[i];n&&this.q.push(n)}}this.done=0===this.q.length},t.prototype.next=function(){var t=this.q.pop();return this.done=0===this.q.length,t},t}();e.IteratorPostorder=g,e.lij2str=s,e.tile2str=o,e.traverseTilesPreorder=l,e.traverseTilesPostorder=u,e.fallsWithinLayer=h,e.isPosWithinTile=v,e.getTileNLevelsUp=p,e.nextTileInAncestry=d,e.computeUpsampleInfoForAncestor=m,e.hasVisibleSiblings=q;var _=Math.pow(2,-52),j=i.vec3f64.create(),A=i.vec3f64.create();e.intersectSkirts=x});