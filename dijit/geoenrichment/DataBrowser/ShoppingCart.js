// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dojo/dom-attr","dojo/on","dojo/when","dojox/mvc/Templated","dgrid/List","../../../declare","dojo/text!./templates/ShoppingCart.html","dojo/i18n!../../../nls/jsapi","./VariableUtil","./VariableToggle"],function(t,i,e,s,n,o,a,h,l,r,c,p,d){return c=c.geoenrichment.dijit.ShoppingCart,l("esri.dijit.geoenrichment.ShoppingCart",a,{nls:c,templateString:r,variables:null,selection:null,allowToggles:!0,_list:null,_content:null,postCreate:function(){this.inherited(arguments),this.selectedVariablesLabel.innerHTML=c.selectedVars,this.selection=[],this._content=[],this._list=new h({renderRow:t.hitch(this,this._renderVariable)},this.divList),n(this.divList,"click, touchend",t.hitch(this,this._stopPropagation)),this._updateLabel(),this.divOuter.style.display="none";var i=this;this.watch("selection",function(){o(i.variables.synchronize(),t.hitch(i,i._onSelectionChanged))})},_updateLabel:function(){this.divCounter.innerHTML=this._content.length.toString()},_onSelectionChanged:function(){for(var t=[],i=Math.min(this._content.length,this.selection.length),e=0;i>e;e++){var s=this.selection[e],n=this._content[e];if(!n.hash[s])break;n.group.value=s,t.push(n)}for(i=this.selection.length,e=t.length;i>e;e++)s=this.selection[e],n={hash:{}},n.group=p.getToggleGroup(this.variables,s,n.hash),s=n.group.states&&this.allowToggles?n.group.states.ids[0]:n.group.value,n.title=this.variables.get(s).alias,t.push(n);this._content=t,this._updateLabel()},_toggleList:function(t){this._stopPropagation(t),"none"===this.divOuter.style.display?this._displayList():this._hideList()},_stopPropagation:function(t){t.stopPropagation&&t.stopPropagation()},_displayList:function(){this.refresh(),this.divShoppingCartOpener.innerHTML="&#x25b2;",this.divOuter.style.display=""},_hideList:function(){this.divShoppingCartOpener.innerHTML="&#x25bc;",this.divOuter.style.display="none"},_hideListOnLeave:function(t){if("none"!=this.divOuter.style.display){for(var i=t.relatedTarget,e=!0;i;){if(i===this.label||i===this.divOuter){e=!1;break}i=i.parentNode}this._onMouseLeave(e)}},_onMouseLeave:function(t){t&&this._hideList()},_renderVariable:function(i){var s=e.create("div",{"class":"ShoppingCartRow"}),o=e.create("div",{"class":"ShoppingCartRowCloser ShoppingCartRowFloatEnd"},s);if(n(o,"click",t.hitch(this,this._onRemove,i)),e.create("div",{"class":"dijitInline ShoppingCartRowSpacer ShoppingCartRowFloatEnd",innerHTML:"&nbsp;"},s),i.group.states&&this.allowToggles){var a=new d(i.group,e.create("div",{"class":"dijitInline ShoppingCartRowFloatEnd"},s));n(a,"change",t.hitch(this,this._onToggleChange,a,i)),e.create("div",{"class":"dijitInline ShoppingCartRowSpacer ShoppingCartRowFloatEnd",innerHTML:"&nbsp;"},s)}var h=i.group.states&&this.allowToggles?i.group.states.ids[0]:i.group.value;return e.create("div",{"class":"TrimWithEllipses ShoppingCartRowLabel",innerHTML:this.variables.get(h).alias},s),s},_onRemove:function(t){for(var i=this.selection.slice(),e=i.length,s=0;e>s;s++)if(this._content[s]===t){i.splice(s,1),this._content.splice(s,1);break}this.set("selection",i),this.refresh()},_onToggleChange:function(t,i){i.group.value=t.value;for(var e=this.selection.slice(),s=e.length,n=0;s>n;n++)if(this._content[n]===i){e[n]=t.value;break}this.set("selection",e)},refresh:function(){this._list.refresh(),this._list.renderArray(this._content),this._updateLabel(),this.divEmpty.style.visibility=this._content.length?"hidden":"visible"}})});