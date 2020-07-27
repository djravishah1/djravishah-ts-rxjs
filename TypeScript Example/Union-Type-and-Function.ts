function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name)
    } else {
        var i;

        for (i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}
disp("mark")
console.log("Printing names array....")
disp(["Mark", "Tom", "Mary", "John"])

/**Output
 Mark 
Printing names array…. 
Mark 
Tom
Mary
John 
 */