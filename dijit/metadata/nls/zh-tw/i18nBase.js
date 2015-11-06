// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define({general:{cancel:"取消",close:"關閉",none:"無",ok:"確定",other:"其他",stamp:"戳記",now:"現在前時間",choose:"選擇一項:"},editor:{noMetadata:"此項目無中繼資料。",xmlViewOnly:"編輯器不支援與該項目關聯的中繼資料類型。中繼資料必須為 ArcGIS 格式。",editorDialog:{caption:"中繼資料",captionPattern:"{title} 的中繼資料"},primaryToolbar:{view:"檢視",viewXml:"檢視 XML",edit:"編輯",initializing:"正在載入...",startingEditor:"正在啟動編輯器...",loadingDocument:"正在載入文件...",updatingDocument:"正在更新文件...",generatingView:"正在生成視圖...",errors:{errorGeneratingView:"生成視圖時出錯。",errorLoadingDocument:"載入文件時出錯。"}},changesNotSaved:{prompt:"文件的變更尚未儲存。",dialogTitle:"關閉中繼資料編輯器",closeButton:"關閉"},download:{caption:"下載",dialogTitle:"下載",prompt:"按一下此處下載檔案。"},load:{caption:"開啟",dialogTitle:"開啟",typeTab:"新建文檔",fileTab:"打開檔案(F)",templateTab:"範本",itemTab:"您的項目",filePrompt:"選擇本地 ArcGIS 中繼資料 XML 檔案。中繼資料必須為 ArcGIS 格式。",templatePrompt:"建立中繼資料",pullItem:"使用項目詳細資訊填入中繼資料。",importWarning:"所選檔案未採用 ArcGIS 格式。上傳的中繼資料必須為 ArcGIS 格式。",loading:"正在載入...",noMetadata:"可透過選擇以下其中一個選項建立該項目的中繼資料。",unrecognizedMetadata:"編輯器不支援與該項目有關的中繼資料類型。支援的中繼資料可透過選擇以下其中一個選項建立。",errorLoading:"載入時出錯。",warnings:{badFile:"無法載入選取的檔案。",notAnXml:"選取的檔案不是 XML 文件。",notSupported:"此類型檔案不受支援。"}},save:{caption:"儲存",dialogTitle:"儲存中繼資料",working:"正在儲存中繼資料...",errorSaving:"發生錯誤，您的中繼資料未儲存。",saveDialog:{pushCaption:"將變更套用到您的項目"}},saveAndClose:{caption:"儲存並關閉"},saveDraft:{caption:"儲存本機副本",dialogTitle:"儲存本機副本"},validate:{caption:"驗證",dialogTitle:"驗證",docIsValid:"您的文檔有效。"},del:{caption:"刪除",dialogTitle:"刪除中繼資料",prompt:"是否確定要刪除此中繼資料?",working:"正在刪除中繼資料...",errorDeleting:"發生錯誤，您的中繼資料未刪除。"},transform:{caption:"轉換",dialogTitle:"轉換至",prompt:"",working:"正在轉換...",errorTransforming:"轉換文件時發生錯誤。"},errorDialog:{dialogTitle:"存在一個錯誤"}},arcgis:{portal:{metadataButton:{caption:"中繼資料"}}},calendar:{button:"行事曆...",title:"行事曆"},geoExtent:{button:"設置地理範圍...",title:"地理範圍",navigate:"導航",draw:"繪製一個矩形",drawHint:"按下滑鼠開始繪製，釋放以完成繪製。"},hints:{date:"(yyyy 或 yyyy-mm 或 yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy 或 yyyy-mm 或 yyyy-mm-dd 或 yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(使用逗號或新行分隔)",fgdcDate:"(yyyy 或 yyyy-mm 或 yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(請輸入一個整數)",latitude:"(十進位度)",longitude:"(十進位度)",number:"(請輸入一個數字)",numberGreaterThanZero:"(請輸入 > 0 的數字)"},isoTopicCategoryCode:{caption:"主題類別",boundaries:"行政與政治邊界",farming:"農業與農事",climatologyMeteorologyAtmosphere:"大氣與氣候",biota:"生物與生態",economy:"商業與經濟",planningCadastre:"地籍",society:"文化、社會與人口統計",elevation:"高程與衍生性產品",environment:"環境與資源保護",structure:"設施點與建築",geoscientificInformation:"地質與地球物理學",health:"人類健康與疾病",imageryBaseMapsEarthCover:"影像地圖與底圖",inlandWaters:"內陸水資源",location:"位置與大地網路",intelligenceMilitary:"軍事",oceans:"海洋與海灣",transportation:"交通網路",utilitiesCommunication:"公用事業和通訊"},multiplicity:{moveElementDown:"下移章節",moveElementUp:"上移章節",removeElement:"移除章節",repeatElement:"重複章節"},optionalNode:{switchTip:"納入或排除此章節。"},serviceTypes:{featureService:"圖徵服務",mapService:"地圖服務",imageService:"影像服務",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"確定",empty:"需要一個數值。",date:"數值必須是日期。",integer:"數值必須是整數。",number:"數值必須是數字。",other:"無效值。"},validationPane:{clearMessages:"清除訊息",prompt:"(按一下下方的每條訊息，並為指定欄位提供必要資訊)"}});