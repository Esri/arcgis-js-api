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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./Transformer","../../../../kernel"],function(e,t,i,n,r,a){var o=e([n],{postCreate:function(){this.inherited(arguments)},checkTarget:function(e,t){var i=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},n=e.gxePath;if("gmd:MD_Metadata"===t){if(this.toDocumentType.isGmi)return"gmi:MI_Metadata"}else if("gmi:MI_Metadata"===t){if(!this.toDocumentType.isGmi)return"gmd:MD_Metadata"}else if(this.toDocumentType.isService){if("gmd:MD_DataIdentification"===t)return"srv:SV_ServiceIdentification";if(i(n,"gmd:MD_DataIdentification/gmd:extent"))return"srv:extent"}else{if("srv:SV_ServiceIdentification"===t)return"gmd:MD_DataIdentification";if(i(n,"srv:SV_ServiceIdentification/srv:extent"))return"gmd:extent"}return t}});return i("extend-esri")&&t.setObject("dijit.metadata.base.transform.Iso2IsoTransformer",o,a),o});