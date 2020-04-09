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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/events","../../../core/accessorSupport/decorators","../../Slider","../../support/widget"],(function(e,t,o,r,n,i,s,l){var p="esri-interactive",d="esri-slider__label",a="esri-slider-with-dropdown__box",c="esri-slider-with-dropdown__dropdown-root",u=" esri-widget__anchor esri-slider-with-dropdown__anchor",h="esri-slider-with-dropdown__anchor--open",w="esri-slider-with-dropdown__anchor--closed",_="esri-slider-with-dropdown__list",b="esri-slider-with-dropdown__list-item",y="esri-slider-with-dropdown__list-item--selected",f="esri-slider-with-dropdown__box--drop-down-on",m="esri-slider-with-dropdown__box--drop-down-off",x="Enter",v="Escape",D="ArrowUp",g="ArrowDown";return function(e){function t(t){var o=e.call(this,t)||this;return o.items=null,o.currentIndex=0,o.buttonTooltip="",o.showDropDown=!0,o.open=!1,o._rootNode=null,o}return o(t,e),Object.defineProperty(t.prototype,"currentItem",{get:function(){return null!==this.items&&null!==this.currentIndex&&this.currentIndex<this.items.length?this.items[this.currentIndex]:null},enumerable:!0,configurable:!0}),t.prototype.renderThumbLabel=function(){var e,t=this,o=((e={})[f]=this.showDropDown,e[m]=!this.showDropDown,e);return l.tsx("div",{class:this.classes(a,d,o)},this.inherited(arguments),this.showDropDown?l.tsx("div",{afterCreate:l.storeNode,class:c,bind:this,"data-node-ref":"_rootNode"},l.tsx("button",{class:this.classes(p,u,this.open?h:w),bind:this,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.open,"aria-haspopup":"listbox"},this.currentItem?this.currentItem.name+" ":""),this.open?l.tsx("ol",{class:this.classes(_),onpointerdown:this._killEvent,onblur:this._onDropdownBlur,bind:this,tabindex:"-1","aria-label":this.buttonTooltip,role:"listbox",onkeydown:this._onOlKeyDown,afterCreate:function(e){return e.firstChild.focus()}},this.items.map((function(e,o){return l.tsx("li",{class:o===t.currentIndex?t.classes(p,b,y):t.classes(p,b),bind:t,onclick:t._onDropdownItemClick,"data-result":o,"aria-label":e.label.join(" "),role:"option","aria-selected":o===t.currentIndex,onkeydown:t._onLiKeyDown,onblur:t._onDropdownBlur,tabindex:"0"},e.label.map((function(e){return l.tsx("span",{bind:t},e)})))}))):null):null)},t.prototype._onAnchorClick=function(){return this.open=!this.open,!0},t.prototype._onDropdownItemClick=function(e){var t=e.currentTarget["data-result"];this.currentIndex=t,this._close()},t.prototype._onDropdownBlur=function(e){var t=e.relatedTarget;null===t&&(t=document.activeElement),this._rootNode.contains(t)||t===this._rootNode.parentElement||t===this._rootNode.parentElement.parentElement||this._close()},t.prototype._killEvent=function(e){return e.stopPropagation(),!0},t.prototype._onOlKeyDown=function(e){event.stopPropagation(),n.eventKey(e)===v&&this._close()},t.prototype._onLiKeyDown=function(e){var t=event.target;switch(n.eventKey(e)){case D:if(t.previousElementSibling)t.previousElementSibling.focus();break;case g:if(t.nextElementSibling)t.nextElementSibling.focus();break;case x:t.click()}},t.prototype._close=function(){this.open=!1},r([i.property(),l.renderable()],t.prototype,"items",void 0),r([i.property(),l.renderable()],t.prototype,"currentIndex",void 0),r([i.property({dependsOn:["currentIndex","items"]}),l.renderable()],t.prototype,"currentItem",null),r([i.property(),l.renderable()],t.prototype,"buttonTooltip",void 0),r([i.property(),l.renderable()],t.prototype,"showDropDown",void 0),r([i.property(),l.renderable()],t.prototype,"open",void 0),t=r([i.subclass("esri.widgets.Daylight.SliderWithDropdown")],t)}(i.declared(s))}));