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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["esri/declare","dojo/on","dojo/dom-construct","dijit/layout/ContentPane"],(function(t,o,n,d){return t(null,{buttonsNode:null,addButtons:function(t){if(!this.buttonsNode){for(var e,i=this.layoutGrid.getChildren(),r=0;r<i.length;r++)2==i[r].row&&(e=i[r]);e||(e=new d({row:2,class:"Wizard_BottomPane"}),this.layoutGrid.addChild(e)),this.buttonsNode=n.create("div",{class:"Wizard_Buttons"},e.domNode)}var a={};for(r=0;r<t.length;r++){var l=t[r],s=n.create("button",{class:"Wizard_Button",innerHTML:l.label||""},this.buttonsNode);l.id&&(a[l.id]=s),l.onClick&&o(s,"click",l.onClick)}return a}})}));