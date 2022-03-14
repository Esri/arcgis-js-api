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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Yükselti Profili",showMe:"göster",selectLine:"Haritada bir detay <b>seçin</b>.",popupRequirement:"NOT: detayın Açılan Pencerelerin etkinleştirildiği bir katmanda olması gerekir.",digitizeDistanceMeasureTool:"<b>Ölçüm</b> araçlarını kullanın.",selectFeatureHelpUrl:"http://help.arcgis.com/tr/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/tr/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Yükseltileri görüntüleyip konumu haritada konumu göstermek için Yükselti Profili grafiğinin üzerinde gezinin veya grafiğe dokunun.",directionLabel:"Profil Yönü"},buttons:{measureLabel:"Ölçü",helpLabel:"Yardım",profileForward:"İleri",profileReverse:"Ters",flipProfileTitle:"Profil Yönünü ters çevirmek için tıklayın",aggregationShowLabel:"Birleştirme Bilgilerini Göster",aggregationHideLabel:"Birleştirme Bilgilerini Gizle",aggregateElevationGainForward:"Yükselti Kazancını İleri Doğru Birleştir",aggregateElevationLossForward:"Yükselti Kaybını İleri Doğru Birleştir",aggregateElevationGainReverse:"Yükselti Kazancını Geriye Doğru Birleştir",aggregateElevationLossReverse:"Yükselti Kaybını Geriye Doğru Birleştir"},chart:{title:"Yükselti Profili",demResolution:"DEM Çözünürlüğü",elevationTitleTemplate:"{0} olarak yükselti",distanceTitleTemplate:"{0} olarak mesafe",gainLossTemplate:"Min.:{min}   Maks.:{max}   Başlangıç:{start}   Bitiş:{end}   Değişim:{gainloss}"},errors:{MissingConstructorParameters:"Eksik yapıcı parametresi.",InvalidConfiguration:"Geçersiz yapılandırma.",UnableToProcessResults:"Analiz sonuçları işlenemiyor.",UnableToNormalizeGeometry:"Girdi çok çizgili geometrisi normalleştirilemiyor",NullGeometry:"Girdi çok çizgili geometrisi boş. Profil güncellenemiyor",InvalidProfileResults:"ProfileChart.update(...) missing 'profileResults' parametresi."}});