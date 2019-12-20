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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/collectionUtils","../../core/Logger","../../core/accessorSupport/decorators","../../views/3d/interactive/analysisTools/slice/SliceTool","../support/InteractiveToolViewModel"],function(e,t,o,r,l,n,i,s,c,u){var d=i.getLogger("esri.widgets.Slice.SliceViewModel");return function(e){function t(t){var o=e.call(this,t)||this;return o.supportedViewType="3d",o}return o(t,e),Object.defineProperty(t.prototype,"state",{get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"plane",{get:function(){return this.tool?this.tool.plane:this._get("plane")},set:function(e){this.tool?this.tool.plane=e:this._set("plane",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"excludedLayers",{get:function(){return this.tool?this.tool.excludedLayers:this._get("excludedLayers")||new l},set:function(e){this.tool?this.tool.excludedLayers=e:this._set("excludedLayers",n.referenceSetter(e,this.excludedLayers))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"excludeGroundSurface",{get:function(){return this.tool?this.tool.excludeGroundSurface:this._get("excludeGroundSurface")||!1},set:function(e){this.tool?this.tool.excludeGroundSurface=e:this._set("excludeGroundSurface",e)},enumerable:!0,configurable:!0}),t.prototype.newSlice=function(){this.createTool()},t.prototype.clearSlice=function(){this.removeTool(),this._set("plane",null),this._set("excludeGroundSurface",!1),this._set("excludedLayers",new l)},t.prototype.enterExcludeLayerMode=function(){this.tool&&this.tool.enterExcludeLayerMode()},t.prototype.exitExcludeLayerMode=function(){this.tool&&this.tool.exitExcludeLayerMode()},t.prototype.createToolParams=function(){var e=this;return{toolConstructor:c,constructorArguments:function(){return{excludeGroundSurface:e.excludeGroundSurface,plane:e.plane,excludedLayers:e.excludedLayers}}}},t.prototype.logUnsupportedError=function(){this.logError("Slice widget is not implemented for MapView")},t.prototype.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];d.error.apply(d,e)},r([s.property({dependsOn:["isDisabled","tool.attached","tool.state"],readOnly:!0})],t.prototype,"state",null),r([s.property()],t.prototype,"tool",void 0),r([s.property({dependsOn:["tool.plane"]})],t.prototype,"plane",null),r([s.aliasOf("tool.layersMode")],t.prototype,"layersMode",void 0),r([s.property({dependsOn:["tool.excludedLayers"],cast:n.castForReferenceSetter})],t.prototype,"excludedLayers",null),r([s.property({dependsOn:["tool.excludeGroundSurface"],nonNullable:!0})],t.prototype,"excludeGroundSurface",null),t=r([s.subclass("esri.widgets.slice.SliceViewModel")],t)}(s.declared(u.InteractiveToolViewModel))});