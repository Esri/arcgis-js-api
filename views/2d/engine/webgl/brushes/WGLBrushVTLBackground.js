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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/mat3f32","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../../vectorTiles/shaders/Programs","../definitions","../enums","../number","./WGLBrush"],function(t,r,e,o,a,i,s,V,w,R,n){Object.defineProperty(r,"__esModule",{value:!0});i.enums.DataType,i.enums.Usage,i.enums.PrimitiveType,i.enums.TextureSamplingMode;var u=function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t._color=a.vec4f32.fromValues(1,0,0,1),t._patternMatrix=o.mat3f32.create(),t._programOptions={id:!1,pattern:!1},t}return e(t,r),t.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vao&&(this._vao.dispose(),this._vao=null)},t.prototype.drawMany=function(t,r){var e=t.context,o=t.styleLayerId;this._loadWGLResources(e);var a,i=t.displayLevel,s=t.styleLayer,n=t.painter.getVectorTileProgramCach(),u=s.getPaintValue("background-color",i),_=s.getPaintValue("background-opacity",i),c=s.getPaintValue("background-pattern",i),l=void 0!==c,p=u[3]*_,f=1|window.devicePixelRatio,m=t.spriteMosaic,d=f>V.VTL_HIGH_RES_CUTOFF?2:1,g=t.drawPhase===w.WGLDrawPhase.HITTEST,h=(g?1:0)<<1|(l?1:0),v=this._programOptions;v.id=g,v.pattern=l;var y=n.getProgram(0,h,v);if(e.bindVAO(this._vao),e.bindProgram(y),l){if(!(a=m.getMosaicItemPosition(c,!0)))return;y.setUniform1f("u_opacity",_),y.setUniform2f("u_pattern_tl",a.tl[0],a.tl[1]),y.setUniform2f("u_pattern_br",a.br[0],a.br[1]),y.setUniform1i("u_texture",V.VTL_TEXTURE_BINDING_UNIT_SPRITES),m.bind(e,9729,a.page,V.VTL_TEXTURE_BINDING_UNIT_SPRITES)}else this._color[0]=p*u[0],this._color[1]=p*u[1],this._color[2]=p*u[2],this._color[3]=p,y.setUniform4fv("u_color",this._color);if(y.setUniform1f("u_depth",s.z||0),g){var T=R.u32to4Xu8(o);y.setUniform4f("u_id",T[0],T[1],T[2],T[3])}for(var b=0,x=r;b<x.length;b++){var P=x[b];if(y.setUniform1f("u_coord_range",P.coordRange[0]),y.setUniformMatrix3fv("u_dvsMat3",P.transforms.dvs),l){var U=Math.max(Math.pow(2,Math.round(i)-P.key.level),1),M=d*P.size[0]*U,I=M/a.size[0],L=M/a.size[1];this._patternMatrix[0]=I,this._patternMatrix[4]=L,y.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}e.setStencilFunction(514,P.stencilRef,255),e.drawArrays(5,0,4)}},t.prototype._loadWGLResources=function(t){if(!this._program||!this._vao){var r=i.createProgram(t,s.background);if(r){var e=new Int8Array([0,0,1,0,0,1,1,1]),o=i.BufferObject.createVertex(t,35044,e),a=new i.VertexArrayObject(t,s.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:o});this._program=r,this._vao=a}}},t}(n.default);r.WGLBrushVTLBackground=u});