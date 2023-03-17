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

define({toolDefine:"Tổng hợp Raster Đa chiều",outputLayerName:"${layername}_aggregated",dimensionLabel:"Chọn chiều để tổng hợp theo đó",variablesLabel:"Chọn (các) biến để tổng hợp",variablesListLabel:"Các biến [Dimension Info] (Mô tả thông tin)",aggregationMethodLabel:"Chọn phương pháp tổng hợp",aggregationFunctionLabel:"Chọn biểu mẫu hàm raster",aggregationDefinitionLabel:"Chọn thông tin xác định tổng hợp",intervalKeywordLabel:"Chọn khoảng từ khóa",intervalValueLabel:"Khoảng giá trị",intervalUnitLabel:"Đơn vị",intervalRangesLabel:"Xác định phạm vi",ignoreNodataLabel:"Bỏ qua các giá trị thiếu trong tính toán",ignore:"Bỏ qua",intervalKeyword:"Khoảng Từ khóa",intervalValue:"Khoảng Giá trị",intervalRanges:"Khoảng Phạm vi",percentileValueLabel:"Giá trị Phân vị",percentileInterpolationTypeLabel:"Loại Nội suy Phân vị",nearest:"Gần nhất",linear:"Tuyến tính",all:"Tất cả",hourly:"Hàng giờ",daily:"Hàng ngày",weekly:"Hàng tuần",monthly:"Hàng tháng",quarterly:"Hàng quý",recurringDaily:"Tái diễn Hàng ngày",recurringWeekly:"Tái diễn Hàng tuần",recurringMonthly:"Tái diễn Hàng tháng",recurringQuarterly:"Tái diễn Hàng quý",yearly:"Hàng năm",hours:"Giờ",days:"Ngày",weeks:"Tuần",months:"Tháng",years:"Năm",custom:"Tùy chỉnh",minimumValueLabel:"Giá trị tối thiểu",maximumValueLabel:"Giá trị tối đa",analysisLayerLabel:"Chọn lớp hình ảnh đa chiều để tổng hợp",itemDescription:"Dịch vụ Phân tích Hình ảnh được tạo ra từ chức năng Tổng hợp Raster Đa chiều",itemTags:"Kết quả Phân tích Raster, Tổng hợp Raster Đa chiều, ${layername}",itemSnippet:"Dịch vụ Phân tích Hình ảnh được tạo ra từ chức năng Tổng hợp Raster Đa chiều"});