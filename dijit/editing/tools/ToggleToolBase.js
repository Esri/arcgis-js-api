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
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/form/ToggleButton","./ToolBase","../../../kernel"],function(e,t,o,s,i,r){var a=e([s,i],{declaredClass:"esri.dijit.editing.tools.ToggleToolBase",postCreate:function(){this.inherited(arguments),this._setShowLabelAttr&&this._setShowLabelAttr(!1)},destroy:function(){s.prototype.destroy.apply(this,arguments),i.prototype.destroy.apply(this,arguments)},setChecked:function(){s.prototype.setChecked.apply(this,arguments)}});return o("extend-esri")&&t.setObject("dijit.editing.tools.ToggleToolBase",a,r),a});