// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../kernel"],function(e,r,n,t){var i={nodeTypes:{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},escape:function(e){if(null===e)return null;if(0===e.length)return e;var r,n,t="";for(r=0;r<e.length;r++)n=e.charAt(r),t+="&"===n?"&amp;":"<"===n?"&lt;":">"===n?"&gt;":"'"===n?"&apos;":'"'===n?"&quot;":n;return t},getNodeText:function(n){var t,i=null,o=this.nodeTypes.ELEMENT_NODE,E=this.nodeTypes.TEXT_NODE;if(n.nodeType===o){if("undefined"!=typeof n.textContent&&(t=n.textContent,null!==t&&(t=e.trim(t),t.length>0)))return i=t;r.some(n.childNodes,function(r){return r.nodeType===E&&(t=r.nodeValue,null!==t&&(t=e.trim(t),t.length>0))?(i=t,!0):void 0})}else i=n.nodeValue;return i},makeGxePrefixesByUri:function(e){var n={};return e&&r.forEach(e,function(e){e.prefix&&e.uri&&(n[e.uri]=e.prefix)}),n},makeGxeUrisByPrefix:function(e){var n={};return e&&r.forEach(e,function(e){e.prefix&&e.uri&&(n[e.prefix]=e.uri)}),n},parseFromString:function(e){var r=null,n=null;if(window.DOMParser)try{n=new DOMParser,r=n.parseFromString(e,"text/xml")}catch(t){}return r},supportsParseFromString:function(){return window.DOMParser?!0:!1}};return n("extend-esri")&&e.setObject("dijit.metadata.base.xml.xmlUtil",i,t),i});