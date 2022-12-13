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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define({toolDefine:"Hasilkan Raster Tren",outputLayerName:"${layername}_trend",dimensionLabel:"Pilih dimensi yang akan digunakan dalam analisis tren variabel",variablesLabel:"Pilih variabel untuk menganalisis tren",variablesListLabel:"Variabel [Info Dimensi] (Deskripsi)",trendLineTypeLabel:"Pilih jenis garis untuk mencocokkan nilai variabel di suatu dimensi",linear:"Linear",harmonic:"Harmonik",polynomial:"Polinomial",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Tentukan unit waktu untuk panjang periode musiman",cycleLength:"Tentukan panjang siklus harmonik",cycleUnit:"Pilih satuan waktu untuk panjang siklus harmonik",years:"Tahun",days:"Hari",months:"Bulan",frequencyLabel:"Tentukan nomor frekuensi untuk pencocokan tren harmonik",polynomialOrderLabel:"Tentukan nomor urutan polinomial untuk pencocokan tren",modelStatistics:"Pilih statistik model yang akan disertakan dalam raster tren",rmse:"RMSE",r2:"R-kuadrat",slopePValue:"Nilai-P dari koefisien kemiringan",ignoreNodataLabel:"Abaikan nilai yang hilang dalam penghitungan",ignore:"Abaikan",analysisLayerLabel:"Pilih layer gambar multidinemsi untuk menganalisis tren",itemDescription:"Layanan Gambar Analisis yang dihasilkan dari Buat Raster Tren",itemTags:"Hasil Analisis Raster, Buat Raster Tren, ${layername}",itemSnippet:"Layanan Gambar Analisis yang dihasilkan dari Buat Raster Tren"});