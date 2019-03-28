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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f32","../../../core/libs/gl-matrix-2/vec4f32","../MemoryBuffer","./rendererUtils","../../webgl/BufferObject","../../webgl/VertexArrayObject"],function(r,t,e,i,o,a,n,s,_){return function(){function r(r){this._patternMatrix=i.mat3f32.create(),this._color=o.vec4f32.create(),this._solidrendererInitialized=!1,this._rendererInitialized=!1,this._programOptions={id:!1,pattern:!1},this._programCache=r,this._color.set([1,0,0,1])}return r.prototype.dispose=function(){this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},r.prototype.renderSolidColor=function(r,t){this._solidrendererInitialized||this._initializeSolidRenderer(r),r.bindVAO(this._solidVertexArrayObject);var e=this._programOptions;e.id=!1,e.pattern=!1;var i=this._programCache.getProgram(0,0,e);r.bindProgram(i),i.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),i.setUniform2fv("u_normalized_origin",t.u_normalized_origin),i.setUniform1f("u_coord_range",t.u_coord_range||4096),i.setUniform1f("u_depth",t.u_depth||0),i.setUniform4fv("u_color",t.u_color||this._color),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,i,o,a,s,_,d,l){this._rendererInitialized||this._initialize(r);var f=s.getPaintValue("background-color",i),c=l*s.getPaintValue("background-opacity",i),m=s.getPaintValue("background-pattern",i),u=void 0!==m,h=f[3]*c,p=u||h<1;if((!p||0!==o)&&(p||1!==o)){var g=3===o,y=(g?1:0)<<1|(u?1:0),b=this._programOptions;b.id=g,b.pattern=u;var v=this._programCache.getProgram(0,y,b);if(r.bindVAO(this._vertexArrayObject),r.bindProgram(v),v.setUniform1f("u_coord_range",a.coordRange),v.setUniform1f("u_depth",s.z||0),v.setUniformMatrix4fv("u_transformMatrix",a.tileTransform.transform),v.setUniform2fv("u_normalized_origin",a.tileTransform.displayCoord),u){var x=_.getMosaicItemPosition(m,!0);if(!x)return;var z=512*Math.pow(2,Math.floor(i)-a.key.level)*d;e.mat3.identity(this._patternMatrix);var A=z/x.size[0],O=z/x.size[1];this._patternMatrix[0]=A,this._patternMatrix[4]=O,_.bind(r,9729,x.page,5),v.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),v.setUniform1f("u_opacity",c),v.setUniform2f("u_pattern_tl",x.tl[0],x.tl[1]),v.setUniform2f("u_pattern_br",x.br[0],x.br[1]),v.setUniform1i("u_texture",5)}else this._color[0]=h*f[0],this._color[1]=h*f[1],this._color[2]=h*f[2],this._color[3]=h,v.setUniform4fv("u_color",this._color);if(g){var U=n.int32To4Bytes(t.layerID);v.setUniform4f("u_id",U[0],U[1],U[2],U[3])}r.drawArrays(5,0,4),r.bindVAO()}},r.prototype._initializeSolidRenderer=function(r){if(this._solidrendererInitialized)return!0;var t={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},e=new Int8Array([0,0,1,0,0,1,1,1]),i=s.createVertex(r,35044,e),o=new _(r,this._programCache.getProgramAttributes(0),t,{geometry:i});return this._solidVertexArrayObject=o,this._solidrendererInitialized=!0,!0},r.prototype._initialize=function(r){if(this._rendererInitialized)return!0;var t={a_pos:0},e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},i=[];i.push(a.i1616to32(0,0)),i.push(a.i1616to32(1,0)),i.push(a.i1616to32(0,1)),i.push(a.i1616to32(1,1));var o=new Uint32Array(i),n=s.createVertex(r,35044,o),d=new _(r,t,e,{geometry:n});return this._vertexArrayObject=d,this._rendererInitialized=!0,!0},r}()});