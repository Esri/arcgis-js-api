// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/has","dojo/DeferredList","../../../graphicsUtils","../../../graphic","../../../tasks/query","../../../layers/FeatureLayer","../../../toolbars/draw","../Cut","./ToggleToolBase","../../../kernel"],(function(t,e,i,s,n,o,a,r,c,d,h,u,l,_){var p=t([l],{declaredClass:"esri.dijit.editing.tools.Cut",id:"btnFeatureCut",_enabledIcon:"toolbarIcon cutIcon",_disabledIcon:"toolbarIcon cutIcon",_drawType:h.POLYLINE,_enabled:!0,_label:"NLS_cutLbl",_cutConnects:[],activate:function(){this._cutConnects.push(s.connect(this._toolbar,"onDrawEnd",this,"_onDrawEnd")),this.inherited(arguments)},deactivate:function(){this.inherited(arguments),i.forEach(this._cutConnects,s.disconnect),this._cutConnects=[],this._edits=[]},_onDrawEnd:function(t){var n=this._settings.layers,o=this._cutLayers=i.filter(n,(function(t){return"esriGeometryPolygon"===t.geometryType||"esriGeometryPolyline"===t.geometryType&&t.visible&&t._isMapAtVisibleScale()}));this._cutConnects=this._cutConnects.concat(i.map(o,e.hitch(this,(function(t){return s.connect(t,"onEditsComplete",e.hitch(this,(function(t,s,n){if(this._settings.undoRedoManager){var o=this._settings.undoRedoManager;i.forEach(this._edits,e.hitch(this,(function(t){o.add(new u({featureLayer:t.layer,addedGraphics:t.adds,preUpdatedGraphics:t.preUpdates,postUpdatedGraphics:t.updates}))})),this)}this.onFinished()})))}))));var a=new c;a.geometry=t,i.forEach(o,(function(t,i){this._settings.editor._selectionHelper.selectFeatures([t],a,d.SELECTION_NEW,e.hitch(this,"_cutFeatures",t,a))}),this)},_cutFeatures:function(t,i,s){if(s&&s.length){this._edits=[];var n=[];n.push(this._settings.geometryService.cut(a.getGeometries(s),i.geometry,e.hitch(this,"_cutHandler",t,s)));new o(n).addCallback(e.hitch(this,(function(){this.onApplyEdits(this._edits)})))}},_cutHandler:function(t,s,n){var o,a,c=[],d=[],h=i.map(s,(function(t){return new r(e.clone(t.toJson()))}));i.forEach(n.cutIndexes,(function(t,i){o!=t?(o=t,d.push(s[t].setGeometry(n.geometries[i]))):((a=new r(n.geometries[i],null,e.mixin({},s[t].attributes),null)).attributes[s[0].getLayer().objectIdField]=null,c.push(a))}),this),this._edits.push({layer:t,adds:c,updates:d,preUpdates:h})}});return n("extend-esri")&&e.setObject("dijit.editing.tools.Cut",p,_),p}));