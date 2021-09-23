/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Evented","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/buffer/BufferView","../../../support/mathUtils","../../../support/buffer/InterleavedLayout","../Util"],(function(t,e,i,a,s,n,r,o,l,c,f,h,u){"use strict";var g;function d(t){let e=h.newLayout().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("model").mat3f("modelNormal").vec2f("modelScaleFactors");return t.indexOf("color")>=0&&(e=e.vec4f("color")),t.indexOf("featureAttribute")>=0&&(e=e.vec4f("featureAttribute")),e=e.u8("state").u8("lodLevel").alignTo(8),e}t.StateFlags=void 0,(g=t.StateFlags||(t.StateFlags={}))[g.ALLOCATED=1]="ALLOCATED",g[g.DEFAULT_ACTIVE=2]="DEFAULT_ACTIVE",g[g.VISIBLE=4]="VISIBLE",g[g.HIGHLIGHT=8]="HIGHLIGHT",g[g.HIGHLIGHT_ACTIVE=16]="HIGHLIGHT_ACTIVE",g[g.REMOVE=32]="REMOVE",g[g.TRANSFORM_CHANGED=64]="TRANSFORM_CHANGED",g[g.ACTIVE=18]="ACTIVE";let m=function(t){this.localTransform=t.getField("localTransform",c.BufferViewMat4f64),this.globalTransform=t.getField("globalTransform",c.BufferViewMat4f64),this.modelOrigin=t.getField("modelOrigin",c.BufferViewVec3f64),this.model=t.getField("model",c.BufferViewMat3f),this.modelNormal=t.getField("modelNormal",c.BufferViewMat3f),this.modelScaleFactors=t.getField("modelScaleFactors",c.BufferViewVec2f),this.boundingSphere=t.getField("boundingSphere",c.BufferViewVec4f64),this.color=t.getField("color",c.BufferViewVec4f),this.featureAttribute=t.getField("featureAttribute",c.BufferViewVec4f),this.state=t.getField("state",c.BufferViewUint8),this.lodLevel=t.getField("lodLevel",c.BufferViewUint8)},_=function(i){function s(t,e){var a;return(a=i.call(this)||this)._capacity=0,a._size=0,a._next=0,a._layout=d(t),a._shaderTransformation=e,a}e._inheritsLoose(s,i);var r=s.prototype;return r.addInstance=function(){this._size+1>this._capacity&&this.grow();const e=this.findSlot();return this._view.state.set(e,t.StateFlags.ALLOCATED),this._size++,this.emit("instance-added",{index:e}),e},r.removeInstance=function(e){const i=this._view.state;u.assert(e>=0&&e<this._capacity&&i.get(e)&t.StateFlags.ALLOCATED,"invalid instance handle"),this.getStateFlag(e,t.StateFlags.ACTIVE)?this.setStateFlags(e,t.StateFlags.REMOVE):this.freeInstance(e),this.emit("instance-removed",{index:e})},r.freeInstance=function(e){const i=this._view.state;u.assert(e>=0&&e<this._capacity&&i.get(e)&t.StateFlags.ALLOCATED,"invalid instance handle"),i.set(e,0),this._size--},r.setLocalTransform=function(t,e,i=!0){this._view.localTransform.setMat(t,e),i&&this.updateModelTransform(t)},r.getLocalTransform=function(t,e){this._view.localTransform.getMat(t,e)},r.setGlobalTransform=function(t,e,i=!0){this._view.globalTransform.setMat(t,e),i&&this.updateModelTransform(t)},r.getGlobalTransform=function(t,e){this._view.globalTransform.getMat(t,e)},r.updateModelTransform=function(e){const i=this._view,s=v,r=S;i.localTransform.getMat(e,w),i.globalTransform.getMat(e,V);const l=n.multiply(V,V,w);o.set(s,l[12],l[13],l[14]),i.modelOrigin.setVec(e,s),a.fromMat4(r,l),i.model.setMat(e,r);const c=f.scaleFromMatrix(v,l);c.sort(),i.modelScaleFactors.set(e,0,c[1]),i.modelScaleFactors.set(e,1,c[2]),a.invert(r,r),a.transpose(r,r),i.modelNormal.setMat(e,r),this.setStateFlags(e,t.StateFlags.TRANSFORM_CHANGED),this.emit("instance-transform-changed",{index:e})},r.getModelTransform=function(t,e){const i=this._view;i.model.getMat(t,S),i.modelOrigin.getVec(t,v),e[0]=S[0],e[1]=S[1],e[2]=S[2],e[3]=0,e[4]=S[3],e[5]=S[4],e[6]=S[5],e[7]=0,e[8]=S[6],e[9]=S[7],e[10]=S[8],e[11]=0,e[12]=v[0],e[13]=v[1],e[14]=v[2],e[15]=1},r.applyShaderTransformation=function(t,e){this._shaderTransformation&&this._shaderTransformation.applyTransform(this,t,e)},r.getCombinedModelTransform=function(t,e){return this.getModelTransform(t,e),this._shaderTransformation&&this._shaderTransformation.applyTransform(this,t,e),e},r.getCombinedLocalTransform=function(t,e){return this._view.localTransform.getMat(t,e),this._shaderTransformation&&this._shaderTransformation.applyTransform(this,t,e),e},r.getCombinedMaxScaleFactor=function(t){let e=this._view.modelScaleFactors.get(t,1);if(this._shaderTransformation){const i=this._shaderTransformation.scaleFactor(v,this,t);e*=Math.max(i[0],i[1],i[2])}return e},r.getCombinedMedianScaleFactor=function(t){let e=this._view.modelScaleFactors.get(t,0);if(this._shaderTransformation){const i=this._shaderTransformation.scaleFactor(v,this,t);i.sort(),e*=i[1]}return e},r.getModel=function(t,e){this._view.model.getMat(t,e)},r.setFeatureAttribute=function(t,e){this._view.featureAttribute.setVec(t,e)},r.getFeatureAttribute=function(t,e){this._view.featureAttribute.getVec(t,e)},r.setColor=function(t,e){this._view.color.setVec(t,e)},r.getColor=function(t,e){this._view.color.getVec(t,e)},r.setVisible=function(e,i){i!==this.getVisible(e)&&(this.setStateFlag(e,t.StateFlags.VISIBLE,i),this.emit("instance-visibility-changed",{index:e}))},r.getVisible=function(e){return this.getStateFlag(e,t.StateFlags.VISIBLE)},r.setHighlight=function(e,i){i!==this.getHighlight(e)&&(this.setStateFlag(e,t.StateFlags.HIGHLIGHT,i),this.emit("instance-highlight-changed",{index:e}))},r.getHighlight=function(e){return this.getStateFlag(e,t.StateFlags.HIGHLIGHT)},r.getState=function(t){return this._view.state.get(t)},r.getLodLevel=function(t){return this._view.lodLevel.get(t)},r.countFlags=function(t){let e=0;for(let i=0;i<this._capacity;++i){this.getState(i)&t&&++e}return e},r.setStateFlags=function(t,e){const i=this._view.state;e=i.get(t)|e,i.set(t,e)},r.clearStateFlags=function(t,e){const i=this._view.state;e=i.get(t)&~e,i.set(t,e)},r.setStateFlag=function(t,e,i){i?this.setStateFlags(t,e):this.clearStateFlags(t,e)},r.getStateFlag=function(t,e){return!!(this._view.state.get(t)&e)},r.grow=function(){const t=Math.max(T,Math.floor(this._capacity*F)),e=this._layout.createBuffer(t);if(this._buffer){const t=new Uint8Array(this._buffer.buffer);new Uint8Array(e.buffer).set(t)}this._capacity=t,this._buffer=e,this._view=new m(this._buffer)},r.findSlot=function(){const e=this._view.state;let i=this._next;for(;e.get(i)&t.StateFlags.ALLOCATED;)i=(i+1)%this._capacity;return this._next=(i+1)%this._capacity,i},e._createClass(s,[{key:"capacity",get:function(){return this._capacity}},{key:"size",get:function(){return this._size}},{key:"buffer",get:function(){return this._buffer.buffer}},{key:"view",get:function(){return this._view}}]),s}(i);const T=1024,F=2,v=l.create(),S=s.create(),w=r.create(),V=r.create();t.InstanceData=_,t.InstanceDataView=m,Object.defineProperty(t,"__esModule",{value:!0})}));
