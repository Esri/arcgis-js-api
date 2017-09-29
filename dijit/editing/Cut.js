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

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../geometry/jsonUtils","./EditOperationBase"],function(t,e,r,s,i,d,a){var p=e(a,{declaredClass:"esri.dijit.editing.Cut",type:"edit",label:"Cut Features",constructor:function(t){var e;if(t=t||{},!t.featureLayer)return void console.error("In constructor of 'esri.dijit.editing.Cut', featureLayer not provided");if(this._featureLayer=t.featureLayer,!t.addedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Cut', addedGraphics for cut not provided");if(this._addedGraphics=t.addedGraphics,!t.preUpdatedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Cut', preUpdatedGraphics not provided");for(this._preUpdatedGraphicsGeometries=[],this._preUpdatedGraphicsAttributes=[],e=0;e<t.preUpdatedGraphics.length;e++)this._preUpdatedGraphicsGeometries.push(t.preUpdatedGraphics[e].geometry.toJson()),this._preUpdatedGraphicsAttributes.push(t.preUpdatedGraphics[e].attributes);if(!t.postUpdatedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Cut', postUpdatedGraphics not provided");for(this._postUpdatedGraphics=t.postUpdatedGraphics,this._postUpdatedGraphicsGeometries=[],this._postUpdatedGraphicsAttributes=[],e=0;e<t.postUpdatedGraphics.length;e++)this._postUpdatedGraphicsGeometries.push(t.postUpdatedGraphics[e].geometry.toJson()),this._postUpdatedGraphicsAttributes.push(r.clone(t.postUpdatedGraphics[e].attributes))},updateObjectIds:function(t,e){this.updateIds(this._featureLayer,this._preUpdatedGraphicsAttributes,t,e),this.updateIds(this._featureLayer,this._postUpdatedGraphicsAttributes,t,e),this.updateIds(this._featureLayer,this._addedGraphics,t,e)},performUndo:function(){var t;for(t=0;t<this._postUpdatedGraphics.length;t++)this._postUpdatedGraphics[t].setGeometry(d.fromJson(this._preUpdatedGraphicsGeometries[t])),this._postUpdatedGraphics[t].setAttributes(this._preUpdatedGraphicsAttributes[t]);return this._featureLayer.applyEdits(null,this._postUpdatedGraphics,this._addedGraphics).then(r.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))},performRedo:function(){var e;for(e=0;e<this._postUpdatedGraphics.length;e++)this._postUpdatedGraphics[e].setGeometry(d.fromJson(this._postUpdatedGraphicsGeometries[e])),this._postUpdatedGraphics[e].setAttributes(this._postUpdatedGraphicsAttributes[e]);var s=t.map(this._addedGraphics,function(t){return t.attributes[this._featureLayer.objectIdField]},this);return this._featureLayer.applyEdits(this._addedGraphics,this._postUpdatedGraphics,null).then(r.hitch(this,function(e,r,i){var d=t.map(e,function(t){return t.objectId});return{oldIds:s,addedIds:d,layer:this._featureLayer,operation:this}}))}});return s("extend-esri")&&r.setObject("dijit.editing.Cut",p,i),p});