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

define(["require","exports","tslib","../../../../../core/libs/gl-matrix-2/mat3f32","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../../vectorTiles/shaders/Programs","../definitions","../enums","../number","./WGLBrush"],(function(t,r,e,o,a,i,s,n,_,u,c){Object.defineProperty(r,"__esModule",{value:!0});var f=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r._color=a.vec4f32.fromValues(1,0,0,1),r._patternMatrix=o.mat3f32.create(),r._programOptions={id:!1,pattern:!1},r}return e.__extends(r,t),r.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vao&&(this._vao.dispose(),this._vao=null)},r.prototype.drawMany=function(t,r){var e=t.context,o=t.styleLayerId;this._loadWGLResources(e);var a,i=t.displayLevel,s=t.styleLayer,c=t.painter.getVectorTileProgramCach(),f=s.getPaintValue("background-color",i),l=s.getPaintValue("background-opacity",i),p=s.getPaintValue("background-pattern",i),d=void 0!==p,m=f[3]*l,h=1|window.devicePixelRatio,g=t.spriteMosaic,v=h>n.VTL_HIGH_RES_CUTOFF?2:1,b=t.drawPhase===_.WGLDrawPhase.HITTEST,y=(b?1:0)<<1|(d?1:0),T=this._programOptions;T.id=b,T.pattern=d;var x=c.getProgram(0,y,T);if(e.bindVAO(this._vao),e.bindProgram(x),d){if(!(a=g.getMosaicItemPosition(p,!0)))return;x.setUniform1f("u_opacity",l),x.setUniform2f("u_pattern_tl",a.tl[0],a.tl[1]),x.setUniform2f("u_pattern_br",a.br[0],a.br[1]),x.setUniform1i("u_texture",n.VTL_TEXTURE_BINDING_UNIT_SPRITES),g.bind(e,9729,a.page,n.VTL_TEXTURE_BINDING_UNIT_SPRITES)}else this._color[0]=m*f[0],this._color[1]=m*f[1],this._color[2]=m*f[2],this._color[3]=m,x.setUniform4fv("u_color",this._color);if(x.setUniform1f("u_depth",s.z||0),b){var P=u.u32to4Xu8(o+1);x.setUniform4fv("u_id",P)}for(var U=0,M=r;U<M.length;U++){var I=M[U];if(x.setUniform1f("u_coord_range",I.coordRange[0]),x.setUniformMatrix3fv("u_dvsMat3",I.transforms.dvs),d){var L=Math.max(Math.pow(2,Math.round(i)-I.key.level),1),V=v*I.size[0]*L,w=V/a.size[0],R=V/a.size[1];this._patternMatrix[0]=w,this._patternMatrix[4]=R,x.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}e.setStencilFunction(514,I.stencilRef,255),e.drawArrays(5,0,4)}},r.prototype._loadWGLResources=function(t){if(!this._program||!this._vao){var r=i.createProgram(t,s.background);if(r){var e=new Int8Array([0,0,1,0,0,1,1,1]),o=i.BufferObject.createVertex(t,35044,e),a=new i.VertexArrayObject(t,s.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:o});this._program=r,this._vao=a}}},r}(c.default);r.WGLBrushVTLBackground=f}));