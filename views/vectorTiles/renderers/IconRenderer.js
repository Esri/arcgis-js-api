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

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec3","dojo/text!./shaders/iconShader.vs.glsl","dojo/text!./shaders/iconShader.fs.glsl","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils"],function(e,t,i,r,o,a,n,s,c){var f=function(){function e(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3},this._spritesTextureSize=new Float32Array(2),this._initialized=!1,this._extrudeMat=i.create(),this._scaleVec=r.create()}return e.prototype.render=function(e,t,r,o,a,n,s,f,_,m,u){this._initialized||this._initialize(e);var l=u*s.getPaintValue("icon-opacity",r),h=s.getLayoutValue("icon-rotation-alignment",r);1===h&&(1!==s.getLayoutValue("symbol-placement",r)||s.hasLayoutProperty("icon-rotation-alignment")||(h=0));var d=0===h,g=s.getLayoutValue("icon-keep-upright",r)&&d,x=s.getLayoutValue("icon-size",r),p=c.degToByte(o);this._spritesTextureSize[0]=f.width/4,this._spritesTextureSize[1]=f.height/4,d?i.copy(this._extrudeMat,_):i.copy(this._extrudeMat,m),1!==x&&(this._scaleVec[0]=x,this._scaleVec[1]=x,this._scaleVec[2]=1,i.scale(this._extrudeMat,this._extrudeMat,this._scaleVec)),f.bind(e,9729,0),e.bindProgram(this._iconProgram);var y=this._getIconVAO(e,n);y&&(e.bindVAO(y),this._iconProgram.setUniformMatrix4fv("u_transformMatrix",n.tileTransform.transform),this._iconProgram.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat),this._iconProgram.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),this._iconProgram.setUniform1f("u_depth",s.z),this._iconProgram.setUniform2fv("u_mosaicSize",this._spritesTextureSize),this._iconProgram.setUniform1f("u_mapRotation",p),this._iconProgram.setUniform1f("u_keepUpright",g?1:0),this._iconProgram.setUniform1f("u_level",10*r),this._iconProgram.setUniform1f("u_fadeSpeed",10*a.fadeSpeed),this._iconProgram.setUniform1f("u_minfadeLevel",10*a.minfadeLevel),this._iconProgram.setUniform1f("u_maxfadeLevel",10*a.maxfadeLevel),this._iconProgram.setUniform1f("u_fadeChange",10*(r+a.fadeChange)),this._iconProgram.setUniform1f("u_opacity",l),this._iconProgram.setUniform1i("u_texture",0),e.drawElements(4,t.marketElementCount,5125,12*t.markerElementStart),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t=new n(e,o,a,this._attributeLocations),i={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._iconProgram=t,this._iconVertexAttributes=i,this._initialized=!0,!0},e.prototype._getIconVAO=function(e,t){if(t.iconVertexArrayObject)return t.iconVertexArrayObject;var i=t.iconVertexBuffer,r=t.iconIndexBuffer;return i&&r?(t.iconVertexArrayObject=new s(e,this._attributeLocations,this._iconVertexAttributes,{geometry:i},r),t.iconVertexArrayObject):null},e}();return f});