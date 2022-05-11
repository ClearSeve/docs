// get all OSINT content page


//////// AWESOME OSINT ///////////////
// https://raw.githubusercontent.com/jivoi/awesome-osint/master/README.md

try {
    let req = await fetch('https://raw.githubusercontent.com/jivoi/awesome-osint/master/README.md');
    let text = await req.text();
    if(!Deno.args.includes('-c')){
        text = Deno.readTextFileSync('./script/osint/data/awesome') + text
        Deno.writeTextFileSync('./CyberSecu/Osint/awesome-osint.md', text);
    }
} catch(err){
    console.log(err)
}


//////// CANADIA OSINT TOOLS ///////////////
try{
    let nodes = getCanadaOsintData()
    let str = generateMarkdown(nodes)
    if(!Deno.args.includes('-c')){
        str = Deno.readTextFileSync('./script/osint/data/canada') + str
        Deno.writeTextFileSync('./CyberSecu/Osint/osint-c-canada.md', str)
    }
} catch(err){}



/////// function part
async function getCanadaOsintData(){
    /**
     * Works from:
     * https://start.me/p/9E5BLR/canosint
     */

    let bannedtitle = ["NEWS", "REDDIT", "NITTER", "CANOSINT"]
    let req = await fetch('https://start.me/p/9E5BLR.json');
    let text = await req.json();
    let r = []
    let d = text.page.sections[0].columns

    try{
        for(let i = 0; i < d.length; i++){
            try{
                for(let j = 0; j < d[i].widgets.length; j++){
                    try{
                        if(!bannedtitle.includes(d[i].widgets[j].title)){
                            if(d[i].widgets[j].items.links != undefined){
                                r.push({
                                    title: d[i].widgets[j].title,
                                    links: purgeFromStartme(d[i].widgets[j].items.links)
                                })
                            }
                        }
                    } catch(err){}
                }
            } catch(err){}
        }
    } catch(err){}
    return r
}



function purgeFromStartme(items){
    return items.map(item => {
        return {
            title: item.title,
            url: item.url,
            icon: item.favicon,
            description: item.description ? item.description : ""
        }
    })
}

function generateMarkdown(data){
    let str = ""

    for(let i = 0; i < data.length; i++){
        str += `## ${data[i].title}\n`
        for(let j = 0; j < data[i].links.length; j++){
            str += `![](${data[i].links[j].icon})* [${data[i].links[j].title}](${data[i].links[j].url}) ${data[i].links[j].description}\n`
        }
    }

    return str
}