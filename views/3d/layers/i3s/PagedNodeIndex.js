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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/support/aaBoundingBox","../../support/orientedBoundingBox","../../support/projectionUtils"],function(e,t,r,n,i,a){function s(e,t,r){var a=e.index;if(a.hasNodes(0,1)){var s=e.queue;s.length=0,s.push(0);var o=e.masks;for(o.length=0,o.push(0);s.length>0;){var p=s.pop(),h=o.pop(),g=a.getNode(p),f=a.getRenderObb(p),c=!0;if(null!=t.clippingBox){var l=1<<t.frustumPlanes.length;if(0==(h&l)){var d=i.toAaBoundingBox(f,e.tempAabb);n.contains(t.clippingBox,d)?h|=l:n.intersects(t.clippingBox,d)||(c=!1)}}for(var b=0;b<t.frustumPlanes.length&&c;b++){var l=1<<b;if(0==(h&l)){var v=i.intersectPlane(f,t.frustumPlanes[b]);v>0?c=!1:v<0&&(h|=l)}}if(r.predicate(p,g,c)){for(var S=g.firstChild,_=g.childCount,m=!1,y=u(S,a.pageSize),z=u(S+_-1,a.pageSize),R=y;R<=z;R++)if(!a.hasPage(R)){r.pageMiss(p,R),m=!0;break}if(!m)for(var b=0;b<_;b++)s.push(S+b),o.push(h)}}}}function o(e,t,n,s){for(var o=new i.ObbArray(e.length),p=0;p<e.length;p++){var u=e[p].obb,h=o.obbs[p];if(i.set(u,h),r.vec3.set(g,u.center[0],u.center[1],u.center[2]+s),!t.isGeographic&&n===a.SphericalECEFSpatialReference){a.computeLinearTransformation(t,g,c,n);var f=2*Math.sqrt(1+c[0]+c[5]+c[10]);l[0]=(c[9]-c[6])/f,l[1]=(c[2]-c[8])/f,l[2]=(c[4]-c[1])/f,l[3]=.25*f,r.quat.conjugate(l,l),r.quat.multiply(h.quaternion,l,h.quaternion)}a.bufferToBuffer(g,t,0,h.center,n,0,1)}return o.obbs}function p(e,t){for(var r=[0];r.length;)for(var n=r.pop(),i=e[u(n,t)].nodes[h(n,t)],a=0;a<i.childCount;a++){var s=i.firstChild+a;null!=e[u(s,t)]&&(e[u(s,t)].parents[h(s,t)]=n,r.push(s))}}function u(e,t){return e/t|0}function h(e,t){return e%t}var g=r.vec3f64.create(),f=function(){function e(e,t,r){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=r}return e.prototype.addPage=function(e,t,r){for(void 0===r&&(r=0);this._pages.length<e;)this._pages.push(null);var n=o(t,this._nodeSR,this._renderSR,r);this._pages[e]={nodes:t,renderObbs:n,parents:new Uint32Array(this.pageSize)},p(this._pages,this.pageSize)},e.prototype.hasPage=function(e){return!!this._pages[e]},e.prototype.getNode=function(e){var t=this.pageSize;return this._pages[u(e,t)].nodes[h(e,t)]},e.prototype.getRenderObb=function(e){var t=this.pageSize;return this._pages[u(e,t)].renderObbs[h(e,t)]},e.prototype.getRenderCenter=function(e){return this.getRenderObb(e).center},e.prototype.setRenderObb=function(e,t){var r=this.pageSize;i.set(t,this._pages[u(e,r)].renderObbs[h(e,r)])},e.prototype.getParentId=function(e){var t=this.pageSize;return this._pages[u(e,t)].parents[h(e,t)]},e.prototype.hasNodes=function(e,t){for(var r=u(e,this.pageSize),n=u(e+t-1,this.pageSize),i=r;i<=n;i++)if(null==this._pages[i])return!1;return!0},e.prototype.createVisibilityTraverse=function(){var e={index:this,queue:[],masks:[],tempAabb:n.create()};return function(t,r){return s(e,t,r)}},e}(),c=r.mat4f64.create(),l=r.quatf32.create();return f});