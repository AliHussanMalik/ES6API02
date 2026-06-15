const inputnumber = document.getElementById("numberID")
// console.log(`Here is the Input Number ${inputnumber}`)

async function PUTObject() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)

    const uid1 = urlParams.get('userid')
    const uuid1 = uid1 - 1;
    const putsubmit = document.getElementById("formbutton")

    try {

        const URL = `https://6a26e261a84f9d39e908063d.mockapi.io/es6api/v1/Users/`;
        const output = await fetch(URL);
        const response = await output.json();
        responseTwo = JSON.stringify(response)
        // console.log(`Response ${response}`);
        // console.log(`responseTwo ${responseTwo}`);
        localStorage.setItem("Response 2 ", responseTwo)
        const filterOutput = response.filter(checkNumber);
        // console.log(`Here is the filter Output.${filterOutput}`)
        function checkNumber(element){
            return element == inputnumber
        }
        const retName = document.getElementById("namelabel")
        const retAvatar = document.getElementById("avatarlabel")

        // console.log(`Here is the UUID ${uid1}`)


        if (uid1) {
            const UpdatedResponse = response.filter(EditOutput)
            function EditOutput(response){
                return response["id"]==uid1
            }
            const FinalObject =UpdatedResponse[0]
            // localStorage.setItem("Final Object", FinalObject)
            // const FinalObjectTwo = JSON.stringify(FinalObject)
            // console.log(` FinalObject Response Two ${FinalObject}`)
            // console.log(` FinalObject ID ${FinalObject["id"]}`)
            // console.log(` FinalObject Created At ${FinalObject["createdAt"]}`)
            // console.log(` FinalObject Avatar  ${FinalObject.avatar}`)
            // console.log(` FinalObject Name ${FinalObject.name}`)
            putsubmit.innerText = "Update"
            // localStorage.setItem("UpdatedResponseTwo", UpdatedresponseTwo)
            retName.value = FinalObject["name"];
            retAvatar.value = FinalObject["avatar"];
            
        }

        // if (uuid1) {
        //     putsubmit.innerText = "Update "
        //     retName.value = response[uuid1].name;
        //     retAvatar.value = response[uuid1].avatar;
            
        // }
    }
    catch (e) {
        console.log(e)
    }
    // console.log(`Here is the updated response${UpdatedResponse}`)

}
PUTObject()

async function addNewObj(e) {
    e.preventDefault();
    try {

        const URL = `https://6a26e261a84f9d39e908063d.mockapi.io/es6api/v1/Users/`;

        const output = await fetch(URL);
        const response = await output.json();
        // console.log(`Output ${output}`)
        // console.log(`Response${response}`)
        // console.log(`Response${response.length}`)
        const IDis = response.length + 1;
        // console.log(`ID for current object${IDis}`)

        const Datex = new Date();
        const isoString = Datex.toISOString()
        // console.log("Working");
        // console.log(isoString);
        // alert(isoString);
        const Namee = document.getElementById("namelabel").value;
        // console.log(`Name: ${Namee}`);
        // alert(`Name: ${Namee}`);
        const Avatarr = document.getElementById("avatarlabel").value;
        // console.log(`Avataar: ${Avatarr}`)
        // alert(`Avataar: ${Avatarr}`)
        const myObj = {
            "createdAt": isoString,
            "name": Namee,
            "avatar": Avatarr,
            "id": IDis
        }
        // console.log(myObj)
        async function PostObj() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString)

            const uid2 = urlParams.get('userid')
            const uuid2 = uid2 - 1;
            if (uid2) {
                try {
                    // console.log(URL)
                    FinalURL = `${URL}/${uid2}`
                    const objoutput = await fetch(FinalURL, {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json'
                        }
                        , body: JSON.stringify(myObj)
                    });
                    const objoutputjson = await objoutput.json();
                    // console.log("Working");
                    // console.log(objoutput);
                    // console.log(objoutputjson);
                }
                catch (e) {
                    console.log(e)
                }

            }
            else {

                try {
                    // console.log(URL)

                    const objoutput = await fetch(URL, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        }
                        , body: JSON.stringify(myObj)
                    });
                    const objoutputjson = await objoutput.json();
                    // console.log("Working");
                    // console.log(objoutput);
                    // console.log(objoutputjson);
                }
                catch (e) {
                    console.log(e)
                }
            }
        }
        await PostObj()
    }
    catch (e) {
        console.log(e)
    }
}


//Practise Sample of Filter Function 
// let MyArray = [
//     {"key21":1,"key12":"value12","key13":"value13"},
//     {"key21":2,"key22":"value22","key23":"value23"},
//     {"key21":3,"key32":"value32","key33":"value33"},
//     {"key21":4,"key42":"value42","key43":"value43"},
//     {"key21":5,"key52":"value52","key53":"value53"}
// ]

// // const filterresponse = MyArray.filter(MyArray => MyArray["key21"]>=2)
// const filterresponse = MyArray.filter(myArryOutput)
// function myArryOutput(MyArray){
//     return MyArray["key21"]>= 1;
// }
// try{
//     FilterresponseTwo = JSON.stringify(filterresponse)
//     console.log(` Here is the output of filter function:${filterresponse}`)
//     console.log(` Here is the output of filter function2:${FilterresponseTwo}`)
//     localStorage.setItem("Filter Response", filterresponse)
//     localStorage.setItem("Filter responseTwo", FilterresponseTwo)
// }
// catch(e){
//     console.log(` Here is the Error ${e}`)
// }

// function findelement(element){
//     return element == "key11";
// }


// //array.filter(function, collection) = return all the elements that passes a condition


// console.log(`Here is the input Number ${inputnumber}`)