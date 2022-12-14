/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../core/Handles.js";import{lerp as t,smoothstep as i}from"../../../core/mathUtils.js";import{releaseMaybe as s,disposeMaybe as a,destroyMaybe as r,isSome as h,isNone as o,unwrapOr as n}from"../../../core/maybe.js";import{on as d}from"../../../core/reactiveUtils.js";import{a as m}from"../../../chunks/vec2.js";import{a as _}from"../../../chunks/vec2f64.js";import{s as u,l as c,c as l}from"../../../chunks/vec3.js";import{c as p}from"../../../chunks/vec3f64.js";import{c as f,f as g}from"../../../chunks/vec4f64.js";import{earth as v}from"../../../geometry/support/Ellipsoid.js";import{rayLeighScaleHeight as b,atmosphereHeight as T,betaRayleigh as R,betaOzone as H,betaMie as w,innerAtmosphereDepth as j,computeInnerAltitudeFade as q}from"./atmosphereUtils.js";import{ChapmanAtmosphereTechnique as x}from"./ChapmanAtmosphereTechnique.js";import{ChapmanAtmosphereTechniqueConfiguration as E}from"./ChapmanAtmosphereTechniqueConfiguration.js";import{NoParameters as z}from"../webgl-engine/core/shaderModules/interfaces.js";import{Pos2Tex as B}from"../webgl-engine/lib/DefaultVertexBufferLayouts.js";import{createQuadVAO as y}from"../webgl-engine/lib/glUtil3D.js";import{PrimitiveType as U}from"../../webgl/enums.js";class C{constructor(e){this._view=e,this.type="realistic",this.canRender=!0,this._cameraPosition=p(),this._heightParameters=f(),this._betasRayleigh=p(),this._betasCombined=p(),this._scaleHeight=0,this._radii=_(),this._cameraHeight=0,this._cameraHeightSq=0,this._cAtmosphere=0,this._innerFadeDistance=0,this._altitudeFade=0,this._lowerElevationBoundRadius=0,this._lowerBoundEarthRadius=v.radius,this._hazeStrength=1,this._darkenHaze=!1,this._updateRadius(v.radius)}destroy(){this._atmosphereTechnique=s(this._atmosphereTechnique),this._atmosphereHazeTechnique=s(this._atmosphereHazeTechnique),this._vao=a(this._vao),this._handles=r(this._handles)}when(){return Promise.resolve()}initializeRenderContext(t){const i=t.renderContext.rctx,s=this._handles=new e,a=this._view.basemapTerrain;h(a.rootTiles)&&this._updateElevation({spatialReference:a.spatialReference,tile:a.rootTiles[0],extent:a.rootTiles[0].extent,context:"ground"}),s.add(d((()=>this._view.basemapTerrain),"elevation-change",(e=>this._updateElevation(e)),{onListenerAdd:()=>this._updateElevation()})),s.add(d((()=>this._view.basemapTerrain),"elevation-bounds-change",(()=>this._updateVisibleElevationBounds())));const r=new E;r.haze=!1,this._atmosphereTechnique=t.shaderTechniqueRepository.acquire(x,r),r.haze=!0,this._atmosphereHazeTechnique=t.shaderTechniqueRepository.acquire(x,r),this._vao=y(i,B),this._scaleHeight=b*T,u(this._betasRayleigh,R[0],R[1],R[2]),u(this._betasCombined,R[0]+H[0],R[1]+H[1],R[2]+H[2])}render(e){this._render(e,this._atmosphereTechnique,e.offscreenRenderingHelper.depthTexture)}renderHaze(e,t){this._darkenHaze=t,this._render(e,this._atmosphereHazeTechnique,e.offscreenRenderingHelper.linearDepthTexture)}_render(e,t,i){this._update(e.bindParameters.camera);const s=e.rctx.bindTechnique(t,P,e.bindParameters);e.offscreenRenderingHelper.renderDepthDetached((()=>{s.bindTexture("depthTex",i),this._renderCommon(t.program,e)}))}_renderCommon(e,t){if(o(this._vao))return;const i=t.rctx;e.setUniform4fv("heightParameters",this._heightParameters),e.setUniform3fv("cameraPosition",this._cameraPosition),e.setUniform2fv("radii",this._radii),e.setUniform1f("scaleHeight",this._scaleHeight),e.setUniform1f("betaMie",w),e.setUniform3fv("betaRayleigh",this._betasRayleigh),e.setUniform3fv("betaCombined",this._betasCombined),e.setUniform1f("innerFadeDistance",this._innerFadeDistance),e.setUniform1f("altitudeFade",this._altitudeFade),e.setUniform1f("hazeStrength",this._hazeStrength),i.bindVAO(this._vao),e.assertCompatibleVertexAttributeLocations(this._vao),i.drawArrays(U.TRIANGLE_STRIP,0,4)}_adjustRadiusForTesselation(e){return e*Math.cos(Math.PI/16/16)}_updateElevation(e){const t=e?e.tile:n(this._view.basemapTerrain.rootTiles,[null])[0];if(o(t)||0!==t.level)return;const i=this._adjustRadiusForTesselation(v.radius+t.elevationBounds[0]);i!==this._lowerElevationBoundRadius&&(this._lowerElevationBoundRadius=i,this._lowerBoundEarthRadius=-1,this._updateVisibleElevationBounds())}_updateVisibleElevationBounds(){const e=this._adjustRadiusForTesselation(v.radius+this._view.basemapTerrain.elevationBounds.min);(this._lowerBoundEarthRadius<0||e<this._lowerBoundEarthRadius)&&this._updateRadius(e)}_updateRadius(e){this._lowerBoundEarthRadius=e,m(this._radii,e,e+T),this._innerFadeDistance=2*Math.sqrt((2*e-j)*j)}_update(e){if(o(e))return;this._cameraHeight=c(e.eye),this._cameraHeightSq=this._cameraHeight*this._cameraHeight,this._cAtmosphere=this._cameraHeightSq-this._radii[1]*this._radii[1];const s=Math.min(1,Math.max(0,(this._cameraHeight-this._radii[0])/T));this._heightParameters=g(this._cameraHeight,this._cameraHeightSq,this._cAtmosphere,s),l(this._cameraPosition,e.eye),this._altitudeFade=q(this._cameraHeight-this._lowerBoundEarthRadius),this._hazeStrength=this._darkenHaze?t(.6,1,i(9500,10500,this._cameraHeight-v.radius)):1}static isSupported(e){return e.renderContext.rctx.capabilities.depthTexture}}const P=new z;export{C as ChapmanAtmosphere};