// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/data/ObjectStore","dijit/form/Select","../../kernel"],function(e,t,i,r,a,s,n,o){var l=e([n],{postCreate:function(){this.inherited(arguments),this.setFieldOptions(this.layerArg),this._attachLayerChangeEvent()},_attachLayerChangeEvent:function(){if(this.layerArg&&this.layerArg.input){var e=this.layerArg.input;"RFxFeatureSelect"===e.declaredClass?this.own(e._layerSelect.on("change",t.hitch(this,this.setFieldOptions))):this.own(e.on("change",t.hitch(this,this.setFieldOptions)))}},setFieldOptions:function(){if(this.layerArg&&this.layerArg.input){var e,r=this.layerArg.input;if("RFxFeatureSelect"===r.declaredClass&&r.value)i.some(r.inputLayers,function(t){if(t.url===r.value.url)return e=t,!0});else{var n=r.store;e=n&&n.get(r.value)}e&&(this.set("labelAttr","alias"),this.setStore(new s(new a({idProperty:"name",data:t.clone(e.fields)})))),this.reset()}}});return r("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxFieldSelect",l,o),l});