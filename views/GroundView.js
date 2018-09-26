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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Collection","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","./support/GroundViewElevationSampler"],function(e,t,n,r,i,o,a,s,p,d){return function(e){function t(t){var n=e.call(this)||this;return n.handles=new a,n.view=null,n.layerViews=new o,n}return n(t,e),t.prototype.initialize=function(){var e=this;this.handles.add(s.when(this,"view.map.ground",function(e){return e.load()})),this.handles.add(this.layerViews.on("after-changes",function(){return e.layerViewsAfterChangesHandler()}))},t.prototype.destroy=function(){this._set("view",null),this.handles&&(this.handles.destroy(),this.handles=null)},Object.defineProperty(t.prototype,"elevationSampler",{get:function(){return this.view?"2d"===this.view.type?null:this.view.ready&&this.view.basemapTerrain&&this.view.basemapTerrain.ready?new d({view:this.view}):null:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.layerViews.some(function(e){return e.updating})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.view||this.view.suspended},enumerable:!0,configurable:!0}),t.prototype.layerViewsAfterChangesHandler=function(){var e=this;this.handles.remove("updating"),this.handles.add(this.layerViews.map(function(t){return t.watch("updating",function(){return e.updateUpdating()},!0)}).toArray(),"updating"),this.updateUpdating()},t.prototype.updateUpdating=function(){this.notifyChange("updating")},r([p.property({readOnly:!0,dependsOn:["view.ready","view.basemapTerrain?.ready"]})],t.prototype,"elevationSampler",null),r([p.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([p.property({constructOnly:!0})],t.prototype,"view",void 0),r([p.property({type:o,readOnly:!0})],t.prototype,"layerViews",void 0),r([p.property({readOnly:!0,dependsOn:["view.suspended"]})],t.prototype,"suspended",null),t=r([p.subclass("esri.views.GroundView")],t)}(p.declared(i))});