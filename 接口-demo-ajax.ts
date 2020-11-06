interface Config{
    type:string
    url:string
    data?:string
}

function ajax(config:Config):void{
    let xhr = new XMLHttpRequest()
    xhr.open(config.type,config.url,true)

    xhr.send(config.data)

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response)
        }
    }
}

ajax({
    type:'get',
    url:'baidu',
})