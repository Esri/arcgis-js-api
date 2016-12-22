// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/text!./materials/SimpleAtmosphereMaterial.xml","dojo/Deferred","../support/ExternalRenderer","../lib/glMatrix","../webgl-engine/lib/GeometryRenderer","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/Texture","../webgl-engine/lib/Util","../webgl-engine/lib/GLTextureRep","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot","./resources/SimpleAtmosphereTexture","../../webgl/Program","../webgl-engine/lib/DefaultVertexBufferLayouts","../webgl-engine/lib/DefaultVertexAttributeLocations"],function(e,t,r,i,n,s,l,a,o,u,p,h,d,m,c){var g=i.vec2d,x=i.vec3d,f=i.mat4d,_=a.VertexAttrConstants,b=f.create(),v=r.createSubclass({declaredClass:"esri.views.3d.environment.PanoramicAtmosphere",properties:{view:{},needsRender:{value:!1},slot:{value:p.BACKGROUND,set:function(e){this.needsRender=!0,this._set("slot",e)}}},constructor:function(){this._renderData={texV:g.create(),silCircleCenter:x.create(),silCircleV1:x.create(),silCircleV2:x.create()},this._texture=null,this._textureRep=null,this.slot=p.BACKGROUND},initialize:function(){this._textureDfd=new t,this.addResolvingPromise(this._textureDfd.promise)},destroy:function(){this._textureRep&&(this._texture&&(this._textureRep.release("SimpleAtmosphere"),this._textureRep.getTexture("SimpleAtmosphere").unload()),this._textureRep=null),this._program&&(this._program.dispose(),this._program=null),this._textureDfd&&(this._textureDfd.cancel(),this._textureDfd=null)},initializeRenderContext:function(e){this._textureRep=new o({SimpleAtmosphere:new l(h,"SimpleAtmosphere",{wrapClamp:!0})},e.programRep,function(){return this.view._stage.getCamera().viewport}.bind(this),e.rctx),this._texture=this._textureRep.aquire("SimpleAtmosphere",void 0,void 0,function(e){this._texture=e.getGLTexture(),this._textureDfd.resolve(),this._textureDfd=null}.bind(this))},setup:function(t){var r=this._createGeometryData(),i=this.renderContext.rctx;this._renderer=new n(r,m.Pos3,null,i),t.shaderSnippets.vsSimpleAtmosphere||t.shaderSnippets._parse(e),this._program=new d(i,t.shaderSnippets.vsSimpleAtmosphere,t.shaderSnippets.fsSimpleAtmosphere,c.Default3D,["PANORAMIC"])},render:function(e){if(e.slot!==this.slot||e.pass!==u.MATERIAL||!this._textureRep.getIsLoaded("SimpleAtmosphere"))return!1;var t=this.renderContext.rctx,r=t.gl,i=this._program;return t.bindProgram(i),t.bindTexture(this._texture),i.setUniform1i("tex",0),i.setUniformMatrix4fv("proj",e.camera.projectionMatrix),f.toRotationMat(e.camera.viewMatrix,b),i.setUniformMatrix4fv("view",b),i.setUniform4f("color",1,1,1,1),i.setUniform3fv("lightDirection",e.lightingData.direction),t.setFaceCullingEnabled(!0),t.setDepthFunction(r.LEQUAL),t.setBlendingEnabled(!0),t.setDepthWriteEnabled(!1),this._renderer.render(this._program),t.setDepthWriteEnabled(!0),t.setBlendingEnabled(!1),t.setDepthFunction(r.LESS),t.setFaceCullingEnabled(!1),!0},_createGeometryData:function(){for(var e=s.createPolySphereGeometry(1,2),t=e.getFaces(),r=t[0].indices[_.POSITION],i=0;i<r.length;i+=3){var n=r[i];r[i]=r[i+2],r[i+2]=n}var l=e.getVertexAttr(),a=l[_.NORMAL].data;for(i=0;i<a.length;i++)a[i]=-a[i];return{faces:t[0],vertexAttr:l}}});return v});