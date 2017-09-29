// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./ChartBuilder"],function(e){var l={};return l.ownComputer={name:"Households own Computer",states:"n,p,i",fieldInfo:{isChart:!0,chartJson:e.createDonutChart("Households own Computer",[{label:"Desktop computer",calculator:"n/ElectronicsInternet.MP09035H_B"},{label:"Laptop/notebook",calculator:"n/ElectronicsInternet.MP09036H_B"},{label:"Netbook",calculator:"n/ElectronicsInternet.MP09037H_B"},{label:"Any Apple/Mac brand computer",calculator:"n/ElectronicsInternet.MP09039H_B"},{label:"Any PC/non-Apple brand computer",calculator:"n/ElectronicsInternet.MP09040H_B"}])}},l.ownCellPhone={name:"Number of Cell Phones in Household",states:"n,p,i",fieldInfo:{isChart:!0,chartJson:e.createDonutChart("Number of Cell Phones in HH",[{label:"1 Cell Phone",calculator:"n/PhonesYellowPages.MP27053H_B"},{label:"2 Cell Phones",calculator:"n/PhonesYellowPages.MP27054H_B"},{label:"3+ Cell Phones",calculator:"n/PhonesYellowPages.MP27055H_B"}])}},l});