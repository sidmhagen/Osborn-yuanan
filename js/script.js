window.addEventListener('load', function(){
    // 根据唯一id查找按钮
    const replyCard = document.getElementById('custom-replies-function');
    if(replyCard){
        replyCard.addEventListener('click', function(){
            const text = this.innerText.trim() || '自定义回复';
            alert("点击功能：" + text);
        }, false);
        console.log("自定义回复绑定成功");
    }else{
        console.log("未找到自定义回复按钮ID");
    }
});

