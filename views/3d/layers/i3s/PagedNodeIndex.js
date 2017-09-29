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

define(["require","exports","../../lib/glMatrix","../../support/projectionUtils","../../support/aaBoundingBox","../../support/orientedBoundingBox"],function(e,t,r,n,i,s){function a(e,t,r){var n=e.index;if(n.hasNodes(0,1)){var a=e.queue;a.length=0,a.push(0);var o=e.masks;for(o.length=0,o.push(0);a.length>0;){var p=a.pop(),h=o.pop(),g=n.getNode(p),f=n.getRenderObb(p),c=!0;if(null!=t.clippingBox){var l=1<<t.frustumPlanes.length;if(0===(h&l)){var d=s.toAaBoundingBox(f,e.tempAabb);i.contains(t.clippingBox,d)?h|=l:i.intersects(t.clippingBox,d)||(c=!1)}}for(var v=0;v<t.frustumPlanes.length&&c;v++){var l=1<<v;if(0===(h&l)){var b=s.intersectPlane(f,t.frustumPlanes[v]);b>0?c=!1:0>b&&(h|=l)}}if(r.predicate(p,g,c)){for(var S=g.firstChild,_=g.childCount,z=!1,y=u(S,n.pageSize),x=u(S+_-1,n.pageSize),B=y;x>=B;B++)if(!n.hasPage(B)){r.pageMiss(p,B),z=!0;break}if(!z)for(var v=0;_>v;v++)a.push(S+v),o.push(h)}}}}function o(e,t,i,a){for(var o=new s.ObbArray(e.length),p=0;p<e.length;p++){var u=e[p].obb,h=o.obbs[p];r.vec3.set3(u.center[0],u.center[1],u.center[2]+a,g),n.bufferToBuffer(g,t,0,h.center,i,0,1),r.vec3.set(u.halfSize,h.halfSize),r.quat4.set(u.quaternion,h.quaternion)}return o.obbs}function p(e,t){for(var r=[0];r.length;)for(var n=r.pop(),i=e[u(n,t)].nodes[h(n,t)],s=0;s<i.childCount;s++){var a=i.firstChild+s;null!=e[u(a,t)]&&(e[u(a,t)].parents[h(a,t)]=n,r.push(a))}}function u(e,t){return e/t|0}function h(e,t){return e%t}var g=r.vec3d.create(),f=function(){function e(e,t,r){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=r}return e.prototype.addPage=function(e,t,r){for(void 0===r&&(r=0);this._pages.length<e;)this._pages.push(null);var n=o(t,this._nodeSR,this._renderSR,r);this._pages[e]={nodes:t,renderObbs:n,parents:new Uint32Array(this.pageSize)},p(this._pages,this.pageSize)},e.prototype.hasPage=function(e){return!!this._pages[e]},e.prototype.getNode=function(e){var t=this.pageSize;return this._pages[u(e,t)].nodes[h(e,t)]},e.prototype.getRenderObb=function(e){var t=this.pageSize;return this._pages[u(e,t)].renderObbs[h(e,t)]},e.prototype.getRenderCenter=function(e){return this.getRenderObb(e).center},e.prototype.getParentId=function(e){var t=this.pageSize;return this._pages[u(e,t)].parents[h(e,t)]},e.prototype.hasNodes=function(e,t){for(var r=u(e,this.pageSize),n=u(e+t-1,this.pageSize),i=r;n>=i;i++)if(null==this._pages[i])return!1;return!0},e.prototype.createVisibilityTraverse=function(){var e={index:this,queue:[],masks:[],tempAabb:i.create()};return function(t,r){return a(e,t,r)}},e}();return f});