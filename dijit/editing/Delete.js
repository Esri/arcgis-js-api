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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","./EditOperationBase"],function(e,t,r,i,a,d){var n=t(d,{declaredClass:"esri.dijit.editing.Delete",type:"edit",label:"Delete Features",constructor:function(e){return e=e||{},e.featureLayer?(this._featureLayer=e.featureLayer,e.deletedGraphics?void(this._deletedGraphics=e.deletedGraphics):void console.error("In constructor of 'esri.dijit.editing.Delete', no graphics provided")):void console.error("In constructor of 'esri.dijit.editing.Delete', featureLayer is not provided")},updateObjectIds:function(e,t){this.updateIds(this._featureLayer,this._deletedGraphics,e,t)},performUndo:function(){var t=e.map(this._deletedGraphics,function(e){return e.attributes[this._featureLayer.objectIdField]},this);return this._featureLayer.applyEdits(this._deletedGraphics,null,null).then(r.hitch(this,function(r,i,a){var d=e.map(r,function(e){return e.objectId});return{oldIds:t,addedIds:d,layer:this._featureLayer,operation:this}}))},performRedo:function(){return this._featureLayer.applyEdits(null,null,this._deletedGraphics).then(r.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))}});return i("extend-esri")&&r.setObject("dijit.editing.Delete",n,a),n});