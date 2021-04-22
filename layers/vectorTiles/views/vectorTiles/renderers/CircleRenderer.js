// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec3","../../../core/libs/gl-matrix/vec4","../GeometryUtils","./rendererUtils","./vtShaderSnippets","../../webgl/ShaderVariations","../../webgl/VertexArrayObject"],(function(t,e,r,i,o,a,s,n,l,c){return function(){function t(){this._attributeLocations={a_pos:0,a_color:1,a_stroke_color:2,a_data:3},this._initialized=!1,this._viewProjMat=r.create(),this._offsetVector=i.create(),this._color=o.create(),this._strokeColor=o.create()}return t.prototype.dispose=function(){},t.prototype.render=function(t,e,i,o,n,l,c,f,_){if(0!==e.triangleElementCount){this._initialized||this._initialize(t);var h=c.hasDataDrivenRadius?1:c.getPaintValue("circle-radius",i),u=c.hasDataDrivenColor?[1,1,1,1]:c.getPaintValue("circle-color",i),d=c.hasDataDrivenOpacity?1:c.getPaintValue("circle-opacity",i),m=c.hasDataDrivenStrokeWidth?1:c.getPaintValue("circle-stroke-width",i),v=c.hasDataDrivenStrokeColor?[1,1,1,1]:c.getPaintValue("circle-stroke-color",i),V=c.hasDataDrivenStrokeOpacity?1:c.getPaintValue("circle-stroke-opacity",i),g=c.hasDataDrivenBlur?0:c.getPaintValue("circle-blur",i),p=d*u[3]*_;this._color[0]=p*u[0],this._color[1]=p*u[1],this._color[2]=p*u[2],this._color[3]=p,p=V*v[3]*_,this._strokeColor[0]=p*v[0],this._strokeColor[1]=p*v[1],this._strokeColor[2]=p*v[2],this._strokeColor[3]=p;var y=l.tileTransform.transform,D=c.getPaintValue("circle-translate",i);if(0!==D[0]||0!==D[1]){r.copy(this._viewProjMat,l.tileTransform.transform);var b=D[0],x=D[1],k=0,P=0,C=l.coordRange/512,w=(1<<l.key.level)/Math.pow(2,i)*C;if(1===c.getPaintValue("circle-translate-anchor",i)){var U=-a.C_DEG_TO_RAD*n,z=Math.sin(U),A=Math.cos(U);k=w*(b*A-x*z),P=w*(b*z+x*A)}else k=w*b,P=w*x;this._offsetVector[0]=k,this._offsetVector[1]=P,this._offsetVector[2]=0,r.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),y=this._viewProjMat}var M=this._getCircleVAO(t,l);if(M){t.bindVAO(M);var O=3===o,j=this._shaderVariations.getProgram([O],void 0,void 0,this._attributeLocations);if(t.bindProgram(j),j.setUniformMatrix4fv("u_transformMatrix",y),j.setUniformMatrix4fv("u_extrudeMatrix",f),j.setUniform2fv("u_normalized_origin",l.tileTransform.displayCoord),j.setUniform1f("u_depth",c.z),j.setUniform1f("u_radius",h),j.setUniform4fv("u_color",this._color),j.setUniform1f("u_blur",g),j.setUniform1f("u_stroke_width",m),j.setUniform4fv("u_stroke_color",this._strokeColor),j.setUniform1f("u_antialiasingWidth",1.2),O){var S=s.int32To4Bytes(e.layerID);j.setUniform4f("u_id",S[0],S[1],S[2],S[3])}t.drawElements(4,e.triangleElementCount,5125,12*e.triangleElementStart),t.bindVAO()}}},t.prototype._initialize=function(t){if(this._initialized)return!0;var e=new l("circle",["circleVS","circleFS"],[],n,t);return e.addDefine("ID","ID",[!0,!0],"ID"),this._shaderVariations=e,this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},this._initialized=!0,!0},t.prototype._getCircleVAO=function(t,e){if(e.circleVertexArrayObject)return e.circleVertexArrayObject;var r=e.circleVertexBuffer,i=e.circleIndexBuffer;return r&&i?(e.circleVertexArrayObject=new c(t,this._attributeLocations,this._vertexAttributes,{geometry:r},i),e.circleVertexArrayObject):null},t}()}));