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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec4","../../../core/libs/gl-matrix/vec3","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(t,e,r,i,a,o,s,f,n){var d=function(){function t(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3},this._initialized=!1,this._extrudeMat=r.create(),this._haloColor=i.create(),this._sdfColor=i.create(),this._scaleVec=a.create()}return t.prototype.render=function(t,e,i,a,o,s,n,d,l,_,h,m){this._initialized||this._initialize(t);var u=24,g=n.getLayoutValue("text-size",i),x=g/u,c=f.degToByte(a),p=n.getLayoutValue("text-rotation-alignment",i);1===p&&(1!==n.getLayoutValue("symbol-placement",i)||n.hasLayoutProperty("text-rotation-alignment")||(p=0));var v=0===p,y=n.getLayoutValue("text-keep-upright",i)&&v,P=.1*u/g/h,V=.75,U=m*n.getPaintValue("text-opacity",i);this._glyphTextureSize||(this._glyphTextureSize=new Float32Array([d.width/4,d.height/4])),v?r.copy(this._extrudeMat,l):r.copy(this._extrudeMat,_),this._scaleVec[0]=x,this._scaleVec[1]=x,this._scaleVec[2]=1,r.scale(this._extrudeMat,this._extrudeMat,this._scaleVec),d.bind(t,9729,0),t.bindProgram(this._sdfProgram);var b=this._getSDFVAO(t,s);if(b){t.bindVAO(b),this._sdfProgram.setUniformMatrix4fv("u_transformMatrix",s.tileTransform.transform),this._sdfProgram.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat),this._sdfProgram.setUniform2fv("u_normalized_origin",s.tileTransform.displayCoord),this._sdfProgram.setUniform1f("u_depth",n.z),this._sdfProgram.setUniform2fv("u_mosaicSize",this._glyphTextureSize),this._sdfProgram.setUniform1f("u_mapRotation",c),this._sdfProgram.setUniform1f("u_keepUpright",y?1:0),this._sdfProgram.setUniform1f("u_level",10*i),this._sdfProgram.setUniform1f("u_fadeSpeed",10*o.fadeSpeed),this._sdfProgram.setUniform1f("u_minfadeLevel",10*o.minfadeLevel),this._sdfProgram.setUniform1f("u_maxfadeLevel",10*o.maxfadeLevel),this._sdfProgram.setUniform1f("u_fadeChange",10*(i+o.fadeChange)),this._sdfProgram.setUniform1f("u_opacity",U),this._sdfProgram.setUniform1i("u_texture",0);var z=n.getPaintValue("text-halo-color",i);if(z[3]>0){var C=z[3]*U;this._haloColor[0]=C*z[0],this._haloColor[1]=C*z[1],this._haloColor[2]=C*z[2],this._haloColor[3]=C;var S=8,A=P+n.getPaintValue("text-halo-blur",i)/x/S,L=V-n.getPaintValue("text-halo-width",i)/x/S;this._sdfProgram.setUniform4fv("u_color",this._haloColor),this._sdfProgram.setUniform1f("u_edgeDistance",L),this._sdfProgram.setUniform1f("u_edgeWidth",A),t.drawElements(4,e.textElementCount,5125,12*e.textElementStart)}var O=n.getPaintValue("text-color",i);if(O[3]>0){var M=O[3]*U;this._sdfColor[0]=M*O[0],this._sdfColor[1]=M*O[1],this._sdfColor[2]=M*O[2],this._sdfColor[3]=M,this._sdfProgram.setUniform4fv("u_color",this._sdfColor),this._sdfProgram.setUniform1f("u_edgeDistance",V),this._sdfProgram.setUniform1f("u_edgeWidth",P),t.drawElements(4,e.textElementCount,5125,12*e.textElementStart)}t.bindVAO()}},t.prototype._initialize=function(t){if(this._initialized)return!0;var e=new o(t,n.sdfShaderVS,n.sdfShaderFS,this._attributeLocations),r={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._sdfProgram=e,this._sdfVertexAttributes=r,this._initialized=!0,!0},t.prototype._getSDFVAO=function(t,e){if(e.textVertexArrayObject)return e.textVertexArrayObject;var r=e.textVertexBuffer,i=e.textIndexBuffer;return r&&i?(e.textVertexArrayObject=new s(t,this._attributeLocations,this._sdfVertexAttributes,{geometry:r},i),e.textVertexArrayObject):null},t}();return d});