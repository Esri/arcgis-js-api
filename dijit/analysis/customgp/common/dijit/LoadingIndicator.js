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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

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

define(["dojo/_base/declare","dijit/_WidgetBase","dojo/dom-style","dojo/dom-construct"],function(d,i,o,e){return d(i,{baseClass:"jimu-loading-indicator",declaredClass:"esri.dijit.analysis.customgp.common.dijit.LoadingIndicator",hidden:!1,postCreate:function(){this.inherited(arguments),this.hidden=!0===this.hidden,this.hidden&&o.set(this.domNode,{display:"none"}),o.set(this.domNode,{width:"100%",height:"100%"});e.place('<div class"jimu-loading"></div>',this.domNode)},show:function(){this.domNode&&o.set(this.domNode,"display","block")},hide:function(){this.domNode&&o.set(this.domNode,"display","none")}})});