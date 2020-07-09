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

define(["require","exports","tslib","../../../../../core/libs/gl-matrix-2/vec2f32","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../definitions","../enums","../number","./WGLBrush"],(function(e,t,r,i,a,n,o,s,l,f){Object.defineProperty(t,"__esModule",{value:!0}),t.C_DEG_TO_RAD=Math.PI/180;var u=[1,1,1,1],d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._color=a.vec4f32.create(),t._dashArray=i.vec2f32.create(),t._programOptions={id:!1,dd:!1,pattern:!1},t._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5123,offset:8,stride:12,normalized:!1,divisor:0}]},t._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:20,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5122,offset:8,stride:20,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:20,normalized:!0,divisor:0},{name:"a_width",count:1,type:5126,offset:16,stride:20,normalized:!1,divisor:0}]},t}return r.__extends(t,e),t.prototype.dispose=function(){},t.prototype.drawMany=function(e,t){var r=e.context,i=e.displayLevel,a=e.state,n=e.drawPhase,f=e.styleLayerId,d=e.styleLayer,c=e.painter.getVectorTileProgramCach(),_=d.getPaintValue("line-translate",i),m=d.getPaintValue("line-translate-anchor",i),y=d.getPaintValue("line-pattern",i),v=void 0!==y,p=1/e.pixelRatio,h=d.getPaintValue("line-blur",i),g=d.hasDataDrivenColor?u:d.getPaintValue("line-color",i),D=d.hasDataDrivenOpacity?1:d.getPaintValue("line-opacity",i),b=d.hasDataDrivenWidth?1:d.getPaintValue("line-width",i),V=D*g[3];this._color[0]=V*g[0],this._color[1]=V*g[1],this._color[2]=V*g[2],this._color[3]=V;var x,A=d.hasDataDrivenLine,P=n===s.WGLDrawPhase.HITTEST;P&&(x=l.u32to4Xu8(f+1));var U=(P?1:0)<<2|(A?1:0)<<1|(v?1:0),O=this._programOptions;O.id=P,O.dd=A,O.pattern=v;var T=c.getProgram(3,U,O);if(r.bindProgram(T),T.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3),T.setUniformMatrix3fv("u_displayMat3",1===m?a.displayMat3:a.displayViewMat3),T.setUniform2fv("u_lineTranslation",_),T.setUniform1f("u_depth",d.z),T.setUniform1f("u_blur",h),T.setUniform1f("u_antialiasing",p),T.setUniform4fv("u_color",this._color),T.setUniform1f("u_width",b),P&&T.setUniform4fv("u_id",x),v){var I=e.spriteMosaic,M=I.getMosaicItemPosition(y,!0);M&&(I.bind(r,9729,M.page,o.VTL_TEXTURE_BINDING_UNIT_SPRITES),T.setUniform2f("u_pattern_tl",M.tl[0],M.br[1]),T.setUniform2f("u_pattern_br",M.br[0],M.tl[1]),T.setUniform2f("u_spriteSize",8*M.size[0],M.size[1]),T.setUniform1i("u_texture",o.VTL_TEXTURE_BINDING_UNIT_SPRITES))}else{var w=d.getPaintValue("line-dasharray",i);w.length<2&&(w=[1,-1]);this._dashArray[0]=8*w[0],this._dashArray[1]=8*w[1],T.setUniform2fv("u_dasharray",this._dashArray)}for(var L=0,z=t;L<z.length;L++){var E=z[L];if(E.layerData[f]){var j=E.layerData[f],B=this._getLineVAO(r,E,A,c);B&&(r.bindVAO(B),T.setUniformMatrix3fv("u_dvsMat3",E.transforms.dvs),r.setStencilFunction(514,E.stencilRef,255),r.drawElements(4,j.triangleElementCount,5125,12*j.triangleElementStart),E.triangleCount+=j.triangleElementCount/3)}}},t.prototype._getLineVAO=function(e,t,r,i){if(r){if(t.lineDDVertexArrayObject)return t.lineDDVertexArrayObject;var a=t.lineDDVertexBuffer,o=t.lineIndexBuffer;return a&&o?(t.lineDDVertexArrayObject=new n.VertexArrayObject(e,i.getProgramAttributes(3),this._vertexAttributesDD,{geometry:a},o),t.lineDDVertexArrayObject):null}if(t.lineVertexArrayObject)return t.lineVertexArrayObject;var s=t.lineVertexBuffer,l=t.lineIndexBuffer;return s&&l?(t.lineVertexArrayObject=new n.VertexArrayObject(e,i.getProgramAttributes(3),this._vertexAttributes,{geometry:s},l),t.lineVertexArrayObject):null},t}(f.default);t.WGLBrushVTLLine=d}));