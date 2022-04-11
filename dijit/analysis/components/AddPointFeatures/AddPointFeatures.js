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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["../../../../kernel","../../../../lang","../../../../toolbars/draw","../../utils","../../../../layers/FeatureLayer","../../../../symbols/PictureMarkerSymbol","../../../../graphic","dijit/form/ToggleButton","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/has","dojo/on","dojo/Evented","dojo/_base/connect","dojo/text!./AddPointFeatures.html"],(function(t,e,i,a,n,r,o,s,c,h,d,l,u,p,m,y,g,_,f,F,b,j,L){var P=u([c,h,d,b],{declaredClass:"esri.dijit.analysis.components.AddPointFeatures.AddPointFeatures",templateString:L,label:"",layerName:"default layer name",map:{},iconUrl:"http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png",pointFeatureLayer:null,isFirst:!0,postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments)},startup:function(){},_handleInputDrawPointChange:function(t){t?(this.emit("drawtool-activate",{}),this.pointFeatureLayer||this._createPointFeatColl(),this._pointtoolbar.activate(i.POINT)):this.deactivate()},_createPointFeatColl:function(){var t=a.createPointFeatureCollection(this.layerName);this.pointFeatureLayer=new n(t,{id:this.layerName}),this.pointFeatureLayer.drawnLayer=!0,this.map.addLayer(this.pointFeatureLayer),j.connect(this.pointFeatureLayer,"onClick",p.hitch(this,(function(t){this.map.infoWindow.setFeatures([t.graphic])})))},deactivate:function(){this.map.graphics.remove(this.graphic),this._pointtoolbar.deactivate()},_addPointFeatures:function(t){var e=[],i={};this.graphic=new o(t),this.map.graphics.add(this.graphic),i.description="blayer desc",i.title="blayer",this.graphic.setAttributes(i),e.push(this.graphic),this.pointFeatureLayer.applyEdits(e,null,null),this.emitChange()},reset:function(){this._analysisPointDrawBtn.reset()},emitChange:function(){this.emit("change",this.pointFeatureLayer)},_setLabelAttr:function(t){this.label=t},_getLabelAttr:function(t){return this.label},_setLayerNameAttr:function(t){this.layerName=t},_getLayerNameAttr:function(t){return this.layerName},_setIconUrlAttr:function(t){this.iconUrl=t},_getIconUrlAttr:function(t){return this.iconUrl},_setMapAttr:function(t){this.map=t,this._pointtoolbar=new i(this.map),j.connect(this._pointtoolbar,"onDrawEnd",p.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},_setPointFeatureLayerAttr:function(t){this.pointFeatureLayer=t},_getPointFeatureLayerAttr:function(){return this.pointFeatureLayer}});return f("extend-esri")&&p.setObject("dijit.analysis.components.AddPointFeatures.AddPointFeatures",P,t),P}));