// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/support/aaBoundingBox","./I3SUtil","../../support/orientedBoundingBox"],function(e,t,r,n,i){function s(e,t,n){var s=e.index;if(s.hasNodes(0,1)){var o=e.queue;o.length=0,o.push(0);var a=e.masks;for(a.length=0,a.push(0);o.length>0;){var u=o.pop(),h=a.pop(),g=s.getNode(u),f=s.getRenderObb(u),d=!0;if(null!=t.clippingBox){var l=1<<t.frustumPlanes.length;if(0==(h&l)){var b=i.toAaBoundingBox(f,e.tempAabb);r.contains(t.clippingBox,b)?h|=l:r.intersects(t.clippingBox,b)||(d=!1)}}for(var c=0;c<t.frustumPlanes.length&&d;c++){var l=1<<c;if(0==(h&l)){var v=i.intersectPlane(f,t.frustumPlanes[c]);v>0?d=!1:v<0&&(h|=l)}}if(n.predicate(u,g,d)){for(var S=g.firstChild,_=g.childCount,y=!1,z=p(S,s.pageSize),R=p(S+_-1,s.pageSize),m=z;m<=R;m++)if(!s.hasPage(m)){n.pageMiss(u,m),y=!0;break}if(!y)for(var c=0;c<_;c++)o.push(S+c),a.push(h)}}}}function o(e,t,r,s){for(var o=new i.ObbArray(e.length),a=0;a<e.length;a++)n.transformObb(e[a].obb,t,o.obbs[a],r,s);return o.obbs}function a(e,t){for(var r=[0];r.length;)for(var n=r.pop(),i=e[p(n,t)].nodes[u(n,t)],s=0;s<i.childCount;s++){var o=i.firstChild+s;null!=e[p(o,t)]&&(e[p(o,t)].parents[u(o,t)]=n,r.push(o))}}function p(e,t){return e/t|0}function u(e,t){return e%t}return function(){function e(e,t,r){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=r}return e.prototype.addPage=function(e,t,r){for(void 0===r&&(r=0);this._pages.length<e;)this._pages.push(null);var n=o(t,this._nodeSR,this._renderSR,r);this._pages[e]={nodes:t,renderObbs:n,parents:new Uint32Array(this.pageSize)},a(this._pages,this.pageSize)},e.prototype.hasPage=function(e){return!!this._pages[e]},e.prototype.getNode=function(e){var t=this.pageSize;return this._pages[p(e,t)].nodes[u(e,t)]},e.prototype.getRenderObb=function(e){var t=this.pageSize;return this._pages[p(e,t)].renderObbs[u(e,t)]},e.prototype.getRenderCenter=function(e){return this.getRenderObb(e).center},e.prototype.setRenderObb=function(e,t){var r=this.pageSize;i.set(t,this._pages[p(e,r)].renderObbs[u(e,r)])},e.prototype.getParentId=function(e){var t=this.pageSize;return this._pages[p(e,t)].parents[u(e,t)]},e.prototype.hasNodes=function(e,t){for(var r=p(e,this.pageSize),n=p(e+t-1,this.pageSize),i=r;i<=n;i++)if(null==this._pages[i])return!1;return!0},e.prototype.createVisibilityTraverse=function(){var e={index:this,queue:[],masks:[],tempAabb:r.create()};return function(t,r){return s(e,t,r)}},e}()});