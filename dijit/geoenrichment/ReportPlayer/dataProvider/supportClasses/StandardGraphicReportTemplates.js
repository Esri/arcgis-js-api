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

define(["dojo/i18n!esri/nls/jsapi"],function(a){a=a.geoenrichment.dijit.ReportPlayer.StandardTemplates;var e={US:{"demographic-summary":"a5161c2ca50d44429daf2bf9dbe73eb5","key-facts":"693269bfbf6c4851901a3c9c56550294","marketing-profile":"aceee34210e748ba95cb9cae21e196b9","at-risk-population":"a7936c5ce77c4d698140db21ab1a7858","portrait-property-flyer":"8d42e32b12154bc580af89483c208d56",skyscraper:"7be44b15e29847a383906aac5699cf00","transportation-to-work":"537230b385fb45d9a8d6e59265e36fbf","health-care":"89c6ff4d96de4acaa024b7a408f186b0","executive-summary-call-outs":"0fa71e0a74294e7b8265e4cd507c7d17","tapestry-profile":"f2754d21223a491798dbc0ef2c71858f","nearby-restaurants":"866e6a839ee348dfae5a8ee9bdafbfc0","multi-ring-comparison":"f808dfceddd149ff85a9d8825d4e5a5f"},CA:{"key-facts":"f982018306a34cc58756ce0ed78c6b0c","multi-ring-comparison":"c47fa8d040364abe80d288bb606da576"},all:{"key-facts":"3813621424fc4443af1dcecab65be89c","multi-ring-comparison":"dd1fa81faaf94541831cae16788393ab"}},r={"at-risk-population":a.atRiskPopulation,"executive-summary-call-outs":a.executiveSummaryCallOuts,"demographic-summary":a.demographicSummary,"transportation-to-work":a.transportationToWork,"health-care":a.healthCare,"marketing-profile":a.marketingProfile,"portrait-property-flyer":a.portraitPropertyFlyer,skyscraper:a.skyscraper,"tapestry-profile":a.tapestryProfile,"nearby-restaurants":a.nearbyRestaurants,"key-facts":a.keyFacts,"multi-ring-comparison":a.multiRingComparison},t={portalUrl:"http://www.arcgis.com",user:"esri_reports",query:"http://www.arcgis.com/home/search.html?q=owner%3Aesri_reports"};return t.aliasToID=function(a,r){switch(r){case"test-multi-feature-chart":return"18a7cbfa2f8349778fb4502ada2c0cdc";case"test-conditional-styling":return"17df018554e64a4e8ac0df1dccdd0126";case"test-comparison-table":return"a606427d0f4f42769b2126d5da2683ba";case"test-fields-multi-feature":return"f1d586c71bc04d14a95daaf5acda276b";case"test-fields-single-feature":return"48b7c2093f72473fa3d7684610b38978";case"test-language":return"5062374de3dd4795aebf83b87d8af943";case"test-complex":return"ffde1adb1eb84d01abc27f051a64732f"}return(e[a]||e.all)[r]},t.getListOptions=function(a){var c=e[a]||e.all,s=Object.keys(c).map(function(e){return{value:t.aliasToID(a,e),label:r[e]}});return s.sort(function(a,e){return a.label.localeCompare(e.label)}),s},t});