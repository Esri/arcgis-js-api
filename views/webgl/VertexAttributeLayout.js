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

define(["require","exports"],function(){var t=function(){function t(t,e){this._context=null,this._vertexAttribDescriptors=void 0,this._useExplicitBinding=!1,this._context=t,this._vertexAttribDescriptors=e,0===Object.keys(e).length&&console.error("vertexDescriptors must not be empty!"),this._useExplicitBinding=this._context.extensions.vao}return t.prototype.bind=function(t,e,i){t||console.error("GLSL program is uninitialized!"),e||console.error("Vertex buffer dictionary is empty!");var r,o,n,s=this._context.gl,c=0;for(var l in e)for(r=e[l],r||console.error("Vertex buffer is uninitialized!"),o=this._vertexAttribDescriptors[l],o||console.error("Vertex element descriptor is empty!"),this._useExplicitBinding?s.bindBuffer(s.ARRAY_BUFFER,r.glName):this._context.bindBuffer(r),c=0;c<o.length;++c)if(n=o[c],n.location&&-1!==n.location||(n.location=t.getAttribLocation(n.name),-1===n.location&&console.error("Error getting attribute "+n.name+" ID!")),s.enableVertexAttribArray(n.location),s.vertexAttribPointer(n.location,n.count,n.type,n.normalized,n.stride,n.offset),n.divisor&&n.divisor>0){var a=this._context.extensions.angleInstancedArrays;a&&a.vertexAttribDivisorANGLE(n.location,n.divisor)}i&&(this._useExplicitBinding?s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))},t}();return t});