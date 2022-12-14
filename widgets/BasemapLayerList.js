/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import{eventKey as i}from"../core/events.js";import{HandleOwnerMixin as s}from"../core/HandleOwner.js";import n from"../core/has.js";import{watch as r,on as a,initial as o}from"../core/reactiveUtils.js";import{aliasOf as l}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/arrayUtils.js";import{cast as c}from"../core/accessorSupport/decorators/cast.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import h from"./Widget.js";import u from"./BasemapLayerList/BasemapLayerListViewModel.js";import g from"./LayerList/ListItem.js";import{findSelectedItem as p}from"./LayerList/support/layerListUtils.js";import{Heading as b,incrementHeadingLevel as _}from"./support/Heading.js";import{accessibleHandler as y}from"./support/decorators/accessibleHandler.js";import{messageBundle as f}from"./support/decorators/messageBundle.js";import{vmEvent as I}from"./support/decorators/vmEvent.js";import{tsx as v}from"./support/jsxFactory.js";import"./support/widgetUtils.js";import L from"sortablejs";const C=t.ofType(g);function T(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const w=".*\\S+.*",A="esri-basemaplayerlist-new-ui",S="root-layers",E="data-layer-uid",k="layerUid",R={base:"esri-basemap-layer-list esri-widget esri-widget--panel",newUI:"esri-basemap-layer-list--new-ui",titleContainer:"esri-basemap-layer-list__title-container",mainHeading:"esri-basemap-layer-list__main-heading",editingCard:"esri-basemap-layer-list__editing-card",editingInput:"esri-basemap-layer-list__editing-input",editingActions:"esri-basemap-layer-list__editing-actions",editButton:"esri-basemap-layer-list__edit-button",editButtonIcon:"esri-basemap-layer-list__edit-button-icon",submitButton:"esri-basemap-layer-list__submit-button",cancelButton:"esri-basemap-layer-list__cancel-button",noItems:"esri-basemap-layer-list__no-items",horizontalRule:"esri-basemap-layer-list__hr",listHeading:"esri-basemap-layer-list__list-heading",list:"esri-basemap-layer-list__list",listRoot:"esri-basemap-layer-list__list--root",listExclusive:"esri-basemap-layer-list__list--exclusive",listInherited:"esri-basemap-layer-list__list--inherited",listIndependent:"esri-basemap-layer-list__list--independent",item:"esri-basemap-layer-list__item",itemOnlyChild:"esri-basemap-layer-list__item--only-child",itemContent:"esri-basemap-layer-list__item-content",itemMessage:"esri-basemap-layer-list__item--has-message",itemInvisible:"esri-basemap-layer-list__item--invisible",itemInvisibleAtScale:"esri-basemap-layer-list__item--invisible-at-scale",itemUpdating:"esri-basemap-layer-list__item--updating",itemChildren:"esri-basemap-layer-list__item--has-children",itemSelectable:"esri-basemap-layer-list__item--selectable",itemContainer:"esri-basemap-layer-list__item-container",actionsMenu:"esri-basemap-layer-list__item-actions-menu",actionsMenuItem:"esri-basemap-layer-list__item-actions-menu-item",actionsMenuItemActive:"esri-basemap-layer-list__item-actions-menu-item--active",actions:"esri-basemap-layer-list__item-actions",actionsList:"esri-basemap-layer-list__item-actions-list",action:"esri-basemap-layer-list__item-action",actionIcon:"esri-basemap-layer-list__item-action-icon",actionImage:"esri-basemap-layer-list__item-action-image",actionTitle:"esri-basemap-layer-list__item-action-title",actionToggle:"esri-basemap-layer-list__action-toggle",actionToggleOn:"esri-basemap-layer-list__action-toggle--on",label:"esri-basemap-layer-list__item-label",message:"esri-basemap-layer-list__item-message",title:"esri-basemap-layer-list__item-title",connectionStatus:"esri-basemap-layer-list__connection-status",connectionStatusDisconnected:"esri-basemap-layer-list__connection-status--disconnected",connectionStatusConnected:"esri-basemap-layer-list__connection-status--connected",toggleVisible:"esri-basemap-layer-list__item-toggle",toggleVisibleIcon:"esri-basemap-layer-list__item-toggle-icon",toggleIcon:"esri-basemap-layer-list__item-toggle-icon",radioIcon:"esri-basemap-layer-list__item-radio-icon",childToggle:"esri-basemap-layer-list__child-toggle",childToggleOpen:"esri-basemap-layer-list__child-toggle--open",childOpened:"esri-basemap-layer-list__child-toggle-icon--opened",childClosed:"esri-basemap-layer-list__child-toggle-icon--closed",childClosed_RTL:"esri-basemap-layer-list__child-toggle-icon--closed-rtl",sortableChosen:"esri-basemap-layer-list--chosen",button:"esri-button",buttonTertiary:"esri-button--tertiary",input:"esri-input",disabled:"esri-disabled",disabledElement:"esri-disabled-element",hidden:"esri-hidden",rotating:"esri-rotating",heading:"esri-widget__heading",iconEdit:"esri-icon-edit",iconCheckMark:"esri-icon-check-mark",iconClose:"esri-icon-close",iconEllipses:"esri-icon-handle-horizontal",iconVisible:"esri-icon-visible",iconInvisible:"esri-icon-non-visible",iconRadioSelected:"esri-icon-radio-checked",iconRadioUnselected:"esri-icon-radio-unchecked",iconNoticeTriangle:"esri-icon-notice-triangle",iconChildrenOpen:"esri-icon-down-arrow",iconDownArrow:"esri-icon-down-arrow",iconRightArrow:"esri-icon-right-triangle-arrow",iconLeftArrow:"esri-icon-left-triangle-arrow",iconLoading:"esri-icon-loading-indicator",iconDefaultAction:"esri-icon-default-action",widgetIcon:"esri-icon-layers"},M={actions:"actions",actionSection:"action-section",baseItems:"base-items",referenceItems:"reference-items"},B={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function O(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>O(e)))}const x={baseLayers:!0,referenceLayers:!0,statusIndicators:!0};let U=class extends(s(h)){constructor(e,t){super(e,t),this._tooltipReferenceMap=new Map,this._editingTitle=!1,this._editTitleInput=null,this._editTitleButton=null,this._focusOnElement=null,this._sortableBaseLayers=null,this._sortableReferenceLayers=null,this._sortableBaseLayersNode=null,this._sortableReferenceLayersNode=null,this._focusSortUid=null,this._newUI=n(A),this.visibleItems=null,this.basemapTitle=null,this.baseListItemCreatedFunction=null,this.editingEnabled=!1,this.headingLevel=2,this.iconClass=R.widgetIcon,this.label=void 0,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.referenceListItemCreatedFunction=null,this.baseItems=null,this.referenceItems=null,this.selectedItems=new C,this.view=null,this.viewModel=new u,this.visibleElements={...x}}initialize(){const{baseItems:e,referenceItems:t}=this;this._setVisibleItems(),this.own([r((()=>this.errorsVisible),(()=>{this._itemsChanged(e,M.baseItems),this._itemsChanged(t,M.referenceItems)})),a((()=>this.baseItems),"change",(()=>{this._itemsChanged(e,M.baseItems)})),a((()=>this.referenceItems),"change",(()=>this._itemsChanged(t,M.referenceItems))),r((()=>this.editingEnabled),(()=>this._toggleSorting()),o)])}loadDependencies(){return Promise.all([import("@esri/calcite-components/dist/components/calcite-tooltip.js")])}destroy(){this._destroyBaseSortable(),this._destroyReferenceSortable(),this._tooltipReferenceMap.clear()}castVisibleElements(e){return{...x,...e}}triggerAction(e,t){this.viewModel.triggerAction(e,t)}render(){const{state:e}=this.viewModel,t={[R.newUI]:this._newUI,[R.hidden]:"loading"===e,[R.disabled]:"disabled"===e},i=this.renderItemTooltips(),s=this.renderReferenceSection(),n=this.renderBaseSection(),r=s&&n?v("hr",{class:R.horizontalRule}):null,a=[this.renderTitleContainer(),s,r,n];return v("div",{class:this.classes(R.base,t)},[i,a])}renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?v("calcite-tooltip",{label:i.layerIncompatible,referenceElement:t.get(e.uid)},i.layerIncompatibleTooltip):null}renderItemTooltipNodes(e){const{incompatible:t,children:i}=e;return[t?this.renderItemTooltip(e):null,...t?[]:i?.toArray().map((e=>this.renderItemTooltipNodes(e)))]}renderItemTooltips(){return this.visibleItems.toArray().map((e=>this.renderItemTooltipNodes(e)))}renderEditingInput(){const{messages:e}=this,{basemapTitle:t}=this.viewModel;return v("label",{class:R.editingInput},e.basemapTitle,v("input",{bind:this,class:R.input,title:e.basemapTitle,"aria-label":e.basemapTitle,placeholder:e.basemapTitle,type:"text",role:"textbox",required:!0,pattern:w,value:t,afterCreate:this._storeEditTitleInput,afterUpdate:this._focusEditElement}))}renderCancelButton(){const{messagesCommon:e}=this;return v("button",{title:e.cancel,"aria-label":e.cancel,type:"button",bind:this,class:this.classes(R.button,R.buttonTertiary),onclick:this._toggleEditingTitle},e.cancel)}renderSubmitButton(){const{messagesCommon:e}=this;return v("button",{title:e.form.submit,"aria-label":e.form.submit,type:"submit",bind:this,class:R.button},e.form.ok)}renderEditingForm(){return v("div",{class:R.editingCard},v("form",{bind:this,onsubmit:this._formSubmit},this.renderEditingInput(),v("div",{class:R.editingActions},this.renderCancelButton(),this.renderSubmitButton())))}renderBasemapTitle(){const{basemapTitle:e}=this.viewModel;return v(b,{level:this.headingLevel,class:this.classes(R.heading,R.mainHeading)},e)}renderEditTitleButton(){const{_editingTitle:e,editingEnabled:t,messagesCommon:i}=this;return t&&!e?v("button",{bind:this,class:R.editButton,title:i.edit,"aria-label":i.edit,onclick:this._toggleEditingTitle,afterCreate:this._storeEditTitleButton,afterUpdate:this._focusEditElement,"data-node-ref":"_editButtonNode",type:"button"},v("span",{"aria-hidden":"true",class:this.classes(R.iconEdit,R.editButtonIcon)})):null}renderTitleContainer(){return v("div",{class:R.titleContainer},this._editingTitle?this.renderEditingForm():this.renderBasemapTitle(),this.renderEditTitleButton())}renderNoLayersInfo(e,t){return v("div",{key:t,class:R.noItems},e)}renderList(e,t){const{messages:i}=this,s="reference"===t?this._destroyReferenceSortable:this._destroyBaseSortable;return v("ul",{key:t,"aria-label":i.widgetLabel,role:this.editingEnabled&&e.length?"listbox":void 0,afterCreate:this._sortNodeCreated,afterRemoved:s,"data-node-ref":t,bind:this,class:this.classes(R.list,R.listRoot,R.listIndependent)},e.map((i=>this.renderItem({item:i,parent:null,itemType:t,isOnlyChild:1===e.length}))))}renderBaseHeader(){return v(b,{key:"base-heading",level:_(this.headingLevel),class:this.classes(R.heading,R.listHeading)},this.messages.baseHeading)}renderBaseSection(){const{baseItems:e,messages:t,visibleElements:i}=this;if(!i.baseLayers)return null;const s=this._getItems(e),n="base";return[this.renderBaseHeader(),[0===s.length?this.renderNoLayersInfo(t.noBaseLayers,n):null,this.renderList(s,n)]]}renderReferenceHeader(){return v(b,{key:"reference-heading",level:_(this.headingLevel),class:this.classes(R.heading,R.listHeading)},this.messages.referenceHeading)}renderReferenceSection(){const{referenceItems:e,messages:t,visibleElements:i}=this;if(!i.referenceLayers)return null;const s=this._getItems(e),n="reference";return[this.renderReferenceHeader(),[0===s.length?this.renderNoLayersInfo(t.noReferenceLayers,n):null,this.renderList(s,n)]]}renderChildrenToggle(e,t){const{messagesCommon:i}=this,{children:s}=e,n=!!e.error,r=!!s.length&&!n,a={[R.childToggleOpen]:e.open},o=e.open?i.collapse:i.expand;return r?v("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes(R.childToggle,a),tabindex:"0",role:"button","aria-controls":t,"aria-label":o,title:o},v("span",{"aria-hidden":"true",class:this.classes(R.childClosed,R.iconRightArrow)}),v("span",{"aria-hidden":"true",class:this.classes(R.childOpened,R.iconDownArrow)}),v("span",{"aria-hidden":"true",class:this.classes(R.childClosed_RTL,R.iconLeftArrow)})):null}renderItemMessage(e){return e.error?v("div",{key:"esri-basemap-layer-list__error",class:R.message,role:"alert"},v("span",{"aria-hidden":"true",class:R.iconNoticeTriangle}),this.messages.layerError):e.incompatible?v("div",{key:"esri-basemap-layer-list__incompatible",class:R.message,role:"alert"},v("span",{bind:this,tabIndex:0,"aria-hidden":"true",class:R.iconNoticeTriangle,afterCreate:t=>this._setTooltipReference(t,e)}),this.messages.layerIncompatible):null}renderActionsMenuIcon(e,t){const{messagesCommon:i}=this,s={[R.actionsMenuItemActive]:e.actionsOpen};return v("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(R.actionsMenuItem,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i.options,title:i.options},v("span",{"aria-hidden":"true",class:R.iconEllipses}))}renderActionsMenu(e,t,i,s){const{panel:n}=e,r=n&&n.visible?this.renderPanelButton(n):null,a=1===i&&this._getSingleActionButton(t),o=a?this.renderAction({item:e,action:a,singleAction:!0}):null,l=!a&&i?this.renderActionsMenuIcon(e,s):null;return l||r||a?v("div",{key:"actions-menu",class:R.actionsMenu},r,o,l):null}renderChildList(e,t){const{editingEnabled:i}=this,{visibilityMode:s,children:n}=e,r=this._hasChildren(e),a=!r&&i&&"group"===e.layer?.type,{exclusive:o,inherited:l}=B,c={[R.listExclusive]:s===o,[R.listInherited]:s===l,[R.listIndependent]:s!==l&&s!==o};return r||a?v("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,class:this.classes(R.list,c),"aria-expanded":e.open?"true":"false",role:i?"listbox":s===o?"radiogroup":"group",hidden:!e.open||null},n?.map((t=>this.renderItem({item:t,parent:e}))).toArray()):null}renderItemContent(e,t,i){const{id:s}=this,n=`${s}_${e.uid}`,r=`${n}_actions`,a=`${n}__list`,{panel:o}=e,l=this._filterActions(e.actionsSections),c=this._countActions(l);return[v("div",{key:"list-item-container",class:R.itemContainer},this.renderChildrenToggle(e,a),this.renderLabel(e,t,i),this.renderActionsMenu(e,l,c,r)),this.renderItemMessage(e),c?this.renderActionsSections(e,l,r):null,o&&o.open?o.render():null,this.renderChildList(e,a)]}renderItem({item:e,parent:t,itemType:i,isOnlyChild:s}){const{_newUI:n,id:r,editingEnabled:a,selectedItems:o,visibleElements:l}=this,c=`${`${r}_${e.uid}`}__title`,d=this._hasMessage(e),m=this._hasChildren(e),h={[R.itemChildren]:m,[R.itemMessage]:!!d,[R.itemUpdating]:e.updating&&!t&&l.statusIndicators,[R.itemInvisible]:n&&!e.visible,[R.itemInvisibleAtScale]:!e.visibleAtCurrentScale,[R.itemSelectable]:a};if(a){const n={[E]:e.layer?.uid};return v("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(R.item,h,{[R.itemOnlyChild]:s}),"aria-labelledby":c,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item-type":i,"data-item":e,tabIndex:0,"aria-selected":p(e,o)?"true":"false",role:"option",...n},this.renderItemContent(e,t,c))}return v("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(R.item,h),"aria-labelledby":c},this.renderItemContent(e,t,c))}renderItemConnectionStatus(e){const{connectionStatus:t}=e;return t?v("span",{class:this.classes({[R.connectionStatus]:!0,[R.connectionStatusDisconnected]:"disconnected"===t,[R.connectionStatusConnected]:"connected"===t}),key:"layer-connection-status"}):null}renderItemTitle(e,t){const{messages:i}=this,s=e.title||i.untitledLayer,n=e.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return v("span",{key:"layer-title-container",id:t,title:n,"aria-label":n,class:R.title},s)}renderItemToggleIcon(e,t){const{_newUI:i}=this,{exclusive:s}=B,n=t&&t.visibilityMode,r={[R.toggleVisibleIcon]:i,[R.toggleIcon]:i&&n!==s,[R.radioIcon]:i&&n===s,[R.iconRadioSelected]:n===s&&e.visible,[R.iconRadioUnselected]:n===s&&!e.visible,[R.iconVisible]:n!==s&&e.visible,[R.iconInvisible]:n!==s&&!e.visible};return v("span",{key:"item-toggle-icon",class:this.classes(r),"aria-hidden":"true"})}renderItemToggle(e,t,i){const{editingEnabled:s,messages:n}=this,{exclusive:r}=B,a=t&&t.visibilityMode,o=a===r?"radio":"switch";return v("span",s?{key:"item-toggle-selection-enabled",class:R.toggleVisible,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":a,tabIndex:0,"aria-checked":e.visible?"true":"false",title:e.visible?n.hideLayer:n.showLayer,role:o,"aria-labelledby":i}:{key:"item-toggle",class:R.toggleVisible},this.renderItemToggleIcon(e,t))}renderLabel(e,t,i){const{editingEnabled:s,_newUI:n,messages:r}=this,{inherited:a,exclusive:o}=B,l=t?.visibilityMode,c=l===o?"radio":"switch",d=[this.renderItemToggle(e,t,i),this.renderItemConnectionStatus(e),this.renderItemTitle(e,i)];n&&d.reverse();const m=v("div",s?{key:`item-label-no-selection-${e.uid}`,class:R.label}:{key:`item-label-with-selection-${e.uid}`,class:R.label,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":l,tabIndex:0,title:e.visible?r.hideLayer:r.showLayer,"aria-checked":e.visible?"true":"false",role:c,"aria-labelledby":i},d);return l===a||e.error?v("div",{key:`item-label-container-${e.uid}`,class:R.label},this.renderItemTitle(e,i)):m}renderPanelButton(e){const{className:t,open:i,title:s,image:n}=e,r=n||t?t:R.iconDefaultAction,a=this._getIconImageStyles(e),o={[R.actionsMenuItemActive]:i},l={[R.actionImage]:!!a["background-image"]};return r&&(l[r]=!!r),v("div",{key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(R.actionsMenuItem,o),role:"button",tabindex:"0",title:s,"aria-label":s},v("span",{class:this.classes(l),styles:a}))}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>v("ul",{key:`${e}-action-section-${i}`,class:R.actionsList},this.renderActionSection(e,t))));return v("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:R.actions,hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),n="button"!==e.type||e.image||i?i:R.iconDefaultAction,r={[R.actionImage]:!t&&!!s["background-image"],[R.iconLoading]:t,[R.rotating]:t};return n&&!t&&(r[n]=!0),v("span",{key:"action-icon","aria-hidden":"true",class:this.classes(R.actionIcon,r),styles:s})}renderActionTitle(e,t){return t?null:v("span",{key:"action-title",class:R.actionTitle},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:n,disabled:r,title:a}=i,o={[R.actionsMenuItem]:s&&"button"===i.type,[R.action]:n||!s&&"toggle"!==i.type,[R.actionToggle]:!n&&"toggle"===i.type,[R.actionToggleOn]:!n&&"toggle"===i.type&&i.value,[R.disabledElement]:r},l=[this.renderActionIcon(i),this.renderActionTitle(a,s)];return s?v("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:o,tabindex:"0",title:a,"aria-label":a},l):v("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:o,tabindex:"0",role:"button",title:a,"aria-label":a},l)}_setVisibleItems(){const{referenceItems:e,baseItems:t}=this,i=e.concat(t);this.visibleItems=i?.filter((e=>!e.hidden&&(this.errorsVisible||!e.error)))}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.uid,e),this.scheduleRender()}_hasMessage(e){return!!e.error||e.incompatible}_hasChildren(e){return!!e.children.length&&!this._hasMessage(e)}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_destroyReferenceSortable(){const{_sortableReferenceLayers:e}=this;e?.el&&e.destroy(),this._sortableReferenceLayersNode=null}_destroyBaseSortable(){const{_sortableBaseLayers:e}=this;e?.el&&e.destroy(),this._sortableBaseLayersNode=null}_toggleEditingTitle(){const{_editingTitle:e}=this,t=!e;this._editingTitle=t,this._focusOnElement=t?"edit-input":"edit-button",this.scheduleRender()}_storeEditTitleInput(e){this._editTitleInput=e,this._focusEditElement()}_focusEditElement(){this._editTitleInput&&"edit-input"===this._focusOnElement&&(this._focusOnElement=null,this._editTitleInput.focus()),this._editTitleButton&&"edit-button"===this._focusOnElement&&(this._focusOnElement=null,this._editTitleButton.focus())}_storeEditTitleButton(e){this._editTitleButton=e,this._focusEditElement()}_formSubmit(e){e.preventDefault();const t=this._editTitleInput?.value;t?.trim()&&(this.basemapTitle=t),this._toggleEditingTitle()}_itemMovedList(e){const t=e.item["data-item"],i=e.to.dataset.nodeRef,s=e.from.dataset.nodeRef,{newIndex:n}=e;this.viewModel.transferListItem({listItem:t,from:s,to:i,newIndex:n})}_toggleSortingBaseLayers(){const{_sortableBaseLayers:e,_sortableBaseLayersNode:t,editingEnabled:i}=this;if(!t)return;const s=!i;if(e)e.option("disabled",s);else{const e=L.create(t,{dataIdAttr:E,group:S,filter:`.${R.itemOnlyChild}`,fallbackTolerance:4,disabled:s,onSort:()=>this._sortLayersToItems({type:"base",itemIds:e.toArray()}),onAdd:e=>this._itemMovedList(e),chosenClass:R.sortableChosen});this._sortableBaseLayers=e}}_toggleSortingReferenceLayers(){const{_sortableReferenceLayers:e,_sortableReferenceLayersNode:t,editingEnabled:i}=this;if(!t)return;const s=!i;if(e)e.option("disabled",s);else{const e=L.create(t,{dataIdAttr:E,group:S,disabled:s,fallbackTolerance:4,onSort:()=>this._sortLayersToItems({type:"reference",itemIds:e.toArray()}),onAdd:e=>this._itemMovedList(e),chosenClass:R.sortableChosen});this._sortableReferenceLayers=e}}_toggleSorting(){this._toggleSortingBaseLayers(),this._toggleSortingReferenceLayers()}_sortNodeCreated(e){const t=e.getAttribute("data-node-ref");"base"===t&&(this._sortableBaseLayersNode=e),"reference"===t&&(this._sortableReferenceLayersNode=e),this._toggleSorting()}_getItems(e){return e.toArray().filter((e=>!e.hidden&&(this.errorsVisible||!e.error)))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_sortLayersToItems({type:e,itemIds:t}){const i="base"===e?this.get("view.map.basemap.baseLayers"):"reference"===e?this.get("view.map.basemap.referenceLayers"):null;i&&i.sort(((e,i)=>{const s=t.indexOf(e.uid),n=t.indexOf(i.uid);return s>n?-1:s<n?1:0}))}_focusListItem(e){const{_focusSortUid:t}=this;if(!e||!t)return;e["data-item"].layer?.uid===t&&(e.focus(),this._focusSortUid=null)}_selectionKeydown(e){const t=["ArrowDown","ArrowUp"],s=i(e);if(!t.includes(s))return void this._toggleSelection(e);e.stopPropagation();const n=e.currentTarget,r=n["data-item"],a=n.dataset.itemType,{_sortableBaseLayers:o,_sortableReferenceLayers:l,selectedItems:c}=this,d="base"===a?o:"reference"===a?l:null;if(!d)return;const m=p(r,c),h=d.toArray(),u=e.target,g=h.indexOf(u.dataset[k]),{baseItems:b,referenceItems:_}=this.viewModel;if(-1!==g){if("ArrowDown"===s){const e=g+1,t=e>=h.length;if(t&&"reference"===a&&m){const e=b.length;return this.viewModel.transferListItem({listItem:r,from:"reference",to:"base",newIndex:e}),this._focusSortUid=r.layer?.uid,void this.scheduleRender()}if(t&&"reference"===a){const e=b.getItemAt(0);return this._focusSortUid=e?.layer?.uid,void this.scheduleRender()}if(t)return;return m&&(T(h,g,e),d.sort(h),this._sortLayersToItems({type:a,itemIds:d.toArray()})),this._focusSortUid=r.layer?.uid,void this.scheduleRender()}if("ArrowUp"===s){const e=g-1,t=e<0;if(t&&"base"===a&&m){if(1===b.length)return;const e=0;return this.viewModel.transferListItem({listItem:r,from:"base",to:"reference",newIndex:e}),this._focusSortUid=r.layer?.uid,void this.scheduleRender()}if(t&&"base"===a){const e=_.getItemAt(_.length-1);return this._focusSortUid=e?.layer?.uid,void this.scheduleRender()}if(t)return;m&&(T(h,g,e),d.sort(h),this._sortLayersToItems({type:a,itemIds:d.toArray()})),this._focusSortUid=r.layer?.uid,this.scheduleRender()}}}_watchActionSectionChanges(e,t){this.handles.add(e.on("change",(()=>this.scheduleRender())),t),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){"toggle"!==e.type?"slider"!==e.type?this.handles.add([r((()=>[e.className,e.image,e.id,e.title,e.visible]),(()=>this.scheduleRender()),o)],t):this.handles.add([r((()=>[e.className,e.id,e.title,e.visible,e.value,e.displayValueEnabled,e.max,e.min,e.step]),(()=>this.scheduleRender()),o)],t):this.handles.add([r((()=>[e.className,e.image,e.id,e.title,e.visible,e.value]),(()=>this.scheduleRender()),o)],t)}_renderOnItemChanges(e,t){this.handles.add([r((()=>[e.actionsOpen,e.visible,e.open,e.updating,e.title,e.visibleAtCurrentScale,e.error,e.visibilityMode,e.panel,e.panel?.title,e.panel?.content,e.panel?.className]),(()=>this.scheduleRender()),o),r((()=>[e.hidden,e.error]),(()=>this._setVisibleItems())),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],t),e.children.forEach((e=>this._renderOnItemChanges(e,t))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(e,t){this.handles.remove(t),this._tooltipReferenceMap.clear(),this._setVisibleItems(),e.forEach((e=>this._renderOnItemChanges(e,t))),this.scheduleRender()}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}}_toggleActionsOpen(e){e.stopPropagation();const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i,{baseItems:n,referenceItems:r}=this;s&&(n.forEach((e=>O(e))),r.forEach((e=>O(e)))),t.actionsOpen=s}_triggerPanel(e){e.stopPropagation();const t=e.currentTarget["data-panel"];t&&(t.open=!t.open)}_triggerAction(e){e.stopPropagation();const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s)}_toggleVisibility(e){e.stopPropagation();const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===B.exclusive&&s.visible||(s.visible=!s.visible)}_toggleChildrenClick(e){e.stopPropagation();const t=e.currentTarget["data-item"];t.open=!t.open}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=t&&(e.metaKey||e.ctrlKey),n=e.currentTarget["data-item"],r=p(n,i),{length:a}=i;if(!s)return a&&!(r&&1===a)?(i.removeAll(),void i.add(n)):void(r?i.remove(r):i.add(n));r?i.remove(r):i.add(n)}};e([d()],U.prototype,"visibleItems",void 0),e([l("viewModel.basemapTitle")],U.prototype,"basemapTitle",void 0),e([l("viewModel.baseListItemCreatedFunction")],U.prototype,"baseListItemCreatedFunction",void 0),e([d()],U.prototype,"editingEnabled",void 0),e([d()],U.prototype,"errorsVisible",void 0),e([d()],U.prototype,"headingLevel",void 0),e([d()],U.prototype,"iconClass",void 0),e([d({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],U.prototype,"label",void 0),e([d(),f("esri/widgets/BasemapLayerList/t9n/BasemapLayerList")],U.prototype,"messages",void 0),e([d(),f("esri/t9n/common")],U.prototype,"messagesCommon",void 0),e([d()],U.prototype,"multipleSelectionEnabled",void 0),e([l("viewModel.referenceListItemCreatedFunction")],U.prototype,"referenceListItemCreatedFunction",void 0),e([l("viewModel.baseItems")],U.prototype,"baseItems",void 0),e([l("viewModel.referenceItems")],U.prototype,"referenceItems",void 0),e([d()],U.prototype,"selectedItems",void 0),e([l("viewModel.view")],U.prototype,"view",void 0),e([I("trigger-action"),d({type:u})],U.prototype,"viewModel",void 0),e([d()],U.prototype,"visibleElements",void 0),e([c("visibleElements")],U.prototype,"castVisibleElements",null),e([y()],U.prototype,"_toggleActionsOpen",null),e([y()],U.prototype,"_triggerPanel",null),e([y()],U.prototype,"_triggerAction",null),e([y()],U.prototype,"_toggleVisibility",null),e([y()],U.prototype,"_toggleChildrenClick",null),e([y()],U.prototype,"_toggleSelection",null),U=e([m("esri.widgets.BasemapLayerList")],U);const N=U;export{N as default};