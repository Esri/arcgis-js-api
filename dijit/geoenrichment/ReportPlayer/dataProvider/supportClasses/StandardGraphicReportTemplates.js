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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/i18n!esri/nls/jsapi"],function(e){e=e.geoenrichment.dijit.ReportPlayer.StandardTemplates;var a={US:{"demographic-summary":"368e2bf603fb42c4aa3dac0fce50cdf8","key-facts":"a32be4a9e51d4affa4cc1ddc812cb629","marketing-profile":"df985e2579004a3292c3d00615d53c39","at-risk-population":"8c56287427f84ae8b59142fc5bf1df4c","portrait-property-flyer":"d95e40c3c93d480ab4d1d0b0adbbc5d4",skyscraper:"f989f9b820cd44d390187402447051b4","transportation-to-work":"0d322ac073584079a8cd6a1bda981fe7","health-care":"2b9f186425844ec390584b739ffca026","executive-summary-call-outs":"3e9ccce6cca64e70be19ed789de5f290","tapestry-profile":"2a812da4de404ceba3969472d32c42e7","nearby-restaurants":"2cc25f7b5f194012b39c90b5f9bdb8d3","multi-area-comparison":"72d1e9e4cdf94bf9a2020f8214bef9ca","property-details":"27034d31ab124b9bbe4e63b7df2a0d90","employment-overview":"4a59e329df06480eaa534513eb15f465","office-market-profile":"d4fe343c4d6f4bea840a715f5b033d2d","health-care-and-insurance":"cb2224cc9cb24ce288da729f0650ebf0","demographic-profile":"484825ed241c49d58eaf718d46772051","commute-profile":"afee0a2eb16e46cc9bc61b5d82133249","target-market-summary":"1d32fabd95b446e99049aa0a04f5508e","population-trends":""},CA:{"key-facts":"73f1c835b1624ff0b29a6a364f7ba6dc","multi-area-comparison":"84b05aed2d2f478eb6bb1e4749811cf1"},NL:{"housing-profile":"3d8cb941742d4fffbaca48c65b4bd5b5","insurance-profile":"f126395e7bcc494899cfc1a13a34be1f","media-profile":"8da901e5729e457683f2e4f7081b1bda","personicx-segmentation":"f9ba90b373a245e1b8fd14a027cf1ba5","spending-profile":"81fc53b93a0c4269848ce2ae22ec19e2"},all:{"key-facts":"5645a1d6023c4d8a9d02943ad57a7ab2 ","multi-area-comparison":"e29f56b6d67447e08a45d08981db987c"}},r={"demographic-summary":e.demographicSummary,"key-facts":e.keyFacts,"marketing-profile":e.marketingProfile,"at-risk-population":e.atRiskPopulation,"portrait-property-flyer":e.portraitPropertyFlyer,skyscraper:e.skyscraper,"transportation-to-work":e.transportationToWork,"health-care":e.healthCare,"executive-summary-call-outs":e.executiveSummaryCallOuts,"tapestry-profile":e.tapestryProfile,"nearby-restaurants":e.nearbyRestaurants,"multi-area-comparison":e.multiAreaComparison,"property-details":e.propertyDetails,"employment-overview":e.employmentOverview,"office-market-profile":e.officeMarketProfile,"health-care-and-insurance":e.healthCareAndInsuranceStatistics,"demographic-profile":e.demographicProfile,"commute-profile":e.commuteProfile,"target-market-summary":e.targetMarketSummary,"population-trends":e.populationTrends,"housing-profile":e.housingProfile,"insurance-profile":e.insuranceProfile,"media-profile":e.mediaProfile,"personicx-segmentation":e.personicxSegmentation,"spending-profile":e.spendingProfile},t={portalUrl:"http://www.arcgis.com",user:"esri_reports",query:"http://www.arcgis.com/home/search.html?q=owner%3Aesri_reports"};return t.aliasToID=function(e,r){return(a[e]||a.all)[r]},t.aliasToLabel=function(e){return r[e]},t.getAliases=function(e){var r=a[e]||a.all,t=Object.keys(r);return t.sort(function(e,a){return e.localeCompare(a)}),t},t.getListOptions=function(e){return t.getAliases(e).map(function(a){return{value:t.aliasToID(e,a),label:r[a]}})},t.getSupportedCountries=function(){return Object.keys(a).filter(function(e){return"all"!==e})},t});