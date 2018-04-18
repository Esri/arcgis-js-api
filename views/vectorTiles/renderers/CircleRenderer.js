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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec3","../GeometryUtils","./rendererUtils","./vtShaderSnippets","../../webgl/ShaderVariations","../../webgl/VertexArrayObject"],function(t,e,i,r,a,o,n,s,c){return function(){function t(){this._attributeLocations={a_pos:0,a_color:1,a_stroke_color:2,a_data:3},this._initialized=!1,this._viewProjMat=i.create(),this._offsetVector=r.create()}return t.prototype.dispose=function(){},t.prototype.render=function(t,e,r,n,s,c,l,f,_){if(0!==e.triangleElementCount){this._initialized||this._initialize(t);var d=_*l.getPaintValue("circle-opacity",r),u=3===n,m=c.tileTransform.transform,h=l.getPaintValue("circle-translate",r);if(0!==h[0]||0!==h[1]){i.copy(this._viewProjMat,c.tileTransform.transform);var v=h[0],p=h[1],y=0,V=0,g=c.coordRange/512,b=(1<<c.key.level)/Math.pow(2,r)*g;if(1===l.getPaintValue("circle-translate-anchor",r)){var x=-a.C_DEG_TO_RAD*s,z=Math.sin(x),A=Math.cos(x);y=b*(v*A-p*z),V=b*(v*z+p*A)}else y=b*v,V=b*p;this._offsetVector[0]=y,this._offsetVector[1]=V,this._offsetVector[2]=0,i.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),m=this._viewProjMat}var M=this._getCircleVAO(t,c);if(M){t.bindVAO(M);var w=this._shaderVariations.getProgram([u],void 0,void 0,this._attributeLocations);if(t.bindProgram(w),w.setUniformMatrix4fv("u_transformMatrix",m),w.setUniformMatrix4fv("u_extrudeMatrix",f),w.setUniform2fv("u_normalized_origin",c.tileTransform.displayCoord),w.setUniform1f("u_depth",l.z),w.setUniform1f("u_opacity",d),w.setUniform1f("u_antialiasingWidth",1.2),u){var j=o.int32To4Bytes(e.layerID);w.setUniform4f("u_id",j[0],j[1],j[2],j[3])}t.drawElements(4,e.triangleElementCount,5125,12*e.triangleElementStart),t.bindVAO()}}},t.prototype._initialize=function(t){if(this._initialized)return!0;var e=new s("circle",["circleVS","circleFS"],[],n,t);return e.addDefine("ID","ID",[!0,!0],"ID"),this._shaderVariations=e,this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},this._initialized=!0,!0},t.prototype._getCircleVAO=function(t,e){if(e.circleVertexArrayObject)return e.circleVertexArrayObject;var i=e.circleVertexBuffer,r=e.circleIndexBuffer;return i&&r?(e.circleVertexArrayObject=new c(t,this._attributeLocations,this._vertexAttributes,{geometry:i},r),e.circleVertexArrayObject):null},t}()});