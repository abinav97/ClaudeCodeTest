# Word Translator App

A simple web application that translates English words to Spanish, Tamil, and Korean, with phonetic pronunciation for Tamil and Korean.

## Features

- **English to Spanish Translation**: Instantly translate any English word to Spanish
- **English to Tamil Translation**: Get the Tamil translation of English words
- **English to Korean Translation**: Get the Korean (Hangul) translation of English words
- **Tamil Pronunciation Guide**: See how to pronounce Tamil words using colloquial English (perfect for text messages!)
- **Korean Pronunciation Guide**: See Korean words romanized in English (using Revised Romanization standard)
- **Clean, Modern UI**: Beautiful gradient design with responsive layout
- **Real-time Translation**: Fast translation using the MyMemory Translation API

## How to Use

1. Open `index.html` in any modern web browser
2. Type an English word in the input field (e.g., "hello", "book", "water")
3. Click the "Translate" button or press Enter
4. View your translations:
   - Spanish translation in the first card
   - Tamil translation with pronunciation in the second card
   - Korean translation with romanization in the third card

## Example

**Input:** hello

**Output:**
- Spanish: hola
- Tamil: வணக்கம் (vanakkam)
- Korean: 안녕 (annyeong)

## Technologies Used

- **HTML5**: Structure
- **CSS3**: Styling with gradient backgrounds and responsive design
- **JavaScript**: Translation logic and DOM manipulation
- **MyMemory Translation API**: Free translation service
- **Custom Tamil Transliteration**: Converts Tamil script to phonetic English
- **Korean Romanization**: Converts Hangul to Revised Romanization of Korean

## Features Explained

### Tamil Pronunciation
The app uses a comprehensive Tamil-to-English character mapping to convert Tamil script into a phonetic representation that English speakers can read and pronounce. This is similar to how you might write Tamil words in English text messages (called "Tanglish").

For example:
- நன்றி (Tamil) → "nanri" (pronunciation)
- புத்தகம் (Tamil) → "puththakam" (pronunciation)

### Korean Romanization
The app uses the Revised Romanization of Korean standard to convert Hangul (Korean script) into English pronunciation. This is the official romanization system used in South Korea.

For example:
- 안녕하세요 (Korean) → "annyeonghaseyo" (romanization)
- 감사합니다 (Korean) → "gamsahamnida" (romanization)

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Notes

- Requires internet connection for translations
- Translation quality depends on the MyMemory API
- The Tamil transliteration provides a general phonetic guide and may vary based on regional pronunciation
- The Korean romanization follows the Revised Romanization standard and provides accurate pronunciation guidance

## License

Free to use and modify
