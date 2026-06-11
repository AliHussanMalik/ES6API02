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
        const retName = document.getElementById("namelabel")
        const retAvatar = document.getElementById("avatarlabel")


        console.log(`Here is the ${uuid1}`)
        if (uuid1) {
            putsubmit.innerText = "Update "
            retName.value = response[uuid1].name;
            retAvatar.value = response[uuid1].avatar;
            
        }
    }
    catch (e) {
        console.log(e)
    }

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
                    console.log(URL)
                    FinalURL = `${URL}/${uuid2}`
                    const objoutput = await fetch(FinalURL, {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json'
                        }
                        , body: JSON.stringify(myObj)
                    });
                    const objoutputjson = await objoutput.json();
                    console.log("Working");
                    console.log(objoutput);
                    console.log(objoutputjson);
                }
                catch (e) {
                    console.log(e)
                }

            }
            else {

                try {
                    console.log(URL)

                    const objoutput = await fetch(URL, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        }
                        , body: JSON.stringify(myObj)
                    });
                    const objoutputjson = await objoutput.json();
                    console.log("Working");
                    console.log(objoutput);
                    console.log(objoutputjson);
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
