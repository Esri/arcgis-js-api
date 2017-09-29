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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../kernel"],function(o,e,n,s){var r=o(null,{debugEnabled:!0,constructor:function(o){e.mixin(this,o)},debug:function(){window.console&&this.debugEnabled&&(console.debug?console.debug(arguments):console.log&&console.log(arguments))},error:function(o){window.console&&(console.error?o?console.error(o):console.error(arguments):console.log&&console.log(arguments))},info:function(){window.console&&(console.info?console.info(arguments):console.log&&console.log(arguments))},log:function(){window.console&&console.log&&console.log(arguments)},warn:function(){window.console&&(console.warn?console.warn(arguments):console.log&&console.log(arguments))},_test:function(){this.debug("Debug message."),this.log("Log message."),this.info("Info message."),this.warn("Warn message."),this.error(new Error("Error message."),"additionalArgument"),console.error(new Error("Error2 message2."),"additionalArgument")}});return n("extend-esri")&&e.setObject("dijit.metadata.context.Logger",r,s),r});