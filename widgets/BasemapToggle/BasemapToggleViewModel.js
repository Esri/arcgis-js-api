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

define(["../../core/Accessor","../../core/Evented","../../support/basemapUtils","dojo/_base/lang"],function(e,a,t,s){var i={ready:"ready",disabled:"disabled"};return e.createSubclass([a],{properties:{activeBasemap:{dependsOn:["view.map.basemap"],readOnly:!0},nextBasemap:{},state:{dependsOn:["view.ready"],readOnly:!0},view:{}},declaredClass:"esri.widgets.BasemapToggle.BasemapToggleViewModel",constructor:function(){this.toggle=this.toggle.bind(this),this._basemapCache={}},getDefaults:function(e){return s.mixin(this.inherited(arguments),{nextBasemap:"hybrid"})},_basemapCache:null,activeBasemap:null,_activeBasemapGetter:function(){return t.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)},nextBasemap:null,_nextBasemapSetter:function(e){this._set("nextBasemap",t.ensureType(e,this._basemapCache))},state:i.disabled,_stateGetter:function(){return this.get("view.ready")?i.ready:i.disabled},view:null,toggle:function(){if(this.state!==i.disabled){var e=this.activeBasemap,a=this.nextBasemap;this.view.map.basemap=a,this.nextBasemap=e,this.emit("toggle",{previous:e,current:a})}}})});