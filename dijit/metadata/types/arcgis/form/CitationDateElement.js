// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../form/OpenElement","dojo/i18n!../../../nls/i18nArcGIS","dojo/i18n!../../../nls/i18nBase"],function(e,t,a,i,n,s,o,r,l){var c=e([o],{postCreate:function(){this.inherited(arguments)},afterValidateValue:function(e,i,n){var s=this.gxeDocument;if("pubDate"===this.target&&!s.isAgsItemDescription&&!s.isAgsFGDC){var o=null===n||0===t.trim(n).length;if(i.isValid||o){var c=r.citation.conditionalDate.msg,d=["createDate","pubDate","reviseDate"];s.isAgsNAP&&(c=r.citation.conditionalDate.msg_nap,d=["createDate","pubDate","reviseDate","notavailDate","inforceDate","adoptDate","deprecDate","supersDate"]);var u=a.some(d,function(t){return this._hasDateValue(e,t)},this),D=l.validation.pattern,m=r.citation.conditionalDate.caption,p=l.validation.ok;u?o&&(i.message=D.replace("{label}",m).replace("{message}",p)):(i.isValid=!1,i.message=c)}}},_hasDateValue:function(e,a){var i=this.parentElement.gxePath+"/",n=this.domNode.parentNode,o=s.findInputWidget(i+a,n),r=o.getInputValue(),l=null===r||0===t.trim(r).length;if(!l){var c={label:a,isValid:!0};this.inputWidget.forceTime?e._checkDateTime(c,r):this.inputWidget.allowTime&&-1!==r.indexOf("T")?e._checkDateTime(c,r):e._checkDate(c,r),c.isValid||(l=!0)}return!l}});return i("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.CitationDateElement",c,n),c});