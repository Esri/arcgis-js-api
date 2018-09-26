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

define(["require","exports","../../lib/gl-matrix"],function(i,t,r){var n=function(){function i(i,t){this._origins=[],this._boxSize=i,this._maxNumOrigins=t}return i.prototype.getOrigin=function(t){for(var n,s=this._origins.length,o=!1,h=Number.MAX_VALUE,a=0;a<s;a++){var g=this._origins[a],u=g.vec3;r.vec3d.subtract(t,u,e),e[0]=Math.abs(e[0]),e[1]=Math.abs(e[1]),e[2]=Math.abs(e[2]);var _=e[0]+e[1]+e[2];_<h&&(n=g,h=_,o=e[0]<this._boxSize&&e[1]<this._boxSize&&e[2]<this._boxSize)}if(!o&&(!n||null==this._maxNumOrigins||this._origins.length<this._maxNumOrigins)){var b=i.OFFSET,g=[t[0]+b,t[1]+b,t[2]+b];n={vec3:g,id:this.getOriginId(g)},this._origins.push(n)}return n},i.prototype.getOriginId=function(t){return""+i.ORIGIN_PREFIX+t[0]+"/"+t[1]+"/"+t[2]},i.OFFSET=1.11,i.ORIGIN_PREFIX="fb_",i}(),e=r.vec3d.create();return n});