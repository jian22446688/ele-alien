/**
 * Created by cary on 28/03/19.
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/** ************************************时间格式化处理************************************/
export function dateFmt(date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

// 格式化时间
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {Sting} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}

export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

export function objectMerge(target, source) {
  /* Merges two  objects,
     giving the last one precedence */

  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

export const pickerOptions = [
  {
    text: '今天',
    onClick(picker) {
      const end = new Date()
      const start = new Date(new Date().toDateString())
      end.setTime(start.getTime())
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近一周',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }
]

export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * 获取日期的第几周
 */
export function getWeekOfYear(date) {
  var today = new Date(date)
  var firstDay = new Date(today.getFullYear(), 0, 1)
  var dayOfWeek = firstDay.getDay()
  var spendDay = 1
  if (dayOfWeek !== 0) spendDay = 7 - dayOfWeek + 1
  firstDay = new Date(today.getFullYear(), 0, 1 + spendDay)
  var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000)
  var result = Math.ceil(d / 7)
  return result + 1
}

/**
 * 获取指定日期前或者后指定间隔时间代码
 * 获取前一周日期getNowFormatDate("2018-03-01",-7,"-") 结果为"2018-02-22"
 * 获取后一周日期getNowFormatDate("2018-03-01",7,"-") 结果为"2018-03-08"
 */
export function getNowFormatDate(sdate, interval, caret) {
  // 判断输入的日期是否符合格式正则表达式
  var patt1 = /^\d{4}-([0-1]?[0-9])-([0-3]?[0-9])$/
  // 不满足日期的则使用当前年月日
  if (!(sdate && typeof (sdate) === 'string' && patt1.test(sdate))) {
    sdate = new Date(sdate)
  }
  // 若没有输入间隔，则使用当前日
  interval = isNaN(parseInt(interval)) ? 0 : parseInt(interval)
  caret = (caret && typeof (caret) === 'string') ? caret : ''
  // 获取指定年月日
  var gdate = new Date(sdate).getTime()
  // 加减相差毫秒数
  gdate = gdate + 1000 * 60 * 60 * 24 * interval
  // 获取指定好毫秒数时间
  var speDate = new Date(gdate)
  var preYear = speDate.getFullYear()
  var preMonth = speDate.getMonth() + 1
  var preDay = speDate.getDate()
  preMonth = (preMonth < 10) ? ('0' + preMonth) : preMonth
  preDay = (preDay < 10) ? ('0' + preDay) : preDay
  var preDate = preYear + caret + preMonth + caret + preDay
  return preDate
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

/**
 * 如果target(也就是FirstOBJ[key])存在，
 * 且是对象的话再去调用deepObjectMerge，
 * 否则就是FirstOBJ[key]里面没这个对象，需要与SecondOBJ[key]合并
 */
export function deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
  for (var key in SecondOBJ) {
    if (FirstOBJ) {
      FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]'
        ? deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key]
    }
  }
  return FirstOBJ
}

/**
 * 将一级的数据结构处理成树状数据结构
 * @param {Object} obj {key, pKey, data}
 * @param obj.key  字段名称 比如id
 * @param obj.pKey 父字段名称 比如 pid
 * @param obj.rootPValue 根节点的父字段的值
 * @param obj.data 需要处理的数据
 * @param obj.jsonData 是否深复制数据（默认是true）
 * @return {Array} arr
 */
export function getTreeArr(obj) {
  if (!Array.isArray(obj.data)) {
    console.log('getTreeArr=>请传入数组')
    return []
  }
  obj.jsonData = obj.jsonData === false ? obj.jsonData : true
  const arr = obj.jsonData ? JSON.parse(JSON.stringify(obj.data)) : obj.data
  const arr1 = []
  // 将数据处理成数状结构
  arr.forEach(item => {
    let index = 0
    item.children = []
    arr.forEach(item1 => {
      // 得到树结构关系
      if (item[obj.key] === item1[obj.pKey]) {
        item.children.push(item1)
      }
      // 判断根节点
      if (item1[obj.key] !== item[obj.pKey]) {
        index++
      }
    })
    // 没传入根节点，根据当前数据结构得到根节点
    if (!('rootPValue' in obj) && index === arr.length) {
      arr1.push(item)
    }
  })
  // 传入根节点，根据传入的根节点组成树结构
  if ('rootPValue' in obj) {
    arr.forEach(item => {
      if (item[obj.pKey] === obj.rootPValue) {
        arr1.push(item)
      }
    })
  }
  return arr1
}

/**
 * 数组去重
 * @param {Array} data 要去重的数组
 * @param {String} key 作为去重依据的字段 (处理对象数组时需要传入)
 * @return arr 返回处理后的数据
 */
export function handleRepeatArr({ data, key }) {
  if (!Array.isArray(data)) {
    console.log('请传入数组')
    return
  }
  const arr = []; const obj = {}
  data.forEach((item, index) => {
    const attr = key ? item[key] : item
    if (!obj[attr]) {
      obj[attr] = index + 1
      arr.push(item)
    }
  })
  return arr
}

/**
 * 递归去重
 * @param {Array} data 要去重的数组
 * @param {String} key 作为去重依据的字段 (处理对象数组时需要传入)
 * @return arr 返回处理后的数据
 */
export function handleRepeatDepArr({ data, key }) {
  if (!Array.isArray(data)) {
    console.log('请传入数组')
    return
  }
  /** 1.递归去重，缺点，会将数据默认排序 */
  // 先对数据做排序处理
  data = data.sort((item, item1) => {
    if (key) {
      return item[key] - item1[key]
    }
    return item - item1
  })
  // 递归去重
  function getData(index) {
    if (index >= 1) {
      // 判断当前数据和下一条数据是否相等
      let result = key ? data[index][key] === data[index - 1][key] : data[index] === data[index - 1]
      if (result) {
        data.splice(index, 1)
      }
      getData(index - 1)
    }
  }
  getData(data.length - 1)
  return data
}
