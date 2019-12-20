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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dijit/registry","dojo/dom-construct","dojo/has","../../../../../kernel","../../../form/tools/ClickableTool","../../../form/tools/GeoExtentDialog","../../../form/tools/GeoExtentView","../../../form/tools/geoExtentUtil"],function(t,e,n,o,i,a,u,r,s,d,l,g){var f=t([s],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){var t=this.findInputWidget();t&&t.parentXNode&&t.parentXNode.gxeDocument&&t.parentXNode.gxeDocument.isViewOnly&&setTimeout(e.hitch(this,function(){this._handleRequest(t,!1)}),2e3)}},whenToolClicked:function(t,e){this._handleRequest(e,!0)},_findInputWgt:function(t,e){var n,a=o("[data-gxe-path='"+t+"']",e);return a&&1===a.length&&(n=i.byNode(a[0]))?n.inputWidget:null},_findViewSection:function(t){var e=o(".gxeGeoExtentSection .gxeGeoExtentViewSection",t);return e&&1===e.length?e[0]:null},_handleRequest:function(t,n){if(t&&t.parentXNode){var o=t.parentXNode.getParentElement();if(o){var i=o.gxePath+"/",u=o.domNode,r=this._findInputWgt(i+"westBL",u),s=this._findInputWgt(i+"eastBL",u),f=this._findInputWgt(i+"northBL",u),m=this._findInputWgt(i+"southBL",u);if(r&&s&&f&&m){var c,x=null;if(o.gxeDocument&&o.gxeDocument.isViewOnly){if(n)return;if(!(x=this._findViewSection(u)))return;new l({gxeDocument:o.gxeDocument,xmin:r.getInputValue(),ymin:m.getInputValue(),xmax:s.getInputValue(),ymax:f.getInputValue()},a.create("div",{},x))}else n&&(c=new d({gxeDocument:o.gxeDocument,xmin:r.getInputValue(),ymin:m.getInputValue(),xmax:s.getInputValue(),ymax:f.getInputValue(),onChange:e.hitch(this,function(t){r.setInputValue(g.formatCoordinate(t.xmin)),s.setInputValue(g.formatCoordinate(t.xmax)),f.setInputValue(g.formatCoordinate(t.ymax)),m.setInputValue(g.formatCoordinate(t.ymin))})}),c.show())}}}}});return u("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.form.GeoExtentTool",f,r),f});