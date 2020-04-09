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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/ObjectPool"],(function(o,n,r){return function(){function o(o){this.lodInfo=o,this.spans=[]}return o.prototype.release=function(){},o.prototype.forEach=function(o,n){var r=this.spans,e=this.lodInfo,t=e.level;if(0!==r.length)for(var l=0,i=r;l<i.length;l++)for(var f=i[l],c=f.row,s=f.colFrom,a=f.colTo,u=s;u<=a;u++)o.call(n,t,c,e.normalizeCol(u),e.getWorldForColumn(u))},o.pool=new r(o,!0),o}()}));