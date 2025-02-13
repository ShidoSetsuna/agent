// "source_lang_user_selected":"ja"
// "target_lang" "en"
(function () {
  var sourceLanguage, targetLanguage, regionVar, id;
  function init(sl, tl) {
    id = 1e4 * Math.round(1e4 * Math.random()); // from utils
    setSrc(sl);
    setDst(tl);
  }

  async function translate(str, sl, tl, stop) {
    return createRequest(str, sl, tl).then(async (v) => {
      console.log("DeepL Response:", v);
      if (typeof v === "string") {
        return v;
      } else if (v.translations !== undefined) {
        return v.translations[0].text;
      } else {
        if (stop === true) {
          return v.error ? v.error.message : "Unknown Error";
        } else {
          if (v.error !== undefined && v.error.code === 1042902) {
            await cookieStore.delete({ url: "https://www.deepl.com/" });
            return translate(str, undefined, undefined, true);
          } else {
            console.error("DeepL JSON Parse Error:", v);
            return "ERROR";
          }
        }
      }
    });
  }

  const API_KEY = "YOUR_DEEPL_API_KEY_HERE"; // Replace with your DeepL API key
  const DEEPL_API_URL = "https://api-free.deepl.com/v2/translate"; // Free API endpoint

  async function createRequest(str, sl, tl) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay to prevent rate limits

    const response = await fetch(DEEPL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `DeepL-Auth-Key ${API_KEY}`,
      },
      body: JSON.stringify({
        text: [str], // Text to be translated
        source_lang: sl || "JA", // Default: Japanese
        target_lang: tl || "EN", // Default: English
      }),
    });

    if (!response.ok) {
      console.error("DeepL API Error:", response.status, response.statusText);
      return "Translation Error";
    }

    try {
      const data = await response.json(); // Parse JSON response
      const translatedText = data.translations[0].text; // Extract translation
      console.log(translatedText); // Log only the final translation
      return translatedText; // Return only the translated text
    } catch (error) {
      console.error("DeepL JSON Parse Error:", error);
      return "Translation Error";
    }
  }

  function setSrc(v) {
    v = fixSrc(v);
    sourceLanguage = typeof v === "string" ? v : "ja";
  }

  function setDst(v) {
    v = fixDst(v);
    targetLanguage = typeof v === "string" ? v : "en";
    regionVar = targetLanguage === "en" ? '"en-US"' : "null";
  }

  function fixSrc(v) {
    if (v === "auto") v = "";
    else if (v === "zh-CN") v = "zh";
    else if (v === "zh-TW") v = "zh";
    return v;
  }

  function fixDst(v) {
    if (v === "vi" || v === "auto") v = "en"; // Vietnamese is not supported
    else if (v === "zh-CN") v = "zh";
    else if (v === "zh-TW") v = "zh";
    return v;
  }

  if (typeof module !== "undefined") {
    module.exports = { init, translate, setSrc, setDst, createRequest };
  } else {
    init();
    globalThis._init = init;
    globalThis._trans = translate;
  }
})();
