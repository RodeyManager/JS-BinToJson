//定义一个json对象
    var obj = {
        name: "Rodey",
        age: 27
    };
    //转换成json字符串
    var os = JSON.stringify(obj);
    //将json字符串转换成二进制数组
    var bin = strToArr(os);
    console.log(bin);
    
    var str = binToString(bin);
    console.log(JSON.parse(str));

    /**
     * 将字符串转换成二进制数组
     * @param str
     * @returns {Array}
     */
    function strToArr(str){
        var rs = [];
        ([].slice.call(str)).forEach(function(char){
            rs.push(char.charCodeAt(0).toString(2));
        });
        return rs;
    }

    /**
     * 将二进制数组转换成字符串 （这里取到的是json字符串，然后将字符串转换成json对象就ok了）
     * @param bin
     * @returns {number}
     */
    function binToString(bin){
        var ds = 0;
        for(var i = bin.length - 1; i >= 0; --i){
           ds += parseInt(bin[i], 10) * Math.pow(2, bin.length - 1 - i);
        }
        var s = '';
        for(var i = 0; i < ds.length; ++i){
            //console.log(binToString(bin[i]));
            //console.log(String.fromCharCode(binToString(bin[i])));

            s += String.fromCharCode(binToString(bin[i]));
        }
        //console.log(s);
        //console.log(JSON.parse(s));
        return s;
    }
