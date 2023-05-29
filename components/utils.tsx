//    // 重写请求 下载文件
//    
//    // 打压缩包下载
//    handleBatchDownload() {
//        const _this = this;
//        const dataUrl = [];
//        for (let file of _this.fileTable) {
//            let url = 'http://xxxxxxxxxxxx'
//            dataUrl.push(url)	// 把所有要打包文件的url放进数组
//        }
//    const zip = new JSZip()	// 创建一个JSZip实例
//    const cache = {}
//    const promises = []
//    dataUrl.forEach(item => {
//        const promise = _this.getFile(item).then(data => { // 下载文件, 并存成ArrayBuffer对象
//            const arr_name = item.split("/")  // stringObject.split 将字符串分割成字符串数组
//            const file_name = arr_name[arr_name.length - 1] // 获取文件名（数组最后一项）
//            zip.file(file_name, data, { binary: true }) // 逐个添加文件
//            cache[file_name] = data
//        })
//        promises.push(promise)
//    })
//    Promise.all(promises).then(() => {
//        zip.generateAsync({type:"blob"}).then(content => { // 生成二进制流
//            // 利用file-saver保存文件 _this.fileTableTitle是我压缩包名字
//            FileSaver.saveAs(content, _this.fileTableTitle + ".zip") 
//        })
//    })
