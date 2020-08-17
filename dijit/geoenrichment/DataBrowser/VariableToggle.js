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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/on","dijit/_WidgetBase","../../analysis/GroupToggleButton"],(function(t,e,s,o,i,n,a){var u=t(a,{stopMouseEventPropagation:!0,__onClick:function(t){return this.stopMouseEventPropagation&&t.stopPropagation(),t.preventDefault(),this.disabled||this.valueNode.click(t),!1}});return t(n,{states:null,value:null,stopMouseEventPropagation:!0,_buttons:null,_index:null,postCreate:function(){this.inherited(arguments),this._buttons=[],this._index={},o.add(this.domNode,"VariableToggleButtonGroup");var t=!1;s.forEach(this.states.ids,(function(e,s){t=this._addButton(this.states.labels[s],e,s)||t,this._index[e]=s+1}),this),t||this.set("value",this.states.ids[0]),this._started=!0},_addButton:function(t,s,n){var a=new u({groupName:this.id,label:t});a.stopMouseEventPropagation=this.stopMouseEventPropagation,o.add(a.containerNode,"TrimWithEllipses"),o.add(a.domNode,n?1==n?"secondButton":"thirdButton":"firstButton"),a.toggleState=s,a.placeAt(this.domNode),a.startup();var h=s==this.value;return h&&a.set("checked",!0),i(a,"click,touched,MSPointerDown",e.hitch(this,this._toggle,a)),this._buttons.push(a),h},_setValueAttr:function(t){if(this._index){var e=this._index[t];e&&(this._set("value",t),this._buttons[e-1].set("checked",!0))}},_setStopMouseEventPropagationAttr:function(t){this.stopMouseEventPropagation=t,s.forEach(this._buttons,(function(e){e.stopMouseEventPropagation=t}))},_toggle:function(t,e){var s=this.value;this.value=t.toggleState,s!==this.value?this.emit("Change",{state:this.value,name:this.getStateName(this.value)}):t.set("checked",!0),this.stopMouseEventPropagation&&e.stopPropagation()},getStateName:function(t){return(t=this._index[t||this.value])&&this.states.names&&this.states.names[t-1]||null},destroy:function(){s.forEach(this._buttons,(function(t){t.destroy()})),this.inherited(arguments)}})}));
