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

define(["../../../core/declare","./PreallocArray"],function(t,e){var i=t([],{constructor:function(t,i){this.freelist=new e(t),this.cls=i,this.initialSize=t},_allocate:function(){return new this.cls},acquire:function(){if(0===this.freelist.length)for(var t=Math.max(1,this.initialSize/2),e=0;t>e;e++)this.freelist.push(new this.cls);return this.freelist.pop()},release:function(t){this.freelist.push(t)}});return i.on=function(t,e){t._pool=null,Object.defineProperty(t,"Pool",{get:function(){return this._pool||(this._pool=new i(e,t)),this._pool}})},i});