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

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../geometry/jsonUtils","./EditOperationBase"],function(t,e,s,r,i,a,p){var d=e(p,{declaredClass:"esri.dijit.editing.Union",type:"edit",label:"Union Features",constructor:function(t){t=t||{},this._featureLayer=t.featureLayer,this._deletedGraphics=t.deletedGraphics,this._preUpdatedGraphics=t.preUpdatedGraphics,this._postUpdatedGraphics=t.postUpdatedGraphics,this._preUpdatedGraphicsGeometries=[],this._preUpdatedGraphicsAttributes=[],this._postUpdatedGraphicsGeometries=[],this._postUpdatedGraphicsAttributes=[];var e;for(e=0;e<t.preUpdatedGraphics.length;e++)this._preUpdatedGraphicsGeometries.push(t.preUpdatedGraphics[e].geometry.toJson()),this._preUpdatedGraphicsAttributes.push(t.preUpdatedGraphics[e].attributes);var r;for(r=0;r<t.postUpdatedGraphics.length;r++)this._postUpdatedGraphicsGeometries.push(t.postUpdatedGraphics[r].geometry.toJson()),this._postUpdatedGraphicsAttributes.push(s.clone(t.postUpdatedGraphics[r].attributes))},updateObjectIds:function(t,e){this.updateIds(this._featureLayer,this._preUpdatedGraphicsAttributes,t,e),this.updateIds(this._featureLayer,this._postUpdatedGraphicsAttributes,t,e),this.updateIds(this._featureLayer,this._deletedGraphics,t,e)},performUndo:function(){var e;for(e=0;e<this._postUpdatedGraphics.length;e++)this._postUpdatedGraphics[e].setGeometry(a.fromJson(this._preUpdatedGraphicsGeometries[e])),this._postUpdatedGraphics[e].setAttributes(this._preUpdatedGraphicsAttributes[e]);var r=t.map(this._deletedGraphics,function(t){return t.attributes[this._featureLayer.objectIdField]},this);return this._featureLayer.applyEdits(this._deletedGraphics,this._postUpdatedGraphics,null).then(s.hitch(this,function(e,s,i){var a=t.map(e,function(t){return t.objectId});return{oldIds:r,addedIds:a,layer:this._featureLayer,operation:this}}))},performRedo:function(){var t;for(t=0;t<this._postUpdatedGraphics.length;t++)this._postUpdatedGraphics[t].setGeometry(a.fromJson(this._postUpdatedGraphicsGeometries[t])),this._postUpdatedGraphics[t].setAttributes(this._postUpdatedGraphicsAttributes[t]);return this._featureLayer.applyEdits(null,this._postUpdatedGraphics,this._deletedGraphics).then(s.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))}});return r("extend-esri")&&s.setObject("dijit.editing.Union",d,i),d});