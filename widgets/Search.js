/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/events","../core/Handles","../core/promiseUtils","../core/string","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./Search/SearchResultRenderer","./Search/SearchViewModel","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","../intl/substitute"],(function(e,t,s,n,i,r,o,a,u,c,l,d,h,_,g,p,v,m,M,f,I,w){"use strict";const S={base:"esri-search esri-widget",loader:"esri-widget__loader",loaderText:"esri-widget__loader-text",loaderAnimation:"esri-widget__loader-animation",esriInput:"esri-input",hasMultipleSources:"esri-search--multiple-sources",isLoading:"esri-search--loading",isSearching:"esri-search--searching",showSuggestions:"esri-search--show-suggestions",showSources:"esri-search--sources",showWarning:"esri-search--warning",container:"esri-search__container",input:"esri-search__input",inputContainer:"esri-search__input-container",form:"esri-search__form",submitButton:"esri-search__submit-button",sourcesButton:"esri-search__sources-button",clearButton:"esri-search__clear-button",sourceName:"esri-search__source-name",suggestionsMenu:"esri-search__suggestions-menu",suggestionList:"esri-search__suggestions-list",suggestionListCurrentLocation:"esri-search__suggestions-list--current-location",sourcesMenu:"esri-search__sources-menu",source:"esri-search__source",warningMenu:"esri-search__warning-menu",warningMenuBody:"esri-search__warning-body",warningMenuHeader:"esri-search__warning-header",warningMenuText:"esri-search__warning-text",noValueText:"esri-search__no-value-text",esriWidgetDisabled:"esri-widget--disabled",button:"esri-widget--button",fallbackText:"esri-icon-font-fallback-text",header:"esri-widget__heading",locate:"esri-icon-locate-circled",menu:"esri-menu",menuList:"esri-menu__list",menuItem:"esri-menu__list-item",menuItemActive:"esri-menu__list-item--active",menuItemFocus:"esri-menu__list-item--focus",menuHeader:"esri-menu__header",loadingIcon:"esri-icon-loading-indicator esri-rotating",searchIcon:"esri-icon-search",dropdownIcon:"esri-icon-down-arrow esri-search__sources-button--down",dropupIcon:"esri-icon-up-arrow esri-search__sources-button--up",clearIcon:"esri-icon-close",noticeIcon:"esri-icon-notice-triangle",widgetIcon:"esri-icon-search",disabled:"esri-disabled"},y=/<[a-z/][\s\S]*>/i;let b=function(t){function s(s,n){var r;return(r=t.call(this,s,n)||this)._activeMenuItemIndex=-1,r._handles=new i,r._inputNode=null,r._menuItemCount=0,r._sourceMenuButtonNode=null,r._sourceListNode=null,r._suggestionListNode=null,r._searchResultRenderer=new p,r._locateFailed=null,r._container=null,r.activeMenu="none",r.activeSource=null,r.activeSourceIndex=null,r.allPlaceholder=null,r.allSources=null,r.autoNavigate=null,r.autoSelect=null,r.defaultSources=null,r.disabled=!1,r.goToOverride=null,r.iconClass=S.widgetIcon,r.includeDefaultSources=null,r.label=void 0,r.locationEnabled=null,r.maxResults=null,r.maxSuggestions=null,r.messages=null,r.messagesCommon=null,r.minSuggestCharacters=null,r.popupEnabled=null,r.popupTemplate=null,r.portal=null,r.resultGraphic=null,r.resultGraphicEnabled=null,r.results=null,r.searchAllEnabled=null,r.searchTerm=null,r.selectedResult=null,r.sources=null,r.suggestions=null,r.suggestionsEnabled=null,r.view=null,r.viewModel=new v,r._clearActiveMenu=()=>{r.activeMenu="none"},r._removeActiveMenu=e=>{var t;const s=e.relatedTarget;s&&null!=(t=r._container)&&t.contains(s)||r._clearActiveMenu()},r.own(a.watch(e._assertThisInitialized(r),"searchTerm",(e=>{(e&&"warning"===r.activeMenu||!e&&!r.get("viewModel.selectedSuggestion.location"))&&r._clearActiveMenu()})),a.on(e._assertThisInitialized(r),"viewModel.allSources","change",(()=>r._watchSourceChanges())),a.init(e._assertThisInitialized(r),"activeMenu",(()=>r._resetActiveMenuItemIndex())),a.init(e._assertThisInitialized(r),"viewModel.defaultPopupTemplate",(t=>{t&&(t.content=r._renderSearchResultsContent.bind(e._assertThisInitialized(r)))}))),r}e._inheritsLoose(s,t);var u=s.prototype;return u.destroy=function(){this._handles.destroy(),this._handles=null,this._cancelSuggest(),this._cancelSearch(),this._searchResultRenderer&&(this._searchResultRenderer.viewModel=null,this._searchResultRenderer.destroy(),this._searchResultRenderer=null)},u.clear=function(){},u.focus=function(){var e;null==(e=this._inputNode)||e.focus(),this.emit("search-focus")},u.blur=function(){var e;null==(e=this._inputNode)||e.blur(),this.emit("search-blur")},u.search=function(e){this._clearActiveMenu(),this._cancelSuggest(),this._cancelSearch();const t=r.createAbortController(),{signal:s}=t;return this._searchController=t,this.viewModel.search(e,{signal:s}).catch((e=>{if(this._searchController===t)return this._clearActiveMenu(),this._searchController=null,e})).then((e=>{if(this._searchController===t)return this.activeMenu=e.numResults?"none":"warning",this._searchController=null,e}))},u.suggest=function(e){this._cancelSuggest();const t=r.createAbortController(),{signal:s}=t;return this._suggestController=t,this.viewModel.suggest(e,null,{signal:s}).then((e=>{if(this._suggestController===t)return this._suggestController=null,e.numResults&&this._openSuggestionMenu(),this._scrollToTopSuggestion(),e})).catch((()=>{if(this._suggestController===t)return this._suggestController=null,null}))},u.render=function(){const{state:e}=this.viewModel,t={[S.disabled]:"disabled"===e,[S.esriWidgetDisabled]:this.disabled};return I.tsx("div",{class:this.classes(S.base,t)},"loading"===e?this.renderLoader():this.renderContainer())},u.renderSubmitButton=function(){const{messages:e}=this;return I.tsx("button",{"aria-label":e.searchButtonTitle,bind:this,class:this.classes(S.submitButton,S.button),key:"esri-search__submit-button",onclick:this._handleSearchButtonClick,title:e.searchButtonTitle},I.tsx("span",{"aria-hidden":"true",class:S.searchIcon}))},u.renderWarningMenu=function(){return I.tsx("div",{key:"esri-search__error-menu",class:this.classes(S.menu,S.warningMenu)},I.tsx("div",{class:S.warningMenuBody},this.renderWarning()))},u.renderSourceMenuButton=function(){const{messages:e,activeMenu:t,sourceMenuId:s,sourceMenuButtonId:n}=this,{activeSourceIndex:i,allSources:r}=this.viewModel;return r.length>1?I.tsx("button",{id:n,key:"esri-search__source-menu-button",bind:this,"aria-label":e.searchIn,title:e.searchIn,"aria-haspopup":"true","aria-expanded":("source"===t).toString(),"aria-controls":s,class:this.classes(S.sourcesButton,S.button),onclick:this._handleSourcesMenuToggleClick,onfocus:this._clearActiveMenu,afterCreate:m.storeNode,"data-node-ref":"_sourceMenuButtonNode"},I.tsx("span",{"aria-hidden":"true",class:S.dropdownIcon}),I.tsx("span",{"aria-hidden":"true",class:S.dropupIcon}),I.tsx("span",{class:S.sourceName},this._getSourceName(i))):null},u.renderSourcesList=function(){const{allSources:e,searchAllEnabled:t}=this.viewModel,{_activeMenuItemIndex:s,activeMenu:n,sourceMenuId:i,sourceMenuButtonId:r}=this,o="source"===n&&s>-1?this._buildId("source-item",s):null;return e.length>1?I.tsx("ul",{"aria-activedescendant":o,"aria-labelledby":r,id:i,role:"menu",bind:this,afterCreate:m.storeNode,onkeydown:this._handleSourceMenuKeydown,onkeyup:this._handleSourceMenuKeyup,"data-node-ref":"_sourceListNode",class:S.menuList,tabIndex:-1},t?this.renderSource(v.ALL_INDEX):null,e.map(((e,t)=>this.renderSource(t))).toArray()):null},u.renderSourcesMenu=function(){const{allSources:e}=this.viewModel;return e.length>1?I.tsx("div",{key:"esri-search__source-menu",class:this.classes(S.menu,S.sourcesMenu)},this.renderSourcesList()):null},u.renderLoader=function(){const{messages:e,messagesCommon:t}=this;return I.tsx("div",{class:S.loader,key:"base-loader"},I.tsx("span",{"aria-hidden":"true",class:S.loaderAnimation}),I.tsx("span",{class:S.fallbackText},e.searchButtonTitle),I.tsx("span",{class:S.loaderText},t.loading))},u.renderContainer=function(){const{allSources:e,state:t}=this.viewModel,{activeMenu:s}=this,n={[S.hasMultipleSources]:e.length>1,[S.isLoading]:"loading"===t,[S.isSearching]:"searching"===t,[S.showWarning]:"warning"===s,[S.showSources]:"source"===s,[S.showSuggestions]:"suggestion"===s};return I.tsx("div",{tabIndex:-1,afterCreate:e=>{this._container=e,e.addEventListener("focusout",this._removeActiveMenu)},afterRemoved:e=>{e.removeEventListener("focusout",this._removeActiveMenu)},class:this.classes(n,S.container),key:"base-container"},this.renderSourceMenuButton(),this.renderSourcesMenu(),this.renderInputContainer(),this.renderSubmitButton(),this.renderWarningMenu())},u.renderClearButton=function(){return this.searchTerm?I.tsx("button",{bind:this,class:this.classes(S.clearButton,S.button),key:"esri-search__clear-button",onclick:this._handleClearButtonClick,onfocus:this._clearActiveMenu,title:this.messages.clearButtonTitle},I.tsx("span",{"aria-hidden":"true",class:S.clearIcon})):null},u.renderLocationGroup=function(){const{messages:e,locationEnabled:t,displayedSearchTerm:s}=this,n=t&&!s,i="suggestion"===this.activeMenu&&0===this._activeMenuItemIndex;return n?I.tsx("ul",{role:"group",key:"esri-search__suggestion-list-current-location",class:this.classes(S.menuList,S.suggestionList,S.suggestionListCurrentLocation)},I.tsx("li",{bind:this,"data-current-location-item":!0,onclick:this._handleUseCurrentLocationClick,id:this._buildId("suggestion-item",0),"aria-selected":("suggestion"===this.activeMenu&&0===this._activeMenuItemIndex).toString(),role:"option",class:this.classes(S.menuItem,i?S.menuItemFocus:null)},I.tsx("span",{"aria-hidden":"true",class:S.locate})," ",e.useCurrentLocation)):null},u.renderInput=function(){const{activeMenu:e,locationEnabled:t,displayedSearchTerm:s,messages:n,suggestionsMenuId:i,inputId:r,_activeMenuItemIndex:o}=this,{maxInputLength:a,placeholder:u,searchTerm:c,suggestionCount:l}=this.viewModel,d=!(!(t&&!s)&&!l),h="suggestion"===e&&o>-1?this._buildId("suggestion-item",o):null;return I.tsx("input",{"aria-activedescendant":h,"aria-autocomplete":"list","aria-expanded":(d&&"suggestion"===e).toString(),"aria-controls":d?i:null,"aria-haspopup":"listbox","aria-label":n.searchButtonTitle,bind:this,placeholder:u,maxlength:a,autocomplete:"off",type:"text",class:this.classes(S.esriInput,S.input),value:c,id:r,role:"combobox",onkeyup:this._handleInputKeyup,onclick:this._openSuggestionMenu,oninput:this._handleInputPaste,onpaste:this._handleInputPaste,afterCreate:m.storeNode,"data-node-ref":"_inputNode",onfocus:this.focus,onblur:this.blur,title:c?"":u})},u.renderForm=function(){return I.tsx("form",{key:"esri-search__form",bind:this,class:S.form,onsubmit:this._formSubmit,role:"search"},this.renderInput())},u.renderSuggestList=function(e){const{sourceIndex:t}=e,s=e.results.length,n=e.results;return s?I.tsx("ul",{role:"group",key:`esri-search__suggestion-list-${t}`,class:this.classes(S.menuList,S.suggestionList)},n.map((e=>this.renderSuggestion(e,this._menuItemCount++)))):null},u.renderSuggestionsGroup=function(){const{suggestions:e}=this.viewModel;return e?e.map((e=>[this.renderSuggestionHeader(e),this.renderSuggestList(e)])):null},u.renderSuggestionsMenu=function(){const{displayedSearchTerm:e,locationEnabled:t,suggestionsMenuId:s,inputId:n}=this,{suggestionCount:i}=this.viewModel,r=t&&!e||i;return this._menuItemCount=0,r?I.tsx("div",{id:s,key:"esri-search__suggestions-menu",class:this.classes(S.menu,S.suggestionsMenu),role:"listbox","aria-labelledby":n,bind:this,afterCreate:m.storeNode,"data-node-ref":"_suggestionListNode"},this.renderLocationGroup(),this.renderSuggestionsGroup()):null},u.renderInputContainer=function(){return I.tsx("div",{key:"esri-search__input-container",class:S.inputContainer},this.renderForm(),this.renderSuggestionsMenu(),this.renderClearButton())},u.renderSuggestionHeader=function(e){const{allSources:t,activeSourceIndex:s}=this.viewModel,{sourceIndex:n}=e,i=e.results.length,r=t.length>1&&s===v.ALL_INDEX;return i&&r?I.tsx("div",{key:`esri-search__suggestion-header-${n}`,class:S.menuHeader},this._getSourceName(n)):null},u.renderSuggestion=function(e,t){const{_activeMenuItemIndex:s,messages:n}=this,{searchTerm:i}=this.viewModel;if(i){const{text:r}=e,o=r||n.untitledResult,a=y.test(o),u=[];if(a)u.push(I.tsx("div",{innerHTML:o}));else{const e=this._splitResult(o,i),t=i.toLowerCase();e.forEach(((e,s)=>{e&&e.length&&(e.toLowerCase()===t?u.push(I.tsx("strong",{key:s},e)):u.push(e))}))}const c="suggestion"===this.activeMenu&&s===t;return I.tsx("li",{bind:this,id:this._buildId("suggestion-item",t),"aria-selected":("suggestion"===this.activeMenu&&this._activeMenuItemIndex===t).toString(),onclick:this._handleSuggestionClick,key:`esri-search__suggestion_${t}`,"data-suggestion":e,role:"option",class:this.classes(S.menuItem,c?S.menuItemFocus:null)},u)}},u.renderSource=function(e){const{activeSourceIndex:t,searchAllEnabled:s}=this.viewModel,n={[S.menuItemActive]:e===t,[S.menuItemFocus]:"source"===this.activeMenu&&e===(s?this._activeMenuItemIndex-1:this._activeMenuItemIndex)},i=s?e+1:e;return I.tsx("li",{bind:this,key:`esri-search__source-${e}`,id:this._buildId("source-item",i),"aria-checked":(e===t).toString(),onclick:this._handleSourceClick,"data-source-index":e,role:"menuitemradio",class:this.classes(S.source,S.menuItem,n)},this._getSourceName(e))},u.renderNoResultsWarning=function(e){const{messages:t}=this,s=e?w.substitute(t.noResultsFoundForValue,{value:`"${e}"`}):t.noResultsFound;return I.tsx("div",{key:"esri-search__no_results"},I.tsx("div",{class:S.warningMenuHeader},t.noResults),I.tsx("div",{class:S.warningMenuText},s))},u.renderEmptySearchWarning=function(){const{messages:e}=this;return I.tsx("div",{key:"esri-search__empty-search"},I.tsx("span",{"aria-hidden":"true",class:S.noticeIcon}),I.tsx("span",{class:S.noValueText},e.emptyValue))},u.renderLocateWarning=function(){const{messages:e}=this;return I.tsx("div",{key:"esri-search__locate-error"},I.tsx("span",{"aria-hidden":"true",class:S.noticeIcon}),I.tsx("span",{class:S.noValueText},e.locateError))},u.renderWarning=function(){var e;const{displayedSearchTerm:t,_locateFailed:s}=this,{viewModel:n}=this;return s?this.renderLocateWarning():null!=(e=n.selectedSuggestion)&&e.location||t?this.renderNoResultsWarning(t):this.renderEmptySearchWarning()},u._resetActiveMenuItemIndex=function(){this._activeMenuItemIndex=-1},u._buildId=function(e,t){return`${this.id}-${e}${void 0===t?"":`-${t}`}`},u._watchSourceChanges=function(){const{_handles:e,viewModel:{allSources:t}}=this,s="sources";e.remove(s),t.forEach((t=>e.add(a.watch(t,"name",(()=>this.scheduleRender())),s)))},u._handleSourcesMenuToggleClick=function(){const e="source"===this.activeMenu;var t;(this.activeMenu=e?"none":"source",this.renderNow(),"source"===this.activeMenu)&&(null==(t=this._sourceListNode)||t.focus())},u._handleClearButtonClick=function(){this.viewModel.clear(),this._focus()},u._handleSearchButtonClick=function(){this.search()},u._handleSuggestionClick=function(e){const t=e.currentTarget["data-suggestion"];t&&(this._focus(),this.search(t))},u._handleUseCurrentLocationClick=function(){this._useCurrentLocation()},u._useCurrentLocation=function(){this._focus("none"),this._cancelSuggest(),this._cancelSearch();const e=r.createAbortController(),{signal:t}=e;this._searchController=e,this.viewModel.searchNearby({signal:t}).catch((()=>{this._locateFailed=!0,this.activeMenu="warning"})).then((()=>{this._searchController=null}))},u._handleSourceClick=function(e){this._setSourceFromMenuItem(e.currentTarget)},u._setSourceFromMenuItem=function(e){var t;if(!e)return;const s=e["data-source-index"];this.viewModel.activeSourceIndex=s,this._clearActiveMenu(),null==(t=this._sourceMenuButtonNode)||t.focus()},u._cancelSuggest=function(){this._suggestController&&(this._suggestController.abort(),this._suggestController=null)},u._cancelSearch=function(){this._searchController&&(this._searchController.abort(),this._searchController=null),this._locateFailed=!1},u._handleInputKeyup=function(e){var t;const s=n.eventKey(e);if(e.ctrlKey||e.metaKey||"Copy"===s||"ArrowLeft"===s||"ArrowRight"===s||"Shift"===s)return;if("Tab"===s||"Escape"===s||e.shiftKey&&"Tab"===s)return this._cancelSuggest(),void("Escape"===s&&this._clearActiveMenu());const i="Home"===s||"End"===s||"ArrowUp"===s||"ArrowDown"===s;if("Enter"===s&&this._activeMenuItemIndex<0)return void this._cancelSuggest();const r=null==(t=this._suggestionListNode)?void 0:t.getElementsByTagName("li");if(null!=r&&r.length){if("suggestion"!==this.activeMenu&&this._openSuggestionMenu(),i)return e.preventDefault(),this._cancelSuggest(),void this.handleItemNavigation(s,r,this._suggestionListNode);const t=r[this._activeMenuItemIndex];if("Enter"===s&&t){const e=t["data-suggestion"];return void(e?(this._focus(),this.search(e)):t["data-current-location-item"]&&this._useCurrentLocation())}}this.viewModel.searchTerm&&this.suggest()},u.handleItemNavigation=function(e,t,s){const n=this._activeMenuItemIndex;"Home"===e&&(this._activeMenuItemIndex=0),"End"===e&&(this._activeMenuItemIndex=t.length-1),"ArrowUp"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex<=0?t.length-1:this._activeMenuItemIndex-1),"ArrowDown"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex===t.length-1?0:this._activeMenuItemIndex+1),n!==this._activeMenuItemIndex&&m.keepMenuItemWithinView(t[this._activeMenuItemIndex],s)},u._scrollToTopSuggestion=function(){this._suggestionListNode&&(this._suggestionListNode.scrollTop=0)},u._openSuggestionMenu=function(){this.activeMenu="suggestion"},u._handleInputPaste=function(e){const t=e.target;this.viewModel.searchTerm!==t.value&&(this.viewModel.searchTerm=t.value),this.viewModel.searchTerm&&this.suggest()},u._handleSourceMenuKeydown=function(e){const t=n.eventKey(e);if(m.isActivationKey(t)){e.preventDefault();const t=this._sourceListNode.getElementsByTagName("li")[this._activeMenuItemIndex];this._setSourceFromMenuItem(t)}else"ArrowUp"!==t&&"ArrowDown"!==t&&"End"!==t&&"Home"!==t||e.preventDefault()},u._handleSourceMenuKeyup=function(e){var t;const s=n.eventKey(e),i="ArrowUp"===s||"ArrowDown"===s||"End"===s||"Home"===s;var r;if(i&&e.preventDefault(),"Escape"===s)return this._clearActiveMenu(),void(null==(r=this._sourceMenuButtonNode)||r.focus());const o=null==(t=this._sourceListNode)?void 0:t.getElementsByTagName("li");return o&&0!==o.length&&i?("source"!==this.activeMenu&&(this.activeMenu="source"),void this.handleItemNavigation(s,o,this._sourceListNode.parentElement)):void 0},u._focus=function(e){this.focus(),e&&(this.activeMenu=e)},u._formSubmit=function(e){e.preventDefault(),-1===this._activeMenuItemIndex&&this.search()},u._getSourceName=function(e){const{messages:t}=this,s=this.viewModel,{allSources:n}=s,i=n.getItemAt(e);return e===v.ALL_INDEX?t.all:i&&i.name||t.untitledSource},u._splitResult=function(e,t){const s=o.escapeRegExpString(t);return e.replace(new RegExp(`(^|)(${s})(|$)`,"ig"),"$1|$2|$3").split("|")},u._renderSearchResultsContent=function(){return this._searchResultRenderer.showMoreResultsOpen=!1,this._searchResultRenderer.viewModel=this.viewModel,this._searchResultRenderer},e._createClass(s,[{key:"displayedSearchTerm",get:function(){return`${this.viewModel.searchTerm}`.trim()}},{key:"inputId",get:function(){return this._buildId("input")}},{key:"suggestionsMenuId",get:function(){return this._buildId("suggest-menu")}},{key:"sourceMenuId",get:function(){return this._buildId("source-menu")}},{key:"sourceMenuButtonId",get:function(){return this._buildId("source-menu-button")}}]),s}(g);return t.__decorate([h.property()],b.prototype,"_activeMenuItemIndex",void 0),t.__decorate([h.property()],b.prototype,"displayedSearchTerm",null),t.__decorate([h.property({readOnly:!0})],b.prototype,"inputId",null),t.__decorate([h.property({readOnly:!0})],b.prototype,"suggestionsMenuId",null),t.__decorate([h.property({readOnly:!0})],b.prototype,"sourceMenuId",null),t.__decorate([h.property({readOnly:!0})],b.prototype,"sourceMenuButtonId",null),t.__decorate([h.property()],b.prototype,"activeMenu",void 0),t.__decorate([u.aliasOf("viewModel.activeSource")],b.prototype,"activeSource",void 0),t.__decorate([u.aliasOf("viewModel.activeSourceIndex")],b.prototype,"activeSourceIndex",void 0),t.__decorate([u.aliasOf("viewModel.allPlaceholder")],b.prototype,"allPlaceholder",void 0),t.__decorate([u.aliasOf("viewModel.allSources")],b.prototype,"allSources",void 0),t.__decorate([u.aliasOf("viewModel.autoNavigate")],b.prototype,"autoNavigate",void 0),t.__decorate([u.aliasOf("viewModel.autoSelect")],b.prototype,"autoSelect",void 0),t.__decorate([u.aliasOf("viewModel.defaultSources")],b.prototype,"defaultSources",void 0),t.__decorate([h.property()],b.prototype,"disabled",void 0),t.__decorate([u.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0),t.__decorate([h.property()],b.prototype,"iconClass",void 0),t.__decorate([u.aliasOf("viewModel.includeDefaultSources")],b.prototype,"includeDefaultSources",void 0),t.__decorate([h.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0),t.__decorate([u.aliasOf("viewModel.locationEnabled")],b.prototype,"locationEnabled",void 0),t.__decorate([u.aliasOf("viewModel.maxResults")],b.prototype,"maxResults",void 0),t.__decorate([u.aliasOf("viewModel.maxSuggestions")],b.prototype,"maxSuggestions",void 0),t.__decorate([h.property(),M.messageBundle("esri/widgets/Search/t9n/Search")],b.prototype,"messages",void 0),t.__decorate([h.property(),M.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0),t.__decorate([u.aliasOf("viewModel.minSuggestCharacters")],b.prototype,"minSuggestCharacters",void 0),t.__decorate([u.aliasOf("viewModel.popupEnabled")],b.prototype,"popupEnabled",void 0),t.__decorate([u.aliasOf("viewModel.popupTemplate")],b.prototype,"popupTemplate",void 0),t.__decorate([u.aliasOf("viewModel.portal")],b.prototype,"portal",void 0),t.__decorate([u.aliasOf("viewModel.resultGraphic")],b.prototype,"resultGraphic",void 0),t.__decorate([u.aliasOf("viewModel.resultGraphicEnabled")],b.prototype,"resultGraphicEnabled",void 0),t.__decorate([u.aliasOf("viewModel.results")],b.prototype,"results",void 0),t.__decorate([u.aliasOf("viewModel.searchAllEnabled")],b.prototype,"searchAllEnabled",void 0),t.__decorate([u.aliasOf("viewModel.searchTerm")],b.prototype,"searchTerm",void 0),t.__decorate([u.aliasOf("viewModel.selectedResult")],b.prototype,"selectedResult",void 0),t.__decorate([u.aliasOf("viewModel.sources")],b.prototype,"sources",void 0),t.__decorate([u.aliasOf("viewModel.suggestions")],b.prototype,"suggestions",void 0),t.__decorate([u.aliasOf("viewModel.suggestionsEnabled")],b.prototype,"suggestionsEnabled",void 0),t.__decorate([u.aliasOf("viewModel.view")],b.prototype,"view",void 0),t.__decorate([f.vmEvent(["search-complete","search-clear","search-start","select-result","suggest-start","suggest-complete"]),h.property({type:v})],b.prototype,"viewModel",void 0),t.__decorate([u.aliasOf("viewModel.clear")],b.prototype,"clear",null),b=t.__decorate([_.subclass("esri.widgets.Search")],b),b}));
