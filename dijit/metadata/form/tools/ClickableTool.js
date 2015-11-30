// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../base/Templated","dojo/text!./templates/ClickableTool.html","../../../../kernel"],function(e,t,i,n,o,l){var a=e([n],{_isGxeInputTool:!0,templateString:o,label:"",postCreate:function(){this.inherited(arguments)},findInputWidget:function(){for(var e=null,t=this.getParent();t;){if(t._isGxeInput)return t;if(t._isGxeElement){e=t;break}if(t._isGxeAttribute){e=t;break}t=t.getParent()}return e&&e.inputWidget?e.inputWidget:null},_onToolClick:function(e){var t=this.findInputWidget(e);this.whenToolClicked(e,t)},whenToolClicked:function(){}});return i("extend-esri")&&t.setObject("dijit.metadata.form.tools.ClickableTool",a,l),a});