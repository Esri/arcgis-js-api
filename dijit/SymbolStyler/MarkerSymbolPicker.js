// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["../../arcgis/Portal","../../domUtils","../../kernel","../../promiseList","../../request","../../symbols/jsonUtils","../_EventedWidget","../_Tooltip","../editing/TemplatePicker","../util/busyIndicator","./symbolUtil","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/Deferred","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/promise/all","dojo/sniff","dojo/store/Memory","dojo/store/Observable","dojox/gfx","dojo/i18n!../../nls/jsapi","dojo/text!./templates/MarkerSymbolPicker.html","dijit/form/Select"],(function(e,t,o,s,i,r,n,l,a,m,c,h,d,y,u,p,_,S,g,b,f,I,v,k,C,T,w,M){var N={dataUrl:null,id:"customTypes",keywords:"custom symbols",name:w.widgets.symbolEditor.customImages,title:w.widgets.symbolEditor.customImages},j=u("esri.dijit.SymbolStyler.MarkerSymbolPicker",[n,h,d,l],{baseClass:"esriMarkerSymbolPicker",templateString:M,labels:w.widgets.symbolEditor,css:{noSymbols:"esriNoSymbols",defaultSymbols:"esriDefaultSymbols",loadingIndicator:"esriLoadingIndicator",loading:"esriLoading",typeInput:"esriTypeInput",container:"esriContainer",overlay:"esriOverlay",content:"esriContent",centerContainer:"esriCenterContainer",table:"esriTable",tableCell:"esriTableCell",centerBlock:"esriCenterBlock",customSelected:"esriMarkerSymbolPicker--custom-selected"},portal:"http://arcgis.com/",displayMode:"portal",_symbolTypesStore:null,_symbolItemStore:null,_noSymbolsOverlay:null,_templatePicker:null,_portal:null,_portalLoadTimeoutInMs:3e3,_loadingIndicator:null,_storageItemKeyBase:"markerSymbolPicker/symbol",_defaultSimpleMarkerSymbols:[{name:"Circle",type:"esriSMS",style:"esriSMSCircle",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Square",type:"esriSMS",style:"esriSMSSquare",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Diamond",type:"esriSMS",style:"esriSMSDiamond",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Cross",type:"esriSMS",style:"esriSMSCross",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"X",type:"esriSMS",style:"esriSMSX",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}}],postCreate:function(){this.inherited(arguments),this._symbolTypesStore=new C(new k),this._symbolItemStore=new k,this.dap_markerCategoryInput.set({labelAttr:"name",sortByLabel:!1}),this.createTooltip(this.dap_markerCategoryInput,this.labels.selectCategoryTooltip)},_toggleCustomItemCss:function(){g.toggle(this.domNode,this.css.customSelected,this.dap_markerCategoryInput.get("value")===N.id)},addCustomImageSymbol:function(e){var t=r.fromJson(e.toJson()),o=JSON.parse(localStorage.getItem(this._getCustomItemKey()))||[],s=t.url.split("/").pop();y.some(o,(function(e){return e.url===t.url}))||(t.type="esriPMS",t.name=s,o.push(t),localStorage.setItem(this._getCustomItemKey(),JSON.stringify(o)),this.dap_markerCategoryInput.set("value",N.id),this.clearSelection(),this._fetchSymbols(N.id))},_updateTemplatePickerIfHeightless:function(){0===f.get(this._templatePicker.domNode,"height")&&this._templatePicker.update()},startup:function(){this.inherited(arguments);var e=new a({rows:"auto",columns:6,items:[],emptyMessage:""},this.dap_templatePicker);e.startup(),this._templatePicker=e,e.on("selection-change",_.hitch(this,(function(){var t,o=e.getSelected();o&&(t=c.cloneSymbol(o.item.symbol),this.emit("symbol-select",{selection:t}))}))),this._loadingIndicator=m.create(this.dap_symbolViewport),this.own(this._loadingIndicator),this.dap_markerCategoryInput.on("change",_.hitch(this,(function(e){this.clearSelection(),this._toggleCustomItemCss(),this._fetchSymbols(e)}))),this._normalizeSymbolStorage(),this._loadStoredSymbolItems(),this._setUpSymbolCategories().then(_.hitch(this,this.updateDisplay))},_fetchSymbols:function(e){var t,o;this._templatePicker.items=[],(t=this._symbolItemStore.query({id:e})[0])&&(this._saveRecentItem(t),this._updateSymbolOptions(t.items),t.id!==N.id)||(o=this._symbolTypesStore.query({id:e}),this._showLoadingIndicator(),this._getSymbolListData(o).then(_.hitch(this,this._symbolItemsFromJson)).then(_.hitch(this,(function(t){var o,s={id:e,items:t};return this._symbolItemStore.put(s),this._saveRecentItem(s),(o=this._symbolTypesStore.query({defaultType:!0})[0])&&o.id===e&&this._saveDefaultItem(s),t}))).then(_.hitch(this,this._updateSymbolOptions)))},_saveRecentItem:function(e){var t={id:e.id,items:this._symbolItemsToJson(e.items)};sessionStorage.setItem(this._getRecentItemKey(),JSON.stringify(t))},_getRecentItemKey:function(){return this._toItemKey("/recent")},_toItemKey:function(e){return this._storageItemKeyBase+e},_getCustomItemKey:function(){return this._toItemKey("/custom")},_getDefaultItemKey:function(){return this._toItemKey("/default")},_getTypesItemKey:function(){return this._toItemKey("/types")},_getVersionItemKey:function(){return this._toItemKey("/version")},_saveDefaultItem:function(e){var t={id:e.id,items:this._symbolItemsToJson(e.items)};localStorage.setItem(this._getDefaultItemKey(),JSON.stringify(t))},_showNoSymbolsMessage:function(){this._hideLoadingIndicator(),g.add(this.domNode,this.css.noSymbols),this._placeNoSymbolsOverlay()},_placeNoSymbolsOverlay:function(){var e,t,o,s,i;this._noSymbolsOverlay||(i=this.css,e=b.create("div",{class:i.overlay}),s=b.create("div",{class:i.centerContainer+" "+i.table},e),o=b.create("div",{class:i.tableCell},s),t=b.create("div",{class:i.centerBlock},o),b.create("div",{class:i.content,innerHTML:this.labels.symbolLoadError},t),b.place(e,this.domNode),this._noSymbolsOverlay=e)},_getStorageVersionKey:function(){return o.version+"|"+p.locale},_normalizeSymbolStorage:function(){var e=localStorage.getItem(this._getVersionItemKey()),t=this._getStorageVersionKey();e!==t&&(localStorage.setItem(this._getVersionItemKey(),t),localStorage.removeItem(this._getTypesItemKey()),localStorage.removeItem(this._getDefaultItemKey()),sessionStorage.removeItem(this._getRecentItemKey()))},_loadStoredSymbolItems:function(){var e=this._loadDefaultSymbolItem(),t=this._loadRecentSymbolItem();e&&this._symbolItemStore.put(this._symbolItemsFromSymbolItemJson(e)),t&&this._symbolItemStore.put(this._symbolItemsFromSymbolItemJson(t))},_loadDefaultSymbolItem:function(){var e=localStorage.getItem(this._getDefaultItemKey());if(e)return JSON.parse(e)},_loadRecentSymbolItem:function(){var e=sessionStorage.getItem(this._getRecentItemKey());if(e)return JSON.parse(e)},_loadSymbolTypes:function(){var e=localStorage.getItem(this._getTypesItemKey());if(e)return JSON.parse(e)},_saveSymbolTypes:function(e){localStorage.setItem(this._getTypesItemKey(),JSON.stringify(e))},_symbolItemsFromSymbolItemJson:function(e){return e.items=y.map(e.items,(function(e){return{symbol:r.fromJson(e.symbol)}})),e},_fetchSymbolTypes:function(){var e=new S,t=this._loadSymbolTypes();return t?(e.resolve(t),e.promise):this._getSymbolListGroupId().then(_.hitch(this,this._getSymbolListItems)).then(_.hitch(this,(function(e){return this._saveSymbolTypes(e),e})))},_setUpSymbolCategories:function(){return this._showLoadingIndicator(),this._initPortal().then(_.hitch(this,this._fetchSymbolTypes)).then(_.hitch(this,this._injectCustomSymbolType)).then(_.hitch(this,this._setUpSymbolSelect),_.hitch(this,(function(){this._showNoSymbolsMessage()})))},_setUpSymbolSelect:function(e){var t,o,s=this._symbolTypesStore;s.setData(e),y.forEach(e,(function(e){e.defaultType&&(t=e.id)})),(o=this._loadRecentSymbolItem())&&s.query({id:o.id})[0]&&(t=o.id),this.dap_markerCategoryInput.set("store",s),this.dap_markerCategoryInput.set("value",t,!1),this._toggleCustomItemCss()},_injectCustomSymbolType:function(e){return e.push(N),e},_showLoadingIndicator:function(){v("ie")<=8?g.add(this.domNode,this.css.loading):this._loadingIndicator.show()},_hideLoadingIndicator:function(){v("ie")<=8?g.remove(this.domNode,this.css.loading):this._loadingIndicator.hide()},_initPortal:function(){var t,o=new S,s=this.portal||"http://arcgis.com/";return(t="string"==typeof s?new e.Portal(s):s.declaredClass?s:new e.Portal({self:s})).loaded?(this._portal=t,o.resolve(),o.promise):(this.own(t.on("load",_.hitch(this,(function(){this._portal=t,o.resolve()})))),setTimeout((function(){o.reject()}),this._portalLoadTimeoutInMs),o.promise)},_getSymbolListGroupId:function(){var e=new S;return this._portal.queryGroups({q:this._portal.symbolSetsGroupQuery}).then((function(t){var o=t.results[0];e.resolve(o.id)}),(function(){e.reject()})),e.promise},_getSymbolListItems:function(e){var t=new S,o=this._portal,s="group:"+e+' AND type:"Symbol Set"',i=[];return"vml"===T.renderer?s+=' AND -typekeywords:"by value"':s+=' AND (typekeywords:"by value" AND typekeywords:"marker")',o.queryItems({q:s,num:50,sortField:"title"}).then(_.hitch(this,(function(e){var o,s,r,n=e.results;y.forEach(n,(function(e){(o=e.typeKeywords.join(" ")).indexOf("marker")>-1&&(s=e.title,r={name:s,id:e.id,title:e.title,keywords:o,dataUrl:e.itemDataUrl},o.indexOf("default")>-1?(r.defaultType=!0,i.unshift(r)):i.push(r))}),this),i.length>0?t.resolve(i):t.reject()})),(function(){t.reject()})),t.promise},_getSymbolListData:function(e){var t=y.filter(e,(function(e){return e.dataUrl})),o=y.filter(e,(function(e){return e.id===N.id}))[0],r=I(y.map(t,(function(e){return i({url:e.dataUrl}).promise}))).then((function(e){return e[0]||[]})),n=this._getCustomItemKey(),l=o&&JSON.parse(localStorage.getItem(n))||[],a=s(l.map((function(e){return c.testImageUrl(e.url)}))).then((function(e){var t=l.filter((function(t,o){var s=!(e[o]instanceof Error);return s||console.log("removing custom image due to URL load failure:",t.url),s}));return t.length!==l.length&&localStorage.setItem(n,JSON.stringify(t)),t}));return I([r,a]).then((function(e){return[].concat(e[0],e[1])}))},_symbolItemsFromJson:function(e){return y.map(e,(function(e){return{symbol:r.fromJson(e)}}))},_symbolItemsToJson:function(e){return y.map(e,(function(e){return{symbol:e.symbol.toJson()}}))},_updateSymbolOptions:function(e){var t=this._templatePicker;t.items=e,t.update(),t.domNode.parentNode.scrollTop=0,this._hideLoadingIndicator()},_setDisplayModeAttr:function(e){this.displayMode!==e&&(this._set("displayMode",e),this.updateDisplay(e))},updateDisplay:function(){var e=this.dap_markerCategoryInput;this.clearSelection(),"portal"===this.displayMode?(this._fetchSymbols(e.value),t.show(e.domNode),g.remove(this.domNode,this.css.defaultSymbols)):"default"===this.displayMode&&(this._updateSymbolOptions(this._symbolItemsFromJson(this._defaultSimpleMarkerSymbols)),t.hide(e.domNode),g.add(this.domNode,this.css.defaultSymbols))},clearSelection:function(){this._templatePicker.clearSelection()},resetSelection:function(){var e=this.dap_markerCategoryInput,t=e.get("options");e.set("value",t[0]),this.clearSelection()}});return v("extend-esri")&&_.setObject("dijit.SymbolStyler.MarkerSymbolPicker",j,o),j}));