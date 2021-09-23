/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/events","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/decorators/cast","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../webdoc/support/Thumbnail","./Widget","./Bookmarks/BookmarksUserState","./Bookmarks/BookmarksViewModel","./FeatureTable/Grid/support/ButtonMenu","./FeatureTable/Grid/support/ButtonMenuItem","./support/Heading","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","../chunks/sortable.esm"],(function(t,o,e,r,i,s,n,a,d,l,u,k,c,m,h,_,b,p,g,B,f,v,I){"use strict";function y(t,o,e){t.splice(e,0,t.splice(o,1)[0])}const E="bookmarks",x="data-bookmark-uid",S={base:"esri-bookmarks esri-widget--panel",loaderContainer:"esri-bookmarks__loader-container",loader:"esri-bookmarks__loader",fadeIn:"esri-bookmarks--fade-in",bookmarkList:"esri-bookmarks__list",bookmarkListSortable:"esri-bookmarks__list--sortable",bookmark:"esri-bookmarks__bookmark",bookmarkButton:"esri-bookmarks__bookmark-button",bookmarkImageContainer:"esri-bookmarks__bookmark-image-container",bookmarkEditButton:"esri-bookmarks__bookmark-edit-button",bookmarkDragHandle:"esri-bookmarks_bookmark-drag-handle",bookmarkDragHandleIcon:"esri-bookmarks_bookmark-drag-handle-icon",bookmarkIcon:"esri-bookmarks__bookmark-icon",bookmarkImage:"esri-bookmarks__image",bookmarkName:"esri-bookmarks__bookmark-name",bookmarkActive:"esri-bookmarks__bookmark--active",noBookmarksContainer:"esri-widget__content--empty",noBookmarksHeader:"esri-bookmarks__no-bookmarks-heading",noBookmarksIcon:"esri-widget__no-bookmark-icon",noBookmarksDescription:"esri-bookmarks__no-bookmarks-description",addingBookmark:"esri-bookmarks__adding-bookmark",addBookmark:"esri-bookmarks__add-bookmark",addBookmarkButton:"esri-bookmarks__add-bookmark-button",addBookmarkIcon:"esri-bookmarks__add-bookmark-icon",authoringCard:"esri-bookmarks__authoring-card",authoringContainer:"esri-bookmarks__authoring-container",authoringForm:"esri-bookmarks__authoring-form",authoringLabel:"esri-bookmarks__authoring-label",authoringActions:"esri-bookmarks__authoring-actions",authoringInputInvalid:"esri-bookmarks__authoring-input--invalid",authoringDeleteButton:"esri-bookmarks__authoring-delete-button",authoringCancelButton:"esri-bookmarks__authoring-cancel-button",esriWidget:"esri-widget",esriWidgetDisabled:"esri-widget--disabled",esriButton:"esri-button",esriButtonTertiary:"esri-button--tertiary",esriInput:"esri-input",iconHandle:"esri-icon-handle-vertical",iconPlus:"esri-icon-plus",iconEdit:"esri-icon-edit",iconHandleHorizontal:"esri-icon-handle-horizontal",iconRefresh:"esri-icon-refresh",iconLink:"esri-icon-link",iconRemove:"esri-icon-erase",widgetIcon:"esri-icon-bookmark",header:"esri-widget__heading",loading:"esri-icon-loading-indicator",rotating:"esri-rotating"},w={addBookmark:!0,thumbnail:!0},A=/^https:\/\/.*/i,U="esri.widgets.Bookmarks";let C=function(o){function s(t,e){var i;return(i=o.call(this,t,e)||this)._handles=new r,i._addInputNode=null,i._editInputNode=null,i._urlEditInputNode=null,i._addBookmarkButtonNode=null,i._focusAddBookmarkButton=!1,i._focusEditInputBox=!1,i._focusAddInputBox=!1,i._focusUrlEditInputBox=!1,i._sortable=null,i._sortableNode=null,i._focusSortUid=null,i._selectedSortUid=null,i._sortableSavedItems=null,i._userState=null,i.defaultCreateOptions=null,i.defaultEditOptions=null,i.bookmarks=null,i.disabled=!1,i.editingEnabled=!1,i.headingLevel=2,i.goToOverride=null,i.iconClass=S.widgetIcon,i.label=void 0,i.messages=null,i.messagesCommon=null,i.messagesUnits=null,i.view=null,i.viewModel=new h,i.visibleElements={...w},i}t._inheritsLoose(s,o);var n=s.prototype;return n.initialize=function(){this.own([i.init(this,"viewModel.bookmarks",(()=>this._bookmarksInitialized())),i.init(this,"editingEnabled",(()=>this._toggleSorting()))])},n.destroy=function(){this._destroySortable(),this._handles.destroy(),this._handles=null,this._editMenu.destroy()},n.castVisibleElements=function(t){return{...w,...t}},n.endAddBookmark=function(){this._userState=null},n.goTo=function(t){return this.viewModel.goTo(t)},n.render=function(){const{state:t}=this.viewModel,o="loading"===t?this.renderLoading():this.renderBookmarks();return v.tsx("div",{class:this.classes(S.base,S.esriWidget,{[S.esriWidgetDisabled]:this.disabled})},o)},n.startAddBookmark=function(){this._userState=new m({state:"add"}),this._focusAddInputBox=!0,this.scheduleRender()},n.renderLoading=function(){return v.tsx("div",{class:S.loaderContainer,key:"loader"},v.tsx("div",{class:S.loader}))},n.renderNoBookmarksContainer=function(){const{messages:t}=this;return v.tsx("div",{class:S.noBookmarksContainer,key:"no-bookmarks"},v.tsx("span",{"aria-hidden":"true",class:this.classes(S.noBookmarksIcon,S.widgetIcon)}),v.tsx(p.Heading,{level:this.headingLevel,class:this.classes(S.header,S.noBookmarksHeader)},null==t?void 0:t.noBookmarksHeading),v.tsx("p",{class:S.noBookmarksDescription},null==t?void 0:t.noBookmarksDescription))},n.renderAddBookmarkLoading=function(){var t;return v.tsx("div",{key:"adding-bookmark",class:S.addingBookmark},v.tsx("span",{"aria-hidden":"true",class:this.classes(S.loading,S.rotating)}),null==(t=this.messages)?void 0:t.addingBookmark)},n.renderBookmarkItems=function(t){if(!t)return null;const{_userState:o,editingEnabled:e}=this;return t.map((t=>e&&t&&o&&("edit"===o.state||"edit-thumbnail"===o.state)&&o.bookmark===t?"edit-thumbnail"===o.state?this.renderEditingBookmarkUrl(o.editedBookmark):this.renderEditingBookmark(o.editedBookmark):this.renderBookmark(t))).toArray()},n.renderBookmarksContainer=function(t){var o;const{_userState:e,editingEnabled:r}=this,i="add"===(null==e?void 0:e.state),s=r&&!i?this.renderAddBookmarkButton():null,n=r?i&&e.loading?this.renderAddBookmarkLoading():"add"===(null==e?void 0:e.state)?this.renderAddingBookmark():null:null;return[v.tsx("ul",{key:"bookmark-list","aria-label":null==(o=this.messages)?void 0:o.widgetLabel,class:this.classes(S.bookmarkList,{[S.bookmarkListSortable]:this.editingEnabled}),afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",bind:this},this.renderBookmarkItems(t)),s,n]},n.renderAddBookmarkButton=function(){var t;return this.visibleElements.addBookmark?v.tsx("div",{key:"add-bookmark-item",class:S.addBookmark},v.tsx("button",{class:this.classes(S.esriButton,S.esriButtonTertiary,S.addBookmarkButton),onclick:this.startAddBookmark,afterCreate:this._storeAddBookmarkButton,afterUpdate:this._storeAddBookmarkButton,"data-node-ref":"_addBookmarkButtonNode",bind:this,type:"button"},v.tsx("span",{"aria-hidden":"true",class:this.classes(S.addBookmarkIcon,S.iconPlus)}),null==(t=this.messages)?void 0:t.addBookmark)):null},n.renderBookmarks=function(){const{bookmarks:t}=this.viewModel,o=t&&t.filter(Boolean),e=o&&o.length,r=e||this.editingEnabled?this.renderBookmarksContainer(o):null;return[e?null:this.renderNoBookmarksContainer(),r]},n.renderEditContainer=function(t){const{messagesCommon:o}=this;return v.tsx("div",{key:"edit-container"},v.tsx("button",{title:null==o?void 0:o.edit,"aria-label":null==o?void 0:o.edit,"data-bookmark":t,onclick:this._showEditBookmarkForm,bind:this,class:S.bookmarkEditButton,type:"button"},v.tsx("span",{"aria-hidden":"true",class:S.iconEdit})))},n.renderDragHandle=function(t){const{messagesCommon:o}=this,e={[x]:t.uid};return v.tsx("div",{role:"button",tabIndex:0,key:"drag-handle",bind:this,class:S.bookmarkDragHandle,onkeydown:this._dragHandleKeydown,afterCreate:this._focusDragHandle,afterUpdate:this._focusDragHandle,onblur:this._dragHandleBlur,"aria-pressed":this._selectedSortUid===t.uid?"true":"false","aria-label":null==o?void 0:o.dragHandleLabel,title:null==o?void 0:o.dragHandleTitle,...e},v.tsx("span",{"aria-hidden":"true",class:this.classes(S.bookmarkDragHandleIcon,S.iconHandle)}))},n.renderBookmarkImageIcon=function(){return v.tsx("span",{"aria-hidden":"true",class:this.classes(S.bookmarkIcon,S.widgetIcon)})},n.renderBookmarkImage=function(t){const{visibleElements:o}=this,{thumbnail:e}=t,r=e&&e.url||"";return o.thumbnail&&r?v.tsx("img",{src:r,alt:"",class:S.bookmarkImage}):null},n.renderBookmarkButton=function(t){const{messagesCommon:o}=this,{name:e}=t,r=e||(null==o?void 0:o.untitled),i=v.tsx("div",{class:S.bookmarkImageContainer},this.renderBookmarkImage(t)||this.renderBookmarkImageIcon());return v.tsx("button",{key:"bookmark-button",class:S.bookmarkButton,bind:this,"data-bookmark":t,onclick:this._goToBookmark,type:"button"},i,v.tsx("span",{class:S.bookmarkName},r))},n.renderBookmark=function(t){const{activeBookmark:o}=this.viewModel,e={[S.bookmarkActive]:o===t},r=this.editingEnabled?this.renderEditContainer(t):null,i={[x]:t.uid},s=this.editingEnabled?this.renderDragHandle(t):null;return v.tsx("li",{key:t,class:this.classes(S.bookmark,e),...i},s,this.renderBookmarkButton(t),r)},n.renderEditingBookmarkName=function(t){const{messages:o,_userState:e}=this,r="name-required"===e.validationState;return v.tsx("label",{class:S.authoringLabel},null==o?void 0:o.title,r?v.tsx("strong",null,null==o?void 0:o.invalidTitle):null,v.tsx("input",{required:!0,bind:this,class:this.classes(S.esriInput,r?S.authoringInputInvalid:null),type:"text",value:t.name,afterCreate:this._storeEditInput,afterUpdate:this._focusEditInput,"data-bookmark":t,"data-node-ref":"_editInputNode",placeholder:null==o?void 0:o.titlePlaceholder}))},n.renderEditingBookmarkUrlActions=function(){const{messagesCommon:t}=this;return v.tsx("div",{class:S.authoringActions},v.tsx("input",{type:"button",value:null==t?void 0:t.back,class:this.classes(S.esriButton,S.esriButtonTertiary),onclick:this._closeUrlEditBookmarkForm,bind:this}),v.tsx("input",{class:S.esriButton,type:"submit",value:null==t?void 0:t.add}))},n.renderEditingBookmarkActions=function(){const{messagesCommon:t}=this,{bookmark:o}=this._userState;return v.tsx("div",{class:S.authoringActions},v.tsx("input",{type:"button",value:null==t?void 0:t.delete,class:this.classes(S.esriButton,S.esriButtonTertiary,S.authoringDeleteButton),"data-bookmark":o,onclick:this._deleteBookmark,bind:this}),v.tsx("input",{type:"button",value:null==t?void 0:t.cancel,class:this.classes(S.esriButton,S.esriButtonTertiary),onclick:this._closeEditBookmarkForm,bind:this}),v.tsx("input",{class:S.esriButton,type:"submit",value:null==t?void 0:t.save}))},n.renderEditingBookmarkUrlInput=function(t){var o;const{messages:e,_userState:r}=this,i=null==(o=t.thumbnail)?void 0:o.url,s=A.test(i)?i:null,n="absolute-url-required"===r.validationState;return v.tsx("label",{class:S.authoringLabel},n?v.tsx("strong",null,null==e?void 0:e.invalidImageUrl):null,v.tsx("input",{required:!0,bind:this,class:this.classes(S.esriInput,n?S.authoringInputInvalid:null),type:"text",value:s,afterCreate:this._storeUrlEditInput,afterUpdate:this._focusUrlEditInput,"data-bookmark":t,"data-node-ref":"_urlEditInputNode",title:null==e?void 0:e.imageUrlTooltip,placeholder:e&&`https://<${e.imageUrlPlaceholder}>`}))},n.renderEditingBookmarkUrl=function(t){const o={[x]:t.uid};return v.tsx("li",{key:"edit-bookmark-url-form",class:S.authoringCard,...o},v.tsx("form",{class:S.authoringForm,onsubmit:this._editBookmarkUrlSubmit,bind:this},this.renderEditingBookmarkUrlInput(t),this.renderEditingBookmarkUrlActions()))},n.renderEditingBookmark=function(t){const o={[x]:t.uid};return v.tsx("li",{key:"edit-bookmark-form",class:S.authoringCard,...o},v.tsx("form",{class:S.authoringForm,onsubmit:this._editBookmarkSubmit,bind:this},v.tsx("div",{class:S.authoringContainer},v.tsx("div",{class:S.bookmarkImageContainer},this.renderBookmarkImage(t),this._editMenu.render()),this.renderEditingBookmarkName(t)),this.renderEditingBookmarkActions()))},n.renderAddingBookmarkName=function(){const{_userState:t,messages:o}=this,e="name-required"===t.validationState;return v.tsx("label",{class:S.authoringLabel},null==o?void 0:o.title,e?v.tsx("strong",null,null==o?void 0:o.invalidTitle):null,v.tsx("input",{required:!0,bind:this,class:this.classes(S.esriInput,e?S.authoringInputInvalid:null),type:"text",afterCreate:this._storeAddInput,afterUpdate:this._focusAddInput,"data-node-ref":"_addInputNode",value:"",placeholder:null==o?void 0:o.titlePlaceholder}))},n.renderAddingBookmarkActions=function(){const{messagesCommon:t}=this;return v.tsx("div",{class:this.classes(S.authoringActions)},v.tsx("input",{type:"button",value:null==t?void 0:t.cancel,class:this.classes(S.esriButton,S.esriButtonTertiary,S.authoringCancelButton),onclick:this._endAddBookmark.bind(this),bind:this}),v.tsx("input",{class:S.esriButton,type:"submit",value:null==t?void 0:t.add}))},n.renderAddingBookmark=function(){return v.tsx("div",{key:"add-bookmark-form",class:S.authoringCard},v.tsx("form",{class:S.authoringForm,onsubmit:this._addBookmarkSubmit,bind:this},this.renderAddingBookmarkName(),this.renderAddingBookmarkActions()))},n._dragHandleBlur=function(){this._selectedSortUid=null,this.scheduleRender()},n._dragHandleKeydown=function(t){const{_sortableSavedItems:o}=this,r=["ArrowDown","ArrowUp","Escape","Tab"," ","Enter"],i=e.eventKey(t);if(-1===r.indexOf(i))return;const{_sortable:s,_selectedSortUid:n}=this,a=s.toArray(),d=t.target.getAttribute(x),l=a.indexOf(d);if(g.isActivationKey(i)){const t=n&&n===d;return this._selectedSortUid=t?null:d,this._sortableSavedItems=t?null:this._sortable.toArray(),void this.scheduleRender()}if("Tab"===i)return this._selectedSortUid=null,void this.scheduleRender();if("Escape"===i&&o)return t.stopPropagation(),this._selectedSortUid=null,this._updateSortItems(o,s,d),void this.scheduleRender();if(-1===l||!n)return;const u="ArrowUp"===i?l-1:l+1;u>=a.length||u<=-1||(y(a,l,u),this._updateSortItems(a,s,d))},n._updateSortItems=function(t,o,e){o.sort(t),this._sortBookmarks(o),this._focusSortUid=e,this._selectedSortUid=e},n._focusDragHandle=function(t){const{_focusSortUid:o}=this;if(!t||!o)return;t.getAttribute(x)===o&&(t.focus(),this._focusSortUid=null)},n._toggleSorting=function(){const{_sortable:t,_sortableNode:o,editingEnabled:e}=this;if(o)if(t)t.option("disabled",!e);else{const t=I.Sortable.create(o,{dataIdAttr:x,handle:`.${S.bookmarkDragHandle}`,group:E,disabled:!e,onSort:()=>this._sortBookmarks(t)});this._sortable=t}},n._sortNodeCreated=function(t){this._sortableNode=t,this._toggleSorting()},n._sortBookmarks=function(t){const{bookmarks:o}=this.viewModel;if(!o)return;const e=t.toArray();o.sort(((t,o)=>{const r=e.indexOf(t.uid),i=e.indexOf(o.uid);return r>i?1:r<i?-1:0}))},n._destroySortable=function(){const{_sortable:t}=this;t&&t.destroy(),this._sortable=null},n._endAddBookmark=function(){this._focusAddBookmarkButton=!0,this.endAddBookmark()},n._bookmarksInitialized=function(){const t="bookmarks-init",{_handles:o}=this;o.remove(t),o.add(i.on(this,"viewModel.bookmarks","change",(()=>this._bookmarksChanged())),t)},n._bookmarksChanged=function(){const t="bookmarks-change",{bookmarks:o}=this.viewModel,{_handles:e}=this;e.remove(t);const r=o.map((t=>i.watch(t,["active","name","thumbnail.url"],(()=>this.scheduleRender()))));e.add(r,t),this.scheduleRender()},n._showEditBookmarkForm=function(t){const o=t.currentTarget["data-bookmark"];this._focusEditInputBox=!0,this._userState=new m({bookmark:o,state:"edit"}),this.viewModel.goTo(o),this.scheduleRender()},n._closeUrlEditBookmarkForm=function(){this._focusEditInputBox=!0,this._userState.state="edit"},n._closeEditBookmarkForm=function(){this._userState=null},n._addBookmarkSubmit=function(t){t.preventDefault();const{_addInputNode:o,_userState:e}=this,r=o&&o.value.trim();r?(e.loading=!0,this.viewModel.createBookmark().then((t=>{t.name=r,this.viewModel.bookmarks.add(t),this._endAddBookmark()}))):e.validationState="name-required"},n._editBookmarkAndClose=function(){var o=t._asyncToGenerator((function*(t,o){yield this.viewModel.editBookmark(t,o),this._closeEditBookmarkForm()}));function e(t,e){return o.apply(this,arguments)}return e}(),n._editBookmarkSubmit=function(t){t.preventDefault();const{_editInputNode:o,_userState:e}=this,r=o&&o.value.trim();r?(e.bookmark.name=r,e.bookmark.thumbnail=e.editedBookmark.thumbnail,this._editBookmarkAndClose(e.bookmark,{takeScreenshot:!1})):e.validationState="name-required"},n._storeAddBookmarkButton=function(t){this._addBookmarkButtonNode=t,this._focusAddBookmark()},n._storeEditInput=function(t){this._editInputNode=t,this._focusEditInput()},n._storeAddInput=function(t){this._addInputNode=t,this._focusAddInput()},n._storeUrlEditInput=function(t){this._urlEditInputNode=t,this._focusUrlEditInput()},n._focusUrlEditInput=function(){this._urlEditInputNode&&this._focusUrlEditInputBox&&(this._focusUrlEditInputBox=!1,this._urlEditInputNode.focus())},n._focusAddInput=function(){this._addInputNode&&this._focusAddInputBox&&(this._focusAddInputBox=!1,this._addInputNode.focus())},n._focusAddBookmark=function(){this._addBookmarkButtonNode&&this._focusAddBookmarkButton&&(this._focusAddBookmarkButton=!1,this._addBookmarkButtonNode.focus())},n._focusEditInput=function(){this._editInputNode&&this._focusEditInputBox&&(this._focusEditInputBox=!1,this._editInputNode.focus())},n._deleteBookmark=function(t){const o=t.currentTarget["data-bookmark"];this.viewModel.bookmarks.remove(o)},n._goToBookmark=function(t){const o=t.currentTarget["data-bookmark"];this.endAddBookmark(),this._closeEditBookmarkForm(),this.viewModel.goTo(o)},n._refreshThumbnail=function(){var o=t._asyncToGenerator((function*(){const{_userState:t,_editMenu:o,viewModel:e}=this;t.validationState=void 0,yield e.editBookmark(this._userState.editedBookmark,{takeScreenshot:!0,captureViewpoint:!1,captureRotation:!1,captureScale:!1}),o.open=!1,this._focusEditInputBox=!0,this.scheduleRender()}));function e(){return o.apply(this,arguments)}return e}(),n._removeThumbnail=function(){const{_userState:t,_editMenu:o}=this;t.editedBookmark.thumbnail=null,t.validationState=void 0,o.open=!1,this._focusEditInputBox=!0,this.scheduleRender()},n._startUseImageUrl=function(){this._userState.state="edit-thumbnail",this._editMenu.open=!1,this._focusUrlEditInputBox=!0,this.scheduleRender()},n._editBookmarkUrlSubmit=function(t){t.preventDefault();const{_urlEditInputNode:o,_userState:e}=this,r=o.value;A.test(r)?(r&&(e.editedBookmark.thumbnail=new k({url:r})),this._closeUrlEditBookmarkForm()):e.validationState="absolute-url-required"},t._createClass(s,[{key:"_editMenuItems",get:function(){var t,o;const{messages:e,_userState:r}=this,i=null==r||null==(t=r.editedBookmark)||null==(o=t.thumbnail)?void 0:o.url;return[new b({label:null==e?void 0:e.menu.refreshThumbnail,iconClass:S.iconRefresh,clickFunction:()=>this._refreshThumbnail()}),new b({label:A.test(i)?null==e?void 0:e.menu.editImageUrl:null==e?void 0:e.menu.useImageUrl,iconClass:S.iconLink,clickFunction:()=>this._startUseImageUrl()}),i?new b({label:null==e?void 0:e.menu.removeThumbnail,iconClass:S.iconRemove,clickFunction:()=>this._removeThumbnail()}):null].filter(Boolean)}},{key:"_editMenu",get:function(){const{_editMenuItems:t,messages:o}=this,e=this._get("_editMenu");e&&e.destroy();const r=new _({iconClass:S.iconHandleHorizontal,label:null==o?void 0:o.menu.label});return r.items=t,r}}]),s}(c);return o.__decorate([l.property({type:m})],C.prototype,"_userState",void 0),o.__decorate([l.property({readOnly:!0})],C.prototype,"_editMenuItems",null),o.__decorate([l.property({readOnly:!0})],C.prototype,"_editMenu",null),o.__decorate([s.aliasOf("viewModel.defaultCreateOptions")],C.prototype,"defaultCreateOptions",void 0),o.__decorate([s.aliasOf("viewModel.defaultEditOptions")],C.prototype,"defaultEditOptions",void 0),o.__decorate([s.aliasOf("viewModel.bookmarks")],C.prototype,"bookmarks",void 0),o.__decorate([l.property()],C.prototype,"disabled",void 0),o.__decorate([l.property()],C.prototype,"editingEnabled",void 0),o.__decorate([l.property()],C.prototype,"headingLevel",void 0),o.__decorate([s.aliasOf("viewModel.goToOverride")],C.prototype,"goToOverride",void 0),o.__decorate([l.property()],C.prototype,"iconClass",void 0),o.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],C.prototype,"label",void 0),o.__decorate([l.property(),B.messageBundle("esri/widgets/Bookmarks/t9n/Bookmarks")],C.prototype,"messages",void 0),o.__decorate([l.property(),B.messageBundle("esri/t9n/common")],C.prototype,"messagesCommon",void 0),o.__decorate([l.property(),B.messageBundle("esri/core/t9n/Units")],C.prototype,"messagesUnits",void 0),o.__decorate([l.property()],C.prototype,"uiStrings",void 0),o.__decorate([s.aliasOf("viewModel.view")],C.prototype,"view",void 0),o.__decorate([l.property({type:h}),f.vmEvent(["select-bookmark","bookmark-edit","bookmark-select"])],C.prototype,"viewModel",void 0),o.__decorate([l.property()],C.prototype,"visibleElements",void 0),o.__decorate([a.cast("visibleElements")],C.prototype,"castVisibleElements",null),o.__decorate([l.property()],C.prototype,"endAddBookmark",null),o.__decorate([l.property()],C.prototype,"startAddBookmark",null),C=o.__decorate([u.subclass(U)],C),C}));
