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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../base/Templated","dojo/text!./templates/ClickableTool.html","../../../../kernel"],function(e,t,i,n,o,l){var a=e([n],{_isGxeInputTool:!0,templateString:o,label:"",postCreate:function(){this.inherited(arguments),this.connectAriaClickable(this.domNode,t.hitch(this,this._onToolClick))},findInputWidget:function(e){for(var t=null,i=this.getParent();i;){if(i._isGxeInput)return i;if(i._isGxeElement){t=i;break}if(i._isGxeAttribute){t=i;break}i=i.getParent()}return t&&t.inputWidget?t.inputWidget:null},_onToolClick:function(e){var t=this.findInputWidget(e);this.whenToolClicked(e,t)},whenToolClicked:function(e,t){}});return i("extend-esri")&&t.setObject("dijit.metadata.form.tools.ClickableTool",a,l),a});