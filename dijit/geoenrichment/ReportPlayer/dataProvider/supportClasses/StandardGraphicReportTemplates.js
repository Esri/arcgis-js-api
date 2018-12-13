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

define(["dojo/i18n!esri/nls/jsapi"],function(e){e=e.geoenrichment.dijit.ReportPlayer.StandardTemplates;var a={US:{"demographic-summary":"3c6959a7c7c4450f9bdcc7063c9023d5","key-facts":"4cc0a5e007d946d5909524fcf80bc666","marketing-profile":"fb9b9a501c974540a52ab6d1027a8bcc","at-risk-population":"b0f05d5926d6444da40d6bf0c5c9846e","portrait-property-flyer":"5cf609b26ce24633a2edc58d7ebeb3fd",skyscraper:"686d7af60bcb410db051ec8465889231","transportation-to-work":"a79a099ab7be4c34a9b0b28831b1aa9c","health-care":"6f64bb63647246dcb5d268fc301614f6","executive-summary-call-outs":"99e919a7e9fd4fa2b55779f0dc118da8","tapestry-profile":"f32b961757f347e2976ba011ee20cb13","nearby-restaurants":"a266260cc3ec46c1b66c86f263feb8e4","multi-ring-comparison":"dab290529fd44063a2d83e03a8dc49eb"},CA:{"key-facts":"91d1e8c9d0ea482b9947dfe4bdfbe0ba","multi-ring-comparison":"e05eb227df9b4ceba0ace202b1d0c1e2"},all:{"key-facts":"365d52e6bac147a68a12eee229eb9b6b","multi-ring-comparison":"0f7d2ba850fa40579cae1342001d80d7"}},r={"at-risk-population":e.atRiskPopulation,"executive-summary-call-outs":e.executiveSummaryCallOuts,"demographic-summary":e.demographicSummary,"transportation-to-work":e.transportationToWork,"health-care":e.healthCare,"marketing-profile":e.marketingProfile,"portrait-property-flyer":e.portraitPropertyFlyer,skyscraper:e.skyscraper,"tapestry-profile":e.tapestryProfile,"nearby-restaurants":e.nearbyRestaurants,"key-facts":e.keyFacts,"multi-ring-comparison":e.multiRingComparison},t={portalUrl:"http://www.arcgis.com",user:"esri_reports",query:"http://www.arcgis.com/home/search.html?q=owner%3Aesri_reports"};return t.aliasToID=function(e,r){switch(r){case"test-multi-feature-chart":return"18a7cbfa2f8349778fb4502ada2c0cdc";case"test-conditional-styling":return"17df018554e64a4e8ac0df1dccdd0126";case"test-comparison-table":return"a606427d0f4f42769b2126d5da2683ba";case"test-fields-multi-feature":return"f1d586c71bc04d14a95daaf5acda276b";case"test-fields-single-feature":return"48b7c2093f72473fa3d7684610b38978";case"test-language":return"5062374de3dd4795aebf83b87d8af943";case"test-complex":return"ffde1adb1eb84d01abc27f051a64732f"}return(a[e]||a.all)[r]},t.aliasToLabel=function(e){return r[e]},t.getAliases=function(e){var r=a[e]||a.all,t=Object.keys(r);return t.sort(function(e,a){return e.localeCompare(a)}),t},t.getListOptions=function(e){return t.getAliases(e).map(function(a){return{value:t.aliasToID(e,a),label:r[a]}})},t});