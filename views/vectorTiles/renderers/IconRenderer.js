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

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec3","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(e,t,i,r,o,a,n,s){var c=function(){function e(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3},this._spritesTextureSize=new Float32Array(2),this._initialized=!1,this._extrudeMat=i.create(),this._scaleVec=r.create()}return e.prototype.dispose=function(){this._iconProgram&&(this._iconProgram.dispose(),this._iconProgram=null)},e.prototype.render=function(e,t,r,o,a,s,c,_,f,m,u){var d=this;this._initialized||this._initialize(e);var h=u*c.getPaintValue("icon-opacity",r),l=c.getLayoutValue("icon-rotation-alignment",r);2===l&&(l=1===c.getLayoutValue("symbol-placement",r)?0:1);var g=0===l,p=c.getLayoutValue("icon-size",r),x=n.degToByte(o);g?i.copy(this._extrudeMat,f):i.copy(this._extrudeMat,m),1!==p&&(this._scaleVec[0]=p,this._scaleVec[1]=p,this._scaleVec[2]=1,i.scale(this._extrudeMat,this._extrudeMat,this._scaleVec)),e.bindProgram(this._iconProgram);var y=this._getIconVAO(e,s);y&&(e.bindVAO(y),this._iconProgram.setUniformMatrix4fv("u_transformMatrix",s.tileTransform.transform),this._iconProgram.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat),this._iconProgram.setUniform2fv("u_normalized_origin",s.tileTransform.displayCoord),this._iconProgram.setUniform1f("u_depth",c.z),this._iconProgram.setUniform1f("u_mapRotation",x),this._iconProgram.setUniform1f("u_keepUpright",0),this._iconProgram.setUniform1f("u_level",10*r),this._iconProgram.setUniform1f("u_fadeSpeed",10*a.fadeSpeed),this._iconProgram.setUniform1f("u_minfadeLevel",10*a.minfadeLevel),this._iconProgram.setUniform1f("u_maxfadeLevel",10*a.maxfadeLevel),this._iconProgram.setUniform1f("u_fadeChange",10*(r+a.fadeChange)),this._iconProgram.setUniform1f("u_opacity",h),this._iconProgram.setUniform1i("u_texture",1),t.markerPerPageElementsMap.forEach(function(t,i){d._spritesTextureSize[0]=_.getWidth(i)/4,d._spritesTextureSize[1]=_.getHeight(i)/4,d._iconProgram.setUniform2fv("u_mosaicSize",d._spritesTextureSize),_.bind(e,9729,i,1),e.drawElements(4,t[1],5125,12*t[0])}),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t=new o(e,s.iconShaderVS,s.iconShaderFS,this._attributeLocations),i={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._iconProgram=t,this._iconVertexAttributes=i,this._initialized=!0,!0},e.prototype._getIconVAO=function(e,t){if(t.iconVertexArrayObject)return t.iconVertexArrayObject;var i=t.iconVertexBuffer,r=t.iconIndexBuffer;return i&&r?(t.iconVertexArrayObject=new a(e,this._attributeLocations,this._iconVertexAttributes,{geometry:i},r),t.iconVertexArrayObject):null},e}();return c});