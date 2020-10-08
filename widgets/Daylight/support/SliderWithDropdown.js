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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/events","../../../core/accessorSupport/decorators","../../Slider","./SliderWithDropdownViewModel","../../support/widget"],(function(e,o,t,r,i,n,s,d){"use strict";var l="esri-interactive",p="esri-slider__label",a="esri-slider-with-dropdown__box",c="esri-slider-with-dropdown__dropdown-root",w=" esri-widget__anchor esri-slider-with-dropdown__anchor",h="esri-slider-with-dropdown__anchor--open",u="esri-slider-with-dropdown__anchor--closed",_="esri-slider-with-dropdown__list",b="esri-slider-with-dropdown__list-item",v="esri-slider-with-dropdown__list-item--selected",y="esri-slider-with-dropdown__box--drop-down-on",D="esri-slider-with-dropdown__box--drop-down-off",f="Enter",m="Escape",x="ArrowUp",g="ArrowDown";return function(e){function o(o,t){var r=e.call(this,o,t)||this;return r.viewModel=new s.SliderWithDropdownViewModel,r.buttonTooltip="",r.showDropDown=!0,r.currentIndex=0,r._rootNode=null,r}return t.__extends(o,e),o.prototype.renderThumbLabel=function(o){var t,r=this,i=((t={})[y]=this.showDropDown,t[D]=!this.showDropDown,t);return d.tsx("div",{class:this.classes(a,p,i)},e.prototype.renderThumbLabel.call(this,o),this.showDropDown?d.tsx("div",{afterCreate:d.storeNode,class:c,bind:this,"data-node-ref":"_rootNode"},d.tsx("button",{class:this.classes(l,w,this.isDropdownOpen?h:u),bind:this,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.isDropdownOpen,"aria-haspopup":"listbox",type:"button"},this.currentItem?this.currentItem.name+" ":""),this.isDropdownOpen?d.tsx("ol",{class:this.classes(_),onpointerdown:this._killEvent,onblur:this._onDropdownBlur,bind:this,tabindex:"-1","aria-label":this.buttonTooltip,role:"listbox",onkeydown:this._onOlKeyDown,afterCreate:function(e){return e.firstChild.focus()}},this.items.map((function(e,o){return d.tsx("li",{class:o===r.currentIndex?r.classes(l,b,v):r.classes(l,b),bind:r,onclick:r._onDropdownItemClick,"data-result":o,"aria-label":e.label.join(" "),role:"option","aria-selected":o===r.currentIndex,onkeydown:r._onLiKeyDown,onblur:r._onDropdownBlur,tabindex:"0"},e.label.map((function(e){return d.tsx("span",{bind:r},e)})))}))):null):null)},o.prototype._onAnchorClick=function(){return this.viewModel.toggle(),!0},o.prototype._onDropdownItemClick=function(e){var o=e.currentTarget;this.viewModel.selectItem(o["data-result"])},o.prototype._onDropdownBlur=function(e){var o=e.relatedTarget;null===o&&(o=document.activeElement),this._rootNode.contains(o)||o===this._rootNode.parentElement||o===this._rootNode.parentElement.parentElement||(this.viewModel.isDropdownOpen=!1)},o.prototype._killEvent=function(e){return e.stopPropagation(),!0},o.prototype._onOlKeyDown=function(e){event.stopPropagation(),r.eventKey(e)===m&&(this.viewModel.isDropdownOpen=!1)},o.prototype._onLiKeyDown=function(e){var o=event.target;switch(r.eventKey(e)){case x:if(o.previousElementSibling)o.previousElementSibling.focus();break;case g:if(o.nextElementSibling)o.nextElementSibling.focus();break;case f:o.click()}},t.__decorate([i.property(),d.renderable()],o.prototype,"viewModel",void 0),t.__decorate([i.property(),d.renderable()],o.prototype,"buttonTooltip",void 0),t.__decorate([i.property(),d.renderable()],o.prototype,"showDropDown",void 0),t.__decorate([i.property({aliasOf:"viewModel.items"}),d.renderable()],o.prototype,"items",void 0),t.__decorate([i.property({aliasOf:"viewModel.currentIndex"}),d.renderable()],o.prototype,"currentIndex",void 0),t.__decorate([i.property({aliasOf:"viewModel.currentItem"}),d.renderable()],o.prototype,"currentItem",void 0),t.__decorate([i.property({aliasOf:"viewModel.isDropdownOpen"}),d.renderable()],o.prototype,"isDropdownOpen",void 0),o=t.__decorate([i.subclass("esri.widgets.Daylight.SliderWithDropdown")],o)}(n)}));