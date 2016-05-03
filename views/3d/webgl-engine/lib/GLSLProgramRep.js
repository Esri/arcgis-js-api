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

define(["require","exports","./Util"],function(o,r,t){var n=function(){function o(){this.programsByName={},this.namesById=[],this.programRefCount=[],this.commonUniforms={model:[],modelNormal:[],lightDirection:[],proj:[],shadowMapDistance:[],viewportPixelSz:[]},this.shaderVariators={}}return o.prototype.dispose=function(){for(var o in this.programsByName)this.programsByName[o].dispose();this.programsByName=null,this.namesById=null,this.programRefCount=null},o.prototype.add=function(o,r){t.assert(null==this.programsByName[o]),this.programsByName[o]=r,this.namesById[r.getId()]=o},o.prototype.get=function(o){return this.programsByName[o]},o.prototype.getProgramsUsingUniform=function(o){return this.commonUniforms[o]||[]},o.prototype.increaseRefCount=function(o){var r=o.getId();this.programRefCount[r]?this.programRefCount[r]++:(this.programRefCount[r]=1,this.findCommonUniforms(o))},o.prototype.decreaseRefCount=function(o){var r=o.getId();this.programRefCount[r]>1?this.programRefCount[r]--:(this.forgetCommonUniforms(o),this.programRefCount[r]=0)},o.prototype.findCommonUniforms=function(o){for(var r in this.commonUniforms)o.hasUniform(r)&&(t.assert(-1===this.commonUniforms[r].indexOf(o),"common uniforms of program have already been determined"),this.commonUniforms[r].push(o))},o.prototype.forgetCommonUniforms=function(o){for(var r in this.commonUniforms){var t=this.commonUniforms[r],n=t.indexOf(o);n>-1&&(t[n]=t[t.length-1],t.pop())}},o}();return n});