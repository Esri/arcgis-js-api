// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/typescript","../../../core/Accessor"],function(e,t,r,o,p,n){var i=function(e){function t(){e.apply(this,arguments)}return r(t,e),o([p.property({value:1})],t.prototype,"lodFactor",void 0),t=o([p.subclass()],t)}(n),s=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.getDefaults=function(){return{"3dObject":new i,point:new i,integratedMesh:new i}},o([p.property()],t.prototype,"3dObject",void 0),o([p.property()],t.prototype,"point",void 0),o([p.property()],t.prototype,"integratedMesh",void 0),t=o([p.subclass()],t)}(n),u=function(e){function t(){e.apply(this,arguments)}return r(t,e),o([p.property({value:0})],t.prototype,"lodBias",void 0),o([p.property({value:1})],t.prototype,"angledSplitBias",void 0),t=o([p.subclass()],t)}(n),a=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.getDefaults=function(){return{sceneService:new s,tiledSurface:new u,antialiasingEnabled:!0}},o([p.property()],t.prototype,"sceneService",void 0),o([p.property()],t.prototype,"tiledSurface",void 0),o([p.property()],t.prototype,"antialiasingEnabled",void 0),t=o([p.subclass()],t)}(n);return a});