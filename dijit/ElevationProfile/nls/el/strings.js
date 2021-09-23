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

define({display:{elevationProfileTitle:"Υψομετρικό προφίλ",showMe:"βοήθεια",selectLine:"<b>Επιλέξτε</b> ένα στοιχείο στο χάρτη.",popupRequirement:"ΣΗΜΕΙΩΣΗ: Το στοιχείο πρέπει να βρίσκεται σε ένα θεματικό επίπεδο με ενεργοποιημένα τα αναδυόμενα παράθυρα.",digitizeDistanceMeasureTool:"Χρησιμοποιήστε τα εργαλεία του μενού <b>Measure</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/el/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/el/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Τοποθετήστε το δείκτη πάνω στο γράφημα Υψομετρικό προφίλ ή αγγίξτε το για να εμφανιστούν τα υψόμετρα και η τοποθεσία στο χάρτη.",directionLabel:"Κατεύθυνση προφίλ"},buttons:{measureLabel:"Μέτρηση",helpLabel:"Βοήθεια",profileForward:"Προώθηση",profileReverse:"Αντιστροφή",flipProfileTitle:"Κάντε κλικ για αντιστροφή της κατεύθυνσης προφίλ",aggregationShowLabel:"Προβολή πληροφοριών συνάθροισης",aggregationHideLabel:"Απόκρυψη πληροφοριών συνάθροισης",aggregateElevationGainForward:"Αύξηση αθροιστικού υψομέτρου εμπρός",aggregateElevationLossForward:"Μείωση αθροιστικού υψομέτρου εμπρός",aggregateElevationGainReverse:"Αύξηση αθροιστικού υψομέτρου πίσω",aggregateElevationLossReverse:"Μείωση αθροιστικού υψομέτρου πίσω"},chart:{title:"Υψομετρικό προφίλ",demResolution:"Ανάλυση DEM",elevationTitleTemplate:"Υψόμετρο σε {0}",distanceTitleTemplate:"Απόσταση σε {0}",gainLossTemplate:"Ελάχιστο:{min}   Μέγιστο:{max}   Αρχή:{start}   Τέλος:{end}   Αλλαγή:{gainloss}"},errors:{MissingConstructorParameters:"Απουσία παραμέτρου κατασκευαστή.",InvalidConfiguration:"Μη έγκυρη διαμόρφωση.",UnableToProcessResults:"Δεν είναι δυνατή η επεξεργασία των αποτελεσμάτων της ανάλυσης.",UnableToNormalizeGeometry:"Δεν είναι δυνατή η κανονικοποίηση της γραμμικής γεωμετρίας εισόδου",NullGeometry:"Η γραμμική γεωμετρία εισόδου είναι null. Δεν είναι δυνατή η ενημέρωση του προφίλ",InvalidProfileResults:'Από το ProfileChart.update(...) λείπει η παράμετρος "profileResults".'}});