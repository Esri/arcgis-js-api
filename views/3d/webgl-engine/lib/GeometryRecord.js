/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../core/ObjectPool","../../../../chunks/vec3","./IdGen"],(function(t,n,i){"use strict";let r=function(){function t(){}var i=t.prototype;return i.acquire=function(n,i,r,e,a,o){this.id=t._idGen.gen(n&&n.id),this.geometry=n,this.material=i,this.transformation=r,this.instanceParameters=e,this.origin=a,this.shaderTransformation=o},i.getStaticTransformation=function(){return this.transformation},i.getShaderTransformation=function(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation},i.computeAttachmentOrigin=function(t){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(n.transformMat4(t,t,this.getStaticTransformation()),!0)},t}();return r._idGen=new i.IdGen,r.pool=new t(r),r}));
