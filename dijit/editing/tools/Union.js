// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../graphicsUtils","../../../graphic","../../../toolbars/draw","../Union","./ButtonToolBase","../../../kernel"],function(e,t,i,n,o,s,a,r,d,l){var c=e([d],{declaredClass:"esri.dijit.editing.tools.Union",id:"btnFeatureUnion",_enabledIcon:"toolbarIcon unionIcon",_disabledIcon:"toolbarIcon unionIcon",_drawType:a.POLYLINE,_enabled:!0,_label:"NLS_unionLbl",_onClick:function(){this._settings.editor._activeTool="UNION";var e=this._settings.layers,n=i.filter(e,function(e){return"esriGeometryPolygon"===e.geometryType&&e.visible&&e._isMapAtVisibleScale()}),a=[],d=0;i.forEach(n,function(e){var n=e.getSelectedFeatures();if(n.length>=2){d++;var l=i.map(n,function(e){return new s(t.clone(e.toJson()))});this._settings.geometryService.union(o.getGeometries(n),t.hitch(this,function(o){var s=[n.pop().setGeometry(o)];a.push({layer:e,updates:s,deletes:n,preUpdates:l}),d--,0>=d&&this.onApplyEdits(a,t.hitch(this,function(){if(this._settings.undoRedoManager){var e=this._settings.undoRedoManager;i.forEach(this._edits,t.hitch(this,function(t){e.add(new r({featureLayer:t.layer,addedGraphics:t.deletes,preUpdatedGraphics:t.preUpdates,postUpdatedGraphics:t.updates}))}),this)}this._settings.editor._selectionHelper.clearSelection(!1),this.onFinished()}))}))}},this)}});return n("extend-esri")&&t.setObject("dijit.editing.tools.Union",c,l),c});