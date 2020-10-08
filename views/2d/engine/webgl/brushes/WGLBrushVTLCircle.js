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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/vec4f32","../enums","../number","./WGLBrush"],(function(r,e,t,a,i,o,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WGLBrushVTLCircle=void 0;var l=[1,1,1,1],c=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e._color=i.vec4f32.create(),e._strokeColor=i.vec4f32.create(),e._programOptions={id:!1},e}return t.__extends(e,r),e.prototype.dispose=function(){},e.prototype.drawMany=function(r,e){var t=r.context,i=r.state,n=r.drawPhase,c=r.styleLayerId,u=r.displayLevel,f=r.styleLayer,d=r.painter.getVectorTileProgramCach(),h=f.hasDataDrivenRadius?1:f.getPaintValue("circle-radius",u),_=f.hasDataDrivenColor?l:f.getPaintValue("circle-color",u),v=f.hasDataDrivenOpacity?1:f.getPaintValue("circle-opacity",u),p=f.hasDataDrivenStrokeWidth?1:f.getPaintValue("circle-stroke-width",u),m=f.hasDataDrivenStrokeColor?l:f.getPaintValue("circle-stroke-color",u),y=f.hasDataDrivenStrokeOpacity?1:f.getPaintValue("circle-stroke-opacity",u),g=f.hasDataDrivenBlur?0:f.getPaintValue("circle-blur",u),D=v*_[3];this._color[0]=D*_[0],this._color[1]=D*_[1],this._color[2]=D*_[2],this._color[3]=D,D=y*m[3],this._strokeColor[0]=D*m[0],this._strokeColor[1]=D*m[1],this._strokeColor[2]=D*m[2],this._strokeColor[3]=D;var P=f.getPaintValue("circle-translate",u),V=f.getPaintValue("circle-translate-anchor",u),k=n===o.WGLDrawPhase.HITTEST,C=k?1:0,U=this._programOptions;U.id=k;var b=d.getProgram(5,C,U);if(t.bindProgram(b),b.setUniformMatrix3fv("u_displayMat3",1===V?i.displayMat3:i.displayViewMat3),b.setUniform2fv("u_circleTranslation",P),b.setUniform1f("u_depth",f.z),b.setUniform1f("u_radius",h),b.setUniform4fv("u_color",this._color),b.setUniform1f("u_blur",g),b.setUniform1f("u_stroke_width",p),b.setUniform4fv("u_stroke_color",this._strokeColor),b.setUniform1f("u_antialiasingWidth",1.2),k){var x=s.u32to4Xu8(c+1);b.setUniform4fv("u_id",x)}for(var L=0,M=e;L<M.length;L++){var T=M[L];if(T.layerData[c]){var w=T.layerData[c];w.prepareForRendering(t,d);var E=w.circleVertexArrayObject;a.isNone(E)||(t.bindVAO(E),b.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),t.setStencilFunction(514,T.stencilRef,255),t.drawElements(4,w.circleIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*w.circleIndexStart),T.triangleCount+=w.circleIndexCount/3)}}},e}(n.default);e.WGLBrushVTLCircle=c}));