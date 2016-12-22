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

define(["../../core/Accessor","../../core/HandleRegistry","../../core/watchUtils"],function(e,t,i){var s={disabled:"disabled",ready:"ready"};return e.createSubclass({properties:{point:{},screenPoint:{},state:{},view:{}},declaredClass:"esri.widgets.support.AnchorElementViewModel",constructor:function(){this._handles=new t},destroy:function(){this._viewReady&&this._viewReady.cancel(),this.view=null,this._handles.destroy(),this._handles=null,this._viewWatch=null},point:null,_pointSetter:function(e){this._viewControl(e),this._createScreenPoint(e,this.view),this._set("point",e)},screenPoint:null,state:s.disabled,view:null,_viewSetter:function(e){this._handles&&(this._handles.remove("viewHandles"),this._viewWatch=null),this._viewReady&&this._viewReady.cancel(),this.state=s.disabled,e&&(this._viewReady=e.then(function(){this.state=s.ready;var t="viewpoint";"3d"===e.type&&(t="camera"),this._viewWatch=i.pausable(e,t,function(){this._createScreenPoint(this.point,this.view)}.bind(this)),this._handles.add(this._viewWatch,"viewHandles"),this._viewControl(this.point)}.bind(this))),this._set("view",e)},_viewControl:function(e){this._viewWatch&&(e?this._viewWatch.resume():this._viewWatch.pause())},_createScreenPoint:function(e,t){e&&t?this.screenPoint=t.toScreen(e.x,e.y,e.z):this.screenPoint=null}})});