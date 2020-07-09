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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"ประวัติชั้นข้อมูลความสูง",showMe:"แสดงผล",selectLine:"<b>การเลือก</b> ฟีเจอร์ในแผนที่",popupRequirement:"หมายเหตุ: ฟีทเจอร์ต้องอยู่ในชั้นข้อมูลที่มีป๊อปอัพ",digitizeDistanceMeasureTool:"การใช้ <b>การวัด</b> เครื่องมือ",selectFeatureHelpUrl:"http://help.arcgis.com/th/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/th/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"มองดูหรือสัมผันที่แผนภูมิภาพตัดขวางความสูงเพื่อแสดงความสูงและตำแหน่งบนแผนที่",directionLabel:"ทิศทางข้อมูลส่วนตัว"},buttons:{measureLabel:"วัด",helpLabel:"ช่วยเหลือ",profileForward:"ส่งต่อ",profileReverse:"กลับกัน",flipProfileTitle:"คลิกเพื่อสลับทิศทางโปรไฟล์",aggregationShowLabel:"แสดงข้อมูลรวม",aggregationHideLabel:"ซ่อนข้อมูลรวม",aggregateElevationGainForward:"รวมความสูงไปล่วงหน้า",aggregateElevationLossForward:"การสูญเสียความสูงรวมไปล่วงหน้า",aggregateElevationGainReverse:"รวมความสูงที่ได้รับย้อนกลับ",aggregateElevationLossReverse:"รวมค่าความสูงกลับรายการที่หายไป"},chart:{title:"ประวัติชั้นข้อมูลความสูง",demResolution:"ความละเอียดของ DEM",elevationTitleTemplate:"ความสูง {0}",distanceTitleTemplate:"ระยะทาง {0}",gainLossTemplate:"ต่ำสุด:{min}   สูงสุด:{max}   เริ่ม:{start}   สิ้นสุด:{end}   เปลี่ยน:{gainloss}"},errors:{MissingConstructorParameters:"พารามิเตอร์ไม่ครบโครงสร้าง",InvalidConfiguration:"การตั้งค่าไม่ถูกต้อง",UnableToProcessResults:"ไม่สามารถวิเคราะห์หาผลลัพธ์ได้",UnableToNormalizeGeometry:"ไม่สามารถที่จะปรับอินพุทรูปทรงเรขาคณิตโพลีไลน์",NullGeometry:"อินพุทรูปทรงเรขาคณิตโพลีไลน์ยังว่างอยู่ ไม่สามารถอัปเดตรายละเอียด",InvalidProfileResults:"ProfileChart.update(...)หายไป 'profileResults' พารามิเตอร์"}});