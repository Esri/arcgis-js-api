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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/on","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/NodeLabelEditor","dojo/i18n!esri/nls/jsapi"],(function(e,t,o,i,l,n){return n=n.filterDlg,{setTextEditing:function(d){d.__textEditH&&d.__textEditH.remove(),d.__textEditButton&&t.destroy(d.__textEditButton),d.__textEditH=e.once(d.domNode,"mouseover",(function(){var a=d.__textEditButton=t.create("div",{class:"dataDrilling_drillDataButton"},d.domNode);t.create("div",{class:"dijitInline esriGESpaceAfterBig esriGEEditButtonWhite"},a),t.create("div",{class:"dijitInline",innerHTML:n.edit},a).style.cssText="font-size:13px;font-family:Avenir Next;";var r=i.position(d.domNode);o.set(a,{left:"0px",top:"0px",width:r.w+"px",height:r.h+"px",lineHeight:r.h+"px"});var s=new l({onApply:function(e){i.show(a),d.parentGrid.setCellText(d,e)},onCancel:function(){i.show(a)}});e(a,"click",(function(){i.hide(a),s.editNodeLabel({node:d.valueLabel,overNode:d.domNode,initialText:d.get("value"),multiline:!0,box:{x:0,y:0,w:r.w,h:r.h},applyWhenClickedOutside:!0,textStyle:{color:i.getStyle(d.valueLabel,"color"),fontFamily:i.getStyle(d.valueLabel,"fontFamily"),fontSize:i.getStyle(d.valueLabel,"fontSize"),fontWeight:i.getStyle(d.valueLabel,"fontWeight"),fontStyle:i.getStyle(d.valueLabel,"fontStyle"),textDecoration:i.getStyle(d.valueLabel,"textDecoration"),backgroundColor:i.getStyle(d.domNode,"backgroundColor")}})}))}))}}}));