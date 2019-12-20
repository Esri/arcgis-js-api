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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/Util","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/MeasurementArrowPrograms","../../../webgl/renderState"],function(t,e,r,o,n,i,a,s,p,c,f,u,l){var m=function(t){function e(e,r){var o=t.call(this,r)||this;return o.params=c.copyParameters(e,d),o}return r(e,t),e.prototype.dispose=function(){},e.prototype.setParameterValues=function(t){c.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},e.prototype.getParameters=function(){return this.params},e.prototype.intersect=function(){},e.prototype.createBufferWriter=function(){return new x},e.prototype.createRenderer=function(t,e){return new f(t,e,this)},e.prototype.getGLMaterials=function(){return{color:v,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},e}(s.Material),v=function(t){function e(e){var r=t.call(this,e)||this;return r.updateParameters(),r}return r(e,t),e.prototype.selectProgram=function(){this.program=this.programRep.getProgram(u.colorPass),this.pipelineState=l.makePipelineState({polygonOffset:this.params.polygonOffset&&{factor:0,units:-4},depthTest:{func:513},depthWrite:l.defaultDepthWriteParams,colorWrite:l.defaultColorWriteParams})},e.prototype.updateParameters=function(){this.params=c.copyParameters(this.material.getParameters()),this.selectProgram()},e.prototype.beginSlot=function(t){return 4===t},e.prototype.getProgram=function(){return this.program},e.prototype.getDrawMode=function(){return 5},e.prototype.bind=function(t){var e=this.program;t.bindProgram(e),t.setPipelineState(this.pipelineState),e.setUniform1f("width",this.params.width),e.setUniform1f("outlineSize",this.params.outlineSize),e.setUniform4fv("outlineColor",this.params.outlineColor),e.setUniform1f("stripeLength",this.params.stripeLength),e.setUniform4fv("stripeEvenColor",this.params.stripeEvenColor),e.setUniform4fv("stripeOddColor",this.params.stripeOddColor)},e.prototype.bindView=function(t){c.bindView(t.origin,t.view,this.program)},e.prototype.bindInstance=function(t){this.program.setUniformMatrix4fv("model",t.transformation)},e.prototype.release=function(){},e}(a.GLMaterial),d={width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1},h=i.newLayout().vec3f(p.VertexAttrConstants.POSITION).vec3f(p.VertexAttrConstants.NORMAL).vec2f(p.VertexAttrConstants.UV0).f32(p.VertexAttrConstants.AUXPOS1),g=n.vec3f64.create(),y=n.vec3f64.create(),P=n.vec3f64.create(),C=n.vec3f64.create(),M=n.vec3f64.create(),x=function(){function t(){this.vertexBufferLayout=h}return t.prototype.allocate=function(t){return this.vertexBufferLayout.createBuffer(t)},t.prototype.elementCount=function(t){return 2*(t.indices[p.VertexAttrConstants.POSITION].length/2+1)},t.prototype.write=function(t,e,r,n){var i=e.vertexAttr[p.VertexAttrConstants.POSITION].data,a=e.vertexAttr[p.VertexAttrConstants.NORMAL].data,s=i.length/3,c=e&&e.indices&&e.indices.position;c&&c.length!==2*(s-1)&&console.warn("MeasurementArrowMaterial does not support indices");for(var f=g,u=y,l=P,m=C,v=M,d=t.transformation,h=t.invTranspTransformation,x=r.position,w=r.normal,O=r.uv0,S=0,V=0;V<s;++V){var b=3*V;if(o.vec3.set(f,i[b],i[b+1],i[b+2]),V<s-1){var A=3*(V+1);o.vec3.set(u,i[A],i[A+1],i[A+2]),o.vec3.set(v,a[A],a[A+1],a[A+2]),o.vec3.normalize(v,v),o.vec3.subtract(l,u,f),o.vec3.normalize(l,l),o.vec3.cross(m,v,l),o.vec3.normalize(m,m)}var L=o.vec3.distance(f,u);d&&h&&(o.vec3.transformMat4(f,f,d),o.vec3.transformMat4(u,u,d),o.vec3.transformMat4(m,m,h));var U=n+2*V,I=U+1;x.setVec(U,f),x.setVec(I,f),w.setVec(U,m),w.setVec(I,m),O.set(U,0,S),O.set(U,1,-1),O.set(I,0,S),O.set(I,1,1),V<s-1&&(S+=L)}for(var z=r.auxpos1,V=0;V<2*s;++V)z.set(n+V,S)},t}();return m});