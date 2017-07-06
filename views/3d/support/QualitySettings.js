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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/typescript","../../../core/Accessor"],function(t,e,r,o,p,n){var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(n);o([p.property({value:1})],i.prototype,"lodFactor",void 0),i=o([p.subclass()],i);var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.getDefaults=function(){return{"3dObject":new i,point:new i,integratedMesh:new i,pointCloud:new i}},e}(n);o([p.property()],u.prototype,"3dObject",void 0),o([p.property()],u.prototype,"point",void 0),o([p.property()],u.prototype,"integratedMesh",void 0),o([p.property()],u.prototype,"pointCloud",void 0),u=o([p.subclass()],u);var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(n);o([p.property({value:0})],s.prototype,"lodBias",void 0),o([p.property({value:1})],s.prototype,"angledSplitBias",void 0),s=o([p.subclass()],s);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.getDefaults=function(){return{sceneService:new u,tiledSurface:new s,antialiasingEnabled:!0}},e}(n);return o([p.property()],a.prototype,"sceneService",void 0),o([p.property()],a.prototype,"tiledSurface",void 0),o([p.property()],a.prototype,"antialiasingEnabled",void 0),o([p.property()],a.prototype,"gpuMemoryLimit",void 0),a=o([p.subclass()],a)});