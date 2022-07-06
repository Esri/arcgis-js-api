/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../../../core/ObjectPool.js";import{TargetType as e,DepthStencilTargetType as o}from"../../../webgl/enums.js";import{FramebufferObject as s}from"../../../webgl/FramebufferObject.js";class r{constructor(t){this._rctx=t,this._pools=new Map}acquire(t){return this._getPool(t).acquire()}clear(){this._pools.forEach((t=>t.destroy())),this._pools.clear()}_getPool(s){let r=this._pools.get(s);if(!r){const l=i.bind(i,this._rctx,{colorTarget:e.TEXTURE,depthStencilTarget:o.DEPTH_RENDER_BUFFER,width:s,height:s},(t=>this._getPool(t.width).release(t)));r=new t(l,null,(()=>{})),this._pools.set(s,r)}return r}}class i extends s{constructor(t,e,o){super(t,e),this.release=()=>o(this)}}export{r as FBOPool,i as PooledFramebufferObject};
