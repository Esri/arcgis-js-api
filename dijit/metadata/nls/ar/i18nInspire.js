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

define({documentTypes:{data:{caption:"INSPIRE (بيانات)",description:""},service:{caption:"INSPIRE (خدمة)",description:""}},dataThemeKeywords:{caption:"إلهام موضوع البيانات"},inspireServiceType:{discovery:"خدمة الاستكشاف",view:"عرض الخدمة",download:"تنزيل الخدمة",transformation:"خدمة التحويل",invoke:"استدعاء خدمة",other:"خدمة أخرى"},keywordSections:{dataTheme:"إلهام موضوع البيانات",serviceCategory:"فئة خدمة ISO 19119",gemetConcept:"مفهوم GEMET",otherKeywords:"كلمات أساسية أخرى"},LanguageCode:{bul:"البلغارية",cze:"التشيكية",dan:"الدانمركية",dut:"اللغة الهولندية",eng:"الإنجليزية",est:"الإستونية",fin:"الفينيقية",fre:"الفرنسية",ger:"الألمانية",gre:"اللغة اليونانية",hun:"مجري",gle:"الغيلية (الأيرلندية)",ita:"الإيطالية",lav:"اللاتفية",lit:"لتواني",mlt:"المالطية",pol:"البولندية",por:"البرتغالية",rum:"اللغة الرومانية",slo:"السلوفاكية",slv:"السلوفينية",spa:"الإسبانية",swe:"السويدية",chi:"الصينية",kor:"الكورية",nor:"النرويجية",rus:"الروسية",tur:"التركية"},otherConstraints:{noLimitations:"لا توجد قيود",confidentialityOfProceedings:"سرية أحداث الهيئات العامة...",internationalRelations:"العلاقات الدولية أو الأمن العام أو الدفاع القومي",courseOfJustice:"سير العدالة، إمكانية كل شخص في الحصول على محاكمة عادلة...",confidentialityOfCommercial:"سرية المعلومات التجارية أو الصناعية...",intellectualProperty:"حقوق الملكية الفكرية",confidentialityOfPersonalData:"سرية البيانات و/أو الملفات الشخصية...",interestsOrProtection:"مصالح أو حماية أي شخص قدّم معلومات...",protectionOfEnvironment:"حماية البيئة التي تتصل بها تلك المعلومات...",freeText:"نص حر"},serviceType:{humanInteractionService:"100 خدمة تفاعل بشري جغرافي",humanCatalogueViewer:"101 عارض كاتالوج",humanGeographicViewer:"102 عارض جغرافي",humanGeographicSpreadsheetViewer:"103 عارض جدول بيانات جغرافي",humanServiceEditor:"104 محرر خدمة",humanChainDefinitionEditor:"105 محرر تعريف السلسلة",humanWorkflowEnactmentManager:"106 مدير تشريع سير العمل",humanGeographicFeatureEditor:"107 محرر المعالم الجغرافية",humanGeographicSymbolEditor:"108 محرر الرمز الجغرافي ",humanFeatureGeneralizationEditor:"109 محرر تعميم المعالم",humanGeographicDataStructureViewer:"110 عارض البنية - البيانات الجغرافية",infoManagementService:"200 خدمة إدارة النموذج/المعلومات الجغرافية",infoFeatureAccessService:"201 خدمة الوصول إلى المعالم",infoMapAccessService:"202 خدمة الوصول إلى الخريطة",infoCoverageAccessService:"203 خدمة الوصول إلى التغطية",infoSensorDescriptionService:"204 خدمة وصف الحسّاس",infoProductAccessService:"205 خدمة الوصول إلى المنتج",infoFeatureTypeService:"206 خدمة نوع المعالم",infoCatalogueService:"207 خدمة الكاتالوج",infoRegistryService:"208 خدمة السّجل",infoGazetteerService:"209 حجم المعجم الجغرافي",infoOrderHandlingService:"210 خدمة معالجة الأمر",infoStandingOrderService:"211 خدمة الأمر المُستقل",taskManagementService:"300 خدمات إدارة سير العمل/المهمة الجغرافية",chainDefinitionService:"301 خدمة تعريف السلسلة",workflowEnactmentService:"302 خدمة تشريع سير العمل",subscriptionService:"303 خدمة الاشتراك",spatialProcessingService:"400 خدمات المعالجة الجغرافية - مكاني",spatialCoordinateConversionService:"401 خدمة تحويل الإحداثيات",spatialCoordinateTransformationService:"402 خدمة تحويل الإحداثيات",spatialCoverageVectorConversionService:"403 خدمة تحويل التغطية/البيانات الاتجاهية",spatialImageCoordinateConversionService:"404 خدمة تحويل إحداثيات الصورة",spatialRectificationService:"405 خدمة الإصلاح",spatialOrthorectificationService:"406 خدمة التصحيح",spatialSensorGeometryModelAdjustmentService:"407 خدمة تعديل نموذج الشكل الهندسي للحسّاس",spatialImageGeometryModelConversionService:"408 خدمة تحويل نموذج الشكل الهندسي للصورة",spatialSubsettingService:"409 خدمة الإعدادات الفرعية",spatialSamplingService:"410 خدمة التجربة",spatialTilingChangeService:"411 خدمة تغيير التجانب",spatialDimensionMeasurementService:"412 خدمة قياس البُعد",spatialFeatureManipulationService:"413 خدمات معالجة المعالم",spatialFeatureMatchingService:"414 خدمة مطابقة المعالم",spatialFeatureGeneralizationService:"415 خدمة تعميم المعالم",spatialRouteDeterminationService:"416 خدمة تحديد المسار",spatialPositioningService:"417 خدمة تحديد الموضع",spatialProximityAnalysisService:"418 خدمة تحليل التقارب",thematicProcessingService:"500 خدمات المعالجة الجغرافية - موضوعي",thematicGoparameterCalculationService:"501 خدمة حساب المعلمة الجغرافية",thematicClassificationService:"502 خدمة التصنيف الموضوعي",thematicFeatureGeneralizationService:"503 خدمة تعميم المعالم",thematicSubsettingService:"504 خدمة الإعدادات الفرعية",thematicSpatialCountingService:"505 خدمة الجرد المكاني",thematicChangeDetectionService:"506 خدمة تغيير الكشف",thematicGeographicInformationExtractionService:"507 خدمات استخراج المعلومات الجغرافية",thematicImageProcessingService:"508 خدمة معالجة الصورة",thematicReducedResolutionGenerationService:"509 خدمة إنشاء الدقة المُخفّضة",thematicImageManipulationService:"510 خدمات معالجة الصورة",thematicImageUnderstandingService:"511 خدمات التعرّف على الصورة",thematicImageSynthesisService:"512 خدمات تركيب الصور",thematicMultibandImageManipulationService:"513 معالجة الصورة مُتعددة النطاقات",thematicObjectDetectionService:"514 خدمة كشف الكائن",thematicGeoparsingService:"515 خدمة التحليل الجغرافي",thematicGeocodingService:"516 خدمة التكويد الجغرافي",temporalProcessingService:"600 خدمات المعالجة الجغرافية - مؤقتة",temporalReferenceSystemTransformationService:"601 خدمة تحويل نظام الإسناد المؤقت",temporalSubsettingService:"602 خدمة الإعدادات الفرعية",temporalSamplingService:"603 خدمة التجربة",temporalProximityAnalysisService:"604 خدمة تحليل التقارب المؤقت",metadataProcessingService:"700 خدمات المعالجة الجغرافية - البيانات التعريفية",metadataStatisticalCalculationService:"701 خدمة الحساب الإحصائي",metadataGeographicAnnotationService:"702 خدمات التعليق التوضيحي الجغرافي",comService:"800 خدمات الاتصال الجغرافي",comEncodingService:"801 خدمة الترميز",comTransferService:"802 خدمة النقل",comGeographicCompressionService:"803 خدمة الضغط الجغرافي",comGeographicFormatConversionService:"804 خدمة تحويل التنسيق الجغرافي",comMessagingService:"805 خدمة الرسائل",comRemoteFileAndExecutableManagement:"806 الإدارة التنفيذية وإدارة الملفات عن بُعد"},useLimitation:{noCondition:"لا تُطبّق أي شروط",unknownCondition:"شروط غير معروفة",freeText:"نص حر"}});