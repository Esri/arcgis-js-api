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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../OperationBase"],function(e,d,r,i,t){var a=e(t,{declaredClass:"esri.dijit.editing.Add",type:"edit",label:"Add Features",constructor:function(e){return e=e||{},e.featureLayer?(this._featureLayer=e.featureLayer,e.addedGraphics?void(this._addedGraphics=e.addedGraphics):void console.error("In constructor of 'esri.dijit.editing.Add', no graphics provided")):void console.error("In constructor of 'esri.dijit.editing.Add', featureLayer is not provided")},performUndo:function(){this._featureLayer.applyEdits(null,null,this._addedGraphics)},performRedo:function(){this._featureLayer.applyEdits(this._addedGraphics,null,null)}});return r("extend-esri")&&d.setObject("dijit.editing.Add",a,i),a});