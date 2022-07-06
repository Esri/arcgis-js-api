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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"INSPIRE (Daten)",description:""},service:{caption:"INSPIRE (Dienst)",description:""}},dataThemeKeywords:{caption:"Inspire-Datenthema"},inspireServiceType:{discovery:"Discovery Service",view:"View Service",download:"Download Service",transformation:"Transformation Service",invoke:"Invoke Service",other:"Sonstiger Dienst"},keywordSections:{dataTheme:"Inspire-Datenthema",serviceCategory:"ISO 19119-Dienstkategorie",gemetConcept:"GEMET-Konzept",otherKeywords:"Andere Schlagwörter"},LanguageCode:{bul:"Bulgarisch",cze:"Tschechisch",dan:"Dänisch",dut:"Niederländisch",eng:"Englisch",est:"Estnisch",fin:"Finnisch",fre:"Französisch",ger:"Deutsch",gre:"Griechisch",hun:"Ungarisch",gle:"Gälisch (Irisch)",ita:"Italienisch",lav:"Lettisch",lit:"Litauisch",mlt:"Maltesisch",pol:"Polnisch",por:"Portugiesisch",rum:"Rumänisch",slo:"Slowakisch",slv:"Slowenisch",spa:"Spanisch",swe:"Schwedisch",chi:"Chinesisch",kor:"Koreanisch",nor:"Norwegisch",rus:"Russisch",tur:"Türkisch"},otherConstraints:{noLimitations:"Keine Beschränkungen",confidentialityOfProceedings:"Die Vertraulichkeit der Vorgänge öffentlicher Behörden...",internationalRelations:"Internationale Beziehungen, öffentliche Sicherheit oder nationale Verteidigung",courseOfJustice:"Rechtsanspruch und die Möglichkeit einer Person, einen fairen Prozess zu bekommen...",confidentialityOfCommercial:"Die Vertraulichkeit der Daten aus Handel oder Industrie...",intellectualProperty:"Geistiges Eigentum",confidentialityOfPersonalData:"Die Vertraulichkeit von persönlichen Daten bzw. Dateien...",interestsOrProtection:"Die Interessen oder der Schutz einer Person, die die Informationen bereitgestellt hat...",protectionOfEnvironment:"Der Umweltschutz, auf den sich solche Informationen beziehen...",freeText:"Freier Text"},serviceType:{humanInteractionService:"100 Geografische Dienste für Anwender",humanCatalogueViewer:"101 Katalogdienst",humanGeographicViewer:"102 Dienst für geografische Visualisierung",humanGeographicSpreadsheetViewer:"103 Dienst für geografische Tabellenkalkulation",humanServiceEditor:"104 Editor für Verarbeitungsdienste",humanChainDefinitionEditor:"105  Editor für die Definition von Bearbeitungsketten",humanWorkflowEnactmentManager:"106 Aufrufprogramm für Bearbeitungsketten",humanGeographicFeatureEditor:"107 Editor für geografische Objekte",humanGeographicSymbolEditor:"108 Editor für geografische Symbole ",humanFeatureGeneralizationEditor:"109 Editor für die Objektgeneralisierung",humanGeographicDataStructureViewer:"110 Betrachter für geografische Datenstrukturen",infoManagementService:"200 Geografische Dienste für die Verwaltung von Daten und Datenmodellen",infoFeatureAccessService:"201 Dienst für den Zugriff auf Objekte",infoMapAccessService:"202 Dienst für den Zugriff auf grafische Darstellungen",infoCoverageAccessService:"203 Dienst für den Zugriff auf Rasterdaten",infoSensorDescriptionService:"204 Dienst für die Beschreibung von Sensoren",infoProductAccessService:"205 Dienst für den Zugriff auf Produkte",infoFeatureTypeService:"206 Dienst für den Zugriff auf Objektarten",infoCatalogueService:"207 Katalogdienst",infoRegistryService:"208 Registerdienst",infoGazetteerService:"209 Gazetteerdienst",infoOrderHandlingService:"210 Auftragsdienst",infoStandingOrderService:"211 Dauerauftragsdienst",taskManagementService:"300 Geografische Dienste für die Verwaltung von Bearbeitungsketten und Aufgaben",chainDefinitionService:"301 Dienst für die Definition von Bearbeitungsketten",workflowEnactmentService:"302 Dienst für die Ausführung von Bearbeitungsketten",subscriptionService:"303 Abonnementdienst",spatialProcessingService:"400 Geografische Verarbeitungsdienste — raumbezogen",spatialCoordinateConversionService:"401 Dienst für die Konversion von Koordinaten",spatialCoordinateTransformationService:"402 Dienst für die Transformation von Koordinaten",spatialCoverageVectorConversionService:"403 Dienst für die Umwandlung zwischen Raster- und Vektordaten",spatialImageCoordinateConversionService:"404 Dienst für die Konversion von Bildkoordinaten",spatialRectificationService:"405 Entzerrungsdienst",spatialOrthorectificationService:"406 Ortho-Entzerrungsdienst",spatialSensorGeometryModelAdjustmentService:"407 Dienst für die Justierung von Geometriemodellen von Sensoren",spatialImageGeometryModelConversionService:"408 Dienst für die Konversion von Geometriemodellen",spatialSubsettingService:"409 Geografischer Ausschneidedienst",spatialSamplingService:"410 Raumbezogener Auswahldienst",spatialTilingChangeService:"411 Kachelungsdienst",spatialDimensionMeasurementService:"412 Messungsdienst",spatialFeatureManipulationService:"413 Objektbearbeitungsdienste",spatialFeatureMatchingService:"414 Vergleichsdienst",spatialFeatureGeneralizationService:"415 Generalisierungsdienst",spatialRouteDeterminationService:"416 Routensuchdienst",spatialPositioningService:"417 Positionierungsdienst",spatialProximityAnalysisService:"418 Analysedienst für räumliche Nachbarschaftsbeziehungen",thematicProcessingService:"500 Geografische Verarbeitungsdienste – themenbezogen",thematicGoparameterCalculationService:"501 Berechnungsdienst für Geoparameter",thematicClassificationService:"502 Dienst für die thematische Klassifizierung",thematicFeatureGeneralizationService:"503 Generalisierungsdienst für Objektarten",thematicSubsettingService:"504 Themenbezogener Ausschneidedienst",thematicSpatialCountingService:"505 Zähldienst",thematicChangeDetectionService:"506 Erkennungsdienst für Veränderungen",thematicGeographicInformationExtractionService:"507 Auszugsdienst für geografische Informationen",thematicImageProcessingService:"508 Themenbezogener Bildverarbeitungsdienst",thematicReducedResolutionGenerationService:"509 Auflösungsreduzierungsdienst",thematicImageManipulationService:"510 Bildbearbeitungsdienste",thematicImageUnderstandingService:"511 Interpretationsdienste für Bilder",thematicImageSynthesisService:"512 Bildsynthesedienste",thematicMultibandImageManipulationService:"513 Multiband-Bildbearbeitungsdienst",thematicObjectDetectionService:"514 Objekterkennungsdienst",thematicGeoparsingService:"515 Geoparserdienst",thematicGeocodingService:"516 Geocodierungsdienst",temporalProcessingService:"600 Geografische Verarbeitungsdienste – zeitbezogen",temporalReferenceSystemTransformationService:"601 Transformationsdienst für den Zeitbezug",temporalSubsettingService:"602 Geografischer Ausschneidedienst",temporalSamplingService:"603 Zeitbezogener Auswahldienst",temporalProximityAnalysisService:"604  Analysedienst für zeitbezogene Nachbarschaftsbeziehungen",metadataProcessingService:"700 Geografische Bearbeitungsdienste – Metadaten",metadataStatisticalCalculationService:"701 Dienst für statistische Berechnungen",metadataGeographicAnnotationService:"702 Ergänzungsdienst für Geodaten",comService:"800 Geografische Nachrichtenübermittlungsdienste",comEncodingService:"801 Codierungsdienst",comTransferService:"802 Übertragungsdienst",comGeographicCompressionService:"803 Kompressionsdienst für Geodaten",comGeographicFormatConversionService:"804 Umformatierungsdienst für Geodaten",comMessagingService:"805 Nachrichtenübermittlungsdienst",comRemoteFileAndExecutableManagement:"806 Dienst für den Zugriff auf externe Daten und Programme"},useLimitation:{noCondition:"Es gelten keine Bedingungen.",unknownCondition:"Die Bedingungen sind unbekannt.",freeText:"Freier Text"}});