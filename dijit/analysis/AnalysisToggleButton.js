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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/has","dojo/dom-class","dijit/_Widget","../../kernel"],function(e,t,s,i,n,o,d,h){var r=t([d],{groupName:"defaultGroup",declaredClass:"esri.dijit.analysis.AnalysisToggleButton",postMixInProperties:function(){this.inherited(arguments),this.unselectChannel="/ButtonGroupCtr/"+this.groupName,i.subscribe(this.unselectChannel,this,"doUnselect")},postCreate:function(){this.inherited(arguments),o.add(this.domNode,"esriGroupButton")},doUnselect:function(e){e!==this&&this.get("checked")&&this.set("checked",!1)},_getCheckedAttr:function(){return this.checked},_setCheckedAttr:function(e){this.inherited(arguments),this.checked=e,e&&i.publish(this.unselectChannel,[this]),o.toggle(this.domNode,"esriGroupselected",e)}});return n("extend-esri")&&s.setObject("dijit.analysis.AnalysisToggleButton",r,h),r});