// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec3","../../../core/libs/gl-matrix/vec4","../GeometryUtils","./rendererUtils","./vtShaderSnippets","../../webgl/ShaderVariations","../../webgl/VertexArrayObject"],(function(e,t,i,r,o,a,n,s,f,c){return function(){function e(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3},this._attributeLocationsDD={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3,a_color:4,a_size:5},this._spritesTextureSize=new Float32Array(2),this._initialized=!1,this._viewProjMat=i.create(),this._offsetVector=r.create(),this._extrudeMat=i.create(),this._color=o.create()}return e.prototype.dispose=function(){},e.prototype.render=function(e,t,r,o,s,f,c,l,_,u,d,m){var h=this;this._initialized||this._initialize(e);var v=l.hasDataDrivenIconSize?1:l.getLayoutValue("icon-size",r),D=l.hasDataDrivenIconColor?[1,1,1,1]:l.getPaintValue("icon-color",r),p=l.hasDataDrivenIconOpacity?1:l.getPaintValue("icon-opacity",r),x=D[3]*p*m;this._color[0]=x*D[0],this._color[1]=x*D[1],this._color[2]=x*D[2],this._color[3]=x;var y=l.getLayoutValue("icon-rotation-alignment",r);2===y&&(y=1===l.getLayoutValue("symbol-placement",r)?0:1);var g=0===y,V=t.isSDF,b=l.hasDataDrivenIcon,z=3===o,U=a.degToByte(s),A=c.tileTransform.transform,O=l.getPaintValue("icon-translate",r);if(0!==O[0]||0!==O[1]){i.copy(this._viewProjMat,c.tileTransform.transform);var S=O[0],M=O[1],I=0,P=0,j=c.coordRange/512,w=(1<<c.key.level)/Math.pow(2,r)*j;if(1===l.getPaintValue("icon-translate-anchor",r)){var L=-a.C_DEG_TO_RAD*s,T=Math.sin(L),B=Math.cos(L);I=w*(S*B-M*T),P=w*(S*T+M*B)}else I=w*S,P=w*M;this._offsetVector[0]=I,this._offsetVector[1]=P,this._offsetVector[2]=0,i.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),A=this._viewProjMat}g?i.copy(this._extrudeMat,u):i.copy(this._extrudeMat,d);var C=this._getIconVAO(e,c,b);if(C){e.bindVAO(C);var F=this._shaderVariations.getProgram([V,b,z],void 0,void 0,b?this._attributeLocationsDD:this._attributeLocations);if(e.bindProgram(F),V){var E=l.getPaintValue("icon-halo-color",r),k=l.getPaintValue("icon-halo-width",r);F.setUniform4f("u_outlineColor",E[0],E[1],E[2],E[3]),F.setUniform1f("u_outlineSize",k)}if(F.setUniformMatrix4fv("u_transformMatrix",A),F.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat),F.setUniform2fv("u_normalized_origin",c.tileTransform.displayCoord),F.setUniform1f("u_depth",l.z),F.setUniform1f("u_mapRotation",U),F.setUniform1f("u_keepUpright",0),F.setUniform1f("u_level",10*r),F.setUniform1f("u_fadeSpeed",10*f.fadeSpeed),F.setUniform1f("u_minfadeLevel",10*f.minfadeLevel),F.setUniform1f("u_maxfadeLevel",10*f.maxfadeLevel),F.setUniform1f("u_fadeChange",10*(r+f.fadeChange)),F.setUniform1i("u_texture",1),F.setUniform1f("u_size",v),F.setUniform4fv("u_color",this._color),z){var R=n.int32To4Bytes(t.layerID);F.setUniform4f("u_id",R[0],R[1],R[2],R[3])}t.markerPerPageElementsMap.forEach((function(t,i){h._spritesTextureSize[0]=_.getWidth(i)/4,h._spritesTextureSize[1]=_.getHeight(i)/4,F.setUniform2fv("u_mosaicSize",h._spritesTextureSize),_.bind(e,9729,i,1),e.drawElements(4,t[1],5125,12*t[0])})),e.bindVAO()}},e.prototype._initialize=function(e){if(this._initialized)return!0;var t=new f("icon",["iconVS","iconFS"],[],s,e);return t.addDefine("SDF","SDF",[!0,!0],"SDF"),t.addDefine("DD","DD",[!0,!1],"DD"),t.addDefine("ID","ID",[!0,!0],"ID"),this._shaderVariations=t,this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:24,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_size",count:1,type:5126,offset:20,stride:24,normalized:!1,divisor:0}]},this._initialized=!0,!0},e.prototype._getIconVAO=function(e,t,i){if(i){if(t.iconDDVertexArrayObject)return t.iconDDVertexArrayObject;var r=t.iconDDVertexBuffer,o=t.iconIndexBuffer;return r&&o?(t.iconDDVertexArrayObject=new c(e,this._attributeLocationsDD,this._vertexAttributesDD,{geometry:r},o),t.iconDDVertexArrayObject):null}if(t.iconVertexArrayObject)return t.iconVertexArrayObject;r=t.iconVertexBuffer,o=t.iconIndexBuffer;return r&&o?(t.iconVertexArrayObject=new c(e,this._attributeLocations,this._vertexAttributes,{geometry:r},o),t.iconVertexArrayObject):null},e}()}));