document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的链接元素
    let links = document.querySelectorAll('.ajaxLink');
    
    // 为每个链接添加点击事件监听
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止链接的默认行为
            e.preventDefault();
            
            // 获取链接的href属性
            let href = this.getAttribute('href');
            
            // 执行Ajax请求
            loadContent(href);
        });
    });
});

function loadContent(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (this.status == 200) {
            document.getElementById('contentDisplay').innerHTML = this.responseText;
        } else {
            document.getElementById('contentDisplay').innerHTML = '内容加载失败...';
        }
    };
    xhr.send();
}