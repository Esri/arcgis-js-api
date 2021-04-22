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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../form/OpenElement","dojo/i18n!../../../nls/i18nArcGIS"],(function(e,i,n,t,a,l,s){var r=e([l],{conditionalMessage:null,postCreate:function(){this.inherited(arguments)},afterValidateValue:function(e,n,t){var l=this.target,r=null;if("minVal"===l?r="maxVal":"rdommin"===l?r="rdommax":"vertMinVal"===l&&(r="vertMaxVal"),null!==r){null===this.conditionalMessage&&(this.conditionalMessage=s.conditionals.minLessThanMax);var o=t;null!==g&&(o=i.trim(o));var d=null===o||0===o.length;if(n.isValid||d){var m=!1,u=this.parentElement.gxePath+"/",c=this.domNode.parentNode,h=a.findInputWidget(u+r,c),g=h.getInputValue();if(null!==g&&(g=i.trim(g)),null===g||0===g.length)d||(m=!0);else if(d)m=!0;else{var f={inputWidget:h,label:r,isValid:!0};if(e._checkNumber(f,g),f.isValid)try{(o=Number(o))>=(g=Number(g))&&(m=!0)}catch(e){console.error(e)}else m=!0}m&&(n.isValid=!1,n.message=this.conditionalMessage)}}}});return n("extend-esri")&&i.setObject("dijit.metadata.types.arcgis.form.MinNumberElement",r,t),r}));