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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define({documentTypes:{arcgis:{caption:"Μεταδεδομένα ArcGIS",editorCaption:"Μεταδεδομένα",description:""}},emptyOption:"Κενό",conditionals:{ISO19139A1_ROW4:"Αν το Επίπεδο ιεραρχίας μεταδεδομένων είναι Σύνολο δεδομένων, τότε απαιτείται το Περίγραμμα γεωγραφικών συντεταγμένων ή η Γεωγραφική περιγραφή.",ISO19139A1_ROW6:"Απαιτείται το Αναγνωριστικό συνόλου δεδομένων ή το Όνομα συνόλου δεδομένων.",ISO19139A1_ROW7:"Αν επιλεχθεί το Άλλοι περιορισμοί, τότε απαιτείται το Άλλοι περιορισμοί.",ISO19139A1_ROW9:"Αν το Πεδίο εφαρμογής δεν είναι Σύνολο δεδομένων ή Σειρά δεδομένων, τότε απαιτείται η Περιγραφή επιπέδου.",ISO19139A1_ROW10_11_12:"Αν το Πεδίο εφαρμογής είναι Σύνολο δεδομένων ή Σειρά δεδομένων, τότε απαιτείται ένα από τα Δήλωση, Βήμα επεξεργασίας ή Προέλευση δεδομένων.",ISO19139A1_ROW15:"Αν έχει επιλεχθεί η Διαθεσιμότητα σημείου ελέγχου, τότε απαιτείται η Περιγραφή σημείου ελέγχου.",ISO19139A1_ROW18:"Αν έχει τεκμηριωθεί η Διανομή, τότε απαιτείται το Μορφότυπο ή ο Διανομέας/Μορφότυπο.",INSPIRE_AccessLimitation:" Απαιτείται τουλάχιστον ένας κωδικός περιορισμού νομικής πρόσβασης ή ένας κωδικός διαβαθμισμένης ασφάλειας. (INSPIRE)",INSPIRE_UseLimitation:" Απαιτείται τουλάχιστον ένας περιορισμός χρήσης. (INSPIRE)",INSPIRE_ConformanceResult:"Μια αναφορά Τομεακής συνέπειας απαιτεί ένα Αποτέλεσμα συμμόρφωσης. (INSPIRE)",INSPIRE_DomainConsistency:"Απαιτείται η αναφορά Τομεακής συνέπειας. (INSPIRE)",INSPIRE_LineageStatement:"Αν το Πεδίο εφαρμογής είναι Σύνολο δεδομένων ή Σειρά δεδομένων, τότε απαιτείται η Δήλωση προέλευσης. (INSPIRE).",FGDC_DescIfTemporal:"Απαιτείται Περιγραφή για τη Χρονολογική έκταση. (FGDC)",FGDC_Keywords:"Απαιτείται το Θέμα, η Ετικέτα ή η Λέξη-κλειδί θέματος. (FGDC)",FGDC_Reports:"Απαιτούνται οι αναφορές Παράλειψης πληρότητας και Εννοιολογικής συνέπειας. (FGDC)",FGDC_Temporal:"Απαιτείται τουλάχιστον μία Χρονολογική έκταση. (FGDC)",NAP_Contact:"Απαιτείται Διεύθυνση/Σημείο παράδοσης, αριθμός για Τηλέφωνο/Φωνής ή Online πόρος/URL. (NAP)",GEN_BoundingBox:"Απαιτείται τουλάχιστον ένα Περίγραμμα γεωγραφικών συντεταγμένων.",GEN_ReportResult:"Απαιτείται είτε Αποτέλεσμα συμμόρφωσης είτε Ποσοτικό αποτέλεσμα.",minLessThanMax:"Η Ελάχιστη τιμή πρέπει να είναι μικρότερη από τη Μέγιστη τιμή."},hints:{integerGreaterThanZero:"(εισαγάγετε έναν ακέραιο > 0)",integerGreaterThanOne:"(εισαγάγετε έναν ακέραιο > 1)",integer0To100:"(εισαγάγετε έναν ακέραιο 0..100)",maxScale:"(εισαγάγετε έναν ακέραιο > 0, π.χ. 50000)",minScale:"(εισαγάγετε έναν ακέραιο > 0, π.χ. 150000000)",number0To100:"(εισαγάγετε έναν αριθμό 0..100)",number0To360:"(εισαγάγετε έναν αριθμό 0..360)",number90To90:"(εισαγάγετε έναν αριθμό -90..90)",listOfDoubles:"(εισαγάγετε μια λίστα αριθμών διαχωρισμένων με κενό διάστημα)"},htmlEditor:{button:"Επεξεργασία..."},sections:{overview:"Επισκόπηση",esri:"Esri",resource:"Πόρος",reference:"Αναφορά",content:"Περιεχόμενο",distribution:"Διανομή",quality:"Ποιότητα",eainfo:"Πεδία",representation:"Αναπαράσταση",metadata:"Μεταδεδομένα"},metadataStyle:{caption:"Στυλ μεταδεδομένων ArcGIS",changeButton:"Αλλαγή...",dialogTitle:"Διαλέξτε στυλ μεταδεδομένων",updating:"Ενημέρωση εγγράφου...","Item Description":"Περιγραφή αντικειμένου","FGDC CSDGM Metadata":"Μεταδεδομένα FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"ISO 19139 Προδιαγραφή υλοποίησης μεταδεδομένων","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Προδιαγραφή υλοποίησης μεταδεδομένων GML3.2","INSPIRE Metadata Directive":"INSPIRE Οδηγία μεταδεδομένων","North American Profile of ISO19115 2003":"Προφίλ Βόρειας Αμερικής του ISO19115 2003"},aggrInfo:{caption:"Συγκεντρωτικές πληροφορίες",datasetHint:"Απαιτείται Αναγνωριστικό συνόλου δεδομένων ή Όνομα συνόλου δεδομένων.",aggrDSIdent:"Αναγνωριστικό συνόλου δεδομένων",aggrDSName:"Όνομα συνόλου δεδομένων"},appSchInfo:{caption:"Σχήμα εφαρμογής",asName:"Όνομα σχήματος",asSchLang:"Γλώσσα σχήματος",asCstLang:"Γλώσσα περιορισμού",asAscii:"ASCII",asGraFile:"Αρχείο γραφικών",asGraFile_src:"Προέλευση αρχείου γραφικών",asSwDevFile:"Αρχείο ανάπτυξης λογισμικού",asSwDevFile_src:"Προέλευση αρχείου ανάπτυξης λογισμικού",asSwDevFiFt:"Μορφότυπο αρχείου ανάπτυξης λογισμικού"},citation:{caption:"Παραπομπή",section:{titlesAndDates:"Τίτλοι και Ημερομηνίες",links:"URL",identifiers:"Αναγνωριστικά",presentation:"Φόρμα",other:"Άλλο",edition:"Έκδοση",series:"Σειρά δεδομένων"},conditionalDate:{caption:"Ημ/νία παραπομπής",msg:"Απαιτείται Ημ/νία δημιουργίας, Ημ/νία δημοσίευσης ή Ημ/νία αναθεώρησης.",msg_nap:"Απαιτείται ημερομηνία παραπομπής."},resTitle:"Τίτλος",resAltTitle:"Εναλλακτικός τίτλος",resTitleForInspire:{bg:"Βουλγαρικά",cs:"Τσεχικά",da:"Δανικά",de:"Γερμανικά",el:"Ελληνικά",en:"Αγγλικά",es:"Ισπανικά",et:"Εσθονικά",fi:"Φινλανδικά",fr:"Γαλλικά",hr:"Κροατικά",hu:"Ουγγρικά",it:"Ιταλικά",lt:"Λιθουανικά",lv:"Λετονικά",mt:"Μαλτεζικά",nl:"Ολλανδικά",pl:"Πολωνικά",pt:"Πορτογαλικά",ro:"Ρουμανικά",sk:"Σλοβακικά",sl:"Σλοβενικά",sv:"Σουηδικά"},collTitle:"Συλλογικός τίτλος",date:{createDate:"Ημερομηνία δημιουργίας",pubDate:"Ημ/νία δημοσίευσης",reviseDate:"Ημ/νία αναθεώρησης",notavailDate:"Ημερομηνία μη διαθεσιμότητας",inforceDate:"Ημερομηνία ισχύος",adoptDate:"Ημερομηνία υιοθέτησης",deprecDate:"Ημερομηνία Κατάργησης",supersDate:"Ημερομηνία Αντικατάστασης"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Αναγνωριστικό",identCode:"Κωδικός",identAuth:"Παραπομπή αρχής"},resEd:"Έκδοση",resEdDate:"Ημ/νία έκδοσης",datasetSeries:{seriesName:"Όνομα",issId:"Τεύχος",artPage:"Σελίδα"},otherCitDet:"Άλλες λεπτομέρειες",contactCaption:"Αρμόδιος επικοινωνίας για την παραπομπή"},cntAddress:{caption:"Διεύθυνση",delPoint:"Σημείο παράδοσης",city:"Πόλη",adminArea:"Περιοχή διαχείρισης",postCode:"Ταχυδρομικός κώδικας",country:"Χώρα",eMailAdd:"Email",addressType:{caption:"Τύπος διεύθυνσης",postal:"Ταχυδρομική",physical:"Φυσική παρουσία",both:"Και τα δύο"}},cntOnlineRes:{caption:"Online πόρος",linkage:"URL",protocol:"Πρωτόκολλο",appProfile:"Προφίλ εφαρμογής",orName:"Όνομα",orDesc:"Περιγραφή"},cntPhone:{caption:"Τηλέφωνο",voiceNum:"Φωνή",faxNum:"Φαξ",tddtty:"TDD/TTY;"},codeRef:{caption:"Αναγνωριστικό",identCode:"Κωδικός",idCodeSpace:"Χώρος κωδικού",idVersion:"Έκδοση",identAuth:"Παραπομπή αρχής"},constraints:{caption:"Περιορισμοί",useLimit:"Περιορισμός χρήσης",general:{caption:"Γενικά"},legal:{caption:"Νομικές ανακοινώσεις",accessConsts:"Περιορισμοί πρόσβασης",useConsts:"Χρήση περιορισμών",othConsts:"Άλλοι περιορισμοί"},security:{caption:"Ασφάλεια",classSys:"Σύστημα ταξινόμησης",userNote:"Σημείωση χρήστη",handDesc:"Περιγραφή χειρισμού"}},contInfo:{caption:"Πληροφορίες περιεχομένου",section:{CovDesc:"Περιγραφή Coverage",ImgDesc:"Περιγραφή εικόνας",FetCatDesc:"Κατάλογος στοιχείων"},attDesc:"Περιγραφή γνωρίσματος",covDim:{caption:"Εύρος ή Ζώνη",seqID:"Αναγνωριστικό ακολουθίας",seqIDType:"Τύπος αναγνωριστικού ακολουθίας",dimDescrp:"Περιγραφή"},RangeDim:{caption:"Διάσταση εύρους"},Band:{caption:"Ζώνη",minVal:"Ελάχιστη τιμή",maxVal:"Μέγιστη τιμή",valUnit:"Μονάδες τιμής",pkResp:"Απόκριση αιχμής",bitsPerVal:"Bits ανά τιμή",toneGrad:"Τονική διαβάθμιση",sclFac:"Συντελεστής κλίμακας",offset:"Μετατόπιση"},CovDesc:{caption:"Περιγραφή Coverage",section:{description:"Περιγραφή",rangesAndBands:"Εύρη και Ζώνες"}},ImgDesc:{caption:"Περιγραφή εικόνας",section:{description:"Περιγραφή",rangesAndBands:"Εύρη και Ζώνες"},illElevAng:"Γωνία ύψους φωτισμού",illAziAng:"Γωνία αζιμουθίου φωτισμού",cloudCovPer:"Ποσοστό κάλυψης cloud",cmpGenQuan:"Ποιότητα συμπίεσης",trianInd:"Δείκτης τριγωνισμού;",radCalDatAv:"Διαθεσιμότητα δεδομένων ραδιομετρικής βαθμονόμησης;",camCalInAv:"Διαθεσιμότητα πληροφοριών βαθμονόμησης κάμερας;",filmDistInAv:"Διαθεσιμότητα πληροφοριών παραμόρφωσης φιλμ;",lensDistInAv:"Διαθεσιμότητα πληροφοριών παραμόρφωσης φακού;",imagQuCode:"Κωδικός ποιότητας",prcTypCde:"Κωδικός επιπέδου επεξεργασίας"},FetCatDesc:{caption:"Κατάλογος στοιχείων",section:{description:"Περιγραφή",featureTypes:"Τύποι στοιχείων",citation:"Παραπομπή"},compCode:"Συμμόρφωση με ISO 19110;",incWithDS:"Included With Dataset?",catCitation:"Παραπομπή καταλόγου στοιχείων",catFetTyps:{caption:"Τύπος στοιχείου",genericName:"Όνομα",codeSpace:"Χώρος κωδικού"}}},contact:{caption:"Επικοινωνία",section:{name:"Όνομα αρμόδιου επικοινωνίας",info:"Στοιχεία επικοινωνίας",hoursAndInstructions:"Ώρες και Οδηγίες"},conditionalName:{caption:"Όνομα αρμόδιου επικοινωνίας",msg:"Απαιτείται Όνομα φυσικού προσώπου, Όνομα οργανισμού ή Όνομα θέσης.",msg_fgdc:"Απαιτείται είτε Όνομα φυσικού προσώπου είτε Όνομα οργανισμού."},rpIndName:"Όνομα φυσικού προσώπου",rpOrgName:"Όνομα οργανισμού",rpPosName:"Όνομα θέσης",rpCntInfo:"Στοιχεία επικοινωνίας",cntHours:"Ώρες υπηρεσίας",cntInstr:"Οδηγίες επικοινωνίας"},distInfo:{caption:"Πληροφορίες διανομής",section:{format:"Μορφότυπο",distributor:"Διανομέας",transfer:"Επιλογές μεταφοράς"},distFormat:{caption:"Μορφόρφοτυπο διανομής",formatName:"Όνομα μορφοτύπου",formatVer:"Έκδοση μορφορφοτύπου",formatAmdNum:"Αριθμός τροποποίησης",formatSpec:"Προδιαγραφή",fileDecmTech:"Τεχνική αποσυμπίεσης",formatInfo:"Περιεχόμενο πληροφοριών"},distributor:{caption:"Διανομέας"},distTranOps:{caption:"Επιλογές ψηφιακής μεταφοράς",section:{unitsAndSize:"Μονάδες"},unitsODist:"Μονάδες κατανομής",transSize:"Μέγεθος μεταφοράς",offLineMed:{caption:"Μέσο εκτός σύνδεσης",medDensity:"Πυκνότητα",medDenUnits:"Μονάδες πυκνότητας",medVol:"Όγκοι",medNote:"Σημείωση μέσου"}},distorOrdPrc:{caption:"Επεξεργασία παραγγελιών",resFees:"Αμοιβές",planAvDtTm:"Ημερομηνία Διαθεσιμότητας",planAvTmPd:{caption:"Ημερομηνίες περιόδου διαθεσιμότητας",tmBegin:"Ημερομηνία/Ώρα έναρξης",tmEnd:"Ημερομηνία/Ωρα λήξης"},ordInstr:"Οδηγίες παραγγελιών",ordTurn:"Αντιστροφή"}},dqInfo:{caption:"Ποιότητα δεδομένων",section:{scope:"Πεδίο",report:"Αναφορά",lineage:"Προέλευση"},dqScope:{section:{level:"Επίπεδο",extent:"Έκταση"},scpLvl:"Επίπεδο πεδίου εφαρμογής",scpLvlDesc:"Περιγραφή επιπέδου",scpExt:"Έκταση πεδίου εφαμογής"},report:{section:{measure:"Μέτρηση",evaluation:"Αξιολόγηση",result:"Αποτέλεσμα",conformance:"Συμμόρφωση"},measDesc:"Περιγραφή μέτρησης",measName:"Όνομα μέτρησης",measDateTm:"Ημ/νία μέτρησης",measId:"Αναγνωριστικό μέτρησης",evalMethDesc:"Μέθοδος αξιολόγησης",evalProc:"Παραπομπή διαδικασίας",ConResult:{caption:"Αποτέλεσμα συμμόρφωσης",conExpl:"Εξήγηση",conSpec:"Προδιαγραφή",conPass:{caption:"Βαθμός",_1:"Συμμορφούμενο",_0:"Μη συμμορφούμενο"}},QuanResult:{caption:"Ποσοτικό αποτέλεσμα",quanVal:"Τιμή",quanValType:"Τύπος τιμής",quanValUnit:"Μονάδες τιμής",errStat:"Στατιστικό σφάλμα"}},dataLineage:{section:{statement:"Δήλωση",dataSource:"Προέλευση δεδομένων",prcStep:"Βήμα επεξεργασίας"},statement:"Δήλωση προέλευσης",dataSource:{caption:"Προέλευση δεδομένων",section:{description:"Περιγραφή",srcRefSys:"Σύστημα αναφοράς",srcExt:"Έκταση",srcCitatn:"Παραπομπή"},srcDesc:"Περιγραφή προέλευσης",srcScale:{rfDenom:"Παρανομαστής κλίμακας"},srcRefSys:"Σύστημα αναφοράς προέλευσης",srcExt:"Έκταση προέλευσης",srcCitatn:"Παραπομπή προέλευσης"},prcStep:{caption:"Βήμα επεξεργασίας",section:{description:"Περιγραφή",stepProc:"Επεξεργαστής",stepSrc:"Προέλευση δεδομένων"},stepDesc:"Περιγραφή επεξεργασίας",stepRat:"Αιτιολογία",stepDateTm:"Ημ/νία βήματος επεξεργασίας",stepProc:"Επεξεργαστής",stepSrc:"Προέλευση δεδομένων"}}},eainfo:{caption:"Πληροφορίες οντοτήτων και γνωρισμάτων",section:{detailed:"Λεπτομέρειες",overview:"Επισκόπηση"},detailed:{caption:"Λεπτομέρειες οντοτήτων και γνωρισμάτων",section:{enttyp:"Οντότητα",attr:"Γνωρίσματα"},enttyp:{caption:"Τύπος οντότητας",enttypl:"Ετικέτα",enttypt:"Αντικείμενο",enttypc:"Πλήθος",enttypd:"Ορισμός",enttypds:"Προέλευση ορισμού"},attr:{caption:"Γνώρισμα",section:{description:"Περιγραφή",value:"Τιμή",domain:"Τομέας"},attrlabl:"Ετικέτα",attalias:"Ψευδώνυμο",attrdef:"Ορισμός",attrdefs:"Προέλευση ορισμού",attrtype:"Τύπος",attwidth:"Πλάτος",atprecis:"Ακρίβεια",attscale:"Κλίμακα",atindex:"Με ευρετήριο",attrvai:{attrva:"Εξήγηση τιμής",attrvae:"Ακρίβεια τιμής"},attrmfrq:"Συχνότητα μέτρησης τιμής",begdatea:"Ημ/νία έναρξης τιμών",enddatea:"Ημ/νία λήξης τιμών",attrdomv:{caption:"Τομέας",edom:{caption:"Με απαρίθμηση",edomv:"Τιμή",edomvd:"Ορισμός",edomvds:"Προέλευση ορισμού"},rdom:{caption:"Εύρος",rdommin:"Ελάχιστη τιμή",rdommax:"Μέγιστη τιμή",rdommean:"Μέση τιμή",rdomstdv:"Τυπική απόκλιση",attrunit:"Μονάδες",attrmres:"Ανάλυση μέτρησης"},codesetd:{caption:"Σύνολο κωδικών",codesetn:"Όνομα",codesets:"Προέλευση"},udom:{caption:"Δεν αντιπροσωπεύεται"}}}},overview:{caption:"Επισκόπηση",eaover:"Σύνοψη",eadetcit:"Παραπομπή"}},extent:{caption:"Έκταση",section:{description:"Περιγραφή",geographic:"Γεωγραφική",temporal:"Χρονολογική",vertical:"Κατακόρυφη"},exDesc:"Περιγραφή έκτασης",geoEle:{caption:"Γεωγραφική έκταση",GeoBndBox:{caption:"Περίγραμμα",esriExtentType:"Είναι δυνατή η αναζήτηση στην έκταση;",exTypeCode:"Η έκταση περιλαμβάνει τον πόρο;",westBL:"Δυτικό γεωγραφικό μήκος",eastBL:"Ανατολικό γεωγραφικό μήκος",southBL:"Νότιο γεωγραφικό πλάτος",northBL:"Βόρειο γεωγραφικό πλάτος"},GeoDesc:{caption:"Γεωγραφική περιγραφή",exTypeCode:"Η περιγραφή περιλαμβάνει τον πόρο;",identCode:"Κωδικός"}},tempEle:{caption:"Χρονολογική έκταση",TM_Period:"Χρονική περίοδος",TM_Instant:"Χρονική στιγμή",tmPosition:"Ημερομηνία",tmBegin:"Ημ/νία έναρξης",tmEnd:"Ημ/νία λήξης"},vertEle:{caption:"Κατακόρυφη έκταση",vertMinVal:"Ελάχιστη τιμή",vertMaxVal:"Μέγιστη τιμή"}},graphOver:{caption:"Αναζήτηση γραφικού",bgFileName:"Αναζήτηση URL γραφικού",bgFileDesc:"Αναζήτηση περιγραφής γραφικού",bgFileType:"Αναζήτηση τύπου αρχείου γραφικού"},keywords:{caption:"Λέξεις-κλειδιά",section:{topicCategory:"Θέμα",searchKeys:"Ετικέτες",themeKeys:"Θέμα",placeKeys:"Τόπος",tempKeys:"Χρόνος",discKeys:"Κλάδος",stratKeys:"Στρώμα",productKeys:"Προϊόν",subTopicCatKeys:"Υποθέμα",otherKeys:"Άλλο"},delimited:"Λέξεις-κλειδιά",searchKeys:"Ετικέτες",themeKeys:"Λέξεις-κλειδιά θέματος",placeKeys:"Λέξεις-κλειδιά τόπου",tempKeys:"Λέξεις-κλειδιά χρόνου",discKeys:"Λέξεις-κλειδιά κλάδου",stratKeys:"Λέξεις-κλειδιά στρώματος",productKeys:"Λέξεις-κλειδιά προϊόντος",subTopicCatKeys:"Λέξεις-κλειδιά υποθέματος",otherKeys:"Άλλες λέξεις-κλειδιά",thesaName:"Παραπομπή θησαυρού",thesaLang:"Γλώσσα θησαυρού",gemet:"Αναζήτηση"},locales:{caption:"Σύνολα τοπικών ρυθμίσεων",locale:"Τοπικές ρυθμίσεις",resTitle:"Τίτλος",idAbs:"Σύνοψη"},maintenance:{caption:"Συντήρηση",section:{frequency:"Συχνότητα",scope:"Πεδίο εφαρμογής",note:"Σημείωση"},usrDefFreq:"Προσαρμοσμένη συχνότητα",dateNext:"Επόμενη ενημέρωση",maintScp:"Πεδίο εφαρμογής ενημέρωσης",upScpDesc:{caption:"Περιγραφή πεδίου εφαρμογής",attribSet:"Γνωρίσματα",attribIntSet:"Εμφανίσεις γνωρίσματος",featSet:"Στοιχεία",featIntSet:"Εμφανίσεις στοιχείου",datasetSet:"Σύνολο δεδομένων",other:"Άλλες εμφανίσεις"},maintNote:"Σημείωση συντήρησης",maintCont:"Αρμόδιος επικοινωνίας για τη συντήρηση"},metadata:{section:{profile:"Προφίλ",details:"Πεδίο εφαρμογής"},mdFileID:"Αναγνωριστικό αρχείου",mdParentID:"Γονικό αναγνωριστικό",datasetURI:"URI συνόλου δεδομένων",dataSetFn:"Τομέας συνόλου δεδομένων",mdDateSt:"Ημ/νία μεταδεδομένων",mdTimeSt:"Χρόνος μεταδεδομένων",mdLang:"Γλώσσα μεταδεδομένων",mdChar:"Σύνολο χαρακτήρων",mdHrLv:"Επίπεδο ιεραρχίας",mdHrLvName:"Όνομα επιπέδου ιεραρχίας",mdContact:"Αρμόδιος επικοινωνίας μεταδεδομένων",mdMaint:"Αρμόδιος επικοινωνίας για τη συντήρηση",mdConst:"Περιορισμοί μεταδεδομένων"},porCatInfo:{caption:"Απεικονιστική παραπομπή"},refSysInfo:{caption:"Χωρική αναφορά"},resource:{section:{citation:"Παραπομπή",details:"Λεπτομέρειες",description:"Περιγραφή",keywords:"Λέξεις-κλειδιά",status:"Κατάσταση",resolution:"Ανάλυση",representation:"Αναπαράσταση",browse:"Αναζήτηση γραφικού",format:"Μορφότυπο",usage:"Χρήση",aggregateInfo:"Συνάθροιση",additional:"Πρόσθετα"},idAbs:"Περιγραφή (Αφηρημένη)",idPurp:"Σύνοψη (Σκοπός)",suppInfo:"Συμπληρωματικές πληροφορίες",idCredit:"Συντελεστές",envirDesc:"Περιβάλλον επεξεργασίας",dataLang:"Γλώσσα πόρου",dataExt:"Έκταση πόρου",idPoC:"Αρμόδιος επικοινωνίας",resMaint:"Συντήρηση πόρου",resConst:"Περιορισμοί πόρου",dsFormat:"Μορφή πόρου",dataScale:{caption:"Κλίμακα δεδομένων",equScale:"Ανάλυση κλίμακας",scaleDist:"Ανάλυση απόστασης",scaleDist_value:"Απόσταση"},idSpecUse:{caption:"Χρήση πόρου",specUsage:"Ειδική χρήση",usageDate:"Ημ/νία χρήσης",usrDetLim:"Περιορισμοί",usrCntInfo:"Αρμόδιος επικοινωνίας χρήσης"}},service:{caption:"Υπηρεσία",svType:"Τύπος υπηρεσίας",svType_Name:"Όνομα",svAccProps:"Ιδιότητες πρόσβασης",svCouplRes:{caption:"Συζευγμένος πόρος",svOpName:"Όνομα λειτουργίας",svResCitId:"Αναγνωριστικό πόρου"},svCoupleType:"Τύπος σύζευξης"},scaleRange:{caption:"Εύρος κλίμακας",maxScale:"Μέγιστη κλίμακα",minScale:"Ελάχιστη κλίμακα"},spatRepInfo:{caption:"Χωρική αναπαράσταση",section:{dimension:"Διάσταση",parameters:"Παράμετροι"},numDims:"Αριθμός διαστάσεων",tranParaAv:"Διαθεσιμότητα παραμέτρων μετασχηματισμού;",axisDimension:{caption:"Διάσταση",dimSize:"Μέγεθος",dimResol:{caption:"Ανάλυση",_value:"Τιμή ανάλυσης",uom:"Μονάδες ανάλυσης"}},VectSpatRep:{caption:"Διάνυσμα",geometObjs:"Γεωμετρικά αντικείμενα",geoObjCnt:"Πλήθος αντικειμένων"},GridSpatRep:{caption:"Πλέγμα"},Georect:{caption:"Με γεωγραφική διόρθωση",section:{centerPoint:"Κεντρικό σημείο",cornerPts:"Γωνιακά σημεία"},chkPtAv:"Διαθεσιμότητα σημείου ελέγχου;",chkPtDesc:"Περιγραφή σημείου ελέγχου",ptInPixel:"Σημείο σε pixel",transDimDesc:"Περιγραφή διάστασης μετασχηματισμού",transDimMap:"Χαρτογράφηση διάστασης μετασχηματισμού",cornerPts:{caption:"Γωνιακό σημείο",pos:"Θέση",gmlDesc:"Περιγραφή",gmlDescRef:"Αναφορά",gmlIdent:"Αναγνωριστικό",codeSpace:"Χώρος κωδικού αναγνωριστικού"}},Georef:{caption:"Με γεωαναφορά",ctrlPtAv:"Διαθεσιμότητα σημείου ελέγχου;",orieParaAv:"Διαθεσιμότητα παραμέτρου προσανατολισμού;",orieParaDs:"Περιγραφή παραμέτρου μετασχηματισμού",georefPars:"Παράμετροι γεωαναφοράς",paraCit:"Παραπομπή παραμέτρου"},Indref:{caption:"Έμμεση"}},booleanOptions:{_false:"Όχι",_true:"Ναι"},codelist:{CountryCode:"Χώρα",LanguageCode:"Γλώσσα",MonetaryUnits:"Νομισματικές μονάδες",MonetaryUnits_empty:"Δεν υπάρχει καθολικό νόμισμα",PresentationForm:"FGDC Φόρμα παρουσίασης γεωχωρικών δεδομένων",CI_PresentationFormCode:"Φόρμα παρουσίασης",CI_RoleCode:"Ρόλος",CI_OnLineFunctionCode:"Τομέας",IMS_ContentType:"Τύπος περιεχομένου",DQ_ElementDimension:"Διάσταση",DQ_ElementType:"Τύπος αναφοράς",DQ_EvaluationMethodTypeCode:"Τύπος αξιολόγησης",DS_AssociationTypeCode:"Τύπος συσχέτισης",DS_InitiativeTypeCode:"Τύπος πρωτοβουλίας",LI_SourceType:"Τύπος προέλευσης",MD_CellGeometryCode:"Γεωμετρία κελιού",MD_CharacterSetCode:"Σύνολο χαρακτήρων",MD_ClassificationCode:"Ταξινόμηση",MD_CoverageContentTypeCode:"Τύπος περιεχομένου",MD_DimensionNameTypeCode:"Τύπος διάστασης",MD_GeometricObjectTypeCode:"Τύπος γεωμετρικού αντικειμένου",MD_ImagingConditionCode:"Συνθήκη απεικόνισης",MD_MaintenanceFrequenceCode:"Συχνότητα ενημέρωσης",MD_MediumFormatCode:"Κωδικός μορφοτύπου",MD_MediumNameCode:"Όνομα μέσου",MD_PixelOrientationCode:"Προσανατολισμός pixel",MD_ProgressCode:"Κατάσταση",MD_RestrictionCode:"Κωδικός περιορισμού",MD_ScopeCode:"Πεδίο εφαρμογής",MD_SpatialRepresentationTypeCode:"Τύπος χωρικής αναπαράστασης",MD_TopicCategoryCode:"Κατηγορία θέματος",MD_TopologyLevelCode:"Επίπεδο τοπολογίας",RS_Dimension:"Διάσταση",SV_CouplingType:"Τύπος σύζευξης",UCUM:"Μονάδες",UCUM_Length:"Μονάδες απόστασης",RS_UseLimitations:"Περιορισμοί χρήσης",RS_AccessConstraints:"Περιορισμοί πρόσβασης"}});