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

define({documentTypes:{arcgis:{caption:"מטה דאטה ArcGIS",editorCaption:"מטה-דאטה",description:""}},emptyOption:"ריק",conditionals:{ISO19139A1_ROW4:"אם רמת ההיררכיה של המטה-דאטה היא 'סט נתונים', יש לספק מלבן תוחם גיאוגרפי או תיאור גיאוגרפי.",ISO19139A1_ROW6:"נדרש מזהה סט נתונים או שם סט נתונים.",ISO19139A1_ROW7:"אם נבחרה האפשרות 'הגבלות אחרות', יש לציין הגבלות אחרות.",ISO19139A1_ROW9:"אם ההיקף אינו 'סט נתונים' או 'סידרה', נדרש תיאור רמה.",ISO19139A1_ROW10_11_12:"אם ההיקף הוא 'סט נתונים' או 'סידרה' יש לציין הצהרה, שלב בתהליך או מקור נתונים.",ISO19139A1_ROW15:"אם נבחרה זמינות של נקודת בדיקה, ‏‫נדרש תיאור לנקודת בדיקה‬.",ISO19139A1_ROW18:"אם ההפצה מתועדת, נדרש פורמט או מפיץ/פורמט.",INSPIRE_AccessLimitation:" נדרש לפחות קוד אחד של מגבלת גישה חוקית או של סיווג אבטחה. (INSPIRE)",INSPIRE_UseLimitation:" נדרשת לפחות מגבלת שימוש אחת. (INSPIRE)",INSPIRE_ConformanceResult:"לדוח עקביות דומיין נדרשת תוצאת התאמה. (INSPIRE)",INSPIRE_DomainConsistency:"נדרש דוח של עקביות דומיין. (INSPIRE)",INSPIRE_LineageStatement:"אם ההיקף הוא 'סט נתונים' או 'סידרה', נדרשת הצהרת ייחוס. (INSPIRE).",FGDC_DescIfTemporal:"נדרש תיאור עבור תיחום לפי זמן. (FGDC)",FGDC_Keywords:"נדרשים נושא, תגית או מילת מפתח לנושא. (FGDC)",FGDC_Reports:"נדרשים דוחות השמטת שלמות‬ ועקביות קונספטואלית. (FGDC)",FGDC_Temporal:"נדרש לפחות תיחום אחד לפי זמן. (FGDC)",NAP_Contact:"נדרשים כתובת/נקודת משלוח, מספר טלפון/תא קולי או משאב מקוון(URL).‏(NAP)",GEN_BoundingBox:"נדרש מלבן תוחם גיאוגרפי אחד לפחות.",GEN_ReportResult:"נדרשת תוצאת התאמה או תוצאה כמותית.",minLessThanMax:"הערך המינימלי חייב להיות פחות מאשר הערך המקסימלי."},hints:{integerGreaterThanZero:"(הכנס מספר שלם > 0)",integerGreaterThanOne:"(הכנס מספר שלם > 1)",integer0To100:"(הכנס מספר שלם 0..100)",maxScale:"(הכנס מספר שלם > 0, לדוגמה 50000)",minScale:"(הכנס מספר שלם > 0, לדוגמה 150000000)",number0To100:"(הכנס מספר 0..100)",number0To360:"(הכנס מספר 0..360)",number90To90:"(הכנס מספר ‎-90..90)",listOfDoubles:"(הכנס רשימת מספרים, השתמש ברווח כדי להפריד ביניהם)"},htmlEditor:{button:"עריכה..."},sections:{overview:"צפייה מקדימה",esri:"Esri",resource:"משאב",reference:"יחוס",content:"תוכן",distribution:"הפצה",quality:"איכות",eainfo:"שדות",representation:"הצגה קרטוגרפית",metadata:"מטה-דאטה"},metadataStyle:{caption:"סגנון מטה-דאטה ArcGIS",changeButton:"שנה...",dialogTitle:"בחר סגנון מטה-דאטה",updating:"מעדכן מסמך...","Item Description":"תאור פריט","FGDC CSDGM Metadata":"מטה-דאטה FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"מפרט מימוש של מטה-דאטה ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"מפרט מימוש GML3.2 של מטה-דאטה ISO 19139","INSPIRE Metadata Directive":"הנחיות מטה-דאטה של INSPIRE","North American Profile of ISO19115 2003":"פרופיל צפון אמריקאי של ISO19115 2003"},aggrInfo:{caption:"מידע מקובץ",datasetHint:"נדרש מזהה סט נתונים או שם סט נתונים.",aggrDSIdent:"מזהה סט נתונים",aggrDSName:"שם סט נתונים"},appSchInfo:{caption:"סכמת אפליקציה",asName:"שם סכימה",asSchLang:"שפת סכמה",asCstLang:"מגבלת שפה",asAscii:"ASCII",asGraFile:"קובץ גרפיקה",asGraFile_src:"מקור קובץ גרפיקה",asSwDevFile:"קובץ פיתוח תוכנה",asSwDevFile_src:"מקור קובץ פיתוח תוכנה",asSwDevFiFt:"פורמט קובץ פיתוח תוכנה"},citation:{caption:"הפניה",section:{titlesAndDates:"כותרות ותאריכים",links:"כתובות URL",identifiers:"מזהים",presentation:"טופס",other:"אחר",edition:"מהדורה",series:"סידרה"},conditionalDate:{caption:"תאריך הפניה",msg:"נדרש תאריך יצירה, תאריך הפצה או תאריך בדיקה.",msg_nap:"נדרש תאריך הפניה."},resTitle:"כותרת",resAltTitle:"כותרת אלטרנטיבית",resTitleForInspire:{bg:"בולגרית",cs:"צ'כית",da:"דנית",de:"גרמנית",el:"יוונית",en:"English (אנגלית)",es:"ספרדית",et:"אסטונית",fi:"פינית",fr:"צרפתית",hr:"קרואטית",hu:"הונגרית",it:"איטלקית",lt:"ליטאית",lv:"לטבית",mt:"מלטזית",nl:"הולנדית",pl:"פולנית",pt:"פורטוגזית",ro:"רומנית",sk:"סלובקית",sl:"סלובנית",sv:"שוודית"},collTitle:"כותרת כוללנית",date:{createDate:"תאריך יצירה",pubDate:"תאריך פירסום",reviseDate:"תאריך בדיקה",notavailDate:"תאריך לא זמין",inforceDate:"בתאריך כפוי",adoptDate:"תאריך אימוץ",deprecDate:"תאריך פג תוקף",supersDate:"תאריך חלופי"},isbn:"ISBN",issn:"ISSN",citId:{caption:"מזהה",identCode:"קוד",identAuth:"הפניה לבעל סמכות"},resEd:"מהדורה",resEdDate:"תאריך מהדורה",datasetSeries:{seriesName:"שם",issId:"סוגיה",artPage:"עמוד"},otherCitDet:"פרטים אחרים",contactCaption:"איש קשר להפניה"},cntAddress:{caption:"כתובת",delPoint:"נקודת משלוח",city:"עיר",adminArea:"אזור אדמיניסטרטיבי",postCode:"Postal Code",country:"ארץ",eMailAdd:'דוא"ל',addressType:{caption:"סוג כתובת",postal:"של דואר",physical:"פיזי",both:"שניהם"}},cntOnlineRes:{caption:"משאב מקוון",linkage:"URL",protocol:"פרוטוקול",appProfile:"פרופיל אפליקציה",orName:"שם",orDesc:"תיאור"},cntPhone:{caption:"טלפון",voiceNum:"קול",faxNum:"פקס",tddtty:"TDD/TTY?"},codeRef:{caption:"מזהה",identCode:"קוד",idCodeSpace:"מקום לקוד",idVersion:"גרסה",identAuth:"הפניה לבעל סמכות"},constraints:{caption:"הגבלות",useLimit:"השתמש במגבלה",general:{caption:"כללי"},legal:{caption:"משפטי",accessConsts:"מגבלות גישה",useConsts:"השתמש באילוצים",othConsts:"מגבלות אחרות"},security:{caption:"אבטחה",classSys:"מערכת קלסיפיקציה",userNote:"הערת משתמש",handDesc:"תיאור Handling"}},contInfo:{caption:"מידע על תוכן",section:{CovDesc:"תיאור Coverage",ImgDesc:"תיאור תמונה",FetCatDesc:"קטלוג יישויות"},attDesc:"תיאור מאפיין",covDim:{caption:"טווח או ערוץ",seqID:"מזהה רצפים",seqIDType:"סוג מזהה רצפים",dimDescrp:"מתאר"},RangeDim:{caption:"טווח מימד"},Band:{caption:"פס",minVal:"ערך מינימלי",maxVal:"ערך מקסימלי",valUnit:"יחידות ערכים",pkResp:"תגובת שיא",bitsPerVal:"ביטים לערך",toneGrad:"מדרג טונים",sclFac:'פקטור קנ"מ',offset:"היסט"},CovDesc:{caption:"תיאור Coverage",section:{description:"תיאור",rangesAndBands:"טווחים וערוצים"}},ImgDesc:{caption:"תיאור תמונה",section:{description:"תיאור",rangesAndBands:"טווחים וערוצים"},illElevAng:"זווית הארת גובה",illAziAng:"זווית אזימות ההארה",cloudCovPer:"אחוז כיסוי עננים",cmpGenQuan:"איכות דחיסה",trianInd:"אינדיקטור טריאנגולציה?",radCalDatAv:"זמינות נתוני כיול רדיומטרי?",camCalInAv:"זמינות מידע על כיול מצלמה?",filmDistInAv:"זמינות מידע על עיוות סרט?",lensDistInAv:"זמינות מידע על עיוות עדשות?",imagQuCode:"איכות הקוד",prcTypCde:"עיבוד רמת קוד"},FetCatDesc:{caption:"קטלוג יישויות",section:{description:"תיאור",featureTypes:"סוגי ישויות",citation:"הפניה"},compCode:"תואם ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"הפניה לקטלוג ישויות",catFetTyps:{caption:"סוג ישות",genericName:"שם",codeSpace:"מקום לקוד"}}},contact:{caption:"צור קשר",section:{name:"שם איש הקשר",info:"פרטי התקשרות",hoursAndInstructions:"שעות והוראות"},conditionalName:{caption:"שם איש הקשר",msg:"נדרש שם של אדם, שם ארגון או שם תפקיד.",msg_fgdc:"נדרש שם של אדם או שם של ארגון."},rpIndName:"שם של אדם",rpOrgName:"שם ארגון",rpPosName:"שם תפקיד",rpCntInfo:"פרטי התקשרות",cntHours:"שעות שירות",cntInstr:"הוראות ליצירת קשר"},distInfo:{caption:"פורמט הפצה",section:{format:"פורמט",distributor:"מפיץ",transfer:"אפשרויות העברה"},distFormat:{caption:"פורמט הפצה",formatName:"שם הפורמט",formatVer:"גרסת פורמט",formatAmdNum:"מספר תיקון",formatSpec:"מפרט",fileDecmTech:"טכניקת פתיחת דחיסה",formatInfo:"תוכן מידע"},distributor:{caption:"מפיץ"},distTranOps:{caption:"אפשרויות העברה דיגיטלית",section:{unitsAndSize:"יחידות"},unitsODist:"יחידות הפצה",transSize:"Transfer Size",offLineMed:{caption:"מדיום לא מקוון",medDensity:"צפיפות",medDenUnits:"יחידות צפיפות",medVol:"נפחים",medNote:"הערת מדיום"}},distorOrdPrc:{caption:"תהליך הזמנה",resFees:"תשלומים",planAvDtTm:"תאריך זמין",planAvTmPd:{caption:"תקופת זמן פנויה",tmBegin:"תאריך/זמן התחלה",tmEnd:"תאריך/זמן סיום"},ordInstr:"הוראות הזמנה",ordTurn:"סיבוב"}},dqInfo:{caption:"איכות הנתונים",section:{scope:"היקף",report:"דוח",lineage:"יחוס"},dqScope:{section:{level:"רמה",extent:"תיחום"},scpLvl:"רמת היקף",scpLvlDesc:"תיאור רמה",scpExt:"תיחום היקף"},report:{section:{measure:"מידה",evaluation:"הערכה",result:"תוצאה",conformance:"התאמה"},measDesc:"תיאור מדידה",measName:"שם מדידה",measDateTm:"תאריך מדידה",measId:"מזהה מדידה",evalMethDesc:"שיטת הערכה",evalProc:"הפניה לתהליך",ConResult:{caption:"תוצאת התאמה",conExpl:"הסבר",conSpec:"מפרט",conPass:{caption:"מעלה",_1:"מתאים",_0:"לא מתאים"}},QuanResult:{caption:"תוצאה כמותית",quanVal:"ערך",quanValType:"סוג ערך",quanValUnit:"יחידות ערכים",errStat:"שגיאת סטטיסטיקה"}},dataLineage:{section:{statement:"הצהרה",dataSource:"מקור נתונים",prcStep:"צעד תהליך"},statement:"הצהרת ייחוס",dataSource:{caption:"מקור נתונים",section:{description:"תיאור",srcRefSys:"מערכת ייחוס",srcExt:"תיחום",srcCitatn:"הפניה"},srcDesc:"תיאור מקור",srcScale:{rfDenom:'מכנה קנ"מ'},srcRefSys:"מקור מערכת ייחוס",srcExt:"מקור תיחום",srcCitatn:"הפניה למקור"},prcStep:{caption:"צעד תהליך",section:{description:"תיאור",stepProc:"מעבד",stepSrc:"מקור נתונים"},stepDesc:"תיאור תהליך",stepRat:"רציונאל",stepDateTm:"תאריך צעד עיבוד",stepProc:"מעבד",stepSrc:"מקור נתונים"}}},eainfo:{caption:"מידע על יישות ומאפיין",section:{detailed:"פרטים",overview:"צפייה מקדימה"},detailed:{caption:"פרטי ישות ומאפיינים",section:{enttyp:"ישות",attr:"מאפיינים"},enttyp:{caption:"סוג ישות",enttypl:"תווית",enttypt:"אוביקט",enttypc:"מונה",enttypd:"פירוט",enttypds:"מקור הגדרה"},attr:{caption:"מאפיין",section:{description:"תיאור",value:"ערך",domain:"דומיין"},attrlabl:"תווית",attalias:"כינוי",attrdef:"פירוט",attrdefs:"מקור הגדרה",attrtype:"סוג",attwidth:"רוחב",atprecis:"דיוק",attscale:"קנה מידה",atindex:"אינדקס",attrvai:{attrva:"הסבר לערך",attrvae:"דיוק ערכים"},attrmfrq:"תדירות ערך מדידה",begdatea:"תאריך התחלה של ערכים",enddatea:"תאריכי סיום של ערכים",attrdomv:{caption:"דומיין",edom:{caption:"ממוספר",edomv:"ערך",edomvd:"פירוט",edomvds:"מקור הגדרה"},rdom:{caption:"טווח",rdommin:"ערך מינימלי",rdommax:"ערך מקסימלי",rdommean:"ממוצע",rdomstdv:"סטיית תקן",attrunit:"יחידות",attrmres:"רזולוציית מדידה"},codesetd:{caption:"Codeset",codesetn:"שם",codesets:"מקור"},udom:{caption:"לא ניתן לייצוג"}}}},overview:{caption:"צפייה מקדימה",eaover:"סיכום",eadetcit:"הפניה"}},extent:{caption:"תיחום",section:{description:"תיאור",geographic:"גיאוגרפי",temporal:"זמני",vertical:"אנכי"},exDesc:"תיאור תיחום",geoEle:{caption:"תיחום גיאוגרפי",GeoBndBox:{caption:"מלבן תוחם",esriExtentType:"תיחום מיועד לחיפוש?",exTypeCode:"התיחום מכיל את המשאב?",westBL:"קו אורך מערבי",eastBL:"קו אורך מזרחי",southBL:"קו רוחב דרומי",northBL:"קו רוחב צפוני"},GeoDesc:{caption:"תיאור גיאוגרפי",exTypeCode:"התיאור מכיל את המשאב?",identCode:"קוד"}},tempEle:{caption:"תיחום לפי זמן",TM_Period:"תקופת זמן",TM_Instant:"זמן מיידי",tmPosition:"תאריך",tmBegin:"תאריך התחלה",tmEnd:"תאריך סיום"},vertEle:{caption:"היקף אופקי",vertMinVal:"ערך מינימלי",vertMaxVal:"ערך מקסימלי"}},graphOver:{caption:"Browse Graphic",bgFileName:"URL לגרפיקת ניווט",bgFileDesc:"תיאור גרפיקת ניווט",bgFileType:"דפדף סוג קובץ גרפי"},keywords:{caption:"מילות מפתח",section:{topicCategory:"נושא",searchKeys:"תגיות",themeKeys:"נושא",placeKeys:"מקום",tempKeys:"זמני",discKeys:"דיסציפלינה",stratKeys:"Stratum",productKeys:"מוצר",subTopicCatKeys:"תת נושא",otherKeys:"אחר"},delimited:"מילות מפתח",searchKeys:"תגיות",themeKeys:"מילות מפתח לנושא",placeKeys:"מילות מפתח למיקום",tempKeys:"מילות מפתח לזמן",discKeys:"מילות מפתח למשמעת",stratKeys:"מילות מפתח לשכבה",productKeys:"מילות מפתח למוצר",subTopicCatKeys:"מילות מפתח לתת נושא",otherKeys:"מילות מפתח אחרות",thesaName:"הפניה לאוצר מילים",thesaLang:"שפת אוצר מילים",gemet:"חיפוש"},locales:{caption:"מקומות",locale:"מיקום",resTitle:"כותרת",idAbs:"סיכום"},maintenance:{caption:"תחזוקה",section:{frequency:"תדירות",scope:"היקף",note:"פתק"},usrDefFreq:"תדירות מותאמת אישית",dateNext:"עדכון הבא",maintScp:"עדכן היקף",upScpDesc:{caption:"תיאור היקף",attribSet:"מאפיינים",attribIntSet:"מקרי מאפיין",featSet:"ישויות",featIntSet:"מקריי יישויות",datasetSet:"סט נתונים",other:"מקרים אחרים"},maintNote:"הערת תחזוקה",maintCont:"איש קשר של תחזוקה"},metadata:{section:{profile:"פרופיל",details:"היקף"},mdFileID:"מזהה קובץ",mdParentID:"מזהה אב",datasetURI:"URI של סט נתונים",dataSetFn:"פונקציית סט נתונים",mdDateSt:"תאריך מטה-דאטה",mdTimeSt:"זמן מטה-דאטה",mdLang:"שפת מטה-דאטה",mdChar:"סט תווים",mdHrLv:"רמת היררכיה",mdHrLvName:"שם רמת היררכיה",mdContact:"איש קשר של המטה-דאטה",mdMaint:"תחזוקת מטה-דאטה",mdConst:"מגבלות מטה-דאטה"},porCatInfo:{caption:"תיאור הפניה"},refSysInfo:{caption:"ייחוס מרחבי"},resource:{section:{citation:"הפניה",details:"פרטים",description:"תיאור",keywords:"מילות מפתח",status:"סטטוס",resolution:"הפרדה",representation:"הצגה קרטוגרפית",browse:"Browse Graphic",format:"פורמט",usage:"שימוש",aggregateInfo:"צבירה",additional:"נוסף"},idAbs:"תיאור (מופשט)",idPurp:"סיכום (מטרה)",suppInfo:"מידע נוסף",idCredit:"קרדיטים",envirDesc:"סביבת עיבוד",dataLang:"שפת משאב",dataExt:"תיחום משאב",idPoC:"נקודת מגע",resMaint:"תחזוק משאב",resConst:"מגבלות משאב",dsFormat:"פורמט משאב",dataScale:{caption:"קנה מידה של נתונים",equScale:"רזולוציית קנה מידה",scaleDist:"מרחק רזולוציה",scaleDist_value:"מרחק"},idSpecUse:{caption:"שימוש במשאב",specUsage:"שימוש ספציפי",usageDate:"תאריך שימוש",usrDetLim:"מגבלות",usrCntInfo:"איש קשר לשימוש"}},service:{caption:"שירות",svType:"סוג שירות",svType_Name:"שם",svAccProps:"מאפייני גישה",svCouplRes:{caption:"משאבים מוצמדים",svOpName:"שם פעולה",svResCitId:"מזהה משאב"},svCoupleType:"סוג צימוד"},scaleRange:{caption:'טווח קנ"מ',maxScale:"קנה מידה מקס'",minScale:"קנה מידה מינימאלי"},spatRepInfo:{caption:"ייצוג מרחבי",section:{dimension:"מימד",parameters:"פרמטרים"},numDims:"מספר המימדים",tranParaAv:"זמינות פרמטר טרנספורמציה?",axisDimension:{caption:"מימד",dimSize:"גודל",dimResol:{caption:"הפרדה",_value:"ערך רזולוציה",uom:"יחידות רזולוציה"}},VectSpatRep:{caption:"וקטור",geometObjs:"אוביקטים גיאומטריים",geoObjCnt:"ספירת אובייקט"},GridSpatRep:{caption:"גריד"},Georect:{caption:"Georectified",section:{centerPoint:"נקודת מרכז",cornerPts:"נקודות פינה"},chkPtAv:"זמינות נקודת בדיקה?",chkPtDesc:"תיאור נקודת בדיקה",ptInPixel:"נקודה בפיקסל",transDimDesc:"תיאור מימד טרנספורמציה",transDimMap:"מיפוי טרנספורמצית מימד",cornerPts:{caption:"נקודת פינה",pos:"מיקום",gmlDesc:"תיאור",gmlDescRef:"יחוס",gmlIdent:"מזהה",codeSpace:"מזהה Codespace"}},Georef:{caption:"יכולת עיגון מרחבי",ctrlPtAv:"זמינות נקודות בקרה?",orieParaAv:"זמינות פרמטר אוריינטציה?",orieParaDs:"תיאור פרמטר אורינטציה",georefPars:"פרמטרי Georeferenced",paraCit:"הפניה לפרמטר"},Indref:{caption:"לא ישיר"}},booleanOptions:{_false:"לא",_true:"כן"},codelist:{CountryCode:"ארץ",LanguageCode:"שפה",MonetaryUnits:"יחידות מוניטריות",MonetaryUnits_empty:"אין מטבע אוניברסלי",PresentationForm:"פורמט ייצוג נתונים FGDC Geospatial",CI_PresentationFormCode:"צורת הצגה",CI_RoleCode:"תפקיד",CI_OnLineFunctionCode:"פונקציה",IMS_ContentType:"סוג תוכן",DQ_ElementDimension:"מימד",DQ_ElementType:"סוג דוח",DQ_EvaluationMethodTypeCode:"סוג הערכה",DS_AssociationTypeCode:"סוג אסוציאציה",DS_InitiativeTypeCode:"סוג יוזמה",LI_SourceType:"סוג מקור",MD_CellGeometryCode:"גיאומטרית תא",MD_CharacterSetCode:"סט תווים",MD_ClassificationCode:"סיווג",MD_CoverageContentTypeCode:"סוג תוכן",MD_DimensionNameTypeCode:"סוג מימד",MD_GeometricObjectTypeCode:"סוג אובייקט גיאומטרי",MD_ImagingConditionCode:"תנאי צילום",MD_MaintenanceFrequenceCode:"תדירות עדכון",MD_MediumFormatCode:"פורמט קוד",MD_MediumNameCode:"שם אמצעי",MD_PixelOrientationCode:"אוריינטציית פיקסל",MD_ProgressCode:"סטטוס",MD_RestrictionCode:"קוד הגבלה",MD_ScopeCode:"היקף",MD_SpatialRepresentationTypeCode:"סוג ייצוג מרחבי",MD_TopicCategoryCode:"קטגוריה נושא",MD_TopologyLevelCode:"רמת טופולוגיה",RS_Dimension:"מימד",SV_CouplingType:"סוג צימוד",UCUM:"יחידות",UCUM_Length:"יחידות מרחק",RS_UseLimitations:"מגבלות שימוש",RS_AccessConstraints:"מגבלות גישה"}});