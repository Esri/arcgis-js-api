// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define({general:{cancel:"キャンセル",close:"閉じる",none:"なし",ok:"可",other:"その他",stamp:"スタンプ",now:"現在",choose:"1 つを選択:"},editor:{noMetadata:"このアイテムにはメタデータがありません。",xmlViewOnly:"このアイテムに関連付けられているメタデータのタイプは、エディターでサポートされていません。メタデータは必ず ArcGIS 形式でなければなりません。",editorDialog:{caption:"メタデータ",captionPattern:"{title} のメタデータ"},primaryToolbar:{view:"表示",viewXml:"XML の表示",edit:"編集",initializing:"読み込んでいます...",startingEditor:"エディターを起動しています...",loadingDocument:"ドキュメントを読み込んでいます...",updatingDocument:"ドキュメントを更新しています...",generatingView:"ビューを生成しています...",errors:{errorGeneratingView:"ビューの生成中にエラーが発生しました。",errorLoadingDocument:"ドキュメントの読み込み中にエラーが発生しました。"}},changesNotSaved:{prompt:"ドキュメントには、保存されていない変更があります。",dialogTitle:"メタデータ  エディターを閉じる",closeButton:"閉じる"},download:{caption:"ダウンロード",dialogTitle:"ダウンロード",prompt:"ファイルをダウンロードするにはここをクリックします。"},load:{caption:"開く",dialogTitle:"開く",typeTab:"新しいドキュメント",fileTab:"ファイルを開く",templateTab:"テンプレート",itemTab:"アイテム",filePrompt:"ローカル ArcGIS メタデータ XML ファイルを選択します。メタデータは必ず ArcGIS 形式でなければなりません。",templatePrompt:"メタデータの作成",pullItem:"メタデータにアイテムの詳細を自動入力します。",importWarning:"選択したファイルが ArcGIS 形式で表示されていません。アップロードしたメタデータは必ず ArcGIS 形式でなければなりません。",loading:"読み込んでいます...",noMetadata:"次のオプションのいずれかを選択すると、このアイテムのメタデータを作成できます。",unrecognizedMetadata:"このアイテムに関連付けられているメタデータのタイプは、エディターでサポートされていません。次のオプションのいずれかを選択すると、サポートされているメタデータを作成できます。",errorLoading:"読み込み中にエラーが発生しました。",warnings:{badFile:"選択したファイルを読み込めませんでした。",notAnXml:"選択したファイルは、XML ファイルではありません。",notSupported:"このタイプのファイルはサポートされていません。"}},save:{caption:"保存",dialogTitle:"メタデータの保存",working:"メタデータを保存しています...",errorSaving:"エラーが発生しました。メタデータは保存されませんでした。",saveDialog:{pushCaption:"アイテムに変更内容を適用"}},saveAndClose:{caption:"保存して閉じる"},saveDraft:{caption:"ローカル コピーの保存",dialogTitle:"ローカル コピーの保存"},validate:{caption:"整合チェック",dialogTitle:"整合チェック",docIsValid:"お使いのドキュメントは有効です。"},del:{caption:"削除",dialogTitle:"メタデータの削除",prompt:"このメタデータを削除してもよろしいですか？",working:"メタデータを削除しています...",errorDeleting:"エラーが発生しました。メタデータは削除されませんでした。"},transform:{caption:"変換",dialogTitle:"変換先",prompt:"",working:"変換しています...",errorTransforming:"ドキュメントの変換中にエラーが発生しました。"},errorDialog:{dialogTitle:"エラーが発生しました"}},arcgis:{portal:{metadataButton:{caption:"メタデータ"}}},calendar:{button:"カレンダー...",title:"カレンダー"},geoExtent:{button:"地理範囲の設定...",title:"地理範囲",navigate:"ナビゲーション",draw:"四角形の描画",drawHint:"ドラッグしてください。"},hints:{date:"(yyyy または yyyy-mm または yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy または yyyy-mm または yyyy-mm-dd または yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(カンマまたは新しい行を使用して区切ります)",fgdcDate:"(yyyy または yyyy-mm または yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(整数を入力)",latitude:"(度 (10 進))",longitude:"(度 (10 進))",number:"(数値を入力)",numberGreaterThanZero:"(0 より大きい数値を入力)"},isoTopicCategoryCode:{caption:"トピック カテゴリ",boundaries:"境界",farming:"農業",climatologyMeteorologyAtmosphere:"気象",biota:"生物相",economy:"経済",planningCadastre:"Cadastral",society:"社会",elevation:"高さ",environment:"環境",structure:"構造物",geoscientificInformation:"地球化学の情報",health:"健康",imageryBaseMapsEarthCover:"画像およびベースマップ",inlandWaters:"陸水",location:"位置",intelligenceMilitary:"軍事",oceans:"大洋",transportation:"運輸",utilitiesCommunication:"公益サービス・通信"},multiplicity:{moveElementDown:"1 つ上の選択に移動",moveElementUp:"1 つ下の選択に移動",removeElement:"選択を削除",repeatElement:"選択を繰り返す"},optionalNode:{switchTip:"このセクションを含めるかまたは除外します。"},serviceTypes:{featureService:"フィーチャ サービス",mapService:"マップ サービス",imageService:"イメージ サービス",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"可",empty:"値が必要です。",date:"値は日付にする必要があります。",integer:"値は整数にする必要があります。",number:"値は数値にする必要があります。",other:"無効な値です。"},validationPane:{clearMessages:"メッセージを消去",prompt:"(次の各メッセージをクリックし、指定されたフィールドに必要な情報を入力してください)"}});