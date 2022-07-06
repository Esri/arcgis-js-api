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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/query","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","../../conversion/ConversionUtil","esri/dijit/geoenrichment/infographicPanels/Prizm5","dojo/text!../../../../themes/common/images/upDown_down.svg","dojo/text!../../../../themes/common/images/upDown_up.svg","dojo/text!../../../../themes/common/images/acrobat.svg"],(function(e,t,o,i,r,n,l,a,d,s){return e(l,{documentStyleProvider:null,infographicJson:null,_themeAddedFlag:!1,_needStyleArrows:null,_needStyleHyperlink:!1,_updateUI:function(){if(this.inherited(arguments),!this._themeAddedFlag){var e=this.parent.id,o="",l=this.infographicJson.style;l.backgroundColor&&(this.ui.domNode.style.backgroundColor=l.backgroundColor);var a,d=l.tableBorderColor||l.backgroundColor;if(d&&(m(".Prizm5_LifeStyle td","border-color:"+d),m(".Prizm5_Details_Table","border-color:"+d)),l.titleStyle&&m(".BaseWidget_Title",h(l.titleStyle)),l.tableBackgroundColor&&m(".Prizm5_Main_Table","background-color:"+l.tableBackgroundColor),l.backgroundColor||l.tableBackgroundColor)[l.tableBackgroundColor,this.ui.domNode.style.backgroundColor,this.documentStyleProvider.backgroundColor].some((function(e){if(e&&!i.isTransparent(e))return a=e,!0})),a&&m(".Prizm5_LifeStyle:hover","background-color:"+i.getHighlightColor(a,{method:"darker"}).toCss());if(l.textStyle){var s=h(l.textStyle);m(".Prizm5_Main_Label",s),m(".Prizm5_Main_Pct_Value",s);var c=t.mixin({},l.textStyle);delete c.fontSize,m(".Prizm5_Details_Label",h(c)),c.color&&(this._needStyleArrows=!0,m(".Prizm5_Main_Arrow svg *","--upDown-stroke:"+c.color))}if(l.subtextStyle){var _=h(l.subtextStyle);m(".Prizm5_Main_Value",_),m(".Prizm5_Main_Pct_Label",_);var u=t.mixin({},l.subtextStyle);delete u.fontSize,m(".Prizm5_Details_Label + div",h(u)),m(".Prizm5_Details_Image div:nth-child(2)",h(u))}l.hyperlinkTextStyle&&(l.hyperlinkTextStyle.color&&(this._needStyleHyperlink=!0,m(".Prizm5_Details_LinkIcon svg *","--acrobat-stroke:"+l.hyperlinkTextStyle.color)),m(".Prizm5_Details_Link.Wizard_Link",h(l.hyperlinkTextStyle)),m(".Prizm5_Details_Link.Wizard_Link:hover","text-decoration:underline")),l.detailsValueBorderColor&&m(".Prizm5_Details_FieldCellContent","border-color:"+l.detailsValueBorderColor),o&&r.addStyle([o],e),this._themeAddedFlag=!0,this._updateIcons()}function h(e){return n.composeStyleString(e,{addPx:{"font-size":1}})}function m(t,i){o+="#"+e+" "+t+" { "+i+(";"===i.charAt(i.length-1)?"":";")+" } "}},_toMainView:function(){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_toDetailView:function(){this.inherited(arguments),this._updateIcons(),this.onExpandedStateChanged()},_updateIcons:function(){if(this._needStyleArrows)for(var e=o(".Prizm5_Main_Arrow",this.ui.domNode),t=0;t<e.length;t++){var i=e[t].children[0];i.style.backgroundImage="none",i.style.backgroundPosition="center",i.innerHTML=this._openRowIndex===t?d:a}if(this._needStyleHyperlink){var r=o(".Prizm5_Details_LinkIcon",this.ui.domNode);for(t=0;t<r.length;t++){var n=r[t];n.style.backgroundImage="none",n.innerHTML=s}}},onExpandedStateChanged:function(){}})}));