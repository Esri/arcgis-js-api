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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define({toolDefine:"Καθορισμός αντικειμένων μέσω βαθιάς μάθησης",outputLayerName:"${layername}_detected",modelLabel:"Επιλογή μοντέλου βαθιάς μάθησης που θα χρησιμοποιείται για την ανίχνευση αντικειμένων",modelArgsLabel:"Καθορισμός ορισμάτων μοντέλου βαθιάς μάθησης",nameLabel:"Όνομα",valueLabel:"Τιμή",removeDuplicatesLable:"Κατάργηση διπλότυπων στοιχείων από το εξαγόμενο αποτέλεσμα (προαιρετικά)",queryModelArgsMsg:"Εξέταση ορισμάτων μοντέλου...",queryModelArgsErrMsg:"Απέτυχε η υποβολή ερωτήματος για ορίσματα μοντέλου.",nonMaxSuppressionLabel:"Μη μέγιστη εξάλειψη",options:"Επιλογές",confidenceLabel:"Πεδίο βαθμού αξιοπιστίας",classValueLabel:"Πεδίο τιμής κατηγορίας",maxOverlapLabel:"Μέγιστος λόγος επικάλυψης",numberOnlyMsg:"Επιτρέπονται μόνο αριθμικές τιμές.",processingModeLabel:"Λειτουργία επεξεργασίας",processAsMosaicLabel:"Επεξεργασία ως μωσαϊκοποιημένης εικόνας",processAsItemsLabel:"Επεξεργασία όλων των αντικειμένων raster χωριστά",analysisLayerLabel:"Επιλογή εικόνας που θα χρησιμοποιείται για την ανίχνευση αντικειμένων",itemDescription:"Image service ανάλυσης που θα δημιουργείται από το εργαλείο «Ανίχνευση Αντικειμένων Μέσω Βαθιάς Μάθησης»",itemTags:"Αποτέλεσμα ανάλυσης raster, Ανίχνευση Αντικειμένων Μέσω Βαθιάς Μάθησης, ${layername}",itemSnippet:"Image service ανάλυσης που θα δημιουργείται από το εργαλείο «Ανίχνευση Αντικειμένων Μέσω Βαθιάς Μάθησης»"});