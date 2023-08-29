let text = "Create a function, that will return an array (of string), with the words inside the text ?";



function getWords(text)
{
    let startWord = -1;
    let ar = [];
    
    for(let i = 0; i <= text.length; i++)
    {
        let c = i < text.length ? text[i] : " "; //
        //console.log(c)

        if (!isSeparator(c) && startWord < 0)
        {
            startWord = i;
        }
        console.log('is separator - - ',isSeparator(c))
        if (isSeparator(c) && startWord >= 0)
        {
            let word = text.substring(startWord, i);
            console.log(startWord,i);
            ar.push(word);
            
            startWord = -1;
        }
    }

    console.log(ar)
    return ar;
}

function isSeparator(c)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    //console.log(separators.includes(c))
    return separators.includes(c);
}

console.log(getWords(text));
