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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../ChartBuilder","../../../../charts/chartUtils/ChartTypes"],function(t,e){var a={};return a.hhOnwsAnyPet={states:"n,p,i",defaultState:"p",fieldInfo:{isChart:!0,chartJson:t.createChart({type:e.COLUMN,title:"Households: Own Any Pet",points:[{label:"Pet",fullName:"AtRisk.MP26001h_B"},{label:"Bird",fullName:"PetsPetProducts.MP26002h_B"},{label:"Cat",fullName:"PetsPetProducts.MP26003h_B"},{label:"Dog",fullName:"PetsPetProducts.MP26004h_B"}],visualProps:{sorting:"Descending"}})}},a.dogProducts={states:"n,p,i",defaultState:"i",fieldInfo:{isChart:!0,chartJson:t.createChart({title:"Dog Products",points:[{label:"Canned/wet dog food in last 6 mos",fullName:"PetsPetProducts.MP26019h_B"},{label:"Packaged dry dog food in last 6 mos",fullName:"PetsPetProducts.MP26022h_B"},{label:"Dog biscuits/treats in last 6 mos",fullName:"PetsPetProducts.MP26025h_B"},{label:"Flea/tick/parasite product for cat/dog",fullName:"PetsPetProducts.MP26027h_B"}],visualProps:{sorting:"Descending"}})}},a.catProducts={states:"n,p,i",defaultState:"i",fieldInfo:{isChart:!0,chartJson:t.createChart({title:"Cat Products",points:[{label:"Canned/wet cat food in last 6 mos",fullName:"PetsPetProducts.MP26009h_B"},{label:"Packaged dry cat food in last 6 mos",fullName:"PetsPetProducts.MP26012h_B"},{label:"Cat treats in last 6 mos",fullName:"PetsPetProducts.MP26015h_B"},{label:"Cat litter in last 6 mos",fullName:"PetsPetProducts.MP26017h_B"},{label:"Flea/tick/parasite product for cat/dog",fullName:"PetsPetProducts.MP26027h_B"}],visualProps:{sorting:"Descending"}})}},a});