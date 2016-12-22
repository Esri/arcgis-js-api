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

define(["require","exports"],function(i,r){var t=function(){function i(i){this._gridSize=i,this._origins={}}return i.prototype.getOrigin=function(r){var t=this._gridSize,n=Math.round(r[0]/t),e=Math.round(r[1]/t),o=Math.round(r[2]/t),u=""+i.ORIGIN_PREFIX+n+"/"+e+"/"+o,s=this._origins[u];if(!s){var g=this._gridSize,h=i.OFFSET;s={id:u,vec3:[n*g+h,e*g+h,o*g+h]},this._origins[u]=s}return s},i.ORIGIN_PREFIX="rg_",i.OFFSET=1.11,i}();return t});