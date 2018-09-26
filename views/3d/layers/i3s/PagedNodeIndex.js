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

define(["require","exports","../../../../geometry/support/aaBoundingBox","../../lib/gl-matrix","../../support/orientedBoundingBox","../../support/projectionUtils"],function(e,t,r,n,i,a){function s(e,t,n){var a=e.index;if(a.hasNodes(0,1)){var s=e.queue;s.length=0,s.push(0);var o=e.masks;for(o.length=0,o.push(0);s.length>0;){var p=s.pop(),h=o.pop(),g=a.getNode(p),f=a.getRenderObb(p),c=!0;if(null!=t.clippingBox){var d=1<<t.frustumPlanes.length;if(0==(h&d)){var l=i.toAaBoundingBox(f,e.tempAabb);r.contains(t.clippingBox,l)?h|=d:r.intersects(t.clippingBox,l)||(c=!1)}}for(var b=0;b<t.frustumPlanes.length&&c;b++){var d=1<<b;if(0==(h&d)){var v=i.intersectPlane(f,t.frustumPlanes[b]);v>0?c=!1:v<0&&(h|=d)}}if(n.predicate(p,g,c)){for(var S=g.firstChild,_=g.childCount,y=!1,m=u(S,a.pageSize),z=u(S+_-1,a.pageSize),R=m;R<=z;R++)if(!a.hasPage(R)){n.pageMiss(p,R),y=!0;break}if(!y)for(var b=0;b<_;b++)s.push(S+b),o.push(h)}}}}function o(e,t,r,s){for(var o=new i.ObbArray(e.length),p=0;p<e.length;p++){var u=e[p].obb,h=o.obbs[p];if(i.set(u,h),n.vec3d.set3(u.center[0],u.center[1],u.center[2]+s,g),!t.isGeographic&&r===a.SphericalECEFSpatialReference){a.computeLinearTransformation(t,g,c,r);var f=2*Math.sqrt(1+c[0]+c[5]+c[10]);d[0]=(c[9]-c[6])/f,d[1]=(c[2]-c[8])/f,d[2]=(c[4]-c[1])/f,d[3]=.25*f,n.quat4.conjugate(d),n.quat4.multiply(d,h.quaternion,h.quaternion)}a.bufferToBuffer(g,t,0,h.center,r,0,1)}return o.obbs}function p(e,t){for(var r=[0];r.length;)for(var n=r.pop(),i=e[u(n,t)].nodes[h(n,t)],a=0;a<i.childCount;a++){var s=i.firstChild+a;null!=e[u(s,t)]&&(e[u(s,t)].parents[h(s,t)]=n,r.push(s))}}function u(e,t){return e/t|0}function h(e,t){return e%t}var g=n.vec3d.create(),f=function(){function e(e,t,r){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=r}return e.prototype.addPage=function(e,t,r){for(void 0===r&&(r=0);this._pages.length<e;)this._pages.push(null);var n=o(t,this._nodeSR,this._renderSR,r);this._pages[e]={nodes:t,renderObbs:n,parents:new Uint32Array(this.pageSize)},p(this._pages,this.pageSize)},e.prototype.hasPage=function(e){return!!this._pages[e]},e.prototype.getNode=function(e){var t=this.pageSize;return this._pages[u(e,t)].nodes[h(e,t)]},e.prototype.getRenderObb=function(e){var t=this.pageSize;return this._pages[u(e,t)].renderObbs[h(e,t)]},e.prototype.getRenderCenter=function(e){return this.getRenderObb(e).center},e.prototype.setRenderObb=function(e,t){var r=this.pageSize;i.set(t,this._pages[u(e,r)].renderObbs[h(e,r)])},e.prototype.getParentId=function(e){var t=this.pageSize;return this._pages[u(e,t)].parents[h(e,t)]},e.prototype.hasNodes=function(e,t){for(var r=u(e,this.pageSize),n=u(e+t-1,this.pageSize),i=r;i<=n;i++)if(null==this._pages[i])return!1;return!0},e.prototype.createVisibilityTraverse=function(){var e={index:this,queue:[],masks:[],tempAabb:r.create()};return function(t,r){return s(e,t,r)}},e}(),c=n.mat4d.create(),d=n.quat4.create();return f});