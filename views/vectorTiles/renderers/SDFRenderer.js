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

define(["require","exports","dojo/has","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec4","../../../core/libs/gl-matrix/vec3","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(e,t,r,i,o,a,s,f,n,d){var _=1/65536,l=function(){function e(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3},this._initialized=!1,this._extrudeMat=i.create(),this._haloColor=o.create(),this._sdfColor=o.create(),this._scaleVec=a.create()}return e.prototype.dispose=function(){this._sdfProgram&&(this._sdfProgram.dispose(),this._sdfProgram=null)},e.prototype.render=function(e,t,o,a,s,f,d,l,m,h,u,g){var c=this;if(!r("esri-vector-tiles-avoid-text")){this._initialized||this._initialize(e);var x=24,p=d.getLayoutValue("text-size",o),v=p/x,P=n.degToByte(a),y=d.getLayoutValue("text-rotation-alignment",o);2===y&&(y=1===d.getLayoutValue("symbol-placement",o)?0:1);var V=0===y,U=d.getLayoutValue("text-keep-upright",o)&&V,b=.1*x/p/u,z=.75,C=g*d.getPaintValue("text-opacity",o);this._glyphTextureSize||(this._glyphTextureSize=new Float32Array([l.width/4,l.height/4])),V?i.copy(this._extrudeMat,m):i.copy(this._extrudeMat,h),this._scaleVec[0]=v,this._scaleVec[1]=v,this._scaleVec[2]=1,i.scale(this._extrudeMat,this._extrudeMat,this._scaleVec),e.bindProgram(this._sdfProgram);var S=this._getSDFVAO(e,f);S&&(e.bindVAO(S),this._sdfProgram.setUniformMatrix4fv("u_transformMatrix",f.tileTransform.transform),this._sdfProgram.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat),this._sdfProgram.setUniform2fv("u_normalized_origin",f.tileTransform.displayCoord),this._sdfProgram.setUniform1f("u_depth",d.z+_),this._sdfProgram.setUniform2fv("u_mosaicSize",this._glyphTextureSize),this._sdfProgram.setUniform1f("u_mapRotation",P),this._sdfProgram.setUniform1f("u_keepUpright",U?1:0),this._sdfProgram.setUniform1f("u_level",10*o),this._sdfProgram.setUniform1f("u_fadeSpeed",10*s.fadeSpeed),this._sdfProgram.setUniform1f("u_minfadeLevel",10*s.minfadeLevel),this._sdfProgram.setUniform1f("u_maxfadeLevel",10*s.maxfadeLevel),this._sdfProgram.setUniform1f("u_fadeChange",10*(o+s.fadeChange)),this._sdfProgram.setUniform1f("u_opacity",C),this._sdfProgram.setUniform1i("u_texture",0),t.glyphPerPageElementsMap.forEach(function(t,r){l.bind(e,9729,r,0);var i=d.getPaintValue("text-halo-color",o);if(i[3]>0){var a=i[3]*C;c._haloColor[0]=a*i[0],c._haloColor[1]=a*i[1],c._haloColor[2]=a*i[2],c._haloColor[3]=a;var s=8,f=b+d.getPaintValue("text-halo-blur",o)/v/s,n=z-d.getPaintValue("text-halo-width",o)/v/s;c._sdfProgram.setUniform4fv("u_color",c._haloColor),c._sdfProgram.setUniform1f("u_edgeDistance",n),c._sdfProgram.setUniform1f("u_edgeWidth",f),e.drawElements(4,t[1],5125,12*t[0])}var _=d.getPaintValue("text-color",o);if(_[3]>0){var m=_[3]*C;c._sdfColor[0]=m*_[0],c._sdfColor[1]=m*_[1],c._sdfColor[2]=m*_[2],c._sdfColor[3]=m,c._sdfProgram.setUniform4fv("u_color",c._sdfColor),c._sdfProgram.setUniform1f("u_edgeDistance",z),c._sdfProgram.setUniform1f("u_edgeWidth",b),e.drawElements(4,t[1],5125,12*t[0])}}),e.bindVAO())}},e.prototype._initialize=function(e){if(this._initialized)return!0;var t=new s(e,d.sdfShaderVS,d.sdfShaderFS,this._attributeLocations),r={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._sdfProgram=t,this._sdfVertexAttributes=r,this._initialized=!0,!0},e.prototype._getSDFVAO=function(e,t){if(t.textVertexArrayObject)return t.textVertexArrayObject;var r=t.textVertexBuffer,i=t.textIndexBuffer;return r&&i?(t.textVertexArrayObject=new f(e,this._attributeLocations,this._sdfVertexAttributes,{geometry:r},i),t.textVertexArrayObject):null},e}();return l});