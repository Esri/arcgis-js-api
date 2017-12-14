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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./MaterialKeyInfo","./MaterialInfoUtils","./Utils"],function(e,i,a,n,r,t){var l=function(){function e(){this.texBindingInfo=[],this.materialParams=[]}return e.prototype.release=function(){this.materialKey=null,this.texBindingInfo.length=0,this.materialParams.length=0,this.materialKeyInfo&&n.pool.release(this.materialKeyInfo)},e.prototype.copy=function(e){var i=this;e.materialParams.forEach(function(e,a){i.materialParams[a]={name:e.name,value:e.value}}),e.texBindingInfo.forEach(function(e,a){i.texBindingInfo[a]={unit:e.unit,pageId:e.pageId,semantic:e.semantic}}),this.materialKeyInfo&&(n.pool.release(this.materialKeyInfo),this.materialKeyInfo=null),e.materialKeyInfo&&(this.materialKeyInfo=n.pool.acquire(),this.materialKeyInfo.copy(e.materialKeyInfo)),this.materialKey=e.materialKey},e.serialize=function(i,a,n){var r=0;return r+=t.serializeInteger(i.materialKey,a,n+r),r+=e._serializeTexBindingInfo(i.texBindingInfo,a,n+r),r+=e._serializeMaterialParams(i.materialParams,a,n+r)},e.deserialize=function(i,a,l){var o=0;i.materialInfo=e.pool.acquire();var s={n:0};return o+=t.deserializeInteger(s,a,l+o),i.materialInfo.materialKey=s.n,o+=e._deserializeTexBindingInfo(i.materialInfo.texBindingInfo,a,l+o),o+=e._deserializeMaterialParams(i.materialInfo.materialParams,a,l+o),i.materialInfo.materialKeyInfo=n.pool.acquire(),r.updateMaterialVariations(i.materialInfo.materialKeyInfo,i.materialInfo.materialKey),o},e._serializeTexBindingInfo=function(e,i,a){var n=0,r=e.length;n+=t.serializeInteger(r,i,a+n);for(var l=0;r>l;++l)i&&(i[a+n]=e[l].unit),++n,n+=t.serializeInteger(e[l].pageId,i,a+n),n+=t.serializeString(e[l].semantic,i,a+n);return n},e._serializeMaterialParams=function(e,i,a){var n=0,r=e.length;n+=t.serializeInteger(r,i,a+n);for(var l=0;r>l;++l)n+=t.serializeString(e[l].name,i,a+n),n+=t.serializeUniform(e[l].value,i,a+n);return n},e._deserializeTexBindingInfo=function(e,i,a){var n=0,r={n:void 0};n+=t.deserializeInteger(r,i,a+n),e.length=r.n;for(var l={n:void 0},o={s:void 0},s=0;s<r.n;++s)e[s]={unit:void 0,pageId:void 0,semantic:void 0},e[s].unit=i[a+n],++n,n+=t.deserializeInteger(l,i,a+n),e[s].pageId=l.n,n+=t.deserializeString(o,i,a+n),e[s].semantic=o.s;return n},e._deserializeMaterialParams=function(e,i,a){var n=0,r={n:void 0};n+=t.deserializeInteger(r,i,a+n),e.length=r.n;for(var l={s:void 0},o={n:void 0},s=0;s<r.n;++s)e[s]={name:void 0,value:void 0},n+=t.deserializeString(l,i,a+n),e[s].name=l.s,n+=t.deserializeUniform(o,i,a+n),e[s].value=o.n;return n},e.pool=new a(e),e}();return l});