// COPYRIGHT © 201 Esri
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

define(["require","exports","../../../core/ArrayPool","../../../core/ObjectPool","./TileSpan"],function(o,e,r,n,l){return function(){function o(o){this.lodInfo=o,this.spans=r.acquire()}return o.prototype.release=function(){for(var o=0,e=this.spans;o<e.length;o++){var n=e[o];l.pool.release(n)}r.release(this.spans)},o.prototype.forEach=function(o,e){var r=this,n=r.spans,l=r.lodInfo,t=l.level;if(0!==n.length)for(var a=0,s=n;a<s.length;a++)for(var i=s[a],c=i.row,f=i.colFrom,p=i.colTo,u=f;u<=p;u++)o.call(e,t,c,l.normalizeCol(u),l.getWorldForColumn(u))},o.pool=new n(o,!0),o}()});