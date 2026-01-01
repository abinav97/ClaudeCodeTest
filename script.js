// Tamil character to English pronunciation mapping
const tamilToEnglish = {
    'அ': 'a', 'ஆ': 'aa', 'இ': 'i', 'ஈ': 'ee', 'உ': 'u', 'ஊ': 'oo', 'எ': 'e', 'ஏ': 'ae',
    'ஐ': 'ai', 'ஒ': 'o', 'ஓ': 'oh', 'ஔ': 'au',
    'க': 'ka', 'கா': 'kaa', 'கி': 'ki', 'கீ': 'kee', 'கு': 'ku', 'கூ': 'koo', 'கெ': 'ke',
    'கே': 'kae', 'கை': 'kai', 'கொ': 'ko', 'கோ': 'koh', 'கௌ': 'kau', 'க்': 'k',
    'ங': 'nga', 'ஙா': 'ngaa', 'ஙி': 'ngi', 'ஙீ': 'ngee', 'ஙு': 'ngu', 'ஙூ': 'ngoo',
    'ச': 'cha', 'சா': 'chaa', 'சி': 'chi', 'சீ': 'chee', 'சு': 'chu', 'சூ': 'choo', 'செ': 'che',
    'சே': 'chae', 'சை': 'chai', 'சொ': 'cho', 'சோ': 'choh', 'சௌ': 'chau', 'ச்': 'ch',
    'ஞ': 'nja', 'ஞா': 'njaa', 'ஞி': 'nji', 'ஞீ': 'njee', 'ஞு': 'nju', 'ஞூ': 'njoo',
    'ட': 'ta', 'டா': 'taa', 'டி': 'ti', 'டீ': 'tee', 'டு': 'tu', 'டூ': 'too', 'டெ': 'te',
    'டே': 'tae', 'டை': 'tai', 'டொ': 'to', 'டோ': 'toh', 'டௌ': 'tau', 'ட்': 't',
    'ண': 'na', 'ணா': 'naa', 'ணி': 'ni', 'ணீ': 'nee', 'ணு': 'nu', 'ணூ': 'noo',
    'த': 'tha', 'தா': 'thaa', 'தி': 'thi', 'தீ': 'thee', 'து': 'thu', 'தூ': 'thoo', 'தெ': 'the',
    'தே': 'thae', 'தை': 'thai', 'தொ': 'tho', 'தோ': 'thoh', 'தௌ': 'thau', 'த்': 'th',
    'ந': 'na', 'நா': 'naa', 'நி': 'ni', 'நீ': 'nee', 'நு': 'nu', 'நூ': 'noo', 'நெ': 'ne',
    'நே': 'nae', 'நை': 'nai', 'நொ': 'no', 'நோ': 'noh', 'நௌ': 'nau', 'ந்': 'n',
    'ப': 'pa', 'பா': 'paa', 'பி': 'pi', 'பீ': 'pee', 'பு': 'pu', 'பூ': 'poo', 'பெ': 'pe',
    'பே': 'pae', 'பை': 'pai', 'பொ': 'po', 'போ': 'poh', 'பௌ': 'pau', 'ப்': 'p',
    'ம': 'ma', 'மா': 'maa', 'மி': 'mi', 'மீ': 'mee', 'மு': 'mu', 'மூ': 'moo', 'மெ': 'me',
    'மே': 'mae', 'மை': 'mai', 'மொ': 'mo', 'மோ': 'moh', 'மௌ': 'mau', 'ம்': 'm',
    'ய': 'ya', 'யா': 'yaa', 'யி': 'yi', 'யீ': 'yee', 'யு': 'yu', 'யூ': 'yoo', 'யெ': 'ye',
    'யே': 'yae', 'யை': 'yai', 'யொ': 'yo', 'யோ': 'yoh', 'யௌ': 'yau', 'ய்': 'y',
    'ர': 'ra', 'ரா': 'raa', 'ரி': 'ri', 'ரீ': 'ree', 'ரு': 'ru', 'ரூ': 'roo', 'ரெ': 're',
    'ரே': 'rae', 'ரை': 'rai', 'ரொ': 'ro', 'ரோ': 'roh', 'ரௌ': 'rau', 'ர்': 'r',
    'ல': 'la', 'லா': 'laa', 'லி': 'li', 'லீ': 'lee', 'லு': 'lu', 'லூ': 'loo', 'லெ': 'le',
    'லே': 'lae', 'லை': 'lai', 'லொ': 'lo', 'லோ': 'loh', 'லௌ': 'lau', 'ல்': 'l',
    'வ': 'va', 'வா': 'vaa', 'வி': 'vi', 'வீ': 'vee', 'வு': 'vu', 'வூ': 'voo', 'வெ': 've',
    'வே': 'vae', 'வை': 'vai', 'வொ': 'vo', 'வோ': 'voh', 'வௌ': 'vau', 'வ்': 'v',
    'ழ': 'zha', 'ழா': 'zhaa', 'ழி': 'zhi', 'ழீ': 'zhee', 'ழு': 'zhu', 'ழூ': 'zhoo', 'ழெ': 'zhe',
    'ழே': 'zhae', 'ழை': 'zhai', 'ழொ': 'zho', 'ழோ': 'zhoh', 'ழௌ': 'zhau', 'ழ்': 'zh',
    'ள': 'la', 'ளா': 'laa', 'ளி': 'li', 'ளீ': 'lee', 'ளு': 'lu', 'ளூ': 'loo', 'ளெ': 'le',
    'ளே': 'lae', 'ளை': 'lai', 'ளொ': 'lo', 'ளோ': 'loh', 'ளௌ': 'lau', 'ள்': 'l',
    'ற': 'ra', 'றா': 'raa', 'றி': 'ri', 'றீ': 'ree', 'று': 'ru', 'றூ': 'roo', 'றெ': 're',
    'றே': 'rae', 'றை': 'rai', 'றொ': 'ro', 'றோ': 'roh', 'றௌ': 'rau', 'ற்': 'r',
    'ன': 'na', 'னா': 'naa', 'னி': 'ni', 'னீ': 'nee', 'னு': 'nu', 'னூ': 'noo', 'னெ': 'ne',
    'னே': 'nae', 'னை': 'nai', 'னொ': 'no', 'னோ': 'noh', 'னௌ': 'nau', 'ன்': 'n',
    'ஜ': 'ja', 'ஜா': 'jaa', 'ஜி': 'ji', 'ஜீ': 'jee', 'ஜு': 'ju', 'ஜூ': 'joo',
    'ஷ': 'sha', 'ஷா': 'shaa', 'ஷி': 'shi', 'ஷீ': 'shee', 'ஷு': 'shu', 'ஷூ': 'shoo',
    'ஸ': 'sa', 'ஸா': 'saa', 'ஸி': 'si', 'ஸீ': 'see', 'ஸு': 'su', 'ஸூ': 'soo',
    'ஹ': 'ha', 'ஹா': 'haa', 'ஹி': 'hi', 'ஹீ': 'hee', 'ஹு': 'hu', 'ஹூ': 'hoo',
    'ா': 'aa', 'ி': 'i', 'ீ': 'ee', 'ு': 'u', 'ூ': 'oo', 'ெ': 'e', 'ே': 'ae',
    'ை': 'ai', 'ொ': 'o', 'ோ': 'oh', 'ௌ': 'au', '்': ''
};

// Korean character to English pronunciation mapping (Revised Romanization)
const koreanToEnglish = {
    // Basic consonants
    'ㄱ': 'g', 'ㄲ': 'kk', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄸ': 'tt', 'ㄹ': 'r', 'ㅁ': 'm',
    'ㅂ': 'b', 'ㅃ': 'pp', 'ㅅ': 's', 'ㅆ': 'ss', 'ㅇ': '', 'ㅈ': 'j', 'ㅉ': 'jj',
    'ㅊ': 'ch', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h',
    // Vowels
    'ㅏ': 'a', 'ㅐ': 'ae', 'ㅑ': 'ya', 'ㅒ': 'yae', 'ㅓ': 'eo', 'ㅔ': 'e',
    'ㅕ': 'yeo', 'ㅖ': 'ye', 'ㅗ': 'o', 'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe',
    'ㅛ': 'yo', 'ㅜ': 'u', 'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi', 'ㅠ': 'yu',
    'ㅡ': 'eu', 'ㅢ': 'ui', 'ㅣ': 'i',
    // Common syllables - Basic combinations
    '가': 'ga', '각': 'gak', '간': 'gan', '갈': 'gal', '감': 'gam', '갑': 'gap', '강': 'gang',
    '개': 'gae', '거': 'geo', '건': 'geon', '걸': 'geol', '검': 'geom', '게': 'ge', '겨': 'gyeo',
    '격': 'gyeok', '견': 'gyeon', '결': 'gyeol', '경': 'gyeong', '고': 'go', '곡': 'gok',
    '골': 'gol', '공': 'gong', '과': 'gwa', '관': 'gwan', '괄': 'gwal', '광': 'gwang',
    '교': 'gyo', '구': 'gu', '국': 'guk', '군': 'gun', '굴': 'gul', '궁': 'gung', '권': 'gwon',
    '귀': 'gwi', '규': 'gyu', '균': 'gyun', '그': 'geu', '극': 'geuk', '근': 'geun', '글': 'geul',
    '금': 'geum', '급': 'geup', '긍': 'geung', '기': 'gi', '긴': 'gin', '길': 'gil', '김': 'gim',
    '까': 'kka', '깨': 'kkae', '꺼': 'kkeo', '께': 'kke', '꼬': 'kko', '꾸': 'kku', '끄': 'kkeu',
    '나': 'na', '난': 'nan', '날': 'nal', '남': 'nam', '납': 'nap', '낭': 'nang', '내': 'nae',
    '너': 'neo', '널': 'neol', '네': 'ne', '녀': 'nyeo', '년': 'nyeon', '념': 'nyeom', '노': 'no',
    '농': 'nong', '뇌': 'noe', '누': 'nu', '눈': 'nun', '뉴': 'nyu', '느': 'neu', '늘': 'neul',
    '니': 'ni', '닌': 'nin',
    '다': 'da', '단': 'dan', '달': 'dal', '담': 'dam', '답': 'dap', '당': 'dang', '대': 'dae',
    '더': 'deo', '덕': 'deok', '데': 'de', '도': 'do', '독': 'dok', '돈': 'don', '동': 'dong',
    '두': 'du', '둔': 'dun', '뒤': 'dwi', '드': 'deu', '득': 'deuk', '들': 'deul', '등': 'deung',
    '디': 'di', '따': 'tta', '때': 'ttae', '또': 'tto', '뚜': 'ttu',
    '라': 'ra', '락': 'rak', '란': 'ran', '람': 'ram', '랑': 'rang', '래': 'rae', '러': 'reo',
    '럭': 'reok', '런': 'reon', '럴': 'reol', '레': 're', '려': 'ryeo', '력': 'ryeok', '련': 'ryeon',
    '렬': 'ryeol', '령': 'ryeong', '로': 'ro', '록': 'rok', '론': 'ron', '롱': 'rong', '료': 'ryo',
    '루': 'ru', '룡': 'ryong', '류': 'ryu', '륙': 'ryuk', '률': 'ryul', '륭': 'ryung', '르': 'reu',
    '른': 'reun', '를': 'reul', '름': 'reum', '리': 'ri', '린': 'rin', '림': 'rim', '립': 'rip',
    '마': 'ma', '만': 'man', '말': 'mal', '망': 'mang', '매': 'mae', '먹': 'meok', '멀': 'meol',
    '메': 'me', '며': 'myeo', '면': 'myeon', '명': 'myeong', '모': 'mo', '목': 'mok', '못': 'mot',
    '몰': 'mol', '무': 'mu', '묵': 'muk', '문': 'mun', '물': 'mul', '미': 'mi', '민': 'min',
    '바': 'ba', '박': 'bak', '반': 'ban', '발': 'bal', '밤': 'bam', '밥': 'bap', '방': 'bang',
    '배': 'bae', '백': 'baek', '번': 'beon', '벌': 'beol', '범': 'beom', '법': 'beop', '베': 'be',
    '벽': 'byeok', '변': 'byeon', '별': 'byeol', '병': 'byeong', '보': 'bo', '복': 'bok',
    '본': 'bon', '봉': 'bong', '부': 'bu', '북': 'buk', '분': 'bun', '불': 'bul', '비': 'bi',
    '빈': 'bin', '빨': 'ppal', '뻐': 'ppeo', '뽀': 'ppo', '뿌': 'ppu',
    '사': 'sa', '산': 'san', '살': 'sal', '삼': 'sam', '상': 'sang', '새': 'sae', '색': 'saek',
    '서': 'seo', '석': 'seok', '선': 'seon', '설': 'seol', '섬': 'seom', '성': 'seong', '세': 'se',
    '소': 'so', '속': 'sok', '손': 'son', '솔': 'sol', '송': 'song', '수': 'su', '숙': 'suk',
    '순': 'sun', '술': 'sul', '숨': 'sum', '습': 'seup', '승': 'seung', '시': 'si', '신': 'sin',
    '실': 'sil', '심': 'sim', '십': 'sip', '싸': 'ssa', '써': 'sseo', '쏘': 'sso', '쑤': 'ssu',
    '아': 'a', '악': 'ak', '안': 'an', '알': 'al', '암': 'am', '압': 'ap', '앙': 'ang', '애': 'ae',
    '야': 'ya', '약': 'yak', '양': 'yang', '어': 'eo', '언': 'eon', '얼': 'eol', '에': 'e',
    '여': 'yeo', '역': 'yeok', '연': 'yeon', '열': 'yeol', '염': 'yeom', '영': 'yeong', '예': 'ye',
    '오': 'o', '옥': 'ok', '온': 'on', '올': 'ol', '옹': 'ong', '와': 'wa', '완': 'wan', '왕': 'wang',
    '외': 'oe', '요': 'yo', '용': 'yong', '우': 'u', '욱': 'uk', '운': 'un', '울': 'ul', '웅': 'ung',
    '워': 'wo', '원': 'won', '월': 'wol', '위': 'wi', '유': 'yu', '육': 'yuk', '율': 'yul', '은': 'eun',
    '을': 'eul', '음': 'eum', '읍': 'eup', '응': 'eung', '의': 'ui', '이': 'i', '인': 'in', '일': 'il',
    '임': 'im', '입': 'ip',
    '자': 'ja', '작': 'jak', '잔': 'jan', '잘': 'jal', '잠': 'jam', '장': 'jang', '재': 'jae',
    '저': 'jeo', '적': 'jeok', '전': 'jeon', '절': 'jeol', '점': 'jeom', '정': 'jeong', '제': 'je',
    '조': 'jo', '족': 'jok', '존': 'jon', '졸': 'jol', '종': 'jong', '좌': 'jwa', '주': 'ju',
    '죽': 'juk', '준': 'jun', '줄': 'jul', '중': 'jung', '쥐': 'jwi', '즈': 'jeu', '즉': 'jeuk',
    '즌': 'jeun', '즐': 'jeul', '증': 'jeung', '지': 'ji', '직': 'jik', '진': 'jin', '질': 'jil',
    '짐': 'jim', '집': 'jip', '짜': 'jja', '째': 'jjae', '쪼': 'jjo', '찌': 'jji',
    '차': 'cha', '착': 'chak', '찬': 'chan', '참': 'cham', '창': 'chang', '채': 'chae', '처': 'cheo',
    '척': 'cheok', '천': 'cheon', '철': 'cheol', '첨': 'cheom', '청': 'cheong', '체': 'che',
    '초': 'cho', '촉': 'chok', '촌': 'chon', '총': 'chong', '최': 'choe', '추': 'chu', '축': 'chuk',
    '출': 'chul', '충': 'chung', '취': 'chwi', '측': 'cheuk', '치': 'chi', '친': 'chin', '칠': 'chil',
    '침': 'chim',
    '카': 'ka', '칸': 'kan', '캐': 'kae', '커': 'keo', '컨': 'keon', '케': 'ke', '코': 'ko', '콘': 'kon',
    '쿠': 'ku', '크': 'keu', '큰': 'keun', '키': 'ki',
    '타': 'ta', '탁': 'tak', '탄': 'tan', '탈': 'tal', '태': 'tae', '택': 'taek', '터': 'teo',
    '테': 'te', '토': 'to', '통': 'tong', '투': 'tu', '트': 'teu', '특': 'teuk', '티': 'ti',
    '파': 'pa', '판': 'pan', '팔': 'pal', '패': 'pae', '퍼': 'peo', '편': 'pyeon', '평': 'pyeong',
    '페': 'pe', '포': 'po', '표': 'pyo', '푸': 'pu', '프': 'peu', '피': 'pi',
    '하': 'ha', '학': 'hak', '한': 'han', '할': 'hal', '함': 'ham', '합': 'hap', '항': 'hang',
    '해': 'hae', '핵': 'haek', '허': 'heo', '헌': 'heon', '헬': 'hel', '험': 'heom', '혁': 'hyeok',
    '현': 'hyeon', '혈': 'hyeol', '형': 'hyeong', '혜': 'hye', '호': 'ho', '혹': 'hok', '혼': 'hon',
    '홀': 'hol', '홍': 'hong', '화': 'hwa', '확': 'hwak', '환': 'hwan', '활': 'hwal', '황': 'hwang',
    '회': 'hoe', '효': 'hyo', '후': 'hu', '훈': 'hun', '휘': 'hwi', '휴': 'hyu', '흐': 'heu',
    '흔': 'heun', '흘': 'heul', '흠': 'heum', '흥': 'heung', '히': 'hi'
};

// Function to romanize Korean (Hangul) to English
function romanizeKorean(koreanText) {
    let result = '';

    for (let i = 0; i < koreanText.length; i++) {
        const char = koreanText[i];

        if (koreanToEnglish[char]) {
            result += koreanToEnglish[char];
        } else if (char === ' ') {
            result += ' ';
        } else {
            // If character not in mapping, keep it as is
            result += char;
        }
    }

    return result;
}

// Function to transliterate Tamil to English
function transliterateTamil(tamilText) {
    let result = '';
    let i = 0;

    while (i < tamilText.length) {
        let matched = false;

        // Try to match 2-character combinations first
        if (i < tamilText.length - 1) {
            const twoChar = tamilText.substring(i, i + 2);
            if (tamilToEnglish[twoChar]) {
                result += tamilToEnglish[twoChar];
                i += 2;
                matched = true;
            }
        }

        // If no 2-char match, try single character
        if (!matched) {
            const oneChar = tamilText[i];
            if (tamilToEnglish[oneChar]) {
                result += tamilToEnglish[oneChar];
            } else if (oneChar === ' ') {
                result += ' ';
            } else {
                result += oneChar;
            }
            i++;
        }
    }

    return result;
}

// Function to translate text using MyMemory Translation API
async function translateText(text, targetLang) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.responseStatus === 200 && data.responseData.translatedText) {
            return data.responseData.translatedText;
        } else {
            throw new Error('Translation failed');
        }
    } catch (error) {
        throw new Error(`Failed to translate to ${targetLang}: ${error.message}`);
    }
}

// Main translation function
async function translate() {
    const englishWord = document.getElementById('englishWord').value.trim();
    const resultsDiv = document.getElementById('results');
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const spanishDiv = document.getElementById('spanishTranslation');
    const tamilDiv = document.getElementById('tamilTranslation');
    const tamilPronunciationDiv = document.getElementById('tamilPronunciation');
    const koreanDiv = document.getElementById('koreanTranslation');
    const koreanPronunciationDiv = document.getElementById('koreanPronunciation');

    // Clear previous results
    errorDiv.style.display = 'none';
    resultsDiv.style.display = 'none';

    // Validate input
    if (!englishWord) {
        errorDiv.textContent = 'Please enter a word to translate.';
        errorDiv.style.display = 'block';
        return;
    }

    // Show loading
    loadingDiv.style.display = 'block';

    try {
        // Translate to all three languages in parallel
        const [spanish, tamil, korean] = await Promise.all([
            translateText(englishWord, 'es'),
            translateText(englishWord, 'ta'),
            translateText(englishWord, 'ko')
        ]);

        // Transliterate Tamil and Korean to English pronunciation
        const tamilPronunciation = transliterateTamil(tamil);
        const koreanPronunciation = romanizeKorean(korean);

        // Display results
        spanishDiv.textContent = spanish;
        tamilDiv.textContent = tamil;
        tamilPronunciationDiv.textContent = tamilPronunciation;
        koreanDiv.textContent = korean;
        koreanPronunciationDiv.textContent = koreanPronunciation;

        // Hide loading and show results
        loadingDiv.style.display = 'none';
        resultsDiv.style.display = 'grid';

    } catch (error) {
        loadingDiv.style.display = 'none';
        errorDiv.textContent = error.message;
        errorDiv.style.display = 'block';
    }
}

// Event listeners
document.getElementById('translateBtn').addEventListener('click', translate);

document.getElementById('englishWord').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        translate();
    }
});
