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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/quat","../../../../core/libs/gl-matrix-2/quatf32","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../support/orientedBoundingBox","../../support/projectionUtils"],function(e,t,r,n,i,a,s,o,p,u){function g(e,t,r){var n=e.index;if(n.hasNodes(0,1)){var i=e.queue;i.length=0,i.push(0);var a=e.masks;for(a.length=0,a.push(0);i.length>0;){var s=i.pop(),u=a.pop(),g=n.getNode(s),h=n.getRenderObb(s),f=!0;if(null!=t.clippingBox){var l=1<<t.frustumPlanes.length;if(0==(u&l)){var d=p.toAaBoundingBox(h,e.tempAabb);o.contains(t.clippingBox,d)?u|=l:o.intersects(t.clippingBox,d)||(f=!1)}}for(var b=0;b<t.frustumPlanes.length&&f;b++){var l=1<<b;if(0==(u&l)){var v=p.intersectPlane(h,t.frustumPlanes[b]);v>0?f=!1:v<0&&(u|=l)}}if(r.predicate(s,g,f)){for(var S=g.firstChild,m=g.childCount,_=!1,x=c(S,n.pageSize),y=c(S+m-1,n.pageSize),z=x;z<=y;z++)if(!n.hasPage(z)){r.pageMiss(s,z),_=!0;break}if(!_)for(var b=0;b<m;b++)i.push(S+b),a.push(u)}}}}function h(e,t,r,i){for(var s=new p.ObbArray(e.length),o=0;o<e.length;o++){var g=e[o].obb,h=s.obbs[o];if(p.set(g,h),a.vec3.set(d,g.center[0],g.center[1],g.center[2]+i),!t.isGeographic&&r===u.SphericalECEFSpatialReference){u.computeLinearTransformation(t,d,v,r);var f=2*Math.sqrt(1+v[0]+v[5]+v[10]);S[0]=(v[9]-v[6])/f,S[1]=(v[2]-v[8])/f,S[2]=(v[4]-v[1])/f,S[3]=.25*f,n.quat.conjugate(S,S),n.quat.multiply(h.quaternion,S,h.quaternion)}u.bufferToBuffer(d,t,0,h.center,r,0,1)}return s.obbs}function f(e,t){for(var r=[0];r.length;)for(var n=r.pop(),i=e[c(n,t)].nodes[l(n,t)],a=0;a<i.childCount;a++){var s=i.firstChild+a;null!=e[c(s,t)]&&(e[c(s,t)].parents[l(s,t)]=n,r.push(s))}}function c(e,t){return e/t|0}function l(e,t){return e%t}var d=s.vec3f64.create(),b=function(){function e(e,t,r){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=r}return e.prototype.addPage=function(e,t,r){for(void 0===r&&(r=0);this._pages.length<e;)this._pages.push(null);var n=h(t,this._nodeSR,this._renderSR,r);this._pages[e]={nodes:t,renderObbs:n,parents:new Uint32Array(this.pageSize)},f(this._pages,this.pageSize)},e.prototype.hasPage=function(e){return!!this._pages[e]},e.prototype.getNode=function(e){var t=this.pageSize;return this._pages[c(e,t)].nodes[l(e,t)]},e.prototype.getRenderObb=function(e){var t=this.pageSize;return this._pages[c(e,t)].renderObbs[l(e,t)]},e.prototype.getRenderCenter=function(e){return this.getRenderObb(e).center},e.prototype.setRenderObb=function(e,t){var r=this.pageSize;p.set(t,this._pages[c(e,r)].renderObbs[l(e,r)])},e.prototype.getParentId=function(e){var t=this.pageSize;return this._pages[c(e,t)].parents[l(e,t)]},e.prototype.hasNodes=function(e,t){for(var r=c(e,this.pageSize),n=c(e+t-1,this.pageSize),i=r;i<=n;i++)if(null==this._pages[i])return!1;return!0},e.prototype.createVisibilityTraverse=function(){var e={index:this,queue:[],masks:[],tempAabb:o.create()};return function(t,r){return g(e,t,r)}},e}(),v=r.mat4f64.create(),S=i.quatf32.create();return b});