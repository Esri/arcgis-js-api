// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["../../../declare","dojo/_base/lang","dojo/dom-class","dojo/when","dojox/mvc/Templated","dojo/text!./templates/Breadcrumb.html"],function(t,n,e,s,i,o){return t([i],{templateString:o,flyAnim:null,selectCategory:function(t){this._hideCategory(),t&&s(this.flyAnim.progress,n.hitch(this,this._showCategory,t)),this._hideDataCollection()},_hideCategory:function(){this.dcIcon.className="",this.dcIcon.style.display="none",this.connect1.style.display="none",this.angConnect1.style.display="none",this.connect1andHalf.style.display="none"},_showCategory:function(t){this.dcIcon.className="Breadcrumb_DataCollections DataCategoriesPage_Item_"+t.id.replace(/ /g,"_"),this.dcIcon.style.display="",this.connect1.style.display="",this.angConnect1.style.display="",this.connect1andHalf.style.display="none"},selectDataCollection:function(t,e){this.angConnect1.style.display="none",this._hideDataCollection(),t&&s(this.flyAnim.progress,n.hitch(this,this._showDataCollection,t,e))},_hideDataCollection:function(){this.varsNode.style.display="none",this.connect2.style.display="none",this.angConnect2.style.display="none",this.connect1andHalf.style.display="none"},_showDataCollection:function(t,n){n||(this.dcIcon.style.display="none",this.connect1.style.display="",this.connect1andHalf.style.display=""),this.varsNode.style.display="",this.varsLabel.innerHTML=t,this.connect2.style.display="",this.angConnect2.style.display="",e.add(this.dcIcon,"DataBrowser_Clickable")},_onCategoriesClick:function(){this.onCategoriesClick()},onCategoriesClick:function(){},_onDCsClick:function(){this.onDCsClick()},onDCsClick:function(){}})});