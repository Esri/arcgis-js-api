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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../tools/ClickableTool","../../../base/etc/docUtil","./ThemeDialog","../../../../../kernel"],(function(e,t,i,o,n,s,a){var l=e([o],{visible:!0,postCreate:function(){this.inherited(arguments);var e=this.getParent();this.dojoAttachPoint&&e&&(e[this.dojoAttachPoint]=this,e._attachPoints.push(this.dojoAttachPoint))},startup:function(){if(!this._started){var e=n.findGxeContext(this);this.visible&&e&&e.gemetUrl&&e.gemetInspireThemeThesaurus||(this.domNode.style.display="none")}},whenToolClicked:function(e,i){if(i&&i.parentXNode){var o=i.getInputValue();null===o||o.push||(o=[o]),new s({gxeDocument:i.parentXNode.gxeDocument,initiallySelectedValues:o,onSelect:t.hitch(this,(function(e){i.importValues(null,e)}))}).show()}}});return i("extend-esri")&&t.setObject("dijit.metadata.form.iso.gemet.GemetThemeTool",l,a),l}));