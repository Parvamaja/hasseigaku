/* ============================================================
 * ③ 分野別確認テスト（75問）
 * 発生学クイズアプリ 問題データベース
 * ============================================================ */
const QUESTIONS_FIELD = [
  {
    "id": 52,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "一次卵母細胞が第一減数分裂前期で停止するのはいつか。",
    "options": [
      "出生後",
      "胎生期（出生前）",
      "思春期",
      "排卵直前"
    ],
    "answer": 1
  },
  {
    "id": 53,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "卵祖細胞・一次卵母細胞の総数が最多になるのはいつか。",
    "options": [
      "出生時",
      "胎生5か月頃",
      "思春期",
      "20歳前後"
    ],
    "answer": 1
  },
  {
    "id": 54,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "卵子成熟抑制物質（OMI）の働きとして正しいものはどれか。",
    "options": [
      "第一減数分裂を中期で停止させる",
      "第一減数分裂中期に入らせず複糸期にとどめる",
      "第二減数分裂を促進する",
      "排卵を誘発する"
    ],
    "answer": 1
  },
  {
    "id": 55,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "tf",
    "q": "1個の一次卵母細胞からは結局1個しか卵子はできない（他3つは極体）。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 56,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "精子形成で細胞質橋によって細胞が連なる理由として正しいものはどれか。",
    "options": [
      "効率的な栄養供給のため",
      "同調した分裂・クローンを形成するため",
      "偶然の産物で意味はない",
      "減数分裂を防ぐため"
    ],
    "answer": 1
  },
  {
    "id": 57,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "精子形成を促進するホルモン経路として正しいものはどれか。",
    "options": [
      "FSH→ライディッヒ細胞→テストステロン→セルトリ細胞",
      "LH→ライディッヒ細胞→テストステロン→セルトリ細胞",
      "LH→セルトリ細胞→テストステロン→ライディッヒ細胞"
    ],
    "answer": 1
  },
  {
    "id": 58,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "tf",
    "q": "第二減数分裂が完了するのは受精したときだけである。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 59,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "黄体が最も発育するのはいつか（受精しなかった場合）。",
    "options": [
      "排卵直後",
      "排卵後約9日",
      "排卵後約20日"
    ],
    "answer": 1
  },
  {
    "id": 60,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "子宮内膜の分泌期を誘導するホルモンはどれか。",
    "options": [
      "LH",
      "FSH",
      "プロゲステロン",
      "エストロゲン"
    ],
    "answer": 2
  },
  {
    "id": 61,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "tf",
    "q": "受精能獲得は精管で行われる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1
  },
  {
    "id": 62,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "排卵時（受精前）の二次卵母細胞の核相はどれか。",
    "options": [
      "n/1C",
      "n/2C",
      "2n/2C",
      "2n/4C"
    ],
    "answer": 1
  },
  {
    "id": 63,
    "book": "field",
    "unit": "生殖細胞・排卵・受精・ホルモン",
    "priority": "high",
    "type": "mc",
    "q": "出生時の一次卵母細胞の核相はどれか。",
    "options": [
      "n/1C",
      "n/2C",
      "2n/2C",
      "2n/4C"
    ],
    "answer": 3
  },
  {
    "id": 64,
    "book": "field",
    "unit": "発生第2週",
    "priority": "high",
    "type": "mc",
    "q": "着床が完了する（閉鎖栓ができる）のはおよそ何日目か。",
    "options": [
      "4〜5日",
      "6日",
      "9〜10日",
      "13日"
    ],
    "answer": 2
  },
  {
    "id": 65,
    "book": "field",
    "unit": "発生第2週",
    "priority": "high",
    "type": "mc",
    "q": "栄養膜が分化する2層として正しい組み合わせはどれか。",
    "options": [
      "内細胞塊・外細胞塊",
      "栄養膜細胞層・栄養膜合胞体層",
      "胚盤葉上層・胚盤葉下層"
    ],
    "answer": 1
  },
  {
    "id": 66,
    "book": "field",
    "unit": "発生第2週",
    "priority": "high",
    "type": "mc",
    "q": "胚外体腔膜（ヒューザー膜）を形成するのはどの層由来の細胞か。",
    "options": [
      "胚盤葉上層",
      "胚盤葉下層",
      "栄養膜細胞層"
    ],
    "answer": 1
  },
  {
    "id": 67,
    "book": "field",
    "unit": "発生第2週",
    "priority": "high",
    "type": "mc",
    "q": "子宮胎盤循環が確立するきっかけとなる現象はどれか。",
    "options": [
      "二次卵黄嚢の形成",
      "母体側血液の栄養膜合胞体層裂孔への侵入",
      "羊膜腔の形成"
    ],
    "answer": 1
  },
  {
    "id": 68,
    "book": "field",
    "unit": "発生第2週",
    "priority": "high",
    "type": "mc",
    "q": "胚結節と栄養膜の対応として正しいものはどれか。",
    "options": [
      "胚結節＝内細胞塊、栄養膜＝内細胞塊",
      "胚結節＝外細胞塊、栄養膜＝内細胞塊",
      "胚結節＝内細胞塊、栄養膜＝外細胞塊",
      "胚結節＝外細胞塊、栄養膜＝外細胞塊"
    ],
    "answer": 2
  },
  {
    "id": 69,
    "book": "field",
    "unit": "発生第2週",
    "priority": "high",
    "type": "mc",
    "q": "ES細胞のもととなるのはどれか。",
    "options": [
      "栄養膜",
      "内細胞塊",
      "卵黄嚢"
    ],
    "answer": 1
  },
  {
    "id": 70,
    "book": "field",
    "unit": "発生第2週",
    "priority": "high",
    "type": "mc",
    "q": "着床が起こる部位として正しいものはどれか。",
    "options": [
      "子宮筋層",
      "子宮内膜の上皮",
      "卵管上皮"
    ],
    "answer": 1
  },
  {
    "id": 71,
    "book": "field",
    "unit": "発生第3週",
    "priority": "high",
    "type": "mc",
    "q": "原始線条が形成され始めるのはおよそ何日目か。",
    "options": [
      "8日目",
      "13日目",
      "15〜16日目",
      "20日目"
    ],
    "answer": 2
  },
  {
    "id": 72,
    "book": "field",
    "unit": "発生第3週",
    "priority": "high",
    "type": "recall",
    "q": "胚盤葉上層の細胞が原始線条に向かって移動し下層に潜り込む現象を何と呼ぶか。",
    "options": null,
    "answer": "陥入"
  },
  {
    "id": 73,
    "book": "field",
    "unit": "発生第3週",
    "priority": "high",
    "type": "mc",
    "q": "陥入した細胞が胚盤葉下層を押しのけて置き換わると何になるか。",
    "options": [
      "中胚葉",
      "内胚葉",
      "外胚葉"
    ],
    "answer": 1
  },
  {
    "id": 74,
    "book": "field",
    "unit": "発生第3週",
    "priority": "high",
    "type": "mc",
    "q": "体節を形成する中胚葉はどれか。",
    "options": [
      "沿軸中胚葉",
      "中間中胚葉",
      "側板中胚葉（臓側）",
      "側板中胚葉（壁側）"
    ],
    "answer": 0
  },
  {
    "id": 75,
    "book": "field",
    "unit": "発生第3週",
    "priority": "high",
    "type": "mc",
    "q": "泌尿生殖器の構造に分化する中胚葉はどれか。",
    "options": [
      "沿軸中胚葉",
      "中間中胚葉",
      "側板中胚葉"
    ],
    "answer": 1
  },
  {
    "id": 76,
    "book": "field",
    "unit": "発生第3週",
    "priority": "high",
    "type": "recall",
    "q": "外胚葉と一体となって体壁を形成するのは臓側・壁側どちらの側板中胚葉か。",
    "options": null,
    "answer": "壁側中胚葉"
  },
  {
    "id": 77,
    "book": "field",
    "unit": "発生第3週",
    "priority": "high",
    "type": "tf",
    "q": "内胚葉は胚盤葉上層由来の細胞が置き換わってできる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 78,
    "book": "field",
    "unit": "胚子期後半（神経管・咽頭弓）",
    "priority": "high",
    "type": "mc",
    "q": "神経板が形成されるのはおよそ何日目か。",
    "options": [
      "15〜16日",
      "18〜19日",
      "20日",
      "22日"
    ],
    "answer": 1
  },
  {
    "id": 79,
    "book": "field",
    "unit": "胚子期後半（神経管・咽頭弓）",
    "priority": "high",
    "type": "mc",
    "q": "左右の神経ヒダが最初に癒着を始める部位はどこか。",
    "options": [
      "頭部",
      "頚部",
      "尾部"
    ],
    "answer": 1
  },
  {
    "id": 80,
    "book": "field",
    "unit": "胚子期後半（神経管・咽頭弓）",
    "priority": "high",
    "type": "mc",
    "q": "神経堤細胞が生じる現象を何と呼ぶか。",
    "options": [
      "陥入",
      "上皮間葉転換（EMT）",
      "アポトーシス"
    ],
    "answer": 1
  },
  {
    "id": 81,
    "book": "field",
    "unit": "胚子期後半（神経管・咽頭弓）",
    "priority": "high",
    "type": "mc",
    "q": "神経堤細胞由来として誤っているものはどれか。",
    "options": [
      "メラノサイト",
      "副腎髄質",
      "副腎皮質",
      "シュワン細胞",
      "頭蓋顔面骨格の一部"
    ],
    "answer": 2
  },
  {
    "id": 82,
    "book": "field",
    "unit": "胚子期後半（神経管・咽頭弓）",
    "priority": "high",
    "type": "mc",
    "q": "咽頭弓本体を構成する組織の由来として正しいものはどれか。",
    "options": [
      "外胚葉のみ",
      "内胚葉のみ",
      "沿軸中胚葉＋神経堤細胞由来"
    ],
    "answer": 2
  },
  {
    "id": 83,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "mc",
    "q": "心臓の自律的拍動が開始するのはおよそ何日目か。",
    "options": [
      "16日",
      "19日",
      "21〜22日",
      "28日"
    ],
    "answer": 2
  },
  {
    "id": 84,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "recall",
    "q": "一次造血の場所として正しいものはどれか。",
    "options": null,
    "answer": "卵黄嚢の血島"
  },
  {
    "id": 85,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "recall",
    "q": "二次造血が最終的に定着する場所はどれか。",
    "options": null,
    "answer": "骨髄（AGM領域→肝臓・脾臓→骨髄の順に移行）"
  },
  {
    "id": 86,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "recall",
    "q": "胎児循環で肝臓をバイパスする構造はどれか。",
    "options": null,
    "answer": "静脈管（ductus venosus）"
  },
  {
    "id": 87,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "recall",
    "q": "胎児循環で右心房から左心房へ短絡させる構造はどれか。",
    "options": null,
    "answer": "卵円孔"
  },
  {
    "id": 88,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "recall",
    "q": "胎児循環で肺動脈から大動脈へ短絡させる構造はどれか。",
    "options": null,
    "answer": "動脈管（ductus arteriosus）"
  },
  {
    "id": 89,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "mc",
    "q": "胎児循環において最も酸素飽和度が高い血液が流れるのはどこか。",
    "options": [
      "動脈管",
      "臍静脈",
      "臍動脈"
    ],
    "answer": 1
  },
  {
    "id": 90,
    "book": "field",
    "unit": "循環器系",
    "priority": "high",
    "type": "mc",
    "q": "臍帯静脈・臍帯動脈の本数と機能で正しい組み合わせはどれか。",
    "options": [
      "静脈1本（酸素・栄養を運ぶ）、動脈2本（老廃物を運ぶ）",
      "静脈2本（酸素・栄養を運ぶ）、動脈1本（老廃物を運ぶ）"
    ],
    "answer": 0
  },
  {
    "id": 91,
    "book": "field",
    "unit": "神経系",
    "priority": "high",
    "type": "recall",
    "q": "前脳（prosencephalon）はさらに何に分かれるか。",
    "options": null,
    "answer": "終脳・間脳"
  },
  {
    "id": 92,
    "book": "field",
    "unit": "神経系",
    "priority": "high",
    "type": "mc",
    "q": "菱脳（hindbrain）から分化するものの組み合わせとして正しいものはどれか。",
    "options": [
      "間脳・中脳",
      "橋・小脳",
      "小脳・脊髄",
      "中脳・間脳"
    ],
    "answer": 1
  },
  {
    "id": 93,
    "book": "field",
    "unit": "神経系",
    "priority": "high",
    "type": "recall",
    "q": "中枢神経系で軸索に巻きついて髄鞘を作るグリア細胞はどれか。",
    "options": null,
    "answer": "希突起膠細胞"
  },
  {
    "id": 94,
    "book": "field",
    "unit": "神経系",
    "priority": "high",
    "type": "recall",
    "q": "末梢神経系で髄鞘を作る細胞はどれか。",
    "options": null,
    "answer": "シュワン細胞"
  },
  {
    "id": 95,
    "book": "field",
    "unit": "神経系",
    "priority": "high",
    "type": "recall",
    "q": "脳室の内壁と脳脊髄液を管理するグリア細胞はどれか。",
    "options": null,
    "answer": "上衣細胞"
  },
  {
    "id": 96,
    "book": "field",
    "unit": "神経系",
    "priority": "high",
    "type": "mc",
    "q": "脊髄の翼板（alar plate）が形成するのはどれか。",
    "options": [
      "前角（運動性）",
      "後角（知覚性）"
    ],
    "answer": 1
  },
  {
    "id": 97,
    "book": "field",
    "unit": "神経系",
    "priority": "high",
    "type": "tf",
    "q": "神経膠細胞は神経上皮から分化する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 98,
    "book": "field",
    "unit": "頭頸部・顔面",
    "priority": "mid",
    "type": "recall",
    "q": "第1咽頭弓の支配神経はどれか。",
    "options": null,
    "answer": "三叉神経"
  },
  {
    "id": 99,
    "book": "field",
    "unit": "頭頸部・顔面",
    "priority": "mid",
    "type": "recall",
    "q": "第2咽頭弓の支配神経はどれか。",
    "options": null,
    "answer": "顔面神経"
  },
  {
    "id": 100,
    "book": "field",
    "unit": "頭頸部・顔面",
    "priority": "mid",
    "type": "recall",
    "q": "第3咽頭弓の支配神経はどれか。",
    "options": null,
    "answer": "舌咽神経"
  },
  {
    "id": 101,
    "book": "field",
    "unit": "頭頸部・顔面",
    "priority": "mid",
    "type": "recall",
    "q": "第4・6咽頭弓の支配神経はどれか。",
    "options": null,
    "answer": "迷走神経"
  },
  {
    "id": 102,
    "book": "field",
    "unit": "頭頸部・顔面",
    "priority": "mid",
    "type": "mc",
    "q": "メッケル軟骨から生じる骨はどれか。",
    "options": [
      "上顎骨",
      "下顎骨",
      "側頭骨"
    ],
    "answer": 1
  },
  {
    "id": 103,
    "book": "field",
    "unit": "運動器系",
    "priority": "mid",
    "type": "recall",
    "q": "体幹筋を形成する中胚葉はどれか。",
    "options": null,
    "answer": "沿軸中胚葉"
  },
  {
    "id": 104,
    "book": "field",
    "unit": "運動器系",
    "priority": "mid",
    "type": "mc",
    "q": "背筋群（上分節筋群）を支配する神経枝はどれか。",
    "options": [
      "脊髄神経前枝",
      "脊髄神経後枝"
    ],
    "answer": 1
  },
  {
    "id": 105,
    "book": "field",
    "unit": "運動器系",
    "priority": "mid",
    "type": "recall",
    "q": "骨格筋・心筋・平滑筋のうち、細胞融合して多核になるのはどれか。",
    "options": null,
    "answer": "骨格筋のみ"
  },
  {
    "id": 106,
    "book": "field",
    "unit": "運動器系",
    "priority": "mid",
    "type": "mc",
    "q": "軟骨内骨化の過程で最初に出現するのはどれか。",
    "options": [
      "2次骨化中心",
      "1次骨化中心",
      "骨端軟骨"
    ],
    "answer": 1
  },
  {
    "id": 107,
    "book": "field",
    "unit": "運動器系",
    "priority": "mid",
    "type": "mc",
    "q": "膜内骨化で生じる骨として誤っているものはどれか。",
    "options": [
      "頭蓋冠",
      "鎖骨",
      "下顎骨",
      "頭蓋底"
    ],
    "answer": 3
  },
  {
    "id": 108,
    "book": "field",
    "unit": "体腔・消化器系",
    "priority": "mid",
    "type": "recall",
    "q": "横中隔の中で形成される臓器はどれか。",
    "options": null,
    "answer": "肝臓"
  },
  {
    "id": 109,
    "book": "field",
    "unit": "体腔・消化器系",
    "priority": "mid",
    "type": "mc",
    "q": "肝・胆・膵はどこの末端に生じるか。",
    "options": [
      "前腸",
      "中腸",
      "後腸"
    ],
    "answer": 0
  },
  {
    "id": 110,
    "book": "field",
    "unit": "体腔・消化器系",
    "priority": "mid",
    "type": "tf",
    "q": "膵芽は肝芽より先に生じる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1
  },
  {
    "id": 111,
    "book": "field",
    "unit": "体腔・消化器系",
    "priority": "mid",
    "type": "mc",
    "q": "胃はどちらに90度回転するか。",
    "options": [
      "時計回り",
      "反時計回り"
    ],
    "answer": 0
  },
  {
    "id": 112,
    "book": "field",
    "unit": "体腔・消化器系",
    "priority": "mid",
    "type": "recall",
    "q": "前腸の栄養血管はどれか。",
    "options": null,
    "answer": "腹腔動脈"
  },
  {
    "id": 113,
    "book": "field",
    "unit": "体腔・消化器系",
    "priority": "mid",
    "type": "mc",
    "q": "中腸の範囲として正しいものはどれか。",
    "options": [
      "十二指腸口側部から回腸まで",
      "十二指腸乳頭以下から横行結腸近位2/3まで"
    ],
    "answer": 1
  },
  {
    "id": 114,
    "book": "field",
    "unit": "体腔・消化器系",
    "priority": "mid",
    "type": "tf",
    "q": "腸管の一部は発生の過程で一時的に胚外体腔に脱出する（生理的臍帯ヘルニア）。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 115,
    "book": "field",
    "unit": "呼吸器系",
    "priority": "mid",
    "type": "mc",
    "q": "肺芽はどこから生じるか。",
    "options": [
      "中腸の憩室",
      "前腸末端の腹側の憩室",
      "後腸の憩室"
    ],
    "answer": 1
  },
  {
    "id": 116,
    "book": "field",
    "unit": "呼吸器系",
    "priority": "mid",
    "type": "tf",
    "q": "肺胞の数は出生後も増加し続ける。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 117,
    "book": "field",
    "unit": "泌尿生殖器系",
    "priority": "mid",
    "type": "mc",
    "q": "成体腎（永久腎）の由来はどれか。",
    "options": [
      "前腎",
      "中腎",
      "後腎"
    ],
    "answer": 2
  },
  {
    "id": 118,
    "book": "field",
    "unit": "泌尿生殖器系",
    "priority": "mid",
    "type": "recall",
    "q": "膀胱上皮の由来はどれか。",
    "options": null,
    "answer": "内胚葉"
  },
  {
    "id": 119,
    "book": "field",
    "unit": "泌尿生殖器系",
    "priority": "mid",
    "type": "recall",
    "q": "尿細管上皮の由来はどれか。",
    "options": null,
    "answer": "中胚葉（中間中胚葉）"
  },
  {
    "id": 120,
    "book": "field",
    "unit": "泌尿生殖器系",
    "priority": "mid",
    "type": "recall",
    "q": "精巣形成を指令するY染色体上のマスター遺伝子はどれか。",
    "options": null,
    "answer": "Sry遺伝子"
  },
  {
    "id": 121,
    "book": "field",
    "unit": "泌尿生殖器系",
    "priority": "mid",
    "type": "recall",
    "q": "抗ミュラー管ホルモン（AMH）を分泌する細胞はどれか。",
    "options": null,
    "answer": "セルトリ細胞"
  },
  {
    "id": 122,
    "book": "field",
    "unit": "泌尿生殖器系",
    "priority": "mid",
    "type": "recall",
    "q": "外性器の男性化に必要な、テストステロンが変換されたホルモンは何か。",
    "options": null,
    "answer": "DHT（ジヒドロテストステロン）"
  },
  {
    "id": 123,
    "book": "field",
    "unit": "胎盤・胎膜",
    "priority": "mid",
    "type": "recall",
    "q": "胎膜を構成する3層は何か。",
    "options": null,
    "answer": "羊膜・絨毛膜・脱落膜"
  },
  {
    "id": 124,
    "book": "field",
    "unit": "胎盤・胎膜",
    "priority": "mid",
    "type": "recall",
    "q": "絨毛膜のうち最も外側の壁を形成し、胎盤の胎児側を作るのはどれか。",
    "options": null,
    "answer": "絨毛膜"
  },
  {
    "id": 125,
    "book": "field",
    "unit": "胎盤・胎膜",
    "priority": "mid",
    "type": "tf",
    "q": "hCGは黄体を維持する働きを持つ。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 126,
    "book": "field",
    "unit": "胎児期・臨床",
    "priority": "low",
    "type": "mc",
    "q": "通常の正常妊娠において、出産予定日は最終月経開始日から数えて何週か。",
    "options": [
      "35週",
      "38週",
      "40週",
      "42週"
    ],
    "answer": 2
  }
];
