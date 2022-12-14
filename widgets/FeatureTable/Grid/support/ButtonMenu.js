/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import{eventKey as t}from"../../../../core/events.js";import{HandleOwnerMixin as n}from"../../../../core/HandleOwner.js";import{isSome as o}from"../../../../core/maybe.js";import{watch as s}from"../../../../core/reactiveUtils.js";import{aliasOf as i}from"../../../../core/accessorSupport/decorators/aliasOf.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/ensureType.js";import{property as r}from"../../../../core/accessorSupport/decorators/property.js";import{subclass as a}from"../../../../core/accessorSupport/decorators/subclass.js";import l from"../../../Widget.js";import d from"./ButtonMenuViewModel.js";import u from"../../../support/Popover.js";import{isRTL as c,isActivationKey as m}from"../../../support/widgetUtils.js";import{tsx as p}from"../../../support/jsxFactory.js";const h={base:"esri-button-menu",content:"esri-button-menu__content",contentWrapper:"esri-button-menu__content-wrapper",itemWrapper:"esri-button-menu__item-wrapper",label:"esri-button-menu__label",icon:"esri-button-menu__icon",item:"esri-button-menu__item",itemLabel:"esri-button-menu__item-label",itemLabelContent:"esri-button-menu__item-label-content",selectableMenuItem:"esri-button-menu__item--selectable",selectedMenuItem:"esri-button-menu__item--selected",checkbox:"esri-button-menu__checkbox",embeddedContentWrapper:"esri-button-menu__embedded-content-wrapper",button:"esri-button-menu__button",buttonSelected:"esri-button-menu__button--selected",defaultIconClass:"esri-icon-menu",widget:"esri-widget"};let b=class extends(n(l)){constructor(e,t){super(e,t),this._menuContentNode=null,this._popover=null,this._rootNode=null,this.disabled=!1,this.iconClass=null,this.items=null,this.label=null,this.open=null,this.viewModel=new d,this._handleOutsideClick=this._handleOutsideClick.bind(this)}postInitialize(){this._popover=new u({owner:this,open:!!this.open,placement:c(this.container)?"bottom-start":"bottom-end",renderContentFunction:this.renderMenuContent,anchorElement:this._rootNode}),this.handles.add(s((()=>this.open),(e=>this._popover.set("open",e)))),document.addEventListener("click",this._handleOutsideClick)}destroy(){this._popover?.destroy(),this._popover=null,document.removeEventListener("click",this._handleOutsideClick)}_handleOutsideClick(e){if(!this.open||!this._rootNode||!this._menuContentNode)return;const t=e.target;this._menuContentNode?.contains(t)||this._rootNode?.contains(t)||(this.open=!1)}render(){return p("div",{afterCreate:this._afterRootNodeCreate,bind:this,"data-node-ref":"_rootNode",class:this.classes(h.base,h.widget),key:"menu"},this.renderMenuButton())}renderMenuButton(){const{iconClass:e,id:t,label:n,open:o}=this,s=this.classes([h.button,e||h.defaultIconClass,o?h.buttonSelected:null]);return p("button",{"aria-pressed":o.toString(),"aria-controls":`${t}-menu`,"aria-expanded":o.toString(),"aria-haspopup":"true","aria-label":n,bind:this,class:s,disabled:this.disabled,id:`${t}-button`,title:n,selected:o,onclick:this._toggleOpen,tabindex:this.disabled?-1:0,type:"button"})}renderMenuContent(){const{id:e,open:t}=this;return p("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:h.content,"data-node-ref":"_menuContentNode",key:"esri-button-menu-content",hidden:!t},p("ul",{"aria-labelledby":`${e}-button`,bind:this,class:h.itemWrapper,id:`${e}-menu`,role:"menu"},this.items?.length&&this.renderItems()))}renderItems(){return this.items?.map(((e,t)=>this.renderItem(e,t)))}renderItem(e,t,n){const s=o(n)?`${this.id}-menu-item-${t}-${n}`:`${this.id}-menu-item-${t}`,i=`${s}-label`,r=this.classes(h.item,e.selectionEnabled?h.selectableMenuItem:null,e.selectionEnabled&&e.selected?h.selectedMenuItem:null);return p("li",{afterCreate:this._afterMenuItemCreate,bind:this,class:r,"data-item-index":t,"data-item-subIndex":n,for:s,key:s,onkeydown:t=>this._handleMenuItemKeydown(t,e),onclick:t=>this._handleMenuItemInteraction(t,e),role:"menuitem",tabindex:this.disabled?-1:0},p("input",{disabled:!0,checked:e.selected,class:h.checkbox,id:s,name:s,tabindex:"-1",type:"checkbox"}),p("label",{bind:this,class:this.classes(h.button,h.itemLabel),for:s,id:i},p("span",{class:this.classes(h.icon,e.iconClass),"aria-hidden":"true"}),p("span",{class:h.itemLabelContent},e.label)),p("ul",{"aria-labelledby":i,class:h.embeddedContentWrapper,id:`${this.id}-submenu`,role:"menu"},e?.items?.map(((e,n)=>this.renderItem(e,t,n)))))}_afterRootNodeCreate(e){this._rootNode=e,this._popover?.set("anchorElement",(()=>e))}_handleMenuItemInteraction(e,t){t.selected=!t.selected,t.open=!(!t.selected||!t.items),t.autoCloseMenu&&this.set("open",!1),t.clickFunction&&t.clickFunction({event:e,item:t}),e.stopPropagation()}_handleMenuItemKeydown(e,n){const o=t(e);m(o)&&this._handleMenuItemInteraction(e,n),"Escape"===o&&(this.open=!1,e.preventDefault(),e.stopPropagation())}_afterMenuContentNodeCreate(e){this._menuContentNode=e,e.focus()}_toggleOpen(){this.open=!this.open}_afterMenuItemCreate(e){0===e["data-item-index"]&&e.focus()}};e([r()],b.prototype,"disabled",void 0),e([r()],b.prototype,"iconClass",void 0),e([i("viewModel.items")],b.prototype,"items",void 0),e([r()],b.prototype,"label",void 0),e([i("viewModel.open")],b.prototype,"open",void 0),e([r()],b.prototype,"viewModel",void 0),b=e([a("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],b);const _=b;export{_ as default};