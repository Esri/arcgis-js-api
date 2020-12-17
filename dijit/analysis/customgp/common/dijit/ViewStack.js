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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/array","dijit/_WidgetBase"],(function(e,i,t,o,s){return e(s,{baseClass:"jimu-viewstack",declaredClass:"esri.dijit.analysis.customgp.common.dijit.ViewStack",_currentView:null,postCreate:function(){this.inherited(arguments),this.views||(this.views=[]),o.forEach(this.views,i.hitch(this,(function(e){1===e.nodeType?(t.place(e,this.domNode),t.addClass(e,"view"),t.setStyle(e,"display","none")):e.domNode&&(t.place(e.domNode,this.domNode),t.addClass(e.domNode,"view"),t.setStyle(e.domNode,"display","none"))})))},startup:function(){this.inherited(arguments),this.views.length>0&&this.switchView(0)},getSelectedView:function(){return this._currentView},getSelectedLabel:function(){var e="",i=this.getSelectedView();return i&&(e=i.label),e},getViewByLabel:function(e){for(var i=0;i<this.views.length;i++)if(e===this.views[i].label)return this.views[i];return null},addView:function(e){this.views.push(e),1===e.nodeType?(t.place(e,this.domNode),t.addClass(e,"view")):e.domNode&&(t.place(e.domNode,this.domNode),t.addClass(e.domNode,"view"))},removeView:function(e){var i=this.views.length;this.views=o.filter(this.views,(function(i){return e!==i})),i!==this.views.length&&(1===e.nodeType?t.destroy(e):e.domNode&&e.destroyRecursive())},switchView:function(e){var o,s;o="number"==typeof e?this.views[e]:"string"==typeof e?this.getViewByLabel(e):e,this.views.forEach(i.hitch(this,(function(e){e&&(1===e.nodeType?s=e:e.domNode&&(s=e.domNode),e===o?(t.setStyle(s,"display","block"),e.domNode&&(e._started?"function"==typeof e.onShown&&e.onShown():(e.startup(),e._started=!0))):(t.setStyle(s,"display","none"),e.domNode&&"function"==typeof e.onHidden&&e.onHidden()))}))),this._currentView=o,this.onViewSwitch(o)},onViewSwitch:function(){}})}));