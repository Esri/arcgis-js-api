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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./IdGen","./Util","./BoundingInfo"],function(t,n,e,i,o){var r=function(){function t(n,e,o){this.singleUse=!1,this.originalColors=null,this.id=t.__idGen.gen(e),this.data=n,this.boundingInfos=o||[],i.assert(n.faces.length>=1)}return t.prototype.getId=function(){return this.id},t.prototype.getData=function(){return this.data},Object.defineProperty(t.prototype,"numGroups",{get:function(){return this.data.faces.length},enumerable:!0,configurable:!0}),t.prototype.getNumGroups=function(){return this.numGroups},t.prototype.calculateAABB=function(t,n){for(var e=this.data.faces[t],i="triangle"===e.type?3:1,o=e.indices[e.positionKey],r=this.data.vertexAttributes[e.positionKey],a=r.data,u=null!=n?n[0]*i:0,s=null!=n?(n[1]+1)*i:o.length,f=1/0,d=1/0,h=1/0,l=-(1/0),p=-(1/0),c=-(1/0),g=u;s>g;g++){var y=3*o[g],v=a[y],I=a[y+1],m=a[y+2];f=Math.min(f,v),d=Math.min(d,I),h=Math.min(h,m),l=Math.max(l,v),p=Math.max(p,I),c=Math.max(c,m)}return[f,d,h,l,p,c]},t.prototype.calculateBoundingInfo=function(t,n){var e=this.data.faces[t],r="triangle"===e.type?3:1,a=e.indices[e.positionKey];if(0===a.length){a=new Uint32Array(r);for(var u=0;r>u;++u)a[u]=u}var s=a.length;i.assert(s%r===0);for(var f=s/r,d=new Uint32Array(f),u=0;f>u;++u)d[u]=u;return new o(d,r,a,this.data.vertexAttributes[e.positionKey],n)},t.prototype.getBoundingInfo=function(t){var n=this.boundingInfos[t];return null==n&&(n=this.calculateBoundingInfo(t),this.boundingInfos[t]=n),n},t.prototype.invalidateBoundingInfo=function(){this.boundingInfos=[]},t}();return r.__idGen=new e,r});