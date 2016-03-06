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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../geometry/jsonUtils","../../OperationBase"],function(t,e,r,s,i,d){var p=t(d,{declaredClass:"esri.dijit.editing.Cut",type:"edit",label:"Cut Features",constructor:function(t){var r;if(t=t||{},!t.featureLayer)return void console.error("In constructor of 'esri.dijit.editing.Cut', featureLayer not provided");if(this._featureLayer=t.featureLayer,!t.addedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Cut', addedGraphics for cut not provided");if(this._addedGraphics=t.addedGraphics,!t.preUpdatedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Cut', preUpdatedGraphics not provided");for(this._preUpdatedGraphicsGeometries=[],this._preUpdatedGraphicsAttributes=[],r=0;r<t.preUpdatedGraphics.length;r++)this._preUpdatedGraphicsGeometries.push(t.preUpdatedGraphics[r].geometry.toJson()),this._preUpdatedGraphicsAttributes.push(t.preUpdatedGraphics[r].attributes);if(!t.postUpdatedGraphics)return void console.error("In constructor of 'esri.dijit.editing.Cut', postUpdatedGraphics not provided");for(this._postUpdatedGraphics=t.postUpdatedGraphics,this._postUpdatedGraphicsGeometries=[],this._postUpdatedGraphicsAttributes=[],r=0;r<t.postUpdatedGraphics.length;r++)this._postUpdatedGraphicsGeometries.push(t.postUpdatedGraphics[r].geometry.toJson()),this._postUpdatedGraphicsAttributes.push(e.clone(t.postUpdatedGraphics[r].attributes))},performUndo:function(){var t;for(t=0;t<this._postUpdatedGraphics.length;t++)this._postUpdatedGraphics[t].setGeometry(i.fromJson(this._preUpdatedGraphicsGeometries[t])),this._postUpdatedGraphics[t].setAttributes(this._preUpdatedGraphicsAttributes[t]);this._featureLayer.applyEdits(null,this._postUpdatedGraphics,this._addedGraphics)},performRedo:function(){var t;for(t=0;t<this._postUpdatedGraphics.length;t++)this._postUpdatedGraphics[t].setGeometry(i.fromJson(this._postUpdatedGraphicsGeometries[t])),this._postUpdatedGraphics[t].setAttributes(this._postUpdatedGraphicsAttributes[t]);this._featureLayer.applyEdits(this._addedGraphics,this._postUpdatedGraphics,null)}});return r("extend-esri")&&e.setObject("dijit.editing.Cut",p,s),p});