// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix","../../support/projectionUtils","../../support/aaBoundingBox","../../support/orientedBoundingBox"],function(e,t,r,n,i,s){function o(e,t,r){var n=e.queue;n.length=0,n.push(0);var o=e.masks;o.length=0,o.push(0);for(var a=e.index;n.length>0;){var p=n.pop(),h=o.pop(),g=a.getNode(p),f=a.getRenderObb(p),b=!0;if(null!=t.clippingBox){var l=1<<t.frustumPlanes.length;if(0===(h&l)){var c=s.toAaBoundingBox(f,e.tempAabb);i.containsAabb(t.clippingBox,c)?h|=l:i.intersectsAabb(t.clippingBox,c)||(b=!1)}}for(var d=0;d<t.frustumPlanes.length&&b;d++){var l=1<<d;if(0===(h&l)){var v=s.intersectPlane(f,t.frustumPlanes[d]);v>0?b=!1:0>v&&(h|=l)}}if(r.predicate(p,g,b)){for(var S=g.firstChild,_=g.childCount,z=!1,y=u(S,a.pageSize),x=u(S+_-1,a.pageSize),B=y;x>=B;B++)if(!a.hasPage(B)){r.pageMiss(p,B),z=!0;break}if(!z)for(var d=0;_>d;d++)n.push(S+d),o.push(h)}}}function a(e,t,i){for(var o=new s.ObbArray(e.length),a=0;a<e.length;a++)n.bufferToBuffer(e[a].obb.center,t,0,o.obbs[a].center,i,0,1),r.vec3.set(e[a].obb.halfSize,o.obbs[a].halfSize),r.quat4.set(e[a].obb.quaternion,o.obbs[a].quaternion);return o.obbs}function p(e,t){for(var r=[0];r.length;)for(var n=r.pop(),i=e[u(n,t)].nodes[h(n,t)],s=0;s<i.childCount;s++){var o=i.firstChild+s;null!=e[u(o,t)]&&(e[u(o,t)].parents[h(o,t)]=n,r.push(o))}}function u(e,t){return e/t|0}function h(e,t){return e%t}var g=function(){function e(e,t,r){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=r}return e.prototype.addPage=function(e,t){for(;this._pages.length<e;)this._pages.push(null);this._pages[e]={nodes:t,renderObbs:a(t,this._nodeSR,this._renderSR),parents:new Uint32Array(this.pageSize)},p(this._pages,this.pageSize)},e.prototype.hasPage=function(e){return!!this._pages[e]},e.prototype.getNode=function(e){var t=this.pageSize;return this._pages[u(e,t)].nodes[h(e,t)]},e.prototype.getRenderObb=function(e){var t=this.pageSize;return this._pages[u(e,t)].renderObbs[h(e,t)]},e.prototype.getRenderCenter=function(e){return this.getRenderObb(e).center},e.prototype.getParentId=function(e){var t=this.pageSize;return this._pages[u(e,t)].parents[h(e,t)]},e.prototype.hasNodes=function(e,t){for(var r=u(e,this.pageSize),n=u(e+t-1,this.pageSize),i=r;n>=i;i++)if(null==this._pages[i])return!1;return!0},e.prototype.createVisibilityTraverse=function(){var e={index:this,queue:[],masks:[],tempAabb:i.create()};return function(t,r){return o(e,t,r)}},e}();return g});