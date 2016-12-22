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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","../../base/Templated","dojo/text!./templates/OkCancelBar.html","dojo/i18n!../../nls/i18nBase","dijit/form/Button","../../../../kernel"],function(e,n,t,i,o,s,a,l,r){var c=e([o],{cancelIsProminent:!1,cancelLabel:a.general.cancel,isWorking:!1,okLabel:a.general.ok,showCancel:!0,showOk:!0,templateString:s,postCreate:function(){this.inherited(arguments),this.showOk||(this.okButton.style.display="none"),this.showCancel||(this.cancelButton.style.display="none"),this.cancelIsProminent&&(t.remove(this.okButton,"prominent"),t.add(this.cancelButton,"prominent"))},postMixInProperties:function(){this.inherited(arguments),null===this.okLabel&&(this.okLabel=a.general.ok),null===this.cancelLabel&&(this.cancelLabel=a.general.cancel)},disableOk:function(){this.okButton.disabled=!0},enableOk:function(){this.showOk&&(this.okButton.disabled=!1)},hideWorking:function(e){this.isWorking=!1,this.workingNode.innerHTML="",e&&this.enableOk()},onCancelClick:function(e){},onOkClick:function(e){},showFatalError:function(e,n){this.disableOk(),this.hideWorking(!1),this.setNodeText(this.workingNode,e),n?console.error(e,n):console.error(e)},showWorking:function(e,n){this.isWorking=!0,n&&this.disableOk(),this.setNodeText(this.workingNode,e)}});return i("extend-esri")&&n.setObject("dijit.metadata.editor.util.OkCancelBar",c,r),c});