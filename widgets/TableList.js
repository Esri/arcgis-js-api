/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import{eventKey as i}from"../core/events.js";import s from"../core/Handles.js";import{watch as o,on as n,initial as r}from"../core/reactiveUtils.js";import{aliasOf as a}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import d from"./Widget.js";import{accessibleHandler as m}from"./support/decorators/accessibleHandler.js";import{messageBundle as h}from"./support/decorators/messageBundle.js";import{vmEvent as g}from"./support/decorators/vmEvent.js";import{tsx as u}from"./support/jsxFactory.js";import"./support/widgetUtils.js";import p from"./TableList/ListItem.js";import b from"./TableList/TableListViewModel.js";import{findSelectedItem as _}from"./TableList/support/tableListUtils.js";import y from"sortablejs";function f(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const I=t.ofType(p),v="root-tables",A="data-layer-uid",S="layerUid",w={base:"esri-table-list",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",noItems:"esri-table-list__no-items",list:"esri-table-list__list",listRoot:"esri-table-list__list--root",item:"esri-table-list__item",itemChosen:"esri-table-list__item--chosen",itemMessage:"esri-table-list__item--has-message",itemSelectable:"esri-table-list__item--selectable",itemContainer:"esri-table-list__item-container",actionsMenu:"esri-table-list__item-actions-menu",actionsMenuItem:"esri-table-list__item-actions-menu-item",actionsMenuItemActive:"esri-table-list__item-actions-menu-item--active",actions:"esri-table-list__item-actions",actionsList:"esri-table-list__item-actions-list",action:"esri-table-list__item-action",actionIcon:"esri-table-list__item-action-icon",actionImage:"esri-table-list__item-action-image",actionTitle:"esri-table-list__item-action-title",actionToggle:"esri-table-list__action-toggle",actionToggleOn:"esri-table-list__action-toggle--on",message:"esri-table-list__item-message",title:"esri-table-list__item-title",disabled:"esri-disabled",disabledElement:"esri-disabled-element",hidden:"esri-hidden",rotating:"esri-rotating",iconEllipses:"esri-icon-handle-horizontal",iconNoticeTriangle:"esri-icon-notice-triangle",iconLoading:"esri-icon-loading-indicator",iconDefaultAction:"esri-icon-default-action",widgetIcon:"esri-icon-table"},T={actions:"actions",actionSection:"action-section",items:"items"};function C(e){const{actionsOpen:t}=e;t&&(e.actionsOpen=!1)}let M=class extends d{constructor(e,t){super(e,t),this._handles=new s,this._sortable=null,this._sortableNode=null,this._focusSortUid=null,this.visibleItems=null,this.iconClass=w.widgetIcon,this.label=void 0,this.listItemCreatedFunction=null,this.map=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.selectionEnabled=!1,this.selectedItems=new I,this.tableItems=null,this.viewModel=new b}initialize(){this._setVisibleItems(this.tableItems),this.own([o((()=>this.errorsVisible),(()=>this._itemsChanged())),n((()=>this.viewModel.tableItems),"change",(()=>this._itemsChanged())),o((()=>this.selectionEnabled),(()=>this._toggleSorting()),r)])}destroy(){this._destroySortable(),this._handles.destroy(),this._handles=null}triggerAction(e,t){this.viewModel.triggerAction(e,t)}render(){const{visibleItems:e}=this,t=this.viewModel?.state,i={[w.hidden]:"loading"===t,[w.disabled]:"disabled"===t};return u("div",{class:this.classes(w.base,w.esriWidget,w.esriWidgetPanel,i)},e?.length?this.renderList():this.renderNoItems())}renderNoItems(){return u("div",{class:w.noItems},this.messages.noItemsToDisplay)}renderList(){const{visibleItems:e,messages:t,selectionEnabled:i}=this;return u("ul",{"aria-label":t.widgetLabel,role:i?"listbox":void 0,afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",bind:this,class:this.classes(w.list,w.listRoot)},e.map((e=>this.renderItem(e))).toArray())}renderItem(e){const{id:t,selectionEnabled:i,selectedItems:s}=this,o=`${`${t}_${e.uid}`}__title`,n=this._hasMessage(e),r={[w.itemMessage]:!!n,[w.itemSelectable]:i};if(i){const t={[A]:e.layer?.uid};return u("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(w.item,r),"aria-labelledby":o,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":e,tabIndex:0,"aria-selected":_(e,s)?"true":"false",role:"option",...t},this.renderItemContent(e,o))}return u("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(w.item,r),"aria-labelledby":o},this.renderItemContent(e,o))}renderActionsMenuIcon(e,t){const{messagesCommon:i}=this,s={[w.actionsMenuItemActive]:e.actionsOpen};return u("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(w.actionsMenuItem,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i.options,title:i.options},u("span",{"aria-hidden":"true",class:w.iconEllipses}))}renderActionsMenu(e,t,i,s){const o=1===i&&this._getSingleActionButton(t),n=o?this.renderAction({item:e,action:o,singleAction:!0}):null,r=!o&&i?this.renderActionsMenuIcon(e,s):null;return r||o?u("div",{key:"actions-menu",class:w.actionsMenu},n,r):null}renderItemMessage(e){return e.error?u("div",{key:"esri-table-list__error",class:w.message,role:"alert"},u("span",{"aria-hidden":"true",class:w.iconNoticeTriangle}),this.messages.tableError):null}renderItemContent(e,t){const{id:i}=this,s=`${`${i}_${e.uid}`}_actions`,o=this._filterActions(e.actionsSections),n=this._countActions(o);return[u("div",{key:"list-item-container",class:w.itemContainer},this.renderTitle(e,t),this.renderActionsMenu(e,o,n,s)),this.renderItemMessage(e),n?this.renderActionsSections(e,o,s):null]}renderTitle(e,t){const{messages:i}=this,s=e.title||i.untitledTable;return u("span",{key:"layer-title-container",id:t,class:w.title},s)}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>u("ul",{key:`${e}-action-section-${i}`,class:w.actionsList},this.renderActionSection(e,t))));return u("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:w.actions,hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),o="button"!==e.type||e.image||i?i:w.iconDefaultAction,n={[w.actionImage]:!t&&!!s["background-image"],[w.iconLoading]:t,[w.rotating]:t};return o&&!t&&(n[o]=!0),u("span",{key:"action-icon","aria-hidden":"true",class:this.classes(w.actionIcon,n),styles:s})}renderActionTitle(e,t){return t?null:u("span",{key:"action-title",class:w.actionTitle},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:o,disabled:n,title:r}=i,a={[w.actionsMenuItem]:s&&"button"===i.type,[w.action]:o||!s&&"toggle"!==i.type,[w.actionToggle]:!o&&"toggle"===i.type,[w.actionToggleOn]:!o&&"toggle"===i.type&&i.value,[w.disabledElement]:n},l=[this.renderActionIcon(i),this.renderActionTitle(r,s)];return s?u("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",title:r,"aria-label":r},l):u("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",role:"button",title:r,"aria-label":r},l)}_hasMessage(e){return!!e.error}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_setVisibleItems(e){this.visibleItems=e?.filter((e=>!e.hidden&&(this.errorsVisible||!e.error)))}_destroySortable(){const{_sortable:e}=this;e&&e.destroy(),this._sortable=null}_toggleSorting(){const{_sortable:e,_sortableNode:t,selectionEnabled:i}=this;if(t)if(e)e.option("disabled",!i);else{const e=y.create(t,{dataIdAttr:A,group:v,fallbackTolerance:4,disabled:!i,onSort:()=>this._sortTablesToItems(e.toArray()),chosenClass:w.itemChosen});this._sortable=e}}_sortNodeCreated(e){this._sortableNode=e,this._toggleSorting()}_sortTablesToItems(e){const t=this.map?.tables;t&&t.sort(((t,i)=>{const s=e.indexOf(t.uid),o=e.indexOf(i.uid);return s>o?-1:s<o?1:0}))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_focusListItem(e){const{_focusSortUid:t}=this;if(!e||!t)return;e["data-item"].layer?.uid===t&&(e.focus(),this._focusSortUid=null)}_watchActionSectionChanges(e,t){const i=T.actionSection+t,s=()=>this.scheduleRender();this._handles.add(e.on("change",s),i),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){const i=T.actions+t,s=()=>this.scheduleRender();"toggle"!==e.type?"slider"!==e.type?this._handles.add([o((()=>[e.className,e.image,e.id,e.title,e.visible]),s,r)],i):this._handles.add([o((()=>[e.className,e.id,e.title,e.visible,e.value,e.displayValueEnabled,e.max,e.min,e.step]),s,r)],i):this._handles.add([o((()=>[e.className,e.image,e.id,e.title,e.visible,e.value]),s,r)],i)}_renderOnItemChanges(e){const t=e.uid,i=T.items+t,s=()=>this.scheduleRender();this._handles.add([o((()=>[e.actionsOpen,e.title,e.error]),s,r),o((()=>[e.hidden,e.error]),(()=>this._setVisibleItems(this.tableItems))),e.actionsSections.on("change",s)],i),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(){const{tableItems:e}=this.viewModel;this._setVisibleItems(e),this._handles.removeAll(),e.forEach((e=>this._renderOnItemChanges(e))),this.scheduleRender()}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}}_selectionKeydown(e){const t=["ArrowDown","ArrowUp"],s=i(e);if(!t.includes(s))return void this._toggleSelection(e);e.stopPropagation();const o=e.currentTarget["data-item"],{_sortable:n,selectedItems:r}=this,a=_(o,r),l=n.toArray(),c=e.target,d=l.indexOf(c.dataset[S]);if(-1!==d){if("ArrowDown"===s){const e=d+1;if(e>=l.length)return;a?(f(l,d,e),n.sort(l),this._sortTablesToItems(n.toArray()),this._focusSortUid=o.layer?.uid):(this._focusSortUid=o.layer?.uid,this.scheduleRender())}if("ArrowUp"===s){const e=d-1;if(e<=-1)return;a?(f(l,d,e),n.sort(l),this._sortTablesToItems(n.toArray()),this._focusSortUid=o.layer?.uid):(this._focusSortUid=o.layer?.uid,this.scheduleRender())}}}_toggleActionsOpen(e){const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i;s&&this.tableItems.forEach((e=>C(e))),t.actionsOpen=s,e.stopPropagation()}_triggerAction(e){const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s),e.stopPropagation()}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=t&&(e.metaKey||e.ctrlKey),o=e.currentTarget["data-item"],n=_(o,i),{length:r}=i;if(!s)return r&&!(n&&1===r)?(i.removeAll(),void i.add(o)):void(n?i.remove(n):i.add(o));n?i.remove(n):i.add(o)}};e([l()],M.prototype,"visibleItems",void 0),e([l()],M.prototype,"iconClass",void 0),e([l()],M.prototype,"errorsVisible",void 0),e([l({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],M.prototype,"label",void 0),e([a("viewModel.listItemCreatedFunction")],M.prototype,"listItemCreatedFunction",void 0),e([a("viewModel.map")],M.prototype,"map",void 0),e([l(),h("esri/widgets/TableList/t9n/TableList")],M.prototype,"messages",void 0),e([l(),h("esri/t9n/common")],M.prototype,"messagesCommon",void 0),e([l()],M.prototype,"multipleSelectionEnabled",void 0),e([l()],M.prototype,"selectionEnabled",void 0),e([l()],M.prototype,"selectedItems",void 0),e([a("viewModel.tableItems")],M.prototype,"tableItems",void 0),e([g("trigger-action"),l({type:b})],M.prototype,"viewModel",void 0),e([a("viewModel.triggerAction")],M.prototype,"triggerAction",null),e([m()],M.prototype,"_toggleActionsOpen",null),e([m()],M.prototype,"_triggerAction",null),e([m()],M.prototype,"_toggleSelection",null),M=e([c("esri.widgets.TableList")],M);const k=M;export{k as default};