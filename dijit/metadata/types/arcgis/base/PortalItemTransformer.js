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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../arcgis/portal/PortalItemTransformer","../../../base/etc/docUtil"],function(t,e,a,n,o,d){var i=t([o],{postCreate:function(){this.inherited(arguments)},checkVisibility:function(t,e){this.inherited(arguments);var a;if("/metadata/dataIdInfo/resConst/Consts/useLimit"===e)d.findElementChoice(t,!0);else if(0===e.indexOf("/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox/"))try{d.findElementChoice(t,!0),a=t.parentXNode.parentElement.parentElement.parentElement,a.toggleContent&&a.toggleContent(!0)}catch(t){console.error(t)}else if("/metadata/distInfo/distTranOps/onLineSrc/linkage"===e)try{a=t.parentXNode.parentElement,a.toggleContent&&a.toggleContent(!0),a.parentElement.multiplicityHeader&&a.parentElement.multiplicityHeader.toggleContent&&a.parentElement.multiplicityHeader.toggleContent(!0),a.parentElement.parentElement.toggleContent&&a.parentElement.parentElement.toggleContent(!0)}catch(t){console.error(t)}},populateTransformationInfo:function(t,e,a){this.inherited(arguments);var n=a;n.id.path="/metadata/mdFileID",n.title.path="/metadata/dataIdInfo/idCitation/resTitle",n.snippet.path="/metadata/dataIdInfo/idPurp",n.description.path="/metadata/dataIdInfo/idAbs",n.tags.path="/metadata/dataIdInfo/searchKeys/keyword",n.accessInformation.path="/metadata/dataIdInfo/idCredit",n.licenseInfo.path="/metadata/dataIdInfo/resConst/Consts/useLimit",n.url.path="/metadata/distInfo/distTranOps/onLineSrc/linkage",n.extent.xmin.path="/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox/westBL",n.extent.ymin.path="/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox/southBL",n.extent.xmax.path="/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox/eastBL",n.extent.ymax.path="/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox/northBL"}});return a("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.PortalItemTransformer",i,n),i});