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

define(["dojo/_base/declare","dojo/_base/html","dijit/form/ValidationTextBox","dojox/validate/regexp","dojo/i18n!../nls/main"],function(i,e,t,s,a){return i([t],{required:!0,invalidMessage:"Invalid url.",trim:!0,rest:!0,allowNamed:!0,allowLocal:!0,declaredClass:"esri.dijit.analysis.customgp.common.dijit.URLInput",postMixInProperties:function(){this.inherited(arguments),this.nls=a.urlInput,this.invalidMessage=this.nls?this.nls.invalidUrl:"Invalid Url"},postCreate:function(){this.inherited(arguments),e.addClass(this.domNode,"jimu-url-input")},validator:function(i){if(!1===this.required&&""===i)return!0;if(isFinite(i))return!1;var e="^"+s.url({allowNamed:this.allowNamed,allowLocal:this.allowLocal}),t=new RegExp(e,"g");t.lastIndex=0;var a=t.test(i);if(this.rest){var r=/\/rest\/services/gi,l=r.test(i);return a&&l}return a}})});