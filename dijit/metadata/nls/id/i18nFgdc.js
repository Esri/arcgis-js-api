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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Tidak ada",notComplete:"Tidak lengkap",other:"Lainnya",present:"Saat ini",unknown:"Tidak diketahui",unpublishedMaterial:"Materi yang tidak diterbitkan"},hints:{integerGreaterThanOne:"(masukkan bilangan bulat > 1)",integer0To100:"(masukkan bilangan bulat 0...100)"},citeinfo:{caption:"Informasi Kutipan",origin:"Pencipta",pubdate:"Tanggal Publikasi",pubtime:"Waktu Publikasi",title:"Judul",edition:"Edisi",geoform:{caption:"Formulir Presentasi Data Geospasial",atlas:"Atlas",audio:"Audio",diagram:"Diagram",sDocument:"Dokumen",globe:"Bola Dunia",map:"Peta",model:"Model",multiMediaPresentation:"Presentasi Multimedia",profile:"Profil",rasterDigitalData:"Data digital raster",remoteSensingImage:"Citra pengindraan jauh",section:"Bagian",spreadsheet:"Spreadsheet",tabularDigitalData:"Data digital tabular",vectorDigitalData:"Data digital vektor",video:"Video",view:"Tampilan"},serinfo:{caption:"Informasi Rangkaian",sername:"Nama Rangkaian",issue:"Identifikasi Masalah"},pubinfo:{caption:"Informasi Publikasi",pubplace:"Tempat Publikasi",publish:"Penerbit"},othercit:"Detail Kutipan Lainnya",onlink:"Tautan Online (URL)"},cntinfo:{caption:"Informasi Kontak",section:{primary:"Utama",phoneAndEmail:"Telepon dan Email",hoursAndInstructions:"Jam dan Instruksi"},cntorgp:{caption:"Berdasarkan organisasi",cntorg:"Organisasi",cntper:"Orang"},cntperp:{caption:"Per orang",cntper:"Orang",cntorg:"Organisasi"},cntpos:"Posisi",cntaddr:{caption:"Alamat",addrtype:{caption:"Tipe Alamat",mailing:"Surat",physical:"Fisik",mailingAndPhysical:"Surat dan Fisik"},address:"Alamat",city:"Kota",state:"Negara Bagian",postal:"Kode Pos",country:"Negara"},cntvoice:"Suara",cnttdd:"Telepon TDD/TTY (gangguan pendengaran)",cntfax:"Faks",cntemail:"Alamat Email",hours:"Jam",cntinst:"Instruksi"},dataqual:{caption:"Informasi Kualitas Data",section:{attributeAccuracy:"Akurasi Atribut",logicalConsistency:"Konsistensi Logis",completeness:"Kelengkapan",positionalAccuracy:"Akurasi Posisi",lineage:"Garis Turunan",cloudCover:"Tutupan Awan"},attracc:{caption:"Akurasi Atribut",attraccr:"Laporan Akurasi Atribut",qattracc:{caption:"Penilaian Akurasi Atribut Kuantitatif",attraccv:"Nilai Akurasi Atribut",attracce:"Penjelasan Akurasi Atribut"}},logic:"Laporan Konsistensi Logis",complete:"Laporan Kelengkapan",posacc:"Akurasi Posisi",horizpa:{caption:"Akurasi Posisi Horizontal",horizpar:"Laporan Akurasi Posisi Horizontal",qhorizpa:{caption:"Penilaian Akurasi Posisi Horizontal Kuantitatif",horizpav:"Nilai Akurasi Posisi Horizontal",horizpae:"Penjelasan Akurasi Posisi Horizontal"}},vertacc:{caption:"Akurasi Posisi Vertikal",vertaccr:"Laporan Akurasi Posisi Vertikal",qvertpa:{caption:"Penilaian Akurasi Posisi Vertikal Kuantitatif",vertaccv:"Nilai Akurasi Posisi Vertikal",vertacce:"Penjelasan Akurasi Posisi Vertikal"}},lineage:{caption:"Garis Turunan"},srcinfo:{caption:"Informasi Sumber",srccite:"Kutipan Sumber",srcscale:"Bilangan Penyebut Skala",typesrc:{caption:"Tipe Media Sumber",paper:"Kertas",stableBaseMaterial:"Material dasar stabil",microfiche:"Microfiche",microfilm:"Microfilm",audiocassette:"Kaset audio",chart:"Grafik",filmstrip:"Strip Film",transparency:"Transparansi",videocassette:"Kaset video",videodisc:"Cakram video",videotape:"Pita video",physicalModel:"Model fisik",computerProgram:"Program komputer",disc:"Cakram",cartridgeTape:"Pita cartridge",magneticTape:"Pita magnet",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Papan pengumuman elektronik",electronicMailSystem:"Sistem surat elektronik"},srctime:"Periode Waktu Sumber Konten",srccurr:"Referensi Kekinian Sumber",srccitea:"Singkatan Kutipan Sumber",srccontr:"Kutipan Sumber"},procstep:{caption:"Langkah Proses",procdesc:"Deskripsi Proses",srcused:"Singkatan Kutipan yang Digunakan Sumber",procdate:"Tanggal Proses",proctime:"Waktu Proses",srcprod:"Singkatan Kutipan yang Dihasilkan Sumber",proccont:"Kontak Proses"},cloud:"Tutupan Awan"},distinfo:{caption:"Informasi Distribusi",section:{distributor:"Distributor",description:"Deskripsi",orderProcess:"Proses Pemesanan",prerequisites:"Persyaratan",availability:"Ketersediaan"},distrib:"Distributor",resdesc:{caption:"Deskripsi Sumber",liveData:"Data dan Peta Langsung",downloadableData:"Data yang Dapat Diunduh",offlineData:"Data Offline",staticMapImages:"Gambar Peta Statis",sDocument:"Dokumen Lainnya",application:"Aplikasi",geographicService:"Layanan Geografis",clearingHouse:"Clearinghouses (Tempat Pembersihan)",mapFiles:"File Peta",geographicActivies:"Layanan Geografis"},distliab:"Pernyataan Pertanggungjawaban Distribusi",custom:"Proses Pemesanan Khusus",techpreq:"Persyaratan Teknis",availabl:"Ketersediaan"},eainfo:{caption:"Informasi Entitas dan Atribut",overview:"Deskripsi Ikhtisar",eaover:"Ikhtisar Entitas dan Atribut",eadetcit:"Kutipan Entitas dan Detail Atribut"},idinfo:{caption:"Informasi Identifikasi",section:{timeAndStatus:"Waktu dan Status",constraints:"Batasan",contact:"Kontak",additional:"Tambahan"},citeinfo:"Kutipan",descript:{caption:"Deskripsi",sAbstract:"Abstrak",purpose:"Tujuan",supplinf:"Informasi Tambahan"},timeperd:{caption:"Periode Waktu Konten",current:{caption:"Referensi Kekinian",groundCondition:"Kondisi Tanah",publicationDate:"Tanggal Publikasi"}},status:{caption:"Status",progress:{caption:"Kemajuan",complete:"Selesai",inWork:"Sedang dikerjakan",planned:"Direncanakan"},update:{caption:"Frekuensi Pemeliharaan dan Pembaruan",continual:"Berkesinambungan",daily:"Harian",weekly:"Mingguan",monthly:"Bulanan",annually:"Tahunan",unknown:"Tidak diketahui",asNeeded:"Apabila Diperlukan",irregular:"Tidak reguler",nonePlanned:"Tidak ada rencana"}},spdom:{caption:"Jangkauan",bounding:{caption:"Batas Koordinat",westbc:"Garis Bujur Barat",eastbc:"Garis Bujur Timur",northbc:"Garis Lintang Utara",southbc:"Garis Lintang Selatan"}},keywords:{caption:"Kata kunci",theme:"Tema",place:"Tempat",stratum:"Stratum",temporal:"Temporal",thesaursus:"Tata Bahasa Terkait",delimited:"Kata kunci",themektIsoTopicCategory:"Topik ISO...",themektIsoTopicDialog:"Topik ISO",placektGnis:"Sistem Informasi Nama Geografis"},accconst:"Batasan Akses",useconst:"Gunakan Batasan",ptcontac:"Titik Kontak untuk Sumber Daya",browse:{caption:"Telusuri Grafis",browsen:"Telusuri URL Grafis",browsed:"Telusuri Deskripsi File Grafis",browset:"Telusuri Tipe File Grafis"},datacred:"Kredit Rangkaian Data",secinfo:{caption:"Informasi Keamanan",secsys:"Sistem Klasifikasi Keamanan",secclass:{caption:"Klasifikasi Keamanan",topSecret:"Sangat rahasia",secret:"Sangat rahasia",confidential:"Rahasia",restricted:"Terlarang",unclassified:"Tidak diklasifikasikan",sensitive:"Sensitif"},sechandl:"Deskripsi Penanganan Keamanan"},sNative:"Lingkungan Rangkaian Data Asal",crossref:"Referensi Silang"},metadata:{idinfo:"Identifikasi",dataqual:"Kualitas",spdoinfo:"Organisasi Data Spasial",spref:"Referensi Spasial",eainfo:"Entitas dan Atribut",distinfo:"Distribusi",metainfo:"Metadata"},metainfo:{caption:"Informasi Metadata",section:{dates:"Tanggal Metadata",contact:"Kontak Metadata",standard:"Standar Metadata",additional:"Tambahan"},metd:"Tanggal Metadata",metrd:"Tanggal Ulasan Metadata",metfrd:"Tanggal Ulasan Mendatang Metadata",metstdn:"Nama Standar Metadata",metstdv:"Versi Standar Metadata",metac:"Batasan Akses Metadata",metuc:"Batasan Penggunaan Metadata",metsi:{caption:"Informasi Keamanan Metadata",metscs:"Sistem Klasifikasi Keamanan Metadata",metsc:"Klasifikasi Keamanan Metadata",metshd:"Deskripsi Penanganan Keamanan Metadata"}},spref:{caption:"Informasi Referensi Spasial",horizsys:{caption:"Sistem Koordinat Horizontal",geograph:{caption:"Geografis",latres:"Resolusi Garis Lintang",longres:"Resolusi Garis Bujur",geogunit:{caption:"Unit Koordinat Geografis",decimalDegrees:"Derajat desimal",decimalMinutes:"Menit desimal",decimalSeconds:"Detik desimal",degreesAndDecimalMinutes:"Derajat dan menit desimal",degreesMinutesAndDecimalSeconds:"Derajat, menit, dan detik desimal",radians:"Radian",grads:"Grads"}},planar:{caption:"Planar"},local:{caption:"Lokal",localdes:"Deskripsi Lokal",localgeo:"Informasi Georeferensi Lokal"},geodetic:{caption:"Model Geodesi",horizdn:{caption:"Nama Datum Horizontal",nad83:"North American Datum of 1983 (Datum Amerika Utara 1983)",nad27:"North American Datum of 1927 (Datum Amerika Utara 1927)"},ellips:{caption:"Nama Ellipsoid",grs80:"Sistem Referensi Geodetik 80",clarke1866:"Clarke 1866"},semiaxis:"Sumbu Semi-utama",denflat:"Denominator of Flattening Ratio (Penyebut Rasio Perataan)"}},vertdef:{caption:"Sistem Koordinat Vertikal",altsys:{caption:"Sistem Ketinggian",altdatum:{caption:"Nama Datum Ketinggian",navd88:"North American Vertical Datum of 1988 (Datum Vertikal Amerika Utara tahun 1988)",ngvd29:"National Geodetic Vertical Datum of 1929 (Datum Vertikal Geodesi Nasional tahun 1929)"},altres:"Resolusi Ketinggian",altunits:{caption:"Unit Jarak Ketinggian",meters:"Meter",feet:"Kaki"},altenc:{caption:"Metode Pengodean Ketinggian",explicit:"Koordinat elevasi eksplisit termasuk dengan koordinat horizontal",implicit:"Koordinat implisit",attribute:"Nilai atribut"}},depthsys:{caption:"Sistem Kedalaman",depthdn:{caption:"Nama Datum Kedalaman",option1:"Permukaan lokal",option2:"Chart datum (Muka surutan); datum untuk pengurangan sounding",option3:"Gelombang astronomis terendah (Lowest astronomical tide)",option4:"Gelombang astronomis tertinggi (Highest astronomical tide)",option5:"Muka air rendah rata-rata",option6:"Muka air tinggi rata-rata",option7:"Permukaan laut rata-rata",option8:"Datum survey tanah (Land survey datum)",option9:"Muka air rendah rata-rata pasang purnama (Mean low water springs)",option10:"Muka air tinggi rata-rata pasang purnama (Mean high water springs)",option11:"Rata-rata air muka rendah selama gelombang pasang (Mean low water neap)",option12:"Rata-rata air muka tinggi selama gelombang pasang (Mean high water neap)",option13:"Mean lower low water",option14:"Mean lower low water springs",option15:"Mean higher high water",option16:"Mean higher low water",option17:"Mean lower high water",option18:"Pasang purnama",option19:"Tropic lower low water",option20:"Pasang perbani",option21:"Muka air tinggi",option22:"Higher high water",option23:"Muka air rendah",option24:"Datum muka air rendah",option25:"Muka air terendah",option26:"Lower low water",option27:"Muka air terendah pada kondisi normal (Lowest normal low water)",option28:"Tinggi gelombang pasut rata-rata (Mean tide level)",option29:"Muka air rendah musim semi Laut India",option30:"High-water full and charge",option31:"Low-water full and charge",option32:"Datum Sungai Columbia",option33:"Datum muka air rendah Gulf Coast",option34:"Muka air rendah purnama ekuatorial (Equatorial springs low water)",option35:"Approximate lowest astronomical tide (Perkiraan pasang surut astronomis terendah)",option36:"Tidak ada perbaikan"},depthres:"Resolusi Kedalaman",depthdu:{caption:"Unit Jarak Kedalaman",meters:"Meter",feet:"Kaki"},depthem:{caption:"Metode Pengodean Kedalaman",explicit:"Koordinat kedalaman eksplisit termasuk dengan koordinat horizontal",implicit:"Koordinat implisit",attribute:"Nilai atribut"}}}},timeinfo:{caption:"Informasi Periode Waktu",sngdate:"Tanggal Tunggal",mdattim:"Multi Tanggal",rngdates:"Rentang Tanggal",caldate:"Tanggal",time:"Waktu",begdate:"Tanggal Mulai",begtime:"Waktu Mulai",enddate:"Tanggal Akhir",endtime:"Waktu Akhir"}});