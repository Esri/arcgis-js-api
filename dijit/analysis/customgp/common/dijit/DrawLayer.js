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

define(["dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase","dijit/form/ToggleButton","dojo/Evented","dojo/on","dojo/dom-construct","dijit/Menu","dijit/MenuItem","dijit/form/ComboButton","dojo/i18n!../nls/main"],function(t,e,n,i,o,s,c,a,d,r,h){return t([n,o],{declaredClass:"esri.dijit.analysis.customgp.common.dijit.DrawLayer",types:[],selectBtnNode:null,drawBtnNode:null,postCreate:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.createUI()},startup:function(){},_handleDrawBtnChange:function(t){this.emit("change",t,this.types)},_handleSelectBtnChange:function(t){this.types!==t&&(this.types=t,this.createUI())},createUI:function(){var t;if(!this.drawBtnNode||"string"!=typeof this.types&&1!==this.types.length){if(this.selectBtnNode&&this.types.length>0){var n=new a({style:"display: none;"});this.types.forEach(e.hitch(this,function(t){var i=this,o=new d({type:t,class:"esriActionButton",iconClass:"toolbarIcon "+t+"Icon",onClick:function(){e.hitch(i,i._handleSelectBtnChange)(t)}});n.addChild(o)})),new r({label:h.common.draw,class:"esriActionButton",dropDown:n}).placeAt(this.selectBtnNode)}}else t=new i({class:"esriActionButton",iconClass:"toolbarIcon "+this.types+"Icon"}),c.empty(this.drawBtnNode),t.placeAt(this.drawBtnNode),s(t,"change",e.hitch(this,this._handleDrawBtnChange))},_setTypesAttr:function(t){this.types=t},_getTypesAttr:function(){return this.types},_setSelectBtnNodeAttr:function(t){this.selectBtnNode=t},_getSelectBtnNodeAttr:function(){return this.selectBtnNode},_setDrawBtnNodeAttr:function(t){this.drawBtnNode=t},_getDrawBtnNodeAttr:function(){return this.drawBtnNode}})});