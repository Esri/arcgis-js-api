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

define(["require","exports","./IdGen","./Util","./BoundingInfo"],function(t,n,e,i,o){var r=function(){function t(n,e,o){this.singleUse=!1,this.originalColors=null,this.id=t.__idGen.gen(e),this.data=n,this.boundingInfos=o||[],i.assert(n.faces.length>=1)}return t.prototype.getId=function(){return this.id},t.prototype.getData=function(){return this.data},Object.defineProperty(t.prototype,"numGroups",{get:function(){return this.data.faces.length},enumerable:!0,configurable:!0}),t.prototype.getNumGroups=function(){return this.numGroups},t.prototype.calculateAABB=function(t,n){var e=this.data.faces[t],i="triangle"===e.type?3:1,o=e.indices[e.positionKey];if(0===o.length){o=new Uint32Array(i);for(var r=0;i>r;++r)o[r]=r}for(var a=this.data.vertexAttributes[e.positionKey],u=a.data,s=a.size,f=[1/0,1/0,1/0,-(1/0),-(1/0),-(1/0)],h=null!=n?n[0]*i:0,l=null!=n?(n[1]+1)*i:o.length,r=h;l>r;++r){var d=s*o[r];f[0]=Math.min(f[0],u[d]),f[1]=Math.min(f[1],u[d+1]),f[2]=Math.min(f[2],u[d+2]),f[3]=Math.max(f[3],u[d]),f[4]=Math.max(f[4],u[d+1]),f[5]=Math.max(f[5],u[d+2])}return f},t.prototype.calculateBoundingInfo=function(t,n){var e=this.data.faces[t],r="triangle"===e.type?3:1,a=e.indices[e.positionKey];if(0===a.length){a=new Uint32Array(r);for(var u=0;r>u;++u)a[u]=u}var s=a.length;i.assert(s%r===0);for(var f=s/r,h=new Uint32Array(f),u=0;f>u;++u)h[u]=u;return new o(h,r,a,this.data.vertexAttributes[e.positionKey],n)},t.prototype.getBoundingInfo=function(t){var n=this.boundingInfos[t];return null==n&&(n=this.calculateBoundingInfo(t),this.boundingInfos[t]=n),n},t.prototype.invalidateBoundingInfo=function(){this.boundingInfos=[]},t.__idGen=new e,t}();return r});