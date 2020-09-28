/**
     * @param {string[]} strs
     * @return {string}
     */
    var longestCommonPrefix = function (strs) {
        if (strs.length > 0) {
            let frist = strs[0]
            let common = ''
            if (frist.length > 0) {
                for (var i = 0; i < frist.length; i++) {
                    let num = 0
                    for (var j = 0; j < strs.length; j++) {
                        if (frist[i] != strs[j][i]) {  // 或者使用chartAt 获取指定字符串
                            num++
                            break
                        }
                        if (j == strs.length - 1) {
                            if (num == 0) {
                                common += frist[i]
                            }
                        }
                    }
                    if (num > 0) {
                        return common
                    } else {
                        if (i == frist.length - 1) {
                            return common
                        }
                    }
                }
            } else {
                return common
            }
        } else {
            return ''
        }
    };

    let str = longestCommonPrefix(["flower", "flow", "fliwrwht"])
    console.log(str)