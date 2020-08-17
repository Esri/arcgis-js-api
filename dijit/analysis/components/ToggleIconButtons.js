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

define(["../../../kernel","../../../lang","dijit/_WidgetBase","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/has","dojo/on","dojo/Evented"],(function(t,e,n,i,o,s,l,a,c,r,d,u,h){var f=o([n,h],{declaredClass:"esri.dijit.analysis.components.ToggleIconButtons",buttons:[],isHorizontal:!0,selectedButton:"",postMixInProperties:function(){this.inherited(arguments)},buildRendering:function(){this.createElements()},postCreate:function(){this.inherited(arguments)},createElements:function(){this.domNode=r.create("div",{class:"class"}),this.elements=[],i.forEach(this.buttons,s.hitch(this,(function(t,e){var n=this.createElement(t,e);this.elements.push(n),this.domNode.appendChild(n)})))},createElement:function(t,e){var n=t.title||t.label,i=t.value||t.label,o=t.label,l=t.icon,a=this.isHorizontal&&"left",c=r.create("div",{id:o+e,class:"bufferIcon "+l,title:n}),d=r.create("label",{id:o+e,class:"esriSelectLabel",title:n,innerHTML:o}),h=r.create("div",{id:"toggleButton"+e,value:i,class:"bufferSelector esriLeadingMargin2 "+a});return u(h,"click",s.hitch(this,this.onElementClick)),h.appendChild(c),o&&h.appendChild(d),h},reset:function(){i.forEach(this.elements,(function(t){a.remove(t,"selected")}))},setSpecificButton:function(t){this.reset(),i.forEach(this.elements,s.hitch(this,(function(e){e.value===t&&(a.add(e,"selected"),this.emitChange(t))})))},onElementClick:function(t){this.reset(),a.add(t.target.parentElement,"selected"),this.emitChange(t.target.parentElement.value)},emitChange:function(t){this.emit("change",{value:t})},_setIsHorizontalAttr:function(t){this.isHorizontal=t},_getIsHorizontalAttr:function(t){return this.isHorizontal},_setButtonsAttr:function(t){this.buttons=t},_getButtonsAttr:function(t){return this.buttons},_setSelectedButtonAttr:function(t){this.setSpecificButton(t)},_getSelectedButtonAttr:function(){return this.selectedButton}});return d("extend-esri")&&s.setObject("dijit.analysis.components.ToggleIconButtons",f,t),f}));
