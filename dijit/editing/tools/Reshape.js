// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/has","../../../graphic","../../../layers/FeatureLayer","../../../tasks/query","../../../toolbars/draw","./ToggleToolBase","../../../kernel"],(function(e,t,i,n,s,o,r,a,h,l,c){var d=e([l],{declaredClass:"esri.dijit.editing.tools.Reshape",id:"btnFeatureReshape",_enabledIcon:"toolbarIcon reshapeIcon",_disabledIcon:"toolbarIcon reshapeIcon",_drawType:h.POLYLINE,_enabled:!0,_label:"NLS_reshapeLbl",activate:function(){n.disconnect(this._rConnect),this._rConnect=n.connect(this._toolbar,"onDrawEnd",this,"_onDrawEnd"),this.inherited(arguments)},deactivate:function(){this.inherited(arguments),n.disconnect(this._rConnect),delete this._rConnect},_onDrawEnd:function(e){var n=this._settings.layers,s=new a;s.geometry=e;var o=this._reshapeLayers=i.filter(n,(function(e){return"esriGeometryPolygon"===e.geometryType||"esriGeometryPolyline"}));this._settings.editor._selectionHelper.selectFeatures(o,s,r.SELECTION_NEW,t.hitch(this,"_reshape",s))},_reshape:function(e,i){if(1===i.length){var n=[],s=[],r=[],a=i[0],h=a.getLayer();this._settings.geometryService.reshape(a.geometry,e.geometry,t.hitch(this,(function(e){return"polyline"===e.type&&e.paths&&0===e.paths.length?(this._settings.editor._selectionHelper.clearSelection(!1),void this.onFinished()):"polygon"===e.type&&e.rings&&0===e.rings.length?(this._settings.editor._selectionHelper.clearSelection(!1),void this.onFinished()):(r.push(new o(a.toJson())),s.push(a.setGeometry(e)),n.push({layer:h,updates:s,preUpdates:r}),void this.onApplyEdits(n,t.hitch(this,(function(){this._settings.editor._selectionHelper.clearSelection(!1),this.onFinished()}))))})))}}});return s("extend-esri")&&t.setObject("dijit.editing.tools.Reshape",d,c),d}));