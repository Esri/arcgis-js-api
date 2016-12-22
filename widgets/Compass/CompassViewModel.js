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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/HandleRegistry","../../core/watchUtils","dojo/_base/lang"],function(t,e,i,a){var n={disabled:"disabled",compass:"compass",rotation:"rotation"};return t.createSubclass({declaredClass:"esri.widgets.CompassViewModel",properties:{canShowNorth:{dependsOn:["spatialReference"]},orientation:{},spatialReference:{dependsOn:["view.spatialReference"]},state:{dependsOn:["view.ready","canShowNorth"]},view:{}},constructor:function(){this._handles=new e,this._updateForCamera=this._updateForCamera.bind(this),this._updateForRotation=this._updateForRotation.bind(this),this._updateRotationWatcher=this._updateRotationWatcher.bind(this)},getDefaults:function(){return a.mixin(this.inherited(arguments),{orientation:{x:0,y:0,z:0}})},initialize:function(){this._handles.add(i.init(this,"view",this._updateRotationWatcher))},destroy:function(){this._handles.destroy()},_handles:null,canShowNorth:!1,_canShowNorthGetter:function(){var t=this.spatialReference;return t&&(t.isWebMercator||4326===t.wkid)},orientation:null,spatialReference:null,_spatialReferenceGetter:function(){return this.get("view.spatialReference")||null},state:n.disabled,_stateGetter:function(){return this.get("view.ready")?this.canShowNorth?n.compass:n.rotation:n.disabled},view:null,reset:function(){var t=this.view;t&&t.ready&&("2d"===t.type?t.goTo({rotation:0}):t.goTo({heading:0}))},_updateForRotation:function(t){void 0!==t&&null!==t&&(this.orientation={z:t})},_updateForCamera:function(t){if(t){var e=-t.heading;this.orientation={x:0,y:0,z:e}}},_updateRotationWatcher:function(t){this._handles.removeAll(),t&&("2d"===t.type?this._handles.add(i.init(this,"view.rotation",this._updateForRotation)):this._handles.add(i.init(this,"view.camera",this._updateForCamera)))}})});