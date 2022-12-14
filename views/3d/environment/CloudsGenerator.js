/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import i from"../../../core/Handles.js";import s from"../../../core/has.js";import{lerp as r}from"../../../core/mathUtils.js";import{isSome as o,releaseMaybe as n,disposeMaybe as a,destroyMaybe as h,isNone as u}from"../../../core/maybe.js";import{watch as c,initial as m}from"../../../core/reactiveUtils.js";import{property as d}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as l}from"../../../core/accessorSupport/decorators/subclass.js";import{f as p}from"../../../chunks/mat3.js";import{y as f}from"../../../chunks/mat4.js";import{c as _}from"../../../chunks/mat4f64.js";import{f as g}from"../../../chunks/vec2f32.js";import{z as T,c as v}from"../../../chunks/vec3.js";import{f as y,z as w}from"../../../chunks/vec3f32.js";import{c as b}from"../../../chunks/vec3f64.js";import{getReferenceEllipsoid as x}from"../../../geometry/projectionEllipsoid.js";import{C}from"../../../chunks/Clouds.glsl.js";import{FadeInOutStages as S,FadeHeightStages as j}from"./CloudsCompositionParameters.js";import{cloudPresets as M}from"./CloudsPresets.js";import{CloudsTechnique as z}from"./CloudsTechnique.js";import{CloudsTechniqueConfiguration as U}from"./CloudsTechniqueConfiguration.js";import{NoiseTextureAtlas as P}from"./NoiseTextureAtlas.js";import{BindParameters as E}from"../webgl-engine/lib/BindParameters.js";import{createQuadVAO as q}from"../webgl-engine/lib/glUtil3D.js";import{TaskPriority as k}from"../../support/Scheduler.js";import{TextureType as A,PixelFormat as B,PixelType as R,TextureWrapMode as H,TextureSamplingMode as D,TargetType as O}from"../../webgl/enums.js";import{FramebufferObject as F}from"../../webgl/FramebufferObject.js";let I=class extends t{constructor(e){super(e),this._frameTask=null,this._handles=new i,this._cubeMapSize=s("esri-mobile")?1024:2048,this._techniques=[],this._techniqueConfiguration=new U,this._bindParameters=new E(null,null,null),this._drawParameters=new C,this._weatherTile=g(0,0),this._weatherTileCount=128,this.coverage=r(G.coverage[0],G.coverage[1],.5),this.density=r(G.density[0],G.density[1],.5),this.absorption=r(G.absorption[0],G.absorption[1],.5),this.cloudSize=r(G.cloudSize[0],G.cloudSize[1],.5),this.detailSize=r(G.detailSize[0],G.detailSize[1],.5),this.smoothness=r(G.smoothness[0],G.smoothness[1],.5),this.cloudHeight=r(G.cloudHeight[0],G.cloudHeight[1],.5),this.raymarchingStepType=G.raymarchingStepType,this._cloudRadius=0,this._viewMatrix=_(),this._cameraPositionLastFrame=b(),this.running=!1}_getTechnique(e){const t=this._techniques[e];return t||(this._techniqueConfiguration.steps=e,this._techniques[e]=new z({rctx:this.context.renderContext.rctx,viewingMode:this.view.state.viewingMode},this._techniqueConfiguration),this._techniques[e])}_getWeatherTile(){const e=this.view.camera.position.latitude,t=this.view.camera.position.longitude;let i=g((e+90)/180,(t+180)/360);const s=Math.floor(this._weatherTileCount*Math.abs(2*i[0]-1));i=g(Math.floor(2*this._weatherTileCount*i[0]),Math.floor(4*(this._weatherTileCount-s)*i[1]));let r=0,n=0;if(o(this.view.environment)&&"sun"===this.view.environment.lighting.type&&o(this.view.environment.lighting.date)){const e=new Date(this.view.environment.lighting.date);e.setUTCHours(this.view.environment.lighting.date.getUTCHours()+this.view.environment.lighting.displayUTCOffset),r=31*e.getUTCMonth()+e.getUTCDate(),n=e.getUTCFullYear()}return i[0]=(i[0]+r)%(2*this._weatherTileCount),i[1]=(i[1]+n%100)%(4*this._weatherTileCount),i}initialize(){this._vao=q(this.context.renderContext.rctx);const e=x(this.view.spatialReference);this._cloudRadius=.5*e.radius,this.setDirty(),this._weatherTile=this._getWeatherTile(),this._frameTask=this.view.resourceController.scheduler.registerTask(k.CLOUDS_GENERATOR,this),this._handles.add(this._frameTask),this._handles.add(c((()=>[this.coverage,this.density,this.absorption,this.cloudSize,this.detailSize,this.smoothness,this.cloudHeight,this.raymarchingStepType]),(()=>this.setDirty()),m))}destroy(){this._handles.destroy(),this._techniques.forEach((e=>n(e))),this._techniques=null,this._frameBufferCube=a(this._frameBufferCube),this._vao=a(this._vao),this._noiseTexture=h(this._noiseTexture)}_ensureNoiseTexture(){if(u(this._noiseTexture)){const e=this.context;this._noiseTexture=new P({context:e}),this._noiseTexture.updateWeatherMap(this._weatherTile)}return this._noiseTexture.textureAtlas}ensureWeatherTile(){const e=this._getWeatherTile();o(this._noiseTexture)&&o(this.context)&&this._noiseTexture.updateWeatherMap(e),e[0]===this._weatherTile[0]&&e[1]===this._weatherTile[1]||(this._weatherTile=e,this.setDirty())}get frameBufferCube(){if(u(this._frameBufferCube)){const e={target:A.TEXTURE_CUBE_MAP,pixelFormat:B.RGBA,dataType:R.UNSIGNED_BYTE,wrapMode:H.CLAMP_TO_EDGE,samplingMode:D.LINEAR,hasMipmap:!1,width:this._cubeMapSize,height:this._cubeMapSize};this._frameBufferCube=new F(this.context.renderContext.rctx,{colorTarget:O.CUBEMAP,width:this._cubeMapSize,height:this._cubeMapSize},e)}return this._frameBufferCube}get cubeMap(){return this._frameBufferCube}isFading(e){return e.crossFade.enabled||e.fadeInOut.stage===S.FADE_OUT||e.fadeInOutHeight.stage!==j.FINISHED}applyPreset(e,t){const i=e.median,s=e=>{const s=r(e[0],e[1],i);return t<.5?r(e[0],s,2*t):r(s,e[1],2*(t-.5))};this.coverage=s(e.coverage),this.density=s(e.density),this.absorption=s(e.absorption),this.cloudSize=s(e.cloudSize),this.detailSize=s(e.detailSize),this.smoothness=s(e.smoothness),this.cloudHeight=s(e.cloudHeight),this.raymarchingStepType=e.raymarchingStepType}setDirty(){this.running=!0}runTask(e){if(0===this.coverage||u(this._vao))return void(this.running=!1);const t=this._getTechnique(this.raymarchingStepType);if(!t.compiled)return;if(!T(this._cameraPositionLastFrame,this.context.renderContext.bindParameters.camera.eye)||this.isFading(this.context.renderContext.bindParameters.clouds))return void v(this._cameraPositionLastFrame,this.context.renderContext.bindParameters.camera.eye);this.ensureWeatherTile();const i=this._ensureNoiseTexture();if(u(i))return;const s=this.context.renderContext.rctx,o=s.bindTechnique(t),n=1+this.absorption,a=r(35,120,this.absorption);o.bindTexture("cloudShapeTexture",i),o.setUniform1f("cloudRadius",this._cloudRadius),o.setUniform1f("halfCubeMapSize",.5*this._cubeMapSize),o.setUniform1f("power",a),o.setUniform1f("sigmaE",n),o.setUniform1f("density",r(0,.3,this.density)),o.setUniform1f("cloudSize",r(0,.02,Math.max(.01,1-this.cloudSize))),o.setUniform1f("detailSize",r(0,.2,Math.max(.01,1-this.detailSize))),o.setUniform1f("smoothness",r(0,.5,1-this.smoothness)),o.setUniform1f("cloudHeight",r(0,1500,this.cloudHeight)),o.setUniform1f("coverage",this.coverage),s.bindVAO(this._vao),o.assertCompatibleVertexAttributeLocations(this._vao);const h=s.getViewport();s.setViewport(0,0,this._cubeMapSize,this._cubeMapSize),s.bindFramebuffer(this.frameBufferCube);for(let r=0;r<5;r++){const e=N[r],t=L[r];f(this._viewMatrix,W,e,t),p(this._drawParameters.viewMatrix,this._viewMatrix);const i=A.TEXTURE_CUBE_MAP_POSITIVE_X+r;this.frameBufferCube.setColorTextureTarget(i),o.bindDraw(this._drawParameters,this._bindParameters),s.gl.drawArrays(s.gl.TRIANGLE_STRIP,0,4),s.gl.flush()}this.running=!1,s.setViewport(h.x,h.y,h.width,h.height),this.requestRender(),e.madeProgress()}};e([d({constructOnly:!0})],I.prototype,"context",void 0),e([d({constructOnly:!0})],I.prototype,"view",void 0),e([d({constructOnly:!0})],I.prototype,"requestRender",void 0),e([d()],I.prototype,"_frameTask",void 0),e([d()],I.prototype,"coverage",void 0),e([d()],I.prototype,"density",void 0),e([d()],I.prototype,"absorption",void 0),e([d()],I.prototype,"cloudSize",void 0),e([d()],I.prototype,"detailSize",void 0),e([d()],I.prototype,"smoothness",void 0),e([d()],I.prototype,"cloudHeight",void 0),e([d()],I.prototype,"raymarchingStepType",void 0),e([d()],I.prototype,"running",void 0),I=e([l("esri.views.3d.environment.CloudsGenerator")],I);const N=[y(1,0,0),y(-1,0,0),y(0,1,0),y(0,-1,0),y(0,0,1)],L=[y(0,1,0),y(0,1,0),y(0,0,-1),y(0,0,1),y(0,1,0)],W=w(),G=M.sunny;export{I as CloudsGenerator};