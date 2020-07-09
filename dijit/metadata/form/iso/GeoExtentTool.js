// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dojo/has","dijit/registry","dojo/dom-construct","../tools/ClickableTool","../tools/GeoExtentDialog","../tools/GeoExtentView","../tools/geoExtentUtil","../../../../kernel"],(function(e,t,n,o,i,a,u,d,r,l,g,s){var m=e([d],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){var e=this.findInputWidget();e&&e.parentXNode&&e.parentXNode.gxeDocument&&e.parentXNode.gxeDocument.isViewOnly&&setTimeout(t.hitch(this,(function(){this._handleRequest(e,!1)})),2e3)}},whenToolClicked:function(e,t){this._handleRequest(t,!0)},_findInputWgt:function(e,t){var n,i=o("[data-gxe-path='"+e+"']",t);return i&&1===i.length&&(n=a.byNode(i[0]))?n.inputWidget:null},_findViewSection:function(e){var t=o(".gxeGeoExtentSection .gxeGeoExtentViewSection",e);return t&&1===t.length?t[0]:null},_handleRequest:function(e,n){if(e&&e.parentXNode){var o=e.parentXNode.getParentElement();if(o){var i=o.getParentElement();if(i){var a=i.gxePath,d=i.domNode,s=this._findInputWgt(a+"/gmd:westBoundLongitude/gco:Decimal",d),m=this._findInputWgt(a+"/gmd:eastBoundLongitude/gco:Decimal",d),c=this._findInputWgt(a+"/gmd:northBoundLatitude/gco:Decimal",d),f=this._findInputWgt(a+"/gmd:southBoundLatitude/gco:Decimal",d);if(s&&m&&c&&f){var x=null;if(i.gxeDocument&&i.gxeDocument.isViewOnly){if(n)return;if(!(x=this._findViewSection(d)))return;new l({gxeDocument:i.gxeDocument,xmin:s.getInputValue(),ymin:f.getInputValue(),xmax:m.getInputValue(),ymax:c.getInputValue()},u.create("div",{},x))}else n&&new r({gxeDocument:i.gxeDocument,xmin:s.getInputValue(),ymin:f.getInputValue(),xmax:m.getInputValue(),ymax:c.getInputValue(),onChange:t.hitch(this,(function(e){s.setInputValue(g.formatCoordinate(e.xmin)),m.setInputValue(g.formatCoordinate(e.xmax)),c.setInputValue(g.formatCoordinate(e.ymax)),f.setInputValue(g.formatCoordinate(e.ymin))}))}).show()}}}}}});return i("extend-esri")&&t.setObject("dijit.metadata.form.iso.GeoExtentTool",m,s),m}));