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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../GeometryUtils","./rendererUtils","../../webgl/VertexArrayObject"],function(t,e,r,i,o,a){return function(){function t(t){this._viewProjMat=r.mat4f32.create(),this._offsetVector=r.vec3f32.create(),this._color=r.vec4f32.create(),this._strokeColor=r.vec4f32.create(),this._initialized=!1,this._programOptions={id:!1},this._programCache=t}return t.prototype.dispose=function(){},t.prototype.render=function(t,e,a,s,n,l,c,f,_){if(0!==e.triangleElementCount){this._initialized||this._initialize(t);var h=c.hasDataDrivenRadius?1:c.getPaintValue("circle-radius",a),u=c.hasDataDrivenColor?[1,1,1,1]:c.getPaintValue("circle-color",a),m=c.hasDataDrivenOpacity?1:c.getPaintValue("circle-opacity",a),d=c.hasDataDrivenStrokeWidth?1:c.getPaintValue("circle-stroke-width",a),v=c.hasDataDrivenStrokeColor?[1,1,1,1]:c.getPaintValue("circle-stroke-color",a),g=c.hasDataDrivenStrokeOpacity?1:c.getPaintValue("circle-stroke-opacity",a),p=c.hasDataDrivenBlur?0:c.getPaintValue("circle-blur",a),y=m*u[3]*_;this._color[0]=y*u[0],this._color[1]=y*u[1],this._color[2]=y*u[2],this._color[3]=y,y=g*v[3]*_,this._strokeColor[0]=y*v[0],this._strokeColor[1]=y*v[1],this._strokeColor[2]=y*v[2],this._strokeColor[3]=y;var V=l.tileTransform.transform,x=c.getPaintValue("circle-translate",a);if(0!==x[0]||0!==x[1]){r.mat4.copy(this._viewProjMat,l.tileTransform.transform);var C=x[0],D=x[1],P=0,k=0,b=l.coordRange/512,O=(1<<l.key.level)/Math.pow(2,a)*b;if(1===c.getPaintValue("circle-translate-anchor",a)){var A=-i.C_DEG_TO_RAD*n,U=Math.sin(A),z=Math.cos(A);P=O*(C*z-D*U),k=O*(C*U+D*z)}else P=O*C,k=O*D;this._offsetVector[0]=P,this._offsetVector[1]=k,this._offsetVector[2]=0,r.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),V=this._viewProjMat}var M=this._getCircleVAO(t,l);if(M){t.bindVAO(M);var w=3===s,j=w?1:0,E=this._programOptions;E.id=w;var T=this._programCache.getProgram(5,j,E);if(t.bindProgram(T),T.setUniformMatrix4fv("u_transformMatrix",V),T.setUniformMatrix4fv("u_extrudeMatrix",f),T.setUniform2fv("u_normalized_origin",l.tileTransform.displayCoord),T.setUniform1f("u_depth",c.z),T.setUniform1f("u_radius",h),T.setUniform4fv("u_color",this._color),T.setUniform1f("u_blur",p),T.setUniform1f("u_stroke_width",d),T.setUniform4fv("u_stroke_color",this._strokeColor),T.setUniform1f("u_antialiasingWidth",1.2),w){var B=o.int32To4Bytes(e.layerID);T.setUniform4f("u_id",B[0],B[1],B[2],B[3])}t.drawElements(4,e.triangleElementCount,5125,12*e.triangleElementStart),t.bindVAO()}}},t.prototype._initialize=function(t){return!!this._initialized||(this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},this._initialized=!0,!0)},t.prototype._getCircleVAO=function(t,e){if(e.circleVertexArrayObject)return e.circleVertexArrayObject;var r=e.circleVertexBuffer,i=e.circleIndexBuffer;return r&&i?(e.circleVertexArrayObject=new a(t,this._programCache.getProgramAttributes(5),this._vertexAttributes,{geometry:r},i),e.circleVertexArrayObject):null},t}()});