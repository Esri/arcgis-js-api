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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/text!./materials/SimpleAtmosphereMaterial.xml","./resources/SimpleAtmosphereTexture","../lib/glMatrix","../support/imageUtils","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/DefaultVertexBufferLayouts","../webgl-engine/lib/GeometryRenderer","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot","../webgl-engine/lib/Util","../../webgl/Program","../../webgl/Texture"],function(e,t,r,i,n,s,o,a,l,p,d,h,u,m,g){var c=n.mat4d,f=u.VertexAttrConstants,x=c.create();return function(){function e(e){this.view=null,this.needsRender=!1,this.didRender=!0,this.slot=h.POSTPROCESSING_ATMOSPHERE_OPAQUE,this._renderer=null,this._texture=null,this._program=null,this._readyPromise=null,this.view=e}return e.prototype.destroy=function(){this._program&&(this._program.dispose(),this._program=null),this._texture&&(this._texture.dispose(),this._texture=null)},e.prototype.when=function(e){return this._readyPromise.then(e)},e.prototype.initializeRenderContext=function(e){var t=this,n=this._createGeometryData(),p=e.rctx;this._renderer=new l(n,a.Pos3,null,p),e.shaderSnippets.vsSimpleAtmosphere||e.shaderSnippets._parse(r),this._program=new m(p,e.shaderSnippets.vsSimpleAtmosphere,e.shaderSnippets.fsSimpleAtmosphere,o.Default3D,["PANORAMIC"]),this._readyPromise=s.requestImage(i).then(function(r){t._texture=new g(e.rctx,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},r),t.needsRender=!0})},e.prototype.uninitializeRenderContext=function(e){this.destroy()},e.prototype.render=function(e){if(e.slot!==this.slot||e.pass!==d.MATERIAL||null==this._texture)return!1;var t=e.rctx,r=t.gl,i=this._program;return t.bindProgram(i),t.bindTexture(this._texture),i.setUniform1i("tex",0),i.setUniformMatrix4fv("proj",e.camera.projectionMatrix),c.toRotationMat(e.camera.viewMatrix,x),i.setUniformMatrix4fv("view",x),i.setUniform4f("color",1,1,1,1),i.setUniform3fv("lightDirection",e.lightingData.direction),t.setDepthTestEnabled(!0),t.setFaceCullingEnabled(!0),t.setDepthFunction(r.LEQUAL),t.setBlendingEnabled(!0),t.setDepthWriteEnabled(!1),this._renderer.render(this._program),t.setDepthWriteEnabled(!0),t.setBlendingEnabled(!1),t.setDepthFunction(r.LESS),t.setFaceCullingEnabled(!1),!0},e.prototype._createGeometryData=function(){for(var e=p.createPolySphereGeometry(1,2,!1),t=e.indices[f.POSITION],r=0;r<t.length;r+=3){var i=t[r];t[r]=t[r+2],t[r+2]=i}for(var n=e.getVertexAttr(),s=n[f.NORMAL].data,r=0;r<s.length;r++)s[r]=-s[r];return{id:"panoramicatmosphere",indices:e.indices,vertexAttr:n,preinterleaved:!1}},e}()});