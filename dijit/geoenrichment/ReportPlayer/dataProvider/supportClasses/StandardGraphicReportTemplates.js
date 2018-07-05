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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/i18n!esri/nls/jsapi"],function(a){a=a.geoenrichment.dijit.ReportPlayer.StandardTemplates;var e={US:{"at-risk-population":"12867e4a89d5461fbbe3b9c6c181993a","executive-summary-call-outs":"c931fc6ebdb440189a8bc6bd34115807","demographic-summary":"e2a6868f979f4e37896b631581ae4918","transportation-to-work":"3afd4c5089584b089af5b0037d74a9d1","health-care":"a696eae378974ed5a63510fa70bed011","marketing-profile":"efb6bee0a80d4801887ec4cf73aa67fc","portrait-property-flyer":"6637be1fbddf4e948fbd09ce6a7a7888",skyscraper:"02c1124e916847249aa91b9ce48c2552","key-facts":"88420f4a98bb45cbacacbad67e23266e","tapestry-profile":"96096c8afa4847dea936942b1f89acb5","nearby-restaurants":"7a20b92b48cc4e63bf7ba956295de948"},CA:{"key-facts":"6c467040a8a64c33972045cf091bca5b"},all:{"key-facts":"11c4cec3c0d34c4aa51cd8877e2db4ef"}},r={"at-risk-population":a.atRiskPopulation,"executive-summary-call-outs":a.executiveSummaryCallOuts,"demographic-summary":a.demographicSummary,"transportation-to-work":a.transportationToWork,"health-care":a.healthCare,"marketing-profile":a.marketingProfile,"portrait-property-flyer":a.portraitPropertyFlyer,skyscraper:a.skyscraper,"tapestry-profile":a.tapestryProfile,"nearby-restaurants":a.nearbyRestaurants,"key-facts":a.keyFacts},t={portalUrl:"http://www.arcgis.com",user:"esri_reports",query:"http://www.arcgis.com/home/search.html?q=owner%3Aesri_reports"};return t.aliasToID=function(a,r){return(e[a]||e.all)[r]},t.getListOptions=function(a){var c=e[a]||e.all,o=Object.keys(c).map(function(e){return{value:t.aliasToID(a,e),label:r[e]}});return o.sort(function(a,e){return a.label.localeCompare(e.label)}),o},t});