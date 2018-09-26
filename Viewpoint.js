// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./Camera","./core/JSONSupport","./core/accessorSupport/decorators","./geometry/support/jsonUtils","./geometry/support/typeUtils"],function(e,t,r,o,i,n,a,p,s){function c(){return{enabled:!this.camera}}return function(e){function t(t){var r=e.call(this)||this;return r.rotation=0,r.scale=0,r.targetGeometry=null,r.camera=null,r}r(t,e),n=t,t.prototype.castRotation=function(e){return e%=360,e<0&&(e+=360),e},t.prototype.clone=function(){return new n({rotation:this.rotation,scale:this.scale,targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})};var n;return o([a.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:c}}}}})],t.prototype,"rotation",void 0),o([a.cast("rotation")],t.prototype,"castRotation",null),o([a.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:c}}}}})],t.prototype,"scale",void 0),o([a.property({types:s.types,json:{read:p.fromJSON,write:!0,origins:{"web-scene":{read:p.fromJSON,write:{overridePolicy:c}}}}})],t.prototype,"targetGeometry",void 0),o([a.property({type:i,json:{write:!0}})],t.prototype,"camera",void 0),t=n=o([a.subclass("esri.Viewpoint")],t)}(a.declared(n))});