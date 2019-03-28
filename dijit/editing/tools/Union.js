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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../graphicsUtils","../../../graphic","../../../toolbars/draw","../Union","./ButtonToolBase","../../../kernel"],function(e,t,i,n,s,o,a,r,d,l){var c=e([d],{declaredClass:"esri.dijit.editing.tools.Union",id:"btnFeatureUnion",_enabledIcon:"toolbarIcon unionIcon",_disabledIcon:"toolbarIcon unionIcon",_drawType:a.POLYLINE,_enabled:!0,_label:"NLS_unionLbl",_onClick:function(e){this._settings.editor._activeTool="UNION";var n=this._settings.layers,a=i.filter(n,function(e){return"esriGeometryPolygon"===e.geometryType&&e.visible&&e._isMapAtVisibleScale()}),d=[],l=0;i.forEach(a,function(e,n){var a=e.getSelectedFeatures();a.length>=2&&(l++,this._settings.geometryService.union(s.getGeometries(a),t.hitch(this,function(n){var s=a.shift(),c=[],h=[];c.push(new o(s.toJson())),h.push(s.setGeometry(n)),d.push({layer:e,updates:h,deletes:a,preUpdates:c}),--l<=0&&this.onApplyEdits(d,t.hitch(this,function(){if(this._settings.undoRedoManager){var e=this._settings.undoRedoManager;i.forEach(this._edits,t.hitch(this,function(t){e.add(new r({featureLayer:t.layer,deletedGraphics:t.deletes,preUpdatedGraphics:t.preUpdates,postUpdatedGraphics:t.updates}))}),this)}this._settings.editor._selectionHelper.clearSelection(!1),this.onFinished()}))})))},this)}});return n("extend-esri")&&t.setObject("dijit.editing.tools.Union",c,l),c});