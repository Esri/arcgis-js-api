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

define(["require","exports","./workers"],function(t,n,o){var i=function(){function t(t,n){this.client=t,this.id=n}return t.prototype.invoke=function(t,n,i,e){return o.invoke(t,n,i,e,this.id)},t.prototype.broadcast=function(t,n,i){return o.broadcast(t,n,i,this.id)},t.prototype.close=function(){o.closeConnection(this)},t}();return i});