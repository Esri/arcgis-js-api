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

define(["dojo/_base/declare","../_WizardPage","../_PageButtons","./Breadcrumb","./DataBrowserBase","./DataBrowserManager","./DataCategoriesPage","./DataCollectionsPage","./DataVariablesPage","./DataVariableGrid","dojo/i18n!../../../nls/jsapi"],(function(e,a,t,n,r,i,o,s,u,c,d){return e(null,{createManager:function(e){return new i(e)},createBreadcrumb:function(e){return new n(e)},createPage:function(n,i){var c;switch(n){case r.CATEGORIES_PAGE:c=o;break;case r.COLLECTIONS_PAGE:c=s;break;case r.VARIABLES_PAGE:c=u}return new(c=e([a,t,c],{buildRendering:function(){this.inherited(arguments);var e=[],a=this;function t(t){var n=t.toLowerCase(),r=a[n+"Button"];!0===r&&(r=d.geoenrichment.dijit.WizardButtons[n]),r&&e.push({id:n,label:r,onClick:function(){a.emit(t,{bubbles:!1})}})}t("Cancel"),t("OK"),t("Back"),e.length?this.addButtons(e):this.buttonsNode&&(this.buttonsNode.style.display="none")}}))(i)},createVariableGrid:function(e,a){return new c(e,a)}})}));