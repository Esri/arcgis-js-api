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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f32","../../../../../core/libs/gl-matrix-2/vec3f32","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../GeometryUtils","./rendererUtils"],function(t,e,r,i,o,a,s,n,l){s.enums.DataType,s.enums.PrimitiveType;return function(){function t(t){this._viewProjMat=i.mat4f32.create(),this._offsetVector=o.vec3f32.create(),this._color=a.vec4f32.create(),this._strokeColor=a.vec4f32.create(),this._initialized=!1,this._programOptions={id:!1},this._programCache=t}return t.prototype.dispose=function(){},t.prototype.render=function(t,e,i,o,a,s,c,f,_){if(0===e.triangleElementCount)return 0;this._initialized||this._initialize(t);var u=c.hasDataDrivenRadius?1:c.getPaintValue("circle-radius",i),h=c.hasDataDrivenColor?[1,1,1,1]:c.getPaintValue("circle-color",i),m=c.hasDataDrivenOpacity?1:c.getPaintValue("circle-opacity",i),d=c.hasDataDrivenStrokeWidth?1:c.getPaintValue("circle-stroke-width",i),v=c.hasDataDrivenStrokeColor?[1,1,1,1]:c.getPaintValue("circle-stroke-color",i),g=c.hasDataDrivenStrokeOpacity?1:c.getPaintValue("circle-stroke-opacity",i),p=c.hasDataDrivenBlur?0:c.getPaintValue("circle-blur",i),y=m*h[3]*_;this._color[0]=y*h[0],this._color[1]=y*h[1],this._color[2]=y*h[2],this._color[3]=y,y=g*v[3]*_,this._strokeColor[0]=y*v[0],this._strokeColor[1]=y*v[1],this._strokeColor[2]=y*v[2],this._strokeColor[3]=y;var V=s.tileTransform.transform,x=c.getPaintValue("circle-translate",i);if(0!==x[0]||0!==x[1]){r.mat4.copy(this._viewProjMat,s.tileTransform.transform);var b=x[0],C=x[1],D=0,P=0,k=s.coordRange/512,O=(1<<s.key.level)/Math.pow(2,i)*k;if(1===c.getPaintValue("circle-translate-anchor",i)){var A=-n.C_DEG_TO_RAD*a,U=Math.sin(A),z=Math.cos(A);D=O*(b*z-C*U),P=O*(b*U+C*z)}else D=O*b,P=O*C;this._offsetVector[0]=D,this._offsetVector[1]=P,this._offsetVector[2]=0,r.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),V=this._viewProjMat}var M=this._getCircleVAO(t,s);if(!M)return 0;t.bindVAO(M);var w=3===o,j=w?1:0,T=this._programOptions;T.id=w;var E=this._programCache.getProgram(5,j,T);if(t.bindProgram(E),E.setUniformMatrix4fv("u_transformMatrix",V),E.setUniformMatrix4fv("u_extrudeMatrix",f),E.setUniform2fv("u_normalized_origin",s.tileTransform.displayCoord),E.setUniform1f("u_depth",c.z),E.setUniform1f("u_radius",u),E.setUniform4fv("u_color",this._color),E.setUniform1f("u_blur",p),E.setUniform1f("u_stroke_width",d),E.setUniform4fv("u_stroke_color",this._strokeColor),E.setUniform1f("u_antialiasingWidth",1.2),w){var B=l.int32To4Bytes(e.layerID);E.setUniform4f("u_id",B[0],B[1],B[2],B[3])}return t.drawElements(4,e.triangleElementCount,5125,12*e.triangleElementStart),t.bindVAO(),e.triangleCount()},t.prototype._initialize=function(t){return!!this._initialized||(this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},this._initialized=!0,!0)},t.prototype._getCircleVAO=function(t,e){if(e.circleVertexArrayObject)return e.circleVertexArrayObject;var r=e.circleVertexBuffer,i=e.circleIndexBuffer;return r&&i?(e.circleVertexArrayObject=new s.VertexArrayObject(t,this._programCache.getProgramAttributes(5),this._vertexAttributes,{geometry:r},i),e.circleVertexArrayObject):null},t}()});