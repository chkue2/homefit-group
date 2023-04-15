import qs from 'qs'

export default {
  isInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  },
  trialPermalink: 'TEST0000',
  regularBasicPromotionPrice: {
    1: { 6: 99000, 12: 89000 },
    2: { 6: 134000, 12: 124000 },
    3: { 6: 169000, 12: 159000 },
  },
  canReceivePromotion() {
    return window.homefit.user.hasTrialPayCompleted === false
  },
  getQueryParameter() {
    return qs.parse(window.location.search.substring(1))
  },
  appendUrlParameter(key, value) {
    if (this.getUrlParameter(key)) {
      return
    }

    const urlToAppend = location.href.includes('?')
      ? location.href + '?' + key + '=' + value
      : location.href + '&' + key + '=' + value

    history.replaceState(null, '', urlToAppend)
  },
  setUrlQueryParameter(key, value) {
    const urlParams = new URLSearchParams(window.location.search)
    const param = urlParams.get(key)
    if (param === null) {
      urlParams.append(key, value)
    } else {
      urlParams.set(key, value)
    }

    history.replaceState(null, '', '?' + urlParams.toString())
  },
  getUrlParameter(sParam) {
    const results = new RegExp('[?&]' + sParam + '=([^&#]*)').exec(
      window.location.href
    )
    if (!results) {
      return ''
    } else {
      return results[1]
    }
  },
  getUrlWithAppendedParameterToBaseUrl(baseUrl, keyToAppend, valueToAppend) {
    if (this.getUrlParameterFromUrlParam(baseUrl, keyToAppend)) {
      return baseUrl
    }

    const urlToAppend = baseUrl.includes('?')
      ? baseUrl + '?' + keyToAppend + '=' + valueToAppend
      : baseUrl + '&' + keyToAppend + '=' + valueToAppend

    return urlToAppend
  },
  getUrlParameterFromUrlParam(urlParam, sParam) {
    const results = new RegExp('[?&]' + sParam + '=([^&#]*)').exec(urlParam)
    if (!results) {
      return ''
    } else {
      return results[1]
    }
  },
  isCoachSelected(permalink) {
    return window.homefit.exceptionalPermalinks.includes(permalink) === false
  },
  isValidEmail(email) {
    const re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{1,6}(?:\.[a-z]{1})?)$/i
    return re.test(email)
  },
  isValidPhone(phone) {
    if (phone.substring(0, 3) !== '010') {
      return false
    }
    const re = /^010([0-9]{4})([0-9]{4})$/
    return re.test(phone)
  },
  getDiscountPercent(fullPrice, discountPrice) {
    if (!Number(fullPrice) || !Number(discountPrice)) {
      return 0
    }

    return Math.floor(
      (1 - Math.floor((discountPrice / fullPrice) * 10) / 10) * 100
    )
  },
  scrollToTarget(selectorToScroll) {
    document.querySelector(selectorToScroll).parentNode.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  },
  getProgramClassCaption(classSimple) {
    switch (classSimple) {
      case 'A':
        return '일반 관리'
      case 'B':
        return '산전/산후 관리'
      case 'C':
        return '통증케어 및 기능회복'
      case 'D':
        return '요가명상'
      case 'E':
        return '미술'
      case 'F':
        return '피아노'
      case 'G':
        return '바이올린'
      default:
        return '일반 관리'
    }
  },
}
