/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/uid","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec4f64","../../support/mathUtils","./geometryDataUtils","./Object3DStateID","../materials/renderers/utils"],(function(t,i,n,e,r,a,s,o,h,u,c,m){"use strict";let f=function(){function t(t,i,n=null,r=null,s=e.generateUID(),h=null,u=null,c=!1){this.data=t,this.material=i,this.layerUid=n,this.graphicUid=r,this.id=s,this.boundingInfo=h,this.calculateShaderTransformation=u,this.castShadow=c,this.boundingSphere=o.create(),this.instanceParameters={highlights:null,occludees:null,visible:!0},this._transformation=a.create(),this._shaderTransformationDirty=!0}var f=t.prototype;return f.updateTransformation=function(t){t(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere)},f.shaderTransformationChanged=function(){this._shaderTransformationDirty=!0},f.computeBoundingSphere=function(t,i,e=h.maxScale(t)){n.isNone(this.boundingInfo)||(s.transformMat4(i,this.boundingInfo.getCenter(),t),i[3]=this.boundingInfo.getBSRadius()*e)},f.getShaderTransformation=function(){return n.isNone(this.calculateShaderTransformation)?n.unwrapOr(this.transformation,a.IDENTITY):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=a.create()),r.copy(this._shaderTransformation,this.calculateShaderTransformation(n.unwrapOr(this.transformation,a.IDENTITY))),this._shaderTransformationDirty=!1),this._shaderTransformation)},f.computeAttachmentOrigin=function(t){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,t)&&(n.isSome(this._transformation)&&s.transformMat4(t,t,this._transformation),!0);const i=this.indices.get("position"),e=this.vertexAttributes.get("position");return!!u.computeAttachmentOriginTriangles(e,i,t)&&(n.isSome(this._transformation)&&s.transformMat4(t,t,this._transformation),!0)},f.addHighlight=function(){const t=new c.Object3DStateID(0),i=this.instanceParameters;return i.highlights=m.addObject3DStateID(i.highlights,t),t},f.removeHighlight=function(t){const i=this.instanceParameters;i.highlights=m.removeObject3DStateID(i.highlights,t)},i._createClass(t,[{key:"transformation",get:function(){return this._transformation}},{key:"hasShaderTransformation",get:function(){return n.isSome(this.calculateShaderTransformation)}},{key:"primitiveType",get:function(){return this.data.primitiveType}},{key:"indices",get:function(){return this.data.indices}},{key:"vertexAttributes",get:function(){return this.data.vertexAttributes}}]),t}(),d=function(t){function n(){return t.apply(this,arguments)||this}return i._inheritsLoose(n,t),n}(f);t.RenderGeometry=f,t.ValidatedRenderGeometry=d,Object.defineProperty(t,"__esModule",{value:!0})}));
