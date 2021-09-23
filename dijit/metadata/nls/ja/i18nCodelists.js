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

define({CI_OnLineFunctionCode:{"001":"ダウンロード","002":"情報","003":"オフライン アクセス","004":"注文","005":"検索","006":"アップロード","007":"Web サービス","008":"電子メール サービス","009":"参照","010":"ファイル アクセス","011":"Web マップ サービス"},CI_PresentationFormCode:{"001":"デジタル文書","002":"ドキュメントのハードコピー","003":"デジタル画像","004":"ハードコピー画像","005":"デジタル マップ","006":"ハードコピー マップ","007":"デジタル モデル","008":"ハードコピー モデル","009":"デジタル プロファイル","010":"ハードコピー プロファイル","011":"デジタル テーブル","012":"ハードコピー テーブル","013":"デジタル ビデオ","014":"ハードコピー ビデオ","015":"デジタル オーディオ","016":"ハードコピー オーディオ","017":"デジタル マルチメディア","018":"ハードコピー マルチメディア","019":"デジタル ダイアグラム","020":"ハードコピー ダイアグラム"},CI_RoleCode:{"001":"リソース提供者","002":"管理者","003":"所有者","004":"ユーザ","005":"配布者","006":"創作者","007":"問い合わせ先","008":"主要な調査担当者","009":"プロセッサ","010":"公開者","011":"作成者","012":"協力者","013":"編集者","014":"調停者","015":"権利保有者"},DQ_EvaluationMethodTypeCode:{"001":"直接内部","002":"直接外部","003":"間接"},DS_AssociationTypeCode:{"001":"対照表","002":"より大きな作業の引用","003":"継ぎ目のないデータベースの部分","004":"ソース","005":"ステレオメイト","006":"の構成要素:"},DS_InitiativeTypeCode:{"001":"作戦","002":"コレクション","003":"運動","004":"実験","005":"調査","006":"任務","007":"センサ","008":"操作","009":"プラットフォーム","010":"プロセス","011":"プログラム","012":"プロジェクト","013":"分析","014":"タスク","015":"トライアル"},MD_CellGeometryCode:{"001":"ポイント","002":"エリア","003":"ボクセル"},MD_CharacterSetCode:{"001":"ucs2","002":"ucs4","003":"utf7","004":"utf8","005":"utf16","006":"8859part1","007":"8859part2","008":"8859part3","009":"8859part4","010":"8859part5","011":"8859part6","012":"8859part7","013":"8859part8","014":"8859part9","015":"8859part10","016":"8859part11","018":"8859part13","019":"8859part14","020":"8859part15","021":"8859part16","022":"jis","023":"shiftJIS","024":"eucJP","025":"usAscii","026":"ebcdic","027":"eucKR","028":"big5","029":"GB2312"},MD_ClassificationCode:{"001":"未分類","002":"制限公開","003":"部外秘","004":"機密","005":"最高機密","006":"センシティブ","007":"公的使用のみ"},MD_CoverageContentTypeCode:{"001":"画像","002":"主題分類","003":"物理的測定値"},MD_DimensionNameTypeCode:{"001":"行 (Y 軸)","002":"列 (X 軸)","003":"鉛直 (Z 軸)","004":"トラッキング","005":"横断軌跡","006":"ライン","007":"サンプル","008":"時間"},MD_GeometricObjectTypeCode:{"001":"複素数","002":"コンポジット","003":"曲線","004":"ポイント","005":"ソリッド","006":"サーフェス"},MD_ImagingConditionCode:{"001":"不鮮明画像","002":"クラウド","003":"低い黄道傾斜角","004":"フォグ効果","005":"濃い煙または塵","006":"夜","007":"雨","008":"薄暮","009":"影","010":"雪","011":"地形による遮蔽"},MD_MaintenanceFrequenceCode:{998:"不明","001":"頻繁","002":"毎日","003":"毎週","004":"隔週","005":"毎月","006":"四半期","007":"年 2 回","008":"毎年","009":"必要に応じて","010":"不規則","011":"無計画","012":"不明","013":"半月ごと"},MD_MediumFormatCode:{"001":"CPIO","002":"TAR","003":"High Sierra","004":"ISO 9660","005":"ISO 9660 Rock Ridge","006":"ISO 9660 Apple HFS","007":"UDF"},MD_MediumNameCode:{"001":"CD-ROM","002":"DVD","003":"DVD-ROM","004":"3.5 インチ フロッピー","005":"5.25 インチ フロッピー","006":"7 トラック テープ","007":"9 トラック テープ","008":"3480 カートリッジ","009":"3490 カートリッジ","010":"3580 カートリッジ","011":"4 mm カートリッジ テープ","012":"8mm カートリッジ テープ","013":"1.25 インチ カートリッジ テープ","014":"デジタル リニア テープ","015":"オンライン","016":"衛星リンク","017":"電話回線","018":"ハードコピー","019":"ジアゾ式ポリエステル 08","020":"カード マイクロフィルム","021":"マイクロフィルム 240","022":"マイクロフィルム 35","023":"マイクロフィルム 70","024":"マイクロフィルム一般","025":"マイクロフィルム マイクロフィッシュ","026":"写真 (ネガ)","027":"用紙","028":"ジアゾ式","029":"写真","030":"トレーシング ペーパー","031":"ハード ディスク","032":"USB フラッシュ ドライブ"},MD_PixelOrientationCode:{"001":"中央","002":"左下","003":"右下","004":"右上隅","005":"左上"},MD_ProgressCode:{"001":"完了","002":"古文書","003":"廃棄","004":"進行中","005":"計画","006":"必須","007":"作業中","008":"提案済み"},MD_RestrictionCode:{"001":"著作権","002":"特許","003":"特許出願中","004":"商標","005":"ライセンス","006":"知的所有権","007":"制限公開","008":"その他の制限","009":"制限なしライセンス","010":"エンド ユーザー ライセンス","011":"配布者ライセンス","012":"プライバシー","013":"法定","014":"部外秘","015":"重要性"},MD_Metadata_MD_ScopeCode:{"001":"属性","002":"属性型","003":"収集用機器","004":"収集作業","005":"データセット","006":"系列","007":"非地理データセット","008":"次元グループ","009":"フィーチャ","010":"フィーチャ タイプ","011":"プロパティ タイプ","012":"現場作業","013":"ソフトウェア","014":"サービス","015":"モデル","016":"タイル","017":"活動","018":"ステレオメイト","019":"センサ","020":"プラットフォーム シリーズ","021":"センサー シリーズ","022":"生産シリーズ","023":"交換シリーズ","024":"その他のシリーズ"},MD_ScopeCode:{"001":"属性","002":"属性型","003":"収集用機器","004":"収集作業","005":"データセット","006":"系列","007":"非地理データセット","008":"次元グループ","009":"フィーチャ","010":"フィーチャ タイプ","011":"プロパティ タイプ","012":"現場作業","013":"ソフトウェア","014":"サービス","015":"モデル","016":"タイル","017":"活動","018":"ステレオメイト","019":"センサ","020":"プラットフォーム シリーズ","021":"センサー シリーズ","022":"生産シリーズ","023":"交換シリーズ","024":"その他のシリーズ"},MD_SpatialRepresentationTypeCode:{"001":"ベクター","002":"グリッド","003":"テキスト表形式","004":"TIN","005":"ステレオ モデル","006":"ビデオ"},MD_TopicCategoryCode:{"001":"農業","002":"生物相","003":"境界","004":"気象","005":"経済","006":"標高","007":"環境","008":"地球科学","009":"医療","010":"全地球基本地図画像","011":"軍事情報","012":"陸水","013":"場所","014":"海洋","015":"土地台帳計画","016":"社会","017":"構造物","018":"運輸","019":"公共事業・通信"},MD_TopologyLevelCode:{"001":"ジオメトリのみ","002":"1D トポロジ","003":"平面グラフ","004":"完全平面グラフ","005":"サーフェス グラフ","006":"完全サーフェス グラフ","007":"3D トポロジ","008":"完全 3D トポロジ","009":"概要（Abstract）"},SV_CouplingType:{"001":"疎","002":"混合","003":"密"},AddressType:{postal:"郵便番号",physical:"物理",both:"両方"},PresentationForm:{atlas:"地図帳",audio:"オーディオ",diagram:"ダイアグラム",document:"ドキュメント",globe:"グローブ",map:"マップ",model:"モデル","multimedia presentation":"マルチメディア プレゼンテーション",profile:"断面","raster digital data":"ラスター デジタル データ","remote-sensing image":"リモート センシング画像",section:"セクション",spreadsheet:"スプレッドシート","tabular digital data":"表形式のデジタル データ","vector digital data":"ベクター デジタル データ",video:"ビデオ",view:"表示"},DQ_ElementDimension:{horizontal:"水平",vertical:"垂直方向"},DQ_ElementType:{DQCompComm:"完全性 (過剰)",DQCompOm:"完全性 (漏れ)",DQConcConsis:"概念一貫性",DQDomConsis:"ドメイン一貫性",DQFormConsis:"論理一貫性 (書式一貫性)",DQTopConsis:"論理一貫性 (位相一貫性)",DQAbsExtPosAcc:"位置正確度 (絶対正確度または外部正確度)",DQGridDataPosAcc:"位置正確度 (グリッドデータ位置正確度)",DQRelIntPosAcc:"位置正確度 (相対正確度または内部正確度)",DQThemClassCor:"分類正確度 (分類の正しさ)",DQNonQuanAttAcc:"非定量属性正確度",DQQuanAttAcc:"定量属性正確度",DQAccTimeMeas:"時間測定正確度",DQTempConsis:"時間正確度 (時間一貫性)",DQTempValid:"時間正確度 (時間妥当性)"},IMS_ContentType:{"001":"オンライン データ アンド マップ サービス","002":"ダウンロード可能なデータ","003":"オフライン データ","004":"静的マップ イメージ","005":"その他のドキュメント","006":"アプリケーション","007":"地理サービス","008":"クリアリングハウス","009":"マップ ファイル","010":"地理アクティビティ"},LI_SourceType:{used:"使用",produced:"生成"},RS_Dimension:{horizontal:"水平",vertical:"垂直方向",temporal:"テンポラル"},CountryCode:{AF:"アフガニスタン",AX:"オーランド諸島",AL:"アルバニア",DZ:"アルジェリア",AS:"米国領サモア",AD:"アンドラ",AO:"アンゴラ",AI:"アンギラ",AQ:"Antarctica",AG:"アンチグアバーブーダ",AR:"アルゼンチン",AM:"アルメニア",AW:"アルバ",AU:"オーストラリア",AT:"オーストリア",AZ:"アゼルバイジャン",BS:"バハマ",BH:"バーレーン",BD:"バングラデシュ",BB:"バルバドス",BY:"ベラルーシ",BE:"ベルギー",BZ:"ベリーズ",BJ:"ベナン",BM:"バミューダ",BT:"ブータン",BO:"ボリビア多民族国",BQ:"ボネール、シント ユースタティウスおよびサバ",BA:"ボスニア ヘルツェゴビナ",BW:"ボツワナ",BV:"Bouvet Island",BR:"ブラジル",IO:"British Indian Ocean Territory",BN:"ブルネイ ダルサラーム",BG:"ブルガリア",BF:"ブルキナファソ",BI:"ブルンジ",KH:"カンボジア",CM:"カメルーン",CA:"カナダ",CV:"カーボベルデ",KY:"ケイマン諸島",CF:"中央アフリカ共和国",TD:"チャド",CL:"チリ",CN:"中国",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"コロンビア",KM:"コモロ",CG:"Congo",CD:"コンゴ民主共和国",CK:"クック諸島",CR:"コスタリカ",CI:"コートジボワール",HR:"クロアチア",CU:"キューバ",CW:"キュラソー島",CY:"キプロス",CZ:"チェコ共和国",DK:"デンマーク",DJ:"ジブチ",DM:"ドミニカ国",DO:"ドミニカ共和国",EC:"エクアドル",EG:"エジプト",SV:"エルサルバドル",GQ:"赤道ギニア",ER:"エリトリア",EE:"エストニア",ET:"エチオピア",FK:"Falkland Islands (Malvinas)",FO:"フェロー諸島",FJ:"フィジー",FI:"フィンランド",FR:"フランス",GF:"フランス領ギアナ",PF:"フランス領ポリネシア",TF:"French Southern Territories",GA:"ガボン",GM:"ガンビア",GE:"ジョージア",DE:"ドイツ",GH:"ガーナ",GI:"ジブラルタル",GR:"ギリシャ",GL:"グリーンランド",GD:"グレナダ",GP:"グアドループ",GU:"グアム",GT:"グアテマラ",GG:"ガーンジー",GN:"ギニア",GW:"ギニアビサウ",GY:"ガイアナ",HT:"ハイチ",HM:"ヘアド島・マクドナルド諸島",VA:"教皇庁 (バチカン市国)",HN:"ホンジュラス",HK:"香港",HU:"ハンガリー",IS:"アイスランド",IN:"India",ID:"インドネシア",IR:"イラン",IQ:"イラク",IE:"アイルランド",IM:"マン島",IL:"イスラエル",IT:"イタリア",JM:"ジャマイカ",JP:"Japan",JE:"ジャージー島",JO:"ヨルダン",KZ:"カザフスタン",KE:"ケニア",KI:"キリバス",KP:"朝鮮民主主義人民共和国",KR:"韓国",KW:"クウェート",KG:"キルギスタン",LA:"Lao People's Democratic Republic",LV:"ラトビア",LB:"レバノン",LS:"レソト",LR:"リベリア",LY:"リビア",LI:"リヒテンシュタイン",LT:"リトアニア",LU:"ルクセンブルグ",MO:"マカオ",MK:"マケドニア (旧ユーゴスラビア共和国)",MG:"マダガスカル",MW:"マラウイ",MY:"マレーシア",MV:"モルディブ",ML:"マリ",MT:"マルタ",MH:"マーシャル諸島",MQ:"マルティニク",MR:"モーリタニア",MU:"モーリシャス",YT:"マヨット島",MX:"メキシコ",FM:"ミクロネシア連邦",MD:"モルドバ共和国",MC:"モナコ",MN:"モンゴル国",ME:"モンテネグロ",MS:"モントセラト島",MA:"モロッコ",MZ:"モザンビーク",MM:"Myanmar",NA:"ナミビア",NR:"ナウル",NP:"ネパール",NL:"オランダ",NC:"フランス領ニューカレドニア",NZ:"ニュージーランド",NI:"ニカラグア",NE:"ニジェール",NG:"ナイジェリア",NU:"ニウエ",NF:"ノーフォーク島",MP:"北マリアナ諸島連邦",NO:"ノルウェー",OM:"オマーン",PK:"パキスタン",PW:"パラオ",PS:"Palestinian Territory, Occupied",PA:"パナマ",PG:"パプアニューギニア独立国",PY:"パラグアイ",PE:"ペルー",PH:"フィリピン",PN:"Pitcairn",PL:"ポーランド",PT:"ポルトガル",PR:"プエルトリコ",QA:"カタール",RE:"レユニオン",RO:"ルーマニア",RU:"ロシア連邦",RW:"ルワンダ",BL:"サン バルテルミー",SH:"セント ヘレナ、アセンションおよびトリスタン ダ クーニャ",KN:"セントクリストファー ネーヴィス",LC:"セントルシア",MF:"サン・マルタン島",PM:"サンピエール島とミクロン島",VC:"セントビンセントおよびグレナディーン諸島",WS:"サモア",SM:"サンマリノ",ST:"サントメ・プリンシペ",SA:"サウジアラビア",SN:"セネガル",RS:"セルビア",SC:"セイシェル",SL:"シエラ・レオネ",SG:"シンガポール",SX:"シント マールテン (オランダ領)",SK:"スロバキア",SI:"スロベニア",SB:"ソロモン諸島",SO:"ソマリア民主共和国",ZA:"南アフリカ",GS:"南ジョージア島・南サンドイッチ諸島",SS:"南スーダン",ES:"スペイン",LK:"スリランカ",SD:"スーダン",SR:"スリナム",SJ:"スバールバル諸島・ヤンマイエン島",SZ:"スワジランド",SE:"スウェーデン",CH:"スイス",SY:"Syrian Arab Republic",TW:"台湾",TJ:"タジキスタン",TZ:"タンザニア",TH:"タイ",TL:"Timor-Leste",TG:"トーゴ",TK:"トケラウ諸島",TO:"トンガ",TT:"トリニダード トバゴ",TN:"チュニジア",TR:"トルコ",TM:"トルクメニスタン",TC:"タークス・カイコス諸島",TV:"ツバル",UG:"ウガンダ",UA:"ウクライナ",AE:"アラブ首長国連邦",GB:"英国",US:"米国",UM:"United States Minor Outlying Islands",UY:"ウルグアイ",UZ:"ウズベキスタン",VU:"バヌアツ",VE:"ベネズエラ・ボリバル共和国",VN:"ベトナム",VG:"Virgin Islands, British",VI:"米領バージン諸島",WF:"ワリー・エ・フトゥーナ諸島",EH:"Western Sahara",YE:"イエメン",ZM:"ザンビア",ZW:"ジンバブエ"},LanguageCode:{aar:"アファル語",abk:"アブハズ語",ace:"アキネス語",ach:"アチョリ語",ada:"アダングメ語",ady:"アディジェイ語",afa:"アフロ・アジア語族",afh:"アフリヒリ語",afr:"アフリカーンス語",ain:"アイヌ語",aka:"アカン語",akk:"アッカド語",alb:"アルバニア語",ale:"アレウト語",alg:"アルゴンキン語族",alt:"南アルタイ語",amh:"アムハラ語",ang:"古英語 (450 年頃から 1100 年頃)",anp:"アンギカ語",apa:"アパッチ語族",ara:"アラビア語",arc:"アラム語 (700-300 BCE) ; 帝国アラム語 (700-300 BCE)",arg:"アラゴン語",arm:"アルメニア語",arn:"マプドゥング語; マプチェ語",arp:"アラパホー語",art:"人工諸語",arw:"アラワク語",asm:"アッサム語",ast:"アストゥリアス語; バブレ; レオン; アストゥールレオネス",ath:"アサバスカ諸語",aus:"オーストラリア語族",ava:"アヴァール語",ave:"アヴェスター語",awa:"アワディー語",aym:"アイマラ語",aze:"アゼルバイジャン語",bad:"バンダ語",bai:"バミレケ諸語",bak:"バシキール語",bal:"バルーチー語",bam:"バンバラ語",ban:"バリ語",baq:"バスク語",bas:"バサ語",bat:"バルト諸語",bej:"ベジャ語; ベダウエ語",bel:"ベラルーシ語",bem:"ベンバ語",ben:"ベンガル語",ber:"ベルベル語族",bho:"ボージプリー語",bih:"ビハール語",bik:"ビコル語",bin:"ビナ語; エド語",bis:"ビスラマ語",bla:"シクシカ語",bnt:"バントゥー諸語",bos:"ボスニア語",bra:"ブラジ語",bre:"ブルトン語",btk:"バタク語族",bua:"ブリアット語",bug:"ブギ語",bul:"ブルガリア語",bur:"ビルマ語",byn:"ブリン語; ビリン語",cad:"カドー語",cai:"中米インディアン諸語",car:"カリブ語",cat:"カタルーニャ語; バレンシア語",cau:"コーカサス諸語",ceb:"セブアノ語",cel:"ケルト諸語",cha:"チャモロ語",chb:"チブチャ語",che:"チェチェン語",chg:"チャガタイ語",chi:"中国語",chk:"チュウック語",chm:"マリ語",chn:"ビーチ・ラ・マー",cho:"チョクトー語",chp:"チプウィアン語; デネスリン語",chr:"チェロキー語",chu:"教会スラヴ語; 古代スラヴ語; 古代ブルガリア語; 古代教会スラブ語",chv:"チュヴァシ語",chy:"シャイアン語",cmc:"チャム諸語",cop:"コプト語",cor:"コーンウォール語",cos:"コルシカ語",cpe:"英語が基盤のクレオール言語",cpf:"フランス語が基盤のクレオール言語",cpp:"ポルトガル語が基盤のクレオール言語",cre:"クリー語",crh:"クリミア・タタール語; クリミア・トルコ語",crp:"その他の混成語・混合語",csb:"カシューブ語",cus:"クシュ諸語",cze:"チェコ語",dak:"ダコタ語",dan:"デンマーク語",dar:"ダルギン語",day:"ダヤク語",del:"デラウェア",den:"スレーヴ語 (アタパスカ語群)",dgr:"ドグリブ語",din:"ディンカ語",div:"ディベヒ語; モルディブ語",doi:"ドグリー語",dra:"ドラヴィダ諸語",dsb:"下ソルブ語",dua:"デゥアラ語",dum:"中世オランダ語 (1050 年頃から 1350 年頃)",dut:"オランダ語; フラマン語",dyu:"デゥウラ語",dzo:"ゾンカ語",efi:"エフィク語",egy:"エジプト語 (古代)",eka:"エカジュク語",elx:"エラム語",eng:"英語",enm:"中英語 (1100 年頃から 1500 年頃)",epo:"エスペラント",est:"エストニア語",ewe:"エウェ語",ewo:"エウォンド語",fan:"ファン語",fao:"フェロー語",fat:"ファンティー語",fij:"フィジー語",fil:"フィリピン語; ピリピーノ語",fin:"フィンランド語",fiu:"フィン・ウゴル諸語",fon:"フォン語",fre:"フランス語",frm:"中期フランス語 (1400 年頃から 1600 年頃)",fro:"古フランス語 (842 年から 1400 年頃)",frr:"北フリジア語",frs:"東フリジア語",fry:"西フリジア語",ful:"フラ語",fur:"フリウリ語",gaa:"ガー語",gay:"ガイ語",gba:"バヤ語",gem:"ゲルマン諸語",geo:"グルジア語",ger:"ドイツ語",gez:"ゲエズ語",gil:"キルバス語",gla:"ゲール語; スコットランド・ゲール語",gle:"アイルランド語",glg:"ガリシア語",glv:"マン島語",gmh:"中期高地ドイツ語 (1050 年頃から 1500 年頃)",goh:"古代高地ドイツ語 (750 年頃から 1050 年頃)",gon:"ゴーンディー語",gor:"ゴロンタロ語",got:"ゴート語",grb:"グレボ語",grc:"古典ギリシア語 (1453 年まで)",gre:"ギリシア語 (1453 年以降)",grn:"グアラニー語",gsw:"スイスドイツ語; アラマン語; アルザス方言",guj:"グジャラート語",gwi:"グウィッチン語",hai:"ハイダ語",hat:"ハイチ語; ハイチクレオール語",hau:"ハウサ語",haw:"ハワイ語",heb:"ヘブライ語",her:"ヘレロ語",hil:"ヒリガイノン語",him:"ヒマーチャル語、西パハーリ語",hin:"ヒンディー語",hit:"ヒッタイト語",hmn:"フモング語",hmo:"ヒリモトゥ語",hrv:"クロアチア語",hsb:"上ソルブ語",hun:"ハンガリー語",hup:"フーパ語",iba:"イバン語",ibo:"イボ語",ice:"アイスランド語",ido:"イド語",iii:"彝語 (ロロ語) ; ノス語",ijo:"イジョ語",iku:"イヌイット語",ile:"インターリング; オクシデンタル",ilo:"イロカノ語",ina:"インターリングア (International Auxiliary Language Association)",inc:"インド諸語",ind:"インドネシア語",ine:"印欧諸語",inh:"イングーシ語",ipk:"イヌピア語",ira:"イラン諸語",iro:"イロコイ語族",ita:"イタリア語",jav:"ジャワ語",jbo:"ロジバン",jpn:"日本語",jpr:"ユダヤ・ペルシア語",jrb:"ユダヤ・アラビア語",kaa:"カラカルパク語",kab:"カビル語",kac:"カチン語; チンプオ語",kal:"カラーリット語; グリーンランド語",kam:"カンバ語",kan:"カンナダ語",kar:"カレン語",kas:"カシミール語",kau:"カヌリ語",kaw:"カウィ語",kaz:"カザフ語",kbd:"カバルド語",kha:"カシ語",khi:"コイサン諸語",khm:"クメール語",kho:"コータン語; サカ語",kik:"キクユ語",kin:"キニヤルワンダ語",kir:"キルギス語",kmb:"キンブンドゥ語",kok:"コンカニー語",kom:"コミ語",kon:"コンゴ語",kor:"韓国語",kos:"コスラエ語",kpe:"クペレ語",krc:"カラチャイ・バルカル語",krl:"カレリア語",kro:"クルー語",kru:"クルク語",kua:"クワニャマ語",kum:"クミク語",kur:"クルド語",kut:"クテナイ語",lad:"ラディノ語",lah:"ラフンダー語",lam:"ランバ語",lao:"ラーオ語",lat:"ラテン語",lav:"ラトビア語",lez:"レジン語",lim:"リンブルフ語",lin:"リンガラ語",lit:"リトアニア語",lol:"モンゴ語",loz:"ロジ語",ltz:"ルクセンブルク語",lua:"ルバ・ルルア語",lub:"ルバ語",lug:"ガンダ語",lui:"ルイセニョ語",lun:"ランダ語",luo:"ルオ語 (ケニアとタンザニア)",lus:"ルシャイ語",mac:"マケドニア語",mad:"マドゥラ語",mag:"マガヒ語",mah:"マーシャル語",mai:"マイティリー語",mak:"マカサル語",mal:"マラヤーラム語",man:"マンディンゴ語",mao:"マオリ語",map:"オーストロネシア語族",mar:"マラッタ語",mas:"マサイ語",may:"マレー語",mdf:"モクシャ語",mdr:"マンダル語",men:"メンデ語",mga:"中期アイルランド語 (900 年から 1200 年)",mic:"ミクマク語",min:"ミナンカバウ語",mis:"その他の言語",mkh:"モン・クメール諸語",mlg:"マダガスカル語",mlt:"マルタ語",mnc:"満州語",mni:"マニプリ語",mno:"マノボ語",moh:"モーホーク語",mon:"モンゴル語",mos:"モッシー語",mul:"多言語",mun:"ムンダ諸語",mus:"クリーク語",mwl:"ミランダ語",mwr:"マルワリ語",myn:"マヤ語族",myv:"エルジャ語",nah:"ナワトル語",nai:"北米インディアン諸語",nap:"ナポリ語",nau:"ナウル",nav:"ナヴァホ語",nbl:"南ンデベレ語",nde:"北ンデベレ語",ndo:"ンドンガ語",nds:"低地ドイツ語; 低地サクソン語",nep:"ネパール語",new:"ネワール語",nia:"ニアス語",nic:"ニジェール・コルドファン諸語",niu:"ニウエ語",nno:"ノルウェー語ニーノシュク; ニーノシュク (ノルウェー語)",nob:"ブークモール (ノルウェー語); ノルウェー語ブークモール",nog:"ノガイ語",non:"古ノルド語",nor:"ノルウェー語",nqo:"ンコ語",nso:"ペディ語; セペディ語; 北ソト語",nub:"ヌビア語",nwc:"古典ネワリ語",nya:"チチェワ語; チェワ語; ニャンジャ語",nym:"ニャムウェジ語",nyn:"ニャンコレ語",nyo:"ニョロ語",nzi:"ンジマ語",oci:"オック語 (1500 年以降); プロブァンス語",oji:"オジブワ語",ori:"オリヤー語",orm:"オロモ語",osa:"オーセージ語",oss:"オセット語",ota:"オスマン・トルコ語 (1500 年から 1928 年)",oto:"オトミ語族",paa:"パプア諸語",pag:"パンガシナーン語",pal:"パフラヴィー語",pam:"パンパンガ語; カパンパンガ語",pan:"パンジャーブ語",pap:"パピアメント",pau:"パラオ語",peo:"古代ペルシア語 (紀元前 600 年頃から 400 年頃)",per:"ペルシア語",phi:"フィリピン諸語",phn:"フェニキア語",pli:"パーリ語",pol:"ポーランド語",pon:"ポナペ語",por:"ポルトガル語",pra:"プラークリット諸語",pro:"古期プロヴァンス語 (1500 年まで)",pus:"パシュトー語","qaa-qtz":"その地域で使用するために予約済み",que:"ケチュア語",raj:"ラージャスターニー語",rap:"ラパヌーイ語",rar:"ラロトンガ語; クック諸島マオリ語",roa:"ロマンス諸語",roh:"レト・ロマン語",rom:"ロマ語",rum:"ルーマニア語; モルダビア語; モルドバ語",run:"ルンディ語",rup:"アルーマニア語; マケド・ルーマニア語",rus:"ロシア語",sad:"サンダウェ語",sag:"サンゴ語",sah:"ヤクート語",sai:"南米インディアン諸語",sal:"サリシュ語族",sam:"サマリーア語",san:"サンスクリット",sas:"ササク語",sat:"サンターリー語",scn:"シチリア語",sco:"スコットランド語",sel:"セルカップ語",sem:"セム語派",sga:"古代アイルランド語 (900 年まで)",sgn:"手話",shn:"シャン語",sid:"シダモ語",sin:"シンハラ語",sio:"スー語族",sit:"シナ・チベット諸語",sla:"スラヴ語派",slo:"スロバキア語",slv:"スロベニア語",sma:"南サーミ語",sme:"北サーミ語",smi:"サーミ語族",smj:"ルレ・サーミ語",smn:"イナリ・サーミ語",smo:"サモア語",sms:"スコルト・サーミ語",sna:"ショナ語",snd:"シンディー語",snk:"ソニンケ語",sog:"ソグド語",som:"ソマリ語",son:"ソンガイ語",sot:"南ソト語",spa:"スペイン語; カスティリャ語",srd:"サルデーニャ語",srn:"スリナム語",srp:"セルビア語",srr:"セレール語",ssa:"ナイロ・サハラ諸語",ssw:"スワジ語",suk:"スクマ語",sun:"スンダ語",sus:"スス語",sux:"シュメール語",swa:"スワヒリ語",swe:"スウェーデン語",syc:"古典シリア語",syr:"シリア語",tah:"タヒチ語",tai:"タイ諸語",tam:"タミル語",tat:"タタール語",tel:"テルグ語",tem:"テムネ語",ter:"テレーノ語",tet:"テトゥン語",tgk:"タジク語",tgl:"タガログ語",tha:"タイ語",tib:"チベット語",tig:"ティグレ語",tir:"ティグリニャ語",tiv:"ティブ語",tkl:"トケラウ諸島",tlh:"クリンゴン語",tli:"トリンギット語",tmh:"タマシェク語",tog:"トンガ語 (ニアサ)",ton:"トンガ語 (トンガ)",tpi:"トク・ピジン語",tsi:"チムシュ語",tsn:"ツワナ語",tso:"ツォンガ語",tuk:"トルクメン語",tum:"トゥンブーカ語",tup:"トゥピ語",tur:"トルコ語",tut:"アルタイ諸語",tvl:"ツバル",twi:"トウィ語",tyv:"トゥバ語",udm:"ウドムルト語",uga:"ウガリト語",uig:"ウイグル語",ukr:"ウクライナ語",umb:"アンブンドゥ語",und:"言語名不明",urd:"ウルドゥー語",uzb:"ウズベク語",vai:"ヴァイ語",ven:"ベンダー語",vie:"ベトナム語",vol:"ヴォラピュク",vot:"ヴォート語",wak:"ワカシ語族",wal:"ワッラモ語",war:"ワライ語",was:"ワショ語",wel:"ウェールズ語",wen:"ソルブ語",wln:"ワロン語",wol:"ウォロフ語",xal:"カルムイック語; オイラート語",xho:"コサ語",yao:"ヤオ語",yap:"ヤップ語",yid:"イディッシュ語",yor:"ヨルバ語",ypk:"ユピック語族",zap:"ザポテック語",zbl:"ブリスシンボル",zen:"ゼナガ語",zha:"チワン語",znd:"ザンデ語",zul:"ズールー語",zun:"ズニ語",zxx:"該当なし",zza:"ザザ語; ディミリ語; ディムリ語; Kirdki; キルマンジュキ語; ザザキ語"},MonetaryUnits:{XUA:"ADB 計算単位",AFN:"アフガニ",DZD:"アルジェリア ディナール",ARS:"アルゼンチン ペソ",AMD:"アルメニア ドラム",AWG:"アルバ ギルダー",AUD:"オーストラリア ドル",AZN:"アゼルバイジャン マナト",BSD:"バハマ ドル",BHD:"バーレーン ディナール",THB:"バーツ",PAB:"バルボア",BBD:"バルバドス ドル",BYR:"ベラルーシ ルーブル",BZD:"ベリーズ ドル",BMD:"バミューダ ドル",VEF:"ボリバル フエルテ",BOB:"ボリビアーノ",XBA:"債券市場単位 EURCO (European Composite Unit)",XBB:"債券市場単位 EMU 6 (European Monetary Unit)",XBD:"債券市場単位 EUA 17 (European Unit of Account 17)",XBC:"債券市場単位 EUA 9 (European Unit of Account 9)",BRL:"ブラジル レアル",BND:"ブルネイ ドル",BGN:"ブルガリア レフ",BIF:"ブルンジ フラン",CAD:"カナダ ドル",CVE:"カーボ ベルデ エスクード",KYD:"ケイマン諸島ドル",GHS:"セディ",XOF:"CFA BCEAO フラン",XAF:"CFA BEAC フラン",XPF:"CFP フラン",CLP:"チリ ペソ",XTS:"テスト用に予約されたコード",COP:"コロンビア ペソ",KMF:"コモロ フラン",CDF:"コンゴ フラン",BAM:"兌換マルク",NIO:"コルドバ オロ",CRC:"コスタリカ コロン",HRK:"クロアチア クナ",CUP:"キューバ ペソ",CZK:"チェコ コルナ",GMD:"ダラシ",DKK:"デンマーク クローネ",MKD:"ディナール",DJF:"ジブチ フラン",STD:"ドブラ",DOP:"ドミニカ ペソ",VND:"ドン",XCD:"東カリブ ドル",EGP:"エジプト ポンド",SVC:"エルサルバドル コロン",ETB:"エチオピア ブル",EUR:"ユーロ",FKP:"フォークランド諸島ポンド",FJD:"フィジー ドル",HUF:"フォリント",GIP:"ジブラルタル ポンド",XAU:"金",HTG:"グールド",PYG:"グアラニー語",GNF:"ギニア フラン",GYD:"ガイアナ ドル",HKD:"香港ドル",UAH:"フリヴニャ",ISK:"アイスランド クローナ",INR:"インド ルピー",IRR:"イラン リアル",IQD:"イラク ディナール",JMD:"ジャマイカ ドル",JOD:"ヨルダン ディナール",KES:"ケニア シリング",PGK:"キナ",LAK:"キープ",KWD:"クウェート ディナール",MWK:"クワチャ",AOA:"クワンザ",MMK:"チャット",GEL:"ラリ",LVL:"ラトビア ラッツ",LBP:"レバノン ポンド",ALL:"レク",HNL:"レンピラ",SLL:"レオン",RON:"レウ",LRD:"リベリア ドル",LYD:"リビア ディナール",SZL:"リランゲニ",LTL:"リトアニア リタス",LSL:"ロチ",MGA:"マダガスカル アリアリ",MYR:"マレーシア リンギット",MUR:"モーリシャス ルピー",MZN:"メティカル",MXN:"メキシコ ペソ",MXV:"メキシコ UDI (Unidad de Inversion)",MDL:"モルドバ レイ",MAD:"モロッコ ディルハム",BOV:"Mvdol",NGN:"ナイラ",ERN:"ナクファ",NAD:"ナミビア ドル",NPR:"ネパール ルピー",ANG:"オランダ領アンティル ギルダー",ILS:"イスラエル シェケル",TMT:"新マナト",TWD:"ニュー台湾ドル",NZD:"ニュージーランド ドル",BTN:"ニュルタム",KPW:"朝鮮民主主義人民共和国ウォン",NOK:"ノルウェー クローネ",PEN:"ヌエボ ソル",MRO:"ウギア",TOP:"パ アンガ",PKR:"パキスタン ルピー",XPD:"パラジウム",MOP:"パタカ",CUC:"兌換ペソ",UYU:"ウルグアイ ペソ",PHP:"フィリピン ペソ",XPT:"プラチナ",GBP:"スターリング ポンド",BWP:"プラ",QAR:"カタール リヤル",GTQ:"ケツァル",OMR:"オマーン リヤル",KHR:"リエル",MVR:"ルフィヤ",IDR:"ルピア",RUB:"ロシア ルーブル",RWF:"ルワンダ フラン",SHP:"セント ヘレナ ポンド",SAR:"サウジアラビア リヤル",XDR:"SDR (特別引出権)",RSD:"セルビア ディナール",SCR:"セーシェル ルピー",XAG:"銀",SGD:"シンガポール ドル",SBD:"ソロモン諸島ドル",KGS:"ソム",SOS:"ソマリ シリング",TJS:"ソモニ",ZAR:"南アフリカ共和国ランド",LKR:"スリランカ ルピー",XSU:"スクレ",SDG:"スーダン ポンド",SRD:"スリナム ドル",SEK:"スウェーデン クローナ",CHF:"スイス フラン",SYP:"シリア ポンド",BDT:"タカ",WST:"タラ",TZS:"タンザニア シリング",KZT:"テンゲ",XXX:"通貨が含まれないトランザクションに割り当てられたコード",TTD:"トリニダード トバゴ ドル",MNT:"トゥグリク",TND:"チュニジア ディナール",TRY:"トルコ リラ",AED:"UAE ディルハム",UGX:"ウガンダ シリング",XFU:"UIC フラン",COU:"Unidad de Valor Real",CLF:"Unidades de fomento",UYI:"ウルグアイ ペソ (URUIURUI)",USD:"アメリカ合衆国ドル",USN:"アメリカ合衆国ドル (翌日)",USS:"アメリカ合衆国ドル (同日)",UZS:"ウズベキスタン スム",VUV:"バツ",CHE:"WIR ユーロ",CHW:"WIR フラン",KRW:"ウォン",YER:"イエメン リアル",JPY:"円",CNY:"人民元",ZMK:"ザンビア クワチャ",ZWL:"シンバブエ ドル",PLN:"ズウォティ"},UCUM_Length:{"[fth_i]":"水深: ファゾム [fth_i]","[hd_i]":"馬の体高: ハンド [hd_i]",Ao:"長さ: オングストローム Ao",AU:"長さ: 天文単位 AU","[cicero]":"長さ: シセロ (ディドーのパイカ)  [cicero]","[didot]":"長さ: ディドー (ディドーのポイント)  [didot]","[fth_us]":"長さ: ファゾム [fth_us]","[fth_br]":"長さ: ファゾム [fth_br]","[ft_i]":"長さ: フィート [ft_i]","[ft_us]":"長さ: フィート [ft_us]","[ft_br]":"長さ: フィート [ft_br]","[fur_us]":"長さ: ハロン [fur_us]","[ch_br]":"長さ: ガンター氏チェーン [ch_us]","[ch_us]":"長さ: ガンター氏チェーン (測量用チェーン)  [ch_us]","[in_i]":"長さ: インチ [in_i]","[in_us]":"長さ: インチ [in_us]","[in_br]":"長さ: インチ [in_br]","[ly]":"長さ: 光年 [ly]","[ligne]":"長さ: リーニュ (フランス ライン)  [ligne]","[lne]":"長さ: ライン [lne]","[lk_us]":"長さ: ガンター氏チェーンのリンク [lk_us]","[lk_br]":"長さ: ガンター氏チェーンのリンク [lk_br]","[rlk_us]":"長さ: ラムスデン氏チェーンのリンク [rlk_us]",um:"長さ: マイクロメートル (µm) um",mm:"長さ: ミリメートル mm",cm:"長さ: センチメートル cm",m:"長さ: メートル m",km:"長さ: キロメートル km","[mil_i]":"長さ: ミル [mil_i]","[mil_us]":"長さ: ミル [mil_us]","[mi_us]":"長さ: マイル [mil_us]","[mi_br]":"長さ: マイル [mi_br]","[nmi_i]":"長さ: 海里 [nmi_i]","[nmi_br]":"長さ: 海里 [nmi_br]","[pc_br]":"長さ: ペース [pc_br]",pc:"長さ: パーセク pc","[pca]":"長さ: パイカ [pca]","[pied]":"長さ: ピエ (フランス フィート)  [pied]","[pnt]":"長さ: ポイント [pnt]","[pouce]":"長さ: プス (フランス インチ)  [pouce]","[pca_pr]":"長さ: 印刷用パイカ [pca_pr]","[pnt_pr]":"長さ: 印刷用ポイント [pnt_pr]","[rch_us]":"長さ: ラムスデン氏チェーン (測量用チェーン)  [rch_us]","[rd_us]":"長さ: ロッド [rd_us]","[rd_br]":"長さ: ロッド [rd_br]","[smoot]":"長さ: スムート [smoot]","[mi_i]":"長さ: 法定マイル [mi_i]","[yd_i]":"長さ: ヤード [yd_i]","[yd_us]":"長さ: ヤード [yd_us]","[yd_br]":"長さ: ヤード [yd_br]"},UCUM:{"[k]":"(分類なし): ボルツマン定数 [k]","[G]":"(分類なし): 万有引力定数 [G]",Gal:"加速度: ガル Gal","[g]":"加速度: 自由落下の標準加速度 [g]","[pH]":"酸性度: pH [pH]","[h]":"作用: プランク定数 [h]",b:"作用面積: バーン b","[CFU]":"増殖微生物量: コロニー形成単位 [CFU]","[FFU]":"感染性因子量: イムノフォーカス形成単位 [FFU]","[PFU]":"感染性因子量: プラーク形成単位 [PFU]",bit_s:"情報量: ビット bit_s",bit:"情報量: ビット bit",By:"情報量: バイト By",eq:"物質量: 当量 eq",mol:"物質量: モル mol",osm:"物質量 (溶存物質): 浸透圧モル osm","[arb'U]":"任意: 任意単位 [arb'U]","[iU]":"任意: 国際単位 [iU]","[USP'U]":"任意: 米国薬局方単位 [USP'U]","[knk'U]":"任意生化学活性: クンケル単位 [knk'U]","[mclg'U]":"任意生化学活性: マクラガン単位 [mclg'U]","[acr_us]":"面積: エーカー [acr_us]","[acr_br]":"面積: エーカー [acr_br]",ar:"面積: アール ar",har:"面積: ヘクタール har","[cml_i]":"面積: 円ミル [cml_i]","[sct]":"面積: セクション [sct]","[sft_i]":"面積: 平方フィート [sft_i]","[sin_i]":"面積: 平方インチ [sin_i]","[smi_us]":"面積: 平方マイル [smi_us]","[srd_us]":"面積: 平方ロッド [srd_us]","[syd_i]":"面積: 平方ヤード [syd_i]","[twp]":"面積: タウンシップ [twp]","[CCID_50]":"感染性因子調整物の生化学活性 (感染力): 50 % 細胞培養感染量 [CCID_50]","[TCID_50]":"感染性因子調整物の生化学活性 (感染力): 50 % 組織培養感染量 [TCID_50]","[todd'U]":"抗ストレプトリジンの生化学活性 O: トッド単位 [todd'U]","[dye'U]":"アミラーゼの生化学活性: dye 単位 [dye'U]","[smgy'U]":"アミラーゼの生化学活性: ソモギ単位 [smgy'U]","[APL'U]":"抗カルジオリピンの生化学活性 IgA: APL 単位 [APL'U]","[GPL'U]":"抗カルジオリピンの生化学活性 IgG: GPL 単位 [GPL'U]","[MPL'U]":"抗カルジオリピンの生化学活性 IgM: MPL 単位 [MPL'U]","[beth'U]":"第 VIII 因子インヒビタの生化学活性: ベセスダ単位 [beth'U]","[bdsk'U]":"ホスファターゼの生化学活性: ボダンスキ単位 [bdsk'U]","[ka'U]":"ホスファターゼの生化学活性: キング・アームストロング単位 [ka'U]","[tb'U]":"ツベルクリンの生化学活性: ツベルクリン単位 [tb'U]",Lmb:"輝度: ランバート Lmb",kat:"触媒活性: カタール kat",U:"触媒活性: ユニット U","[fth_i]":"水深: ファゾム [fth_i]",REM:"線量当量: レム線量 REM",Sv:"線量当量: シーベルト Sv","[bu_us]":"乾量体積: ブッシェル [bu_us]","[dpt_us]":"乾量体積: 乾量パイント [dpt_us]","[dqt_us]":"乾量体積: 乾量クォート [dqt_us]","[gal_wi]":"乾量体積: ウィンチェスター ガロン [gal_wi]","[pk_us]":"乾量体積: ペック [pk_us]",P:"動粘度: ポアズ P",F:"静電容量: ファラド F",C:"電荷: クーロン C","[e]":"電荷: 電気素量 [e]",mho:"コンダクタンス: モー mho",S:"コンダクタンス: ジーメンス S",A:"電流: アンペア A",Bi:"電流: ビオ Bi","[eps_0]":"電気誘電率: 真空誘電率 [eps_0]",V:"電位: ボルト V","B[uV]":"電位: ベル マイクロボルト B[uV]","B[mV]":"電位: ベル ミリボルト B[mV]","B[V]":"電位: ベル ボルト B[V]",Ohm:"電気抵抗: オーム Ohm","[Btu]":"エネルギー: 英熱単位 [Btu]","[Btu_39]":"エネルギー: 39°F における英熱単位 [Btu_39]","[Btu_59]":"エネルギー: 59°F における英熱単位 [Btu_59]","[Btu_60]":"エネルギー: 60°F における英熱単位 [Btu_60]",cal:"エネルギー: カロリー cal","cal_[15]":"エネルギー: 15°C におけるカロリー cal_[15]","cal_[20]":"エネルギー: 20°C におけるカロリー cal_[20]",eV:"エネルギー: 電子ボルト eV",erg:"エネルギー: エルグ erg","[Btu_IT]":"エネルギー: 国際英熱単位 [Btu_IT]",cal_IT:"エネルギー: 国際カロリー cal_IT",J:"エネルギー: ジュール J","[Btu_m]":"エネルギー: 平均英熱単位 [Btu_m]",cal_m:"エネルギー: 平均カロリー cal_m","[Cal]":"エネルギー: 栄養表示カロリー [Cal]","[Btu_th]":"エネルギー: 熱化学英熱単位 [Btu_th]",cal_th:"エネルギー: 熱化学カロリー cal_th",Gy:"エネルギー線量: グレイ Gy",RAD:"エネルギー線量: 放射線吸収線量 RAD","[PRU]":"流体抵抗: 末梢血管抵抗単位 [PRU]","[bbl_us]":"液量体積: バレル [bbl_us]","[crd_us]":"液量体積: コード [crd_us]","[fdr_us]":"液量体積: 液量ドラム [fdr_us]","[foz_us]":"液量体積: 液量オンス [foz_us]","[gil_us]":"液量体積: ジル [gil_us]","[min_us]":"液量体積: ミニム [min_us]","[pt_us]":"液量体積: パイント [pt_us]","[qt_us]":"液量体積: クォート [qt_us]","[gal_us]":"液量体積: アン女王ワイン ガロン [gal_us]",Mx:"磁束: マクスウェル Mx",dyn:"力: ダイン dyn",gf:"力: グラム重 gf",N:"力: ニュートン N","[lbf_av]":"力: ポンド重 [lbf_av]","[ppb]":"率: 十億分率 [ppb]","[ppm]":"率: 百万分率 [ppm]","[ppth]":"率: 千分率 [ppth]","[pptr]":"率: 一兆分率 [pptr]","%":"率: パーセント %",Hz:"周波数: ヘルツ Hz","[Ch]":"カテーテル ゲージ: シャリエール (フレンチ)  [Ch]","[hd_i]":"馬の体高: ハンド [hd_i]","[hp_C]":"ホメオパシー有効性: 1:100 のホメオパシー有効性 [hp_C]","[hp_X]":"ホメオパシー有効性: 1:10 のホメオパシー有効性 [hp_X]",lx:"照度: ルクス lx",ph:"照度: フォト ph",H:"インダクタンス: ヘンリー H",R:"イオン線量: レントゲン R",St:"動粘度: ストークス St",Ao:"長さ: オングストローム Ao",AU:"長さ: 天文単位 AU","[cicero]":"長さ: シセロ (ディドーのパイカ)  [cicero]","[didot]":"長さ: ディドー (ディドーのポイント)  [didot]","[fth_us]":"長さ: ファゾム [fth_us]","[fth_br]":"長さ: ファゾム [fth_br]","[ft_i]":"長さ: フィート [ft_i]","[ft_us]":"長さ: フィート [ft_us]","[ft_br]":"長さ: フィート [ft_br]","[fur_us]":"長さ: ハロン [fur_us]","[ch_br]":"長さ: ガンター氏チェーン [ch_us]","[ch_us]":"長さ: ガンター氏チェーン (測量用チェーン)  [ch_us]","[in_i]":"長さ: インチ [in_i]","[in_us]":"長さ: インチ [in_us]","[in_br]":"長さ: インチ [in_br]","[ly]":"長さ: 光年 [ly]","[ligne]":"長さ: リーニュ (フランス ライン)  [ligne]","[lne]":"長さ: ライン [lne]","[lk_us]":"長さ: ガンター氏チェーンのリンク [lk_us]","[lk_br]":"長さ: ガンター氏チェーンのリンク [lk_br]","[rlk_us]":"長さ: ラムスデン氏チェーンのリンク [rlk_us]",um:"長さ: マイクロメートル (µm) um",mm:"長さ: ミリメートル mm",cm:"長さ: センチメートル cm",m:"長さ: メートル m",km:"長さ: キロメートル km","[mil_i]":"長さ: ミル [mil_i]","[mil_us]":"長さ: ミル [mil_us]","[mi_us]":"長さ: マイル [mil_us]","[mi_br]":"長さ: マイル [mi_br]","[nmi_i]":"長さ: 海里 [nmi_i]","[nmi_br]":"長さ: 海里 [nmi_br]","[pc_br]":"長さ: ペース [pc_br]",pc:"長さ: パーセク pc","[pca]":"長さ: パイカ [pca]","[pied]":"長さ: ピエ (フランス フィート)  [pied]","[pnt]":"長さ: ポイント [pnt]","[pouce]":"長さ: プス (フランス インチ)  [pouce]","[pca_pr]":"長さ: 印刷用パイカ [pca_pr]","[pnt_pr]":"長さ: 印刷用ポイント [pnt_pr]","[rch_us]":"長さ: ラムスデン氏チェーン (測量用チェーン)  [rch_us]","[rd_us]":"長さ: ロッド [rd_us]","[rd_br]":"長さ: ロッド [rd_br]","[smoot]":"長さ: スムート [smoot]","[mi_i]":"長さ: 法定マイル [mi_i]","[yd_i]":"長さ: ヤード [yd_i]","[yd_us]":"長さ: ヤード [yd_us]","[yd_br]":"長さ: ヤード [yd_br]",B:"レベル: ベル B",Np:"レベル: ネーパー Np",Ky:"波数: カイザー Ky","[mesh_i]":"波数: メッシュ [mesh_i]",sb:"輝度密度: スチルブ sb",lm:"光束: ルーメン lm",cd:"光度: カンデラ cd",Wb:"磁束: ウェーバー Wb",Oe:"磁場強度: エルステッド Oe",G:"磁束密度: ガウス G",T:"磁束密度: テスラ T","[mu_0]":"透磁率: 真空透磁率 [mu_0]",Gb:"起磁力: ギルバート Gb","[dr_av]":"質量: ドラム [dr_av]","[dr_ap]":"質量: ドラム (ドラクマ)  [dr_ap]","[m_e]":"質量: 電子質量 [m_e]","[gr]":"質量: グレーン [gr]",ug:"質量: マイクログラム (µg) ug",mg:"質量: ミリグラム mg",g:"質量: グラム g",kg:"質量: キログラム kg","[lcwt_av]":"質量: ロング ハンドレッドウェイト (英ハンドレッドウェイト)  [lcwt_av]","[ltom_av]":"質量: ロング トン (英トン)  [lton_av]","[car_m]":"質量: カラット [car_m]","[oz_av]":"質量: オンス [oz_av]","[oz_tr]":"質量: オンス [oz_tr]","[oz_ap]":"質量: オンス [oz_ap]","[pwt_tr]":"質量: ペニウェート [pwt_tr]","[lb_av]":"質量: ポンド [lb_av]","[lb_tr]":"質量: ポンド [lb_tr]","[lb_ap]":"質量: ポンド [lb_ap]","[m_p]":"質量: 陽子質量 [m_p]","[sc_ap]":"質量: スクループル [sc_ap]","[scwt_av]":"質量: ショート ハンドレッドウェイト (米ハンドレッドウェイト)  [scwt_av]","[ston_av]":"質量: ショート トン (米トン)  [ston_av]","[stone_av]":"質量: ストーン [stone_av]",t:"質量: トン t",u:"質量: 統一原子質量単位 u","g%":"質量濃度: グラム パーセント g%","[car_Au]":"質量含有率: 金合金のカラット [car_Au]","[MET]":"物理的活動の代謝コスト: 代謝当量 [MET]","[pi]":"数値: 円周率 [pi]","10*":"数値: 10 のべき乗 10*","10^":"数値: 10 のべき乗 10^",circ:"平面角: サークル circ",deg:"平面角: 度 deg",gon:"平面角: ゴン (グレード)  gon","'":"平面角: 分 '",rad:"平面角: ラジアン rad",'"':"平面角: 秒 ''","[HP]":"パワー: 馬力 [HP]",W:"パワー: ワット W","B[kW]":"パワー レベル: ベル キロワット B[kW]","B[W]":"パワー レベル: ベル ワット B[W]",bar:"圧力: バール bar","[in_i'Hg]":"圧力: 水銀柱インチ [in_i'Hg]","[in_i'H2O]":"圧力: 水柱インチ [in_i'H2O]","m[Hg]":"圧力: 水銀柱メートル m[Hg]","m[H2O]":"圧力: 水柱メートル m[H2O]",Pa:"圧力: パスカル Pa","[psi]":"圧力: ポンド毎平方インチ [psi]",atm:"圧力: 標準大気圧 atm",att:"圧力: 工業気圧 att","B[SPL]":"音圧レベル: ベル音圧 B[SPL]",Bq:"放射能: ベクレル Bq",Ci:"放射能: キュリー Ci","[diop]":"レンズの屈折: ジオプター [diop]","[p'diop]":"プリズムの屈折: プリズム ジオプター [p'diop]","[S]":"沈降係数: スヴェードベリ単位 [S]",Bd:"信号伝送速度: ボー Bd","%[slope]":"勾配: 勾配百分率 %[slope]",sph:"立体角: spere sph",sr:"立体角: ステラジアン sr",Cel:"温度: 摂氏度 Cel","[degF]":"温度: 華氏度 [degF]",K:"温度: ケルビン K",d:"時間: 日 d",h:"時間: 時間 h",mo_g:"時間: 平均グレゴリオ月 mo_g",a_g:"時間: 平均グレゴリオ年 a_g",mo_j:"時間: 平均ユリウス月 mo_j",a_j:"時間: 平均ユリウス年 a_j",min:"時間: 分 min",mo:"時間: 月 mo",s:"時間: 秒 s",mo_s:"時間: 朔望月 mo_s",a_t:"時間: 回帰年 a_t",wk:"時間: 週 wk",a:"時間: 年 a","[kn_i]":"速度: ノット [kn_i]","[kn_br]":"速度: ノット [kn_br]","[c]":"速度: 光速 [c]","[HPF]":"顕微鏡の視野: 強拡大 [HPF]","[LPF]":"顕微鏡の視野: 弱拡大 [LPF]","[bf_i]":"体積: ボード フット [bf_i]","[bu_br]":"体積: ブッシェル [bu_br]","[cr_i]":"体積: コード [cr_i]","[cft_i]":"体積: 立方フィート [cft_i]","[cin_i]":"体積: 立方インチ [cin_i]","[cyd_i]":"体積: 立方ヤード [cyd_i]","[cup_us]":"体積: カップ [cup_us]","[drp]":"体積: 滴 [drp]","[fdr_br]":"体積: 液量ドラム [fdr_br]","[foz_br]":"体積: 液量オンス [foz_br]","[gal_br]":"体積: ガロン [gal_br]","[gil_br]":"体積: ジル [gil_br]",l:"体積: リットル l",L:"体積: リットル l","[min_br]":"体積: ミニム [min_br]","[pk_br]":"体積: ペック [pk_br]","[pt_br]":"体積: パイント [pt_br]","[qt_br]":"体積: クォート [qt_br]",st:"体積: ステール st","[tbs_us]":"体積: テーブルスプーン [tbs_us]","[tsp_us]":"体積: ティースプーン [tsp_us]","[hnsf'U]":"x 線減衰量: ハウンズフィールド単位 [hnsf'U]"},DCPList:{"001":"XML","002":"CORBA","003":"JAVA","004":"COM","005":"SQL","006":"Web サービス"},SV_ParameterDirection:{"001":"in","002":"外側","003":"入/出"},MD_DatatypeCode:{"001":"クラス","002":"コードリスト","003":"列挙","004":"コードリスト要素","005":"抽象クラス","006":"集約クラス","007":"特化クラス","008":"データタイプ クラス","009":"インターフェイス クラス","010":"共用クラス","011":"メタクラス","012":"タイプ クラス","013":"文字列","014":"整数","015":"関連"},MD_ObligationCode:{"001":"必須","002":"オプション","003":"条件 >"},GeometryTypeCode:{0:"NULL",1:"ポイント",2:"マルチポイント",3:"ポリライン",4:"ポリゴン",5:"Envelope",6:"パス",7:"任意",9:"マルチパッチ",11:"リング",13:"ライン",14:"円弧",15:"ベジェ 3 曲線",16:"楕円弧",17:"バッグ",18:"三角形ストリップ",19:"三角形ファン",20:"光線",21:"球体",22:"三角形"},RS_UseLimitations:{"001":"アクセスと使用の条件はありません","002":"アクセスと使用の条件が不明です"},RS_AccessConstraints:{"001":"パブリック アクセスの制限はありません","002":"INSPIRE 指令の第 13 条 (1) (a) によってパブリック アクセスが制限されています","003":"INSPIRE 指令の第 13 条 (1) (b) によってパブリック アクセスが制限されています","004":"INSPIRE 指令の第 13 条 (1) (c) によってパブリック アクセスが制限されています","005":"INSPIRE 指令の第 13 条 (1) (d) によってパブリック アクセスが制限されています","006":"INSPIRE 指令の第 13 条 (1) (e) によってパブリック アクセスが制限されています","007":"INSPIRE 指令の第 13 条 (1) (f) によってパブリック アクセスが制限されています","008":"INSPIRE 指令の第 13 条 (1) (g) によってパブリック アクセスが制限されています","009":"INSPIRE 指令の第 13 条 (1) (h) によってパブリック アクセスが制限されています"}});