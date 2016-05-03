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

define(["require","exports","./gl-matrix"],function(i,t,r){var s=r.vec3d,n=function(){function i(i,t){this._origins=[],this._boxSize=i,this._maxNumOrigins=t}return i.prototype.getOrigin=function(t){for(var r,n=this._origins.length,o=!1,a=Number.MAX_VALUE,g=0;n>g;g++){var u=this._origins[g],_=u.vec3;s.subtract(t,_,h),h[0]=Math.abs(h[0]),h[1]=Math.abs(h[1]),h[2]=Math.abs(h[2]);var b=h[0]+h[1]+h[2];a>b&&(r=u,a=b,o=h[0]<this._boxSize&&h[1]<this._boxSize&&h[2]<this._boxSize)}if(!o&&(!r||null==this._maxNumOrigins||this._origins.length<this._maxNumOrigins)){var c=i.OFFSET;r={vec3:[t[0]+c,t[1]+c,t[2]+c],id:e+this._origins.length},this._origins.push(r)}return r},i.OFFSET=1.11,i}(),e="fb_",h=s.create();return n});