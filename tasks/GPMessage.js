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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],(function(e,s,r,o){var a=e(null,{declaredClass:"esri.tasks.GPMessage",constructor:function(e){s.mixin(this,e)}});return s.mixin(a,{TYPE_INFORMATIVE:"esriJobMessageTypeInformative",TYPE_PROCESS_DEFINITION:"esriJobMessageTypeProcessDefinition",TYPE_PROCESS_START:"esriJobMessageTypeProcessStart",TYPE_PROCESS_STOP:"esriJobMessageTypeProcessStop",TYPE_WARNING:"esriJobMessageTypeWarning",TYPE_ERROR:"esriJobMessageTypeError",TYPE_EMPTY:"esriJobMessageTypeEmpty",TYPE_ABORT:"esriJobMessageTypeAbort"}),r("extend-esri")&&s.setObject("tasks.GPMessage",a,o),a}));