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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/HandleRegistry","../../core/watchUtils","../../views/3d/navigation/EventController"],function(e,t,i,n){var a={disabled:"disabled",ready:"ready"},o={pan:"pan",rotate:"rotate"};return e.createSubclass({declaredClass:"esri.widgets.NavigationToggleViewModel",properties:{navigationMode:{},state:{dependsOn:["view.navigationController","view.ready"],readOnly:!0},view:{}},constructor:function(){this._handles=new t,this.toggle=this.toggle.bind(this)},initialize:function(){this._handles.add(i.when(this,"view.navigationController",this._updateNavMode.bind(this)))},destroy:function(){this._handles.destroy()},_handles:null,state:a.disabled,_stateGetter:function(){return this.get("view.ready")&&"esri.views.SceneView"===this.view.declaredClass?a.enabled:a.disabled},navigationMode:o.pan,view:null,toggle:function(){if(this.state!==a.disabled){var e=this.get("view.navigationController"),t=e.getControls();e.setControls(t===n.PRO_PAN||t===n.PRO_TUMBLE?this.navigationMode!==o.pan?n.PRO_PAN:n.PRO_TUMBLE:this.navigationMode!==o.pan?n.PAN:n.TUMBLE),this.navigationMode=this.navigationMode!==o.pan?o.pan:o.rotate}},_updateNavMode:function(){var e=this.view.navigationController.getControls();e===n.PRO_TUMBLE?e.setControls(n.PRO_PAN):e===n.TUMBLE&&e.setControls(n.PAN)}})});