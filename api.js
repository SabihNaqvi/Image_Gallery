
        const centerdiv = document.getElementById("centerdiv");
        fetch(`http://jsonplaceholder.typicode.com/photos?_limit=20`).then((apidata)=>{
            return apidata.json()
        }).then((finaldata)=>{
            finaldata.map((val)=>{
                key=val.id;
                let img = document.createElement("img");
                img.src=`https://picsum.photos/210/370?random=${key}`;
                centerdiv.appendChild(img);
                console.log(val.url);
            }
            )
        }).catch((error)=>{
            console.log(`The error is at ${error}`)
        })