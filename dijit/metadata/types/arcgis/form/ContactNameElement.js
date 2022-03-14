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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../form/OpenElement","dojo/i18n!../../../nls/i18nArcGIS"],(function(e,t,a,n,i,o,d){var s=e([o],{postCreate:function(){this.inherited(arguments)},beforeValidateValue:function(e,a,n){var o=this.gxeDocument;if("rpOrgName"===this.target&&!o.isAgsItemDescription){if(o.isAgsINSPIRE){if(0===this.gxePath.indexOf("/metadata/mdContact/"))return;if(0===this.gxePath.indexOf("/metadata/dataIdInfo/idPoC/"))return}var s,r,l,m,c=!0,g=!0,f=this.parentElement.gxePath+"/",u=this.domNode.parentNode;s=null===(l=n)||0===t.trim(l).length,r=null===(m=i.findInputWidget(f+"rpIndName",u).getInputValue())||0===t.trim(m).length,a.label=d.contact.conditionalName.caption,o.isAgsFGDC?s&&r&&(a.isValid=!1,a.message=d.contact.conditionalName.msg_fgdc):(c=null===(g=i.findInputWidget(f+"rpPosName",u).getInputValue())||0===t.trim(g).length,s&&r&&c&&(a.isValid=!1,a.message=d.contact.conditionalName.msg))}}});return a("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.ContactNameElement",s,n),s}));