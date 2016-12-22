// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define({stretchTitle:"Επέκταση",stretchDescription:"Επέκταση τιμών κατά μήκος μιας χρωματικής παλέτας.",rgbTitle:"RGB",noneTitle:"Κανένα",rgbDescription:"Συνδυάζει ζώνες ως κόκκινα, πράσινα και μπλε σύνθετα.",vectorFieldTitle:"Πεδίο διανύσματος",vectorFieldDescription:"Εμφανίζει τις εικόνες ως διανυσματικά σύμβολα",discreteTitle:"Διακριτό",discreteDescription:"Ομαδοποιεί τα δεδομένα με βάση έναν επιλεγμένο αριθμό χρωμάτων και εφαρμόζει ένα χρωματικό συνδυασμό.",classifyTitle:"Ταξινόμηση",classifyDescription:"Αντιστοιχίζει ένα χρώμα για κάθε ομάδα τιμών",uniqueValueTitle:"Μοναδική τιμή",uniqueValueDescription:"Αντιστοιχίζει ένα χρώμα για κάθε τιμή.",bandPrefix:"Ζώνη",bandCombinationTitle:"Συνδυασμός ζωνών",bandCombinationPresetLabel:"Συνδυασμός",bandComboNameCustom:"Προσαρμοσμένο",bandComboNameNaturalColor:"Φυσικό χρώμα",bandComboDescNaturalColor:"Είναι η αναπαραγωγή που πλησιάζει περισσότερο σε αυτό που βλέπει το ανθρώπινο μάτι.",bandComboNameColorInfrared:"Έγχρωμο υπέρυθρο",bandComboDescColorInfrared:"Διαχωρίζει τα χρώματα της βλάστησης, του αστικού τοπίου και του νερού. Εμφανίζει περισσότερη αντίθεση στη βλάστηση από τη Χρήση γης.",bandComboNameLanduse:"Χρήση γης",bandComboDescLanduse:"Διαχωρίζει τα χρώματα του αστικού τοπίου, της βλάστησης και του νερού. Εμφανίζει περισσότερη αντίθεση στην αστική χρήση γης από το Έγχρωμο υπέρυθρο.",bandComboNameLandWater:"Σημείο επαφής γης/νερού",bandComboDescLandWater:"Δημιουργεί μια σαφή σκιαγράφηση μεταξύ γης και νερού και μπορεί να λάβει υπόψη την ελαφρά ομίχλη.",bandComboNameVegetation:"Ανάλυση βλάστησης",bandComboDescVegetation:"Τονίσει τη βλάστηση με βάση το περιεχόμενό της σε νερό και τη δομή των κυττάρων.",bandComboNameShallowBathymetric:"Ρηχό βυθομετρικό",bandComboDescShallowBathymetric:"Τονίζει τα στοιχεία του υπεδάφους σε διαυγές νερό.",redBandTitle:"Κόκκινο",greenBandTitle:"Πράσινο",blueBandTitle:"Μπλε",alphaBandTitle:"Άλφα",backgroundTitle:"Φόντο",displayBackgroundCheckboxTitle:"Εμφάνιση τιμής φόντου",noDataLabel:"Χωρίς δεδομένα",noneStretchTitle:"Κανένα",noneStretchTypeDescription:"Εμφανίζει τιμές μεταξύ της πιθανής ελάχιστης και μέγιστης τιμής.",percentClipStretchTitle:"Ποσοστιαία αποκοπή",percentClipStretchTypeDescription:"Αποκόπτονται τα ποσοστά με την υψηλότερη και τη χαμηλότερη τιμή.",minMaxStretchTitle:"Ελάχιστο Μέγιστο",minMaxStretchTypeDescription:"Εμφανίζει τιμές μεταξύ της πραγματικής ελάχιστης και μέγιστης τιμής.",standardDeviationStretchTitle:"Τυπική απόκλιση",standardDeviationTypeDescription:"Εμφανίζει τιμές μεταξύ ενός καθορισμένου αριθμού τυπικών αποκλίσεων.",stretchTypeLabel:"Τύπος παραμόρφωσης",gammaLabel:"Γάμμα",statisticsLabel:"Στατιστικά στοιχεία",minLabel:"Ελάχ.",maxLabel:"Μέγ.",nStdDeviationsLabel:"Αριθμός τυπικών αποκλίσεων",draStatisticsTitle:"DRA",datasetStatisticsTitle:"Σύνολο δεδομένων",fieldLabel:"Πεδίο",normalizationLabel:"Κανονικοποίηση",methodLabel:"Μέθοδος",methodNaturalBreaksTitle:"Φυσικοί Διαχωρισμοί",methodQuantileTitle:"Ποσοστημόριο",methodEqualIntervalTitle:"Ίσο διάστημα",methodDefinedIntervalTitle:"Καθορισμένο διάστημα",methodManualIntervalTitle:"Μη αυτόματο διάστημα",methodGeometricIntervalTitle:"Γεωμετρικό διάστημα",methodStandardDeviationTitle:"Τυπική απόκλιση",classesLabel:"Κλάσεις",colorSchemeLabel:"Χρωματικός συνδυασμός",colorRampTitle:"Χρωματική παλέτα",bandSelectionLabel:"Ζώνη",noneBandKeyword:"Κανένα",valueFieldTitle:"Πεδίο τιμής",valuesTableTitle:"Τιμές",uniqueValueFieldTitle:"Πεδίο",uniqueValuesColorRampTitle:"Μοναδικές τιμές",valueLabel:"Τιμή",symbolLabel:"Σύμβολο"});