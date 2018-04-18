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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["dojo/text!./materials/SimpleAtmosphereMaterial.xml","dojo/Deferred","../support/ExternalRenderer","../lib/glMatrix","../webgl-engine/lib/GeometryRenderer","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/Texture","../webgl-engine/lib/Util","../webgl-engine/lib/GLTextureRep","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot","./resources/SimpleAtmosphereTexture","../../webgl/Program","../webgl-engine/lib/DefaultVertexBufferLayouts","../webgl-engine/lib/DefaultVertexAttributeLocations"],function(e,t,r,i,n,s,l,a,o,p,u,h,d,m,c){var x=i.vec2d,g=i.vec3d,f=i.mat4d,b=a.VertexAttrConstants,_=f.create();return r.createSubclass({declaredClass:"esri.views.3d.environment.PanoramicAtmosphere",properties:{view:{},needsRender:{value:!1},slot:{value:u.BACKGROUND,set:function(e){this.needsRender=!0,this._set("slot",e)}}},constructor:function(){this._renderData={texV:x.create(),silCircleCenter:g.create(),silCircleV1:g.create(),silCircleV2:g.create()},this._texture=null,this._textureRep=null,this.slot=u.BACKGROUND},initialize:function(){this._textureDfd=new t,this.addResolvingPromise(this._textureDfd.promise)},destroy:function(){this._textureRep&&(this._texture&&(this._textureRep.release("SimpleAtmosphere"),this._textureRep.getTexture("SimpleAtmosphere").unload()),this._textureRep=null),this._program&&(this._program.dispose(),this._program=null),this._textureDfd&&(this._textureDfd.cancel(),this._textureDfd=null)},initializeRenderContext:function(e){this._textureRep=new o({SimpleAtmosphere:new l(h,"SimpleAtmosphere",{wrapClamp:!0})},e.programRep,function(){return this.view.state.camera.viewport}.bind(this),e.rctx),this._texture=this._textureRep.aquire("SimpleAtmosphere",void 0,function(e){this._texture=e.getGLTexture(),this._textureDfd.resolve(),this._textureDfd=null}.bind(this))},setup:function(t){var r=this._createGeometryData(),i=this.renderContext.rctx;this._renderer=new n(r,m.Pos3,null,i),t.shaderSnippets.vsSimpleAtmosphere||t.shaderSnippets._parse(e),this._program=new d(i,t.shaderSnippets.vsSimpleAtmosphere,t.shaderSnippets.fsSimpleAtmosphere,c.Default3D,["PANORAMIC"])},render:function(e){if(e.slot!==this.slot||e.pass!==p.MATERIAL||!this._textureRep.getIsLoaded("SimpleAtmosphere"))return!1;var t=this.renderContext.rctx,r=t.gl,i=this._program;return t.bindProgram(i),t.bindTexture(this._texture),i.setUniform1i("tex",0),i.setUniformMatrix4fv("proj",e.camera.projectionMatrix),f.toRotationMat(e.camera.viewMatrix,_),i.setUniformMatrix4fv("view",_),i.setUniform4f("color",1,1,1,1),i.setUniform3fv("lightDirection",e.lightingData.direction),t.setDepthTestEnabled(!0),t.setFaceCullingEnabled(!0),t.setDepthFunction(r.LEQUAL),t.setBlendingEnabled(!0),t.setDepthWriteEnabled(!1),this._renderer.render(this._program),t.setDepthWriteEnabled(!0),t.setBlendingEnabled(!1),t.setDepthFunction(r.LESS),t.setFaceCullingEnabled(!1),!0},_createGeometryData:function(){for(var e=s.createPolySphereGeometry(1,2),t=e.indices[b.POSITION],r=0;r<t.length;r+=3){var i=t[r];t[r]=t[r+2],t[r+2]=i}var n=e.getVertexAttr(),l=n[b.NORMAL].data;for(r=0;r<l.length;r++)l[r]=-l[r];return{indices:e.indices,vertexAttr:n}}})});