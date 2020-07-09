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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../../../../interactive/dragEventPipeline"],(function(e,t,n,a,i,r){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this.view=null,this.elevationInfo=null,this.lastDragEvent=null,this.next=new r.EventPipeline,this._enabled=!1}return Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},set:function(e){if(this._enabled!==e&&a.isSome(this.lastDragEvent)){var t=this.lastDragEvent.mapEnd,n=this.snap(this.lastDragEvent.screenEnd);if(a.isSome(n)){var i={action:"update",mapStart:this.lastDragEvent.mapStart,mapEnd:!0===e?n:t,screenStart:this.lastDragEvent.screenEnd,screenEnd:this.lastDragEvent.screenEnd};this.next.execute(i)}}this._enabled=e},enumerable:!0,configurable:!0}),e.prototype.snap=function(e){var t=a.isSome(this.view)?this.view.toMap(e,{exclude:[]}):null;return a.isSome(t)&&a.isSome(this.view)&&(t.z=i.getZForElevationMode(t,this.view,this.elevationInfo)),t},e.prototype.createDragEventPipelineStep=function(e,t){var i=this;return this.view=e,this.elevationInfo=t,this.lastDragEvent=null,function(e){if(i.lastDragEvent="end"!==e.action?n.__assign({},e):null,i._enabled){var t=i.snap(e.screenEnd);return a.isSome(t)?{action:e.action,mapStart:e.mapStart,mapEnd:t,screenStart:e.screenStart,screenEnd:e.screenEnd}:null}return{action:e.action,mapStart:e.mapStart,mapEnd:e.mapEnd,screenStart:e.screenStart,screenEnd:e.screenEnd}}},e}();t.SnapToScene=s}));