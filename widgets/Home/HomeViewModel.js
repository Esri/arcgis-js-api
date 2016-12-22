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

define(["../../core/Accessor","../../core/Evented"],function(i,e){var t={disabled:"disabled",goingHome:"going-home",ready:"ready"};return i.createSubclass([e],{properties:{state:{dependsOn:["view.ready"],readOnly:!0},view:{},viewpoint:{dependsOn:["state"]}},declaredClass:"esri.widgets.Home.HomeViewModel",constructor:function(){this.go=this.go.bind(this)},state:t.disabled,_stateGetter:function(){return this.get("view.ready")?this._goingHome?t.goingHome:t.ready:t.disabled},view:null,_viewSetter:function(i){this._initialViewpoint=null,i&&i.then(function(){this._initialViewpoint=i.viewpoint.clone(),this.notifyChange("viewpoint")}.bind(this)),this._set("view",i)},viewpoint:null,_viewpointGetter:function(){return this._get("viewpoint")||this._initialViewpoint},_initialViewpoint:null,_goingHome:null,go:function(){if(this.get("view.ready")){this._goingHome&&(this._goingHome.cancel(),this._goingHome=null),this.emit("go");var i=this.view.goTo(this.viewpoint).always(function(){this.notifyChange("state"),this._goingHome=null}.bind(this));return this._goingHome=i,this.notifyChange("state"),i}}})});