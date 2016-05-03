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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./IdGen","./Util","./BoundingInfo"],function(n,t,e,i,o){var r=function(){function n(t,e,o){this.singleUse=!1,this.originalColors=null,this.id=n.__idGen.gen(e),this.data=t,this.boundingInfos=o||[],i.assert(t.faces.length>=1)}return n.prototype.getId=function(){return this.id},n.prototype.getData=function(){return this.data},Object.defineProperty(n.prototype,"numGroups",{get:function(){return this.data.faces.length},enumerable:!0,configurable:!0}),n.prototype.getNumGroups=function(){return this.numGroups},n.prototype.calculateBoundingInfo=function(n,t){var e=this.data.faces[n],r="triangle"===e.type?3:1,u=e.indices[e.positionKey];if(0===u.length){u=new Uint32Array(r);for(var s=0;r>s;++s)u[s]=s}var a=u.length;i.assert(a%r===0);for(var f=a/r,d=new Uint32Array(f),s=0;f>s;++s)d[s]=s;return new o(d,r,u,this.data.vertexAttributes[e.positionKey],t)},n.prototype.getBoundingInfo=function(n){var t=this.boundingInfos[n];return null==t&&(t=this.calculateBoundingInfo(n),this.boundingInfos[n]=t),t},n.prototype.invalidateBoundingInfo=function(){this.boundingInfos=[]},n.__idGen=new e,n}();return r});