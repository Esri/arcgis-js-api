define({documentTypes:{arcgis:{caption:"ArcGIS Metadata",editorCaption:"Metadata",description:""}},emptyOption:"Leeg",conditionals:{ISO19139A1_ROW4:"Als het metadata hiërarchisch niveau dataset is, is een geografisch omgrenzend vak of een geografische beschrijving vereist.",ISO19139A1_ROW6:"Een dataset-identifier of datasetnaam is vereist.",ISO19139A1_ROW7:"Als er andere beperkingen worden gekozen, zijn er andere verplichtingen vereist.",ISO19139A1_ROW9:"Als het bereik niet dataset of serie is, is een niveaubeschrijving vereist.",ISO19139A1_ROW10_11_12:"Als het bereik dataset of serie is; is een van verklaring, processtap of databron vereist.",ISO19139A1_ROW15:"Als de controlepuntbeschikbaarheid geselecteerd is, is controlepuntbeschrijving vereist.",ISO19139A1_ROW18:"Als distributie gedocumenteerd is, is een formaat of distributeur/formaat vereist.",INSPIRE_AccessLimitation:" Minimaal één legale toegangsbeperkingcode of veiligheidsclassificatiecode is vereist. (INSPIRE)",INSPIRE_UseLimitation:" Minimaal één gebruiksbeperking is vereist. (INSPIRE)",INSPIRE_ConformanceResult:"Voor een domeinconsistentierapport is een conformiteitscontrole vereist. (INSPIRE)",INSPIRE_DomainConsistency:"Een domeinconsistentierapport is vereist. (INSPIRE)",INSPIRE_LineageStatement:"Als het bereik niet dataset of serie is, is een lineageverklaring vereist. (INSPIRE).",FGDC_DescIfTemporal:"Er is een beschrijving vereist voor een tijdelijke extent. (FGDC)",FGDC_Keywords:"Er is een onderwerp, tag of thema-trefwoord vereist. (FGDC)",FGDC_Reports:"Er zijn rapporten vereist voor de volledigheid weglating en conceptuele consistentie. (FGDC)",FGDC_Temporal:"Er is minimaal één tijdelijke extent vereist. (FGDC)",NAP_Contact:"Er is een adres/leverpunt, telefoon/voicenummer of online resource/URL vereist. (NAP)",GEN_BoundingBox:"Er is minimaal één geografisch omgrenzend vak vereist.",GEN_ReportResult:"Er is een conformiteit of kwantitatief resultaat vereist.",minLessThanMax:"De minimale waarde moet kleiner zijn dan de maximale waarde."},hints:{integerGreaterThanZero:"(een integer invoeren > 0)",integerGreaterThanOne:"(een integer invoeren > 1)",integer0To100:"(een integer invoeren 0..100)",maxScale:"(een integer invoeren 0 bijv. 50000)",minScale:"(een integer invoeren 0 bijv. 150000000)",number0To100:"(een getal invoeren 0...100)",number0To360:"(een getal invoeren 0...360)",number90To90:"(een getal invoeren -90...90)",listOfDoubles:"(een lijst van telefoonnummers invoeren, gebruik een spatie om te scheiden)"},htmlEditor:{button:"Bewerken..."},sections:{overview:"Overzicht",esri:"Esri",resource:"Bron",reference:"Naslag",content:"Inhoud",distribution:"Distributie",quality:"Kwaliteit",eainfo:"Velden",representation:"Representatie",metadata:"Metadata"},metadataStyle:{caption:"ArcGIS Metadata Style",changeButton:"Wijzigen...",dialogTitle:"Kies een stijl metadata",updating:"Document updaten...","Item Description":"Itembeschrijving","FGDC CSDGM Metadata":"FGDC CSDGM Metadata","ISO 19139 Metadata Implementation Specification":"ISO 19139 Metadata implementatiepecificatie","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Metadata Implementatiespecificatie GML3.2","INSPIRE Metadata Directive":"INSPIRE Metadata Richtlijn","North American Profile of ISO19115 2003":"Noord-Amerikaans profiel van ISO19115 2003"},aggrInfo:{caption:"Verzamelde informatie",datasetHint:"Een dataset-identifier of datasetnaam is vereist.",aggrDSIdent:"Dataset-identifier",aggrDSName:"Naam van dataset"},appSchInfo:{caption:"Toepassingsschema",asName:"Schemanaam",asSchLang:"Schemataal",asCstLang:"Taalbeperking",asAscii:"ASCII",asGraFile:"Grafisch bestand",asGraFile_src:"Bron grafisch bestand",asSwDevFile:"Bestand softwareontwikkeling",asSwDevFile_src:"Bestandbron softwareontwikkeling",asSwDevFiFt:"Bestandsformaat softwareontwikkeling"},citation:{caption:"Citaat",section:{titlesAndDates:"Titels & data",links:"URL's",identifiers:"Identifiers",presentation:"Formulier",other:"Overig",edition:"Editie",series:"Serie"},conditionalDate:{caption:"Citaatdatum",msg:"Er is een aanmaakdatum, publicatiedatum of revisiedatum vereist.",msg_nap:"Er is een citaatdatum vereist."},resTitle:"Titel",resAltTitle:"Alternatieve titel",collTitle:"Gezamenlijke titel",date:{createDate:"Datum van aanmaken",pubDate:"Publicatiedatum",reviseDate:"Revisiedatum",notavailDate:"Geen beschikbare datum",inforceDate:"Datum van kracht",adoptDate:"Datum goedkeuring",deprecDate:"Datum afkeuring",supersDate:"Datum vervanging"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifier",identCode:"Code",identAuth:"Autoriteitcitaat"},resEd:"Editie",resEdDate:"Editiedatum",datasetSeries:{seriesName:"Naam",issId:"Nummer",artPage:"Pagina"},otherCitDet:"Overige gegevens",contactCaption:"Aanhaling Contact"},cntAddress:{caption:"Adres",delPoint:"Afleverpunt",city:"Stad",adminArea:"Administratief gebied",postCode:"Postcode",country:"Land",eMailAdd:"E-mail",addressType:{caption:"Addrestype",postal:"Postcode",physical:"Fysiek",both:"Beide"}},cntOnlineRes:{caption:"Onlinebron",linkage:"URL",protocol:"Protocol",appProfile:"Toepassingsprofiel",orName:"Naam",orDesc:"Beschrijving"},cntPhone:{caption:"Telefoon",voiceNum:"Spraak",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Identifier",identCode:"Code",idCodeSpace:"Coderuimte",idVersion:"Versie",identAuth:"Autoriteitcitaat"},constraints:{caption:"Beperkingen",useLimit:"Gebruiksbeperking",general:{caption:"Algemeen"},legal:{caption:"Juridisch",accessConsts:"Toegangsbeperkingen",useConsts:"Gebruiksbeperkingen",othConsts:"Overige beperkingen"},security:{caption:"Beveiliging",classSys:"Classificatiesysteem",userNote:"Opmerking voor gebruiker",handDesc:"Handlingbeschrijving"}},contInfo:{caption:"Contentinformatie",section:{CovDesc:"Dekkingbeschrijving",ImgDesc:"Beeldbeschrijving",FetCatDesc:"Objectcatalogus"},attDesc:"Attribuutbeschrijving",covDim:{caption:"Bereik of band",seqID:"Sequentie-Identifier",seqIDType:"Type sequentie-Identifier",dimDescrp:"Descriptor"},RangeDim:{caption:"Bereikdimensie"},Band:{caption:"Band",minVal:"Minimumwaarde",maxVal:"Maximumwaarde",valUnit:"Waarde-eenheden",pkResp:"Piekantwoord",bitsPerVal:"Bits per waarde",toneGrad:"Toongradatie",sclFac:"Schaalfactor",offset:"Offset"},CovDesc:{caption:"Dekkingbeschrijving",section:{description:"Beschrijving",rangesAndBands:"Bereik en banden"}},ImgDesc:{caption:"Beeldbeschrijving",section:{description:"Beschrijving",rangesAndBands:"Bereik en banden"},illElevAng:"Verlichting elevatiehoek",illAziAng:"Verlichting azimuthhoek",cloudCovPer:"Cloud Cover Percentage",cmpGenQuan:"Compressiekwaliteit",trianInd:"Trigonometrische indicator?",radCalDatAv:"Radiometrische kalibratiedata beschikbaarheid?",camCalInAv:"Camerakalibratie-informatie beschikbaarheid?",filmDistInAv:"Filmdistoratie-informatie beschikbaarheid?",lensDistInAv:"Lensdistoratie-informatie beschikbaarheid?",imagQuCode:"Kwaliteitscode",prcTypCde:"Code verwerkingsniveau"},FetCatDesc:{caption:"Objectcatalogus",section:{description:"Beschrijving",featureTypes:"Objecttypes",citation:"Citaat"},compCode:"Voldoet aan ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Citaat objectcatalogus",catFetTyps:{caption:"Objecttype",genericName:"Naam",codeSpace:"Coderuimte"}}},contact:{caption:"Contactpersoon",section:{name:"Naam contactpersoon",info:"Contactgegevens",hoursAndInstructions:"Uren & Instructies"},conditionalName:{caption:"Naam contactpersoon",msg:"Een individuele naam, organisatienaam of positienaam is vereist.",msg_fgdc:"Een individuele naam of organisatienaam is vereist."},rpIndName:"Naam individu",rpOrgName:"Naam organisatie",rpPosName:"Positienaam",rpCntInfo:"Contactgegevens",cntHours:"Bedrijfsuren",cntInstr:"Contactinstructies"},distInfo:{caption:"Distributie-informatie",section:{format:"Opmaken",distributor:"Distributeur",transfer:"Overdrachtsopties"},distFormat:{caption:"Distributieformaat",formatName:"Formatnaam",formatVer:"Formatversie",formatAmdNum:"Amendementnummer",formatSpec:"Specificatie",fileDecmTech:"Decompressietechniek",formatInfo:"Informatiecontent"},distributor:{caption:"Distributeur"},distTranOps:{caption:"Digitale overdrachtsopties",section:{unitsAndSize:"Eenheden"},unitsODist:"Distributie-eenheden",transSize:"Overdrachtsgrootte",offLineMed:{caption:"Offlinemedium",medDensity:"Dichtheid",medDenUnits:"Dichtheidseenheden",medVol:"Volumes",medNote:"Medium ppmerking"}},distorOrdPrc:{caption:"Bestelprocedure",resFees:"Tarieven",planAvDtTm:"Beschikbare datum",planAvTmPd:{caption:"Periode beschikbare datum",tmBegin:"Begindatum/-tijd",tmEnd:"Einddatum/-tijd"},ordInstr:"Bestelinstructies",ordTurn:"Omzet"}},dqInfo:{caption:"Datakwaliteit",section:{scope:"Toepassingsgebied",report:"Rapport",lineage:"Lineage"},dqScope:{section:{level:"Niveau",extent:"Extent"},scpLvl:"Niveau toepassingsgebied",scpLvlDesc:"Niveaubeschrijving",scpExt:"Omvang toepassingsgebied"},report:{section:{measure:"Meten",evaluation:"Evaluatie",result:"Resultaat",conformance:"Conformiteit"},measDesc:"Meting beschrijving",measName:"Meting naam",measDateTm:"Meting datum",measId:"Meting identifier",evalMethDesc:"Evaluatiemethode",evalProc:"Procedurecitaat",ConResult:{caption:"Resultaat conformiteit",conExpl:"Verklaring",conSpec:"Specificatie",conPass:{caption:"Graad",_1:"Conform",_0:"Niet-conform"}},QuanResult:{caption:"Kwantitatief resultaat",quanVal:"Waarde",quanValType:"Waardetype",quanValUnit:"Waarde-eenheden",errStat:"Foutstatistieken"}},dataLineage:{section:{statement:"Verklaring",dataSource:"Gegevensbron",prcStep:"Processtap"},statement:"Lineageverklaring",dataSource:{caption:"Gegevensbron",section:{description:"Beschrijving",srcRefSys:"Referentiesysteem",srcExt:"Extent",srcCitatn:"Citaat"},srcDesc:"Bronbeschrijving",srcScale:{rfDenom:"Schaalnoemer"},srcRefSys:"Bronreferentiesysteem",srcExt:"Bronomvang",srcCitatn:"Bronaanhaling"},prcStep:{caption:"Processtap",section:{description:"Beschrijving",stepProc:"Processor",stepSrc:"Gegevensbron"},stepDesc:"Procesbeschrijving",stepRat:"Motivering",stepDateTm:"Processtapdatum",stepProc:"Processor",stepSrc:"Gegevensbron"}}},eainfo:{caption:"Entiteit- en attribuutinformatie",section:{detailed:"Details",overview:"Overzicht"},detailed:{caption:"Entiteit- en attribuutdetails",section:{enttyp:"Entiteit",attr:"Attributen"},enttyp:{caption:"Entiteitstype",enttypl:"Label",enttypt:"Object",enttypc:"Aantal",enttypd:"Definitie",enttypds:"Definitiebron"},attr:{caption:"Attribuut",section:{description:"Beschrijving",value:"Waarde",domain:"Domein"},attrlabl:"Label",attalias:"Alias",attrdef:"Definitie",attrdefs:"Definitiebron",attrtype:"Type",attwidth:"Breedte",atprecis:"Precisie",attscale:"Schaal",atindex:"Geïndexeerd",attrvai:{attrva:"Waardetoelichting",attrvae:"Waardenauwkeurigheid"},attrmfrq:"Waardemetingsfrequentie",begdatea:"Begindatum van waarden",enddatea:"Einddatum van waarden",attrdomv:{caption:"Domein",edom:{caption:"Enumeratie",edomv:"Waarde",edomvd:"Definitie",edomvds:"Definitiebron"},rdom:{caption:"Bereik",rdommin:"Minimumwaarde",rdommax:"Maximumwaarde",rdommean:"Gemiddelde",rdomstdv:"Standaarddeviatie",attrunit:"Eenheden",attrmres:"Meetresolutie"},codesetd:{caption:"Codeset",codesetn:"Naam",codesets:"Bron"},udom:{caption:"Niet representatief"}}}},overview:{caption:"Overzicht",eaover:"Samenvatting",eadetcit:"Citaat"}},extent:{caption:"Extent",section:{description:"Beschrijving",geographic:"Geografisch",temporal:"Tijdelijk",vertical:"Verticaal"},exDesc:"Extentbeschrijving",geoEle:{caption:"Geografische extent",GeoBndBox:{caption:"Begrenzingsvak",esriExtentType:"Extent is voor zoeken?",exTypeCode:"Extent bevat de bron?",westBL:"Westelijke omgrenzende lengtegraad",eastBL:"Oostelijke omgrenzende lengtegraad",southBL:"Zuidelijke omgrenzende breedtegraad",northBL:"Noordelijke omgrenzende breedtegraad"},GeoDesc:{caption:"Geografische beschrijving",exTypeCode:"Beschrijving bevat de bron?",identCode:"Code"}},tempEle:{caption:"Tijdelijke extent",TM_Period:"Tijdsperiode",TM_Instant:"Tijdinstantie",tmPosition:"Datum",tmBegin:"Begindatum",tmEnd:"Einddatum"},vertEle:{caption:"Verticale extent",vertMinVal:"Minimumwaarde",vertMaxVal:"Maximumwaarde"}},graphOver:{caption:"Bekijk afbeelding",bgFileName:"Bekijk afbeelding URL",bgFileDesc:"Bekijk grafische beschrijving",bgFileType:"Bladeren type grafisch bestand"},keywords:{caption:"Trefwoorden",section:{topicCategory:"Onderwerp",searchKeys:"Labels",themeKeys:"Thema",placeKeys:"Plaats",tempKeys:"Tijdelijk",discKeys:"Discipline",stratKeys:"Stratum",productKeys:"Product",subTopicCatKeys:"Subonderwerp",otherKeys:"Overig"},delimited:"Trefwoorden",searchKeys:"Labels",themeKeys:"Thema trefwoorden",placeKeys:"Plaats trefwoorden",tempKeys:"Tijdelijke trefwoorden",discKeys:"Discipline trefwoorden",stratKeys:"Stratum trefwoorden",productKeys:"Producttrefwoorden",subTopicCatKeys:"Subonderwerp trefwoorden",otherKeys:"Overige trefwoorden",thesaName:"Thesaurusaanhaling",thesaLang:"Thesaurustaal"},locales:{caption:"Lokaal",locale:"Landinstelling",resTitle:"Titel",idAbs:"Samenvatting"},maintenance:{caption:"Onderhoud",section:{frequency:"Frequentie",scope:"Toepassingsgebied",note:"Opmerking"},usrDefFreq:"Aangepaste frequentie",dateNext:"Volgende update",maintScp:"Reikwijdte update",upScpDesc:{caption:"Reikwijdtebeschrijving",attribSet:"Attributen",attribIntSet:"Attribuut instances",featSet:"Objecten",featIntSet:"Object instances",datasetSet:"Dataset",other:"Overige instances"},maintNote:"Onderhoudsopmerking",maintCont:"Contact voor onderhoud"},metadata:{section:{profile:"Profiel",details:"Toepassingsgebied"},mdFileID:"Bestandidentifier",mdParentID:"Ouder-Identifier",datasetURI:"Dataset URI",dataSetFn:"Datasetfunctie",mdDateSt:"Metadata-datum",mdLang:"Metadata taal",mdChar:"Tekenset",mdHrLv:"Hiërarchisch niveau",mdHrLvName:"Naam hiërarchisch niveau",mdContact:"Metadata-contact",mdMaint:"Metadata-onderhoud",mdConst:"Metadata-beperkingen"},porCatInfo:{caption:"Portretaanhaling"},refSysInfo:{caption:"Ruimtelijke referentie"},resource:{section:{citation:"Citaat",details:"Details",description:"Beschrijving",keywords:"Trefwoorden",status:"Status",resolution:"Resolutie",representation:"Representatie",browse:"Bekijk afbeelding",format:"Opmaken",usage:"Gebruik",aggregateInfo:"Aggregatie",additional:"Extra"},idAbs:"Beschrijving (Abstract)",idPurp:"Samenvatting (Doel)",suppInfo:"Aanvullende informatie",idCredit:"Credits",envirDesc:"Processing Omgeving",dataLang:"Brontaal",dataExt:"Bronomvang",idPoC:"Contactplaats",resMaint:"Brononderhoud",resConst:"Bronbeperkingen",dsFormat:"Bronformaat",dataScale:{caption:"Dataschaal",equScale:"Schaalresolutie",scaleDist:"Afstandsresolutie",scaleDist_value:"Afstand"},idSpecUse:{caption:"Brongebruik",specUsage:"Specifiek gebruik",usageDate:"Gebruiksdatum",usrDetLim:"Beperkingen",usrCntInfo:"Gebruikscontact"}},service:{caption:"Service",svType:"Servicetype",svType_Name:"Naam",svAccProps:"Toegangseigenschappen",svCouplRes:{caption:"Gekoppelde bron",svOpName:"Naam activiteit",svResCitId:"Brond-identifier"},svCoupleType:"Koppelingstype"},scaleRange:{caption:"Schaalbereik",maxScale:"Maximale schaal",minScale:"Minimumschaal"},spatRepInfo:{caption:"Ruimtelijke representatie",section:{dimension:"Afmeting",parameters:"Parameters"},numDims:"Aantal afmetingen",tranParaAv:"Transformatie parameter beschikbaarheid?",axisDimension:{caption:"Afmeting",dimSize:"Grootte",dimResol:{caption:"Resolutie",_value:"Resolutiewaarde",uom:"Resolutie-eenheden"}},VectSpatRep:{caption:"Vector",geometObjs:"Geometrische objecten",geoObjCnt:"Objecttelling"},GridSpatRep:{caption:"Raster"},Georect:{caption:"Geogerectificeerd",section:{centerPoint:"Middenpunt",cornerPts:"Hoekpunten"},chkPtAv:"Controlepunt beschikbaarheid?",chkPtDesc:"Controlepunt beschrijving?",ptInPixel:"Punt in pixel",transDimDesc:"Transformatie dimensie beschrijving",transDimMap:"Transformatie dimensie mapping",cornerPts:{caption:"Hoekpunt",pos:"Positie",gmlDesc:"Beschrijving",gmlDescRef:"Naslag",gmlIdent:"Identifier",codeSpace:"Identifier codespace"}},Georef:{caption:"Georeferenceable",ctrlPtAv:"Controlepunt beschikbaarheid?",orieParaAv:"Oriëntatieparameter beschikbaarheid?",orieParaDs:"Oriëntatieparameter beschrijving",georefPars:"Georeferenced parameters",paraCit:"Parameteraanhaling"},Indref:{caption:"Indirect"}},booleanOptions:{_false:"Nee",_true:"Ja"},codelist:{CountryCode:"Land",LanguageCode:"Taal",MonetaryUnits:"Monetaire eenheden",MonetaryUnits_empty:"Geen universele valuta",PresentationForm:"FGDC Geospatiale gegevens presentatievorm",CI_PresentationFormCode:"Presentatievorm",CI_RoleCode:"Rol",CI_OnLineFunctionCode:"Functie",IMS_ContentType:"Inhoudstype",DQ_ElementDimension:"Afmeting",DQ_ElementType:"Rapporttype",DQ_EvaluationMethodTypeCode:"Evaluatietype",DS_AssociationTypeCode:"Associatietype",DS_InitiativeTypeCode:"Initiatieftype",LI_SourceType:"Brontype",MD_CellGeometryCode:"Celgeometrie",MD_CharacterSetCode:"Tekenset",MD_ClassificationCode:"Indeling",MD_CoverageContentTypeCode:"Inhoudstype",MD_DimensionNameTypeCode:"Afmetingtype",MD_GeometricObjectTypeCode:"Geometrisch objecttype",MD_ImagingConditionCode:"Staat satellietbeelden",MD_MaintenanceFrequenceCode:"Bijwerkfrequentie",MD_MediumFormatCode:"Formaatcode",MD_MediumNameCode:"Mediumnaam",MD_PixelOrientationCode:"Pixeloriëntatie",MD_ProgressCode:"Status",MD_RestrictionCode:"Beperkingscode",MD_ScopeCode:"Toepassingsgebied",MD_SpatialRepresentationTypeCode:"Ruimtelijk representatietype",MD_TopicCategoryCode:"Onderwerpcategorie",MD_TopologyLevelCode:"Topologieniveau",RS_Dimension:"Afmeting",SV_CouplingType:"Koppelingstype",UCUM:"Eenheden",UCUM_Length:"Afstandseenheden"}});