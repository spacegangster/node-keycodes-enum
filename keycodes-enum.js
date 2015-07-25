var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    "break": 19,
    capslock: 20,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    printscreen: 44,
    prntscrn: 44,
    insert: 45,
    "delete": 46,
    
    nul: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    
    winkey: 91,
    winmenu: 93,

    numlock: 144,
    scrolllock: 145,

    comma: 188,
    point: 190,
    forwardslash: 191,
    tilde: 192,
    leftbracket: 219,
    backslash: 220,
    rightbracket: 221,
    quote: 222,

    numlockon: {
        nul: 96,
        ins: 96,
        insert: 96,
        one: 97,
        end: 97,
        two: 98,
        down: 98,
        pgdown: 99,
        pagedown: 99,
        three: 99,
        four: 100,
        left: 100,
        five: 101,
        six: 102,
        right: 102,
        home: 103,
        seven: 103,
        up: 104,
        eight: 104,
        nine: 105,
        pgup: 105,
        pageup: 105,
        asterisk: 106,
        plus: 107,
        min: 109,
        point: 110,
        del: 110,
        "delete": 110,
        forwardslash: 111,
        slash: 111
    },

    numlockoff: {
        nul: 45,
        ins: 45,
        insert: 45,
        one: 35,
        end: 35,
        two: 40,
        down: 40,
        pgdown: 34,
        pagedown: 34,
        three: 34,
        four: 37,
        left: 37,
        five: 12,
        six: 39,
        right: 39,
        home: 36,
        seven: 36,
        up: 38,
        eight: 38,
        nine: 33,
        pgup: 33,
        pageup: 33,
        asterisk: 106,
        plus: 107,
        min: 109,
        point: 46,
        del: 46,
        "delete": 46,
        forwardslash: 111,
        slash: 111
    }
};

var i, abc = "abcdefghijklmnopqrstuvwxyz".split("");
for (i = 90; i >= 65; i--) {
    KeyCodes[abc.pop()] = i;
}

for (i = 12; i >= 1; i--) {
    KeyCodes["f" + i] = i + 111;
}

module.exports = KeyCodes;