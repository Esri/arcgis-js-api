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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/text!./materials/SimpleAtmosphereMaterial.xml","dojo/Deferred","../support/ExternalRenderer","../lib/glMatrix","../webgl-engine/lib/GeometryRenderer","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/VertexBufferLayout","../webgl-engine/lib/Texture","../webgl-engine/lib/Util","../webgl-engine/lib/GLSLProgram","../webgl-engine/lib/GLTextureRep","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot","./resources/SimpleAtmosphereTexture"],function(e,t,r,i,n,s,a,l,o,u,p,h,d,m){var c=i.vec2d,f=i.vec3d,g=i.mat4d,x=o.VertexAttrConstants,_=g.create(),b=r.createSubclass({declaredClass:"esri.views.3d.environment.PanoramicAtmosphere",classMetadata:{properties:{view:{},slot:{value:d.BACKGROUND,setter:function(e){return this.needsRender=!0,e}}}},constructor:function(){this._renderData={texV:c.create(),silCircleCenter:f.create(),silCircleV1:f.create(),silCircleV2:f.create()},this._texture=null,this._textureRep=null,this.slot=d.BACKGROUND},initialize:function(){this._textureDfd=new t,this.addResolvingPromise(this._textureDfd.promise)},destroy:function(){this._textureRep&&(this._texture&&(this._textureRep.release("SimpleAtmosphere"),this._textureRep.getTexture("SimpleAtmosphere").unload()),this._textureRep=null),this._program&&(this._program.dispose(),this._program=null),this._textureDfd&&(this._textureDfd.cancel(),this._textureDfd=null)},initializeRenderContext:function(e){this._textureRep=new p({SimpleAtmosphere:new l(m,"SimpleAtmosphere",{wrapClamp:!0})},e.programRep,function(){return this.view._stage.getCamera().viewport}.bind(this),e.gl),this._texture=this._textureRep.aquire("SimpleAtmosphere",void 0,void 0,function(){this._textureDfd.resolve(),this._textureDfd=null}.bind(this))},setup:function(t){var r=this._createGeometryData();this._renderer=new n(r,a.Defaults.Pos,null,t.gl),t.shaderSnippets.vsSimpleAtmosphere||t.shaderSnippets._parse(e),this._program=u.fromSnippets("vsSimpleAtmosphere","fsSimpleAtmosphere",t.shaderSnippets,t.gl,["PANORAMIC"])},render:function(e){if(e.slot!==this.slot||e.pass!==h.MATERIAL||!this._textureRep.getIsLoaded("SimpleAtmosphere"))return!1;var t=this.renderContext.gl,r=this._program;return r.use(),t.bindTexture(t.TEXTURE_2D,this._texture),r.uniform1i("tex",0),r.uniformMatrix4fv("proj",e.camera.projectionMatrix),g.toRotationMat(e.camera.viewMatrix,_),r.uniformMatrix4fv("view",_),r.uniform4f("color",1,1,1,1),r.uniform3fv("lightDirection",e.lightingData.direction),t.web3DDefaultState.cullEnabled||t.enable(t.CULL_FACE),t.web3DDefaultState.depthFunc!==t.LEQUAL&&t.depthFunc(t.LEQUAL),t.enable(t.BLEND),t.depthMask(!1),this._renderer.render(this._program),u.unuse(t),t.depthMask(!0),t.disable(t.BLEND),t.web3DDefaultState.depthFunc!==t.LEQUAL&&t.depthFunc(t.web3DDefaultState.depthFunc),t.web3DDefaultState.cullEnabled||t.disable(t.CULL_FACE),!0},_createGeometryData:function(){for(var e=s.createPolySphereGeometry(1,2),t=e.getFaces(),r=t[0].indices[x.POSITION],i=0;i<r.length;i+=3){var n=r[i];r[i]=r[i+2],r[i+2]=n}var a=e.getVertexAttr(),l=a[x.NORMAL].data;for(i=0;i<l.length;i++)l[i]=-l[i];return{faces:t[0],vertexAttr:a}}});return b});