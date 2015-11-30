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
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/has","../../../layers/FeatureLayer","../../../tasks/query","../../../toolbars/draw","./ToggleToolBase","../../../kernel"],function(e,t,n,i,s,o,r,a,h,c){var l=e([h],{declaredClass:"esri.dijit.editing.tools.Reshape",id:"btnFeatureReshape",_enabledIcon:"toolbarIcon reshapeIcon",_disabledIcon:"toolbarIcon reshapeIcon",_drawType:a.POLYLINE,_enabled:!0,_label:"NLS_reshapeLbl",activate:function(){i.disconnect(this._rConnect),this._rConnect=i.connect(this._toolbar,"onDrawEnd",this,"_onDrawEnd"),this.inherited(arguments)},deactivate:function(){this.inherited(arguments),i.disconnect(this._rConnect),delete this._rConnect},_onDrawEnd:function(e){var i=this._settings.layers,s=new r;s.geometry=e;var a=this._reshapeLayers=n.filter(i,function(e){return"esriGeometryPolygon"===e.geometryType||"esriGeometryPolyline"});this._settings.editor._selectionHelper.selectFeatures(a,s,o.SELECTION_NEW,t.hitch(this,"_reshape",s))},_reshape:function(e,n){var i=n;1===i.length&&this._settings.geometryService.reshape(i[0].geometry,e.geometry,t.hitch(this,function(e){if("polyline"===e.type&&e.paths&&0===e.paths.length)return this._settings.editor._selectionHelper.clearSelection(!1),void this.onFinished();var n=[i[0].setGeometry(e)];this.onApplyEdits([{layer:i[0].getLayer(),updates:n}],t.hitch(this,function(){this._settings.editor._selectionHelper.clearSelection(!1),this.onFinished()}))}))}});return s("extend-esri")&&t.setObject("dijit.editing.tools.Reshape",l,c),l});