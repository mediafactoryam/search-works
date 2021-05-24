const DATA = [
  {
    place: "Ավետարանոց",
    general: "1",
    coordinates: [39.704676, 46.830425],
    date: { "1-Apr-2021": "1" },
  },
  {
    place: "Թուզարան",
    general: "2",
    coordinates: [null, null],
    date: { "3-Apr-2021": "2" },
  },
  {
    place: "Կարախամբելի",
    general: "1",
    coordinates: [39.60412, 47.281305],
    date: { "7-Apr-2021": "1" },
  },
  {
    place: "Ջաբրաիլ զորամասի վերև",
    general: "7",
    coordinates: [null, null],
    date: { "8-Apr-2021": "7" },
  },
  {
    place: "Մատաղիս",
    general: "2",
    coordinates: [40.321616, 46.7488],
    date: { "8-Apr-2021": "2" },
  },
  {
    place: "Ջաբրաիլ Նարինջ 1-ի մոտ",
    general: "1",
    coordinates: [null, null],
    date: { "13-Apr-2021": "1" },
  },
  {
    place: "Մարջանլու դեպի 300 ՀԴԿ",
    general: "1",
    coordinates: [null, null],
    date: { "13-Apr-2021": "1" },
  },
  {
    place: "Էդիլյու Ուղտաձոր",
    general: "1",
    coordinates: [39.563457, 47.073296],
    date: { "14-Apr-2021": "1" },
  },
  {
    place: "Քյանդ Հորադիզ 127-Մ/Դ հետև",
    general: "1",
    coordinates: [null, null],
    date: { "17-Apr-2021": "1" },
  },
  {
    place: "Ջաբրաիլ 300 ՀԴԿ",
    general: "1",
    coordinates: [null, null],
    date: { "19-Apr-2021": "1" },
  },
  {
    place: "Թութակնորից դեպի աջ Տիզափայտ",
    general: "2",
    coordinates: [39.532299, 46.856613],
    date: { "20-Apr-2021": "2" },
  },
  {
    place: "Հադրութ",
    general: "2",
    coordinates: [39.514213, 47.029975],
    date: { "23-Apr-2021": "2" },
  },
  {
    place: "Մարտակերտ",
    general: "3",
    coordinates: [40.213825, 46.811476],
    date: { "23-Apr-2021": "3" },
  },
  {
    place: "《Արեգասար》",
    general: "1",
    coordinates: [null, null],
    date: { "30-Apr-2021": "1" },
  },
  {
    place: "Ֆիզուլի",
    general: "20",
    coordinates: [39.594462, 47.154993],
    date: { "1-Dec-2020": "17", "3-Dec-2020": "3" },
  },
  {
    place: "Մարմարաձոր",
    general: "2",
    coordinates: [null, null],
    date: { "1-Dec-2020": "2" },
  },
  {
    place: "Մարտունի",
    general: "5",
    coordinates: [39.786994, 47.110698],
    date: {
      "1-Dec-2020": "2",
      "4-Dec-2020": "1",
      "18-Dec-2020": "1",
      "25-Dec-2020": "1",
    },
  },
  {
    place: "Քոչբեկ",
    general: "63",
    coordinates: [null, null],
    date: { "3-Dec-2020": "24", "4-Dec-2020": "24", "5-Dec-2020": "15" },
  },
  {
    place: "Հադրութ",
    general: "10",
    coordinates: [39.514213, 47.029975],
    date: {
      "3-Dec-2020": "5",
      "4-Dec-2020": "1",
      "7-Dec-2020": "2",
      "19-Dec-2020": "1",
      "29-Dec-2020": "1",
    },
  },
  {
    place: "Կարեր(Ֆիզուլի)",
    general: "5",
    coordinates: [null, null],
    date: { "15-Dec-2020": "5" },
  },
  {
    place: "Ղարղաբազար",
    general: "36",
    coordinates: [39.533509, 47.154767],
    date: {
      "3-Dec-2020": "10",
      "6-Dec-2020": "10",
      "8-Dec-2020": "1",
      "11-Dec-2020": "3",
      "16-Dec-2020": "5",
      "17-Dec-2020": "3",
      "22-Dec-2020": "4",
    },
  },
  {
    place: "Ներքին Տյաք",
    general: "12",
    coordinates: [39.507261, 47.033951],
    date: { "3-Dec-2020": "12" },
  },
  {
    place: "Նորաշեն",
    general: "16",
    coordinates: [39.492519, 47.084675],
    date: { "4-Dec-2020": "1", "5-Dec-2020": "11", "20-Dec-2020": "4" },
  },
  {
    place: "Մարտական դիրք N 143, 145 (Ֆիզուլի)",
    general: "2",
    coordinates: [null, null],
    date: { "5-Dec-2020": "2" },
  },
  {
    place: "Կարախամբելի",
    general: "11",
    coordinates: [39.567578, 47.108958],
    date: { "6-Dec-2020": "10", "22-Dec-2020": "1" },
  },
  {
    place: "9կմ Վալյոավան",
    general: "18",
    coordinates: [39.491461, 47.130523],
    date: { "6-Dec-2020": "18" },
  },
  {
    place: "Մատաղիս",
    general: "1",
    coordinates: [39.492519, 47.084675],
    date: { "7-Dec-2020": "1" },
  },
  {
    place: "Թալիշ",
    general: "3",
    coordinates: [40.377837, 46.740604],
    date: { "7-Dec-2020": "2", "8-Dec-2020": "1" },
  },
  {
    place: "Վանք գյուղ",
    general: "11",
    coordinates: [40.04593, 46.551321],
    date: {
      "7-Dec-2020": "2",
      "17-Dec-2020": "5",
      "18-Dec-2020": "2",
      "19-Dec-2020": "1",
      "23-Dec-2020": "1",
    },
  },
  {
    place: "Սոնասար(Կուբաթլու)",
    general: "60",
    coordinates: [39.698404, 46.415713],
    date: { "7-Dec-2020": "8", "8-Dec-2020": "51", "19-Dec-2020": "1" },
  },
  {
    place: "Քանդ Հորադիզ",
    general: "14",
    coordinates: [null, null],
    date: { "7-Dec-2020": "5", "15-Dec-2020": "9" },
  },
  {
    place: "Տոզարան",
    general: "15",
    coordinates: [null, null],
    date: { "7-Dec-2020": "15" },
  },
  {
    place: "Դուլ-դուլ",
    general: "9",
    coordinates: [null, null],
    date: { "8-Dec-2020": "9" },
  },
  {
    place: "Մարտակաերտ Գետակբորյուն",
    general: "3",
    coordinates: [40.204526, 46.811067],
    date: { "10-Dec-2020": "1", "20-Dec-2020": "1", "28-Dec-2020": "1" },
  },
  {
    place: "Նարինջ(Ջաբրաիլ)",
    general: "18",
    coordinates: [null, null],
    date: { "10-Dec-2020": "18" },
  },
  {
    place: "Քյավթառներ",
    general: "18",
    coordinates: [null, null],
    date: { "10-Dec-2020": "2", "15-Dec-2020": "16" },
  },
  {
    place: "9կմ",
    general: "3",
    coordinates: [39.492906, 47.13176],
    date: { "11-Dec-2020": "3" },
  },
  {
    place: "Չհասած Ջուվառլու",
    general: "1",
    coordinates: [39.567578, 47.108958],
    date: { "11-Dec-2020": "1" },
  },
  {
    place: "Ջուվառլու Ֆիզուլի ճանապարհին",
    general: "1",
    coordinates: [39.566152, 47.106936],
    date: { "11-Dec-2020": "1" },
  },
  {
    place: "Ղարղաբազար",
    general: "1",
    coordinates: [39.536826, 47.156275],
    date: { "11-Dec-2020": "1" },
  },
  {
    place: "Ղարղաբազար(գրադի կայան)",
    general: "17",
    coordinates: [39.543726, 47.158156],
    date: { "11-Dec-2020": "17" },
  },
  {
    place: "գոզագոզլու",
    general: "15",
    coordinates: [null, null],
    date: { "15-Dec-2020": "15" },
  },
  {
    place: "չհասած 300 բազա",
    general: "14",
    coordinates: [null, null],
    date: { "15-Dec-2020": "8", "29-Dec-2020": "4", "31-Dec-2020": "2" },
  },
  {
    place: "300 բազա",
    general: "7",
    coordinates: [null, null],
    date: { "15-Dec-2020": "6", "20-Dec-2020": "1" },
  },
  {
    place: "Ջաբրաիլ",
    general: "6",
    coordinates: [null, null],
    date: { "15-Dec-2020": "5", "31-Dec-2020": "1" },
  },
  {
    place: "Նյուզդագ",
    general: "8",
    coordinates: [null, null],
    date: { "16-Dec-2020": "7", "26-Dec-2020": "1" },
  },
  {
    place: "200 բազա",
    general: "5",
    coordinates: [null, null],
    date: { "16-Dec-2020": "5" },
  },
  {
    place: "Բանդզոր",
    general: "2",
    coordinates: [null, null],
    date: { "16-Dec-2020": "2" },
  },
  {
    place: "Խավսլուի տարածք",
    general: "24",
    coordinates: [null, null],
    date: { "16-Dec-2020": "14", "18-Dec-2020": "10" },
  },
  {
    place: "Իլանգադ",
    general: "6",
    coordinates: [null, null],
    date: { "16-Dec-2020": "6" },
  },
  {
    place: "102-103 մարտական դիրքերի ներքևի մաս",
    general: "5",
    coordinates: [null, null],
    date: { "16-Dec-2020": "5" },
  },
  {
    place: "Խծաբերդ",
    general: "9",
    coordinates: [39.546499, 46.76757],
    date: { "16-Dec-2020": "9" },
  },
  {
    place: "Թաղասեր",
    general: "2",
    coordinates: [39.521057, 47.010268],
    date: { "17-Dec-2020": "1", "24-Dec-2020": "1" },
  },
  {
    place: "Վարդաշեն",
    general: "1",
    coordinates: [null, null],
    date: { "17-Dec-2020": "1" },
  },
  {
    place: "Վարդաշենի բարձրունք",
    general: "4",
    coordinates: [null, null],
    date: { "17-Dec-2020": "4" },
  },
  {
    place: "Կյադժակ",
    general: "2",
    coordinates: [null, null],
    date: { "17-Dec-2020": "2" },
  },
  {
    place: "Խանդանդի",
    general: "2",
    coordinates: [null, null],
    date: { "17-Dec-2020": "2" },
  },
  {
    place: "Սոլտանլի",
    general: "15",
    coordinates: [39.356966, 46.68022],
    date: { "17-Dec-2020": "15" },
  },
  {
    place: "Իշիխլու",
    general: "1",
    coordinates: [null, null],
    date: { "17-Dec-2020": "1" },
  },
  {
    place: "Խորնատ",
    general: "6",
    coordinates: [null, null],
    date: { "17-Dec-2020": "2", "18-Dec-2020": "3", "20-Dec-2020": "1" },
  },
  {
    place: "Տող",
    general: "6",
    coordinates: [39.584349, 46.966896],
    date: { "18-Dec-2020": "6" },
  },
  {
    place: "Ֆիզուլի(ՀՈՊ-ի տարածք)",
    general: "8",
    coordinates: [null, null],
    date: { "18-Dec-2020": "3", "22-Dec-2020": "5" },
  },
  {
    place: "Ջաբրաիլի խաչմերուկ (ՃՈ պ-կետ)",
    general: "3",
    coordinates: [null, null],
    date: { "18-Dec-2020": "3" },
  },
  {
    place: "Շախվելի",
    general: "1",
    coordinates: [null, null],
    date: { "18-Dec-2020": "1" },
  },
  {
    place: "9-րդ զաստավ (Խուդաֆելի)",
    general: "1",
    coordinates: [null, null],
    date: { "19-Dec-2020": "1" },
  },
  {
    place: "Իշխանաձորի բարձունքի աշտարակի տակ",
    general: "6",
    coordinates: [null, null],
    date: { "19-Dec-2020": "6" },
  },
  {
    place: "Մեծ Թաղլար",
    general: "6",
    coordinates: [39.621424, 46.954966],
    date: { "20-Dec-2020": "6" },
  },
  {
    place: "Վարդաշատ Կարմրակուճ ճանապարհի",
    general: "7",
    coordinates: [9.529083, 47.009232],
    date: { "20-Dec-2020": "7" },
  },
  {
    place: "Մարտունի-Կոհակ",
    general: "5",
    coordinates: [null, null],
    date: { "21-Dec-2020": "5" },
  },
  {
    place: "Ջուվառլու",
    general: "3",
    coordinates: [39.566271, 47.106821],
    date: { "21-Dec-2020": "3" },
  },
  {
    place: "Սոֆռլու",
    general: "4",
    coordinates: [null, null],
    date: { "22-Dec-2020": "4" },
  },
  {
    place: "Մարտունի Կամար",
    general: "2",
    coordinates: [null, null],
    date: { "23-Dec-2020": "2" },
  },
  {
    place: "Մելիքաշեն",
    general: "5",
    coordinates: [39.52776175444916, 47.08178032458857],
    date: { "23-Dec-2020": "5" },
  },
  {
    place: "Մատաղիս Թալիշ (170 մարտական դիրք)",
    general: "2",
    coordinates: [40.355748, 46.746313],
    date: { "23-Dec-2020": "2" },
  },
  {
    place: "Մատաղիսի «Արցախ» աղբյուր",
    general: "1",
    coordinates: [40.327538, 46.752242],
    date: { "23-Dec-2020": "1" },
  },
  {
    place: "Մարտակերտ N 530 բարձրունք",
    general: "1",
    coordinates: [40.213825, 46.811476],
    date: { "24-Dec-2020": "1" },
  },
  {
    place: "6 ՊՇ 3 ՀԳՄ ՀԴԿ",
    general: "1",
    coordinates: [null, null],
    date: { "24-Dec-2020": "1" },
  },
  {
    place: "Թալիշ ՀԴԿ «Գառնի»",
    general: "1",
    coordinates: [null, null],
    date: { "24-Dec-2020": "1" },
  },
  {
    place: "Բայլանդ",
    general: "3",
    coordinates: [null, null],
    date: { "26-Dec-2020": "3" },
  },
  {
    place: "Մարջանլու",
    general: "1",
    coordinates: [null, null],
    date: { "26-Dec-2020": "1" },
  },
  {
    place: "N 300 Ականանետի կրակային դիրք",
    general: "8",
    coordinates: [null, null],
    date: { "26-Dec-2020": "4", "29-Dec-2020": "4" },
  },
  {
    place: "Թութակ",
    general: "6",
    coordinates: [39.530795, 47.020597],
    date: { "29-Dec-2020": "6" },
  },
  {
    place: "Ջաբրաիլի աշտարակից 2 կմ ներքև",
    general: "2",
    coordinates: [null, null],
    date: { "29-Dec-2020": "2" },
  },
  {
    place: "Ջաբրաիլ-Խորոգլու",
    general: "1",
    coordinates: [null, null],
    date: { "29-Dec-2020": "1" },
  },
  {
    place: "Ջաբրաիլի զինվորատակտիկական դիրք «Մարկոս»",
    general: "3",
    coordinates: [null, null],
    date: { "29-Dec-2020": "3" },
  },
  {
    place: "Սարին շեն",
    general: "1",
    coordinates: [39.513299, 46.985587],
    date: { "29-Dec-2020": "1" },
  },
  {
    place: "Մարտունի գյադուկ",
    general: "2",
    coordinates: [null, null],
    date: { "30-Dec-2020": "2" },
  },
  {
    place: "Մարտունի Ուլյանդուկ",
    general: "1",
    coordinates: [null, null],
    date: { "31-Dec-2020": "1" },
  },
  {
    place: "Իշխանաձոր Ջաբրաիլ ճանապարհ",
    general: "12",
    coordinates: [39.273509, 46.759888],
    date: { "19-Dec-2020": "12" },
  },
  {
    place: "Գոզագոզլու",
    general: "8",
    coordinates: [null, null],
    date: { "1-Jan-2021": "3", "2-Jan-2021": "5" },
  },
  {
    place: "Քանդ Հորադիս",
    general: "6",
    coordinates: [39.45535, 47.231286],
    date: { "1-Jan-2021": "4", "19-Jan-2021": "2" },
  },
  {
    place: "Մարտունի Ուլյան",
    general: "1",
    coordinates: [null, null],
    date: { "2-Jan-2021": "1" },
  },
  {
    place: "Հադրութ Մեղրաղբյուր (թութակ)",
    general: "4",
    coordinates: [39.530918, 47.020627],
    date: { "2-Jan-2021": "4" },
  },
  {
    place: "Կարմրակուճ(ԿամԱԶ-130)",
    general: "4",
    coordinates: [39.537974, 47.01913],
    date: { "3-Jan-2021": "4" },
  },
  {
    place: "Կարմրակուճի մոտակայք",
    general: "2",
    coordinates: [39.538044, 47.019437],
    date: { "3-Jan-2021": "2" },
  },
  {
    place: "«Նարինջ»-ի դիմաց",
    general: "6",
    coordinates: [null, null],
    date: { "3-Jan-2021": "6" },
  },
  {
    place: "Ջաբրաիլի 100 խաչմերուկ",
    general: "1",
    coordinates: [null, null],
    date: { "3-Jan-2021": "1" },
  },
  {
    place: "N 300 ՀԴԿ",
    general: "4",
    coordinates: [null, null],
    date: { "3-Jan-2021": "1", "16-Jan-2021": "3" },
  },
  {
    place: "Հակակու",
    general: "6",
    coordinates: [39.555837, 46.951967],
    date: { "3-Jan-2021": "6" },
  },
  {
    place: "Թութակ-Մեծ շեն ճանապարհին",
    general: "1",
    coordinates: [39.530383, 47.020658],
    date: { "4-Jan-2021": "1" },
  },
  {
    place: "Հադրութ",
    general: "4",
    coordinates: [39.514213, 47.029975],
    date: { "4-Jan-2021": "4" },
  },
  {
    place: "Արգունաշատ",
    general: "1",
    coordinates: [null, null],
    date: { "4-Jan-2021": "1" },
  },
  {
    place: "Թինլի",
    general: "3",
    coordinates: [null, null],
    date: { "4-Jan-2021": "3" },
  },
  {
    place: "Մատաղիս",
    general: "6",
    coordinates: [40.327538, 46.752242],
    date: { "5-Jan-2021": "3", "15-Jan-2021": "2", "29-Jan-2021": "1" },
  },
  {
    place: "Մարտակերտ N530 դիրք",
    general: "2",
    coordinates: [40.213825, 46.811476],
    date: { "5-Jan-2021": "2" },
  },
  {
    place: "Դիզափայտի ճանապարհին",
    general: "6",
    coordinates: [39.532471, 46.854661],
    date: { "7-Jan-2021": "6" },
  },
  {
    place: "Խավսլու-դախտումաս ճանապարհին",
    general: "3",
    coordinates: [null, null],
    date: { "8-Jan-2021": "3" },
  },
  {
    place: "Զանգելան",
    general: "14",
    coordinates: [39.08324, 46.662236],
    date: { "10-Jan-2021": "14" },
  },
  {
    place: "Քարին տակ-Սղնախ չաղմախ",
    general: "4",
    coordinates: [39.731337, 46.777081],
    date: { "11-Jan-2021": "4" },
  },
  {
    place: "Վանք գյուղ",
    general: "1",
    coordinates: [39.510584, 47.018627],
    date: { "11-Jan-2021": "1" },
  },
  {
    place: "Վարդաշատ",
    general: "1",
    coordinates: [39.523525, 46.999572],
    date: { "11-Jan-2021": "1" },
  },
  {
    place: "Նորաշեն",
    general: "1",
    coordinates: [39.495483, 47.080519],
    date: { "11-Jan-2021": "1" },
  },
  {
    place: "Թաղասեռ",
    general: "1",
    coordinates: [39.5189, 47.019063],
    date: { "11-Jan-2021": "1" },
  },
  {
    place: "Ջաբրաիլի 125 մարտական դիրք",
    general: "3",
    coordinates: [null, null],
    date: { "11-Jan-2021": "3" },
  },
  {
    place: "Սարադակ",
    general: "1",
    coordinates: [null, null],
    date: { "11-Jan-2021": "1" },
  },
  {
    place: "Կուբաթլու կալցավոյից ներքև",
    general: "4",
    coordinates: [null, null],
    date: { "11-Jan-2021": "3", "17-Jan-2021": "1" },
  },
  {
    place: "Նյուվադի",
    general: "2",
    coordinates: [null, null],
    date: { "12-Jan-2021": "1", "30-Jan-2021": "1" },
  },
  {
    place: "«Նարինջ»  N1-ի դիմաց",
    general: "4",
    coordinates: [null, null],
    date: { "12-Jan-2021": "4" },
  },
  {
    place: "Ղարղաբազար",
    general: "3",
    coordinates: [39.492906, 47.13176],
    date: { "12-Jan-2021": "2", "16-Jan-2021": "1" },
  },
  {
    place: "Քարին տակ",
    general: "1",
    coordinates: [39.744091, 46.748738],
    date: { "13-Jan-2021": "1" },
  },
  {
    place: "Վանք և Տյաք գյուղերի արանք",
    general: "1",
    coordinates: [39.562683, 47.158832],
    date: { "16-Jan-2021": "1" },
  },
  {
    place: "Ջաբրաիլի վանքի մոտ",
    general: "6",
    coordinates: [39.39987079732529, 47.02038021386328],
    date: { "17-Jan-2021": "2", "28-Jan-2021": "4" },
  },
  {
    place: "Պիրախմեդլի",
    general: "6",
    coordinates: [null, null],
    date: { "18-Jan-2021": "5", "27-Jan-2021": "1" },
  },
  {
    place: "Դավիթ Բեկ",
    general: "1",
    coordinates: [null, null],
    date: { "18-Jan-2021": "1" },
  },
  {
    place: "Քոշպեկ",
    general: "2",
    coordinates: [null, null],
    date: { "18-Jan-2021": "2" },
  },
  {
    place: "Դրախտիկ",
    general: "1",
    coordinates: [39.628264, 47.002144],
    date: { "21-Jan-2021": "1" },
  },
  {
    place: "Ազոխ",
    general: "2",
    coordinates: [39.619472, 46.975566],
    date: { "21-Jan-2021": "2" },
  },
  {
    place: "Ջաբրաիլ-Դաշվեսալի ճանապարհին",
    general: "1",
    coordinates: [null, null],
    date: { "21-Jan-2021": "1" },
  },
  {
    place:
      "Ֆիզուլի-Ղարղաբազա ճանապարհի ձախ մասը խաչմերուկի մոտ Ջուվառլու տանող",
    general: "5",
    coordinates: [39.562683, 47.158832],
    date: { "22-Jan-2021": "5" },
  },
  {
    place: "Բեյլագան",
    general: "30",
    coordinates: [39.767481, 47.600431],
    date: { "23-Jan-2021": "30" },
  },
  {
    place: "Յուխադի Աբդուրախմանլու",
    general: "1",
    coordinates: [null, null],
    date: { "24-Jan-2021": "1" },
  },
  {
    place: "Տումի",
    general: "1",
    coordinates: [39.58834, 46.903008],
    date: { "24-Jan-2021": "1" },
  },
  {
    place: "Մատաղիսի ջրամաբարի մոտ",
    general: "1",
    coordinates: [40.327538, 46.752242],
    date: { "25-Jan-2021": "1" },
  },
  {
    place: "Դորչինար",
    general: "3",
    coordinates: [null, null],
    date: { "25-Jan-2021": "3" },
  },
  {
    place: "9-րդ կմ-ից դեպի  ֆիզուլի ձախ 800մ",
    general: "31",
    coordinates: [null, null],
    date: { "26-Jan-2021": "31" },
  },
  {
    place: "Աշախը Վեսալի (ԿԱՄԱԶ)",
    general: "1",
    coordinates: [null, null],
    date: { "27-Jan-2021": "1" },
  },
  {
    place: "Դիլիխարդա",
    general: "1",
    coordinates: [null, null],
    date: { "27-Jan-2021": "1" },
  },
  {
    place: "Ջաբրաիլի զրամասի մոտ",
    general: "14",
    coordinates: [null, null],
    date: { "28-Jan-2021": "1", "29-Jan-2021": "13" },
  },
  {
    place: "Խավսլու (ՀՀՄ)",
    general: "1",
    coordinates: [null, null],
    date: { "28-Jan-2021": "1" },
  },
  {
    place: "Առայամուխ",
    general: "1",
    coordinates: [null, null],
    date: { "28-Jan-2021": "1" },
  },
  {
    place: "Քավթառ ՊԲ գիծ",
    general: "1",
    coordinates: [null, null],
    date: { "28-Jan-2021": "1" },
  },
  {
    place: "Մարտունի կոխակ",
    general: "1",
    coordinates: [null, null],
    date: { "29-Jan-2021": "1" },
  },
  {
    Կոորդինանտ: "39.429493, 47.102219",
    place: "Վարանդա-Հադրութ-Արա լեռ խաչմերուկի (9կմ) հարակից տարածք",
    general: "",
    coordinates: [null, null],
    date: { "3-May-2021": "1" },
  },
  {
    Կոորդինանտ: "",
    place: "Ընդհանուր",
    general: "",
    coordinates: [null, null],
    date: { "1-May-2021": "1" },
  },
  {
    place: "Մարտակերտ",
    general: "3",
    coordinates: [40.218366, 46.836729],
    date: { "2-Mar-2021": "1", "4-Mar-2021": "2" },
  },
  {
    place: "Հորադիզ",
    general: "1",
    coordinates: [39.451765, 47.227788],
    date: { "3-Mar-2021": "1" },
  },
  {
    place: "Թոզարան 2գիծ ՌՈՎ",
    general: "1",
    coordinates: [null, null],
    date: { "3-Mar-2021": "1" },
  },
  {
    place: "Ֆիզուլի զորամասի հետև",
    general: "3",
    coordinates: [null, null],
    date: { "10-Mar-2021": "3" },
  },
  {
    place: "Մարտունի Ուլյան",
    general: "4",
    coordinates: [null, null],
    date: { "10-Mar-2021": "3", "16-Mar-2021": "1" },
  },
  {
    place: "Ֆիզուլի ՀՈՊ-ի դիրք",
    general: "3",
    coordinates: [null, null],
    date: { "11-Mar-2021": "3" },
  },
  {
    place: "Եղլավանդ",
    general: "2",
    coordinates: [null, null],
    date: { "16-Mar-2021": "2" },
  },
  {
    place: "Հաֆսլու",
    general: "1",
    coordinates: [null, null],
    date: { "18-Mar-2021": "1" },
  },
  {
    place: "Կարմիր Շուկա",
    general: "15",
    coordinates: [40.321616, 46.7488],
    date: { "19-Mar-2021": "15" },
  },
  {
    place: "Քյանդ Հորադիզ դեպի Նյուզգյար",
    general: "5",
    coordinates: [39.456072, 47.331051],
    date: { "27-Mar-2021": "5" },
  },
  {
    place: "Սղնախ",
    general: "1",
    coordinates: [39.456072, 47.331051],
    date: { "28-Mar-2021": "1" },
  },
  {
    place: "Էդիլու Ուղտաձոր",
    general: "1",
    coordinates: [39.561113, 47.075054],
    date: { "31-Mar-2021": "1" },
  },
  {
    place: "Յար պերախմեդլի",
    general: "1",
    coordinates: [null, null],
    date: { "31-Mar-2021": "1" },
  },
  {
    place: "Շուշի",
    general: "184",
    coordinates: [39.769919, 46.746325],
    date: {
      "13-Nov-2020": "114",
      "14-Nov-2020": "15",
      "15-Nov-2020": "22",
      "16-Nov-2020": "24",
      "18-Nov-2020": "1",
      "24-Nov-2020": "1",
      "25-Nov-2020": "1",
      "27-Nov-2020": "5",
      "28-Nov-2020": "1",
    },
  },
  {
    place: "Մարտունի",
    general: "115",
    coordinates: [39.786994, 47.110698],
    date: {
      "13-Nov-2020": "5",
      "16-Nov-2020": "5",
      "17-Nov-2020": "15",
      "18-Nov-2020": "25",
      "19-Nov-2020": "11",
      "20-Nov-2020": "29",
      "21-Nov-2020": "15",
      "22-Nov-2020": "9",
      "25-Nov-2020": "1",
    },
  },
  {
    place: "Ակնաղբյուր",
    general: "1",
    coordinates: [39.706931, 46.857483],
    date: { "13-Nov-2020": "1" },
  },
  {
    place: "Ղայբալու",
    general: "1",
    coordinates: [39.777058, 46.72995],
    date: { "14-Nov-2020": "1" },
  },
  {
    place: "Թաղավարդ",
    general: "3",
    coordinates: [39.671768, 46.914679],
    date: { "14-Nov-2020": "3" },
  },
  {
    place: "Մատաղիս",
    general: "96",
    coordinates: [40.325002, 46.746504],
    date: {
      "15-Nov-2020": "16",
      "17-Nov-2020": "1",
      "18-Nov-2020": "27",
      "19-Nov-2020": "17",
      "22-Nov-2020": "26",
      "26-Nov-2020": "2",
      "28-Nov-2020": "7",
    },
  },
  {
    place: "Ակնա",
    general: "1",
    coordinates: [39.989397, 46.937997],
    date: { "16-Nov-2020": "1" },
  },
  {
    place: "Մարտակերտ",
    general: "1",
    coordinates: [40.20313, 46.811372],
    date: { "29-Nov-2020": "1" },
  },
  {
    place: "Սղնախ",
    general: "4",
    coordinates: [39.720919, 46.804118],
    date: { "17-Nov-2020": "4" },
  },
  {
    place: "Զարդարաշեն",
    general: "7",
    coordinates: [39.671487, 46.884778],
    date: { "19-Nov-2020": "3", "23-Nov-2020": "4" },
  },
  {
    place: "Խազազ բարձունք ղաջար",
    general: "9",
    coordinates: [null, null],
    date: { "20-Nov-2020": "9" },
  },
  {
    place: "Շոշ",
    general: "6",
    coordinates: [39.764212, 46.79268],
    date: { "21-Nov-2020": "6" },
  },
  {
    place: "Ավետարանոց",
    general: "1",
    coordinates: [39.705435, 46.83579],
    date: { "21-Nov-2020": "1" },
  },
  {
    place: "Շեխեր Դրախտիկ Ջիվանի",
    general: "32",
    coordinates: [39.644612, 47.019262],
    date: { "22-Nov-2020": "32" },
  },
  {
    place: "Վանք(անտառներ)",
    general: "17",
    coordinates: [39.510873, 47.015627],
    date: { "23-Nov-2020": "17" },
  },
  {
    place: "Զառսլու",
    general: "5",
    coordinates: [null, null],
    date: { "27-Nov-2020": "1", "28-Nov-2020": "4" },
  },
  {
    place: "Թութակ",
    general: "11",
    coordinates: [39.530975, 47.020573],
    date: { "28-Nov-2020": "11" },
  },
  {
    place: "Կուբաթլու",
    general: "26",
    coordinates: [39.33711256608965, 46.58630731818259],
    date: { "28-Nov-2020": "26" },
  },
  {
    place: "Ղարղաբազար Ֆիզուլի ուլիտկա 1)",
    general: "4",
    coordinates: [39.575024, 47.158386],
    date: { "1-Feb-2021": "4" },
  },
  {
    place: "Ղարղաբազար Ֆիզուլի ուլիտկա 3)",
    general: "5",
    coordinates: [39.5749, 47.158171],
    date: { "1-Feb-2021": "5" },
  },
  {
    place: "Հադրութ",
    general: "1",
    coordinates: [39.515747, 47.026339],
    date: { "2-Feb-2021": "1" },
  },
  {
    place: "Մարտունի",
    general: "2",
    coordinates: [39.27076, 46.719768],
    date: { "3-Feb-2021": "2" },
  },
  {
    place: "Ֆիզուլի ՀՈՊ-ի հետևի մաս",
    general: "1",
    coordinates: [null, null],
    date: { "5-Feb-2021": "1" },
  },
  {
    place: "Մեխմուդլու",
    general: "1",
    coordinates: [null, null],
    date: { "7-Feb-2021": "1" },
  },
  {
    place: "Գոջագոզլու",
    general: "2",
    coordinates: [null, null],
    date: { "7-Feb-2021": "1", "10-Feb-2021": "1" },
  },
  {
    place: "Յախարի Այբասալի",
    general: "2",
    coordinates: [null, null],
    date: { "10-Feb-2021": "2" },
  },
  {
    place: "5-ՀԴԿ Ֆիզուլի Կարախամբելի 143 մարտական դիրքի մոտ",
    general: "1",
    coordinates: [39.609487, 47.247093],
    date: { "10-Feb-2021": "1" },
  },
  {
    place: "Կուբատլու",
    general: "4",
    coordinates: [39.344032, 46.579725],
    date: { "13-Feb-2021": "4" },
  },
  {
    place: "Իշխանաձոր",
    general: "3",
    coordinates: [39.27076, 46.719768],
    date: { "12-Feb-2021": "3" },
  },
  {
    place: "Մատաղիս",
    general: "1",
    coordinates: [39.27076, 46.719768],
    date: { "15-Feb-2021": "1" },
  },
  {
    place: "Կարմիր շուկա",
    general: "106",
    coordinates: [39.675879, 46.948893],
    date: { "16-Feb-2021": "106" },
  },
  {
    place: "Ղարղաբազար Ֆիզուլի ուլիտկա 1)",
    general: "4",
    coordinates: [39.575024, 47.158386],
    date: { "1-Feb-2021": "4" },
  },
  {
    place: "Ղարղաբազար Ֆիզուլի ուլիտկա 3)",
    general: "5",
    coordinates: [39.5749, 47.158171],
    date: { "1-Feb-2021": "5" },
  },
  {
    place: "Հադրութ",
    general: "1",
    coordinates: [39.515747, 47.026339],
    date: { "2-Feb-2021": "1" },
  },
  {
    place: "Մարտունի",
    general: "2",
    coordinates: [39.27076, 46.719768],
    date: { "3-Feb-2021": "2" },
  },
  {
    place: "Ֆիզուլի ՀՈՊ-ի հետևի մաս",
    general: "1",
    coordinates: [null, null],
    date: { "5-Feb-2021": "1" },
  },
  {
    place: "Մեխմուդլու",
    general: "1",
    coordinates: [null, null],
    date: { "7-Feb-2021": "1" },
  },
  {
    place: "Գոջագոզլու",
    general: "2",
    coordinates: [null, null],
    date: { "7-Feb-2021": "1", "10-Feb-2021": "1" },
  },
  {
    place: "Յախարի Այբասալի",
    general: "2",
    coordinates: [null, null],
    date: { "10-Feb-2021": "2" },
  },
  {
    place: "5-ՀԴԿ Ֆիզուլի Կարախամբելի 143 մարտական դիրքի մոտ",
    general: "1",
    coordinates: [39.609487, 47.247093],
    date: { "10-Feb-2021": "1" },
  },
  {
    place: "Կուբատլու",
    general: "4",
    coordinates: [39.344032, 46.579725],
    date: { "13-Feb-2021": "4" },
  },
  {
    place: "Իշխանաձոր",
    general: "3",
    coordinates: [39.27076, 46.719768],
    date: { "12-Feb-2021": "3" },
  },
  {
    place: "Մատաղիս",
    general: "1",
    coordinates: [39.27076, 46.719768],
    date: { "15-Feb-2021": "1" },
  },
  {
    place: "Կարմիր շուկա",
    general: "106",
    coordinates: [39.675879, 46.948893],
    date: { "16-Feb-2021": "106" },
  },
];
