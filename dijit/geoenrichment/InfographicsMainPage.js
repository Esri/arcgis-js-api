// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/dom-construct","./_WizardPage","dojo/i18n!../../nls/jsapi","dojo/text!./templates/InfographicsMainPage.html","../../tasks/geoenrichment/GeoenrichmentTask","./config","./_Invoke","./CheckList","./theme","esri/dijit/geoenrichment/utils/TooltipUtil","dijit/layout/ContentPane","dijit/form/Select","./BufferOptions"],function(t,e,i,n,s,o,a,r,h,c,l,d){s=s.geoenrichment.dijit.InfographicsMainPage;var u=t([c],{renderRow:function(t,e){var n=t.item,s=i.create("div",{class:"InfographicsMainPage_Item"},this.itemsDiv);i.create("div",{class:"dijit dijitInline dijitCheckBox InfographicsMainPage_ItemCheck"},s);var o=i.create("div",{class:"InfographicsMainPage_ItemLabel TrimWithEllipses",innerHTML:n.title},s);return i.create("div",{class:"InfographicsMainPage_ItemImage InfographicsMainPage_ItemImage_"+n.type},o),s}});return t("esri.dijit.geoenrichment.InfographicsMainPage",[n,h],{templateString:o,nls:s,options:null,countryID:"US",_varList:null,_eventMap:{"add-variables":!0,ok:!0,cancel:!0},constructor:function(){this._task=new a(r.server),this._task.token=r.token},buildRendering:function(){this.inherited(arguments);var t=e.hitch(this,this.invoke,"_onSelect"),i=this._varList=new u({},this.varListNode);i.on("dgrid-select",t),i.on("dgrid-deselect",t),d.autoTooltip(this.varListNode)},startup:function(){this._started||(this.inherited(arguments),this.countrySelect.addOption({value:"_",label:s.loading}),this.countrySelect.set("disabled",!0),this.showProgress(this._task.getAvailableCountries(),"_onCountriesResponse"))},_onCountriesResponse:function(t){this.countrySelect.set("disabled",!1);for(var e=[],i=0;i<t.length;i++){var n=t[i].id,s=t[i].name;e.push({label:s,value:n})}this.countrySelect.set("options",e),this.countrySelect.set("value",this.countryID)},_setOptionsAttr:function(t){this._set("options",t),this.themeSelect.set("value",t.theme),this.bufferOptions.set("buffer",t.studyAreaOptions),this._renderItems()},_onCountryChanged:function(){this.countryID=this.countrySelect.get("value"),this._renderItems()},_onThemeChange:function(t,e){var i=this.options.theme,n=this.themeSelect.get("value");l.change(this.varListNode,i,n),this.options.theme=n},_renderItems:function(){var t=this.countrySelect.get("value");t&&"_"!=t&&this.showProgress(this.options.getItems(t),"_onGetItems")},_onGetItems:function(t){var e,i=[],n=[];for(e=0;e<t.length;e++){var s=t[e],o=e.toString();i.push({id:o,item:s}),s.isVisible&&n.push(o)}for(this._varList.set("items",i),this._varList.clearSelection(),e=0;e<n.length;e++)this._varList.select(n[e]);this.addMoreNode.style.display="",this.resize()},_onSelect:function(){var t=!1,e=this._varList.get("selection");for(var i in e)if(e[i]){t=!0;break}this.okButton.disabled=!t},_onBufferChange:function(){this.options.studyAreaOptions=this.bufferOptions.get("buffer")},_onAddVariables:function(){this.onAddVariables()},onAddVariables:function(){},_onOK:function(){for(var t=this._varList,e=t.get("store").data,i=0;i<e.length;i++)e[i].item.isVisible=t.isSelected(e[i]);this.onOK()},onOK:function(){},_onCancel:function(){this.onCancel()},onCancel:function(){}})});