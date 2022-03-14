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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/has","dojo/dom-class","dijit/form/ToggleButton","../../kernel"],(function(e,t,s,o,i,n,d,r){var u=t([d],{groupName:"defaultGroup",declaredClass:"esri.dijit.analysis.GroupToggleButton",postMixInProperties:function(){this.inherited(arguments),this.unselectChannel="/ButtonGroup/"+this.groupName,o.subscribe(this.unselectChannel,this,"doUnselect")},postCreate:function(){this.inherited(arguments),n.add(this.domNode,"esriGroupButton")},doUnselect:function(e){e!==this&&this.checked&&this.set("checked",!1)},_setCheckedAttr:function(e,t){this.inherited(arguments),e&&o.publish(this.unselectChannel,[this]),n.toggle(this.focusNode,"esriGroupChecked",e)}});return i("extend-esri")&&s.setObject("dijit.analysis.GroupToggleButton",u,r),u}));