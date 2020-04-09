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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/mat3f32","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../../vectorTiles/shaders/Programs","../definitions","../enums","../number","./WGLBrush"],(function(t,r,e,o,a,i,s,n,u,_,c){Object.defineProperty(r,"__esModule",{value:!0});i.enums.DataType,i.enums.Usage,i.enums.PrimitiveType,i.enums.TextureSamplingMode;var l=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r._color=a.vec4f32.fromValues(1,0,0,1),r._patternMatrix=o.mat3f32.create(),r._programOptions={id:!1,pattern:!1},r}return e(r,t),r.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vao&&(this._vao.dispose(),this._vao=null)},r.prototype.drawMany=function(t,r){var e=t.context,o=t.styleLayerId;this._loadWGLResources(e);var a,i=t.displayLevel,s=t.styleLayer,c=t.painter.getVectorTileProgramCach(),l=s.getPaintValue("background-color",i),p=s.getPaintValue("background-opacity",i),f=s.getPaintValue("background-pattern",i),m=void 0!==f,d=l[3]*p,g=1|window.devicePixelRatio,h=t.spriteMosaic,v=g>n.VTL_HIGH_RES_CUTOFF?2:1,y=t.drawPhase===u.WGLDrawPhase.HITTEST,T=(y?1:0)<<1|(m?1:0),b=this._programOptions;b.id=y,b.pattern=m;var x=c.getProgram(0,T,b);if(e.bindVAO(this._vao),e.bindProgram(x),m){if(!(a=h.getMosaicItemPosition(f,!0)))return;x.setUniform1f("u_opacity",p),x.setUniform2f("u_pattern_tl",a.tl[0],a.tl[1]),x.setUniform2f("u_pattern_br",a.br[0],a.br[1]),x.setUniform1i("u_texture",n.VTL_TEXTURE_BINDING_UNIT_SPRITES),h.bind(e,9729,a.page,n.VTL_TEXTURE_BINDING_UNIT_SPRITES)}else this._color[0]=d*l[0],this._color[1]=d*l[1],this._color[2]=d*l[2],this._color[3]=d,x.setUniform4fv("u_color",this._color);if(x.setUniform1f("u_depth",s.z||0),y){var P=_.u32to4Xu8(o);x.setUniform4f("u_id",P[0],P[1],P[2],P[3])}for(var U=0,M=r;U<M.length;U++){var I=M[U];if(x.setUniform1f("u_coord_range",I.coordRange[0]),x.setUniformMatrix3fv("u_dvsMat3",I.transforms.dvs),m){var L=Math.max(Math.pow(2,Math.round(i)-I.key.level),1),V=v*I.size[0]*L,w=V/a.size[0],R=V/a.size[1];this._patternMatrix[0]=w,this._patternMatrix[4]=R,x.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}e.setStencilFunction(514,I.stencilRef,255),e.drawArrays(5,0,4)}},r.prototype._loadWGLResources=function(t){if(!this._program||!this._vao){var r=i.createProgram(t,s.background);if(r){var e=new Int8Array([0,0,1,0,0,1,1,1]),o=i.BufferObject.createVertex(t,35044,e),a=new i.VertexArrayObject(t,s.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:o});this._program=r,this._vao=a}}},r}(c.default);r.WGLBrushVTLBackground=l}));