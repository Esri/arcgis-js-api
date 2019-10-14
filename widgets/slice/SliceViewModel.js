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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Logger","../../core/accessorSupport/decorators","../../views/3d/interactive/analysisTools/slice/SliceTool","../support/InteractiveToolViewModel"],function(e,o,t,r,l,i,s,p){var c=l.getLogger("esri.widgets.Slice.SliceViewModel");return function(e){function o(o){var t=e.call(this,o)||this;return t.supportedViewType="3d",t.excludedLayers=null,t.excludeGroundSurface=null,t}return t(o,e),Object.defineProperty(o.prototype,"state",{get:function(){return this.isDisabled?"disabled":this.tool.state},enumerable:!0,configurable:!0}),o.prototype.newSlice=function(){this.tool&&this.tool.newSlice()},o.prototype.clearSlice=function(){this.tool&&this.tool.clearSlice()},o.prototype.enterExcludeLayerMode=function(){this.tool&&this.tool.enterExcludeLayerMode()},o.prototype.exitExcludeLayerMode=function(){this.tool&&this.tool.exitExcludeLayerMode()},o.prototype.createToolParams=function(){return{toolConstructor:s}},o.prototype.logUnsupportedError=function(){c.error("Slice widget is not implemented for MapView")},o.prototype.logError=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];c.error.apply(c,e)},r([i.property({dependsOn:["isDisabled","tool.state"],readOnly:!0})],o.prototype,"state",null),r([i.property()],o.prototype,"tool",void 0),r([i.aliasOf("tool.plane")],o.prototype,"plane",void 0),r([i.aliasOf("tool.layersMode")],o.prototype,"layersMode",void 0),r([i.aliasOf("tool.excludedLayers")],o.prototype,"excludedLayers",void 0),r([i.aliasOf("tool.excludeGroundSurface")],o.prototype,"excludeGroundSurface",void 0),o=r([i.subclass("esri.widgets.slice.SliceViewModel")],o)}(i.declared(p))});