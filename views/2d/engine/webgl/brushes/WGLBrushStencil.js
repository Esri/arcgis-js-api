// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix/vec4","../definitions","./WGLBrush","../shaders/BackgroundPrograms","../../../../webgl/BufferObject","../../../../webgl/programUtils","../../../../webgl/VertexArrayObject"],function(r,i,t,e,o,s,a,n,l,d){Object.defineProperty(i,"__esModule",{value:!0});var _=function(r){function i(){var i=r.call(this)||this;return i._color=e.create(),i._initialized=!1,i._color.set([1,0,0,1]),i}return t(i,r),i.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)},i.prototype.draw=function(r,i){var t=r.context;this._initialized||this._initialize(t),t.setStencilFunctionSeparate(1032,519,i.stencilRef,255),t.bindVAO(this._solidVertexArrayObject),t.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",i.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",i.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",o.TILE_SIZE),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),t.drawArrays(5,0,4),t.bindVAO()},i.prototype._initialize=function(r){if(this._initialized)return!0;var i=l.createProgram(r,a.background);if(!i)return!1;var t={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},e=new Int8Array([0,0,1,0,0,1,1,1]),o=n.createVertex(r,35044,e),s=new d(r,a.background.attributes,t,{geometry:o});return this._solidProgram=i,this._solidVertexArrayObject=s,this._initialized=!0,!0},i}(s.default);i.default=_});