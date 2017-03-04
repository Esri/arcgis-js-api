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

define({documentTypes:{arcgis:{caption:"ArcGIS-Metadaten",editorCaption:"Metadaten",description:""}},emptyOption:"Leer",conditionals:{ISO19139A1_ROW4:'Wenn "Hierarchieebene der Metadaten" gleich "Datenbestand" ist, ist ein geografischer Rahmen oder eine geografische Beschreibung erforderlich.',ISO19139A1_ROW6:"Ein Identifikator oder Name für den Datenbestand ist erforderlich.",ISO19139A1_ROW7:'Bei Auswahl von "Andere Beschränkungen" sind andere Beschränkungen erforderlich.',ISO19139A1_ROW9:'Wenn "Geltungsbereich" nicht "Dataset" oder "Serie" ist, ist eine Ebenenbeschreibung erforderlich.',ISO19139A1_ROW10_11_12:'Wenn "Geltungsbereich" gleich "Dataset" oder "Serien" ist, ist eine Anweisung, ein Bearbeitungsschritt oder eine Datenquelle erforderlich.',ISO19139A1_ROW15:'Bei Auswahl von "Kontrollpunktverfügbarkeit" ist eine Kontrollpunktbeschreibung erforderlich.',ISO19139A1_ROW18:'Wenn "Vertrieb" dokumentiert ist, ist ein Format oder Vertriebsformat erforderlich.',INSPIRE_AccessLimitation:" Es ist mindestens ein rechtlicher Zugriffs- oder Sicherheitsklassifizierungscode erforderlich. (INSPIRE)",INSPIRE_UseLimitation:" Es ist mindestens eine Anwendungseinschränkung erforderlich. (INSPIRE)",INSPIRE_ConformanceResult:'Für einen Bericht zur "Konsistenz des Wertebereichs" ist ein Konformitätsergebnis erforderlich. (INSPIRE)',INSPIRE_DomainConsistency:'Es ist ein Bericht zur "Konsistenz des Wertebereichs" erforderlich. (INSPIRE)',INSPIRE_LineageStatement:'Wenn "Geltungsbereich" gleich "Dataset" oder "Serie" ist, ist eine Herkunftsangabe erforderlich. (INSPIRE).',FGDC_DescIfTemporal:"Für eine zeitliche Ausdehnung ist eine Beschreibung erforderlich. (FGDC)",FGDC_Keywords:"Es ist ein Thema, Tag oder Themenschlagwort erforderlich. (FGDC)",FGDC_Reports:'Es sind Berichte zu "Datendefizit" und "Konzeptionelle Konsistenz" erforderlich. (FGDC)',FGDC_Temporal:"Es ist mindestens eine zeitliche Ausdehnung erforderlich. (FGDC)",NAP_Contact:"Ein(e) Adresse/Zustellungspunkt, Telefon-/Voicemail-Rufnummer oder Online-Ressource/URL ist erforderlich. (NAP)",GEN_BoundingBox:"Mindestens ein geografischer Rahmen ist erforderlich.",GEN_ReportResult:"Es ist entweder ein Konformitätsergebnis oder ein quantitatives Ergebnis erforderlich.",minLessThanMax:"Der Minimalwert muss kleiner sein als der Maximalwert."},hints:{integerGreaterThanZero:"(geben Sie eine ganze Zahl > 0 ein)",integerGreaterThanOne:"(geben Sie eine ganze Zahl > 1 ein)",integer0To100:"(geben Sie eine ganze Zahl 0...100 ein)",maxScale:"(geben Sie eine ganze Zahl > 0, z. B. 50000, ein)",minScale:"(geben Sie eine ganze Zahl > 0, z. B. 150000000, ein)",number0To100:"(geben Sie eine Zahl 0...100 ein)",number0To360:"(geben Sie eine Zahl 0...360 ein)",number90To90:"(geben Sie eine Zahl -90...90 ein)",listOfDoubles:"(geben Sie eine Zahlenliste ein, verwenden Sie eine Leerstelle als Trennzeichen)"},htmlEditor:{button:"Bearbeiten..."},sections:{overview:"Übersicht",esri:"Esri",resource:"Ressource",reference:"Referenz",content:"Inhalt",distribution:"Vertrieb",quality:"Qualität",eainfo:"Felder",representation:"Räumliche Darstellung",metadata:"Metadaten"},metadataStyle:{caption:"ArcGIS-Metadaten-Style",changeButton:"Ändern...",dialogTitle:"Metadaten-Style auswählen",updating:"Dokument wird aktualisiert...","Item Description":"Elementbeschreibung","FGDC CSDGM Metadata":"FGDC CSDGM Metadata","ISO 19139 Metadata Implementation Specification":"ISO 19139 Metadata Implementation Specification","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Metadata Implementation Specification GML3.2","INSPIRE Metadata Directive":"INSPIRE Metadata Directive","North American Profile of ISO19115 2003":"North American Profile of ISO19115 2003"},aggrInfo:{caption:"Aggregationsinformation",datasetHint:"Ein Identifikator oder Name für den Datenbestand ist erforderlich.",aggrDSIdent:"Identifikator für den Datenbestand",aggrDSName:"Name für den Datenbestand"},appSchInfo:{caption:"Anwendungsschema",asName:"Schemaname",asSchLang:"Schemasprache",asCstLang:"Constraint Language",asAscii:"ASCII",asGraFile:"Grafikdatei",asGraFile_src:"Grafikdateiquelle",asSwDevFile:"Software-Entwicklungsdatei",asSwDevFile_src:"Quelle der Software-Entwicklungsdatei",asSwDevFiFt:"Format der Software-Entwicklungsdatei"},citation:{caption:"Bibliografische Angaben",section:{titlesAndDates:"Titel und Datum",links:"URLs",identifiers:"Identifikatoren",presentation:"Formen",other:"Andere",edition:"Edition",series:"Reihe"},conditionalDate:{caption:"Datumsangaben",msg:"Ein Erstellungsdatum, Veröffentlichungsdatum oder Revisionsdatum ist erforderlich.",msg_nap:"Eine Datumsangabe ist erforderlich."},resTitle:"Titel",resAltTitle:"Alternativtitel",collTitle:"Gemeinsamer Titel",date:{createDate:"Erstellungsdatum",pubDate:"Veröffentlichungsdatum",reviseDate:"Revisionsdatum",notavailDate:"Nicht verfügbares Datum",inforceDate:"In Kraft getreten am",adoptDate:"Übernommen am",deprecDate:"Veraltet am",supersDate:"Ersetzt am"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Kennung",identCode:"Code",identAuth:"Angaben zur zuständigen Stelle"},resEd:"Edition",resEdDate:"Ausgabedatum",datasetSeries:{seriesName:"Name",issId:"Ausgabe",artPage:"Seite"},otherCitDet:"Andere Details",contactCaption:"Ansprechpartner für bibliografische Angaben"},cntAddress:{caption:"Adresse",delPoint:"Adresse",city:"Ort",adminArea:"Verwaltungseinheit",postCode:"PLZ",country:"Staat",eMailAdd:"E-Mail",addressType:{caption:"Adresstyp",postal:"Postalisch",physical:"Physisch",both:"Beides"}},cntOnlineRes:{caption:"Online-Ressource",linkage:"URL",protocol:"Protokoll",appProfile:"Anwendungsprofil",orName:"Bezeichnung",orDesc:"Beschreibung"},cntPhone:{caption:"Telefon",voiceNum:"Telefon",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Kennung",identCode:"Code",idCodeSpace:"Namensraum",idVersion:"Version",identAuth:"Angaben zur zuständigen Stelle"},constraints:{caption:"Einschränkungen",useLimit:"Anwendungseinschränkung",general:{caption:"Allgemein"},legal:{caption:"Rechtliche Hinweise",accessConsts:"Zugriffsbeschränkungen",useConsts:"Nutzungsbeschränkungen",othConsts:"Andere Einschränkungen"},security:{caption:"Sicherheit",classSys:"Einstufungssystem",userNote:"Erläuterung",handDesc:"Verwendungshinweis"}},contInfo:{caption:"Dateninhalt",section:{CovDesc:"Rasterdateninhalt",ImgDesc:"Aufnahmeeigenschaften",FetCatDesc:"Objektartenkatalog"},attDesc:"Attributbeschreibung",covDim:{caption:"Bereich oder Band",seqID:"Sequenzidentifikator",seqIDType:"Sequenzidentifikatortyp",dimDescrp:"Beschreibung"},RangeDim:{caption:"Wertebereich"},Band:{caption:"Band",minVal:"Minimalwert",maxVal:"Maximalwert",valUnit:"Einheit",pkResp:"Empfindlichkeitsmaximum",bitsPerVal:"Bittiefe",toneGrad:"Anzahl Graustufen",sclFac:"Skalierungsfaktor",offset:"Offsetwert"},CovDesc:{caption:"Rasterdateninhalt",section:{description:"Beschreibung",rangesAndBands:"Bereiche und Bänder"}},ImgDesc:{caption:"Aufnahmeeigenschaften",section:{description:"Beschreibung",rangesAndBands:"Bereiche und Bänder"},illElevAng:"Beleuchtungshöhenwinkel",illAziAng:"Beleuchtungsazimut",cloudCovPer:"Wolkenbedeckung",cmpGenQuan:"Kompressionszyklen",trianInd:"Triangulation?",radCalDatAv:"Radiometriekalibrierung?",camCalInAv:"Kamerakalibrierung?",filmDistInAv:"Filmverzerrung?",lensDistInAv:"Linsenkorrektur?",imagQuCode:"Bildqualität",prcTypCde:"Bearbeitungsgrad"},FetCatDesc:{caption:"Objektartenkatalog",section:{description:"Beschreibung",featureTypes:"Objektarten",citation:"Bibliografische Angaben"},compCode:"Konform mit ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Objektartenkatalog",catFetTyps:{caption:"Objektart",genericName:"Name",codeSpace:"Namensraum"}}},contact:{caption:"Kontakt",section:{name:"Name des Kontakts",info:"Kontaktangaben",hoursAndInstructions:"Erreichbarkeit und Hinweise"},conditionalName:{caption:"Name des Kontakts",msg:"Name der Person, Name der Organisation oder Name der Position ist erforderlich.",msg_fgdc:"Name der Person oder Name der Organisation ist erforderlich."},rpIndName:"Person",rpOrgName:"Organisation",rpPosName:"Position",rpCntInfo:"Kontaktangaben",cntHours:"Servicezeiten",cntInstr:"Ergänzende Hinweise"},distInfo:{caption:"Vertriebsinformation",section:{format:"Format",distributor:"Vertriebsstelle",transfer:"Transferoptionen"},distFormat:{caption:"Abgabeformat",formatName:"Formatname",formatVer:"Formatversion",formatAmdNum:"Revisionsnummer",formatSpec:"Spezifikation",fileDecmTech:"Dekompressionsmethode",formatInfo:"Dateninhalt"},distributor:{caption:"Vertriebsstelle"},distTranOps:{caption:"Digitale Transferoptionen",section:{unitsAndSize:"Einheiten"},unitsODist:"Abgabeeinheiten",transSize:"Transfergröße",offLineMed:{caption:"Offline-Medium",medDensity:"Schreibdichte",medDenUnits:"Einheit der Schreibdichte",medVol:"Anzahl",medNote:"Anmerkung"}},distorOrdPrc:{caption:"Bestellverfahren",resFees:"Kosten",planAvDtTm:"Zeitpunkt der Verfügbarkeit",planAvTmPd:{caption:"Verfügbarkeitszeitraum",tmBegin:"Startdatum/-zeit",tmEnd:"Enddatum/-zeit"},ordInstr:"Bestellhinweise",ordTurn:"Lieferzeit"}},dqInfo:{caption:"Datenqualität",section:{scope:"Geltungsbereich",report:"Qualitätsbericht",lineage:"Herkunft"},dqScope:{section:{level:"Ebene",extent:"Ausdehnung"},scpLvl:"Bezugsebene",scpLvlDesc:"Ebenenbeschreibung",scpExt:"Ausdehnung des Geltungsbereichs"},report:{section:{measure:"Testverfahren",evaluation:"Bewertung",result:"Ergebnis",conformance:"Konformität"},measDesc:"Verfahrensbeschreibung",measName:"Bezeichnung des Testverfahrens",measDateTm:"Datum des Testverfahrens",measId:"Verfahrensidentifikator",evalMethDesc:"Bewertungsmethode",evalProc:"Angaben zur Bewertungsmethode",ConResult:{caption:"Konformitätsergebnis",conExpl:"Erklärung",conSpec:"Verfahrensspezifikation",conPass:{caption:"Grad",_1:"Konform",_0:"Nicht konform"}},QuanResult:{caption:"Quantitatives Ergebnis",quanVal:"Wert",quanValType:"Wertetyp",quanValUnit:"Maßeinheit",errStat:"Statistikmethode"}},dataLineage:{section:{statement:"Erläuterung",dataSource:"Datenquelle",prcStep:"Bearbeitungsschritt"},statement:"Herkunftserläuterung",dataSource:{caption:"Datenquelle",section:{description:"Beschreibung",srcRefSys:"Bezugssystem",srcExt:"Ausdehnung",srcCitatn:"Bibliografische Angaben"},srcDesc:"Beschreibung der Datenquelle",srcScale:{rfDenom:"Maßstabszahl"},srcRefSys:"Quellbezugssystem",srcExt:"Ausdehnung",srcCitatn:"Quelldatenbestand"},prcStep:{caption:"Bearbeitungsschritt",section:{description:"Beschreibung",stepProc:"Bearbeiter",stepSrc:"Datenquelle"},stepDesc:"Beschreibung des Bearbeitungsschritts",stepRat:"Veranlassung",stepDateTm:"Bearbeitungszeitpunkt",stepProc:"Bearbeiter",stepSrc:"Datenquelle"}}},eainfo:{caption:"Entitäts- und Attributinformationen",section:{detailed:"Details",overview:"Übersicht"},detailed:{caption:"Entitäts- und Attributdetails",section:{enttyp:"Entität",attr:"Attribute"},enttyp:{caption:"Entitätstyp",enttypl:"Beschriftung",enttypt:"Objekt",enttypc:"Anzahl",enttypd:"Definition",enttypds:"Quelle der Definition"},attr:{caption:"Attribut",section:{description:"Beschreibung",value:"Wert",domain:"Domäne"},attrlabl:"Beschriftung",attalias:"Alias",attrdef:"Definition",attrdefs:"Quelle der Definition",attrtype:"Typ",attwidth:"Breite",atprecis:"Genauigkeit",attscale:"Maßstab",atindex:"Indiziert",attrvai:{attrva:"Werterläuterung",attrvae:"Wertgenauigkeit"},attrmfrq:"Intervall der Wertemessung",begdatea:"Anfangsdatum der Werte",enddatea:"Enddatum der Werte",attrdomv:{caption:"Domäne",edom:{caption:"Aufgelistet",edomv:"Wert",edomvd:"Definition",edomvds:"Quelle der Definition"},rdom:{caption:"Bereich",rdommin:"Minimalwert",rdommax:"Maximalwert",rdommean:"Mittelwert",rdomstdv:"Standardabweichung",attrunit:"Einheiten",attrmres:"Auflösung der Messung"},codesetd:{caption:"Codierungssatz",codesetn:"Name",codesets:"Quelle"},udom:{caption:"Nicht darstellbar"}}}},overview:{caption:"Übersicht",eaover:"Zusammenfassung",eadetcit:"Bibliografische Angaben"}},extent:{caption:"Ausdehnung",section:{description:"Beschreibung",geographic:"Geografisch",temporal:"Zeit",vertical:"Vertikal"},exDesc:"Ausdehnungsbeschreibung",geoEle:{caption:"Geografische Ausdehnung",GeoBndBox:{caption:"Rahmen",esriExtentType:"Ausdehnung ist für Suche vorgesehen?",exTypeCode:"Enthält die Ausdehnung die Ressource?",westBL:"Westliche Länge",eastBL:"Östliche Länge",southBL:"Südliche Breite",northBL:"Nördliche Breite"},GeoDesc:{caption:"Geografische Beschreibung",exTypeCode:"Enthält die Beschreibung die Ressource?",identCode:"Code"}},tempEle:{caption:"Zeitliche Ausdehnung",TM_Period:"Zeitraum",TM_Instant:"Zeitpunkt",tmPosition:"Datum",tmBegin:"Anfangsdatum",tmEnd:"Enddatum"},vertEle:{caption:"Vertikale Ausdehnung",vertMinVal:"Tiefster Punkt",vertMaxVal:"Höchster Punkt"}},graphOver:{caption:"Grafische Darstellung",bgFileName:"URL der grafischen Darstellung",bgFileDesc:"Beschreibung der grafischen Darstellung",bgFileType:"Dateiformat der grafischen Darstellung"},keywords:{caption:"Schlagwörter",section:{topicCategory:"Thema",searchKeys:"Tags",themeKeys:"Thema",placeKeys:"Ort",tempKeys:"Zeitraum",discKeys:"Fachdisziplin",stratKeys:"Schichtungsebene",productKeys:"Produkt",subTopicCatKeys:"Unterthema",otherKeys:"Andere"},delimited:"Schlagwörter",searchKeys:"Tags",themeKeys:"Schlagwörter für Thema",placeKeys:"Schlagwörter für Ort",tempKeys:"Schlagwörter für Zeitraum",discKeys:"Schlagwörter für Fachdisziplin",stratKeys:"Schlagwörter für Schichtungsebene",productKeys:"Produktschlagwörter",subTopicCatKeys:"Schlagwörter für Unterthemen",otherKeys:"Andere Schlagwörter",thesaName:"Bibliografische Angaben zum Thesaurus",thesaLang:"Thesaurus-Sprache"},locales:{caption:"Gebietsschemata",locale:"Gebietsschema",resTitle:"Titel",idAbs:"Zusammenfassung"},maintenance:{caption:"Pflege",section:{frequency:"Häufigkeit",scope:"Geltungsbereich",note:"Anmerkung"},usrDefFreq:"Benutzerdefinierte Häufigkeit",dateNext:"Nächste Aktualisierung",maintScp:"Datenpflegebereich",upScpDesc:{caption:"Beschreibung des Datenpflegebereichs",attribSet:"Attribute",attribIntSet:"Attributwerte",featSet:"Objekte",featIntSet:"Objektinstanzen",datasetSet:"Datenbestand",other:"Andere Instanzen"},maintNote:"Anmerkung",maintCont:"Ansprechpartner"},metadata:{section:{profile:"Profil",details:"Geltungsbereich"},mdFileID:"Dateiidentifikator",mdParentID:"Identifikator des übergeordneten Metadatensatzes",datasetURI:"URI des Datenbestands",dataSetFn:"Dataset-Funktion",mdDateSt:"Metadatendatum",mdLang:"Metadatensprache",mdChar:"Zeichensatz",mdHrLv:"Hierarchieebene",mdHrLvName:"Bezeichnung der Hierarchieebene",mdContact:"Ansprechpartner für Metadaten",mdMaint:"Metadatenpflege",mdConst:"Metadateneinschränkungen"},porCatInfo:{caption:"Darstellungskatalog"},refSysInfo:{caption:"Raumbezug"},resource:{section:{citation:"Bibliografische Angaben",details:"Details",description:"Beschreibung",keywords:"Schlagwörter",status:"Status",resolution:"Auflösung",representation:"Räumliche Darstellung",browse:"Grafische Darstellung",format:"Format",usage:"Verwendung",aggregateInfo:"Aggregation",additional:"Zusätzliche"},idAbs:"Beschreibung (Kurzfassung)",idPurp:"Zusammenfassung (Zweck)",suppInfo:"Zusätzliche Informationen",idCredit:"Quellennachweis",envirDesc:"Verarbeitungsumgebung",dataLang:"Ressourcensprache",dataExt:"Ressourcenausdehnung",idPoC:"Ansprechpartner",resMaint:"Pflege der Ressource",resConst:"Ressourcenbeschränkungen",dsFormat:"Ressourcenformat",dataScale:{caption:"Datenmaßstab",equScale:"Maßstabsauflösung",scaleDist:"Entfernungsauflösung",scaleDist_value:"Entfernung"},idSpecUse:{caption:"Ressourcennutzung",specUsage:"Spezielle Verwendung",usageDate:"Verwendungsdatum",usrDetLim:"Einschränkungen",usrCntInfo:"Ansprechpartner für Verwendung"}},service:{caption:"Service",svType:"Servicetyp",svType_Name:"Name",svAccProps:"Zugriffseigenschaften",svCouplRes:{caption:"Verbundene Ressource",svOpName:"Name des Vorgangs",svResCitId:"Ressourcenkennung"},svCoupleType:"Verbindungstyp"},scaleRange:{caption:"Maßstabsbereich",maxScale:"Maximaler Maßstab",minScale:"Minimaler Maßstab"},spatRepInfo:{caption:"Räumliche Darstellung",section:{dimension:"Bemaßung",parameters:"Parameter"},numDims:"Anzahl der Dimensionen",tranParaAv:"Verfügbarkeit von Transformationsparametern?",axisDimension:{caption:"Bemaßung",dimSize:"Elementanzahl",dimResol:{caption:"Auflösung",_value:"Auflösungswert",uom:"Auflösungseinheiten"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geometrische Objekte",geoObjCnt:"Anzahl"},GridSpatRep:{caption:"Raster"},Georect:{caption:"Georektifiziert",section:{centerPoint:"Mittelpunkt",cornerPts:"Eckpunkte"},chkPtAv:"Kontrollpunktverfügbarkeit?",chkPtDesc:"Kontrollpunktbeschreibung",ptInPixel:"Punkt im Pixel",transDimDesc:"Transformationsbeschreibung",transDimMap:"Raumachsenzuordnung",cornerPts:{caption:"Eckpunkt",pos:"Position",gmlDesc:"Beschreibung",gmlDescRef:"Referenz",gmlIdent:"Identifikator",codeSpace:"Namensraum"}},Georef:{caption:"Georeferenzierbar",ctrlPtAv:"Passpunktverfügbarkeit?",orieParaAv:"Verfügbarkeit der Orientierungsparameter?",orieParaDs:"Beschreibung der Orientierungsparameter",georefPars:"Georeferenzierungsparameter",paraCit:"Angaben zum Parameter"},Indref:{caption:"Indirekt"}},booleanOptions:{_false:"Nein",_true:"Ja"},codelist:{CountryCode:"Land",LanguageCode:"Sprache",MonetaryUnits:"Währungseinheiten",MonetaryUnits_empty:"Keine universelle Währung",PresentationForm:"FGDC-Präsentationsform für räumliche Daten",CI_PresentationFormCode:"Präsentationsform",CI_RoleCode:"Funktion",CI_OnLineFunctionCode:"Funktion",IMS_ContentType:"Inhaltstyp",DQ_ElementDimension:"Bemaßung",DQ_ElementType:"Berichtstyp",DQ_EvaluationMethodTypeCode:"Typ der Bewertungsmethode",DS_AssociationTypeCode:"Assoziationstyp",DS_InitiativeTypeCode:"Veranlassung",LI_SourceType:"Quellentyp",MD_CellGeometryCode:"Zellengeometrie",MD_CharacterSetCode:"Zeichensatz",MD_ClassificationCode:"Klassifizierung",MD_CoverageContentTypeCode:"Inhaltstyp",MD_DimensionNameTypeCode:"Dimensionstyp",MD_GeometricObjectTypeCode:"Geometrietyp",MD_ImagingConditionCode:"Aufnahmebedingung",MD_MaintenanceFrequenceCode:"Aktualisierungshäufigkeit",MD_MediumFormatCode:"Format",MD_MediumNameCode:"Bezeichnung des Mediums",MD_PixelOrientationCode:"Pixelausrichtung",MD_ProgressCode:"Status",MD_RestrictionCode:"Beschränkungscode",MD_ScopeCode:"Geltungsbereich",MD_SpatialRepresentationTypeCode:"Räumliche Darstellungsart",MD_TopicCategoryCode:"Themenkategorie",MD_TopologyLevelCode:"Topologielevel",RS_Dimension:"Bemaßung",SV_CouplingType:"Verbindungstyp",UCUM:"Einheiten",UCUM_Length:"Entfernungseinheiten"}});