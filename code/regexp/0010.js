// 10. 正则表达式匹配

// str =='ddfdf'
// str[0] str[1]
// slice(1)

export default (s, p) => {
  var isMatch = function (s, p) {
    // 如果p 为空，
    // for text  i need push this branch to master
    if (p.length < 1) {
      return !s.length
    }
    var match = false

    if (s.length > 0 && (s[0] == = p[0] || p[0] === '.')) {
      match = true
    }
    // 有模式
    if (p.length > 1 && p[1] === '*') {
      return match && isMatch(s.slice(1), p) || isMatch(s, p.slice(2))
    } else {
      return match && isMatch(s.slice(1), p.slice(1))
    }
  }

  return isMatch(s, p)
}
