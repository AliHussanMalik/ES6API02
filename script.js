async function fetchalldata() {
    // e.preventDefault();
    try {
        const URL = `https://6a26e261a84f9d39e908063d.mockapi.io/es6api/v1/Users`;

        const output = await fetch(URL);
        var response = await output.json();

        const NewTable = document.createElement("TABLE");
        const TableRow1 = document.createElement("TR");
        const TableHead1 = document.createElement("TH");
        TableHead1.innerText = "ID";
        const TableHead2 = document.createElement("TH");
        TableHead2.innerText = "Name";
        const TableHead3 = document.createElement("TH");
        TableHead3.innerText = "Avatar";
        const TableHead4 = document.createElement("TH");
        TableHead4.innerText = "Created At";
        const Tablethere = document.getElementById("TableID")
        TableRow1.append(TableHead1, TableHead2, TableHead3, TableHead4)
        NewTable.append(TableRow1)
        response.forEach((Element, index) => {
            const TableRow2 = document.createElement("TR");
            TableRow2.className = "TableRow2Class"
            const TableData1 = document.createElement("TD");
            TableData1.append(Element.id);
            const TableData2 = document.createElement("TD");
            TableData2.append(Element.name);
            const TableData3 = document.createElement("TD");
            TableData3.append(Element.avatar);
            const TableData4 = document.createElement("TD");
            TableData4.append(Element.createdAt)
            const EditButton = document.createElement("button")
            EditButton.innerHTML = "Edit"
            const DeleteButton = document.createElement("button")
            DeleteButton.innerHTML = "Delete"
            TableRow2.append(TableData1, TableData2, TableData3, TableData4, EditButton, DeleteButton)
            NewTable.append(TableRow2)

        }
        );
        Tablethere.append(NewTable)

        localStorage.setItem("Mock API", JSON.stringify(response))
    } catch (err) {
        console.error(err);
    }
};

fetchalldata();
async function fetchdata(e) {
    e.preventDefault();
    try {
        const number = document.getElementById("number")
        const convertedID = Number(number.value);
        const URL = `https://6a26e261a84f9d39e908063d.mockapi.io/es6api/v1/Users/${convertedID}`;

        const output = await fetch(URL);
        var response = await output.json();

        alert(`ID :${response.id}\n Name : ${response.name} \n Created At : ${response.createdAt} \n Avatar :${response.avatar}`)

        localStorage.setItem("Mock API", JSON.stringify(response))
    } catch (err) {
        console.error(err);
    }
};

async function addNewObj(e) {
    e.preventDefault();
    try {

        const URL = `https://6a26e261a84f9d39e908063d.mockapi.io/es6api/v1/Users/`;

        const output = await fetch(URL);
        var response = await output.json();
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
        console.log(myObj)

        async function PostObj() {
            console.log(URL)
            const objoutput = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
                , body: myObj
            });
            const objoutputjson = objoutput.json();
            console.log("Working")

        }
        PostObj()
    }
    catch (e) {
        console.log(e)
    }

}
// addNewObj()
console.log(Window)

