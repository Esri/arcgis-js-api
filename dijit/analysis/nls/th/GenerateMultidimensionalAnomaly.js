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

define({toolDefine:"สร้างความผิดปกติหลายมิติ",outputLayerName:"${layername}_anomaly",variablesLabel:"เลือกตัวแปรที่จะสร้างความผิดปกติ",variablesListLabel:"ตัวแปร [Dimension Info] (คำอธิบาย)",methodLabel:"เลือกวิธีการสร้างความผิดปกติ",calculationIntervalLabel:"เลือกช่วงเวลาชั่วคราวเพื่อคำนวณค่าเฉลี่ย",differenceFromMean:"ส่วนต่างจากค่าเฉลี่ย",percentDifferenceFromMean:"ส่วนต่างเปอร์เซ็นต์จากค่าเฉลี่ย",percentOfMean:"เปอร์เซ็นต์ของค่าเฉลี่ย",zScore:"คะแนน Z",differenceFromMedian:"ส่วนต่างจากมัธยฐาน",percentDifferenceFromMedian:"ส่วนต่างเปอร์เซ็นต์จากมัธยฐาน",percentOfMedian:"เปอร์เซ็นต์ของมัธยฐาน",all:"ทั้งหมด",yearly:"รายปี",recurringMonthly:"เกิดซ้ำรายเดือน",recurringWeekly:"เกิดซ้ำรายสัปดาห์",recurringDaily:"เกิดซ้ำรายวัน",hourly:"รายชั่วโมง",externalRaster:"ราสเตอร์ภายนอก",meanRaster:"เลือกชั้นข้อมูลภาพของค่าเฉลี่ย เพื่อใช้ในการอ้างอิง",ignoreNodataLabel:"เพิกเฉยค่าที่หายไปในการคำนวณ",ignore:"เพิกเฉย",analysisLayerLabel:"เลือกชั้นข้อมูลภาพหลายมิติเพื่อสร้างความผิดปกติ",itemDescription:"การวิเคราะห์อิมเมจเซอร์วิสสร้างจากความผิดปกติหลายมิติแล้ว",itemTags:"ผลการวิเคราะห์แรสเตอร์, สร้างความผิดปกติหลายมิติ ${layername}",itemSnippet:"การวิเคราะห์อิมเมจเซอร์วิสสร้างจากความผิดปกติหลายมิติแล้ว"});