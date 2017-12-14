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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/has","dojo/dom","dojo/dom-class","dojo/dom-construct","dijit/Menu","dijit/MenuItem","dijit/form/Button","dijit/form/ComboButton","../tasks/PrintTask","../tasks/PrintParameters","../kernel","../domUtils","../Evented","dojo/i18n!../nls/jsapi"],function(t,i,n,e,r,o,s,h,a,d,p,l,c,u,m,_,f,C){var N=t([f],{declaredClass:"esri.dijit.Print",_eventMap:{"print-complete":["result"],error:!0,"print-start":!0},onPrintComplete:function(){},onError:function(){},onPrintStart:function(){},constructor:function(t,i){t=t||{},this.url=t.url,this.async=t.async,this.map=t.map,this.templates=t.templates,this.extraParams=t.extraParameters;var n=C.widgets.print;this._printText=n.NLS_print,this._printingText=n.NLS_printing,this._printoutText=n.NLS_printout,this.templates||(this.templates=[{label:this._printText,format:"PNG32",layout:"MAP_ONLY",exportOptions:{width:800,height:1100,dpi:96}}]),this.printDomNode=h.create("div"),s.add(this.printDomNode,"esriPrint"),i=o.byId(i),i.appendChild(this.printDomNode)},startup:function(){this._createPrintButton()},destroy:function(){this.map=null,h.destroy(this.printDomNode)},hide:function(){_.hide(this.printDomNode)},show:function(){_.show(this.printDomNode)},printMap:function(t){this.onPrintStart(),this._printButton.setAttribute("label",this._printingText),this._printButton.setAttribute("disabled",!0);var n=this.map,e=new c(this.url,{async:this.async}),r=new u;r.map=n,r.template=t,r.extraParameters=this.extraParams,e.execute(r,i.hitch(this,this._printComplete),i.hitch(this,this._printError))},_createPrintButton:function(){var t=this.templates;if(1===t.length)this._printButton=new p({label:this._printText,onClick:i.hitch(this,function(){this.printMap(t[0])})}),this.printDomNode.appendChild(this._printButton.domNode);else{this._printButton=new l({label:this._printText,onClick:i.hitch(this,function(){this.printMap(t[0])})}),this.printDomNode.appendChild(this._printButton.domNode);var n=new a({style:"display: none;"});e.forEach(t,function(t){var e=new d({label:t.label,onClick:i.hitch(this,function(){this.printMap(t)})});n.addChild(e)},this),this._printButton.setAttribute("dropDown",n)}s.add(this._printButton.domNode,"esriPrintButton")},_printComplete:function(t){this.onPrintComplete(t),this._printButton.domNode.style.display="none";var e=h.create("a",{href:t.url,target:"_blank",innerHTML:this._printoutText});n.connect(e,"onclick",i.hitch(this,this._hyperlinkClick)),this._removeAllChildren(this.printDomNode),s.add(e,"esriPrintout"),this.printDomNode.appendChild(e)},_printError:function(t){this._removeAllChildren(this.printDomNode),this._createPrintButton(),console.error(t),this.onError(t)},_hyperlinkClick:function(){this._removeAllChildren(this.printDomNode),this._createPrintButton()},_removeAllChildren:function(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}});return r("extend-esri")&&i.setObject("dijit.Print",N,m),N});