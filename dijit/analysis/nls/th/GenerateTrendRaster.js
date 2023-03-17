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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define({toolDefine:"สร้างแรสเตอร์แนวโน้ม",outputLayerName:"${layername}_trend",dimensionLabel:"เลือกขนาดที่จะใช้ในการวิเคราะห์แนวโน้มตัวแปร",variablesLabel:"เลือกตัวแปรที่จะทำการวิเคราะห์แนวโน้ม",variablesListLabel:"ตัวแปร [ข้อมูลขนาด] (คำอธิบาย)",trendLineTypeLabel:"เลือกประเภทของเส้นที่จะหาเส้นโค้งค่าตัวแปรตามขนาด",linear:"เชิงเส้น",harmonic:"ฮาร์โมนิก",polynomial:"โพลิโนเมียล",mannKendall:"มานน์-เคลดัลล์",seasonalKendall:"ฤดูกาล-เคนดัลล์",seasonalPeriod:"ระบุหน่วยเวลาที่จะใช้เป็นความยาวของช่วงเวลาฤดูกาล",cycleLength:"ระบุความยาวของวงกลมฮาร์โมนิก",cycleUnit:"เลือกหน่วยเวลาของความยาววงกลมฮาร์โมนิก",years:"ปี",days:"วัน",months:"เดือน",frequencyLabel:"ระบุจำนวนความถี่สำหรับการหาเส้นโค้งแนวโน้มแบบฮาร์โมนิก",polynomialOrderLabel:"ระบุจำนวนลำดับโพลิโมเนียลในการหาเส้นโค้งแนวโน้ม",modelStatistics:"เลือกโมเดลสถิติที่จะใส่ลงในราสเตอร์แนวโน้ม",rmse:"RMSE",r2:"สี่เหลี่ยม-R",slopePValue:"ค่า P ของสัมประสิทธิ์ความชัน",ignoreNodataLabel:"เพิกเฉยค่าที่หายไปในการคำนวณ",ignore:"เพิกเฉย",analysisLayerLabel:"เลือกชั้นข้อมูลภาพหลายมิติเพื่อทำการวิเคราะห์แนวโน้ม",itemDescription:"เซอร์วิสภาพการวิเคราะห์ที่สร้างขึ้นจากการสร้างแรสเตอร์แนวโน้ม",itemTags:"ผลการวิเคราะห์แรสเตอร์, สร้างแรสเตอร์แนวโน้ม, ${layername}",itemSnippet:"เซอร์วิสภาพการวิเคราะห์ที่สร้างขึ้นจากการสร้างแรสเตอร์แนวโน้ม"});