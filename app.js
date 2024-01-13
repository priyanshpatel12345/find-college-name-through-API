let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    
    console.log(input);
    let collegeArr = await getName(input);
    console.log(collegeArr);
    show(collegeArr);
});

  function show(collegeArr)  {
    let result = document.querySelector("#result");
    result.innerText = "";

    for(col of collegeArr) {
         console.log(col.name);

         let li = document.createElement("li");
         li.innerText = col.name;
         result.append(li);
    } 
   }


let url = "http://universities.hipolabs.com/search?name=";
async function getName(input) {
    try {
        let ans = await axios.get(url + input) ;
        return ans.data;
        // console.log(ans.data);
    }
    catch (error){
        return "Error";
    }
}
