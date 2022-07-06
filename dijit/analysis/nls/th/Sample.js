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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define({toolDefine:"ตัวอย่าง",outputLayerName:"${layername}_sampled",locationLayer:"เลือกชั้นข้อมูลตำแหน่ง",uniqueIDField:"ระบุฟิลด์ ID ที่ไม่ซ้ำกัน",acquisitionDefinition:"ระบุข้อมูลการรับข้อมูลตำแหน่ง (ทางเลือก)",acquisitionDimension:"ระบุขนาดและรูปแบบข้อมูลการรับ (ทางเลือก)",buffer:"ระบุฟิลด์หรือค่าระยะทางบัฟเฟอร์",formatOptions:"ตัวเลือกรูปแบบ",dimensionField:"ฟิลด์หรือค่าขนาด",dimensionFieldOrValue:"ฟิลด์หรือค่าขนาด",relativeDaysBefore:"ค่าสัมพัทธ์ก่อนหน้า",relativeDaysAfter:"ค่าสัมพัทธ์หลังจาก",singleFieldOrValue:"ฟิลด์หรือค่าเดี่ยว",singleFieldWithRelativeValues:"ฟิลด์หรือค่าเดี่ยวที่มีค่าสัมพัทธ์",startEndFieldsOrValues:"ฟิลด์หรือค่าเริ่มต้นและสิ้นสุด",startFieldOrValue:"ฟิลด์หรือค่าเริ่มต้น",endFieldOrValue:"ฟิลด์หรือค่าสิ้นสุด",statisticsType:"เลือกประเภทสถิติ",percentile:"เปอร์เซ็นต์",percentileValue:"ค่าเปอร์เซ็นไทล์",resample:"ระบุเทคนิคการรีแซมเปิล",nearest:"ใกล้ที่สุด",bilinear:"บิลิแนร์",cubic:"ลูกบาศก์",outputLayout:"ระบุเค้าโครงเอาท์พุท",layoutRow:"แสดงค่าตัวอย่างในแถว",layoutColumn:"แสดงค่าตัวอย่างในคอลัมน์",outputType:"ระบุประเภทเอาท์พุท",features:"ฟีเจอร์",table:"ตาราง",removeLayer:"ลบชั้นข้อมูล",dimensionError:"ไม่สามารถโหลดข้อมูลขนาดได้ ตัวแปรทั้งหมดต้องมีขนาดเท่ากัน",analysisLayerLabel:"เลือกชั้นข้อมูลภาพที่ใช้เป็นตัวอย่าง",itemDescription:"เซอร์วิสภาพการวิเคราะห์ที่สร้างขึ้นจากตัวอย่าง",itemTags:"ผลการวิเคราะห์ราสเตอร์ตัวอย่าง ${layername}",itemSnippet:"เซอร์วิสภาพการวิเคราะห์ที่สร้างขึ้นจากตัวอย่าง"});