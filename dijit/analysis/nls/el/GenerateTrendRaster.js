// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define({toolDefine:"Δημιουργία raster τάσεων",outputLayerName:"${layername}_trend",dimensionLabel:"Επιλέξτε τη διάσταση κατά μήκος της οποίας θα αναλυθεί η τάση των μεταβλητών.",variablesLabel:"Επιλέξτε τις μεταβλητές για τις οποίες θα αναλυθεί η τάση.",variablesListLabel:"Μεταβλητές [Πληροφορίες για τις διαστάσεις] (Περιγραφή)",trendLineTypeLabel:"Επιλέξτε τον τύπο γραμμής για την προσαρμογή των τιμών των μεταβλητών κατά μήκος μιας διάστασης.",linear:"Γραμμική",harmonic:"Αρμονική",polynomial:"Πολυωνυμική",cycleLength:"Καθορίστε το μήκος του αρμονικού κύκλου.",cycleUnit:"Επιλέξτε τη χρονική μονάδα για το μήκος του αρμονικού κύκλου.",years:"Έτη",days:"Ημέρες",frequencyLabel:"Καθορίστε τον αριθμό συχνότητας για την αρμονική προσαρμογή της τάσης.",polynomialOrderLabel:"Καθορίστε τον αριθμό πολυωνυμικής σειράς για την προσαρμογή της τάσης.",modelStatistics:"Επιλέξτε τα στατιστικά στοιχεία μοντέλου που θα συμπεριληφθούν στο raster τάσεων.",rmse:"RMSE",r2:"R στο τετράγωνο",slopePValue:"Τιμή p του συντελεστή κλίσης",ignoreNodataLabel:"Παράβλεψη των τιμών που λείπουν κατά τον υπολογισμό",ignore:"Αγνόηση",analysisLayerLabel:"Επιλέξτε το πολυδιάστατο imagery layer για το οποίο θα αναλυθεί η τάση.",itemDescription:"Image service ανάλυσης που δημιουργήθηκε από το εργαλείο «Δημιουργία Raster Τάσεων»",itemTags:"Αποτέλεσμα ανάλυσης raster, Δημιουργία Raster Τάσεων, ${layername}",itemSnippet:"Image service ανάλυσης που δημιουργήθηκε από το εργαλείο «Δημιουργία Raster Τάσεων»"});