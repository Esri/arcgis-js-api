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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel","../../../base/xml/xmlUtil","dojo/i18n!../../../nls/i18nArcGIS"],function(e,t,l,n,i,o){var a={getAll:function(){var e=[],t=function(t,l){var n={name:t,profile:l,label:t};e.push(n);try{var i=o.metadataStyle[t];"undefined"!=typeof i&&null!==i&&i.length>0&&(n.label=i)}catch(a){console.error(a)}};return t("FGDC CSDGM Metadata","FGDC"),t("INSPIRE Metadata Directive","INSPIRE"),t("ISO 19139 Metadata Implementation Specification GML3.2","ISO19139"),t("ISO 19139 Metadata Implementation Specification","ISO19139"),t("Item Description","ItemDescription"),t("North American Profile of ISO19115 2003","NAP"),e},findByName:function(e){var l=this.getAll(),n=null;return t.some(l,function(t){return t.name===e?(n=t,!0):void 0}),n},findByProfile:function(e){var l=this.getAll(),n=null;return t.some(l,function(t){return t.profile===e?(n=t,!0):void 0}),n},findFromXmlDocument:function(e){var l=null,n=e.documentElement;return n&&n.localName&&"metadata"===n.localName&&t.some(n.childNodes,function(e){if(e.localName&&"Esri"===e.localName){var n=null,o=null,a=null,r=null;return t.some(e.childNodes,function(e){return e.localName&&"ArcGISstyle"===e.localName?(a=i.getNodeText(e),r=this.findByName(a),!0):void 0},this),t.some(e.childNodes,function(e){return e.localName&&"ArcGISProfile"===e.localName?(n=i.getNodeText(e),o=this.findByProfile(o),!0):void 0},this),null!==o?(l=o,"ISO19139"===o.profile&&null!==r&&"ISO 19139 Metadata Implementation Specification"===r.name&&(l=r)):null!==r&&(l=r),!0}},this),l},preLoad:function(e,l){var n=null,o=null;e.forceDefaultArcGISStyle&&(n=this.findByName(e.defaultArcGISStyle),null!==n&&(o=l.documentElement)),o&&o.localName&&"metadata"===o.localName&&t.some(o.childNodes,function(e){if(e.localName&&"Esri"===e.localName){var l=null;t.some(e.childNodes,function(e){return e.localName&&"ArcGISstyle"===e.localName?(l=i.getNodeText(e),l!==n.name&&t.some(e.childNodes,function(e){return e.nodeType===i.nodeTypes.TEXT_NODE?(e.nodeValue=n.name,!0):void 0},this),!0):void 0},this),t.some(e.childNodes,function(e){return e.localName&&"ArcGISProfile"===e.localName?(l=i.getNodeText(e),l!==n.profile&&t.some(e.childNodes,function(e){return e.nodeType===i.nodeTypes.TEXT_NODE?(e.nodeValue=n.profile,!0):void 0},this),!0):void 0},this)}},this)},setArcGISProfile:function(e,t){var l=null;try{t&&(l=this.findFromXmlDocument(t))}catch(n){console.error(n)}null===l&&(l=this.findByName(e.gxeContext.defaultArcGISStyle),null===l&&(l=this.findByName("ISO 19139 Metadata Implementation Specification GML3.2")));var i=l.name,o=l.profile,a="1.0";e.ArcGISFormat=a,e.ArcGISProfile=o,e.ArcGISStyle=i,e.isAgsItemDescription=!1,e.isAgsFGDC=!1,e.isAgsISO19139=!1,e.isAgsINSPIRE=!1,e.isAgsNAP=!1,"ItemDescription"===o?e.isAgsItemDescription=!0:"FGDC"===o?e.isAgsFGDC=!0:"ISO19139"===o?e.isAgsISO19139=!0:"INSPIRE"===o?e.isAgsINSPIRE=!0:"NAP"===o&&(e.isAgsNAP=!0)}};return l("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.arcgisStyles",a,n),a});