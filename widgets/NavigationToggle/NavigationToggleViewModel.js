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

define(["../../core/Accessor","../../core/HandleRegistry","../../core/watchUtils"],function(e,t,i){var a={disabled:"disabled",ready:"ready"},n={pan:"pan",rotate:"rotate"};return e.createSubclass({declaredClass:"esri.widgets.NavigationToggleViewModel",properties:{navigationMode:{},state:{dependsOn:["view.ready"],readOnly:!0},view:{}},constructor:function(){this._handles=new t,this.toggle=this.toggle.bind(this)},initialize:function(){this._handles.add(i.when(this,"view.inputManager",this._setNavigationMode.bind(this)))},destroy:function(){this._handles.destroy()},_handles:null,state:a.disabled,_stateGetter:function(){return this.get("view.ready")&&"3d"===this.view.type?a.ready:a.disabled},navigationMode:n.pan,view:null,toggle:function(){this.state!==a.disabled&&(this.navigationMode=this.navigationMode!==n.pan?n.pan:n.rotate,this._setNavigationMode())},_setNavigationMode:function(){this.view.inputManager.primaryDragAction=this.navigationMode===n.pan?"pan":"rotate"}})});