// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./ImageMeshColor","./MeshTexture","./ValueMeshColor"],function(e,o,t,r,n,a,l,u,i,s,p,c,d){function h(){T.warn('Assigning ImageMeshColor to "MeshMaterial.color" is deprecated. Assigning to "MeshMaterial.colorTexture" instead.')}function f(){T.warn('Assigning ValueMeshColor to "MeshMaterial.color" is deprecated. Automatically converting it to esri.Color.')}var T=u.getLogger("esri.geometry.support.MeshMaterial"),y=/^\s*(#|rgba?\()/;return function(e){function o(o){var t=e.call(this)||this;return t.color=null,t.colorTexture=null,t.normalTexture=null,t.alphaMode="auto",t.alphaCutoff=.5,t.doubleSided=!0,t}t(o,e),a=o,o.prototype.castColor=function(e){return e?Array.isArray(e)?new n(e):e instanceof n||e instanceof c?e:"string"==typeof e?y.test(e)||n.named[e]?new n(e):(h(),this.colorTexture=new c({url:e}),null):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData?(h(),this.colorTexture=new c({data:e}),null):e instanceof p?(h(),this.colorTexture=new c({url:e.url,data:e.data}),null):"image"===e.type?(h(),this.colorTexture=new c(e),null):e instanceof d?(f(),new n(e.value)):s.ensureType(n,e):e},o.prototype.castColorTexture=function(e){return e?"string"==typeof e?new c({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData?new c({data:e}):s.ensureType(c,e):e},o.prototype.readColorTexture=function(e,o,t){if(e)return new c(e)},o.prototype.castNormalTexture=function(e){return e?"string"==typeof e?new c({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData?new c({data:e}):s.ensureType(c,e):e},o.prototype.readNormalTexture=function(e,o,t){if(e)return new c(e)},o.prototype.clone=function(){return new a({color:l.clone(this.color),colorTexture:l.clone(this.colorTexture),normalTexture:l.clone(this.normalTexture),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided})},o.prototype.cloneWithDeduplication=function(e,o){var t=e.get(this);if(t)return t;var r=new a({color:l.clone(this.color),colorTexture:this.colorTexture?this.colorTexture.cloneWithDeduplication(o):null,normalTexture:this.normalTexture?this.normalTexture.cloneWithDeduplication(o):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided});return e.set(this,r),r};var a;return r([i.property({type:n,json:{write:!0}})],o.prototype,"color",void 0),r([i.cast("color")],o.prototype,"castColor",null),r([i.property({json:{write:!0}})],o.prototype,"colorTexture",void 0),r([i.cast("colorTexture")],o.prototype,"castColorTexture",null),r([i.reader("colorTexture")],o.prototype,"readColorTexture",null),r([i.property({json:{write:!0}})],o.prototype,"normalTexture",void 0),r([i.cast("normalTexture")],o.prototype,"castNormalTexture",null),r([i.reader("normalTexture")],o.prototype,"readNormalTexture",null),r([i.property({json:{write:!0}})],o.prototype,"alphaMode",void 0),r([i.property({json:{write:!0}})],o.prototype,"alphaCutoff",void 0),r([i.property({json:{write:!0}})],o.prototype,"doubleSided",void 0),o=a=r([i.subclass("esri.geometry.support.MeshMaterial")],o)}(i.declared(a.JSONSupport))});