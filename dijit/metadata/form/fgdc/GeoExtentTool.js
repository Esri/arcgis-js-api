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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dijit/registry","dojo/dom-construct","dojo/has","../tools/ClickableTool","../tools/GeoExtentDialog","../tools/GeoExtentView","../tools/geoExtentUtil","../../../../kernel"],(function(t,e,n,o,i,a,u,d,r,s,l,g){var m=t([d],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){var t=this.findInputWidget();t&&t.parentXNode&&t.parentXNode.gxeDocument&&t.parentXNode.gxeDocument.isViewOnly&&setTimeout(e.hitch(this,(function(){this._handleRequest(t,!1)})),2e3)}},whenToolClicked:function(t,e){this._handleRequest(e,!0)},_findInputWgt:function(t,e){var n,a=o("[data-gxe-path='"+t+"']",e);return a&&1===a.length&&(n=i.byNode(a[0]))?n.inputWidget:null},_findViewSection:function(t){var e=o(".gxeGeoExtentSection .gxeGeoExtentViewSection",t);return e&&1===e.length?e[0]:null},_handleRequest:function(t,n){if(t&&t.parentXNode){var o=t.parentXNode.getParentElement();if(o){var i=o.domNode,u=this._findInputWgt("/metadata/idinfo/spdom/bounding/westbc",i),d=this._findInputWgt("/metadata/idinfo/spdom/bounding/eastbc",i),g=this._findInputWgt("/metadata/idinfo/spdom/bounding/northbc",i),m=this._findInputWgt("/metadata/idinfo/spdom/bounding/southbc",i);if(u&&d&&g&&m){var c=null;if(o.gxeDocument&&o.gxeDocument.isViewOnly){if(n)return;if(!(c=this._findViewSection(i)))return;new s({gxeDocument:o.gxeDocument,xmin:u.getInputValue(),ymin:m.getInputValue(),xmax:d.getInputValue(),ymax:g.getInputValue()},a.create("div",{},c))}else n&&new r({gxeDocument:o.gxeDocument,xmin:u.getInputValue(),ymin:m.getInputValue(),xmax:d.getInputValue(),ymax:g.getInputValue(),onChange:e.hitch(this,(function(t){u.setInputValue(l.formatCoordinate(t.xmin)),d.setInputValue(l.formatCoordinate(t.xmax)),g.setInputValue(l.formatCoordinate(t.ymax)),m.setInputValue(l.formatCoordinate(t.ymin))}))}).show()}}}}});return u("extend-esri")&&e.setObject("dijit.metadata.form.fgdc.GeoExtentTool",m,g),m}));