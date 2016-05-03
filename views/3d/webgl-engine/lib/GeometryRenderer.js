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

define(["require","exports","./GLVBO","../materials/internal/MaterialUtil"],function(t,i,e,r){var n=function(){function t(t,i,n,o){this._drawMode=4,this._layout=i;var s=t.faces;this._count=s.indices[s.positionKey].length;var a=new Float32Array(this._count*i.getStride());(n||r.fillInterleaved)(t,void 0,void 0,null,i,a,0),this._gl=o,this._vbo=new e(a,i,o)}return t.prototype.enablePointRendering=function(t){this._drawMode=t?0:4},t.prototype.render=function(t){this._vbo.bind(),this._vbo.setPointers(t),this._layout.enableVertexAttribArrays(this._gl,t),this._gl.drawArrays(this._drawMode,0,this._count),this._layout.disableVertexAttribArrays(this._gl,t),this._gl.bindBuffer(34962,null)},t}();return n});