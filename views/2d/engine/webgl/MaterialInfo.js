// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./MaterialKeyInfo","./Utils"],function(e,i,a,n,r){var t=function(){function e(){this.texBindingInfo=[],this.materialParams=[]}return e.prototype.release=function(){this.materialKey=null,this.texBindingInfo.length=0,this.materialParams.length=0,this.materialKeyInfo&&n.pool.release(this.materialKeyInfo)},e.prototype.copy=function(e){var i=this;e.materialParams.forEach(function(e,a){i.materialParams[a]={name:e.name,value:e.value}}),e.texBindingInfo.forEach(function(e,a){i.texBindingInfo[a]={unit:e.unit,pageId:e.pageId,semantic:e.semantic}}),this.materialKeyInfo&&(n.pool.release(this.materialKeyInfo),this.materialKeyInfo=null),e.materialKeyInfo&&(this.materialKeyInfo=n.pool.acquire(),this.materialKeyInfo.copy(e.materialKeyInfo)),this.materialKey=e.materialKey},e.serialize=function(i,a,n){var t=0;return t+=r.serializeInteger(i.materialKey,a,n+t),t+=e._serializeTexBindingInfo(i.texBindingInfo,a,n+t),t+=e._serializeMaterialParams(i.materialParams,a,n+t)},e.deserialize=function(i,a,t){var l=0;i.materialInfo=e.pool.acquire();var o={n:0};return l+=r.deserializeInteger(o,a,t+l),i.materialInfo.materialKey=o.n,l+=e._deserializeTexBindingInfo(i.materialInfo.texBindingInfo,a,t+l),l+=e._deserializeMaterialParams(i.materialInfo.materialParams,a,t+l),i.materialInfo.materialKeyInfo=n.pool.acquire(),l},e._serializeTexBindingInfo=function(e,i,a){var n=0,t=e.length;n+=r.serializeInteger(t,i,a+n);for(var l=0;t>l;++l)i&&(i[a+n]=e[l].unit),++n,n+=r.serializeInteger(e[l].pageId,i,a+n),n+=r.serializeString(e[l].semantic,i,a+n);return n},e._serializeMaterialParams=function(e,i,a){var n=0,t=e.length;n+=r.serializeInteger(t,i,a+n);for(var l=0;t>l;++l)n+=r.serializeString(e[l].name,i,a+n),n+=r.serializeUniform(e[l].value,i,a+n);return n},e._deserializeTexBindingInfo=function(e,i,a){var n=0,t={n:void 0};n+=r.deserializeInteger(t,i,a+n),e.length=t.n;for(var l={n:void 0},o={s:void 0},s=0;s<t.n;++s)e[s]={unit:void 0,pageId:void 0,semantic:void 0},e[s].unit=i[a+n],++n,n+=r.deserializeInteger(l,i,a+n),e[s].pageId=l.n,n+=r.deserializeString(o,i,a+n),e[s].semantic=o.s;return n},e._deserializeMaterialParams=function(e,i,a){var n=0,t={n:void 0};n+=r.deserializeInteger(t,i,a+n),e.length=t.n;for(var l={s:void 0},o={n:void 0},s=0;s<t.n;++s)e[s]={name:void 0,value:void 0},n+=r.deserializeString(l,i,a+n),e[s].name=l.s,n+=r.deserializeUniform(o,i,a+n),e[s].value=o.n;return n},e.pool=new a(e),e}();return t});