// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../enums","../number","./WGLBrush"],function(e,t,r,i,o,U,w,a){Object.defineProperty(t,"__esModule",{value:!0});o.enums.DataType,o.enums.PrimitiveType;var M=[1,1,1,1],s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._color=i.vec4f32.create(),e._strokeColor=i.vec4f32.create(),e._programOptions={id:!1},e._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},e}return r(e,t),e.prototype.dispose=function(){},e.prototype.drawMany=function(e,t){var r=e.context,i=e.state,a=e.drawPhase,o=e.styleLayerId,s=e.displayLevel,n=e.styleLayer,l=e.painter.getVectorTileProgramCach(),c=n.hasDataDrivenRadius?1:n.getPaintValue("circle-radius",s),u=n.hasDataDrivenColor?M:n.getPaintValue("circle-color",s),f=n.hasDataDrivenOpacity?1:n.getPaintValue("circle-opacity",s),d=n.hasDataDrivenStrokeWidth?1:n.getPaintValue("circle-stroke-width",s),m=n.hasDataDrivenStrokeColor?M:n.getPaintValue("circle-stroke-color",s),_=n.hasDataDrivenStrokeOpacity?1:n.getPaintValue("circle-stroke-opacity",s),v=n.hasDataDrivenBlur?0:n.getPaintValue("circle-blur",s),p=f*u[3];this._color[0]=p*u[0],this._color[1]=p*u[1],this._color[2]=p*u[2],this._color[3]=p,p=_*m[3],this._strokeColor[0]=p*m[0],this._strokeColor[1]=p*m[1],this._strokeColor[2]=p*m[2],this._strokeColor[3]=p;var h=n.getPaintValue("circle-translate",s),y=n.getPaintValue("circle-translate-anchor",s),g=a===U.WGLDrawPhase.HITTEST,V=g?1:0,D=this._programOptions;D.id=g;var P=l.getProgram(5,V,D);if(r.bindProgram(P),P.setUniformMatrix3fv("u_displayMat3",1===y?i.displayMat3:i.displayViewMat3),P.setUniform2fv("u_circleTranslation",h),P.setUniform1f("u_depth",n.z),P.setUniform1f("u_radius",c),P.setUniform4fv("u_color",this._color),P.setUniform1f("u_blur",v),P.setUniform1f("u_stroke_width",d),P.setUniform4fv("u_stroke_color",this._strokeColor),P.setUniform1f("u_antialiasingWidth",1.2),g){var b=w.u32to4Xu8(o);P.setUniform4f("u_id",b[0],b[1],b[2],b[3])}for(var k=0,x=t;k<x.length;k++){var C=x[k];if(C.layerData[o]){var O=C.layerData[o],A=this._getCircleVAO(r,C,l);A&&(r.bindVAO(A),P.setUniformMatrix3fv("u_dvsMat3",C.transforms.dvs),r.setStencilFunction(514,C.stencilRef,255),r.drawElements(4,O.triangleElementCount,5125,12*O.triangleElementStart),C.triangleCount+=O.triangleElementCount/3)}}},e.prototype._getCircleVAO=function(e,t,r){if(t.circleVertexArrayObject)return t.circleVertexArrayObject;var i=t.circleVertexBuffer,a=t.circleIndexBuffer;return i&&a?(t.circleVertexArrayObject=new o.VertexArrayObject(e,r.getProgramAttributes(5),this._vertexAttributes,{geometry:i},a),t.circleVertexArrayObject):null},e}(a.default);t.WGLBrushVTLCircle=s});