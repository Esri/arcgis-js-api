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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../geometry/jsonUtils","./EditOperationBase"],function(t,e,s,r,i,p,a){var d=e(a,{declaredClass:"esri.dijit.editing.Update",type:"edit",label:"Update Features",constructor:function(t){var e;if(t=t||{},!t.featureLayer)return void console.error("In constructor of 'esri.dijit.editing.Update', featureLayer not provided");if(this._featureLayer=t.featureLayer,!t.preUpdatedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Update', preUpdatedGraphics not provided");for(this._preUpdatedGraphicsGeometries=[],this._preUpdatedGraphicsAttributes=[],e=0;e<t.preUpdatedGraphics.length;e++)this._preUpdatedGraphicsGeometries.push(t.preUpdatedGraphics[e].geometry.toJson()),this._preUpdatedGraphicsAttributes.push(t.preUpdatedGraphics[e].attributes);if(!t.postUpdatedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Update', postUpdatedGraphics not provided");for(this._postUpdatedGraphics=t.postUpdatedGraphics,this._postUpdatedGraphicsGeometries=[],this._postUpdatedGraphicsAttributes=[],e=0;e<t.postUpdatedGraphics.length;e++)t.postUpdatedGraphics[e].geometry?this._postUpdatedGraphicsGeometries.push(t.postUpdatedGraphics[e].geometry.toJson()):this._postUpdatedGraphicsGeometries.push(t.postUpdatedGraphics[e].geometry),this._postUpdatedGraphicsAttributes.push(s.clone(t.postUpdatedGraphics[e].attributes))},updateObjectIds:function(t,e){this.updateIds(this._featureLayer,this._preUpdatedGraphicsAttributes,t,e),this.updateIds(this._featureLayer,this._postUpdatedGraphicsAttributes,t,e)},performUndo:function(){var t;for(t=0;t<this._postUpdatedGraphics.length;t++)this._preUpdatedGraphicsGeometries[t]?this._postUpdatedGraphics[t].setGeometry(p.fromJson(this._preUpdatedGraphicsGeometries[t])):this._postUpdatedGraphics[t].setGeometry(this._preUpdatedGraphicsGeometries[t]),this._postUpdatedGraphics[t].setAttributes(this._preUpdatedGraphicsAttributes[t]);return this._featureLayer.applyEdits(null,this._postUpdatedGraphics,null).then(s.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))},performRedo:function(){var t;for(t=0;t<this._postUpdatedGraphics.length;t++)this._postUpdatedGraphicsGeometries[t]?this._postUpdatedGraphics[t].setGeometry(p.fromJson(this._postUpdatedGraphicsGeometries[t])):this._postUpdatedGraphics[t].setGeometry(this._postUpdatedGraphicsGeometries[t]),this._postUpdatedGraphics[t].setAttributes(this._postUpdatedGraphicsAttributes[t]);return this._featureLayer.applyEdits(null,this._postUpdatedGraphics,null).then(s.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))}});return r("extend-esri")&&s.setObject("dijit.editing.Update",d,i),d});