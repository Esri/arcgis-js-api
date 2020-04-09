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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../manipulatorDragUtils"],(function(e,t,n,r,a,i,s,o,l,p){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(){this.view=null,this.elevationInfo=null,this.lastDragEvent=null,this.next=new p.EventPipeline,this._enabled=!1}return Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},set:function(e){if(this._enabled!==e&&o.isSome(this.lastDragEvent)){var t=this.lastDragEvent.mapEnd,n=this.snap(this.lastDragEvent.screenEnd);if(o.isSome(n)){var r={action:"update",mapStart:this.lastDragEvent.mapStart,mapEnd:!0===e?n:t,screenStart:this.lastDragEvent.screenEnd,screenEnd:this.lastDragEvent.screenEnd};this.next.execute(r)}}this._enabled=e},enumerable:!0,configurable:!0}),e.prototype.snap=function(e){var t=o.isSome(this.view)?this.view.toMap(e,{exclude:[]}):null;return o.isSome(t)&&o.isSome(this.view)&&(t.z=l.getZForElevationMode(t,this.view,this.elevationInfo)),t},e.prototype.createDragEventPipelineStep=function(e,t){var n=this;return this.view=e,this.elevationInfo=t,this.lastDragEvent=null,function(e){if(n.lastDragEvent="end"!==e.action?s({},e):null,n._enabled){var t=n.snap(e.screenEnd);return o.isSome(t)?{action:e.action,mapStart:e.mapStart,mapEnd:t,screenStart:e.screenStart,screenEnd:e.screenEnd}:null}return{action:e.action,mapStart:e.mapStart,mapEnd:e.mapEnd,screenStart:e.screenStart,screenEnd:e.screenEnd}}},e}();t.SnapToScene=c}));