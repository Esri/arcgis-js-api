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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/has","../../../../../kernel","./InputCheckBox"],function(e,t,a,n,s,o){var i=e([o],{_alwaysFalse:!1,serializeIfFalse:!1,postCreate:function(){this.inherited(arguments)},connectXNode:function(e,t){"/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox/@esriExtentType"!==e.gxePath&&(this._alwaysFalse=!0,this.parentXNode.domNode.style.display="none"),this.inherited(arguments)},getInputValue:function(){return this._alwaysFalse?this.falseValue:void this.inherited(arguments)}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputExtentTypeCheckBox",i,s),i});