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

define(["require","exports"],function(t,e){var i=function(){function t(e,i){this.id=t.getNewId(),this.faces=e,this.vertexAttributes=i}return t.prototype.estimateGpuMemoryUsage=function(){for(var t=0,e=0;e<this.faces.length;e++){var i=3;this.faces[e].indices.normal&&(i+=3),this.faces[e].indices.uv0&&(i+=2),this.faces[e].indices.color&&i++,t+=this.faces[e].indices.position.length*i*4}return t},t.prototype.getId=function(){return this.id},t.prototype.getFaces=function(){return this.faces},t.prototype.getVertexAttr=function(){return this.vertexAttributes},t.getNewId=function(){return t._id++},t._id=0,t.AxisOrder={CG:0,GIS:1},t}();return i});