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

define({toolDefine:"Δημιουργία Πολυδιάστατου Raster με Τιμές Ανωμαλίας",outputLayerName:"${layername}_anomaly",variablesLabel:"Επιλογή μεταβλητών για τις οποίες θα δημιουργηθούν οι ανωμαλίες",variablesListLabel:"Μεταβλητές [Dimension Info] (Περιγραφή)",methodLabel:"Επιλογή μεθόδου για τη δημιουργία της ανωμαλίας",calculationIntervalLabel:"Επιλογή χρονικού διαστήματος για τον καθορισμό του μέσου όρου",differenceFromMean:"Διαφορά από τον μέσο όρο",percentDifferenceFromMean:"Ποσοστιαία διαφορά από τον μέσο όρο",percentOfMean:"Ποσοστό του μέσου όρου",zScore:"Βαθμολογία z",differenceFromMedian:"Διαφορά από τον διάμεσο",percentDifferenceFromMedian:"Ποσοστιαία διαφορά από τον διάμεσο",percentOfMedian:"Ποσοστό του διάμεσου",all:"Όλα",yearly:"Κάθε χρόνο",recurringMonthly:"Επανάληψη κάθε μήνα",recurringWeekly:"Επανάληψη κάθε εβδομάδα",recurringDaily:"Επανάληψη κάθε ημέρα",hourly:"Κάθε ώρα",externalRaster:"Εξωτερικό raster",meanRaster:"Επιλέξτε imagery layer διάμεσης τιμής ως πηγή αναφοράς.",ignoreNodataLabel:"Παράβλεψη των τιμών που λείπουν κατά τον υπολογισμό",ignore:"Παράβλεψη",analysisLayerLabel:"Επιλογή πολυδιάστατου imagery layer για τη δημιουργία ανωμαλίας",itemDescription:"Image service ανάλυσης δημιουργημένο από το εργαλείο «Δημιουργία Πολυδιάστατου Raster με Τιμές Ανωμαλίας»",itemTags:"Αποτέλεσμα ανάλυσης raster, Δημιουργία Πολυδιάστατου Raster με Τιμές Ανωμαλίας, ${layername}",itemSnippet:"Image service ανάλυσης δημιουργημένο από το εργαλείο «Δημιουργία Πολυδιάστατου Raster με Τιμές Ανωμαλίας»"});