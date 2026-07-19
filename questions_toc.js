/* ============================================================
 * ④ 目次準拠確認問題集（56問）
 * 発生学クイズアプリ 問題データベース
 * ============================================================ */
const QUESTIONS_TOC = [
  {
    "id": 127,
    "book": "toc",
    "unit": "第1章　発生とは",
    "priority": "low",
    "type": "recall",
    "q": "個体発生と系統発生の違いを一言で。",
    "options": null,
    "answer": "個体発生＝1個体が受精卵から成体になる過程／系統発生＝種が進化していく過程"
  },
  {
    "id": 128,
    "book": "toc",
    "unit": "第1章　発生とは",
    "priority": "low",
    "type": "mc",
    "q": "ホメオティック遺伝子の働きとして正しいものはどれか。",
    "options": [
      "細胞分裂の速度を制御する",
      "体の各部位の位置情報（型）を決定する",
      "細胞死を誘導する",
      "DNA複製を行う"
    ],
    "answer": 1
  },
  {
    "id": 129,
    "book": "toc",
    "unit": "第1章　発生とは",
    "priority": "low",
    "type": "tf",
    "q": "重要な発生関連遺伝子の多くは、種を超えて共通の機能を担っている。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 130,
    "book": "toc",
    "unit": "第2章　生殖細胞の発生",
    "priority": "high",
    "type": "recall",
    "q": "原始生殖細胞はどこに由来し、どこへ移動するか。",
    "options": null,
    "answer": "卵黄嚢壁付近に由来し、生殖堤（将来の性腺）へ移動する"
  },
  {
    "id": 131,
    "book": "toc",
    "unit": "第2章　生殖細胞の発生",
    "priority": "high",
    "type": "recall",
    "q": "精子形成の全過程で、細胞質分裂が不完全なため娘細胞同士は何でつながっているか。",
    "options": null,
    "answer": "細胞質橋"
  },
  {
    "id": 132,
    "book": "toc",
    "unit": "第3章　排卵から着床まで",
    "priority": "high",
    "type": "mc",
    "q": "月経周期における子宮内膜の変化の順序として正しいものはどれか。",
    "options": [
      "分泌期→増殖期→月経期",
      "増殖期→分泌期→月経期",
      "月経期→分泌期→増殖期"
    ],
    "answer": 1
  },
  {
    "id": 133,
    "book": "toc",
    "unit": "第3章　排卵から着床まで",
    "priority": "high",
    "type": "tf",
    "q": "接合子の形成後、卵割が進むにつれ個々の割球（細胞）は大きくなっていく。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1
  },
  {
    "id": 134,
    "book": "toc",
    "unit": "第4章　二層性胚盤",
    "priority": "high",
    "type": "tf",
    "q": "異所性妊娠（子宮外妊娠）の多くは卵管に着床する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 135,
    "book": "toc",
    "unit": "第5章　三層性胚盤",
    "priority": "high",
    "type": "recall",
    "q": "胚内体腔は主にどの中胚葉から発生するか。",
    "options": null,
    "answer": "側板中胚葉"
  },
  {
    "id": 136,
    "book": "toc",
    "unit": "第5章　三層性胚盤",
    "priority": "high",
    "type": "recall",
    "q": "内胚葉・中胚葉・外胚葉はすべて何由来か。",
    "options": null,
    "answer": "胚盤葉上層由来"
  },
  {
    "id": 137,
    "book": "toc",
    "unit": "第6章　胚子期後半",
    "priority": "high",
    "type": "recall",
    "q": "胚子の屈曲には頭屈・尾屈と、もう1つは何折りたたみがあるか。",
    "options": null,
    "answer": "側方折りたたみ"
  },
  {
    "id": 138,
    "book": "toc",
    "unit": "第6章　胚子期後半",
    "priority": "high",
    "type": "mc",
    "q": "胎齢と妊娠週数の関係を表す式として正しいものはどれか。",
    "options": [
      "胎齢＋2週＝妊娠週数",
      "胎齢－2週＝妊娠週数",
      "胎齢＝妊娠週数"
    ],
    "answer": 0
  },
  {
    "id": 139,
    "book": "toc",
    "unit": "第7章　胎児期",
    "priority": "low",
    "type": "mc",
    "q": "妊娠期間は通常、最終月経開始日から数えて何週か。",
    "options": [
      "35週",
      "38週",
      "40週",
      "42週"
    ],
    "answer": 2
  },
  {
    "id": 140,
    "book": "toc",
    "unit": "第7章　胎児期",
    "priority": "low",
    "type": "tf",
    "q": "胎齢は排卵日を基準に数える。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 141,
    "book": "toc",
    "unit": "第7章　胎児期",
    "priority": "low",
    "type": "recall",
    "q": "出生前診断のうち、絨毛細胞を採取する検査法は何か。",
    "options": null,
    "answer": "絨毛生検"
  },
  {
    "id": 142,
    "book": "toc",
    "unit": "第7章　胎児期",
    "priority": "low",
    "type": "mc",
    "q": "超音波診断法の利点として正しいものはどれか。",
    "options": [
      "侵襲的である",
      "非侵襲的でリアルタイムに観察できる",
      "染色体分析ができる"
    ],
    "answer": 1
  },
  {
    "id": 143,
    "book": "toc",
    "unit": "第8章　胎盤と胎膜",
    "priority": "mid",
    "type": "mc",
    "q": "胎盤絨毛のうち、母体血・胎児毛細血管の両方を含むのはどれか。",
    "options": [
      "一次絨毛",
      "二次絨毛",
      "三次絨毛"
    ],
    "answer": 2
  },
  {
    "id": 144,
    "book": "toc",
    "unit": "第8章　胎盤と胎膜",
    "priority": "mid",
    "type": "recall",
    "q": "脱落膜はどのように形成されるか。",
    "options": null,
    "answer": "子宮内膜の間質細胞が脱落膜細胞に変化する"
  },
  {
    "id": 145,
    "book": "toc",
    "unit": "第8章　胎盤と胎膜",
    "priority": "mid",
    "type": "recall",
    "q": "hCGは胎盤のどの層から分泌されるか。",
    "options": null,
    "answer": "栄養膜合胞体層"
  },
  {
    "id": 146,
    "book": "toc",
    "unit": "第8章　胎盤と胎膜",
    "priority": "mid",
    "type": "recall",
    "q": "臍帯は胚のどの構造に由来するか。",
    "options": null,
    "answer": "付着茎"
  },
  {
    "id": 147,
    "book": "toc",
    "unit": "第8章　胎盤と胎膜",
    "priority": "mid",
    "type": "mc",
    "q": "妊娠後期の羊水の主な由来として正しいものはどれか。",
    "options": [
      "母体血漿の濾過液のみ",
      "胎児尿",
      "羊膜からの分泌のみ"
    ],
    "answer": 1
  },
  {
    "id": 148,
    "book": "toc",
    "unit": "第9章　発生異常",
    "priority": "low",
    "type": "recall",
    "q": "環境要因による先天奇形の原因を何と呼ぶか。",
    "options": null,
    "answer": "催奇形因子（テラトゲン）"
  },
  {
    "id": 149,
    "book": "toc",
    "unit": "第9章　発生異常",
    "priority": "low",
    "type": "tf",
    "q": "絶対過敏期（形態的奇形が生じやすい時期）は受精後4〜8週である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 150,
    "book": "toc",
    "unit": "第9章　発生異常",
    "priority": "low",
    "type": "mc",
    "q": "多因子遺伝による先天異常の特徴として正しいものはどれか。",
    "options": [
      "単一の遺伝子変異で説明できる",
      "遺伝要因と環境要因が組み合わさって発症する"
    ],
    "answer": 1
  },
  {
    "id": 151,
    "book": "toc",
    "unit": "第10章　運動器系",
    "priority": "mid",
    "type": "recall",
    "q": "軟骨内骨化と膜内骨化の違いを一言で。",
    "options": null,
    "answer": "軟骨内骨化＝軟骨のひな型を経て骨に置き換わる／膜内骨化＝間葉組織から直接骨組織ができる"
  },
  {
    "id": 152,
    "book": "toc",
    "unit": "第10章　運動器系",
    "priority": "mid",
    "type": "mc",
    "q": "長管骨はどちらの骨化様式で形成されるか。",
    "options": [
      "軟骨内骨化",
      "膜内骨化"
    ],
    "answer": 0
  },
  {
    "id": 153,
    "book": "toc",
    "unit": "第11章　体腔と漿膜",
    "priority": "mid",
    "type": "recall",
    "q": "胚内体腔は最終的に何と何と何に分割されるか。",
    "options": null,
    "answer": "心膜腔・胸膜腔・腹膜腔"
  },
  {
    "id": 154,
    "book": "toc",
    "unit": "第11章　体腔と漿膜",
    "priority": "mid",
    "type": "recall",
    "q": "横隔膜の主な由来構造は何か。",
    "options": null,
    "answer": "横中隔"
  },
  {
    "id": 155,
    "book": "toc",
    "unit": "第12章　循環器系",
    "priority": "high",
    "type": "recall",
    "q": "心房中隔の形成順序を簡潔に（一次中隔から）。",
    "options": null,
    "answer": "一次中隔→一次孔→二次孔→二次中隔→卵円孔"
  },
  {
    "id": 156,
    "book": "toc",
    "unit": "第12章　循環器系",
    "priority": "high",
    "type": "recall",
    "q": "心臓の発生に神経堤細胞はどのように関与するか。",
    "options": null,
    "answer": "心臓流出路・大血管の形成に関与する"
  },
  {
    "id": 157,
    "book": "toc",
    "unit": "第12章　循環器系",
    "priority": "high",
    "type": "recall",
    "q": "出生後、卵円孔が閉鎖するきっかけは何か。",
    "options": null,
    "answer": "出生後の呼吸開始による左心房圧の上昇"
  },
  {
    "id": 158,
    "book": "toc",
    "unit": "第12章　循環器系",
    "priority": "high",
    "type": "recall",
    "q": "リンパ系はどの血管系から派生して発生するか。",
    "options": null,
    "answer": "静脈系"
  },
  {
    "id": 159,
    "book": "toc",
    "unit": "第13章　消化器系",
    "priority": "mid",
    "type": "recall",
    "q": "消化管の上皮と、筋層・結合組織はそれぞれ何胚葉由来か。",
    "options": null,
    "answer": "上皮＝内胚葉、筋層・結合組織＝（臓側）中胚葉"
  },
  {
    "id": 160,
    "book": "toc",
    "unit": "第13章　消化器系",
    "priority": "mid",
    "type": "recall",
    "q": "口蓋の形成に関わる2つの主要な構造は何か。",
    "options": null,
    "answer": "一次口蓋（正中口蓋突起由来）と二次口蓋（口蓋棚）"
  },
  {
    "id": 161,
    "book": "toc",
    "unit": "第13章　消化器系",
    "priority": "mid",
    "type": "tf",
    "q": "舌の発生には複数の咽頭弓が関与する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0
  },
  {
    "id": 162,
    "book": "toc",
    "unit": "第13章　消化器系",
    "priority": "mid",
    "type": "recall",
    "q": "咽頭嚢は何胚葉由来で、何に分化するか。",
    "options": null,
    "answer": "内胚葉由来。扁桃・副甲状腺・胸腺などに分化する"
  },
  {
    "id": 163,
    "book": "toc",
    "unit": "第13章　消化器系",
    "priority": "mid",
    "type": "recall",
    "q": "網嚢（omental bursa）はどこに形成されるか。",
    "options": null,
    "answer": "胃の背側"
  },
  {
    "id": 164,
    "book": "toc",
    "unit": "第13章　消化器系",
    "priority": "mid",
    "type": "recall",
    "q": "十二指腸の上部と下部で由来する胚葉が異なる理由を簡潔に。",
    "options": null,
    "answer": "上部は前腸由来、下部（十二指腸乳頭以降）は中腸由来のため"
  },
  {
    "id": 165,
    "book": "toc",
    "unit": "第14章　呼吸器系",
    "priority": "mid",
    "type": "recall",
    "q": "喉頭・気管はどの胚葉由来の構造から分化するか。",
    "options": null,
    "answer": "内胚葉（喉頭上皮）＋咽頭弓由来の間葉"
  },
  {
    "id": 166,
    "book": "toc",
    "unit": "第14章　呼吸器系",
    "priority": "mid",
    "type": "mc",
    "q": "肺の組織発生の段階のうち、出生時点ではどの段階まで進んでいるか。",
    "options": [
      "偽腺期",
      "管状期",
      "終末嚢期",
      "肺胞期"
    ],
    "answer": 2
  },
  {
    "id": 167,
    "book": "toc",
    "unit": "第15章　泌尿生殖器系",
    "priority": "mid",
    "type": "recall",
    "q": "セルトリ細胞・ライディッヒ細胞の役割をそれぞれ一言で。",
    "options": null,
    "answer": "セルトリ細胞＝精子形成を支持しAMHを分泌／ライディッヒ細胞＝テストステロンを産生"
  },
  {
    "id": 168,
    "book": "toc",
    "unit": "第15章　泌尿生殖器系",
    "priority": "mid",
    "type": "mc",
    "q": "性腺の下降について、精巣が陰嚢まで下降する時期はいつ頃か。",
    "options": [
      "妊娠初期",
      "妊娠中期",
      "妊娠後期"
    ],
    "answer": 2
  },
  {
    "id": 169,
    "book": "toc",
    "unit": "第15章　泌尿生殖器系",
    "priority": "mid",
    "type": "recall",
    "q": "膀胱・尿道の上皮はどの胚葉由来か。",
    "options": null,
    "answer": "内胚葉"
  },
  {
    "id": 170,
    "book": "toc",
    "unit": "第16章　神経系",
    "priority": "high",
    "type": "mc",
    "q": "脳胞の分化順序として正しいものはどれか。",
    "options": [
      "前脳・中脳・菱脳（第一次脳胞）→終脳・間脳・中脳・後脳・髄脳（第二次脳胞）",
      "終脳・間脳（第一次脳胞）→前脳・中脳・菱脳（第二次脳胞）"
    ],
    "answer": 0
  },
  {
    "id": 171,
    "book": "toc",
    "unit": "第16章　神経系",
    "priority": "high",
    "type": "recall",
    "q": "小脳はどの脳胞に由来するか。",
    "options": null,
    "answer": "後脳（菱脳）"
  },
  {
    "id": 172,
    "book": "toc",
    "unit": "第16章　神経系",
    "priority": "high",
    "type": "recall",
    "q": "大脳基底核はどの脳胞由来か。",
    "options": null,
    "answer": "終脳"
  },
  {
    "id": 173,
    "book": "toc",
    "unit": "第16章　神経系",
    "priority": "high",
    "type": "recall",
    "q": "自律神経の節前線維・節後線維について、有髄・無髄の違いを一言で。",
    "options": null,
    "answer": "節前線維＝有髄、節後線維＝無髄"
  },
  {
    "id": 174,
    "book": "toc",
    "unit": "第17章　顔面および頭頚部",
    "priority": "mid",
    "type": "recall",
    "q": "顔面の初期発生に関与する5つの突起を挙げよ。",
    "options": null,
    "answer": "前頭鼻突起・左右上顎突起・左右下顎突起"
  },
  {
    "id": 175,
    "book": "toc",
    "unit": "第17章　顔面および頭頚部",
    "priority": "mid",
    "type": "recall",
    "q": "軟骨性神経頭蓋と膜性神経頭蓋の違いを一言で。",
    "options": null,
    "answer": "軟骨性＝軟骨内骨化で頭蓋底を形成／膜性＝膜内骨化で頭蓋冠を形成"
  },
  {
    "id": 176,
    "book": "toc",
    "unit": "第17章　顔面および頭頚部",
    "priority": "mid",
    "type": "recall",
    "q": "メッケル軟骨・ライヘルト軟骨はそれぞれ第何咽頭弓由来か。",
    "options": null,
    "answer": "メッケル軟骨＝第1咽頭弓、ライヘルト軟骨＝第2咽頭弓"
  },
  {
    "id": 177,
    "book": "toc",
    "unit": "第18章　眼と耳",
    "priority": "low",
    "type": "recall",
    "q": "水晶体はどの胚葉由来か。",
    "options": null,
    "answer": "外胚葉（表面外胚葉）"
  },
  {
    "id": 178,
    "book": "toc",
    "unit": "第18章　眼と耳",
    "priority": "low",
    "type": "recall",
    "q": "内耳（膜迷路）はどの外胚葉性構造に由来するか。",
    "options": null,
    "answer": "耳胞"
  },
  {
    "id": 179,
    "book": "toc",
    "unit": "第18章　眼と耳",
    "priority": "low",
    "type": "recall",
    "q": "中耳の耳小骨（ツチ骨・キヌタ骨・アブミ骨）はそれぞれ何咽頭弓由来か。",
    "options": null,
    "answer": "ツチ骨・キヌタ骨＝第1咽頭弓、アブミ骨＝第2咽頭弓"
  },
  {
    "id": 180,
    "book": "toc",
    "unit": "第19章　皮膚および付属器",
    "priority": "low",
    "type": "recall",
    "q": "表皮と真皮はそれぞれどの胚葉由来か。",
    "options": null,
    "answer": "表皮＝外胚葉、真皮＝中胚葉"
  },
  {
    "id": 181,
    "book": "toc",
    "unit": "第19章　皮膚および付属器",
    "priority": "low",
    "type": "recall",
    "q": "歯のエナメル質と象牙質はそれぞれ何由来か。",
    "options": null,
    "answer": "エナメル質＝外胚葉、象牙質＝神経堤細胞由来の外胚葉性間葉"
  },
  {
    "id": 182,
    "book": "toc",
    "unit": "第19章　皮膚および付属器",
    "priority": "low",
    "type": "recall",
    "q": "乳腺はどの胚葉由来の構造から発生するか。",
    "options": null,
    "answer": "外胚葉（表皮の肥厚）"
  }
];
