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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel","../../../form/OpenElement","dojo/i18n!../../../nls/i18nArcGIS","dojo/i18n!../../../nls/i18nBase"],(function(e,a,i,t,n,r,o,s){var l=e([r],{postCreate:function(){this.inherited(arguments)},beforeValidateValue:function(e,t,n){if(!(null===n||0===a.trim(n).length)){var r=!0,l=n.split(" ");if(i.some(l,(function(e){try{var i=!1,t=Number(a.trim(e));null!=t&&!isNaN(t)&&isFinite(t)&&(i=!0),i||(r=!1)}catch(e){console.error(e),r=!1}if(!r)return!0})),!r){var d=s.validation.pattern,c=o.hints.listOfDoubles;t.isValid=!1,t.message=d.replace("{label}",t.label).replace("{message}",c)}}}});return t("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.form.GeorectPosElement",l,n),l}));