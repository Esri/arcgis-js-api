// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat3","../../../core/libs/gl-matrix/vec4","../MemoryBuffer","./rendererUtils","./vtShaderSnippets","../../webgl/BufferObject","../../webgl/ShaderVariations","../../webgl/VertexArrayObject"],function(r,t,i,e,o,a,n,s,d,_){return function(){function r(){this._solidAttributeLocations={a_pos:0},this._attributeLocations={a_pos:0,a_id:1},this._patternMatrix=i.create(),this._color=e.create(),this._solidrendererInitialized=!1,this._rendererInitialized=!1,this._color.set([1,0,0,1])}return r.prototype.dispose=function(){this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},r.prototype.renderSolidColor=function(r,t){this._solidrendererInitialized||this._initializeSolidRenderer(r),r.bindVAO(this._solidVertexArrayObject);var i=this._shaderVariations.getProgram([!1,!1],void 0,void 0,this._solidAttributeLocations);r.bindProgram(i),i.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),i.setUniform2fv("u_normalized_origin",t.u_normalized_origin),i.setUniform1f("u_coord_range",t.u_coord_range||4096),i.setUniform1f("u_depth",t.u_depth||0),i.setUniform4fv("u_color",t.u_color||this._color),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,e,o,n,s,d,_,l){this._rendererInitialized||this._initialize(r);var f=s.getPaintValue("background-color",e),u=l*s.getPaintValue("background-opacity",e),c=s.getPaintValue("background-pattern",e),h=void 0!==c,p=f[3]*u,m=h||p<1;if((!m||0!==o)&&(m||1!==o)){var b=3===o,g=this._shaderVariations.getProgram([h,b],void 0,void 0,this._attributeLocations);if(r.bindVAO(this._vertexArrayObject),r.bindProgram(g),g.setUniform1f("u_coord_range",n.coordRange),g.setUniform1f("u_depth",s.z||0),g.setUniformMatrix4fv("u_transformMatrix",n.tileTransform.transform),g.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),h){var v=d.getMosaicItemPosition(c,!0);if(!v)return;var y=512*Math.pow(2,Math.floor(e)-n.key.level)*_;i.identity(this._patternMatrix);var x=y/v.size[0],A=y/v.size[1];this._patternMatrix[0]=x,this._patternMatrix[4]=A,d.bind(r,9729,v.page||0),g.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),g.setUniform1f("u_opacity",u),g.setUniform2f("u_pattern_tl",v.tl[0],v.tl[1]),g.setUniform2f("u_pattern_br",v.br[0],v.br[1]),g.setUniform1i("u_texture",0)}else this._color[0]=p*f[0],this._color[1]=p*f[1],this._color[2]=p*f[2],this._color[3]=p,g.setUniform4fv("u_color",this._color);if(b){var V=a.int32To4Bytes(t.layerID);g.setUniform4f("u_id",V[0],V[1],V[2],V[3])}r.drawArrays(5,0,4),r.bindVAO()}},r.prototype._initializeSolidRenderer=function(r){if(this._solidrendererInitialized)return!0;if(!this._shaderVariations){var t=new d("background",["backgroundVS","backgroundFS"],[],n,r);t.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN"),t.addDefine("ID","ID",[!0,!0],"ID"),this._shaderVariations=t}var i={a_pos:0},e={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},o=new Int8Array([0,0,1,0,0,1,1,1]),a=s.createVertex(r,35044,o),l=new _(r,i,e,{geometry:a});return this._solidVertexArrayObject=l,this._solidrendererInitialized=!0,!0},r.prototype._initialize=function(r){if(this._rendererInitialized)return!0;if(!this._shaderVariations){var t=new d("background",["backgroundVS","backgroundFS"],[],n,r);t.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN"),t.addDefine("ID","ID",[!0,!0],"ID"),this._shaderVariations=t}var i={a_pos:0},e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},a=[];a.push(o.i1616to32(0,0)),a.push(o.i1616to32(1,0)),a.push(o.i1616to32(0,1)),a.push(o.i1616to32(1,1));var l=new Uint32Array(a),f=s.createVertex(r,35044,l),u=new _(r,i,e,{geometry:f});return this._vertexArrayObject=u,this._rendererInitialized=!0,!0},r}()});