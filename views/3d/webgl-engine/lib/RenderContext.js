/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../core/maybe.js";import{BindParameters as s}from"./BindParameters.js";import{Camera as r}from"./Camera.js";import{RenderOccludedFlag as t}from"./Material.js";import{RenderPass as a}from"./RenderPass.js";class n{constructor(t,n,c,l=null){this.rctx=t,this.sliceHelper=l,this.lastFrameCamera=new r,this.pass=a.MATERIAL,this.renderOccludedMask=i,this.bindParameters=new s(n,c,e(l)?l.plane:null)}resetRenderOccludedMask(){this.renderOccludedMask=i}get isHighlightPass(){return this.pass===a.MATERIAL_HIGHLIGHT}}class c extends n{constructor(e,s,r,t,a){super(e,r,t,a),this.offscreenRenderingHelper=s,this.sliceHelper=a}}const i=t.Occlude|t.OccludeAndTransparent|t.OccludeAndTransparentStencil;export{n as OverlayRenderContext,c as RenderContext};
