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

define(["dojo/_base/lang","dojo/has","../../kernel"],function(e,a,r){var s={joinFeatures:{layers:[{name:"Retail States Boundary",displayField:"",description:"AttributeJoin",adminLayerInfo:{viewLayerDefinition:{table:{name:"USABoundary",sourceServiceName:"USABoundary",sourceLayerId:1,sourceLayerFields:[{name:"POPULATION",alias:"POPULATION",source:"POPULATION"}],relatedTables:[{name:"Retail_Stores",sourceServiceName:"RetailStores",sourceLayerId:0,sourceLayerFields:[{name:"Store_Number",alias:"StoreNumber",source:"Store_Number"},{name:"Store_Name",alias:"Store_Name",source:"Store_Name"},{name:"Zone",alias:"Zone",source:"Zone"},{name:"SUM_Total_Sales_R12",alias:"SUM_Total_Sales_R12",statisticType:"SUM",source:"Total_Sales_R12"},{name:"Childrens_Apparel_FY13",alias:"Childrens_Apparel_FY13",source:"Childrens_Apparel_FY13"}],type:"INNER",parentKeyFields:["Shape"],keyFields:["Shape"]}],materialized:!1}},geometryField:{name:"USABoundaries.Shape"}}}]}};return a("extend-esri")&&e.setObject("dijit.analysis.ViewJsonTypes",s,r),s});