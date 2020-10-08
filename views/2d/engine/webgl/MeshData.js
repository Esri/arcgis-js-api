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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){"use strict";return function(){function t(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}return t.prototype.clear=function(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]},t.prototype.update=function(t,e,i){for(var r in t)this.vertexData.set(r,t[r]);for(var r in this.vertexData)null===t[r]&&this.vertexData.delete(r);this.vertexCount=e,this.indexData=i},t}()}));