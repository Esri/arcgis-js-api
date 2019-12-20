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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/query","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","../../conversion/ConversionUtil","esri/dijit/geoenrichment/infographicPanels/Tapestry","dojo/text!../../../../themes/common/images/upDown_down.svg","dojo/text!../../../../themes/common/images/upDown_up.svg","dojo/text!../../../../themes/common/images/acrobat.svg"],function(e,t,o,i,r,n,l,a,s,d){return e(l,{documentStyleProvider:null,titleStyle:null,backgroundColor:null,tableBackgroundColor:null,tableBorderColor:null,textStyle:null,subtextStyle:null,hyperlinkTextStyle:null,detailsValueBorderColor:null,_themeAddedFlag:!1,_needStyleArrows:!1,_needStyleHyperlink:!1,_updateUI:function(){function e(e){return n.composeStyleString(e,{addPx:{"font-size":1}})}function o(e,t){a+="#"+l+" "+e+" { "+t+(";"===t.charAt(t.length-1)?"":";")+" } "}if(this.inherited(arguments),!this._themeAddedFlag){var l=this.parent.id,a="";this.backgroundColor&&(this.ui.domNode.style.backgroundColor=this.backgroundColor);var s=this.tableBorderColor||this.backgroundColor;if(s&&(o(".Tapestry_Main_Button","border-color:"+s),o(".Tapestry_Details_Table","border-color:"+s)),this.titleStyle&&o(".BaseWidget_Title",e(this.titleStyle)),this.tableBackgroundColor&&o(".Tapestry_Main_Table","background-color:"+this.tableBackgroundColor),this.backgroundColor||this.tableBackgroundColor){var d;[this.tableBackgroundColor,this.ui.domNode.style.backgroundColor,this.documentStyleProvider.backgroundColor].some(function(e){if(e&&!i.isTransparent(e))return d=e,!0}),d&&o(".Tapestry_LifeMode:hover","background-color:"+i.getHighlightColor(d,{method:"darker"}).toCss())}if(this.textStyle){var h=e(this.textStyle);o(".Tapestry_Main_Label",h),o(".Tapestry_Main_Pct_Value",h);var u=t.mixin({},this.textStyle);delete u.fontSize,o(".Tapestry_Details_Label",e(u)),u.color&&(this._needStyleArrows=!0,o(".Tapestry_Main_Arrow svg *","--upDown-stroke:"+u.color))}if(this.subtextStyle){var c=e(this.subtextStyle);o(".Tapestry_Main_Value",c),o(".Tapestry_Main_Pct_Label",c);var y=t.mixin({},this.subtextStyle);delete y.fontSize,o(".Tapestry_Details_Label + div",e(y)),o(".Tapestry_Details_Image div:nth-child(2)",e(y))}this.detailsValueBorderColor&&o(".Tapestry_Details_FieldCellContent","border-color:"+this.detailsValueBorderColor),this.hyperlinkTextStyle&&(this.hyperlinkTextStyle.color&&(this._needStyleHyperlink=!0,o(".Tapestry_Details_LinkIcon svg *","--acrobat-stroke:"+this.hyperlinkTextStyle.color)),o(".Tapestry_Details_Link.Wizard_Link",e(this.hyperlinkTextStyle)),o(".Tapestry_Details_Link.Wizard_Link:hover","text-decoration:underline")),a&&r.addStyle([a],l),this._themeAddedFlag=!0,this._updateIcons()}},_toMainView:function(){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_toDetailView:function(e){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_updateIcons:function(){if(this._needStyleArrows)for(var e=o(".Tapestry_Main_Arrow",this.ui.domNode),t=0;t<e.length;t++){var i=e[t].children[0];i.style.backgroundImage="none",i.style.backgroundPosition="center",i.innerHTML=this._openRowIndex===t?s:a}if(this._needStyleHyperlink)for(var r=o(".Tapestry_Details_LinkIcon",this.ui.domNode),t=0;t<r.length;t++){var n=r[t];n.style.backgroundImage="none",n.innerHTML=d}},onExpandedStateChanged:function(){}})});