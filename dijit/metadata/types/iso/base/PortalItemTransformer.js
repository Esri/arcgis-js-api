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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../base/etc/docUtil","../../../arcgis/portal/PortalItemTransformer","../../../../../kernel"],(function(e,t,n,i,r,o,a){var g=e([o],{postCreate:function(){this.inherited(arguments)},checkVisibility:function(e,t){var n;if(this.inherited(arguments),-1!==t.indexOf("/gmd:resourceConstraints/gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString"))r.findElementChoice(e,!0);else if(-1!==t.indexOf("/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword"))try{(n=e.parentXNode.parentElement.parentElement).toggleContent&&n.toggleContent(!0)}catch(e){console.error(e)}else if(-1!==t.indexOf("/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox"))try{(n=e.parentXNode.parentElement.parentElement.parentElement).toggleContent&&n.toggleContent(!0)}catch(e){console.error(e)}else if(-1!=t.indexOf("/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL"))try{(n=e.parentXNode.parentElement.parentElement.parentElement).toggleContent&&n.toggleContent(!0),(n=n.parentElement.parentElement.parentElement.parentElement).toggleContent&&n.toggleContent(!0)}catch(e){console.error(e)}},populateTransformationInfo:function(e,t,i){this.inherited(arguments);var r,o=i,a=e.documentType.isService,g=e.rootElement.gxePath,d=g+"/gmd:identificationInfo/gmd:MD_DataIdentification",m=d+"/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox";a&&(m=(d=g+"/gmd:identificationInfo/srv:SV_ServiceIdentification")+"/srv:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox"),o.id.path=g+"/gmd:fileIdentifier/gco:CharacterString",o.title.path=d+"/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString",o.snippet.path=d+"/gmd:purpose/gco:CharacterString",o.description.path=d+"/gmd:abstract/gco:CharacterString",o.accessInformation.path=d+"/gmd:credit/gco:CharacterString",o.licenseInfo.path=d+"/gmd:resourceConstraints/gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString",o.tags.path=d+"/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword",o.extent.xmin.path=m+"/gmd:westBoundLongitude/gco:Decimal",o.extent.ymin.path=m+"/gmd:southBoundLatitude/gco:Decimal",o.extent.xmax.path=m+"/gmd:eastBoundLongitude/gco:Decimal",o.extent.ymax.path=m+"/gmd:northBoundLatitude/gco:Decimal",a?(o.url.path=d+"/srv:containsOperations/srv:SV_OperationMetadata/srv:connectPoint/gmd:CI_OnlineResource/gmd:linkage/gmd:URL",t&&t.url&&(r=this.findInputWidget(null,d+"/srv:containsOperations/srv:SV_OperationMetadata/srv:operationName/gco:CharacterString",!0))&&r.setInputValue("na"),t&&t.typeKeywords&&n.some(t.typeKeywords,(function(e){if("Service"===e)return o.type.path=d+"/srv:serviceType/gco:LocalName",!0}))):o.url.path=g+"/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL"}});return i("extend-esri")&&t.setObject("dijit.metadata.types.iso.base.PortalItemTransformer",g,a),g}));