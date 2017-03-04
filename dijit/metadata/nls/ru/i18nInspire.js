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

define({documentTypes:{data:{caption:"INSPIRE (Данные)",description:""},service:{caption:"INSPIRE (Сервис)",description:""}},dataThemeKeywords:{caption:"Тема данных Inspire"},inspireServiceType:{discovery:"Сервис Discovery",view:"Сервис View",download:"Сервис Download",transformation:"Сервис Transformation",invoke:"Сервис Invoke",other:"Другой сервис"},keywordSections:{dataTheme:"Тема данных Inspire",serviceCategory:"Категория сервисов ISO 19119",gemetConcept:"Понятие GEMET",otherKeywords:"Другие ключевые слова"},LanguageCode:{bul:"Болгарский",cze:"Чешский",dan:"Датский",dut:"Нидерландский",eng:"Английский",est:"Эстонский",fin:"Финский",fre:"Французский",ger:"Немецкий",gre:"Греческий",hun:"Венгерский",gle:"Гэльский (Ирландский)",ita:"Итальянский",lav:"Латвийский",lit:"Литовский",mlt:"Мальтийский",pol:"Польский",por:"Португальский",rum:"Румынский",slo:"Словацкий",slv:"Словенский",spa:"Испанский",swe:"Шведский",chi:"Китайский",kor:"Корейский",nor:"Норвежский",rus:"Русский",tur:"Турецкий"},otherConstraints:{noLimitations:"Без ограничений",confidentialityOfProceedings:"Конфеденциальность работы с государственными органами...",internationalRelations:"Международные отношения, общественная безопасность или национальная оборона",courseOfJustice:"Отправления правосудия, возможность справедливого суда для каждого...",confidentialityOfCommercial:"Конфиденциальность коммерческой и промышленной информации...",intellectualProperty:"Права на интеллектуальную собственность",confidentialityOfPersonalData:"Конфиденциальность персональных данных и/или файлов...",interestsOrProtection:"Защита интересов каждого лица, предоставляющего информацию...",protectionOfEnvironment:"Защита среды, к которой относится данная информация...",freeText:"Свободный текст"},serviceType:{humanInteractionService:"100 Географические сервисы, взаимодействующие с пользователем",humanCatalogueViewer:"101 Вьюер каталога",humanGeographicViewer:"102 Географический вьюер",humanGeographicSpreadsheetViewer:"103 Вьюер географических электронных таблиц",humanServiceEditor:"104 Редактор сервисов",humanChainDefinitionEditor:"105 Редактор определения последовательности",humanWorkflowEnactmentManager:"106 Менеджер ввода Workflow в эксплуатацию",humanGeographicFeatureEditor:"107 Редактор географических объектов",humanGeographicSymbolEditor:"108 Редактор географических символов ",humanFeatureGeneralizationEditor:"109 Редактор генерализации объектов",humanGeographicDataStructureViewer:"110 Вьюер структуры географических данных",infoManagementService:"200 Сервис управления географической моделью/информацией",infoFeatureAccessService:"201 Сервис доступа к объектам",infoMapAccessService:"202 Сервис доступа к картам",infoCoverageAccessService:"203 Сервис доступа к покрытию",infoSensorDescriptionService:"204 Сервис описания датчика",infoProductAccessService:"205 Сервис доступа к продукту",infoFeatureTypeService:"206 Сервис типов объектов",infoCatalogueService:"207 Сервис каталога",infoRegistryService:"208 Сервис реестра",infoGazetteerService:"209 Сервис Gazetteer",infoOrderHandlingService:"210 Сервис обработки заказов",infoStandingOrderService:"211 Сервис постоянных поручений",taskManagementService:"300 Сервисы управления географическим рабочим процессом/задачей",chainDefinitionService:"301 Cервис определения последовательности",workflowEnactmentService:"302 Сервис ввода Workflow в эксплуатацию",subscriptionService:"303 Сервис подписки",spatialProcessingService:"400 Географические сервисы обработки – пространственный",spatialCoordinateConversionService:"401 Сервис конвертации координат",spatialCoordinateTransformationService:"402 Сервис преобразования координат",spatialCoverageVectorConversionService:"403 Сервис конвертации покрытиевекторные данные",spatialImageCoordinateConversionService:"404 Сервис конвертации координат изображения",spatialRectificationService:"405 Cервис трансформирования",spatialOrthorectificationService:"406 Cервис ортотрансформирования",spatialSensorGeometryModelAdjustmentService:"407 Сервис настройки модели геометрии сенсора",spatialImageGeometryModelConversionService:"408 Сервис конвертации модели геометрии изображения",spatialSubsettingService:"409 Cервис поднабора",spatialSamplingService:"410 Сервис выборки",spatialTilingChangeService:"411 Сервис смены листов",spatialDimensionMeasurementService:"412 Сервис измерения размеров",spatialFeatureManipulationService:"413 Сервисы обработки объектов",spatialFeatureMatchingService:"414 Сервис сопоставления объектов",spatialFeatureGeneralizationService:"415 Сервис генерализации объектов",spatialRouteDeterminationService:"416 Сервис определения маршрута",spatialPositioningService:"417 Сервис позиционирования",spatialProximityAnalysisService:"418 Сервис анализа близости",thematicProcessingService:"500 Географические сервисы обработки – тематический",thematicGoparameterCalculationService:"501 Сервис вычисления геопараметров",thematicClassificationService:"502 Сервис тематической классификации",thematicFeatureGeneralizationService:"503 Сервис генерализации объектов",thematicSubsettingService:"504 Cервис поднабора",thematicSpatialCountingService:"505 Сервис пространственного подсчета",thematicChangeDetectionService:"506 Сервис изменения метода определения",thematicGeographicInformationExtractionService:"507 Сервисы извлечения географической информации",thematicImageProcessingService:"508 Сервис обработки изображений",thematicReducedResolutionGenerationService:"509 Сервис генерации пониженного разрешения",thematicImageManipulationService:"510 Сервисы обработки изображений",thematicImageUnderstandingService:"511 Сервисы распознавания изображений",thematicImageSynthesisService:"512 Сервисы синтеза изображений",thematicMultibandImageManipulationService:"513 Обработка многоканального изображения",thematicObjectDetectionService:"514 Сервис определения объекта",thematicGeoparsingService:"515 Сервис геопарсинга",thematicGeocodingService:"516 Сервис геокодирования",temporalProcessingService:"600 Географические сервисы обработки – временной",temporalReferenceSystemTransformationService:"601 Сервис преобразования временной системы привязки",temporalSubsettingService:"602 Cервис поднабора",temporalSamplingService:"603 Сервис выборки",temporalProximityAnalysisService:"604 Сервис анализа временной близости",metadataProcessingService:"700 Географические сервисы обработки – метаданные",metadataStatisticalCalculationService:"701 Сервис статистических вычислений",metadataGeographicAnnotationService:"702 Сервисы географических аннотаций",comService:"800 Сервисы географических коммуникаций",comEncodingService:"801 Сервис кодирования",comTransferService:"802 Сервис переноса",comGeographicCompressionService:"803 Сервисы географического сжатия",comGeographicFormatConversionService:"804 Сервисы конвертации географического формата",comMessagingService:"805 Сервис сообщений",comRemoteFileAndExecutableManagement:"806 Управление удаленными файлами и исполняемыми модулями"},useLimitation:{noCondition:"Состояния не применяются",unknownCondition:"Неизвестное состояние",freeText:"Свободный текст"}});