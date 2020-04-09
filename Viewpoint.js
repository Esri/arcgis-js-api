// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./Camera","./geometry","./core/JSONSupport","./core/accessorSupport/decorators","./geometry/support/jsonUtils"],(function(e,t,r,o,i,n,a,p,s){function c(){return{enabled:!this.camera}}return(function(e){function t(t){var r=e.call(this,t)||this;return r.rotation=0,r.scale=0,r.targetGeometry=null,r.camera=null,r}var a;return r(t,e),a=t,t.prototype.castRotation=function(e){return(e%=360)<0&&(e+=360),e},t.prototype.clone=function(){return new a({rotation:this.rotation,scale:this.scale,targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})},o([p.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:c}}}}})],t.prototype,"rotation",void 0),o([p.cast("rotation")],t.prototype,"castRotation",null),o([p.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:c}}}}})],t.prototype,"scale",void 0),o([p.property({types:n.geometryTypes,json:{read:s.fromJSON,write:!0,origins:{"web-scene":{read:s.fromJSON,write:{overridePolicy:c}}}}})],t.prototype,"targetGeometry",void 0),o([p.property({type:i,json:{write:!0}})],t.prototype,"camera",void 0),t=a=o([p.subclass("esri.Viewpoint")],t)}(p.declared(a.JSONSupport)))}));