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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../MemoryBuffer","./rendererUtils","../../webgl/BufferObject","../../webgl/VertexArrayObject"],function(r,t,e,i,o,a,n){return function(){function r(r){this._patternMatrix=e.mat3f32.create(),this._color=e.vec4f32.create(),this._solidrendererInitialized=!1,this._rendererInitialized=!1,this._programOptions={id:!1,pattern:!1},this._programCache=r,this._color.set([1,0,0,1])}return r.prototype.dispose=function(){this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},r.prototype.renderSolidColor=function(r,t){this._solidrendererInitialized||this._initializeSolidRenderer(r),r.bindVAO(this._solidVertexArrayObject);var e=this._programOptions;e.id=!1,e.pattern=!1;var i=this._programCache.getProgram(0,0,e);r.bindProgram(i),i.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),i.setUniform2fv("u_normalized_origin",t.u_normalized_origin),i.setUniform1f("u_coord_range",t.u_coord_range||4096),i.setUniform1f("u_depth",t.u_depth||0),i.setUniform4fv("u_color",t.u_color||this._color),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,i,a,n,s,_,d,l){this._rendererInitialized||this._initialize(r);var f=s.getPaintValue("background-color",i),u=l*s.getPaintValue("background-opacity",i),c=s.getPaintValue("background-pattern",i),h=void 0!==c,p=f[3]*u,m=h||p<1;if((!m||0!==a)&&(m||1!==a)){var g=3===a,y=(g?1:0)<<1|(h?1:0),b=this._programOptions;b.id=g,b.pattern=h;var v=this._programCache.getProgram(0,y,b);if(r.bindVAO(this._vertexArrayObject),r.bindProgram(v),v.setUniform1f("u_coord_range",n.coordRange),v.setUniform1f("u_depth",s.z||0),v.setUniformMatrix4fv("u_transformMatrix",n.tileTransform.transform),v.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),h){var x=_.getMosaicItemPosition(c,!0);if(!x)return;var z=512*Math.pow(2,Math.floor(i)-n.key.level)*d;e.mat3.identity(this._patternMatrix);var A=z/x.size[0],O=z/x.size[1];this._patternMatrix[0]=A,this._patternMatrix[4]=O,_.bind(r,9729,x.page,5),v.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),v.setUniform1f("u_opacity",u),v.setUniform2f("u_pattern_tl",x.tl[0],x.tl[1]),v.setUniform2f("u_pattern_br",x.br[0],x.br[1]),v.setUniform1i("u_texture",5)}else this._color[0]=p*f[0],this._color[1]=p*f[1],this._color[2]=p*f[2],this._color[3]=p,v.setUniform4fv("u_color",this._color);if(g){var U=o.int32To4Bytes(t.layerID);v.setUniform4f("u_id",U[0],U[1],U[2],U[3])}r.drawArrays(5,0,4),r.bindVAO()}},r.prototype._initializeSolidRenderer=function(r){if(this._solidrendererInitialized)return!0;var t={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},e=new Int8Array([0,0,1,0,0,1,1,1]),i=a.createVertex(r,35044,e),o=new n(r,this._programCache.getProgramAttributes(0),t,{geometry:i});return this._solidVertexArrayObject=o,this._solidrendererInitialized=!0,!0},r.prototype._initialize=function(r){if(this._rendererInitialized)return!0;var t={a_pos:0},e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},o=[];o.push(i.i1616to32(0,0)),o.push(i.i1616to32(1,0)),o.push(i.i1616to32(0,1)),o.push(i.i1616to32(1,1));var s=new Uint32Array(o),_=a.createVertex(r,35044,s),d=new n(r,t,e,{geometry:_});return this._vertexArrayObject=d,this._rendererInitialized=!0,!0},r}()});