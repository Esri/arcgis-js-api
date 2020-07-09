// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/support/aaBoundingBox","./I3SUtil","../../support/orientedBoundingBox"],(function(e,t,r,n,i){function s(e,t){return e/t|0}function o(e,t){return e%t}return(function(){function e(e,t,r){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=r}return e.prototype.addPage=function(e,t,r){for(void 0===r&&(r=0);this._pages.length<e;)this._pages.push(null);var a=function(e,t,r,s){for(var o=new i.ObbArray(e.length),a=0;a<e.length;a++)n.transformObb(e[a].obb,t,o.obbs[a],r,s);return o.obbs}(t,this._nodeSR,this._renderSR,r);this._pages[e]={nodes:t,renderObbs:a,parents:new Uint32Array(this.pageSize)},function(e,t){var r=[0];for(;r.length;)for(var n=r.pop(),i=e[s(n,t)].nodes[o(n,t)],a=0;a<i.childCount;a++){var p=i.firstChild+a;null!=e[s(p,t)]&&(e[s(p,t)].parents[o(p,t)]=n,r.push(p))}}(this._pages,this.pageSize)},e.prototype.hasPage=function(e){return!!this._pages[e]},e.prototype.getNode=function(e){var t=this.pageSize;return this._pages[s(e,t)].nodes[o(e,t)]},e.prototype.getRenderObb=function(e){var t=this.pageSize;return this._pages[s(e,t)].renderObbs[o(e,t)]},e.prototype.getRenderCenter=function(e){return this.getRenderObb(e).center},e.prototype.setRenderObb=function(e,t){var r=this.pageSize;i.set(t,this._pages[s(e,r)].renderObbs[o(e,r)])},e.prototype.getParentId=function(e){var t=this.pageSize;return this._pages[s(e,t)].parents[o(e,t)]},e.prototype.hasNodes=function(e,t){for(var r=s(e,this.pageSize),n=s(e+t-1,this.pageSize),i=r;i<=n;i++)if(null==this._pages[i])return!1;return!0},e.prototype.forEachNodeId=function(e){for(var t=0;t<this._pages.length;t++){var r=this._pages[t];if(r)for(var n=0;n<r.nodes.length;n++)e(t*this.pageSize+n)}},e.prototype.createVisibilityTraverse=function(){var e={index:this,queue:[],masks:[],tempAabb:r.create()};return function(t,n){return function(e,t,n){var o=e.index;if(!o.hasNodes(0,1))return;var a=e.queue;a.length=0,a.push(0);var p=e.masks;p.length=0,p.push(0);for(;a.length>0;){var u=a.pop(),h=p.pop(),g=o.getNode(u),f=o.getRenderObb(u),d=!0;if(null!=t.clippingBox){var l=1<<t.frustumPlanes.length;if(0==(h&l)){var c=i.toAaBoundingBox(f,e.tempAabb);r.contains(t.clippingBox,c)?h|=l:r.intersects(t.clippingBox,c)||(d=!1)}}for(var b=0;b<t.frustumPlanes.length&&d;b++){if(0==(h&(l=1<<b))){var v=i.intersectPlane(f,t.frustumPlanes[b]);v>0?d=!1:v<0&&(h|=l)}}if(n.predicate(u,g,d)){for(var S=g.firstChild,_=g.childCount,y=!1,z=s(S,o.pageSize),R=s(S+_-1,o.pageSize),m=z;m<=R;m++)if(!o.hasPage(m)){n.pageMiss(u,m),y=!0;break}if(!y)for(b=0;b<_;b++)a.push(S+b),p.push(h)}}}(e,t,n)}},e}())}));