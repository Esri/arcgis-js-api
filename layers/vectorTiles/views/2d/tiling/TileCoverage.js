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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../../../core/ObjectPool","../../../core/ArrayPool","./TileSpan"],function(o,r,e,n,l){var t=function(){function o(o){this.lodInfo=o,this.spans=n.acquire()}return o.prototype.release=function(){for(var o=0,r=this.spans;o<r.length;o++){var e=r[o];l.pool.release(e)}n.release(this.spans)},o.prototype.forEach=function(o,r){var e=this,n=e.spans,l=e.lodInfo,t=l.level;if(0!==n.length)for(var a=0,s=n;a<s.length;a++)for(var i=s[a],c=i.row,f=i.colFrom,p=i.colTo,u=f;p>=u;u++)o.call(r,t,c,l.normalizeCol(u),l.getWorldForColumn(u))},o.pool=new e(o,!0),o}();return t});