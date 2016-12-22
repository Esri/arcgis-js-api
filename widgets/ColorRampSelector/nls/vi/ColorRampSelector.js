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

define({colorRamps:{none:"Không có",blackToWhite_predefined:"Đen sang Trắng",yellowToRed_predefined:"Vàng sang Đỏ",slope_predefined:"Độ dốc",aspect_predefined:"Hướng",errors_predefined:"Lỗi",heatmap1_predefined:"Bản đồ nhiệt #1",elevation1_predefined:"Độ cao #1",elevation2_predefined:"Độ cao #2",blueBright_predefined:"Xanh da trời Sáng",blueLightToDark_predefined:"Xanh da trời từ Nhạt đến Đậm",blueGreenBright_predefined:"Xanh da trời-Xanh lá cây Sáng",blueGreenLightToDark_predefined:"Xanh da trời-Xanh lá cây từ Nhạt sang Đậm",brownLightToDark_predefined:"Nâu Nhạt đến Đậm",brownToBlueGreenDivergingBright_predefined:"Phân kỳ từ Nâu đến Xanh da trời Xanh lá cây, Sáng",brownToBlueGreenDivergingDark_predefined:"Phân kỳ từ Nâu đến Xanh da trời Xanh lá cây, Đậm",coefficientBias_predefined:"Hệ số Lệch",coldToHotDiverging_predefined:"Phân kỳ từ Lạnh sang Nóng",conditionNumber_predefined:"Số Điều kiện",cyanToPurple_predefined:"Lục lam sang Tím",cyanLightToBlueDark_predefined:"Lục lam-Nhạt sang Xanh da trời-Đậm",distance_predefined:"Khoảng cách",grayLightToDark_predefined:"Xám Nhạt sang Đậm",greenBright_predefined:"Xanh da trời Sáng",greenLightToDark_predefined:"Xanh lá cây Nhạt sang Đậm",greenToBlue_predefined:"Xanh lá cây sang Xanh da trời",orangeBright_predefined:"Cam Sáng",orangeLightToDark_predefined:"Cam Nhạt sang Đậm",partialSpectrum_predefined:"Quang phổ Một phần",partialSpectrum1Diverging_predefined:"Phân kỳ Quang phổ Một phần 1",partialSpectrum2Diverging_predefined:"Phân kỳ Quang phổ Một phần 2",pinkToYellowGreenDivergingBright_predefined:"Phân kỳ Hồng sang Vàng Xanh lá cây, Sáng",pinkToYellowGreenDivergingDark_predefined:"Phân kỳ Hồng sang Vàng Xanh lá cây, Đậm",precipitation_predefined:"Lượng mưa",prediction_predefined:"Dự đoán",purpleBright_predefined:"Tím Sáng",purpleToGreenDivergingBright_predefined:"Phân kỳ Tím sang Xanh lá cây, Sáng",purpleToGreenDivergingDark_predefined:"Phân kỳ Tím sang Xanh lá cây, Đậm",purpleBlueBright_predefined:"Tím-Xanh da trời Sáng",purpleBlueLightToDark_predefined:"Tím-Xanh da trời Nhạt sang Đậm",purpleRedBright_predefined:"Tím-Đỏ Sáng",purpleRedLightToDark_predefined:"Tím-Đỏ Nhạt sang Đậm",redBright_predefined:"Đỏ Sáng",redLightToDark_predefined:"Đỏ Nhạt sang Đậm",redToBlueDivergingBright_predefined:"Phân kỳ Đỏ sang Xanh da trời, Sáng",redToBlueDivergingDark_predefined:"Phân kỳ Đỏ sang Xanh da trời, Đậm",redToGreen_predefined:"Đỏ đến Xanh lục",redToGreenDivergingBright_predefined:"Phân kỳ Đỏ sang Xanh lá cây, Sáng",redToGreenDivergingDark_predefined:"Phân kỳ Đỏ sang Xanh lá cây, Đậm",spectrumFullBright_predefined:"Quang phổ-Toàn bộ Sáng",spectrumFullDark_predefined:"Quang phổ-Toàn bộ Đậm",spectrumFullLight_predefined:"Quang phổ-Toàn bộ Nhạt",surface_predefined:"Bề mặt",temperature_predefined:"Nhiệt độ",whiteToBlack_predefined:"Trắng sang Đen",yellowToDarkRed_predefined:"Vàng đến Đỏ Sẫm",yellowToGreenToDarkBlue_predefined:"Vàng đến Xanh lá cây đến Xanh da trời Đậm",yellowGreenBright_predefined:"Vàng-Xanh lá cây Sáng",yellowGreenLightToDark_predefined:"Vàng-Xanh lá cây Nhạt sang Đậm"}});