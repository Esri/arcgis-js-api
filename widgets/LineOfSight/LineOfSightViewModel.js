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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/collectionUtils","../../core/Logger","../../core/accessorSupport/decorators","../../views/3d/interactive/analysisTools/lineOfSight/LineOfSightTool","../support/InteractiveToolViewModel"],(function(t,e,o,r,i,n,s,l){"use strict";var a=i.getLogger("esri.widgets.LineOfSight.LineOfSightViewModel");return function(t){function e(e){var o=t.call(this,e)||this;return o.supportedViewType="3d",o}return o.__extends(e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"observer",{get:function(){return this.tool?this.tool.observer:this._get("observer")||null},set:function(t){this.tool?this.tool.observer=t:this._set("observer",t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"targets",{get:function(){return this.tool?this.tool.targets:this._get("targets")||new s.LineOfSightTargetCollection},set:function(t){var e=r.referenceSetter(t,this.targets,s.LineOfSightTargetCollection);this.tool?this.tool.targets=e:this._set("targets",e)},enumerable:!1,configurable:!0}),e.prototype.start=function(){return this.createTool()},e.prototype.clear=function(){this.removeTool(),this._set("observer",null),this.targets.removeAll()},e.prototype.continue=function(){this.tool&&this.tool.continue()},e.prototype.stop=function(){this.tool&&this.tool.stop()},e.prototype.createToolParams=function(){var t=this;return{toolConstructor:s.LineOfSightTool,constructorArguments:function(){return{observer:t.observer,targets:t.targets}}}},e.prototype.logUnsupportedError=function(){this.logError("LineOfSight widget is not implemented for MapView")},e.prototype.logError=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];a.error.apply(a,t)},o.__decorate([n.property({dependsOn:["isDisabled","tool.attached","tool.state"],readOnly:!0})],e.prototype,"state",null),o.__decorate([n.property()],e.prototype,"tool",void 0),o.__decorate([n.property({dependsOn:["tool.observer"]})],e.prototype,"observer",null),o.__decorate([n.property({type:s.LineOfSightTargetCollection,dependsOn:["tool.targets"],cast:r.castForReferenceSetter,nonNullable:!0})],e.prototype,"targets",null),e=o.__decorate([n.subclass("esri.widgets.lineOfSight.LineOfSightViewModel")],e)}(l.InteractiveToolViewModel)}));