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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/has","../../../layers/FeatureLayer","../../../tasks/query","../../../toolbars/draw","./ToggleToolBase","../../../kernel"],function(e,t,n,s,o,i,r,a,c,h){var l=e([c],{declaredClass:"esri.dijit.editing.tools.Reshape",id:"btnFeatureReshape",_enabledIcon:"toolbarIcon reshapeIcon",_disabledIcon:"toolbarIcon reshapeIcon",_drawType:a.POLYLINE,_enabled:!0,_label:"NLS_reshapeLbl",activate:function(){s.disconnect(this._rConnect),this._rConnect=s.connect(this._toolbar,"onDrawEnd",this,"_onDrawEnd"),this.inherited(arguments)},deactivate:function(){this.inherited(arguments),s.disconnect(this._rConnect),delete this._rConnect},_onDrawEnd:function(e){var s=this._settings.layers,o=new r;o.geometry=e;var a=this._reshapeLayers=n.filter(s,function(e){return"esriGeometryPolygon"===e.geometryType||"esriGeometryPolyline"});this._settings.editor._selectionHelper.selectFeatures(a,o,i.SELECTION_NEW,t.hitch(this,"_reshape",o))},_reshape:function(e,n){var s=n;1===s.length&&this._settings.geometryService.reshape(s[0].geometry,e.geometry,t.hitch(this,function(e){var n=[s[0].setGeometry(e)];this.onApplyEdits([{layer:s[0].getLayer(),updates:n}],t.hitch(this,function(){this._settings.editor._selectionHelper.clearSelection(!1),this.onFinished()}))}))}});return o("extend-esri")&&t.setObject("dijit.editing.tools.Reshape",l,h),l});