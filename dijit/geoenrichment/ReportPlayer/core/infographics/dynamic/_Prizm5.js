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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/query","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","../../conversion/ConversionUtil","esri/dijit/geoenrichment/infographicPanels/Prizm5","dojo/text!../../../../themes/common/images/upDown_down.svg","dojo/text!../../../../themes/common/images/upDown_up.svg","dojo/text!../../../../themes/common/images/acrobat.svg"],function(e,t,i,o,r,n,l,a,d,s){return e(l,{documentStyleProvider:null,titleStyle:null,backgroundColor:null,tableBackgroundColor:null,tableBorderColor:null,textStyle:null,subtextStyle:null,hyperlinkTextStyle:null,detailsValueBorderColor:null,_themeAddedFlag:!1,_needStyleArrows:null,_needStyleHyperlink:!1,_updateUI:function(){function e(e){return n.composeStyleString(e,{addPx:{"font-size":1}})}function i(e,t){a+="#"+l+" "+e+" { "+t+(";"===t.charAt(t.length-1)?"":";")+" } "}if(this.inherited(arguments),!this._themeAddedFlag){var l=this.parent.id,a="";this.backgroundColor&&(this.ui.domNode.style.backgroundColor=this.backgroundColor);var d=this.tableBorderColor||this.backgroundColor;if(d&&(i(".Prizm5_LifeStyle td","border-color:"+d),i(".Prizm5_Details_Table","border-color:"+d)),this.titleStyle&&i(".BaseWidget_Title",e(this.titleStyle)),this.tableBackgroundColor&&i(".Prizm5_Main_Table","background-color:"+this.tableBackgroundColor),this.backgroundColor||this.tableBackgroundColor){var s;[this.tableBackgroundColor,this.ui.domNode.style.backgroundColor,this.documentStyleProvider.backgroundColor].some(function(e){if(e&&!o.isTransparent(e))return s=e,!0}),s&&i(".Prizm5_LifeStyle:hover","background-color:"+o.getHighlightColor(s,{method:"darker"}).toCss())}if(this.textStyle){var h=e(this.textStyle);i(".Prizm5_Main_Label",h),i(".Prizm5_Main_Pct_Value",h);var u=t.mixin({},this.textStyle);delete u.fontSize,i(".Prizm5_Details_Label",e(u)),u.color&&(this._needStyleArrows=!0,i(".Prizm5_Main_Arrow svg *","--upDown-stroke:"+u.color))}if(this.subtextStyle){var c=e(this.subtextStyle);i(".Prizm5_Main_Value",c),i(".Prizm5_Main_Pct_Label",c);var _=t.mixin({},this.subtextStyle);delete _.fontSize,i(".Prizm5_Details_Label + div",e(_)),i(".Prizm5_Details_Image div:nth-child(2)",e(_))}this.hyperlinkTextStyle&&(this.hyperlinkTextStyle.color&&(this._needStyleHyperlink=!0,i(".Prizm5_Details_LinkIcon svg *","--acrobat-stroke:"+this.hyperlinkTextStyle.color)),i(".Prizm5_Details_Link.Wizard_Link",e(this.hyperlinkTextStyle)),i(".Prizm5_Details_Link.Wizard_Link:hover","text-decoration:underline")),this.detailsValueBorderColor&&i(".Prizm5_Details_FieldCellContent","border-color:"+this.detailsValueBorderColor),a&&r.addStyle([a],l),this._themeAddedFlag=!0,this._updateIcons()}},_toMainView:function(){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_toDetailView:function(){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_updateIcons:function(){if(this._needStyleArrows)for(var e=i(".Prizm5_Main_Arrow",this.ui.domNode),t=0;t<e.length;t++){var o=e[t].children[0];o.style.backgroundImage="none",o.style.backgroundPosition="center",o.innerHTML=this._openRowIndex===t?d:a}if(this._needStyleHyperlink)for(var r=i(".Prizm5_Details_LinkIcon",this.ui.domNode),t=0;t<r.length;t++){var n=r[t];n.style.backgroundImage="none",n.innerHTML=s}},onExpandedStateChanged:function(){}})});