// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"INSPIRE (Veri)",description:""},service:{caption:"INSPIRE (Hizmet)",description:""}},dataThemeKeywords:{caption:"Inspire Veri Teması"},inspireServiceType:{discovery:"Keşif Hizmeti",view:"Görüntüleme Hizmeti",download:"İndirme Hizmeti",transformation:"Dönüşüm Hizmeti",invoke:"Çağırma Hizmeti",other:"Diğer Hizmetler"},keywordSections:{dataTheme:"Inspire Veri Teması",serviceCategory:"ISO 19119 Hizmet Kategorisi",gemetConcept:"GEMET Kavramı",otherKeywords:"Diğer anahtar sözcükler"},LanguageCode:{bul:"Bulgarca",cze:"Çekçe",dan:"Danca",dut:"Felemenkçe",eng:"İngilizce",est:"Estonyaca",fin:"Fince",fre:"Fransızca",ger:"Almanca",gre:"Yunanca",hun:"Macarca",gle:"Gaelic (İrlanda lehçesi)",ita:"İtalyanca",lav:"Letonca",lit:"Litvanyaca",mlt:"Maltaca",pol:"Lehçe",por:"Portekizce",rum:"Romence",slo:"Slovakça",slv:"Slovence",spa:"İspanyolca",swe:"İsveççe",chi:"Çince",kor:"Korece",nor:"Norveççe",rus:"Rusça",tur:"Türkçe"},otherConstraints:{noLimitations:"Sınırlama yok",confidentialityOfProceedings:"Kamu yetkililerine ait tutanakları gizliliği...",internationalRelations:"Uluslararası ilişkiler, kamu güvenliği veya ulusal savunma",courseOfJustice:"Adaletin sağlanması, her kişinin adil bir biçimde yargılanma hakkına sahip olması...",confidentialityOfCommercial:"Ticari veya endüstriyel bilgilerin gizliliği...",intellectualProperty:"Fikri mülkiyet hakları",confidentialityOfPersonalData:"Kişisel verilerin ve/veya dosyaların gizliliği...",interestsOrProtection:"Bilgiyi sağlayan herhangi bir kişinin çıkarı ya da korunması...",protectionOfEnvironment:"Söz konusu bilgilerin ilgili olduğu ortamın korunması...",freeText:"Serbest metin"},serviceType:{humanInteractionService:"100 Coğrafya insan etkileşim hizmetleri",humanCatalogueViewer:"101 Katalog görüntüleyici",humanGeographicViewer:"102 Coğrafi görüntüleyici",humanGeographicSpreadsheetViewer:"103 Coğrafi elektronik tablo görüntüleyici",humanServiceEditor:"104 Hizmet düzenleyici",humanChainDefinitionEditor:"105 Zincir tanım düzenleyici",humanWorkflowEnactmentManager:"106 Workflow enactment manager",humanGeographicFeatureEditor:"107 Coğrafi detay düzenleyici",humanGeographicSymbolEditor:"108 Coğrafi simge düzenleyici ",humanFeatureGeneralizationEditor:"109 Detay genelleme düzenleyici",humanGeographicDataStructureViewer:"110 Coğrafi veri yapısı düzenleyici",infoManagementService:"200 Coğrafi model/bilgi yönetim hizmeti",infoFeatureAccessService:"201 Detay erişim hizmeti",infoMapAccessService:"202 Harita erişim hizmeti",infoCoverageAccessService:"203 Kapsam erişim hizmeti",infoSensorDescriptionService:"204 Sensör açıklama hizmeti",infoProductAccessService:"205 Ürün erişim hizmeti",infoFeatureTypeService:"206 Detay türü hizmeti",infoCatalogueService:"207 Katalog hizmeti",infoRegistryService:"208 Kayıt Hizmeti",infoGazetteerService:"209 Gazetteer hizmeti",infoOrderHandlingService:"210 Sipariş işleme hizmeti",infoStandingOrderService:"211 Beklemedeki sipariş hizmeti",taskManagementService:"300 Coğrafi iş akışı/görev yönetim hizmetleri",chainDefinitionService:"301 Zincir tanımlama hizmeti",workflowEnactmentService:"302 Workflow enactment hizmeti",subscriptionService:"303 Abonelik hizmeti",spatialProcessingService:"400 Coğrafi işleme hizmetleri - mekansal",spatialCoordinateConversionService:"401 Koordinat dönüşüm hizmeti",spatialCoordinateTransformationService:"402 Koordinat dönüştürme hizmeti",spatialCoverageVectorConversionService:"403 Kapsam/vektör dönüşüm hizmeti",spatialImageCoordinateConversionService:"404 Görüntü koordinat dönüşüm hizmeti",spatialRectificationService:"405 Düzeltme hizmeti",spatialOrthorectificationService:"406 Ortogonal düzeltme hizmeti",spatialSensorGeometryModelAdjustmentService:"407 Sensör geometri modeli ayarlama hizmeti",spatialImageGeometryModelConversionService:"408 Görüntü geometri modeli dönüşüm hizmeti",spatialSubsettingService:"409 Alt küme oluşturma hizmeti",spatialSamplingService:"410 Örnekleme hizmeti",spatialTilingChangeService:"411 Döşeme değiştirme hizmeti",spatialDimensionMeasurementService:"412 Boyut ölçüm hizmeti",spatialFeatureManipulationService:"413 Detay yönetim hizmetleri",spatialFeatureMatchingService:"414 Detay eşleştirme hizmeti",spatialFeatureGeneralizationService:"415 Detay genelleme hizmeti",spatialRouteDeterminationService:"416 Rota belirleme hizmeti",spatialPositioningService:"417 Konumlandırma hizmeti",spatialProximityAnalysisService:"418 Yakınlık analizi hizmeti",thematicProcessingService:"500 Coğrafi işleme hizmetleri - tematik",thematicGoparameterCalculationService:"501 Coğrafi parametre hesaplama hizmeti",thematicClassificationService:"502 Tematik sınıflandırma hizmeti",thematicFeatureGeneralizationService:"503 Detay genelleme hizmeti",thematicSubsettingService:"504 Alt küme oluşturma hizmeti",thematicSpatialCountingService:"505 Mekansal sayma hizmeti",thematicChangeDetectionService:"506 Değişiklik algılama hizmeti",thematicGeographicInformationExtractionService:"507 Coğrafi bilgi ayıklama hizmetleri",thematicImageProcessingService:"508 Görüntü işleme hizmeti",thematicReducedResolutionGenerationService:"509 Düşük çözünürlüklü oluşturma hizmeti",thematicImageManipulationService:"510 Görüntü Yönetim Hizmetleri",thematicImageUnderstandingService:"511 Görüntü anlama hizmetleri",thematicImageSynthesisService:"512 Görüntü birleştirme hizmetleri",thematicMultibandImageManipulationService:"513 Çok bantlı görüntü yönetimi",thematicObjectDetectionService:"514 Nesne algılama hizmeti",thematicGeoparsingService:"515 Coğrafi ayıklama hizmeti",thematicGeocodingService:"516 Coğrafi kodlama hizmeti",temporalProcessingService:"600 Coğrafi işleme hizmetleri - geçici",temporalReferenceSystemTransformationService:"601 Geçici başvuru sistemi dönüştürme hizmeti",temporalSubsettingService:"602 Alt küme oluşturma hizmeti",temporalSamplingService:"603 Örnekleme hizmeti",temporalProximityAnalysisService:"604 Zamansal yakınlık analizi hizmeti",metadataProcessingService:"700 Coğrafi işleme hizmetleri - meta veri",metadataStatisticalCalculationService:"701 İstatistik hesaplama hizmeti",metadataGeographicAnnotationService:"702 Coğrafi açıklama hizmetleri",comService:"800 Coğrafi iletişim hizmetleri",comEncodingService:"801 Kodlama hizmeti",comTransferService:"802 Aktarım hizmeti",comGeographicCompressionService:"803 Coğrafi sıkıştırma hizmeti",comGeographicFormatConversionService:"804 Coğrafi biçim dönüştürme hizmeti",comMessagingService:"805 Mesajlaşma hizmeti",comRemoteFileAndExecutableManagement:"806 Uzaktan dosya ve yürütülebilir öğe yönetimi"},useLimitation:{noCondition:"Hiçbir koşul geçerli değildir",unknownCondition:"Koşullar bilinmiyor",freeText:"Serbest metin"}});