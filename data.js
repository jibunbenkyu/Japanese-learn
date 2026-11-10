/* ===================== 資料（取自日語導航，原樣內嵌） ===================== */
const RESOURCES = [
  {
    id: "jlpt",
    name: "JLPT日本語能力試驗",
    officialUrl: "https://www.jlpt.tw",
    category: ["日語相關檢定"],
    subcategory: ["各類日語檢定"],
    level: ["N1", "N2", "N3", "N4", "N5"],
    price: "付費",
    priceDetail: "N1~N3：1800 元／N4~N5：1650 元",
    registrationMethod: "線上",
    registrationPeriod: "3～4月、8～9月",
    target: "需要通用、廣泛被認可日語能力證明的學習者",
    strengths: ["非常通用且最廣為人知"],
    weaknesses: [
      "僅能分段考，無法像多益一樣直接得出精確分數",
      "一年僅能報考兩次",
    ],
    tags: ["JLPT", "檢定", "考試", "官方"],
  },
  {
    id: "bjt",
    name: "BJT商務日語能力考試",
    officialUrl: "https://www.kanken.or.jp/bjt/tw/",
    category: ["日語相關檢定"],
    subcategory: ["各類日語檢定"],
    level: ["J1+", "J1", "J2", "J3", "J4", "J5"],
    price: "付費",
    priceDetail: "72美元",
    registrationMethod: "線上",
    registrationPeriod: "彈性報名，最晚考試前一天皆可報名",
    target: "希望前往日本打工者，或未報名到JLPT而急需證明日文能力者",
    strengths: [
      "近年越來越多公司採用此證書",
      "全台皆有據點可報名",
      "考完直接得分數，分數對照級數",
      "報名彈性高，最晚考試前一天皆可報名",
    ],
    weaknesses: [
      "費用較JLPT高",
      "泛用性沒有JLPT高",
      "相對JLPT而言較不主流、普及度較低",
    ],
    tags: ["BJT", "檢定", "考試", "商用日語"],
  },
  {
    id: "jtest",
    name: "J.TEST實用日本語檢定",
    officialUrl: "https://www.j-test.org.tw",
    category: ["日語相關檢定"],
    subcategory: ["各類日語檢定"],
    level: ["A-C", "D-E", "F-G"],
    price: "付費",
    priceDetail:
      "A-C級：1400元／D-E級：1300元／F-G級：1200元；在學學生、團體或低收入戶可減免200元",
    registrationMethod: "線上",
    registrationPeriod: "全年多次；台灣每年約6回",
    target: "需要實用日語能力證明、求職或留學申請的學習者",
    strengths: [
      "一年舉辦多次，報考彈性較高",
      "可直接取得較細的成績資訊",
      "重視實際生活與職場日語",
      "日本部分大學及企業採認",
    ],
    weaknesses: [
      "台灣普及度與知名度不如JLPT",
      "級別制度與JLPT不同，兩者不能直接視為完全等同",
      "若申請特定日本大學，仍需確認校方是否接受J.TEST",
    ],
    tags: ["J.TEST", "檢定", "實用日語", "日本留學", "考試"],
  },
  {
    id: "jft-basic",
    name: "JFT-Basic 日本語基礎テスト",
    officialUrl: "https://www.jpf.go.jp/jft-basic/",
    category: ["日語相關檢定"],
    subcategory: ["各類日語檢定"],
    level: ["A1", "A2.1", "A2.2", "B1"],
    price: "付費",
    priceDetail: "依報考國家而異；台灣目前沒有固定的 JFT-Basic 台灣考場與報名費",
    registrationMethod: "線上 CBT 預約",
    registrationPeriod: "一年多個考試期間，依各期公告報名",
    target: "希望證明日常生活與基本溝通日語能力，尤其是以赴日工作為目的的學習者",
    strengths: [
      "採 CBT 電腦測驗，考試期間較多",
      "重視實際生活中的日語溝通能力",
      "可判定 CEFR A1～B1 等級",
      "是日本特定技能制度所使用的日語能力測驗之一",
    ],
    weaknesses: [
      "主要定位不是日本大學一般入學用的日語檢定",
      "台灣目前不是主要舉辦國家，因此台灣考生報考選擇有限",
      "如果是日本大學申請，仍需確認校方是否接受 JFT-Basic",
    ],
    tags: ["JFT-Basic", "JFT", "日本語", "檢定", "CBT", "特定技能", "CEFR"],
  },
  {
    id: "sigure",
    name: "時雨の町",
    officialUrl: "https://www.sigure.tw",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "題庫及部分特定文章需付費",
    target: "想完全自學且確定不會轉換其他學習平台的使用者",
    strengths: ["解說清楚", "網站可視性高"],
    weaknesses: [
      "體系與市面教材較不同，若之後想轉回其他平台或實體教材較困難",
    ],
    tags: ["時雨の町", "自學", "文法", "線上教材"],
  },
  {
    id: "moji-dict",
    name: "MOJi辞書",
    officialUrl: "https://www.mojidict.com",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "App 內購買，部分進階功能與會員服務需付費",
    target: "希望把日語字典、單字記憶、漢字辨識與閱讀工具整合在同一個 App 的繁體中文使用者",
    strengths: [
      "支援繁體中文",
      "中日互查方便",
      "支援手寫與圖片辨識",
      "動詞活用與例句資訊完整",
      "內建單字複習與艾賓浩斯遺忘曲線",
      "支援離線詞庫",
    ],
    weaknesses: [
      "部分進階功能需要付費",
      "使用者共建內容的品質可能不一致",
    ],
    tags: ["MOJi辞書", "字典", "背單字", "手寫輸入", "漢字", "翻譯"],
  },
  {
    id: "mazii",
    name: "Mazii 日語辭典",
    officialUrl: "https://mazii.net",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "App 內購買，Premium 與 AI Pro 等進階功能需付費",
    target: "需要繁體中文介面的日語自學者、留學生與 JLPT 考生",
    strengths: [
      "支援繁體中文",
      "字典、文法、單字與 JLPT 功能集中",
      "提供例句與發音資訊",
      "支援 AI 整句翻譯",
      "適合日常查詞與考試準備",
    ],
    weaknesses: [
      "部分進階功能需要訂閱",
      "包含廣告與使用者生成內容",
    ],
    tags: ["Mazii", "日語字典", "字典", "文法", "JLPT", "AI翻譯", "背單字"],
  },
  {
    id: "todaii",
    name: "Todaii Easy Japanese",
    officialUrl: "https://easyjapanese.net",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "App 內購買，高級版與部分 AI 功能需付費",
    target: "想透過日本新聞、影片、Podcast 與 JLPT 練習提升閱讀及聽力的繁體中文使用者",
    strengths: [
      "支援繁體中文",
      "以日本新聞作為閱讀素材",
      "文章可搭配單字與文法學習",
      "提供 N5-N1 JLPT 練習",
      "具備聽力、影片與 Podcast 素材",
      "提供 AI 日語會話功能",
    ],
    weaknesses: [
      "部分內容與進階功能需要付費",
      "新聞型內容對初學者可能有一定難度",
      "App 內含廣告",
    ],
    tags: ["Todaii", "新聞日語", "新聞", "閱讀", "聽力", "Podcast", "JLPT", "AI會話"],
  },
  {
    id: "migii-jlpt",
    name: "Migii JLPT",
    officialUrl: "https://migii.net",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "App 內購買，Premium 方案提供完整題庫與進階功能",
    target: "以 JLPT N5-N1 考試為主要目標、需要繁體中文介面的學習者",
    strengths: [
      "支援繁體中文",
      "涵蓋 N5-N1",
      "提供模擬試題與練習題",
      "可分別練習文法、漢字、閱讀與聽力",
      "能追蹤學習進度與弱項",
      "適合考前大量刷題",
    ],
    weaknesses: [
      "完整功能需要付費",
      "部分題目與解說仍需要搭配其他教材理解",
    ],
    tags: ["Migii", "JLPT", "N1", "N2", "N3", "N4", "N5", "題庫", "文法", "漢字"],
  },
  {
    id: "lingodeer",
    name: "LingoDeer",
    officialUrl: "https://www.lingodeer.com",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3"],
    price: "部分免費",
    priceDetail: "提供免費基礎內容，完整課程與離線功能需要 Premium",
    target: "希望用繁體中文循序學習日文，從五十音一路建立文法與基礎會話能力的學習者",
    strengths: [
      "支援繁體中文",
      "課程結構清楚",
      "日文文法講解完整",
      "涵蓋五十音、漢字、詞彙與文法",
      "提供母語者錄音",
      "支援離線學習與複習",
    ],
    weaknesses: [
      "完整課程需要付費",
      "較偏向結構化課程，不適合只想自由查詢資料的人",
      "進階 JLPT 內容不如專門考試工具集中",
    ],
    tags: ["LingoDeer", "五十音", "文法", "單字", "會話", "SRS", "初學者", "系統課程"],
  },
  {
    id: "bunpo",
    name: "Bunpo",
    officialUrl: "https://bunpo.app",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "提供免費內容，完整課程、智慧複習與 AI 功能依方案開放",
    target: "想使用繁體中文介面、以文法和實際輸出為核心學習日語的學生",
    strengths: [
      "支援繁體中文",
      "日文課程涵蓋 N5-N1",
      "文法與單字搭配大量練習",
      "支援 SRS 間隔重複",
      "提供語音辨識與口說練習",
      "有 AI 對話與情境練習功能",
    ],
    weaknesses: [
      "完整課程需要付費",
      "部分 AI 與進階功能需要較高階方案",
      "仍屬 App 型學習，不適合取代完整教材",
    ],
    tags: ["Bunpo", "日文文法", "文法", "單字", "JLPT", "SRS", "口說", "AI", "N5-N1"],
  },
  {
    id: "anki",
    name: "Anki",
    officialUrl: "https://apps.ankiweb.net",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "電腦版與 AnkiWeb 免費；iPhone/iPad 使用官方 AnkiMobile 為一次付費",
    target: "希望自己建立日語單字卡、教材詞彙或 JLPT 詞彙庫，並長期使用 SRS 複習的學習者",
    strengths: [
      "SRS 間隔重複系統強大",
      "可以完全自訂單字卡",
      "支援文字、圖片、音訊等多種內容",
      "跨裝置同步",
      "適合長期累積自己的日語資料庫",
    ],
    weaknesses: [
      "初次設定比一般學習 App 複雜",
      "需要自己建立或整理牌組",
      "網路上的共享牌組品質不一定一致",
    ],
    tags: ["Anki", "SRS", "單字卡", "背單字", "記憶", "間隔重複", "記憶工具"],
  },
  {
    id: "quizlet",
    name: "Quizlet",
    officialUrl: "https://quizlet.com",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "提供免費單字卡與部分學習功能，進階學習模式與功能需要訂閱",
    target: "希望快速建立日語單字卡、整理學校教材或 JLPT 詞彙的繁體中文使用者",
    strengths: [
      "建立單字卡很方便",
      "支援繁體中文介面與說明",
      "可自己建立學習資料",
      "提供多種測驗與複習模式",
      "適合學校課程與自製詞彙表",
    ],
    weaknesses: [
      "進階功能需要付費",
      "使用者建立的內容品質不一",
      "相較 Anki，長期 SRS 自訂程度較低",
    ],
    tags: ["Quizlet", "單字卡", "背單字", "測驗"],
  },
  {
    id: "hinative",
    name: "HiNative",
    officialUrl: "https://hinative.com",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "基本問答功能免費，Premium 提供書籤、更多音聲回答等進階功能",
    target: "已具備一定日語基礎，希望向日語母語者詢問自然表達、語感與文法差異的繁體中文使用者",
    strengths: [
      "支援繁體中文",
      "可以直接向母語者提問",
      "適合確認自然說法與語感",
      "可以詢問發音、文法、詞彙與例句",
      "對 N2-N1 進階表達特別有幫助",
    ],
    weaknesses: [
      "回答來自不同使用者，正確性需要自行判斷",
      "較適合輔助學習，不適合當作唯一教材",
      "部分進階功能需要付費",
    ],
    tags: ["HiNative", "母語者", "母語者交流", "語感", "口語", "文法", "問答"],
  },
  {
    id: "nihongo-no-mori",
    name: "日本語の森",
    officialUrl: "https://nihongonomori.com",
    category: ["日語學習"],
    subcategory: ["學習工具"],
    level: ["N5", "N4", "N3", "N2", "N1"],
    price: "部分免費",
    priceDetail: "提供免費學習內容，部分課程與功能需要付費",
    target: "希望透過日文授課影片學習文法、JLPT 與實際日語表達的中高階繁體中文學習者",
    strengths: [
      "大量以日語講解日語的影片",
      "涵蓋 JLPT 不同級別",
      "適合訓練日文聽力",
      "可搭配影片理解文法與詞彙",
      "對 N3-N1 學習者特別實用",
    ],
    weaknesses: [
      "主要以日文授課，初學者可能較難",
      "App 介面並非以繁體中文為主",
      "部分內容需要付費",
    ],
    tags: ["日本語の森", "JLPT", "文法", "聽力", "影片", "影片課程", "N3-N1"],
  },
  {
    id: "u-tokyo",
    name: "東京大学",
    officialUrl: "https://www.u-tokyo.ac.jp/",
    admissionYear: 2027,
    admissionType: '外国学校卒業学生特別選考（第1種：私費留学生）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.u-tokyo.ac.jp/ja/admissions/undergraduate/e01_02_04.html',
    admissionNote: '2027年度募集要項已公布；此校採「外国学校卒業学生特別選考」，不是一般私費外国人留學生選拔。既有PDF連結保留，申請前仍須回官方頁確認最新修訂。',
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "文學", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "商管", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "農學", worldRank: null, japanRank: null }, { name: "藥學", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "=31", japanRank: null },
      { subject: "商學／管理", worldRank: "72", japanRank: null },
      { subject: "法律", worldRank: "24", japanRank: null },
      { subject: "政治／國際關係", worldRank: "=37", japanRank: null },
      { subject: "資訊／計算機", worldRank: "41", japanRank: null },
      { subject: "AI／資料科學", worldRank: "=23", japanRank: null },
      { subject: "工程", worldRank: "18", japanRank: null },
      { subject: "數學", worldRank: "26", japanRank: null },
      { subject: "物理", worldRank: "8", japanRank: null },
      { subject: "生物科學", worldRank: "23", japanRank: null },
      { subject: "醫學", worldRank: "57", japanRank: null },
      { subject: "教育", worldRank: "59", japanRank: null },
      { subject: "現代語言", worldRank: "11", japanRank: null },
    ],
    level: "67.5～72.5",
    price: "付費",
    priceDetail: "國立大學。入學金約282,000日圓；2027年度起學部年授業料為642,960日圓。",
    target: ["頂尖大學志向", "希望進入東京", "研究型人才", "文理科皆可"],
    strengths: [
      "日本最具代表性的綜合型研究大學之一",
      "學術領域完整，文理科選擇非常多",
      "位於東京，企業、研究機構與國際交流資源集中",
    ],
    weaknesses: [
      "入試難度非常高",
      "東京生活費與住宿成本通常較高",
      "部分學科需要高度扎實的學科基礎",
    ],
    tags: ["東京大学", "東大", "國立大學", "東京", "頂尖大學", "綜合大學"],
    admissionPdfUrl: "https://www.u-tokyo.ac.jp/content/400291798.pdf",
  },
  {
    id: "kyoto-u",
    name: "京都大学",
    officialUrl: "https://www.kyoto-u.ac.jp/",
    admissionYear: 2027,
    admissionType: '學部／英語學位課程分別確認',
    admissionStatus: 'published',
    admissionUrl: 'https://www.kyoto-u.ac.jp/ja/admissions/undergrad/requirements',
    admissionPdfUrl: "https://www.t.kyoto-u.ac.jp/ja/admissions/international/exam2/43adcw.pdf",
    admissionNote: "此PDF僅為工學部（地球工學科、建築學科、物理工學科、電氣電子工學科、理工化學科）2027年度私費外国人留学生特別選考出願要項；正式出願2026/12/15–17。京都大學無全校通用的私費外國人留學生選拔，其他學部請查各學部公告與全校入學者選抜要項。",
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "文學", worldRank: null, japanRank: null }, { name: "教育", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "藥學", worldRank: null, japanRank: null }, { name: "農學", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "=87", japanRank: null },
      { subject: "商學／管理", worldRank: "151-200", japanRank: null },
      { subject: "法律", worldRank: "=56", japanRank: null },
      { subject: "政治／國際關係", worldRank: "=84", japanRank: null },
      { subject: "資訊／計算機", worldRank: "=95", japanRank: null },
      { subject: "AI／資料科學", worldRank: "51-100", japanRank: null },
      { subject: "工程", worldRank: "50", japanRank: null },
      { subject: "數學", worldRank: "=58", japanRank: null },
      { subject: "物理", worldRank: "26", japanRank: null },
      { subject: "生物科學", worldRank: "49", japanRank: null },
      { subject: "醫學", worldRank: "=83", japanRank: null },
      { subject: "教育", worldRank: "=98", japanRank: null },
      { subject: "現代語言", worldRank: "25", japanRank: null },
    ],
    level: "60.0～70.0",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；學部年授業料535,800日圓。",
    target: ["研究型人才", "頂尖大學志向", "文理科皆可", "重視學術自由"],
    strengths: [
      "研究型大學傳統深厚",
      "人文、社會科學與自然科學領域完整",
      "京都具有強烈的歷史文化與學術氛圍",
    ],
    weaknesses: [
      "入試難度高",
      "京都部分區域住宿資源與交通需要提前規劃",
      "部分學部對數學、理科或論述能力要求高",
    ],
    tags: ["京都大学", "京大", "國立大學", "京都", "頂尖大學", "研究型大學"],
  },
  {
    id: "osaka-u",
    name: "大阪大学",
    officialUrl: "https://www.osaka-u.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生特別入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.osaka-u.ac.jp/ja/admissions/faculty/expense/index2.html',
    admissionPdfUrl: 'https://www.osaka-u.ac.jp/ja/admissions/faculty/expense/files/2027shihi_guideline.pdf/@@download/file',
    admissionNote: '2027年度私費外国人留学生特別入試學生募集要項，官方頁標示2026年9月發行。',
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "文學", worldRank: null, japanRank: null }, { name: "人文", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "藥學", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }, { name: "基礎科學", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "=139", japanRank: null },
      { subject: "商學／管理", worldRank: "201-250", japanRank: null },
      { subject: "法律", worldRank: "251-300", japanRank: null },
      { subject: "資訊／計算機", worldRank: "=183", japanRank: null },
      { subject: "工程", worldRank: "=109", japanRank: null },
      { subject: "數學", worldRank: "151-200", japanRank: null },
      { subject: "醫學", worldRank: "141", japanRank: null },
      { subject: "教育", worldRank: "251-300", japanRank: null },
      { subject: "現代語言", worldRank: "64", japanRank: null },
    ],
    level: "55.0～70.0",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；學部年授業料535,800日圓。",
    target: ["關西地區升學", "理工科志向", "研究型人才", "醫藥相關"],
    strengths: [
      "綜合型研究大學，理工與醫學研究資源完整",
      "位於大阪，城市規模大且企業與產業資源豐富",
      "有多元的國際交流與研究環境",
    ],
    weaknesses: [
      "不同學部入試難度差異明顯",
      "部分熱門學系競爭激烈",
      "大阪都市圈的住宿成本仍需納入預算",
    ],
    tags: ["大阪大学", "阪大", "國立大學", "大阪", "關西", "理工", "醫學"],
  },
  {
    id: "hit-u",
    name: "一橋大学",
    officialUrl: "https://www.hit-u.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://juken.hit-u.ac.jp/admission/info/guidelines/',
    admissionPdfUrl: "https://juken.hit-u.ac.jp/admission/info/guidelines/files/R9ryuugaku_youkou.pdf",
    admissionNote: "令和9（2027）年度一橋大学私費外国人留学生選抜募集要項（商、經濟、法、社會四學部）。",
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "經濟", worldRank: null, japanRank: null }, { name: "商管", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "社會科學", worldRank: null, japanRank: null }, { name: "社會數據科學", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "102", japanRank: null },
      { subject: "商學／管理", worldRank: "=134", japanRank: null },
      { subject: "法律", worldRank: "251-300", japanRank: null },
      { subject: "政治／國際關係", worldRank: "301-400", japanRank: null },
      { subject: "社會學", worldRank: "201-250", japanRank: null },
      { subject: "現代語言", worldRank: "251-300", japanRank: null },
    ],
    level: "65.0～72.5",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；2026年度起學部年授業料642,960日圓。",
    target: ["經濟", "商管", "金融", "法律", "社會科學", "商學院志向"],
    strengths: [
      "以商學、經濟、法律及社會科學見長",
      "適合希望往金融、商業、政策與企業方向發展者",
      "東京地區，企業與實習資源集中",
    ],
    weaknesses: [
      "學科領域不像綜合型大學那麼廣",
      "整體入試難度高",
      "如果想主修醫學、自然科學或工程，選擇有限",
    ],
    tags: ["一橋大学", "國立大學", "東京", "經濟", "商管", "法律"],
  },
  {
    id: "isct",
    name: "東京科学大学",
    officialUrl: "https://www.isct.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生特別選抜（理工學系）',
    admissionStatus: 'published',
    admissionUrl: 'https://admissions.isct.ac.jp/ja/013/undergraduate/guideline',
    admissionPdfUrl: 'https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=r9-guidelines-shihi&key=70c4d184bd628fd72ea51dfb40ef847e.pdf&pageId=3088&prevId=&type=1',
    admissionNote: '此PDF為理工學系（舊東京工業大學）2027年度要項；醫歯學系有另一份獨立要項，不能視為全校共用。',
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "理工", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }, { name: "數學", worldRank: null, japanRank: null }, { name: "物理", worldRank: null, japanRank: null }, { name: "化學", worldRank: null, japanRank: null }, { name: "生命科學", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "牙醫", worldRank: null, japanRank: null }, { name: "建築", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "資訊／計算機", worldRank: "18", japanRank: "1" },
      { subject: "AI／資料科學", worldRank: "101-200", japanRank: "3" },
      { subject: "化學工程", worldRank: "=13", japanRank: "1" },
      { subject: "機械工程", worldRank: "15", japanRank: "1" },
      { subject: "土木工程", worldRank: "19", japanRank: "2" },
      { subject: "電機電子工程", worldRank: "=20", japanRank: "1" },
      { subject: "工程", worldRank: "=245", japanRank: null },
      { subject: "數學", worldRank: "37", japanRank: "2" },
      { subject: "物理", worldRank: "20", japanRank: "2" },
      { subject: "化學", worldRank: "27", japanRank: "2" },
      { subject: "材料科學", worldRank: "28", japanRank: "2" },
      { subject: "生物科學", worldRank: "64", japanRank: "3" },
      { subject: "醫學", worldRank: "=95", japanRank: "3" },
    ],
    level: "60.0～70.0",
    price: "付費",
    priceDetail: "國立大學。理工學系多數學院2027年度一般選拔ボーダー約65.0；實際學費依學系及年度公告為準。",
    target: ["理工科", "資訊", "AI", "工程", "醫療科技", "研究型人才"],
    strengths: [
      "以理工與科技研究為核心",
      "資訊、工程、生命科學等領域集中",
      "位於東京，科技企業與研究機構資源豐富",
    ],
    weaknesses: [
      "文學、法律、商學等傳統文科選擇較少",
      "理工領域課程通常數學與科學要求高",
      "部分研究型路線較適合明確想走 STEM 的學生",
    ],
    tags: ["東京科学大学", "國立大學", "東京", "理工", "資訊", "STEM"],
  },
  {
    id: "nagoya-u",
    name: "名古屋大学",
    officialUrl: "https://www.nagoya-u.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.nagoya-u.ac.jp/admissions/exam/us-exam/cat2/index.html',
    admissionPdfUrl: "https://www.nagoya-u.ac.jp/admissions/exam/upload/2027_shihi_yoko.pdf",
    admissionNote: "2027年度私費外国人留学生入試學生募集要項（2026年9月公布）；涵蓋文、教育、法、經濟、情報、理、醫、農，工學部令和9年度不招生。網路登錄2026/11/24–12/3。2028年起預計廢除以EJU為主的入試管道，實際變動請以官網為準。",
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "教育学部", worldRank: null, japanRank: null }, { name: "情報学部", worldRank: null, japanRank: null }, { name: "理学部", worldRank: null, japanRank: null }, { name: "経済学部", worldRank: null, japanRank: null }, { name: "文学部", worldRank: null, japanRank: null }, { name: "法学部", worldRank: null, japanRank: null }, { name: "医学部医学科", worldRank: null, japanRank: null }, { name: "医学部保健学科", worldRank: null, japanRank: null }, { name: "農学部", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "物理", worldRank: "60", japanRank: "6" },
      { subject: "化學", worldRank: "=109", japanRank: "6" },
      { subject: "自然科學", worldRank: "=99", japanRank: "5" },
      { subject: "經典學／古代史", worldRank: "51-150", japanRank: "7" },
      { subject: "解剖與生理", worldRank: "101-200", japanRank: "3" },
      { subject: "發展研究", worldRank: "101-150", japanRank: "3" },
      { subject: "資訊／計算機", worldRank: "301-350", japanRank: null },
      { subject: "工程", worldRank: null, japanRank: null },
      { subject: "數學", worldRank: null, japanRank: null },
      { subject: "醫學", worldRank: null, japanRank: null },
      { subject: "教育", worldRank: "401-450", japanRank: null },
    ],
    level: "50.0～67.5",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；學部年授業料535,800日圓。",
    target: ["中部地區升學", "理工科", "研究型人才", "經濟商管"],
    strengths: [
      "中部地區代表性研究型大學",
      "理工、自然科學與醫學研究強",
      "名古屋生活成本相較東京通常較容易控制",
    ],
    weaknesses: [
      "學部之間入試難度差異較大",
      "部分學科在海外知名度不如東京、京都等校",
      "想追求超大型國際都市環境者可能較不符合期待",
    ],
    tags: ["名古屋大学", "國立大學", "名古屋", "中部", "理工", "醫學"],
    admissionNote:
      "2028年起，預計廢除以 EJU（日本留学試験）成績為主的入試管道，實際變動請以官方最新公告為準。",
  },
  {
    id: "tohoku-u",
    name: "東北大学",
    officialUrl: "https://www.tohoku.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生入試（全學部）',
    admissionStatus: 'published',
    admissionUrl: 'https://admissions.tohoku.ac.jp/ja/entrance-info/undergraduate-info/admissions_sp/',
    admissionPdfUrl: 'https://admissions.tohoku.ac.jp/ja/adcms/wp-content/uploads/2026/08/r9Shihi_Application-Guidelines.pdf',
    admissionNote: '2027年度全學部私費外国人留学生入試募集要項PDF，官方頁標示2026年9月30日更新。',
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "文學", worldRank: null, japanRank: null }, { name: "教育", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "農學", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "401-450", japanRank: null },
      { subject: "商學／管理", worldRank: "451-500", japanRank: null },
      { subject: "法律", worldRank: "301-350", japanRank: null },
      { subject: "政治／國際關係", worldRank: "251-300", japanRank: null },
      { subject: "資訊／計算機", worldRank: "201-250", japanRank: null },
      { subject: "AI／資料科學", worldRank: "101-200", japanRank: null },
      { subject: "工程", worldRank: "89", japanRank: null },
      { subject: "數學", worldRank: "151-200", japanRank: null },
      { subject: "物理", worldRank: "46", japanRank: null },
      { subject: "生物科學", worldRank: "=175", japanRank: null },
      { subject: "醫學", worldRank: "201-250", japanRank: null },
      { subject: "教育", worldRank: "351-400", japanRank: null },
      { subject: "現代語言", worldRank: "101-150", japanRank: null },
    ],
    level: "52.5～67.5",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；學部年授業料535,800日圓。",
    target: ["研究型人才", "理工", "資訊", "自然科學", "希望在東北地區留學"],
    strengths: [
      "研究型大學體系完整",
      "理工、材料、資訊與自然科學領域具特色",
      "仙台是大學城型城市，學生生活圈集中",
    ],
    weaknesses: [
      "仙台的企業與實習市場規模不如東京",
      "冬季氣候對台灣學生可能需要適應",
      "部分學部入試要求仍然很高",
    ],
    tags: ["東北大学", "國立大學", "仙台", "東北", "理工", "資訊"],
  },
  {
    id: "hokudai",
    name: "北海道大学",
    officialUrl: "https://www.hokudai.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生（學部）入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.hokudai.ac.jp/admission/faculty/intl-private/',
    admissionPdfUrl: "https://www.hokudai.ac.jp/admission/shihi_admissionR09.pdf",
    admissionNote: "令和9（2027）年度私費外国人留学生入試學生募集要項（學部，全校通用），2026年5月29日公布。",
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "文學", worldRank: null, japanRank: null }, { name: "教育", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }, { name: "農學", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "獸醫", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "551-700", japanRank: null },
      { subject: "資訊／計算機", worldRank: "551-600", japanRank: null },
      { subject: "工程", worldRank: "=169", japanRank: null },
      { subject: "化學", worldRank: "87", japanRank: null },
      { subject: "自然科學", worldRank: "=117", japanRank: null },
      { subject: "材料科學", worldRank: "151-200", japanRank: null },
      { subject: "生物科學", worldRank: "=193", japanRank: null },
      { subject: "醫學", worldRank: "201-250", japanRank: null },
      { subject: "農林／農業", worldRank: "=93", japanRank: null },
      { subject: "現代語言", worldRank: "201-250", japanRank: null },
    ],
    level: "50.0～67.5",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；學部年授業料535,800日圓。",
    target: ["綜合型大學", "自然科學", "農學", "獸醫", "環境科學", "研究型人才"],
    strengths: [
      "學科領域非常完整",
      "農學、環境、生命科學與自然科學具有特色",
      "校地與校園環境寬廣",
    ],
    weaknesses: [
      "冬季寒冷且積雪較多",
      "北海道與東京、大阪相比距離主要企業聚落較遠",
      "部分學部入試難度與競爭程度差異大",
    ],
    tags: ["北海道大学", "國立大學", "北海道", "札幌", "農學", "獸醫"],
  },
  {
    id: "kyushu-u",
    name: "九州大学",
    officialUrl: "https://www.kyushu-u.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生入試（4月入學）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.kyushu-u.ac.jp/ja/admission/faculty/selection',
    admissionPdfUrl: 'https://www.kyushu-u.ac.jp/f/67442/R9_shihi2-1.pdf',
    admissionNote: '2027年度4月入學用募集要項PDF。10月入學英語課程另有不同制度及文件。',
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "文學", worldRank: null, japanRank: null }, { name: "教育", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "商管", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "農學", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "資訊／計算機", worldRank: "301-350", japanRank: null },
      { subject: "工程", worldRank: "125", japanRank: null },
      { subject: "化學", worldRank: "=114", japanRank: null },
      { subject: "物理", worldRank: "151-200", japanRank: null },
    ],
    level: "52.5～67.5",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；學部年授業料535,800日圓。",
    target: ["九州地區升學", "研究型人才", "理工", "經濟商管", "國際化學習"],
    strengths: [
      "九州地區代表性綜合研究型大學",
      "理工、醫學與自然科學領域完整",
      "福岡具城市機能與國際交流環境",
    ],
    weaknesses: [
      "部分校區距離福岡市中心較遠",
      "不同學部入試難度差異大",
      "對希望長期留在東京求職者而言地理位置較遠",
    ],
    tags: ["九州大学", "國立大學", "福岡", "九州", "理工", "醫學"],
  },
  {
    id: "kobe-u",
    name: "神戸大学",
    officialUrl: "https://www.kobe-u.ac.jp/",
    admissionYear: 2027,
    admissionType: '學部別私費外国人特別選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.fgh.kobe-u.ac.jp/ja/node/79',
    admissionPdfUrl: "https://www.econ.kobe-u.ac.jp/wp-content/uploads/2026/08/R9-shihiryugakusei-Application-Guide.pdf",
    admissionNote: "此PDF為經濟學部2027年度私費外国人留学生特別選抜募集要項；神戶大學依學部分開公告，無全校共用版，其他學部請至各學部頁確認。",
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "文學", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "商管", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }, { name: "農學", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "國際", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "=184", japanRank: null },
      { subject: "商學／管理", worldRank: "201-250", japanRank: null },
      { subject: "法律", worldRank: "301-350", japanRank: null },
      { subject: "政治／國際關係", worldRank: "301-400", japanRank: null },
      { subject: "物理", worldRank: "351-400", japanRank: null },
      { subject: "生物科學", worldRank: "401-450", japanRank: null },
      { subject: "醫學", worldRank: "451-500", japanRank: null },
      { subject: "工程", worldRank: "501-550", japanRank: null },
      { subject: "數學", worldRank: "501-600", japanRank: null },
      { subject: "現代語言", worldRank: "251-300", japanRank: null },
    ],
    level: "52.5～67.5",
    price: "付費",
    priceDetail: "國立大學。入學金282,000日圓；學部年授業料535,800日圓。",
    target: ["經濟", "商管", "法律", "國際", "理工", "關西地區升學"],
    strengths: [
      "經濟、經營與商學相關領域具有明顯特色",
      "位於神戶，兼具都市與國際城市環境",
      "文理科選擇廣泛",
    ],
    weaknesses: [
      "學部間難度落差較大",
      "部分校區位於山坡地，通學需要適應",
      "知名度與資源分布仍較集中於關西地區",
    ],
    tags: ["神戸大学", "國立大學", "神戶", "關西", "經濟", "商管"],
  },
  {
    id: "waseda",
    name: "早稻田大学",
    officialUrl: "https://www.waseda.jp/",
    admissionYear: 2027,
    admissionType: '外国学生のための学部入学試験',
    admissionStatus: 'published',
    admissionUrl: 'https://www.waseda.jp/inst/admission/undergraduate/system/international/',
    admissionPdfUrl: 'https://www.waseda.jp/inst/admission/assets/uploads/2026/02/01_2027_gaikokugakusei_nyushiyoukou.pdf',
    admissionNote: '2027年度4月入學用；適用學部依官方要項所列，英語學位課程另有獨立申請制度。',
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "政治", worldRank: null, japanRank: null }, { name: "經濟", worldRank: null, japanRank: null }, { name: "商管", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "文學", worldRank: null, japanRank: null }, { name: "國際", worldRank: null, japanRank: null }, { name: "社會科學", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "管理", worldRank: "=109", japanRank: null },
      { subject: "資訊／計算機", worldRank: "=149", japanRank: null },
      { subject: "AI／資料科學", worldRank: "101-200", japanRank: null },
      { subject: "工程", worldRank: "=184", japanRank: null },
      { subject: "數學", worldRank: "151-200", japanRank: null },
      { subject: "物理", worldRank: "201-250", japanRank: null },
      { subject: "教育", worldRank: "251-300", japanRank: null },
      { subject: "現代語言", worldRank: "36", japanRank: "3" },
      { subject: "語言學", worldRank: "=92", japanRank: "4" },
      { subject: "人文科學", worldRank: "61", japanRank: "3" },
      { subject: "社會科學與管理", worldRank: "78", japanRank: "3" },
      { subject: "藝術史", worldRank: "26-50", japanRank: "2" },
    ],
    level: "62.5～70.0",
    price: "付費",
    priceDetail: "私立大學，學部差異較大。例如政治經濟學部2026年度初年度合計約1,291,900日圓。",
    target: ["東京留學", "經濟", "商管", "政治", "國際", "文科", "理工"],
    strengths: [
      "私立綜合型大學，學部選擇非常多",
      "政治經濟、商學、社會科學與國際領域完整",
      "東京地區企業、校友與實習資源豐富",
    ],
    weaknesses: [
      "學費通常高於國立大學",
      "熱門學部競爭激烈",
      "東京生活成本高",
    ],
    tags: ["早稻田大学", "早大", "私立大學", "東京", "政治經濟", "國際"],
  },
  {
    id: "keio",
    name: "慶應義塾大学",
    officialUrl: "https://www.keio.ac.jp/",
    admissionYear: 2027,
    admissionType: '外国人留学生対象入学試験',
    admissionStatus: 'published',
    admissionUrl: 'https://www.keio.ac.jp/ja/admissions/faculty/examinations/international-student/',
    admissionPdfUrl: 'https://www.keio.ac.jp/fixed-files/ryugaku_youkou.pdf',
    admissionNote: 'PDF為文、經濟、法、商、理工學部2027年度要項；醫學部另有獨立PDF，需依志願學部選用。',
    category: ["日本留學"],
    subcategory: ["大學"],
    fields: [{ name: "經濟", worldRank: null, japanRank: null }, { name: "商管", worldRank: null, japanRank: null }, { name: "法律", worldRank: null, japanRank: null }, { name: "文學", worldRank: null, japanRank: null }, { name: "理工", worldRank: null, japanRank: null }, { name: "資訊", worldRank: null, japanRank: null }, { name: "醫學", worldRank: null, japanRank: null }, { name: "政策", worldRank: null, japanRank: null }],
    qsRankings: [
      { subject: "經濟學", worldRank: "99", japanRank: null },
      { subject: "商學／管理", worldRank: "138", japanRank: null },
      { subject: "法律", worldRank: "101-150", japanRank: null },
      { subject: "政治／國際關係", worldRank: "101-150", japanRank: null },
      { subject: "資訊／計算機", worldRank: "194", japanRank: null },
      { subject: "AI／資料科學", worldRank: "101-200", japanRank: "3" },
      { subject: "工程", worldRank: "151-200", japanRank: null },
      { subject: "生物科學", worldRank: "251-300", japanRank: null },
      { subject: "數學", worldRank: "251-300", japanRank: null },
      { subject: "物理", worldRank: "251-300", japanRank: null },
      { subject: "醫學", worldRank: "194", japanRank: null },
      { subject: "現代語言", worldRank: "83", japanRank: null },
      { subject: "社會科學與管理", worldRank: "100", japanRank: null },
    ],
    level: "57.5～72.5",
    price: "付費",
    priceDetail: "私立大學，學部差異較大。2026年度文、經濟、法、商學部學費合計約1,500,000日圓；理工學部約2,090,000日圓。",
    target: ["經濟", "商管", "金融", "法律", "理工", "資訊", "醫學"],
    strengths: [
      "私立綜合型大學，商管與經濟相關領域完整",
      "東京地區企業與校友網絡資源豐富",
      "理工、醫學與文商領域皆有完整體系",
    ],
    weaknesses: [
      "私立大學學費負擔通常高於國立",
      "不同學部入試制度與難度差異較大",
      "東京住宿與生活成本高",
    ],
    tags: ["慶應義塾大学", "慶應", "私立大學", "東京", "經濟", "商管", "醫學"],
  },
  {
    "id": "tsukuba",
    "name": "筑波大學",
    "officialUrl": "https://www.tsukuba.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '外国学校経験者特別入試等（學群・學類別確認）',
    admissionStatus: 'published',
    admissionUrl: 'https://ac.tsukuba-u.ac.jp/apply/application-guidelines/',
    admissionPdfUrl: "https://ac.tsukuba.ac.jp/wp/wp-content/uploads/2026/06/R9_gaikoku_jan_sec.pdf",
    admissionNote: "筑波無名為「私費外国人留学生選抜」的獨立入試；此為最接近的「外国学校経験者特別入試（1月募集）」要項，第1種限教育、心理、障害科學、生物、情報科學、情報媒體創成等學類，須EJU與英語成績。申請前請確認自己是否符合資格。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "人文",
        "社會科學",
        "教育",
        "資訊",
        "理工",
        "生命科學",
        "醫學",
        "農林",
        "藝術",
        "設計",
        "體育"
    ],
    "level": "55.0～65.0",
    "price": "付費",
    "priceDetail": "2026年度國立大學學部授業料為535,800日圓，入學料282,000日圓；筑波大學已公告2027年4月1日起國際學生學費將調整，2027實際金額需再確認。",
    "target": "想就讀綜合型研究大學，並在文理、資訊、醫療、農學、藝術或體育等領域選擇的學生。",
    "strengths": [
        "學科領域非常廣，能跨領域學習。",
        "資訊、圖書資訊、運動科學、農林、生命科學等領域具有研究特色。",
        "國立大學學費相對私立大學低。"
    ],
    "weaknesses": [
        "校園位於筑波研究學園都市，東京都心通學距離較遠。",
        "不同學群的課程型態差異很大，申請前需要仔細確認各學群入試制度。"
    ],
    "tags": [
        "國立",
        "研究型大學",
        "綜合大學",
        "資訊",
        "理工",
        "醫學",
        "農學",
        "藝術",
        "體育"
    ],
    "qsRankings": [
        {
            "subject": "圖書資訊",
            "worldRank": "20",
            "japanRank": null
        },
        {
            "subject": "運動科學",
            "worldRank": "51-100",
            "japanRank": null
        },
        {
            "subject": "藝術與設計",
            "worldRank": "101-150",
            "japanRank": null
        },
        {
            "subject": "農林",
            "worldRank": "101-150",
            "japanRank": null
        },
        {
            "subject": "解剖與生理",
            "worldRank": "101-200",
            "japanRank": null
        },
        {
            "subject": "語言學",
            "worldRank": "151-200",
            "japanRank": null
        },
        {
            "subject": "地球科學",
            "worldRank": "151-200",
            "japanRank": null
        },
        {
            "subject": "地理",
            "worldRank": "201-250",
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": "201-250",
            "japanRank": null
        },
        {
            "subject": "教育",
            "worldRank": "251-300",
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": "251-300",
            "japanRank": null
        },
        {
            "subject": "材料科學",
            "worldRank": "251-300",
            "japanRank": null
        },
        {
            "subject": "化學工程",
            "worldRank": "301-350",
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": "301-350",
            "japanRank": null
        },
        {
            "subject": "環境科學",
            "worldRank": "351-400",
            "japanRank": null
        },
        {
            "subject": "醫學",
            "worldRank": "401-450",
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "經濟學",
            "worldRank": "501-550",
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": "551-600",
            "japanRank": null
        },
        {
            "subject": "法律",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "心理學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "tus",
    "name": "東京理科大學",
    "officialUrl": "https://www.tus.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '外国人留学生入学試験',
    admissionStatus: 'published',
    admissionUrl: 'https://www.tus.ac.jp/admissions/university/guideline/general/index.html',
    admissionPdfUrl: 'https://www.tus.ac.jp/admissions/uploads/2026/2027_foreign_student_v2.pdf',
    admissionNote: '已核實2027年度官方PDF直連。請依志願學部及入試制度確認適用範圍。',
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "理學",
        "資訊",
        "工程",
        "建築",
        "生命科學",
        "藥學",
        "商管"
    ],
    "level": "42.5～62.5",
    "price": "付費",
    "priceDetail": "私立大學，各學部學費與實習費不同；初年度納付金依學部而異，部分理工及藥學相關學科較高。",
    "target": "想以理工、資訊、數學、化學、生命或藥學為主，並希望在東京就讀的學生。",
    "strengths": [
        "理工與自然科學相關學科非常完整。",
        "資訊、數學、物理、化學、工程及藥學都有專門教育。",
        "東京地區企業與研究機構資源方便。"
    ],
    "weaknesses": [
        "私立學費明顯高於國立大學。",
        "理工科課程學習量通常較大。",
        "不同學部校區分布不同。"
    ],
    "tags": [
        "私立",
        "理工",
        "資訊",
        "數學",
        "物理",
        "化學",
        "藥學"
    ],
    "qsRankings": [
        {
            "subject": "物理",
            "worldRank": "351-400",
            "japanRank": null
        },
        {
            "subject": "機械／製造工程",
            "worldRank": "401-450",
            "japanRank": null
        },
        {
            "subject": "材料科學",
            "worldRank": "401-550",
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": "501-600",
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": "601-650",
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "電機電子",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "醫學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "sophia",
    "name": "上智大學",
    "officialUrl": "https://www.sophia.ac.jp/eng/",
    admissionYear: 2027,
    admissionType: '外国人入学試験',
    admissionStatus: 'published',
    admissionUrl: 'https://adm.sophia.ac.jp/jpn/gakubu_tokubetsu_ad/gaikokujin/',
    admissionPdfUrl: "https://adm.sophia.ac.jp/assets/uploads/sites/2/2026/05/2027gaikokujin_application_proc_rev.pdf",
    admissionNote: "2027年度外国人入学試驗要項（神、文、總合人間科學、法、經濟、外國語、總合全球、理工等學部）；檔名含rev，可能有修訂，請以官網最新版為準。國際教養學部等另有入試。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "文學",
        "外語",
        "語言學",
        "國際關係",
        "社會學",
        "經濟",
        "商管",
        "法律",
        "理工"
    ],
    "level": "52.5～70.0",
    "price": "付費",
    "priceDetail": "私立大學，各學部學費不同；2026年度學費依學部、課程而異。",
    "target": "適合喜歡外語、國際關係、人文社會科學，或希望在東京接受國際化教育的學生。",
    "strengths": [
        "外語、語言學、國際關係等領域具有特色。",
        "位於東京四谷，交通與都市資源便利。",
        "國際學生與海外交流環境相對完整。"
    ],
    "weaknesses": [
        "私立大學學費高於國立大學。",
        "部分熱門學部偏差值較高。",
        "校園規模相對集中，不像大型綜合國立大學有多個廣大校區。"
    ],
    "tags": [
        "私立",
        "東京",
        "外語",
        "國際關係",
        "語言學",
        "人文",
        "社會科學"
    ],
    "qsRankings": [
        {
            "subject": "語言學",
            "worldRank": "151-200",
            "japanRank": null
        },
        {
            "subject": "現代語言",
            "worldRank": "151-200",
            "japanRank": null
        },
        {
            "subject": "政治／國際關係",
            "worldRank": "251-300",
            "japanRank": null
        },
        {
            "subject": "社會學",
            "worldRank": "301-375",
            "japanRank": null
        },
        {
            "subject": "人文科學",
            "worldRank": "352",
            "japanRank": null
        },
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "法律",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "tufs",
    "name": "東京外國語大學",
    "officialUrl": "https://www.tufs.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.tufs.ac.jp/admission/exam/guideline/intl-students-1.html',
    admissionPdfUrl: 'https://www.tufs.ac.jp/documents/admission/exam/01_2027_shihiryu_yoko.pdf',
    admissionNote: '已核實2027年度官方PDF直連。請依志願學部及入試制度確認適用範圍。',
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "外語",
        "語言學",
        "文學",
        "國際關係",
        "政治",
        "社會科學"
    ],
    "level": "57.5～62.5",
    "price": "付費",
    "priceDetail": "國立大學，2026年度學部授業料535,800日圓／年，入學料282,000日圓。",
    "target": "適合想專攻外語、語言、區域研究、國際關係，並希望未來從事國際交流或跨國相關工作的學生。",
    "strengths": [
        "外語及語言相關領域特色非常鮮明。",
        "國際關係與區域研究具有明確定位。",
        "國立大學學費相對私立低。"
    ],
    "weaknesses": [
        "學科特色集中在人文、語言及國際相關領域。",
        "理工與自然科學選擇較少。"
    ],
    "tags": [
        "國立",
        "外語",
        "語言",
        "國際關係",
        "區域研究"
    ],
    "qsRankings": [
        {
            "subject": "語言學",
            "worldRank": "101-150",
            "japanRank": null
        },
        {
            "subject": "現代語言",
            "worldRank": "101-150",
            "japanRank": null
        },
        {
            "subject": "人文科學",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "政治／國際關係",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "社會學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "chiba",
    "name": "千葉大學",
    "officialUrl": "https://www.chiba-u.jp/e/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜（學部別）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.le.chiba-u.jp/exam/information.html',
    admissionPdfUrl: "https://www.le.chiba-u.jp/static/pdf/01_2027shihiboshuyoko.pdf",
    admissionNote: "此PDF為法政經學部2027年度私費外国人留学生選拔募集要項；千葉大學其他學部需另查各學部公告。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "人文",
        "法政經",
        "理學",
        "工程",
        "資訊",
        "園藝",
        "醫學",
        "藥學",
        "看護",
        "藝術",
        "設計"
    ],
    "level": "45.0～72.5",
    "price": "付費",
    "priceDetail": "國立大學；2026年度學費依國立大學標準為535,800日圓／年，入學料282,000日圓。2027年度金額仍應以最新招生資訊確認。",
    "target": "適合想在國立綜合大學中跨文理、醫學、藥學、工程與設計等領域選擇的學生。",
    "strengths": [
        "學科種類多元。",
        "醫學、藥學、工程、園藝與設計等領域都有完整教育體系。",
        "位於千葉，距東京較近。"
    ],
    "weaknesses": [
        "校區較分散。",
        "不同學部的校園與課程特色差異明顯。"
    ],
    "tags": [
        "國立",
        "綜合大學",
        "醫學",
        "藥學",
        "工程",
        "設計",
        "園藝"
    ],
    "qsRankings": [
        {
            "subject": "藝術與設計",
            "worldRank": "98",
            "japanRank": null
        },
        {
            "subject": "農林",
            "worldRank": "251-300",
            "japanRank": null
        },
        {
            "subject": "藥學",
            "worldRank": "351-400",
            "japanRank": null
        },
        {
            "subject": "醫學",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "物理",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": "501-550",
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "hiroshima",
    "name": "廣島大學",
    "officialUrl": "https://www.hiroshima-u.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '學部外國人留學生選拔（制度待確認）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.hiroshima-u.ac.jp/',
    admissionPdfUrl: "https://www.hiroshima-u.ac.jp/index.php/system/files/297556/00_R9_gairyu23_youkou.pdf",
    admissionNote: "令和9年度「光り輝き入試」總合型選抜（外国人留学生型）要項，涵蓋12個學部，須EJU與英語成績；廣島大學無名為「私費外国人留学生」的獨立選拔，此為最接近者，須先經資格審查。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "文學",
        "教育",
        "法學",
        "經濟",
        "理學",
        "工程",
        "資訊",
        "醫學",
        "牙醫",
        "藥學",
        "農學",
        "環境"
    ],
    "level": "45.0～65.0",
    "price": "付費",
    "priceDetail": "2026年度學部授業料535,800日圓／年、入學料282,000日圓。2027年度請以最新招生公告為準。",
    "target": "適合希望進入綜合型國立研究大學，並在教育、醫療、理工、人文或農學領域發展的學生。",
    "strengths": [
        "綜合型研究大學，學科選擇廣。",
        "教育、牙醫、石油工程、農林、物理、語言學等領域具有 QS 2026 表現。",
        "國立大學學費相對低。"
    ],
    "weaknesses": [
        "主要校區位於東廣島，與東京、大阪等大城市距離較遠。",
        "不同學部的學習環境與入試難度差異大。"
    ],
    "tags": [
        "國立",
        "研究型大學",
        "教育",
        "醫學",
        "牙醫",
        "理工",
        "農學"
    ],
    "qsRankings": [
        {
            "subject": "牙醫",
            "worldRank": "51-150",
            "japanRank": "=2"
        },
        {
            "subject": "石油工程",
            "worldRank": "101-150",
            "japanRank": "=3"
        },
        {
            "subject": "農林",
            "worldRank": "251-300",
            "japanRank": "=9"
        },
        {
            "subject": "教育",
            "worldRank": "251-300",
            "japanRank": "=3"
        },
        {
            "subject": "語言學",
            "worldRank": "251-300",
            "japanRank": "=10"
        },
        {
            "subject": "物理",
            "worldRank": "251-300",
            "japanRank": "=11"
        },
        {
            "subject": "社會學",
            "worldRank": "301-375",
            "japanRank": "=9"
        },
        {
            "subject": "環境科學",
            "worldRank": "401-450",
            "japanRank": "9"
        },
        {
            "subject": "數學",
            "worldRank": "401-450",
            "japanRank": "11"
        },
        {
            "subject": "醫學",
            "worldRank": "401-450",
            "japanRank": "=10"
        },
        {
            "subject": "化學",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "電機電子",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "機械工程",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": "351-400",
            "japanRank": null
        },
        {
            "subject": "經濟學",
            "worldRank": "551-700",
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "kanazawa",
    "name": "金澤大學",
    "officialUrl": "https://www.kanazawa-u.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.kanazawa-u.ac.jp/admission/boshuyoko',
    admissionPdfUrl: "https://www.kanazawa-u.ac.jp/wp/wp-content/uploads/2026/09/R9tokubetsu_boshuyoko_shihi.pdf",
    admissionNote: "令和9年度（學士課程）私費外国人留学生入試要項，涵蓋融合、人間社會、理工、醫藥保健學域；出願期間2026/11/2–11/9，請務必先回官方頁確認。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "人文",
        "法學",
        "經濟",
        "理學",
        "工程",
        "資訊",
        "醫學",
        "藥學",
        "生命科學"
    ],
    "level": "47.5～65.0",
    "price": "付費",
    "priceDetail": "國立大學；官方公布本科入學料282,000日圓、授業料535,800日圓／年。實際入學年度若調整，以最新公告為準。",
    "target": "適合想就讀北陸地區國立綜合大學，並對醫藥、理工、人文與自然科學有興趣的學生。",
    "strengths": [
        "醫學與自然科學研究基礎完整。",
        "國立大學學費相對低。",
        "金澤具有傳統文化與地方城市生活特色。"
    ],
    "weaknesses": [
        "位於北陸地區，與東京、大阪等地交通距離較長。",
        "冬季降雪量較大，需要適應當地氣候。"
    ],
    "tags": [
        "國立",
        "北陸",
        "醫學",
        "理工",
        "生命科學"
    ],
    "qsRankings": [
        {
            "subject": "醫學",
            "worldRank": "501-550",
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": "551-600",
            "japanRank": null
        },
        {
            "subject": "物理",
            "worldRank": "601-675",
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "okayama",
    "name": "岡山大學",
    "officialUrl": "https://www.okayama-u.ac.jp/eng/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.okayama-u.ac.jp/tp/admission/kikokushihibosyuyoko.html',
    admissionPdfUrl: 'https://www.okayama-u.ac.jp/user/st/nyushika/2027/pdf/bosyuyoko/shihi2027.pdf',
    admissionNote: '已核實2027年度官方PDF直連。請依志願學部及入試制度確認適用範圍。',
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "文學",
        "法學",
        "經濟",
        "理學",
        "工程",
        "資訊",
        "醫學",
        "牙醫",
        "農學",
        "生命科學"
    ],
    "level": "50.0～65.0",
    "price": "付費",
    "priceDetail": "截至2026年6月，岡山大學學部授業料535,800日圓／年、入學料282,000日圓；學校已表示2027年度學費調整政策將於2027年1月左右公布詳細內容。",
    "target": "適合想就讀日本國立綜合型研究大學，並希望在醫學、牙醫、農學、理工或人文社會領域發展的學生。",
    "strengths": [
        "醫療、牙醫、農學與自然科學領域完整。",
        "位於岡山市，生活機能與交通相對方便。",
        "國立大學學費相對低。"
    ],
    "weaknesses": [
        "國際知名度通常不如東京、京都等最頂尖國立大學。",
        "部分學科對留學生的入試制度需要單獨確認。"
    ],
    "tags": [
        "國立",
        "醫學",
        "牙醫",
        "農學",
        "理工",
        "綜合大學"
    ],
    "qsRankings": [
        {
            "subject": "牙醫",
            "worldRank": "51-150",
            "japanRank": null
        },
        {
            "subject": "農林",
            "worldRank": "301-350",
            "japanRank": null
        },
        {
            "subject": "生命科學與醫學",
            "worldRank": "501-550",
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": "501-550",
            "japanRank": null
        },
        {
            "subject": "醫學",
            "worldRank": "551-600",
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": "601-700",
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "物理",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "kumamoto",
    "name": "熊本大學",
    "officialUrl": "https://www.kumamoto-u.ac.jp/eng/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜（待核實）',
    admissionStatus: 'unverified',
    admissionUrl: 'https://www.kumamoto-u.ac.jp/eng',
    admissionNote: "2027年度総合型選抜Ⅰ（私費外国人留学生入試）學生募集要項預定2026年11月下旬公布，目前尚無PDF；請至官方募集要項頁追蹤。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "文學",
        "法學",
        "理學",
        "工程",
        "資訊",
        "醫學",
        "藥學",
        "保健"
    ],
    "level": "47.5～62.5",
    "price": "付費",
    "priceDetail": "熊本大學已正式公告自2027年度起，學部與學環授業料由535,800日圓提高至594,600日圓／年，2027年度全學年學生一併適用。",
    "target": "適合希望以國立大學學費就讀醫學、藥學、理工與人文領域，並對九州地區生活有興趣的學生。",
    "strengths": [
        "醫學與藥學等生命醫學相關領域完整。",
        "國立大學。",
        "九州地區主要研究型大學之一。"
    ],
    "weaknesses": [
        "2027年度起學費高於多數傳統國立大學標準。",
        "位於熊本，距東京、大阪等主要都市較遠。"
    ],
    "tags": [
        "國立",
        "九州",
        "醫學",
        "藥學",
        "理工"
    ],
    "qsRankings": [
        {
            "subject": "醫學",
            "worldRank": "701-850",
            "japanRank": null
        },
        {
            "subject": "藥學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "tuat",
    "name": "東京農工大學",
    "officialUrl": "https://www.tuat.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.tuat.ac.jp/admission/nyushi_gakubu/youkou/',
    admissionPdfUrl: 'https://www.tuat.ac.jp/documents/tuat/admission/nyushi_gakubu/youkou/R9_tokubetu_youkou.pdf',
    admissionNote: '已核實2027年度官方PDF直連。請依志願學部及入試制度確認適用範圍。',
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "農學",
        "生物",
        "生命科學",
        "環境",
        "工程",
        "資訊",
        "化學",
        "機械"
    ],
    "level": "52.5～70.0",
    "price": "付費",
    "priceDetail": "國立大學；學部授業料535,800日圓／年、入學料282,000日圓。",
    "target": "適合對農學、食品、生物、環境、機械、資訊與生命科學有興趣，且希望在東京圈就讀國立大學的學生。",
    "strengths": [
        "農林相關研究在 QS 2026 位居世界第41、全日本第1。",
        "農學與工學兩大領域高度集中。",
        "位於東京地區，研究與企業資源方便。"
    ],
    "weaknesses": [
        "學科方向比較集中於農工與自然科學。",
        "人文、法律、商管類選擇較少。"
    ],
    "tags": [
        "國立",
        "農學",
        "工學",
        "生命科學",
        "環境",
        "資訊"
    ],
    "qsRankings": [
        {
            "subject": "農林",
            "worldRank": "=41",
            "japanRank": "1"
        },
        {
            "subject": "生物科學",
            "worldRank": "501-550",
            "japanRank": null
        },
        {
            "subject": "環境科學",
            "worldRank": "501-550",
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "材料科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "機械工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "電機電子",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "ritsumeikan",
    "name": "立命館大學",
    "officialUrl": "https://en.ritsumei.ac.jp/",
    admissionYear: 2027,
    admissionType: '外国人留学生入学試験（前期・後期）',
    admissionStatus: 'published',
    admissionUrl: 'https://admission.ritsumei.ac.jp/admission/international/guide.html',
    admissionPdfUrl: "https://admission.ritsumei.ac.jp/assets/file/2027/admission/international/ryugakusei-youkou.pdf",
    admissionNote: "2027年度外国人留学生入學試驗要項（第1期、第2期），須EJU，部分學部須英語成績。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "文學",
        "法學",
        "政治",
        "經濟",
        "商管",
        "國際關係",
        "社會學",
        "資訊",
        "理工",
        "生命科學",
        "心理學",
        "政策",
        "體育",
        "映像"
    ],
    "level": "50.0～67.5",
    "price": "付費",
    "priceDetail": "2027年度學費依學部差異很大。例如法學部1,147,200日圓、經濟1,185,800日圓、經營1,147,200日圓、情報理工1,801,600日圓、映像學部2,120,400日圓；國際關係與生命科學等學部也有不同費用。",
    "target": "適合希望選擇關西私立大學，並在商管、經濟、國際關係、資訊、理工、人文或心理等領域就讀的學生。",
    "strengths": [
        "學科種類非常多元。",
        "經濟、政治、地理、古典、社會學、資訊等領域都有 QS 2026 上榜。",
        "京都與滋賀等地具有多個校區與國際教育資源。"
    ],
    "weaknesses": [
        "私立大學，理工與映像等學部學費較高。",
        "不同學部與校區差異很大。",
        "大學規模大，選擇多的同時也需要花時間比較課程。"
    ],
    "tags": [
        "私立",
        "關西",
        "京都",
        "經濟",
        "商管",
        "國際關係",
        "資訊",
        "理工",
        "心理"
    ],
    "qsRankings": [
        {
            "subject": "古典／古代史",
            "worldRank": "44",
            "japanRank": "3"
        },
        {
            "subject": "考古學",
            "worldRank": "201-260",
            "japanRank": "7"
        },
        {
            "subject": "政治／國際關係",
            "worldRank": "151-200",
            "japanRank": "5"
        },
        {
            "subject": "地理",
            "worldRank": "151-200",
            "japanRank": "6"
        },
        {
            "subject": "社會學",
            "worldRank": "251-300",
            "japanRank": "8"
        },
        {
            "subject": "現代語言",
            "worldRank": "251-300",
            "japanRank": "13"
        },
        {
            "subject": "經濟學",
            "worldRank": "451-500",
            "japanRank": "13"
        },
        {
            "subject": "資訊／計算機",
            "worldRank": "501-550",
            "japanRank": "12"
        },
        {
            "subject": "機械／航空／製造工程",
            "worldRank": "501-575",
            "japanRank": "15"
        },
        {
            "subject": "商學與管理",
            "worldRank": "501-550",
            "japanRank": "13"
        },
        {
            "subject": "教育",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "心理學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "法律",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "物理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "電機電子",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "藝術與人文",
            "worldRank": "333",
            "japanRank": "8"
        },
        {
            "subject": "社會科學與管理",
            "worldRank": "451-500",
            "japanRank": "13"
        }
    ]
},
  {
    "id": "doshisha",
    "name": "同志社大學",
    "officialUrl": "https://www.doshisha.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '学部外国人留学生入学試験（Ⅰ期・Ⅱ期）',
    admissionStatus: 'published',
    admissionUrl: 'https://intad.doshisha.ac.jp/intad/japanese_program/guide_entrance_exam.html',
    admissionPdfUrl: "https://intad.doshisha.ac.jp/files/ois/page/2027_youkou.pdf",
    admissionNote: "2027年度外国人留学生入試要項（第I、II期），連結取自官方頁，PDF本體未另行開啟核對。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "神學",
        "文學",
        "社會學",
        "法學",
        "經濟",
        "商學",
        "政策",
        "國際",
        "理工",
        "生命醫學",
        "心理學",
        "運動"
    ],
    "level": "55.0～62.5",
    "price": "付費",
    "priceDetail": "2027年度各學部學費不同。例如神學部第一年總額約1,196,000日圓、文學部約1,202,000～1,204,000日圓、社會學部約1,203,000日圓；理工等學部會更高。",
    "target": "適合想在京都的私立大學就讀，並對文學、社會、法律、經濟、商學、國際、理工或生命科學有興趣的學生。",
    "strengths": [
        "京都老牌私立綜合大學，學科選擇多。",
        "文學、社會、經濟、法律、商學與理工都有完整學部。",
        "京都的文化與城市環境適合希望體驗日本傳統文化的學生。"
    ],
    "weaknesses": [
        "私立學費高於國立大學。",
        "QS 2026 的細分學科上榜數量比立命館等部分大型私立少。",
        "部分熱門學部競爭較高。"
    ],
    "tags": [
        "私立",
        "京都",
        "文學",
        "法學",
        "經濟",
        "商學",
        "國際",
        "理工"
    ],
    "qsRankings": [
        {
            "subject": "英文語言與文學",
            "worldRank": "251-300",
            "japanRank": null
        },
        {
            "subject": "語言學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "心理學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "法律",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "tokyo-gakugei",
    "name": "東京學藝大學",
    "officialUrl": "https://www.u-gakugei.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '帰国生選抜・私費外国人留学生選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.u-gakugei.ac.jp/nyushi/gakubu/post-35.html',
    admissionPdfUrl: 'https://www.u-gakugei.ac.jp/nyushi/upload/2027_tgu_kikokushihi_appguide.pdf',
    admissionNote: '已核實2027年度官方PDF直連。請依志願學部及入試制度確認適用範圍。',
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "教育",
        "文學",
        "心理學",
        "社會科學",
        "語言",
        "藝術",
        "理學",
        "資訊"
    ],
    "level": "47.5～60.0",
    "price": "付費",
    "priceDetail": "國立大學。授業料535,800日圓／年、入學料282,000日圓；實際入學年度若有調整，以最新官方公告為準。",
    "target": "想以教育學、教職培養、心理、人文、語言與相關領域為主要發展方向的學生。",
    "strengths": [
        "日本代表性的教育類國立大學。",
        "教育、教師培育與人文相關領域特色鮮明。",
        "位於東京，交通與實習資源方便。"
    ],
    "weaknesses": [
        "學科特色高度集中在人文與教育領域。",
        "純理工、商管等選擇較少。"
    ],
    "tags": [
        "國立",
        "教育",
        "教師培育",
        "東京",
        "人文",
        "心理"
    ],
    "qsRankings": [
        {
            "subject": "教育",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "文學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "語言學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "現代語言",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "心理學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "社會學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "政治／國際關係",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "uec-tokyo",
    "name": "電氣通信大學",
    "officialUrl": "https://www.uec.ac.jp/eng/",
    admissionYear: 2027,
    admissionType: '學部外國人留學生選拔（待核實）',
    admissionStatus: 'unverified',
    admissionUrl: 'https://www.uec.ac.jp/eng/',
    admissionNote: "2027年度私費外国人留学生選拔募集要項預定2026年11月上旬公開，出願需取得紙本冊子；目前尚無專用PDF，請至官方頁追蹤。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "資訊",
        "人工智慧",
        "電機電子",
        "通訊",
        "工程",
        "數學",
        "物理",
        "機械"
    ],
    "level": "55.0～57.5",
    "price": "付費",
    "priceDetail": "2026年度起學士課程日間部授業料改為642,960日圓／年；入學料282,000日圓。",
    "target": "適合想專攻資訊、AI、電機、電子、通訊與理工技術的學生。",
    "strengths": [
        "日本國立大學中高度專注資訊與理工領域。",
        "AI、資訊、通訊與電子工程方向很明確。",
        "位於東京，科技與企業資源豐富。"
    ],
    "weaknesses": [
        "人文、法律、商管等領域選擇非常少。",
        "理工科課程比重高。"
    ],
    "tags": [
        "國立",
        "東京",
        "資訊",
        "AI",
        "電機",
        "電子",
        "通訊"
    ],
    "qsRankings": [
        {
            "subject": "物理",
            "worldRank": "601-675",
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "電機電子",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "通訊工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "材料科學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "ynu",
    "name": "橫濱國立大學",
    "officialUrl": "https://www.ynu.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜（待核實）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.ynu.ac.jp/english/',
    admissionPdfUrl: "https://www.ynu.ac.jp/exam/faculty/essential/pdf/senbatsu2027.pdf",
    admissionNote: "此為令和9年度入学者選抜要項（全學部），第V章為私費外国人留学生（YGEP-N1）；非單獨的留學生募集要項。理工學部渡日前入試另有 https://www.ynu.ac.jp/exam/faculty/essential/pdf/2027_rikou_n1mae.pdf。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "經濟",
        "經營",
        "都市科學",
        "工程",
        "理學",
        "教育",
        "資訊"
    ],
    "level": "55.0～67.5",
    "price": "付費",
    "priceDetail": "2026年度官方學費以學校最新公告為準；經濟、經營、都市科學與理工等學部費用需依入學年度確認。",
    "target": "適合想在東京圈就讀國立大學，並對經濟、經營、都市規劃、工程及理工有興趣的學生。",
    "strengths": [
        "經濟、經營與都市科學具有明確特色。",
        "位於橫濱，與東京企業與研究機構距離近。",
        "國立大學。"
    ],
    "weaknesses": [
        "學科數量比大型綜合國立大學少。",
        "部分熱門經濟與都市相關領域競爭較高。"
    ],
    "tags": [
        "國立",
        "橫濱",
        "經濟",
        "經營",
        "都市科學",
        "工程"
    ],
    "qsRankings": [
        {
            "subject": "物理",
            "worldRank": "551-600",
            "japanRank": null
        },
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "材料科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "saitama",
    "name": "埼玉大學",
    "officialUrl": "https://en.saitama-u.ac.jp/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜',
    admissionStatus: 'pending',
    admissionUrl: 'https://www.saitama-u.ac.jp/entrance/requirements/',
    admissionNote: "私費外国人留学生選拔要項將併入「令和9年度學生募集要項（一般・帰国生徒・私費外国人留学生選拔）」，預定2026年11月公表；目前尚無PDF，請至官方頁追蹤。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "教養",
        "經濟",
        "教育",
        "理學",
        "工學",
        "資訊"
    ],
    "level": "47.5～60.0",
    "price": "付費",
    "priceDetail": "2026年4月以後入學者授業料年額642,960日圓，入學料282,000日圓。",
    "target": "適合想在埼玉、東京圈以相對合理成本就讀國立大學，並選擇文理科系的學生。",
    "strengths": [
        "位於首都圈，與東京連結方便。",
        "教育、經濟、理工與教養領域都有選擇。",
        "國立大學。"
    ],
    "weaknesses": [
        "國際知名度通常不如東京大學、東京科學大學等。",
        "QS 2026 細分學科排名較少。"
    ],
    "tags": [
        "國立",
        "首都圈",
        "經濟",
        "教育",
        "理工",
        "資訊"
    ],
    "qsRankings": [
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "物理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "教育",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "shinshu",
    "name": "信州大學",
    "officialUrl": "https://www.shinshu-u.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜（學部別）',
    admissionStatus: 'faculty_specific',
    admissionUrl: 'https://www.shinshu-u.ac.jp/faculty/science/admission/current/admission-international.html',
    admissionNote: "令和9年度私費外国人留学生選拔的專用募集要項尚未確認公開；全校入學者選抜要項（含私費外国人留学生選拔章節）可至官方入試頁查看，請以官方公告為準。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "人文",
        "教育",
        "經濟",
        "理學",
        "工學",
        "纖維",
        "農學",
        "醫學"
    ],
    "level": "45.0～62.5",
    "price": "付費",
    "priceDetail": "國立大學；授業料535,800日圓／年，入學料282,000日圓。",
    "target": "適合希望選擇國立綜合大學，並對材料、纖維、工學、自然科學、農學或醫學有興趣的學生。",
    "strengths": [
        "材料、纖維、化學與理工研究具有特色。",
        "學科涵蓋文理與醫療。",
        "國立大學學費相對低。"
    ],
    "weaknesses": [
        "校區分布於長野縣不同地區。",
        "冬季生活環境需要適應。"
    ],
    "tags": [
        "國立",
        "長野",
        "材料",
        "纖維",
        "工程",
        "農學",
        "醫學"
    ],
    "qsRankings": [
        {
            "subject": "材料科學",
            "worldRank": "401-550",
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": "601-700",
            "japanRank": null
        },
        {
            "subject": "物理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "機械工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "醫學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "農林",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "mie",
    "name": "三重大學",
    "officialUrl": "https://www.mie-u.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '學部私費外国人留学生選抜（待核實）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.mie-u.ac.jp/en/',
    admissionPdfUrl: "https://www.mie-u.ac.jp/exam/2027_zinbun_itinenzitokubetusenbatu.pdf",
    admissionNote: "此PDF僅為人文學部2027年度特別選抜（含私費外国人留学生枠）；生物資源學部另有 https://www.mie-u.ac.jp/exam/R9tokubetusennbatu_seibutsu.pdf。教育、工、醫學部的要項尚未找到。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "人文",
        "法經",
        "教育",
        "工學",
        "資訊",
        "生物資源",
        "醫學",
        "看護"
    ],
    "level": "45.0～65.0",
    "price": "付費",
    "priceDetail": "國立大學；2026年度學部學生授業料535,800日圓／年、入學料282,000日圓。",
    "target": "適合希望就讀地方國立綜合大學，並對醫學、工學、生物資源、教育或人文社會領域有興趣的學生。",
    "strengths": [
        "醫學部特色明確。",
        "工學與生物資源學具有地方產業連結。",
        "學科領域完整。"
    ],
    "weaknesses": [
        "國際知名度較東京、大阪等頂尖大學低。",
        "地理位置不如名古屋、東京等大城市便利。"
    ],
    "tags": [
        "國立",
        "三重",
        "醫學",
        "工學",
        "生物資源",
        "教育"
    ],
    "qsRankings": [
        {
            "subject": "醫學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "農林",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "教育",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "shiga",
    "name": "滋賀大學",
    "officialUrl": "https://www.shiga-u.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生選抜（經濟學部）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.shiga-u.ac.jp/admission/examination_info/exam_eco/exam_eco_recommen_international/',
    admissionPdfUrl: "https://www.shiga-u.ac.jp/wp/wp-content/uploads/R9shihiryu.pdf",
    admissionNote: "此PDF僅適用經濟學部（令和9年度私費外国人留学生選拔，總合經濟學科10名）；資料科學部是否另有要項尚未確認。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "經濟",
        "商管",
        "資料科學",
        "教育"
    ],
    "level": "45.0～57.5",
    "price": "付費",
    "priceDetail": "2027年度入學者授業料535,800日圓／年、入學料282,000日圓。",
    "target": "特別適合想讀經濟、商業與資料科學，並希望進入國立大學的學生。",
    "strengths": [
        "日本較早設立資料科學專門學部的大學之一。",
        "經濟學部歷史悠久。",
        "國立大學學費相對低。"
    ],
    "weaknesses": [
        "學科種類比大型綜合大學少。",
        "理工與醫學領域選擇有限。"
    ],
    "tags": [
        "國立",
        "經濟",
        "商管",
        "資料科學",
        "教育"
    ],
    "qsRankings": [
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資料科學與AI",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "教育",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "nagasaki",
    "name": "長崎大學",
    "officialUrl": "https://www.nagasaki-u.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '外国人留学生選抜（多文化社會學部）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.hss.nagasaki-u.ac.jp/exam/international.html',
    admissionPdfUrl: "https://www.nagasaki-u.ac.jp/nyugaku/admission/selection/file/R09/2027_Gaikoku-Youkou.pdf",
    admissionNote: "令和9（2027）年度外国人留学生選抜學生募集要項（2026年9月版）；出願資格為海外完成12年教育者。多文化社會學部已於10月出願完畢，其他學部出願為2026/11/16–11/20，請盡快確認。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "多文化",
        "教育",
        "經濟",
        "醫學",
        "牙醫",
        "藥學",
        "工學",
        "水產",
        "環境"
    ],
    "level": "42.5～65.0",
    "price": "付費",
    "priceDetail": "國立大學；2026年度學部授業料267,900日圓／學期，即年額535,800日圓。",
    "target": "適合想在九州就讀醫學、牙醫、藥學、海洋、水產、多文化或國際相關領域的學生。",
    "strengths": [
        "醫學、牙醫、藥學與健康科學領域完整。",
        "多文化社會學部具有國際特色。",
        "長崎具有特殊的國際交流與歷史背景。"
    ],
    "weaknesses": [
        "位於九州西部，距東京、大阪較遠。",
        "不同學部的國際學生入試差異較大。"
    ],
    "tags": [
        "國立",
        "九州",
        "醫學",
        "牙醫",
        "藥學",
        "多文化",
        "水產"
    ],
    "qsRankings": [
        {
            "subject": "醫學",
            "worldRank": "451-500",
            "japanRank": null
        },
        {
            "subject": "牙醫",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "公共衛生",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "感染症",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "藥學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "化學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "環境科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "社會科學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "kagoshima",
    "name": "鹿兒島大學",
    "officialUrl": "https://www.kagoshima-u.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '私費外国人学部留学生選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.kagoshima-u.ac.jp/exam/post-200.html',
    admissionPdfUrl: "https://www.kagoshima-u.ac.jp/exam/R09-senbatu-1.pdf",
    admissionNote: "令和9年度入学者選抜要項（2026年7月發行），自p.101起為「私費外国人学部留学生選抜」；為全選抜合併要項，非單獨募集要項。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "法文",
        "教育",
        "理學",
        "工學",
        "農學",
        "水產",
        "獸醫",
        "醫學",
        "牙醫"
    ],
    "level": "40.0～62.5",
    "price": "付費",
    "priceDetail": "2026年度學部授業料535,800日圓／年、入學料282,000日圓；若在校期間調整學費，適用新額度。",
    "target": "適合希望在九州綜合型國立大學，尤其是農學、獸醫、水產、醫學與自然科學領域發展的學生。",
    "strengths": [
        "農林水產與獸醫相關特色明顯。",
        "九州南部地區的地方研究與產業連結強。",
        "醫學與自然科學領域完整。"
    ],
    "weaknesses": [
        "位於鹿兒島，離日本主要都市較遠。",
        "部分學科的國際招生資訊較分散，需要仔細確認。"
    ],
    "tags": [
        "國立",
        "九州",
        "農學",
        "獸醫",
        "水產",
        "醫學"
    ],
    "qsRankings": [
        {
            "subject": "農林／水產／獸醫",
            "worldRank": "401-475",
            "japanRank": null
        },
        {
            "subject": "醫學",
            "worldRank": "701-850",
            "japanRank": null
        },
        {
            "subject": "獸醫",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "農學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "水產",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "理學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "kwansei-gakuin",
    "name": "關西學院大學",
    "officialUrl": "https://www.kwansei.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '外国人留学生入学試験',
    admissionStatus: 'published',
    admissionUrl: 'https://ciec.kwansei.ac.jp/page/examination-department.html',
    admissionPdfUrl: "https://www.kwansei.ac.jp/assets/international-admission-guide2027.pdf",
    admissionNote: "2027年度外国人留学生入學試驗要項；Phase II 申請期間為2026/11/16–24，請以官方頁最新資訊為準。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "文學",
        "神學",
        "社會學",
        "法學",
        "經濟",
        "商學",
        "國際",
        "教育",
        "理工",
        "建築",
        "人文"
    ],
    "level": "50.0～67.5",
    "price": "付費",
    "priceDetail": "私立大學，各學部學費不同；官方部分英語課程2026入學者的授業料為1,028,000日圓／年，另有Enhancement Fee等費用。2027年度部分學費仍以學部公告為準。",
    "target": "適合希望在關西私立大學就讀，並偏好國際、商管、經濟、社會或人文領域的學生。",
    "strengths": [
        "關西地區知名私立綜合大學。",
        "英語授課與國際教育資源較豐富。",
        "商學、經濟、國際與社會科學選擇多。"
    ],
    "weaknesses": [
        "私立學費高於國立大學。",
        "QS 2026 細分學科排名沒有形成明顯優勢。"
    ],
    "tags": [
        "私立",
        "關西",
        "商學",
        "經濟",
        "國際",
        "社會",
        "文學"
    ],
    "qsRankings": [
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "政治／國際關係",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "社會學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "法律",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "現代語言",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "教育",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "aoyama-gakuin",
    "name": "青山學院大學",
    "officialUrl": "https://www.aoyama.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '外国人留学生入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.aoyama.ac.jp/admission/undergraduate/examination/exam_foreign_student.html',
    admissionPdfUrl: "https://www.aoyama.ac.jp/wp-content/uploads/2026/07/ad_2027_internationalstudent_20260709_e1Nf5.pdf",
    admissionNote: "2027年度外国人留学生入学者選抜要項，涵蓋文（法國文學、日本文學、史學、比較藝術）、教育人間科學、經濟、法、經營、國際政治經濟、綜合文化政策、理工、社會情報各學部；英美文學科另有單獨版本。",
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "文學",
        "教育",
        "心理",
        "經濟",
        "商學",
        "法學",
        "國際政治",
        "社會",
        "理工",
        "資訊"
    ],
    "level": "52.5～65.0",
    "price": "付費",
    "priceDetail": "私立大學。青山學院已公告2027年度學費制度調整：入學金由20萬降至8萬，設施設備費併入授業料，授業料年額提高3萬，並維持年度漸增制度。實際金額依學部而異。",
    "target": "適合想在東京就讀私立大學，並偏好人文社會、國際政治、商管、經濟或理工的學生。",
    "strengths": [
        "位於東京青山地區，都市資源非常豐富。",
        "人文、社會、國際與理工都有完整學部。",
        "自由度與國際化程度較高。"
    ],
    "weaknesses": [
        "私立學費高於國立。",
        "2026 QS 整體大學排名為1401+，細分學科並非其主要優勢。"
    ],
    "tags": [
        "私立",
        "東京",
        "MARCH",
        "國際",
        "經濟",
        "商學",
        "文學",
        "理工"
    ],
    "qsRankings": [
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "法律",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "政治／國際關係",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "社會學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "心理學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "現代語言",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "物理",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
  {
    "id": "meiji",
    "name": "明治大學",
    "officialUrl": "https://www.meiji.ac.jp/cip/english/",
    admissionYear: 2027,
    admissionType: '外国人留学生入学試験',
    admissionStatus: 'published',
    admissionUrl: 'https://www.meiji.ac.jp/cip/prospective/admission_exams/ug_application.html',
    admissionPdfUrl: 'https://www.meiji.ac.jp/cip/prospective/admission_exams/6t5h7p00000ivf38-att/yoko.pdf',
    admissionNote: '已核實2027年度官方PDF直連。請依志願學部及入試制度確認適用範圍。',
    "category": [
        "日本留學"
    ],
    "subcategory": [
        "大學"
    ],
    "fields": [
        "法學",
        "商學",
        "政治",
        "經濟",
        "經營",
        "文學",
        "資訊",
        "理工",
        "農學",
        "數學",
        "國際日本"
    ],
    "level": "57.5～67.5",
    "price": "付費",
    "priceDetail": "私立大學，各學部差異大。2027年度入學者已公布學費表；法、商、政治經濟、經營、資訊溝通、文學、國際日本、理工、農學、總合數理等學部費用不同。",
    "target": "適合想在東京就讀 MARCH 頂尖私立之一，並希望在法學、商學、經濟、經營、文學、資訊或農學中選擇的學生。",
    "strengths": [
        "MARCH 代表性私立大學。",
        "法學、商學、政治經濟、經營與文學等領域完整。",
        "資訊、理工、農學與數理也有完整體系。"
    ],
    "weaknesses": [
        "私立學費高於國立。",
        "熱門學部一般入試競爭較高。",
        "QS 2026 細分學科中，真正有明確排名的學科數量不多。"
    ],
    "tags": [
        "私立",
        "東京",
        "MARCH",
        "法學",
        "商學",
        "經濟",
        "經營",
        "資訊",
        "農學"
    ],
    "qsRankings": [
        {
            "subject": "古典／古代史",
            "worldRank": "51-150",
            "japanRank": null
        },
        {
            "subject": "經濟學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "商學與管理",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "法律",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "政治／國際關係",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "資訊／計算機",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "數學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "工程",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "生物科學",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "農林",
            "worldRank": null,
            "japanRank": null
        },
        {
            "subject": "心理學",
            "worldRank": null,
            "japanRank": null
        }
    ]
},
    {
        id: "koryu",
        name: "公益財團法人日本台灣交流協會",
        shortName: "交流協會",
        officialUrl: "https://www.koryu.or.jp/tw/",
        category: ["官方資源及升學管道"],
        subcategory: ["官方機構"],
        price: "免費",
        priceDetail: "網站資訊可免費瀏覽；各項申請的費用請以官網公告為準。",
        target: [
            "需要查詢台日往來官方規定與說明的人",
            "簽證與獎學金資訊",
            "赴日留學相關計畫"
        ],
        strengths: [
            "台灣與日本實質上的官方往來管道，各類規定及說明大部分都能在此找到",
            "設有東京本部、台北事務所與高雄事務所",
            "有中文版網站"
        ],
        weaknesses: [],
        tags: ["台日交流協會", "日本台灣交流協會", "官方", "簽證", "獎學金", "升學", "留學", "規定"]
    },
    {
        id: "study-in-japan",
        name: "日本留學官方網站（STUDY in JAPAN）",
        shortName: "留學官網",
        officialUrl: "https://www.studyinjapan.go.jp/tc/planning/scholarships/jasso-scholarships/",
        category: ["官方資源及升學管道"],
        subcategory: ["官方網站"],
        price: "免費",
        priceDetail: "網站資訊可免費瀏覽；各項獎學金與申請的條件、費用請以官網公告為準。",
        target: [
            "規劃赴日留學的人",
            "想查找學校與獎學金的人",
            "想了解前人留學經驗與日本生活的人"
        ],
        strengths: [
            "升學管道、前人赴日留學的經驗分享與各類生活資訊都能在此找到",
            "日本政府授權的官方網站，有繁體中文版",
            "可查找學校，以及地方政府、民間團體與學校自設的獎學金"
        ],
        weaknesses: [],
        tags: ["日本留學官方網站", "STUDY in JAPAN", "JASSO", "獎學金", "留學", "升學", "生活資訊", "經驗分享", "官方"]
    },
  {
    "id": "path-eju",
    "name": "EJU 日本留學試驗＋各校私費外國人留學生入試",
    "shortName": "EJU 入試",
    "officialUrl": "https://www.jasso.go.jp/en/ryugaku/eju/index.html",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "台灣考區報名費：1 科 NT$1,500、2～3 科 NT$2,000（2026 年資料）；另有各校檢定費、入學金與學費。",
    "extraLinks": [
      {
        "label": "台灣 EJU 報名（LTTC）",
        "url": "https://eju.tw/registration1.html"
      },
      {
        "label": "搜尋採用 EJU 的學校",
        "url": "https://www.studyinjapan.go.jp/en/search-for-schools/school_search.php"
      },
      {
        "label": "日本留學官方：考試說明",
        "url": "https://www.studyinjapan.go.jp/tc/planning/examination/"
      }
    ],
    "registrationMethod": "線上報名（LTTC 台灣 EJU 網站）；在台灣報名者只能在台灣（台北）應考",
    "registrationPeriod": "每年 2 次：6 月、11 月考試；報名約 2～3 月、7 月",
    "target": [
      "想讀日文授課學部的人",
      "可準備日語與數學、理科或綜合科目的人"
    ],
    "strengths": [
      "約 60% 以上大學（約 500 所）採用，國立大學幾乎全數採用",
      "無年齡與考試次數限制，成績兩年內有效",
      "可在台灣（台北）應考，不必先赴日",
      "成績優異者有 JASSO 獎學金預約制度",
      "部分學校可搭配「渡日前入學許可」，在台灣就完成選拔"
    ],
    "weaknesses": [
      "需準備日語，加上數學、理科或綜合科目，各校指定科目不同",
      "多數學校在 EJU 之外還有書審、面試或校內考試",
      "沒有全國統一制度，必須逐校查募集要項",
      "部分學校只接受特定場次的成績",
      "報名費與時程每年可能調整，需以官方公告為準"
    ],
    "tags": [
      "EJU",
      "日本留學試驗",
      "私費外國人留學生入試",
      "入學方式",
      "日文授課",
      "國立大學",
      "JASSO"
    ],
    "admissionNote": "報名費與時程為 2026 年資料，每年可能調整，請以 JASSO 與 LTTC 最新公告為準。"
  },
  {
    "id": "path-prearrival",
    "name": "渡日前入學許可（事前入試）",
    "shortName": "渡日前入學許可",
    "officialUrl": "https://www.jasso.go.jp/en/ryugaku/eju/about/prearrival_admission.html",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "依各校規定；若以 EJU 成績申請，另有 EJU 報名費。",
    "extraLinks": [
      {
        "label": "日本留學官方：入學途徑",
        "url": "https://www.studyinjapan.go.jp/tc/planning/examination/"
      },
      {
        "label": "搜尋學校",
        "url": "https://www.studyinjapan.go.jp/en/search-for-schools/school_search.php"
      }
    ],
    "registrationMethod": "依各校募集要項（EJU 成績、書面審查或海外面試）",
    "registrationPeriod": "依各校公告",
    "target": [
      "想在台灣完成選拔、不想為考試先赴日的人",
      "日語或英語程度已達標的人"
    ],
    "strengths": [
      "不必來日應考，時間與經濟負擔比來日應考小",
      "來日到畢業的時間比先讀日語學校短，費用也較低",
      "來日後可直接從專業課程開始學習",
      "部分學校只要求英語"
    ],
    "weaknesses": [
      "赴日前通常需要較高的日語能力（部分學校只要求英語）",
      "實施的學校很少，選校範圍有限",
      "對學校的了解僅限於赴日前取得的資訊，入學後可能與期待有落差"
    ],
    "tags": [
      "渡日前入學許可",
      "事前入試",
      "入學方式",
      "海外入試",
      "書面審查",
      "EJU"
    ]
  },
  {
    "id": "path-english",
    "name": "英語授課學位課程（SGU 等）",
    "shortName": "英語學位課程",
    "officialUrl": "https://www.studyinjapan.go.jp/tc/planning/by-style/english-program/",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "學費依學校而定；日本大學一年平均學費：國立約 53.6 萬日圓、公立約 53.6 萬日圓、私立約 114 萬日圓（2023 年度資料，不含生活費）。",
    "extraLinks": [
      {
        "label": "搜尋學校與課程",
        "url": "https://www.studyinjapan.go.jp/en/search-for-schools/school_search.php"
      }
    ],
    "registrationMethod": "依各校線上申請系統",
    "registrationPeriod": "依各校公告，多數為 4 月入學，部分課程為 9 月或 10 月入學",
    "target": [
      "日語尚未達標、想先以英語取得學位的人",
      "手上有 TOEFL／IELTS、SAT、IB 等成績的人"
    ],
    "strengths": [
      "不一定需要 EJU 與日語能力證明（依學校與課程而定）",
      "通常提交英語成績、SAT／ACT／IB 成績與書面資料，再加線上面試",
      "對日語尚不熟的學生門檻較低",
      "部分課程接受台灣學測成績（依課程而定）"
    ],
    "weaknesses": [
      "學測成績不是萬用憑證，通常還需要英語檢定、書審與面試",
      "部分課程有明確的英語門檻，例如東北大學 FGL：TOEFL iBT 79／IELTS 6.0；大阪大學 HSIUDP：TOEFL iBT 85／IELTS 6.5",
      "若要在日本長期生活或就業，仍建議學日語",
      "課程數量不如日文授課多，入學時間可能與台灣學年不同"
    ],
    "tags": [
      "英語授課",
      "英語學位課程",
      "SGU",
      "TOEFL",
      "IELTS",
      "SAT",
      "IB",
      "學測",
      "入學方式"
    ],
    "admissionNote": "英語門檻與接受的成績每年可能調整，上述門檻為 2026 年資料，申請前請查最新募集要項。"
  },
  {
    "id": "path-school-exam",
    "name": "各校自辦入試（不考 EJU）",
    "shortName": "自辦入試",
    "officialUrl": "https://www.studyinjapan.go.jp/en/search-for-schools/school_search.php",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "依各校規定，通常含檢定費。",
    "registrationMethod": "依各校募集要項",
    "registrationPeriod": "依各校公告",
    "target": [
      "日語程度已達 JLPT N2 以上的人",
      "不想準備 EJU 數學與理科的人"
    ],
    "strengths": [
      "部分私立大學與學部不要求 EJU",
      "通常提交 JLPT N2 以上或 EJU 日語成績，再加上書面資料",
      "部分學校接受海外申請與線上面試",
      "入學要求較有彈性"
    ],
    "weaknesses": [
      "書審通過後才進入校內考試（筆試、面談或兩者），準備方式與 EJU 完全不同",
      "部分學校需要親赴日本應考",
      "沒有統一制度，需逐校查要項",
      "競爭仍可能很激烈"
    ],
    "tags": [
      "自辦入試",
      "校內考試",
      "JLPT N2",
      "書審",
      "面試",
      "入學方式"
    ],
    "admissionNote": "本項整理自留學資訊網站，非官方統一制度；各校要求不同，請以募集要項為準。"
  },
  {
    "id": "path-foreign-school",
    "name": "外國學校畢業生特別選考／總合型選抜",
    "shortName": "特別選考",
    "officialUrl": "https://www.studyinjapan.go.jp/en/search-for-schools/school_search.php",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "依各校規定，通常含檢定費。",
    "extraLinks": [
      {
        "label": "東京大學：外国学校卒業学生特別選考",
        "url": "https://www.u-tokyo.ac.jp/ja/admissions/undergraduate/e01_02_04.html"
      },
      {
        "label": "筑波大學：募集要項",
        "url": "https://ac.tsukuba-u.ac.jp/apply/application-guidelines/"
      },
      {
        "label": "國際基督教大學（ICU）：學部入學",
        "url": "https://www.icu.ac.jp/en/admissions/undergraduate/"
      }
    ],
    "registrationMethod": "依各校募集要項",
    "registrationPeriod": "依各校公告，多數於 10 月至隔年 1 月",
    "target": [
      "在海外學校就讀多年的人",
      "手上有 IB 或海外學歷資格的人"
    ],
    "strengths": [
      "部分學校另設針對外國學校畢業生的選考，不一定走一般私費外國人留學生選拔",
      "評量通常多元，包含書審、面試與英語成績",
      "部分選考可不限國籍"
    ],
    "weaknesses": [
      "各校資格差異大，例如筑波第 1 種要求海外就學 8 年以上或 IB 等海外入學資格，並限定部分學類",
      "名額多半很少",
      "部分學校仍要求 EJU 與英語成績",
      "要項各校不同，需逐校確認"
    ],
    "tags": [
      "外國學校",
      "特別選考",
      "IB",
      "總合型選抜",
      "ICU",
      "筑波",
      "東京大學",
      "入學方式"
    ],
    "admissionNote": "此類選考每年條件與日程都可能調整，且多數學校另有「一般私費外國人留學生選拔」，不要混淆。"
  },
  {
    "id": "path-language-school",
    "name": "先讀日本語學校，再升學",
    "shortName": "日語學校升學",
    "officialUrl": "https://www.nihongokyouiku.mext.go.jp/top",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "學費與生活費較高；各學校費用不同。",
    "extraLinks": [
      {
        "label": "日本語教育振興協會",
        "url": "https://www.nisshinkyo.org/search/index_c2.html"
      },
      {
        "label": "全國日本語學校聯合會（JaLSA）",
        "url": "https://jalsa.tokyo"
      }
    ],
    "registrationMethod": "依各日本語學校",
    "registrationPeriod": "依各校入學期（常見 4 月、7 月、10 月、1 月）",
    "target": [
      "日語基礎尚淺、想先在日本學習並適應生活的人",
      "學歷未滿 12 年、需要預備課程的人"
    ],
    "strengths": [
      "不需要在台灣花很長時間學日語",
      "約 6 個月至 2 年可打好日語基礎",
      "學習期間可同時適應日本生活",
      "在日本蒐集入學考試資訊較方便"
    ],
    "weaknesses": [
      "從來日到畢業的時間較長，學費與生活費較高",
      "日語學校最長只能就讀 2 年，期間未考上須回國"
    ],
    "tags": [
      "日語學校",
      "日本語學校",
      "預備課程",
      "入學方式",
      "升學"
    ],
    "admissionNote": "日語學校需為官方認定的機構，申請前請在文部科學省或法務省公告名單中確認。"
  },
  {
    "id": "path-koryu-scholarship",
    "name": "交流協會日本獎學金（學部留學生）",
    "shortName": "交流協會學部獎學金",
    "officialUrl": "https://www.koryu.or.jp/tw/",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "免費",
    "priceDetail": "提供每月生活費（2024 年度為 117,000 日圓）、學費與入學金補助、來回機票；以 2025 年度簡章為例，實際金額以最新簡章為準。",
    "extraLinks": [
      {
        "label": "日本政府獎學金（文部科學省）說明",
        "url": "https://www.studyinjapan.go.jp/tc/planning/scholarships/mext-scholarships/"
      }
    ],
    "registrationMethod": "寄送報名表至交流協會台北事務所（郵戳為憑）",
    "registrationPeriod": "以 2025 年度為例：前一年 7 月報名 EJU 第 2 回、11 月在台北應考並寄出申請書、隔年 5 月面試",
    "target": [
      "台灣籍、希望就讀日本國立大學的高中畢業生",
      "願意以日語學習的人"
    ],
    "strengths": [
      "獎學金包含學費、月額生活費與來回機票",
      "期間含最初 6 個月預備教育（以 2025 年度為例，共 4 年 6 個月）",
      "以 EJU 成績初試，不需另外準備複雜的申請文件"
    ],
    "weaknesses": [
      "只限就讀國立大學，私立大學、語言學校與短大不在範圍內",
      "志願校由協會依成績、面試與名額分配，不一定是第一志願",
      "須在台灣應考 EJU，且面試以日語進行",
      "預備教育未完成的人須返回台灣，且不可同時領其他獎學金",
      "名額與資格每年調整，須注意年齡與出生日期限制"
    ],
    "tags": [
      "交流協會",
      "獎學金",
      "學部留學生",
      "文部科學省",
      "EJU",
      "國立大學",
      "入學方式",
      "日本政府獎學金"
    ],
    "admissionNote": "此項內容依 2025 年度（2024 年公告）簡章整理，資格、時程與金額每年可能調整，請務必以交流協會最新簡章為準。"
  },
  {
    "id": "path-jpue",
    "name": "JPUE 日本大學聯合學力考試",
    "shortName": "JPUE",
    "officialUrl": "https://jpue.cn/Hant/",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "考試與報名費用以官網及各地區公告為準；另有部分學校要求的留學前準備教育，費用依各校或合作機構而定。",
    "registrationMethod": "官網選擇地區後線上出願",
    "registrationPeriod": "依官網「JPUE 時間表」，各地區日程不同",
    "target": [
      "不想準備 EJU 日語與日本高中課程內容的人",
      "想以中文或英文應考、日語尚未很強的人"
    ],
    "strengths": [
      "不要求日語能力，可用英語、中文等語言應考",
      "考試範圍依當地高中課程大綱，已在台灣就讀高中的人準備方向較直接",
      "流程為參加考試、取得一次錄取，再依大學要求完成留學前準備教育後正式申請",
      "部分採用學校提供入學金或學費減免（依學校而異）"
    ],
    "weaknesses": [
      "只限採用 JPUE 的學校，成績不能與 EJU 互通，也不是所有日本大學都承認",
      "不是日本政府或 JASSO 公布的入學考試，在日本留學官方網站上我沒有找到相關說明",
      "官網未明列主辦機構與採用大學總數，需自行用官網的「尋找大學」查詢",
      "考試日程可能變動，例如官網公告 2026 年 7 月第 4 期筆試需重新實施、2027 年 4 月第 4 期入學考試已延期",
      "資格需在 2027 年 3 月 31 日前預計完成 12 年教育且滿 18 歲，並須取得不妨礙入學的在留資格"
    ],
    "tags": [
      "JPUE",
      "日本大學聯合學力考試",
      "聯合考試",
      "入學方式",
      "英語應考",
      "免日語"
    ],
    "admissionNote": "JPUE 為民間機構舉辦的考試，不屬於 JASSO 的 EJU，採用學校名單與日程請以 jpue.cn 官網為準，並同時向志願學校確認是否承認。"
  },
  {
    "id": "path-japan-hs",
    "name": "就讀日本高中後升學（共通測驗／推薦／總合型）",
    "shortName": "日本高中升學",
    "officialUrl": "https://www.dnc.ac.jp/",
    "category": [
      "官方資源及升學管道"
    ],
    "subcategory": [
      "入學方式"
    ],
    "price": "付費",
    "priceDetail": "依就讀的高中與大學而定。",
    "extraLinks": [
      {
        "label": "日本留學官方：入學考試說明",
        "url": "https://www.studyinjapan.go.jp/tc/planning/examination/"
      }
    ],
    "registrationMethod": "依各高中與各大學",
    "registrationPeriod": "依各大學入試日程",
    "target": [
      "國中畢業就想赴日讀高中的人",
      "想以日本學生同樣方式升學的人"
    ],
    "strengths": [
      "升學選擇更多，國私立大學都可考慮，不一定需要 EJU",
      "一般選抜：大學入學共通測驗加各校個別考試",
      "推薦入試：以高中成績為主，指定校推薦錄取率相對較高",
      "總合型選抜：重視個人特質與課外活動"
    ],
    "weaknesses": [
      "需先赴日就讀高中，時間與費用負擔都較長",
      "共通測驗以日本學生為主要對象，需要接近日本學生的準備",
      "總合型選抜需志望理由書、面試與小論文，準備要求高"
    ],
    "tags": [
      "日本高中",
      "共通テスト",
      "推薦入試",
      "總合型選抜",
      "AO",
      "入學方式"
    ],
    "admissionNote": "此為與台灣高中畢業生赴日不同的升學路線，須在高中階段就開始規劃。"
  }
];


/* ===== DATA_BATCH_2: 第二批大學資料（37–46），原樣內嵌，由 app.js 合併進 RESOURCES ===== */
const universities_37_46 = [

  // =========================================================
  // 37. 中央大學
  // =========================================================
  {
    id: "chuo",
    name: "中央大學",
    officialUrl: "https://www.chuo-u.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '外国人留学生入学試験（4月入學）',
    admissionStatus: 'published',
    admissionUrl: 'https://www.chuo-u.ac.jp/connect/admission/special/guide/',
    admissionPdfUrl: 'https://www.chuo-u.ac.jp/common_d/connect/admission/2027/special/12_1_6.pdf',
    admissionNote: '2027年度特別入試頁列出的4月入學外国人留学生入試要項PDF；另有商學部B方式獨立實施要領。',

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "法學",
      "經濟",
      "商學",
      "文學",
      "政治",
      "國際經營",
      "國際情報",
      "理工",
      "資訊",
      "社會科學"
    ],

    level: "偏差值 52.5～62.5",

    price: "約137.57萬～192.78萬日圓／初年度",

    priceDetail:
      "2027年度官方學費表。經濟學部初年度納付金1,375,700日圓、文學部1,360,700日圓；基幹理工、社會理工及先進理工約1,927,800日圓。實際金額依學部而異。",

    target:
      "適合對法律、經濟、商學、政治或資訊理工有興趣，希望在東京圈就讀私立大學的學生。",

    strengths: [
      "法學領域具有鮮明特色。",
      "經濟、商學、國際與理工科系完整。",
      "校友及企業就業資源豐富。"
    ],

    weaknesses: [
      "私立大學學費高於一般國立大學。",
      "不同學部校區不同，通勤規劃需要納入考量。",
      "QS 2026 細分學科排名不宜直接等同於法律或商學領域的實際教學品質。"
    ],

    tags: [
      "私立",
      "東京",
      "法學",
      "經濟",
      "商學",
      "理工",
      "資訊"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "法律": {
          qsSubject: "Law & Legal Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "商學與管理": {
          qsSubject: "Business & Management Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "會計與金融": {
          qsSubject: "Accounting & Finance",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "政治學": {
          qsSubject: "Politics & International Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "數學": {
          qsSubject: "Mathematics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "物理": {
          qsSubject: "Physics & Astronomy",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "現代語言": {
          qsSubject: "Modern Languages",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 38. 法政大學
  // =========================================================
  {
    id: "hosei",
    name: "法政大學",
    officialUrl: "https://www.hosei.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '外国人留学生入学試験',
    admissionStatus: 'published_page',
    admissionUrl: 'https://nyushi.hosei.ac.jp/news/article/20260630_02/',
    admissionNote: "法政大學外国人留学生入試的完整要項放在外部報名平台，hosei.ac.jp網域上只有2026年3月的概要PDF，因此未附PDF連結；請至官方外国人留学生入試頁確認。",

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "法學",
      "文學",
      "經濟",
      "經營",
      "社會學",
      "國際文化",
      "人間環境",
      "資訊",
      "設計工學",
      "理工",
      "生命科學",
      "全球教養"
    ],

    level: "偏差值 52.5～65.0",

    price: "約90萬～150萬日圓／年（概估）",

    priceDetail:
      "法政大學已公告2027年度學部新生學費調整。各學部授業料、實驗實習費及設施設備費不同；此處為預算概估，正式使用前請依2027年度官方學費表填入各學部實際金額。",

    target:
      "適合想在東京就讀綜合型私立大學，並對法律、商管、社會、國際文化、資訊或理工有興趣的學生。",

    strengths: [
      "學科領域多元，文理兼備。",
      "位於東京，企業實習與就業資源豐富。",
      "具備國際文化、全球教養、人間環境等跨領域選擇。"
    ],

    weaknesses: [
      "不同學部的校區與課程安排有差異。",
      "2027年度學費已調整，預算應以最新官方表為準。",
      "QS 2026 細分學科排名資料仍須逐項核對。"
    ],

    tags: [
      "私立",
      "東京",
      "法學",
      "商管",
      "國際文化",
      "資訊",
      "理工"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "法律": {
          qsSubject: "Law & Legal Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "商學與管理": {
          qsSubject: "Business & Management Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "社會學": {
          qsSubject: "Sociology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "政治學": {
          qsSubject: "Politics & International Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "心理學": {
          qsSubject: "Psychology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "現代語言": {
          qsSubject: "Modern Languages",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 39. 立教大學
  // =========================================================
  {
    id: "rikkyo",
    name: "立教大學",
    officialUrl: "https://english.rikkyo.ac.jp/",
    admissionYear: 2027,
    admissionType: '外国人留学生入試（學部別制度）',
    admissionStatus: 'unverified',
    admissionUrl: 'https://www.rikkyo.ac.jp/admissions/faq/admissions2.html',
    admissionNote: "立教大學外国人留学生入試的要項放在外部報名平台，rikkyo.ac.jp上未找到2027年度要項PDF，因此未附PDF連結；請至官方頁確認。",

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "文學",
      "經濟",
      "經營",
      "社會學",
      "法學",
      "國際",
      "觀光",
      "心理學",
      "理學",
      "環境",
      "運動健康"
    ],

    level: "偏差值 57.5～65.0",

    price: "約117萬～190萬日圓／年（依學部）",

    priceDetail:
      "立教大學已公布2027年度學費表，入學金與授業料維持2026年度水準，但部分實驗、實習費有調整。學部不同，費用差異相當明顯；初年度另有入學金及其他費用。",

    target:
      "適合偏好人文社會、國際、觀光、經營、心理或環境領域，並希望在東京就讀私立大學的學生。",

    strengths: [
      "觀光、異文化溝通、經營與人文社會領域具有特色。",
      "池袋校區交通便利，都市生活機能佳。",
      "具有國際交流與跨領域學習機會。"
    ],

    weaknesses: [
      "私立大學學費較高。",
      "不同學部的校區位置不完全相同。",
      "如果目標是高度專門化的工程或大型理工研究環境，需要另外比較其他大學。"
    ],

    tags: [
      "私立",
      "東京",
      "觀光",
      "國際",
      "經營",
      "社會學",
      "心理學",
      "環境"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "觀光與休閒管理": {
          qsSubject: "Hospitality & Leisure Management",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "商學與管理": {
          qsSubject: "Business & Management Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "社會學": {
          qsSubject: "Sociology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "心理學": {
          qsSubject: "Psychology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "現代語言": {
          qsSubject: "Modern Languages",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "教育": {
          qsSubject: "Education & Training",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "環境科學": {
          qsSubject: "Environmental Sciences",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 40. 關西大學
  // =========================================================
  {
    id: "kansai",
    name: "關西大學",
    officialUrl: "https://www.kansai-u.ac.jp/English/",
    admissionYear: 2027,
    admissionType: '外国人学部留学生入試',
    admissionStatus: 'unverified',
    admissionUrl: 'https://nyusi01.nyusi.kansai-u.ac.jp/admission/foreigner/',
    admissionPdfUrl: "https://files.microcms-assets.io/assets/76cac1d7ce9f4ad08d453f8f074f8419/dbe5556329784b19bb9c21128d18e460/2027_foreigner_yoko.pdf",
    admissionNote: "此連結取自關西大學官方入試頁的「外国人学部留学生入試 入試要項 2027」，但檔案放在 microcms-assets.io 網域，本站尚未能實際開啟核對內容，使用前請務必自行確認。",

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "法學",
      "文學",
      "經濟",
      "商學",
      "社會學",
      "政策",
      "外語",
      "心理學",
      "理工",
      "資訊",
      "環境都市工學",
      "化學生命工學"
    ],

    level: "偏差值 50.0～60.0",

    price: "約90萬～140萬日圓／年（概估）",

    priceDetail:
      "目前可查得關西大學2026年度學費表；2027年度實際學費應以新生募集要項及官方學費表為準。理工、化學生命工學等學部的實驗及設施設備相關費用較高。",

    target:
      "適合想在大阪就讀私立綜合大學，並對法學、經濟、商學、社會、外語或理工有興趣的學生。",

    strengths: [
      "位於關西，就業與都市生活資源便利。",
      "文法商、社會科學及理工科系選擇廣。",
      "學科範圍涵蓋人文到工程。"
    ],

    weaknesses: [
      "私立大學學費高於一般國立大學。",
      "理工學部的實驗、設備及相關費用通常較高。",
      "QS 2026 各細分學科排名需要以當年度榜單逐項確認。"
    ],

    tags: [
      "私立",
      "大阪",
      "法學",
      "經濟",
      "商學",
      "外語",
      "社會",
      "理工"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "法律": {
          qsSubject: "Law & Legal Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "商學與管理": {
          qsSubject: "Business & Management Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "會計與金融": {
          qsSubject: "Accounting & Finance",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "社會學": {
          qsSubject: "Sociology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "傳播與媒體研究": {
          qsSubject: "Communication & Media Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "化學": {
          qsSubject: "Chemistry",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "機械工程": {
          qsSubject: "Mechanical, Aeronautical & Manufacturing Engineering",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "現代語言": {
          qsSubject: "Modern Languages",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 41. 大阪公立大學
  // =========================================================
  {
    id: "osaka-metropolitan",
    name: "大阪公立大學",
    officialUrl: "https://www.omu.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生特別選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.omu.ac.jp/admissions/ug/exam_info/special/foreigner/',
    admissionPdfUrl: "https://www.omu.ac.jp/admissions/assets/13_international_student2027.pdf",
    admissionNote: "2027年度學生募集要項（私費外国人留学生特別選抜），2026年7月發行；各學部選拔方式不同，請依志願學部確認。",

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "文學",
      "法學",
      "經濟",
      "商學",
      "理學",
      "工學",
      "資訊",
      "農學",
      "獸醫",
      "醫學",
      "看護",
      "生活科學",
      "都市科學"
    ],

    level: "偏差值 52.5～67.5",

    price: "535,800日圓／年",

    priceDetail:
      "2026年度官方學部授業料535,800日圓／年。2026年度入學料依大阪府民及其子女資格分為282,000日圓及382,000日圓；2027年度最新費用應以招生公告確認。",

    target:
      "適合希望就讀大阪大型公立綜合大學，並對經濟、商學、工程、資訊、醫學、農學或獸醫有興趣的學生。",

    strengths: [
      "2022年由大阪市立大學與大阪府立大學整併而成，學科資源廣。",
      "涵蓋醫學、獸醫、農學、商管、理工及人文社會。",
      "公立大學的學費通常比私立大學低。"
    ],

    weaknesses: [
      "不同學部位於不同校區。",
      "醫學、獸醫及部分理工科系入試競爭較高。",
      "整併後的校園及組織架構需要事先了解。"
    ],

    tags: [
      "公立",
      "大阪",
      "經濟",
      "商學",
      "資訊",
      "醫學",
      "獸醫",
      "工程",
      "農學"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "物理與天文學": {
          qsSubject: "Physics & Astronomy",
          worldRank: "401-450",
          japanRank: null,
          status: "ranked"
        },
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "商學與管理": {
          qsSubject: "Business & Management Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "醫學": {
          qsSubject: "Medicine",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "農林": {
          qsSubject: "Agriculture & Forestry",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "獸醫": {
          qsSubject: "Veterinary Science",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "化學": {
          qsSubject: "Chemistry",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "法律": {
          qsSubject: "Law & Legal Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "教育": {
          qsSubject: "Education & Training",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 42. 東京都立大學
  // =========================================================
  {
    id: "tokyo-metropolitan",
    name: "東京都立大學",
    officialUrl: "https://www.tmu.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.tmu.ac.jp/entrance/faculty/application_guideline.html',
    admissionPdfUrl: 'https://www.tmu.ac.jp/assets/files/download/entrance/guide/2026/2027_tsg_bosyuuyoukou.pdf',
    admissionNote: '2027年度學部私費外國人留學生募集要項；經濟經營學部另有獨立募集要項，生命科學科部分選拔亦有不同版本。',

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "人文",
      "社會科學",
      "法學",
      "經濟經營",
      "理學",
      "都市環境",
      "建築",
      "系統設計",
      "資訊",
      "健康福祉"
    ],

    level: "偏差值 52.5～60.0",

    price: "約520,800日圓／年（以最新學費公告確認）",

    priceDetail:
      "公立大學，授業料與入學料依東京都立大學官方規定及入學者條件確認；東京都民與非東京都民的入學料可能不同。2027年度請以最新招生及學費頁面為準。",

    target:
      "適合想在東京就讀公立綜合大學，並對法律、經濟、都市規劃、建築、理工或健康福祉有興趣的學生。",

    strengths: [
      "位於東京，能接觸大城市的研究、企業及公共政策資源。",
      "都市環境、建築、系統設計等領域有明確特色。",
      "公立大學學費通常低於私立大學。"
    ],

    weaknesses: [
      "主要校區分布不同，通學方式需仔細規劃。",
      "部分專業課程的實驗與實習要求較高。",
      "本次尚未確認足夠的 QS 2026 細分學科名次。"
    ],

    tags: [
      "公立",
      "東京",
      "法學",
      "經濟",
      "都市環境",
      "建築",
      "系統設計",
      "資訊"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "法律": {
          qsSubject: "Law & Legal Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "建築與建成環境": {
          qsSubject: "Architecture & Built Environment",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "地理": {
          qsSubject: "Geography",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "數學": {
          qsSubject: "Mathematics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "物理": {
          qsSubject: "Physics & Astronomy",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "化學": {
          qsSubject: "Chemistry",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "環境科學": {
          qsSubject: "Environmental Sciences",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "心理學": {
          qsSubject: "Psychology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 43. 橫濱市立大學
  // =========================================================
  {
    id: "yokohama-city",
    name: "橫濱市立大學",
    officialUrl: "https://www.yokohama-cu.ac.jp/english/",
    admissionYear: 2027,
    admissionType: '外国人留学生特別選抜',
    admissionStatus: 'published',
    admissionUrl: 'https://www.yokohama-cu.ac.jp/admissions/admissions/special_selection/international_students/',
    admissionPdfUrl: 'https://www.yokohama-cu.ac.jp/admissions/admissions/special_selection/international_students/j8907d0000000mn8-att/2027_ryugaku_v2.pdf',
    admissionNote: '2027年度學生募集要項PDF。官方要求另取得冊子體募集要項（願書），PDF可供查閱但請確認出願所需版本。',

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "國際教養",
      "國際商學",
      "經濟",
      "資料科學",
      "理學",
      "醫學",
      "看護",
      "生命科學"
    ],

    level: "偏差值 52.5～67.5",

    price: "557,400～573,000日圓／年（2026年度）",

    priceDetail:
      "2026年度官方授業料：國際教養、國際商學、理學、資料科學及醫學部看護學科年額557,400日圓；醫學科年額573,000日圓。入學料依申請人資格及居住條件不同，2027年度金額待最新公告確認。",

    target:
      "適合對國際事務、商學、資料科學、生物與醫學有興趣，希望在橫濱及東京圈發展的學生。",

    strengths: [
      "國際教養、國際商學與資料科學方向鮮明。",
      "醫學及生命科學相關領域完整。",
      "位於橫濱，生活與產業資源豐富。"
    ],

    weaknesses: [
      "學科數量比大型綜合大學少。",
      "醫學科與部分熱門學部入試競爭較高。",
      "實際學費及入學料需區分學部與申請人資格。"
    ],

    tags: [
      "公立",
      "橫濱",
      "國際",
      "商學",
      "資料科學",
      "醫學",
      "生命科學"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "醫學": {
          qsSubject: "Medicine",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "生物科學": {
          qsSubject: "Biological Sciences",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資料科學與人工智慧": {
          qsSubject: "Data Science & Artificial Intelligence",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "商學與管理": {
          qsSubject: "Business & Management Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "化學": {
          qsSubject: "Chemistry",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "生物醫學": {
          qsSubject: "Life Sciences & Medicine",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 44. 京都工藝纖維大學
  // =========================================================
  {
    id: "kyoto-institute-technology",
    name: "京都工藝纖維大學",
    officialUrl: "https://www.kit.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.kit.ac.jp/test_index/school_news/undergraduate/type_abroad/',
    admissionPdfUrl: 'https://ac.web.kit.ac.jp/02/nyushi/yoko/gakubu/2027_shihi_yoko.pdf',
    admissionNote: '2027年度私費外国人留學生入試學生募集要項；官方公告另有2026年4月22日訂正資訊，下載時一併確認。',

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "建築",
      "設計",
      "材料科學",
      "化學",
      "化學工程",
      "機械",
      "電機電子",
      "資訊",
      "環境",
      "地球科學",
      "物理"
    ],

    level: "偏差值 52.5～55.0",

    price: "535,800日圓／年",

    priceDetail:
      "官方學部授業料535,800日圓／年、入學料282,000日圓。若入學後學費政策調整，以學校公告為準。",

    target:
      "適合想專攻工程、建築、材料、化學、設計、環境及自然科學的學生。",

    strengths: [
      "工程與自然科學研究特色鮮明。",
      "QS 2026 多個細分學科具有明確世界及日本名次。",
      "國立大學學費相對私立便宜。"
    ],

    weaknesses: [
      "學科重心偏向工學、設計與自然科學。",
      "人文、法律、商學等領域選擇較少。",
      "研究導向較強，選系時應仔細看課程內容。"
    ],

    tags: [
      "國立",
      "京都",
      "工程",
      "建築",
      "設計",
      "材料",
      "化學",
      "環境"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "自然科學": {
          qsSubject: "Natural Sciences",
          worldRank: "52",
          japanRank: 3,
          status: "ranked"
        },
        "工程科學": {
          qsSubject: "Engineering Sciences",
          worldRank: "42",
          japanRank: 2,
          status: "ranked"
        },
        "建築與建成環境": {
          qsSubject: "Architecture & Built Environment",
          worldRank: "51-100",
          japanRank: 3,
          status: "ranked"
        },
        "化學工程": {
          qsSubject: "Chemical Engineering",
          worldRank: "25",
          japanRank: 1,
          status: "ranked"
        },
        "化學": {
          qsSubject: "Chemistry",
          worldRank: "50",
          japanRank: 2,
          status: "ranked"
        },
        "土木與結構工程": {
          qsSubject: "Civil & Structural Engineering",
          worldRank: "51-100",
          japanRank: 2,
          status: "ranked"
        },
        "電機電子工程": {
          qsSubject: "Electrical & Electronic Engineering",
          worldRank: "52",
          japanRank: 3,
          status: "ranked"
        },
        "環境科學": {
          qsSubject: "Environmental Sciences",
          worldRank: "81",
          japanRank: 2,
          status: "ranked"
        },
        "地質學": {
          qsSubject: "Geology",
          worldRank: "51-100",
          japanRank: 2,
          status: "ranked"
        },
        "地球物理學": {
          qsSubject: "Geophysics",
          worldRank: "51-100",
          japanRank: 3,
          status: "ranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: "110",
          japanRank: 4,
          status: "ranked"
        },
        "圖書資訊管理": {
          qsSubject: "Library & Information Management",
          worldRank: "51-100",
          japanRank: 2,
          status: "ranked"
        },
        "材料科學": {
          qsSubject: "Materials Sciences",
          worldRank: "26",
          japanRank: 1,
          status: "ranked"
        },
        "機械工程": {
          qsSubject: "Mechanical Engineering",
          worldRank: "32",
          japanRank: 3,
          status: "ranked"
        },
        "物理": {
          qsSubject: "Physics",
          worldRank: "55",
          japanRank: 4,
          status: "ranked"
        },
        "礦物與採礦工程": {
          qsSubject: "Mineral & Mining Engineering",
          worldRank: "51-100",
          japanRank: 3,
          status: "ranked"
        }
      }
    }
  },


  // =========================================================
  // 45. 國際基督教大學（ICU）
  // =========================================================
  {
    id: "icu",
    name: "國際基督教大學",
    officialUrl: "https://www.icu.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '學部一般／留學生申請制度需確認',
    admissionStatus: 'published',
    admissionUrl: 'https://www.icu.ac.jp/en/admissions/undergraduate/',
    admissionPdfUrl: "https://www.icu.ac.jp/admissions/undergraduate/images/AY2027_sogo.pdf",
    admissionNote: "此為2027年度總合型選抜（4月入學）要項；ICU無獨立的「外国人留学生入試」，台灣高中畢業生較可能走此管道。另有帰国生要項 https://www.icu.ac.jp/admissions/undergraduate/images/2027ki.pdf（須海外就讀至少兩年）。",

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "人文",
      "社會科學",
      "經濟",
      "政治",
      "國際關係",
      "語言",
      "心理學",
      "教育",
      "數學",
      "自然科學",
      "資料科學"
    ],

    level: "偏差值 67.5",

    price: "1,557,000日圓／年（2027年度學費及設施費合計）",

    priceDetail:
      "ICU官方已公布2027年度教養學部授業料1,203,000日圓、設施費354,000日圓，合計1,557,000日圓／年。入學金另計300,000日圓，實驗、材料及其他費用可能另外收取。",

    target:
      "適合喜歡跨領域學習、英文閱讀與討論、國際關係、人文社會科學，且希望保留多種專業選擇的學生。",

    strengths: [
      "教養學部採跨領域的 Liberal Arts 教育。",
      "英文與日文學習環境並存，適合希望提升雙語能力的學生。",
      "適合尚未完全決定主修方向、希望探索不同領域的人。"
    ],

    weaknesses: [
      "學費高於大多數國立大學。",
      "以教養教育為主，並非傳統大型綜合大學那種多學部架構。",
      "英文閱讀、寫作與自主學習需求較高。"
    ],

    tags: [
      "私立",
      "東京",
      "國際",
      "教養教育",
      "英文授課",
      "跨領域",
      "人文",
      "社會科學"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "人文科學": {
          qsSubject: "Arts & Humanities",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "政治／國際關係": {
          qsSubject: "Politics & International Studies",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "經濟學": {
          qsSubject: "Economics & Econometrics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "社會學": {
          qsSubject: "Sociology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "哲學": {
          qsSubject: "Philosophy",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "心理學": {
          qsSubject: "Psychology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "語言學": {
          qsSubject: "Linguistics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "教育": {
          qsSubject: "Education & Training",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "數學": {
          qsSubject: "Mathematics",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "生物科學": {
          qsSubject: "Biological Sciences",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  },


  // =========================================================
  // 46. 東京海洋大學
  // =========================================================
  {
    id: "tokyo-university-marine-science-technology",
    name: "東京海洋大學",
    officialUrl: "https://www.kaiyodai.ac.jp/en/",
    admissionYear: 2027,
    admissionType: '私費外国人留学生特別入試',
    admissionStatus: 'published',
    admissionUrl: 'https://www.kaiyodai.ac.jp/news/e_undergraduate/detail/82026_11.html',
    admissionPdfUrl: 'https://www.kaiyodai.ac.jp/upload-file/86917ddbe495cc571a3ab327c8ec83c68f8183b4.pdf',
    admissionNote: '2027年度私費外国人留學生特別入試學生募集要項；官方公告日期2026年10月19日。',

    category: ["日本留學"],
    subcategory: ["大學"],

    fields: [
      "海洋科學",
      "海洋生物",
      "水產",
      "食品科學",
      "環境科學",
      "海洋資源",
      "海洋工程",
      "航運",
      "物流",
      "資訊"
    ],

    level: "偏差值 50.0～60.0",

    price: "2027年度學費待官方確認",

    priceDetail:
      "國立大學。請以東京海洋大學2027年度入學者的募集要項及學費公告核對授業料與入學料；本筆暫不沿用其他國立大學的標準金額，以免將不同學校的學費調整政策混為一談。",

    target:
      "適合對海洋、生物資源、水產、食品、環境、船舶、海運或物流有興趣的學生。",

    strengths: [
      "海洋、水產、海洋生物與航運領域定位明確。",
      "適合希望投入海洋資源、食品、環境及海事產業的學生。",
      "具有不同於一般綜合大學的專業教育方向。"
    ],

    weaknesses: [
      "科系選擇集中在海洋及相關產業。",
      "若想主修法律、一般商管或人文，選擇相對有限。",
      "學費與入學費應以當年度官方資料確認。"
    ],

    tags: [
      "國立",
      "海洋",
      "水產",
      "食品科學",
      "環境",
      "航運",
      "物流",
      "生物資源"
    ],

    academicRanking: {
      source: "QS World University Rankings by Subject",
      year: 2026,

      subjects: {
        "農林": {
          qsSubject: "Agriculture & Forestry",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "生物科學": {
          qsSubject: "Biological Sciences",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "地球與海洋科學": {
          qsSubject: "Earth & Marine Sciences",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "環境科學": {
          qsSubject: "Environmental Sciences",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "食品科學": {
          qsSubject: "Food Science",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "化學": {
          qsSubject: "Chemistry",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "資訊／計算機": {
          qsSubject: "Computer Science & Information Systems",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "工程": {
          qsSubject: "Engineering & Technology",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        },
        "機械工程": {
          qsSubject: "Mechanical Engineering",
          worldRank: null,
          japanRank: null,
          status: "unranked"
        }
      }
    }
  }

];
