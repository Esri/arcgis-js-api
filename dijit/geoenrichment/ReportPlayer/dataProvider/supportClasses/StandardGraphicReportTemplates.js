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

define(["dojo/i18n!esri/nls/jsapi"],function(e){e=e.geoenrichment.dijit.ReportPlayer.StandardTemplates;var a={US:{"demographic-summary":"45cb423066194f5f98c6f4ff81124db3","key-facts":"98d5848a944b4787b2ca038256c7878d","marketing-profile":"879849b937ec4eb0bef31ff2861251f2","at-risk-population":"456d7a22adc8439a93d4164ed3846243","portrait-property-flyer":"c7e01c953c7e4b70a46ca6408c3ed000",skyscraper:"34330a47546f412d9d09632347da11d3","transportation-to-work":"d349b23334454274ab2a7a20a0a9a55d","health-care":"02086fe6b92b4ff5a9a7a8d172540fc9","executive-summary-call-outs":"5d8b51e2b27b4832b193d9932bc6f862","tapestry-profile":"1b07c48d4b58423990023b43150d7e99","nearby-restaurants":"c21dd81cd9064649a4bb454530f12790","multi-area-comparison":"4d8c102ca7324d09931cfe65ab3a1168","property-details":"9ed3b5dba02d4b46a3e063c8405fd0cc","employment-overview":"db0606e41ee7485f88122069e74a9b6b","office-market-profile":"2a43c204c1dd4a758087372d7d7d786b","health-care-and-insurance":"f59a3621583d44bbafa14035c2ae3947","demographic-profile":"ad58f06a480c4b16aadcff789f543cca","commute-profile":"bd7390ab31dc485489733d22475db0ed","target-market-summary":"38eab30d7e6840da869fee264ca9fc40"},CA:{"key-facts":"6c0a945e91d44640a08776e5bed1b297","multi-area-comparison":"7464708f379b463c8eec8aed1315989f"},all:{"key-facts":"5886dbf41f984a0a8ec4eb4b5e231584","multi-area-comparison":"41727f86773c4cf2a37fd99446ea83fc"}},r={"at-risk-population":e.atRiskPopulation,"executive-summary-call-outs":e.executiveSummaryCallOuts,"demographic-summary":e.demographicSummary,"transportation-to-work":e.transportationToWork,"health-care":e.healthCare,"marketing-profile":e.marketingProfile,"portrait-property-flyer":e.portraitPropertyFlyer,skyscraper:e.skyscraper,"tapestry-profile":e.tapestryProfile,"nearby-restaurants":e.nearbyRestaurants,"key-facts":e.keyFacts,"multi-area-comparison":e.multiAreaComparison,"property-details":e.propertyDetails,"employment-overview":e.employmentOverview,"office-market-profile":e.officeMarketProfile,"health-care-and-insurance":e.healthCareAndInsuranceStatistics,"demographic-profile":e.demographicProfile,"commute-profile":e.commuteProfile,"target-market-summary":e.targetMarketSummary},t={portalUrl:"http://www.arcgis.com",user:"esri_reports",query:"http://www.arcgis.com/home/search.html?q=owner%3Aesri_reports"};return t.aliasToID=function(e,r){switch(r){case"test-multi-feature-chart":return"18a7cbfa2f8349778fb4502ada2c0cdc";case"test-conditional-styling":return"17df018554e64a4e8ac0df1dccdd0126";case"test-comparison-table":return"a606427d0f4f42769b2126d5da2683ba";case"test-fields-single-feature":return"48b7c2093f72473fa3d7684610b38978";case"test-fields-multi-feature":return"f1d586c71bc04d14a95daaf5acda276b";case"test-language":return"5062374de3dd4795aebf83b87d8af943";case"test-complex":return"ffde1adb1eb84d01abc27f051a64732f"}return(a[e]||a.all)[r]},t.aliasToLabel=function(e){return r[e]},t.getAliases=function(e){var r=a[e]||a.all,t=Object.keys(r);return t.sort(function(e,a){return e.localeCompare(a)}),t},t.getListOptions=function(e){return t.getAliases(e).map(function(a){return{value:t.aliasToID(e,a),label:r[a]}})},t});