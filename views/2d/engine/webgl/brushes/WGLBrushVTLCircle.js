// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../enums","../number","./WGLBrush"],(function(e,t,r,i,a,o,s,n){Object.defineProperty(t,"__esModule",{value:!0});var l=[1,1,1,1],c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._color=i.vec4f32.create(),t._strokeColor=i.vec4f32.create(),t._programOptions={id:!1},t._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},t}return r.__extends(t,e),t.prototype.dispose=function(){},t.prototype.drawMany=function(e,t){var r=e.context,i=e.state,a=e.drawPhase,n=e.styleLayerId,c=e.displayLevel,u=e.styleLayer,f=e.painter.getVectorTileProgramCach(),d=u.hasDataDrivenRadius?1:u.getPaintValue("circle-radius",c),_=u.hasDataDrivenColor?l:u.getPaintValue("circle-color",c),v=u.hasDataDrivenOpacity?1:u.getPaintValue("circle-opacity",c),m=u.hasDataDrivenStrokeWidth?1:u.getPaintValue("circle-stroke-width",c),h=u.hasDataDrivenStrokeColor?l:u.getPaintValue("circle-stroke-color",c),y=u.hasDataDrivenStrokeOpacity?1:u.getPaintValue("circle-stroke-opacity",c),g=u.hasDataDrivenBlur?0:u.getPaintValue("circle-blur",c),p=v*_[3];this._color[0]=p*_[0],this._color[1]=p*_[1],this._color[2]=p*_[2],this._color[3]=p,p=y*h[3],this._strokeColor[0]=p*h[0],this._strokeColor[1]=p*h[1],this._strokeColor[2]=p*h[2],this._strokeColor[3]=p;var V=u.getPaintValue("circle-translate",c),b=u.getPaintValue("circle-translate-anchor",c),D=a===o.WGLDrawPhase.HITTEST,P=D?1:0,k=this._programOptions;k.id=D;var x=f.getProgram(5,P,k);if(r.bindProgram(x),x.setUniformMatrix3fv("u_displayMat3",1===b?i.displayMat3:i.displayViewMat3),x.setUniform2fv("u_circleTranslation",V),x.setUniform1f("u_depth",u.z),x.setUniform1f("u_radius",d),x.setUniform4fv("u_color",this._color),x.setUniform1f("u_blur",g),x.setUniform1f("u_stroke_width",m),x.setUniform4fv("u_stroke_color",this._strokeColor),x.setUniform1f("u_antialiasingWidth",1.2),D){var C=s.u32to4Xu8(n+1);x.setUniform4fv("u_id",C)}for(var O=0,A=t;O<A.length;O++){var U=A[O];if(U.layerData[n]){var w=U.layerData[n],M=this._getCircleVAO(r,U,f);M&&(r.bindVAO(M),x.setUniformMatrix3fv("u_dvsMat3",U.transforms.dvs),r.setStencilFunction(514,U.stencilRef,255),r.drawElements(4,w.triangleElementCount,5125,12*w.triangleElementStart),U.triangleCount+=w.triangleElementCount/3)}}},t.prototype._getCircleVAO=function(e,t,r){if(t.circleVertexArrayObject)return t.circleVertexArrayObject;var i=t.circleVertexBuffer,o=t.circleIndexBuffer;return i&&o?(t.circleVertexArrayObject=new a.VertexArrayObject(e,r.getProgramAttributes(5),this._vertexAttributes,{geometry:i},o),t.circleVertexArrayObject):null},t}(n.default);t.WGLBrushVTLCircle=c}));