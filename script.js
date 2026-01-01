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
    const pronunciationDiv = document.getElementById('tamilPronunciation');

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
        // Translate to both languages in parallel
        const [spanish, tamil] = await Promise.all([
            translateText(englishWord, 'es'),
            translateText(englishWord, 'ta')
        ]);

        // Transliterate Tamil to English pronunciation
        const tamilPronunciation = transliterateTamil(tamil);

        // Display results
        spanishDiv.textContent = spanish;
        tamilDiv.textContent = tamil;
        pronunciationDiv.textContent = tamilPronunciation;

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
