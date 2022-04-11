// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/query","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","../../conversion/ConversionUtil","esri/dijit/geoenrichment/infographicPanels/Tapestry","dojo/text!../../../../themes/common/images/upDown_down.svg","dojo/text!../../../../themes/common/images/upDown_up.svg","dojo/text!../../../../themes/common/images/acrobat.svg"],(function(e,t,o,r,i,n,a,l,s,d){return e(a,{documentStyleProvider:null,infographicJson:null,_themeAddedFlag:!1,_needStyleArrows:!1,_needStyleHyperlink:!1,_updateUI:function(){if(this.inherited(arguments),!this._themeAddedFlag){var e=this.parent.id,o="",a=this.infographicJson.style;a.backgroundColor&&(this.ui.domNode.style.backgroundColor=a.backgroundColor);var l,s=a.tableBorderColor||a.backgroundColor;if(s&&(y(".Tapestry_Main_Button","border-color:"+s),y(".Tapestry_Details_Table","border-color:"+s)),a.titleStyle&&y(".BaseWidget_Title",u(a.titleStyle)),a.tableBackgroundColor&&y(".Tapestry_Main_Table","background-color:"+a.tableBackgroundColor),this.backgroundColor||a.tableBackgroundColor)[a.tableBackgroundColor,this.ui.domNode.style.backgroundColor,this.documentStyleProvider.backgroundColor].some((function(e){if(e&&!r.isTransparent(e))return l=e,!0})),l&&y(".Tapestry_LifeMode:hover","background-color:"+r.getHighlightColor(l,{method:"darker"}).toCss());if(a.textStyle){var d=u(a.textStyle);y(".Tapestry_Main_Label",d),y(".Tapestry_Main_Pct_Value",d);var c=t.mixin({},a.textStyle);delete c.fontSize,y(".Tapestry_Details_Label",u(c)),c.color&&(this._needStyleArrows=!0,y(".Tapestry_Main_Arrow svg *","--upDown-stroke:"+c.color))}if(a.subtextStyle){var _=u(a.subtextStyle);y(".Tapestry_Main_Value",_),y(".Tapestry_Main_Pct_Label",_);var h=t.mixin({},a.subtextStyle);delete h.fontSize,y(".Tapestry_Details_Label + div",u(h)),y(".Tapestry_Details_Image div:nth-child(2)",u(h))}a.detailsValueBorderColor&&y(".Tapestry_Details_FieldCellContent","border-color:"+a.detailsValueBorderColor),a.hyperlinkTextStyle&&(a.hyperlinkTextStyle.color&&(this._needStyleHyperlink=!0,y(".Tapestry_Details_LinkIcon svg *","--acrobat-stroke:"+a.hyperlinkTextStyle.color)),y(".Tapestry_Details_Link.Wizard_Link",u(a.hyperlinkTextStyle)),y(".Tapestry_Details_Link.Wizard_Link:hover","text-decoration:underline")),o&&i.addStyle([o],e),this._themeAddedFlag=!0,this._updateIcons()}function u(e){return n.composeStyleString(e,{addPx:{"font-size":1}})}function y(t,r){o+="#"+e+" "+t+" { "+r+(";"===r.charAt(r.length-1)?"":";")+" } "}},_toMainView:function(){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_toDetailView:function(){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_updateIcons:function(){if(this._needStyleArrows)for(var e=o(".Tapestry_Main_Arrow",this.ui.domNode),t=0;t<e.length;t++){var r=e[t].children[0];r.style.backgroundImage="none",r.style.backgroundPosition="center",r.innerHTML=this._openRowIndex===t?s:l}if(this._needStyleHyperlink){var i=o(".Tapestry_Details_LinkIcon",this.ui.domNode);for(t=0;t<i.length;t++){var n=i[t];n.style.backgroundImage="none",n.innerHTML=d}}},onExpandedStateChanged:function(){}})}));