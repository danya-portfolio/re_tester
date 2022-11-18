export const rules = {
    title: 'Правила Регулярных выражений',
    head: [
        { name: "Правило", decription: "Описание"},
    ],
    body:[
        { name: "$", decription: "Соответствует концу строки"},
        { name: "*", decription: "Соответствует предыдущему символу 0 или более раз"},
        { name: "+", decription: "Соответствует предыдущему символу 1 или более раз"},
        { name: "?", decription: "Соответствует предыдущему символу 0 или 1 раз"},
        { name: ".", decription: "Соответствует любому одному символу, кроме новой строки (кроме символа переноса строки \n)"},
        { name: "(x)", decription: "Соответствия х и запоминает совпадения выражения"},
        { name: "(?:x)", decription: "Соответствия х и не запоминает совпадений выражения"},
        { name: "x(?=y)", decription: "Совпадения х, если оно сопровождается у"},
        { name: "x(?!y)", decription: "Совпадения х, если это не сопровождается у"},
        { name: "{n}", decription: "Предыдущий символ повторяется n раз"},
        { name: "{n,m}", decription: "Предыдущий символ повторяется от n до m раз"},
        { name: "[abc]", decription: "Соответствует любому одному символу в скобках"},
        { name: "[^abc]", decription: "Соответствует любому одному символу, кроме тех, что указаны в скобках"},
        { name: "\\b", decription: "Соответствует границе слова"},
        { name: "\\B", decription: "Соответствует границе не слова"},
        { name: "\\d", decription: "Соответствует цифре"},
        { name: "\\D", decription: "Соответствует не цифре"},
        { name: "\\s", decription: "Соответствует символу пробела"},
        { name: "\\S", decription: "Соответствует любому символу, кроме символа пробела"},
        { name: "\\t", decription: "Соответствует символу табуляции"},
        { name: "\\w", decription: "Соответствует буквенно-цифровому символу или символу подчеркивания"},
        { name: "\\W", decription: "Соответствует символу, который не совпадает с \\w"},
    ]
}


export const flagList = [
    {
        key:'global_checkbox',
        name: 'глабальный',
        active: false,
    },
    {
        key:'ignore_register_checkbox',
        name: 'игнорировать регистр',
        active: false,
    }
]


export const actions = [
    { value: 'extract', name: 'извлечь',},
    { value: 'replace', name: 'заменить',},
]

export const defaultAction = actions[0].value;