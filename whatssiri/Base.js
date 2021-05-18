  
/* BU BOT İSTEK ÜZERİNE YAPILMIŞ BİR BOTTUR
OLASI DURUMLARDAN BİZ SORUMLULUK KABUL ETMEZ
Telegram / @bodrumlubebekk
GitHub / bodrumlu48
Whatsİmperius imperius-BODRUMLU
OWNER|Bodrumlu
*/

'use strict';

class Base {
    constructor(client) {
        Object.defineProperty(this, 'client', { value: client });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }
    
    _patch(data) { return data }
}

module.exports = Base;
