function Person (name, hobbies) {
    this.name = name;
    this.hobbies = hobbies;

    this.listPerson = function () {
        return this.hobbies.map ((function(hobby) {
            // console.log(this);
            console.log(this.name + "   loves " + hobby)
        }),this)
    }
}

let person = new Person ('Hnin', ['Baking', 'cooking', 'eating'])
// console.log(list)
person.listPerson();





/*

var word = function (t) {
    var text = t;

    var translate = function (lang) {
        if (lang ===  "pig latin") {
            t = function() {
                return text.substring(1) + text.substring(0,1) + "a";
            };
        }else {
            t = function() {
                return "I don't speak" + lang;
            }
        }
        return t();
    };

    //objectပုံစံရေးတာ
    return {
        text : text,
        translate : translate,
    }
};

var ourText = word("hello"); // out out  [ elloha ]
ourText.translate("pig latin");
// console.log(ourText.translate("pig latin"));

*/


/*
let languages = ["html", "css", "js"];
//map(copy)
languages = languages.map(function(lang) {
    return 'I Love ' + lang;
})
console.log(languages);
*/

