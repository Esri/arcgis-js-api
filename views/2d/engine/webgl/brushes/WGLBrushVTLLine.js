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

define(["require","exports","tslib","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/vec2f32","../../../../../core/libs/gl-matrix-2/vec4f32","../definitions","../enums","../number","./WGLBrush"],(function(e,t,r,a,i,n,s,o,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WGLBrushVTLLine=t.C_DEG_TO_RAD=void 0,t.C_DEG_TO_RAD=Math.PI/180;var _=[1,1,1,1],f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._color=n.vec4f32.create(),t._dashArray=i.vec2f32.create(),t._programOptions={id:!1,dd:!1,pattern:!1},t}return r.__extends(t,e),t.prototype.dispose=function(){},t.prototype.drawMany=function(e,t){var r=e.context,i=e.displayLevel,n=e.state,u=e.drawPhase,f=e.styleLayerId,d=e.styleLayer,c=e.painter.getVectorTileProgramCach(),h=d.getPaintValue("line-translate",i),p=d.getPaintValue("line-translate-anchor",i),v=d.getPaintValue("line-pattern",i),m=void 0!==v,y=1/e.pixelRatio,g=d.getPaintValue("line-blur",i),T=d.hasDataDrivenColor?_:d.getPaintValue("line-color",i),U=d.hasDataDrivenOpacity?1:d.getPaintValue("line-opacity",i),P=d.hasDataDrivenWidth?1:d.getPaintValue("line-width",i),V=U*T[3];this._color[0]=V*T[0],this._color[1]=V*T[1],this._color[2]=V*T[2],this._color[3]=V;var D,b=d.hasDataDrivenLine,E=u===o.WGLDrawPhase.HITTEST;E&&(D=l.u32to4Xu8(f+1));var I=(E?1:0)<<2|(b?1:0)<<1|(m?1:0),L=this._programOptions;L.id=E,L.dd=b,L.pattern=m;var M=c.getProgram(3,I,L);if(r.bindProgram(M),M.setUniformMatrix3fv("u_displayViewMat3",n.displayViewMat3),M.setUniformMatrix3fv("u_displayMat3",1===p?n.displayMat3:n.displayViewMat3),M.setUniform2fv("u_lineTranslation",h),M.setUniform1f("u_depth",d.z),M.setUniform1f("u_blur",g),M.setUniform1f("u_antialiasing",y),M.setUniform4fv("u_color",this._color),M.setUniform1f("u_width",P),E&&M.setUniform4fv("u_id",D),m){var x=e.spriteMosaic,R=x.getMosaicItemPosition(v,!0);R&&(x.bind(r,9729,R.page,s.VTL_TEXTURE_BINDING_UNIT_SPRITES),M.setUniform2f("u_pattern_tl",R.tl[0],R.br[1]),M.setUniform2f("u_pattern_br",R.br[0],R.tl[1]),M.setUniform2f("u_spriteSize",8*R.size[0],R.size[1]),M.setUniform1i("u_texture",s.VTL_TEXTURE_BINDING_UNIT_SPRITES))}else{var w=d.getPaintValue("line-dasharray",i);w.length<2&&(w=[1,-1]);this._dashArray[0]=8*w[0],this._dashArray[1]=8*w[1],M.setUniform2fv("u_dasharray",this._dashArray)}for(var A=0,S=t;A<S.length;A++){var G=S[A];if(G.layerData[f]){var N=G.layerData[f];N.prepareForRendering(r,c);var O=N.lineVertexArrayObject;a.isNone(O)||(r.bindVAO(O),M.setUniformMatrix3fv("u_dvsMat3",G.transforms.dvs),r.setStencilFunction(514,G.stencilRef,255),r.drawElements(4,N.lineIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*N.lineIndexStart),G.triangleCount+=N.lineIndexCount/3)}}},t}(u.default);t.WGLBrushVTLLine=f}));