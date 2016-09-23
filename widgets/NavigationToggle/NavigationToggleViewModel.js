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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/HandleRegistry","../../core/watchUtils","../../views/3d/navigation/EventController"],function(t,e,i,n){var a={disabled:"disabled",ready:"ready"},o={pan:"pan",rotate:"rotate"};return t.createSubclass({declaredClass:"esri.widgets.NavigationToggleViewModel",properties:{navigationMode:{},state:{dependsOn:["view.navigationController","view.ready"],readOnly:!0},view:{}},constructor:function(){this._handles=new e,this.toggle=this.toggle.bind(this)},initialize:function(){this._handles.add(i.when(this,"view.navigationController",this._updateNavMode.bind(this)))},destroy:function(){this._handles.destroy()},_handles:null,state:a.disabled,_stateGetter:function(){return this.get("view.ready")&&"3d"===this.view.type?a.ready:a.disabled},navigationMode:o.pan,view:null,toggle:function(){if(this.state!==a.disabled){var t=this.get("view.navigationController"),e=t.getControls();e===n.PRO_PAN||e===n.PRO_TUMBLE?t.setControls(this.navigationMode!==o.pan?n.PRO_PAN:n.PRO_TUMBLE):t.setControls(this.navigationMode!==o.pan?n.PAN:n.TUMBLE),this.navigationMode=this.navigationMode!==o.pan?o.pan:o.rotate}},_updateNavMode:function(){var t=this.view.navigationController.getControls();t===n.PRO_TUMBLE?t.setControls(n.PRO_PAN):t===n.TUMBLE&&t.setControls(n.PAN)}})});