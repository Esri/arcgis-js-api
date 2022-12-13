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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel","../../../base/xml/xmlUtil","dojo/i18n!../../../nls/i18nArcGIS"],(function(e,t,l,i,n,a){var o={getAll:function(){var e=[],t=function(t,l){var i={name:t,profile:l,label:t};e.push(i);try{var n=a.metadataStyle[t];null!=n&&n.length>0&&(i.label=n)}catch(e){console.error(e)}};return t("FGDC CSDGM Metadata","FGDC"),t("INSPIRE Metadata Directive","INSPIRE"),t("ISO 19139 Metadata Implementation Specification GML3.2","ISO19139"),t("ISO 19139 Metadata Implementation Specification","ISO19139"),t("Item Description","ItemDescription"),t("North American Profile of ISO19115 2003","NAP"),e},findByName:function(e){var l=this.getAll(),i=null;return t.some(l,(function(t){if(t.name===e)return i=t,!0})),i},findByProfile:function(e){var l=this.getAll(),i=null;return t.some(l,(function(t){if(t.profile===e)return i=t,!0})),i},findFromXmlDocument:function(e){var l=null,i=e.documentElement;return i&&i.localName&&"metadata"===i.localName&&t.some(i.childNodes,(function(e){if(e.localName&&"Esri"===e.localName){var i=null,a=null,o=null;return t.some(e.childNodes,(function(e){if(e.localName&&"ArcGISstyle"===e.localName)return a=n.getNodeText(e),o=this.findByName(a),!0}),this),t.some(e.childNodes,(function(e){if(e.localName&&"ArcGISProfile"===e.localName)return n.getNodeText(e),i=this.findByProfile(i),!0}),this),null!==i?(l=i,"ISO19139"===i.profile&&null!==o&&"ISO 19139 Metadata Implementation Specification"===o.name&&(l=o)):null!==o&&(l=o),!0}}),this),l},preLoad:function(e,l){var i=null,a=null;e.forceDefaultArcGISStyle&&null!==(i=this.findByName(e.defaultArcGISStyle))&&(a=l.documentElement),a&&a.localName&&"metadata"===a.localName&&t.some(a.childNodes,(function(e){if(e.localName&&"Esri"===e.localName){t.some(e.childNodes,(function(e){if(e.localName&&"ArcGISstyle"===e.localName)return n.getNodeText(e)!==i.name&&t.some(e.childNodes,(function(e){if(e.nodeType===n.nodeTypes.TEXT_NODE)return e.nodeValue=i.name,!0}),this),!0}),this),t.some(e.childNodes,(function(e){if(e.localName&&"ArcGISProfile"===e.localName)return n.getNodeText(e)!==i.profile&&t.some(e.childNodes,(function(e){if(e.nodeType===n.nodeTypes.TEXT_NODE)return e.nodeValue=i.profile,!0}),this),!0}),this)}}),this)},setArcGISProfile:function(e,t){var l=null;try{t&&(l=this.findFromXmlDocument(t))}catch(e){console.error(e)}null===l&&null===(l=this.findByName(e.gxeContext.defaultArcGISStyle))&&(l=this.findByName("ISO 19139 Metadata Implementation Specification GML3.2"));var i=l.name,n=l.profile;e.ArcGISFormat="1.0",e.ArcGISProfile=n,e.ArcGISStyle=i,e.isAgsItemDescription=!1,e.isAgsFGDC=!1,e.isAgsISO19139=!1,e.isAgsINSPIRE=!1,e.isAgsNAP=!1,"ItemDescription"===n?e.isAgsItemDescription=!0:"FGDC"===n?e.isAgsFGDC=!0:"ISO19139"===n?e.isAgsISO19139=!0:"INSPIRE"===n?e.isAgsINSPIRE=!0:"NAP"===n&&(e.isAgsNAP=!0)}};return l("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.arcgisStyles",o,i),o}));