/* BU BOT İSTEK ÜZERİNE YAPILMIŞ BİR BOTTUR
OLASI DURUMLARDAN BİZ SORUMLULUK KABUL ETMEZ
Telegram / @orgutsahibi
GitHub / ErdemBey1

WhatsSiri SİRİ-ERDEM/BEY

OWNER|ErdemBey
*/

function successfullMessage(msg) {
    return "✅ *WhatsASri:** ```" + msg + "```"
}
function errorMessage(msg) {
    return "❌ *WhatsSiri*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *WhatsSiri*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
