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

define({toolDefine:"Tạo Raster Xu hướng",outputLayerName:"${layername}_trend",dimensionLabel:"Chọn chiều mà xu hướng biến sẽ được phân tích theo đó",variablesLabel:"Chọn (các) biến để phân tích xu hướng",variablesListLabel:"Các biến [Dimension Info] (Thông tin mô tả)",trendLineTypeLabel:"Chọn loại đường để phù hợp với giá trị biến dọc theo một chiều",linear:"Tuyến tính",harmonic:"Hài hòa",polynomial:"Đa thức",cycleLength:"Chỉ định thời gian chu kỳ điều hòa",cycleUnit:"Chọn đơn vị thời gian chu kỳ điều hòa",years:"Các năm",days:"Ngày",frequencyLabel:"Chỉ định số tần suất cho hoạt động điều chỉnh phù hợp xu hướng hài hòa",polynomialOrderLabel:"Chỉ định số thứ tự đa thức cho hoạt động điều chỉnh phù hợp xu hướng",modelStatistics:"Chọn dữ liệu thống kê mô hình để đưa vào raster xu hướng",rmse:"RMSE",r2:"R bình phương",slopePValue:"Giá trị P của hệ số độ dốc",ignoreNodataLabel:"Bỏ qua các giá trị thiếu trong tính toán",ignore:"Bỏ qua",analysisLayerLabel:"Chọn lớp hình ảnh đa chiều để phân tích xu hướng",itemDescription:"Dịch vụ Hình ảnh Phân tích được tạo ra từ hoạt động Tạo Raster Xu hướng",itemTags:"Kết quả Phân tích Raster, Tạo Raster Xu hướng, ${layername}",itemSnippet:"Dịch vụ Hình ảnh Phân tích được tạo ra từ hoạt động Tạo Raster Xu hướng"});