// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/array","dijit/_WidgetBase"],function(e,t,i,s,o){return e(o,{baseClass:"jimu-viewstack",declaredClass:"esri.dijit.analysis.customgp.common.dijit.ViewStack",_currentView:null,postCreate:function(){this.inherited(arguments),this.views||(this.views=[]),s.forEach(this.views,t.hitch(this,function(e){1===e.nodeType?(i.place(e,this.domNode),i.addClass(e,"view"),i.setStyle(e,"display","none")):e.domNode&&(i.place(e.domNode,this.domNode),i.addClass(e.domNode,"view"),i.setStyle(e.domNode,"display","none"))}))},startup:function(){this.inherited(arguments),this.views.length>0&&this.switchView(0)},getSelectedView:function(){return this._currentView},getSelectedLabel:function(){var e="",t=this.getSelectedView();return t&&(e=t.label),e},getViewByLabel:function(e){for(var t=0;t<this.views.length;t++)if(e===this.views[t].label)return this.views[t];return null},addView:function(e){this.views.push(e),1===e.nodeType?(i.place(e,this.domNode),i.addClass(e,"view")):e.domNode&&(i.place(e.domNode,this.domNode),i.addClass(e.domNode,"view"))},removeView:function(e){var t=this.views.length;this.views=s.filter(this.views,function(t){return e!==t});var o=this.views.length;t!==o&&(1===e.nodeType?i.destroy(e):e.domNode&&e.destroyRecursive())},switchView:function(e){var s,o;s="number"==typeof e?this.views[e]:"string"==typeof e?this.getViewByLabel(e):e,this.views.forEach(t.hitch(this,function(e){e&&(1===e.nodeType?o=e:e.domNode&&(o=e.domNode),e===s?(i.setStyle(o,"display","block"),e.domNode&&(e._started?"function"==typeof e.onShown&&e.onShown():(e.startup(),e._started=!0))):(i.setStyle(o,"display","none"),e.domNode&&"function"==typeof e.onHidden&&e.onHidden()))})),this._currentView=s,this.onViewSwitch(s)},onViewSwitch:function(){}})});