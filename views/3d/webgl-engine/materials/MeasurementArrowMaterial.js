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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/Util","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/MeasurementArrowTechnique"],(function(e,t,r,n,o,a,i,s,c,u,f,p){var l=function(e){function t(t,r){var n=e.call(this,r)||this;return n.techniqueConfig=new p.MeasurementArrowTechniqueConfiguration,n.params=u.copyParameters(t,v),n}return r(t,e),t.prototype.getTechniqueConfig=function(){return this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig},t.prototype.dispose=function(){},t.prototype.setParameterValues=function(e){u.updateParameters(this.params,e)&&this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getPassParameters=function(){return this.params},t.prototype.intersect=function(){},t.prototype.createBufferWriter=function(){return new A},t.prototype.createRenderer=function(e,t){return new f(e,t,this)},t.prototype.getGLMaterial=function(e){return 0===e.output?new h(e):void 0},t}(s.Material),h=function(e){function t(t){var r=e.call(this,t)||this;return r.updateParameters(),r}return r(t,e),t.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(p.MeasurementArrowTechnique,this.material.getTechniqueConfig(),this.technique)},t.prototype.beginSlot=function(e){return 3===e},t.prototype.bind=function(e){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters())},t}(i.GLMaterial),v={width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1},m=a.newLayout().vec3f(c.VertexAttrConstants.POSITION).vec3f(c.VertexAttrConstants.NORMAL).vec2f(c.VertexAttrConstants.UV0).f32(c.VertexAttrConstants.AUXPOS1),d=o.vec3f64.create(),g=o.vec3f64.create(),y=o.vec3f64.create(),C=o.vec3f64.create(),x=o.vec3f64.create(),A=function(){function e(){this.vertexBufferLayout=m}return e.prototype.allocate=function(e){return this.vertexBufferLayout.createBuffer(e)},e.prototype.elementCount=function(e){return 2*(e.indices[c.VertexAttrConstants.POSITION].length/2+1)},e.prototype.write=function(e,t,r,o){var a=t.vertexAttr[c.VertexAttrConstants.POSITION].data,i=t.vertexAttr[c.VertexAttrConstants.NORMAL].data,s=a.length/3,u=t&&t.indices&&t.indices.position;u&&u.length!==2*(s-1)&&console.warn("MeasurementArrowMaterial does not support indices");for(var f=d,p=g,l=y,h=C,v=x,m=e.transformation,A=e.invTranspTransformation,M=r.position,P=r.normal,q=r.uv0,O=0,V=0;V<s;++V){var b=3*V;if(n.vec3.set(f,a[b],a[b+1],a[b+2]),V<s-1){var w=3*(V+1);n.vec3.set(p,a[w],a[w+1],a[w+2]),n.vec3.set(v,i[w],i[w+1],i[w+2]),n.vec3.normalize(v,v),n.vec3.subtract(l,p,f),n.vec3.normalize(l,l),n.vec3.cross(h,v,l),n.vec3.normalize(h,h)}var L=n.vec3.distance(f,p);m&&A&&(n.vec3.transformMat4(f,f,m),n.vec3.transformMat4(p,p,m),n.vec3.transformMat4(h,h,A));var T=o+2*V,I=T+1;M.setVec(T,f),M.setVec(I,f),P.setVec(T,h),P.setVec(I,h),q.set(T,0,O),q.set(T,1,-1),q.set(I,0,O),q.set(I,1,1),V<s-1&&(O+=L)}var S=r.auxpos1;for(V=0;V<2*s;++V)S.set(o+V,O)},e}();return l}));