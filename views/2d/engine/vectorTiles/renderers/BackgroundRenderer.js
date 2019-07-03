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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat3","../../../../../core/libs/gl-matrix-2/mat3f32","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../MemoryBuffer","./rendererUtils"],function(r,e,t,i,o,n,a,s){n.enums.DataType,n.enums.PrimitiveType,n.enums.TextureSamplingMode,n.enums.Usage;return function(){function r(r){this._patternMatrix=i.mat3f32.create(),this._color=o.vec4f32.create(),this._solidrendererInitialized=!1,this._rendererInitialized=!1,this._programOptions={id:!1,pattern:!1},this._programCache=r,this._color.set([1,0,0,1])}return r.prototype.dispose=function(){this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},r.prototype.renderSolidColor=function(r,e){this._solidrendererInitialized||this._initializeSolidRenderer(r),r.bindVAO(this._solidVertexArrayObject);var t=this._programOptions;t.id=!1,t.pattern=!1;var i=this._programCache.getProgram(0,0,t);r.bindProgram(i),i.setUniformMatrix4fv("u_transformMatrix",e.u_matrix),i.setUniform2fv("u_normalized_origin",e.u_normalized_origin),i.setUniform1f("u_coord_range",e.u_coord_range||4096),i.setUniform1f("u_depth",e.u_depth||0),i.setUniform4fv("u_color",e.u_color||this._color),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,e,i,o,n,a,_,d,l){this._rendererInitialized||this._initialize(r);var f=a.getPaintValue("background-color",i),u=l*a.getPaintValue("background-opacity",i),m=a.getPaintValue("background-pattern",i),c=void 0!==m,p=f[3]*u,h=c||p<1;if(h&&0===o)return 0;if(!h&&1===o)return 0;var g=3===o,y=(g?1:0)<<1|(c?1:0),b=this._programOptions;b.id=g,b.pattern=c;var x=this._programCache.getProgram(0,y,b);if(r.bindVAO(this._vertexArrayObject),r.bindProgram(x),x.setUniform1f("u_coord_range",n.coordRange),x.setUniform1f("u_depth",a.z||0),x.setUniformMatrix4fv("u_transformMatrix",n.tileTransform.transform),x.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),c){var v=_.getMosaicItemPosition(m,!0);if(!v)return 0;var A=512*Math.pow(2,Math.floor(i)-n.key.level)*d;t.mat3.identity(this._patternMatrix);var O=A/v.size[0],z=A/v.size[1];this._patternMatrix[0]=O,this._patternMatrix[4]=z,_.bind(r,9729,v.page,5),x.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),x.setUniform1f("u_opacity",u),x.setUniform2f("u_pattern_tl",v.tl[0],v.tl[1]),x.setUniform2f("u_pattern_br",v.br[0],v.br[1]),x.setUniform1i("u_texture",5)}else this._color[0]=p*f[0],this._color[1]=p*f[1],this._color[2]=p*f[2],this._color[3]=p,x.setUniform4fv("u_color",this._color);if(g){var U=s.int32To4Bytes(e.layerID);x.setUniform4f("u_id",U[0],U[1],U[2],U[3])}return r.drawArrays(5,0,4),r.bindVAO(),e.triangleCount()},r.prototype._initializeSolidRenderer=function(r){if(this._solidrendererInitialized)return!0;var e={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},t=new Int8Array([0,0,1,0,0,1,1,1]),i=n.BufferObject.createVertex(r,35044,t),o=new n.VertexArrayObject(r,this._programCache.getProgramAttributes(0),e,{geometry:i});return this._solidVertexArrayObject=o,this._solidrendererInitialized=!0,!0},r.prototype._initialize=function(r){if(this._rendererInitialized)return!0;var e={a_pos:0},t={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},i=[];i.push(a.i1616to32(0,0)),i.push(a.i1616to32(1,0)),i.push(a.i1616to32(0,1)),i.push(a.i1616to32(1,1));var o=new Uint32Array(i),s=n.BufferObject.createVertex(r,35044,o),_=new n.VertexArrayObject(r,e,t,{geometry:s});return this._vertexArrayObject=_,this._rendererInitialized=!0,!0},r}()});