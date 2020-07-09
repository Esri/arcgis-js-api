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

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/Util","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/MeasurementArrowTechnique"],(function(e,t,r,n,a,o,i,s,c,u,f,p){var l=function(e){function t(t,r){var n=e.call(this,r)||this;return n.techniqueConfig=new p.MeasurementArrowTechniqueConfiguration,n.params=u.copyParameters(t,v),n}return r.__extends(t,e),t.prototype.getTechniqueConfig=function(){return this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig},t.prototype.dispose=function(){},t.prototype.setParameterValues=function(e){u.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getPassParameters=function(){return this.params},t.prototype.intersect=function(){},t.prototype.createBufferWriter=function(){return new A},t.prototype.createRenderer=function(e,t){return new f(e,t,this)},t.prototype.getGLMaterial=function(e){return 0===e.output?new h(e):void 0},t}(s.Material),h=function(e){function t(t){var r=e.call(this,t)||this;return r.updateParameters(),r}return r.__extends(t,e),t.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(p.MeasurementArrowTechnique,this.material.getTechniqueConfig(),this.technique)},t.prototype.beginSlot=function(e){return 3===e},t.prototype.bind=function(e){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters())},t}(i.GLMaterial),v={width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1},m=o.newLayout().vec3f(c.VertexAttrConstants.POSITION).vec3f(c.VertexAttrConstants.NORMAL).vec2f(c.VertexAttrConstants.UV0).f32(c.VertexAttrConstants.AUXPOS1),d=a.vec3f64.create(),g=a.vec3f64.create(),y=a.vec3f64.create(),x=a.vec3f64.create(),C=a.vec3f64.create(),A=function(){function e(){this.vertexBufferLayout=m}return e.prototype.allocate=function(e){return this.vertexBufferLayout.createBuffer(e)},e.prototype.elementCount=function(e){return 2*(e.indices[c.VertexAttrConstants.POSITION].length/2+1)},e.prototype.write=function(e,t,r,a){var o=t.vertexAttr[c.VertexAttrConstants.POSITION].data,i=t.vertexAttr[c.VertexAttrConstants.NORMAL].data,s=o.length/3,u=t&&t.indices&&t.indices.position;u&&u.length!==2*(s-1)&&console.warn("MeasurementArrowMaterial does not support indices");for(var f=d,p=g,l=y,h=x,v=C,m=e.transformation,A=e.invTranspTransformation,M=r.position,P=r.normal,q=r.uv0,b=0,O=0;O<s;++O){var V=3*O;if(n.vec3.set(f,o[V],o[V+1],o[V+2]),O<s-1){var w=3*(O+1);n.vec3.set(p,o[w],o[w+1],o[w+2]),n.vec3.set(v,i[w],i[w+1],i[w+2]),n.vec3.normalize(v,v),n.vec3.subtract(l,p,f),n.vec3.normalize(l,l),n.vec3.cross(h,v,l),n.vec3.normalize(h,h)}var L=n.vec3.distance(f,p);m&&A&&(n.vec3.transformMat4(f,f,m),n.vec3.transformMat4(p,p,m),n.vec3.transformMat4(h,h,A));var T=a+2*O,I=T+1;M.setVec(T,f),M.setVec(I,f),P.setVec(T,h),P.setVec(I,h),q.set(T,0,b),q.set(T,1,-1),q.set(I,0,b),q.set(I,1,1),O<s-1&&(b+=L)}var R=r.auxpos1;for(O=0;O<2*s;++O)R.set(a+O,b)},e}();return l}));