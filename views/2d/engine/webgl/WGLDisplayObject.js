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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./WGLDisplayRecord","./Utils"],function(e,i,r,s,d){var t=function(){function e(){this.displayRecords=[]}return e.prototype.acquire=function(e){this.id=e},e.prototype.release=function(){this.id=void 0,this.displayRecords.length=0},e.serialize=function(e,i,r){var t=0;t+=d.serializeInteger(e.id,i,r+t),t+=d.serializeInteger(e.displayRecords.length,i,r+t);for(var a=0,n=e.displayRecords;a<n.length;a++){var o=n[a];t+=s.serialize(o,i,r+t,!0)}return t},e.deserialize=function(i,r,t){var a=0,n={n:0};a+=d.deserializeInteger(n,r,t+a);var o={n:0};a+=d.deserializeInteger(o,r,t+a);var l={displayRecord:void 0};i.displayObject=e.pool.acquire(),i.displayObject.id=n.n,i.displayObject.displayRecords.length=o.n;for(var c=0;c<o.n;++c)a+=s.deserialize(l,r,t+a,!0),i.displayObject.displayRecords[c]=l.displayRecord,i.displayObject.displayRecords[c].id=n.n;return a},e.pool=new r(e),e}();return t});