// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","./EditOperationBase"],function(e,t,r,d,i,a){var n=t(a,{declaredClass:"esri.dijit.editing.Add",type:"edit",label:"Add Features",constructor:function(e){return e=e||{},e.featureLayer?(this._featureLayer=e.featureLayer,e.addedGraphics?void(this._addedGraphics=e.addedGraphics):void console.error("In constructor of 'esri.dijit.editing.Add', no graphics provided")):void console.error("In constructor of 'esri.dijit.editing.Add', featureLayer is not provided")},updateObjectIds:function(e,t){this.updateIds(this._featureLayer,this._addedGraphics,e,t)},performUndo:function(){return this._featureLayer.applyEdits(null,null,this._addedGraphics).then(r.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))},performRedo:function(){var t=e.map(this._addedGraphics,function(e){return e.attributes[this._featureLayer.objectIdField]},this);return this._featureLayer.applyEdits(this._addedGraphics,null,null).then(r.hitch(this,function(r,d,i){var a=e.map(r,function(e){return e.objectId});return{oldIds:t,addedIds:a,layer:this._featureLayer,operation:this}}))}});return d("extend-esri")&&r.setObject("dijit.editing.Add",n,i),n});