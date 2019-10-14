// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/ObjectPool"],function(o,n,r){return function(){function o(o){this.lodInfo=o,this.spans=[]}return o.prototype.release=function(){},o.prototype.forEach=function(o,n){var r=this,e=r.spans,t=r.lodInfo,l=t.level;if(0!==e.length)for(var f=0,i=e;f<i.length;f++)for(var c=i[f],a=c.row,s=c.colFrom,u=c.colTo,p=s;p<=u;p++)o.call(n,l,a,t.normalizeCol(p),t.getWorldForColumn(p))},o.pool=new r(o,!0),o}()});