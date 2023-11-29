const customers = document.getElementById("customers");
const id1 = document.getElementById("id1");
const id2 = document.getElementById("id2");
const btnx = document.getElementById("btnx");
const id3 = document.getElementById("id3");


// Fetch Get

fetch('https://northwind.vercel.app/api/customers')
.then(res => res.json())
.then(data => {
    data.forEach(item => {
        const p = document.createElement('p')
        p.textContent = `${'Contact Name:' + item.contactName} --- ${'Company Name:' + item.companyName} --- ${'id:' + item.id}`
        customers.appendChild(p)
        console.log(item);
    })
})

// FETCH POST

btnx.addEventListener('click', function () {
    fetch('https://northwind.vercel.app/api/customers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: id1.value,
            description: id2.value
           }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data gonderildi" + data);
          });
})


// Fetch Delete

function FetchDel() {
        let mrd = `https://northwind.vercel.app/api/customers/${id.value}`;

        fetch(mrd, {
          method: "DELETE",
        }).then((res) => console.log(res));
      }

btnx.addEventListener('click', FetchDel)




// Axios




// Axios GET Method

axios.get("https://northwind.vercel.app/api/customers/")
.then((data) => {
      console.log(data.data);
    });



AXIOS POST method


    function fetchPost () {
            axios.post("https://northwind.vercel.app/api/customers/", {
                name: id1.value,
                description: id2.value
            }).then(res => {
                    console.log(res);
                })
                }
                
                
                btnx.addEventListener('click', fetchPost)


// AXIOS Delete Method


    function axiosDelete () {
    axios.delete(`https://northwind.vercel.app/api/customers/${id3.value}`)
}
btnx.addEventListener('click', axiosDelete)