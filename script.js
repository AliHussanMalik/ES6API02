const URL = `https://6a26e261a84f9d39e908063d.mockapi.io/es6api/v1/Users`;
const formlink = "form.html";
async function fetchalldata() {
    // e.preventDefault();
    try {
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
            TableData3.id = "TableData3";
            const imagedata = document.createElement("IMG")
            imagedata.src =Element.avatar;
            TableData3.append(imagedata);
            const TableData4 = document.createElement("TD");
            TableData4.append(Element.createdAt)
            const EditButton = document.createElement("button")
            // console.log(index)
            // console.log(typeof index)
            EditButton.innerHTML = "Edit"
            EditButton.id = "EditButton";
            EditButton.addEventListener("click",()=>{
                window.location.href = `${formlink}?userid=${Element.id}`

            })
            
            const DeleteButton = document.createElement("button")
            DeleteButton.innerHTML = "Delete"
            DeleteButton.id = "DeleteButton";
            DeleteButton.addEventListener("click",()=>{DeleteObj(Element.id)})

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

        alert(`ID :${response.id}\n Name : ${response.name} \n Created At : ${response.createdAt} \n Avatar :<img src="${response.avatar}"></a>`)

        localStorage.setItem("Mock API", JSON.stringify(response))
    } catch (err) {
        console.error(err);
    }
};

async function DeleteObj(userid){
    try{
        const DeleteURL = `${URL}/${userid}`
        const DeleteObject = await fetch(DeleteURL,{
            method: 'DELETE',
        });

        if (DeleteObject.ok){
            console.log("it is okay")
        }
        else{
            console.log("There is some garbaration")
        }
    }
    catch(e){
        console.log(e)
    }
}
console.log(window)