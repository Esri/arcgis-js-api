/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../core/Logger.js";import{disposeMaybe as i}from"../../core/maybe.js";import{BufferObject as e}from"./BufferObject.js";import{ContextType as r}from"./context-util.js";import{Usage as s}from"./enums.js";import{UniformBufferLayout as o}from"./UniformBufferLayout.js";const a=t.getLogger("esri.views.webgl.UniformBufferObject");class n{constructor(t,i,e=s.DYNAMIC_DRAW){this._context=t,this._usage=e,this._dirtyRange={from:1/0,to:-1},this._initialized=!1,this._context.type!==r.WEBGL2&&a.error("Attempting to create a uniform buffer without WebGL2!"),this._data=new o(i)}get byteLength(){return this._data.byteLength}initialize(){this._initialized||(this.buffer=e.createUniform(this._context,this._usage,this._data.array),this._resetDirtyRange(),this._initialized=!0)}dispose(){this._context.unbindUBO(this),this.buffer=i(this.buffer)}set(t){this._data.setValues(t,this._dirtyRange)}setUniform(t,i){this._data.setValue(t,i,this._dirtyRange)}upload(){this.initialize();const{from:t,to:i}=this._dirtyRange;i>-1&&t<i&&(this.buffer.setSubDataFromView(this._data.arrayView32,t,t,i),this._resetDirtyRange())}_resetDirtyRange(){this._dirtyRange.from=1/0,this._dirtyRange.to=-1}}export{n as UniformBufferObject};