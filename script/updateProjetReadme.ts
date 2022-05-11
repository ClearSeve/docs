let a = [
    {
        "name": "Alina",
        "url": "https://github.com/Sn0wAlice/Alina",
        "readmeRaw": "https://raw.githubusercontent.com/Sn0wAlice/Alina/main/README.md"
    }
]


for(let i = 0; i < a.length; i++) {
    await getProjetReadme(a[i].readmeRaw, a[i].name);
}


async function getProjetReadme(url, name) {
    try{
        let response = await fetch(url);
        let data = await response.text();
        Deno.writeTextFileSync("./Projets/"+name+".md", data);
    } catch(err){}
}
