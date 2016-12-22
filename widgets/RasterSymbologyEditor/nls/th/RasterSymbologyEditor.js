// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define({stretchTitle:"ยืด",stretchDescription:"ยืดค่าสอดคล้องกับชุดสี.",rgbTitle:"ค่าสีอาร์จีบี",noneTitle:"ไม่มีเลย",rgbDescription:"รวมช่วงคลื่นเป็นสีแดง, สีเขียวและสีฟ้าประกอบกัน",vectorFieldTitle:"ฟิลด์เวกเตอร์",vectorFieldDescription:"แสดงภาพและสัญลักษณ์ของเวกเตอร์",discreteTitle:"ไม่ต่อเนื่อง",discreteDescription:"กลุ่มข้อมูลขึ้นอยู่กับจำนวนที่เลือกของสีและการใช้โทนสี",classifyTitle:"การแบ่งกลุ่ม",classifyDescription:"กำหนดสีสำหรับแต่ละกลุ่มของค่า",uniqueValueTitle:"ค่าไม่ซ้ำกัน",uniqueValueDescription:"กำหนดสีสำหรับแต่ละค่า",bandPrefix:"คณะ",bandCombinationTitle:"การผสมของช่วงคลื่น",bandCombinationPresetLabel:"การผสม",bandComboNameCustom:"แก้ไขเอง",bandComboNameNaturalColor:"สีธรรมชาติ",bandComboDescNaturalColor:"การกระทำนี้เป็นที่ใกล้เคียงกับสิ่งที่เห็นด้วยตามนุษย์.",bandComboNameColorInfrared:"สีอินฟาเรด",bandComboDescColorInfrared:"แตกต่างระหว่างพืชเมืองและน้ำ แสดงให้เห็นถึงความคมชัดมากขึ้นในพืชมากกว่าการใช้ประโยชน์ที่ดิน.",bandComboNameLanduse:"การใช้ประโยชน์ที่ดิน",bandComboDescLanduse:"แตกต่างระหว่างเมืองพืชผักและน้ำ แสดงให้เห็นถึงความคมชัดมากขึ้นในการใช้ที่ดินในเมืองกว่าสีอินฟาเรด.",bandComboNameLandWater:"ที่ดิน / พื้นผิวน้ำ",bandComboDescLandWater:"สร้างการวาดภาพที่ชัดเจนระหว่างดินและน้ำและสามารถบัญชีสำหรับหมอกควันบางส่วน",bandComboNameVegetation:"การวิเคราะห์พืชพรรณธรรมชาติ",bandComboDescVegetation:"เน้นพืชที่ขึ้นอยู่กับปริมาณน้ำและโครงสร้างของเซลล์",bandComboNameShallowBathymetric:"ความตื้นลึกของท้องทะเล",bandComboDescShallowBathymetric:"เน้นพื้นผิวย่อยของฟีเจอร์ในน้ำสะอาด",redBandTitle:"สีแดง",greenBandTitle:"สีเขียว",blueBandTitle:"สีฟ้า",alphaBandTitle:"อัลฟ้า",backgroundTitle:"พื้นหลัง",displayBackgroundCheckboxTitle:"ไม่แสดงค่าพื้นหลัง",noDataLabel:"ไม่มีข้อมูล",noneStretchTitle:"ไม่มีเลย",noneStretchTypeDescription:"แสดงค่าระหว่างค่าต่ำสุดและสูงสุดที่อาจเกิดขึ้น",percentClipStretchTitle:"Percent Clip",percentClipStretchTypeDescription:"ตัดออกร้อยละของค่าสูงสุดและต่ำสุด",minMaxStretchTitle:"ค่าต่ำสุด ค่าสูงสุด",minMaxStretchTypeDescription:"แสดงค่าที่แท้จริงระหว่างค่าต่ำสุด และ สูงสุด",standardDeviationStretchTitle:"แบ่งกลุ่มโดยใช้ค่าเบี่ยงเบนมาตราฐาน",standardDeviationTypeDescription:"แสดงค่าระหว่างจำนวนที่ระบุค่าเบี่ยงเบนมาตรฐาน.",stretchTypeLabel:"วิธีการยืดข้อมูล",gammaLabel:"แกรมม่า",statisticsLabel:"สถิติ",minLabel:"ต่ำสุด",maxLabel:"มากที่สุด",nStdDeviationsLabel:"จำนวนของค่าเบี่ยงเบนมาตราฐาน",draStatisticsTitle:"ดีอาร์เอ",datasetStatisticsTitle:"ชุดข้อมูล",fieldLabel:"ฟิลด์",normalizationLabel:"การหาสัดส่วนของข้อมูล",methodLabel:"วิธีการ",methodNaturalBreaksTitle:"แบ่งกลุ่มตามค่าของข้อมูล",methodQuantileTitle:"แบ่งกลุ่มโดยมีจำนวนที่อยู่ในกลุ่มเท่าๆกัน",methodEqualIntervalTitle:"แบ่งกลุ่มโดยช่วงชั้นมีค่าเท่ากัน",methodDefinedIntervalTitle:"แบ่งกลุ่มโดยการกำหนดความกว้างของช่วงชัน",methodManualIntervalTitle:"แบ่งกลุ่มโดยการกำหนดค่าเอง",methodGeometricIntervalTitle:"ช่วงชั้นทางเรขาคณิต",methodStandardDeviationTitle:"แบ่งกลุ่มโดยค่าเบี่ยงเบนมาตราฐาน",classesLabel:"ชั้น",colorSchemeLabel:"โครงร่างสี",colorRampTitle:"เฉดสี",bandSelectionLabel:"คณะ",noneBandKeyword:"ไม่มีเลย",valueFieldTitle:"ค่าในฟิลด์",valuesTableTitle:"ค่า",uniqueValueFieldTitle:"ฟิลด์",uniqueValuesColorRampTitle:"ค่าที่ไม่ซ้ำกัน",valueLabel:"มูลค่า",symbolLabel:"สัญลักษณ์"});