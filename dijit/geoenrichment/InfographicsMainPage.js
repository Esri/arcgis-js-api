// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["require","../../declare","dojo/_base/lang","dojo/on","dojo/dom-construct","dojo/dom-class","dojo/Deferred","./_WizardPage","dojo/i18n!../../nls/jsapi","dojo/text!./templates/InfographicsMainPage.html","../../tasks/geoenrichment/GeoenrichmentTask","./config","./_Invoke","./CheckList","./theme","./DataBrowser/autoTooltip","dijit/layout/ContentPane","dijit/form/Select","./BufferOptions"],function(e,t,i,n,s,o,a,r,h,c,l,d,u,g,f,v){h=h.geoenrichment.dijit.InfographicsMainPage;var m="_",_=t([g],{renderRow:function(e,t){var i=e.item,n=s.create("div",{"class":"InfographicsMainPage_Item"},this.itemsDiv);s.create("div",{"class":"dijit dijitInline dijitCheckBox InfographicsMainPage_ItemCheck"},n);var o=s.create("div",{"class":"InfographicsMainPage_ItemLabel TrimWithEllipses",innerHTML:i.title},n);return s.create("div",{"class":"InfographicsMainPage_ItemImage InfographicsMainPage_ItemImage_"+i.type},o),n}}),p=t("esri.dijit.geoenrichment.InfographicsMainPage",[r,u],{templateString:c,nls:h,options:null,countryID:"US",_varList:null,_eventMap:{"add-variables":!0,ok:!0,cancel:!0},constructor:function(){this._task=new l(d.server),this._task.token=d.token},buildRendering:function(){this.inherited(arguments);var e=i.hitch(this,this.invoke,"_onSelect"),t=this._varList=new _({},this.varListNode);t.on("dgrid-select",e),t.on("dgrid-deselect",e),v(this.varListNode)},startup:function(){this._started||(this.inherited(arguments),this.countrySelect.addOption({value:m,label:h.loading}),this.countrySelect.set("disabled",!0),this.showProgress(this._task.getAvailableCountries(),"_onCountriesResponse"))},_onCountriesResponse:function(e){this.countrySelect.set("disabled",!1);for(var t=[],i=0;i<e.length;i++){var n=e[i].id,s=e[i].name;t.push({label:s,value:n})}this.countrySelect.set("options",t),this.countrySelect.set("value",this.countryID)},_setOptionsAttr:function(e){this._set("options",e),this.themeSelect.set("value",e.theme),this.bufferOptions.set("buffer",e.studyAreaOptions),this._renderItems()},_onCountryChanged:function(){this.countryID=this.countrySelect.get("value"),this._renderItems()},_onThemeChange:function(e,t){var i=this.options.theme,n=this.themeSelect.get("value");f.change(this.varListNode,i,n),this.options.theme=n},_renderItems:function(){var e=this.countrySelect.get("value");e&&e!=m&&this.showProgress(this.options.getItems(e),"_onGetItems")},_onGetItems:function(e){var t,i=[],n=[];for(t=0;t<e.length;t++){var s=e[t],o=t.toString();i.push({id:o,item:s}),s.isVisible&&n.push(o)}for(this._varList.set("items",i),this._varList.clearSelection(),t=0;t<n.length;t++)this._varList.select(n[t]);this.addMoreNode.style.display="",this.resize()},_onSelect:function(){var e=!1,t=this._varList.get("selection");for(var i in t)if(t[i]){e=!0;break}this.okButton.disabled=!e},_onBufferChange:function(){this.options.studyAreaOptions=this.bufferOptions.get("buffer")},_onAddVariables:function(){this.onAddVariables()},onAddVariables:function(){},_onOK:function(){for(var e=this._varList,t=e.get("store").data,i=0;i<t.length;i++)t[i].item.isVisible=e.isSelected(t[i]);this.onOK()},onOK:function(){},_onCancel:function(){this.onCancel()},onCancel:function(){}});return p});