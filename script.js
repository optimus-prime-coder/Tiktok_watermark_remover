let linkDiv = document.getElementById('link-input')
let btns = document.getElementById('btns')
let title = document.getElementById('title')
let Music = document.getElementById('Music')
let videos = document.getElementById('videos')


const watermarkApi =  async (link) => {
    try{
        const response = await fetch (
            `https://tiktok-video-no-watermark2.p.rapidapi.com/?url=${link}`
            ,{

            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1f754ca252msh82c9cec8fab6b28p13a1b4jsn7634f55802ea',
                'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }}
        )
        const info = await response.json()
        title.innerText = info.data.title
        Music.innerText = `Music Title: ${info.data.music_info.title} `
        videos.innerHTML = `<video src="${info.data.play}" width="100%" height="90%" controls download></video>`
    }
    

    catch (err){
        console.error(err)
    }
}

btns.onclick = () => {
     watermarkApi(linkDiv.value)
    
    }

