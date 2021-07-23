// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define({toolDefine:"Trend Rasterı Oluştur",outputLayerName:"${layername}_trend",dimensionLabel:"Analiz edilecek değişken trendi boyunca boyut seçin",variablesLabel:"Trendi analiz etmek için değişkenleri seçin",variablesListLabel:"Değişkenler [Boyut Bilgisi] (Açıklama)",trendLineTypeLabel:"Boyut boyunca değişken değerlere uyacak çizgi türünü seçin",linear:"Çizgisel",harmonic:"Harmonik",polynomial:"Polinom",mannKendall:"Mann-Kendall",seasonalKendall:"Mevsimsel-Kendall",seasonalPeriod:"Mevsimsel dönemin uzunluğu için zaman birimini belirt",cycleLength:"Harmonik döngünün uzunluğunu belirtin",cycleUnit:"Harmonik döngü uzunluğunun zaman birimini seçin",years:"Yıl",days:"Günler",months:"Aylar",frequencyLabel:"Harmonik trendin uyacağı sıklık sayısını belirtin",polynomialOrderLabel:"Trendin uyacağı polinominal derece sayısını belirtin",modelStatistics:"Trend rasterına dahil edilecek model istatistiklerini seçin",rmse:"RMSE",r2:"R-kare",slopePValue:"Eğim katsayısının P değeri",ignoreNodataLabel:"Hesaplamadaki eksik değerleri yoksay",ignore:"Yoksay",analysisLayerLabel:"Trendi analiz etmek için çok boyutlu görüntü katmanı seçin",itemDescription:"Trend Rasterı Oluştur ile oluşturulan Analiz Görüntü Servisi",itemTags:"Raster Analizi Sonucu, Trend Rasterı Oluştur, ${layername}",itemSnippet:"Trend Rasterı Oluştur ile oluşturulan Analiz Görüntü Servisi"});