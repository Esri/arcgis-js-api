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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","./PropertiesPool","./disposeMembers","../../webgl-engine/lib/Camera"],function(e,r,t,o,n,a,i,p,c){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(r){var t=e.call(this,r)||this;return t.propertiesPool=new i["default"]({camera:c},t),t}return t(r,e),r.prototype.normalizeCtorArgs=function(e){var r=this;return this.cameraChangeHandle=e.view.navigation.on("currentViewChanged",function(e){return r.currentViewChangedHandler(e.camera)}),this.camera=e.view.navigation.currentCamera.copy(),{mode:e.view.viewingMode,spatialReference:e.view.spatialReference}},r.prototype.initialize=function(){},r.prototype.destroy=function(){p["default"](this,"cameraChangeHandle","propertiesPool")},Object.defineProperty(r.prototype,"isGlobal",{get:function(){return!this.isLocal},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLocal",{get:function(){return"local"===this.mode},enumerable:!0,configurable:!0}),r.prototype.currentViewChangedHandler=function(e){this.camera.equals(e)||(this.camera=this.propertiesPool.get("camera").copyFrom(e))},o([n.property()],r.prototype,"camera",void 0),o([n.property({dependsOn:["isLocal"]})],r.prototype,"isGlobal",null),o([n.property({dependsOn:["mode"]})],r.prototype,"isLocal",null),o([n.property({constructOnly:!0})],r.prototype,"mode",void 0),o([n.property({constructOnly:!0})],r.prototype,"spatialReference",void 0),r=o([n.subclass()],r)}(n.declared(a));r.ViewState=l,r["default"]=l});