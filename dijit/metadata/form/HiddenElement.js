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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","../../../kernel","./Element"],(function(e,n,d,o,t,i){var s=e(i,{_isHidden:!0,minOccurs:0,preferOpen:!0,noToggle:!0,hide:!0,notApplicable:!0,postCreate:function(){this.inherited(arguments),this.domNode.style.display="none"}});return o("extend-esri")&&n.setObject("dijit.metadata.form.HiddenElement",s,t),s}));