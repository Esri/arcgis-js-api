// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define({regions:"Περιοχές",header:{sectionTitles:{all:"ArcGIS Online",myContent:"Περιεχόμενο",myFavorites:"Τα Αγαπημένα μου",myGroups:"Οι ομάδες μου",myOrganization:"Οργανσιμός",livingAtlas:"Living Atlas",subscription:"Περιεχόμενο συνδρομής"},browse:"Περιήγηση",search:"Αναζήτηση",filterFolders:"Φιλτράρισμα φακέλων",allFolders:"Όλο το περιεχόμενο",filterGroups:"Φιλτράρισμα ομάδων",allGroups:"Αναζήτηση σε όλο το περιεχόμενο ομάδας"},resultCount:"αντικείμενα",searchPlaceholders:{generic:"Εισαγωγή όρων αναζήτησης"},filterChips:{mapArea:"Εντός της περιοχής του χάρτη",type:"Τύπος",dateModified:"Τροποποιήθηκε",dateCreated:"Επιτυχής δημιουργία",access:"Επιτυχής κοινοποίηση",group:"Ομάδα",folder:"Φάκελος",status:"Κατάσταση",clearAll:"Απαλοιφή όλων",category:"Κατηγορία",region:"Περιοχή",tagged:"Με ετικέτες"},sortOptions:{sort:"Ταξινόμηση",sortBy:"Ταξινόμηση περιεχομένου κατά:",sortDir:"Κατεύθυνση ταξινόμησης:",relevance:"Συνάφεια",title:"Τίτλος",owner:"Κάτοχος",created:"Ημερομηνία δημιουργίας",modified:"Ημερομηνία τροποποίησης",numviews:"Προβολή αριθμού",avgrating:"Αξιολόγηση",ascending:{relevance:"Λιγότερο προς περισσότερο σχετικό",title:"Με αλφαβητική σειρά",owner:"Με αλφαβητική σειρά",created:"Λιγότερο πρόσφατο",modified:"Λιγότερο πρόσφατο",numviews:"Από το λιγότερο στο περισσότερο",avgrating:"Με τη χαμηλότερη στην υψηλότερη αξιολόγηση"},descending:{relevance:"Από το περισσότερο στο λιγότερο σχετικό",title:"Με αντίστροφη αλφαβητική σειρά",owner:"Με αντίστροφη αλφαβητική σειρά",created:"Πιο πρόσφατο",modified:"Πιο πρόσφατο",numviews:"Από το περισσότερο στο λιγότερο",avgrating:"Με την υψηλότερη στη χαμηλότερη αξιολόγηση"}},itemDetails:{addToMap:"Προσθήκη στο χάρτη",removeFromMap:"Κατάργηση από τον χάρτη",by:"κατά",lastModified:"Ενημερώθηκε",noSnippet:"Δεν είναι διαθέσιμη μια σύντομη σύνοψη του αντικειμένου.",details:"Περιγραφή",termsOfUse:"Όροι χρήσης",attribution:"Συντελεστές (Απόδοση)",noTermsOfUse:"Δεν έχουν καταχωριστεί ειδικοί περιορισμοί ή όρια για τη χρήση του περιεχομένου του αντικειμένου.",noAttribution:"Χωρίς αναγνωρίσεις.",noDescription:"Δεν είναι διαθέσιμη μια αναλυτική περιγραφή του αντικειμένου.",views:"Προβολή αριθμού",created:"Επιτυχής δημιουργία",sharedWith:"Κοινοποιήθηκε σε",shared:{public:"Σε όλους (δημοσίως)",org:"Στον οργανισμό",shared:"Το αντικείμενο δεν είναι κοινόχρηστο.",private:"Το αντικείμενο δεν είναι κοινόχρηστο."},viewUser:"Προβολή προφίλ χρήστη",viewOrg:"Επίσκεψη στον οργανισμό",addToFavorites:"Προσθήκη στα Αγαπημένα",removeFromFavorites:"Κατάργηση από τα Αγαπημένα",managedBy:"Διαχείριση από:"},results:{loadingItems:"Φόρτωση αντικειμένων..",requestError:"Παρουσιάστηκε σφάλμα στο αίτημα.",noItemsFound:"Δεν βρέθηκαν αντικείμενα που να πληρούν τα κριτήριά σας. Πραγματοποιήστε απαλοιφή ορισμένων φίλτρων ώστε να εμφανιστούν περισσότερα αντικείμενα.",empty:"Πληκτρολογήστε μερικούς όρους πιο πάνω για να ξεκινήσει η αναζήτησή σας."},search:"Αναζήτηση",close:"Κλείσιμο",filterPane:{filter:"Φίλτρο",mapArea:"Εμφάνιση περιεχομένου μόνο εντός της περιοχής του χάρτη",orgGroups:"Οι ομάδες του οργανισμού μου",categories:"Κατηγορίες",groupCategories:"Κατηγορίες ομάδων"},viewDetails:"Προβολή λεπτομερειών αντικειμένου",back:"Πίσω",compact:"Πίνακας",compactView:"Συμπαγής προβολή",list:"Λίστα",listView:"Προβολή σε λίστα",showing:"Εμφάνιση",viewResults:"Προβολή αποτελεσμάτων"});