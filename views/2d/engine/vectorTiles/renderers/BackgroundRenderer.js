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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat3","../../../../../core/libs/gl-matrix-2/mat3f32","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../MemoryBuffer","./rendererUtils"],function(r,t,e,i,o,a,n,s){a.enums.DataType,a.enums.PrimitiveType,a.enums.TextureSamplingMode,a.enums.Usage;return function(){function r(r){this._patternMatrix=i.mat3f32.create(),this._color=o.vec4f32.create(),this._solidrendererInitialized=!1,this._rendererInitialized=!1,this._programOptions={id:!1,pattern:!1},this._programCache=r,this._color.set([1,0,0,1])}return r.prototype.dispose=function(){this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},r.prototype.renderSolidColor=function(r,t){this._solidrendererInitialized||this._initializeSolidRenderer(r),r.bindVAO(this._solidVertexArrayObject);var e=this._programOptions;e.id=!1,e.pattern=!1;var i=this._programCache.getProgram(0,0,e);r.bindProgram(i),i.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),i.setUniform2fv("u_normalized_origin",t.u_normalized_origin),i.setUniform1f("u_coord_range",t.u_coord_range||4096),i.setUniform1f("u_depth",t.u_depth||0),i.setUniform4fv("u_color",t.u_color||this._color),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,i,o,a,n,_,d,l){this._rendererInitialized||this._initialize(r);var f=t.getPaintValue("background-color",a),u=l*t.getPaintValue("background-opacity",a),m=t.getPaintValue("background-pattern",a),c=void 0!==m,p=f[3]*u,h=4===n,g=(h?1:0)<<1|(c?1:0),y=this._programOptions;y.id=h,y.pattern=c;var x=this._programCache.getProgram(0,g,y);if(r.bindVAO(this._vertexArrayObject),r.bindProgram(x),x.setUniform1f("u_coord_range",o.coordRange),x.setUniform1f("u_depth",t.z||0),x.setUniformMatrix4fv("u_transformMatrix",o.tileTransform.transform),x.setUniform2fv("u_normalized_origin",o.tileTransform.displayCoord),c){var b=_.getMosaicItemPosition(m,!0);if(!b)return 0;var v=d>s.HIGH_RES_CUTOFF?2:1,O=Math.max(Math.pow(2,Math.round(a)-o.key.level),1),A=512*v*O;e.mat3.identity(this._patternMatrix);var z=A/b.size[0],U=A/b.size[1];this._patternMatrix[0]=z,this._patternMatrix[4]=U,_.bind(r,9729,b.page,5),x.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),x.setUniform1f("u_opacity",u),x.setUniform2f("u_pattern_tl",b.tl[0],b.tl[1]),x.setUniform2f("u_pattern_br",b.br[0],b.br[1]),x.setUniform1i("u_texture",5)}else this._color[0]=p*f[0],this._color[1]=p*f[1],this._color[2]=p*f[2],this._color[3]=p,x.setUniform4fv("u_color",this._color);if(h){var M=s.int32To4Bytes(i);x.setUniform4f("u_id",M[0],M[1],M[2],M[3])}return r.drawArrays(5,0,4),r.bindVAO(),2},r.prototype._initializeSolidRenderer=function(r){if(this._solidrendererInitialized)return!0;var t={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},e=new Int8Array([0,0,1,0,0,1,1,1]),i=a.BufferObject.createVertex(r,35044,e),o=new a.VertexArrayObject(r,this._programCache.getProgramAttributes(0),t,{geometry:i});return this._solidVertexArrayObject=o,this._solidrendererInitialized=!0,!0},r.prototype._initialize=function(r){if(this._rendererInitialized)return!0;var t={a_pos:0},e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},i=[];i.push(n.i1616to32(0,0)),i.push(n.i1616to32(1,0)),i.push(n.i1616to32(0,1)),i.push(n.i1616to32(1,1));var o=new Uint32Array(i),s=a.BufferObject.createVertex(r,35044,o),_=new a.VertexArrayObject(r,t,e,{geometry:s});return this._vertexArrayObject=_,this._rendererInitialized=!0,!0},r}()});