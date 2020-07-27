/**
 * 用户信息写入localstorage
 */
export function setCurrentUserToLocalstorage(data): any {
  localStorage.setItem('currentUser', JSON.stringify(data))
}

/**
 * 语言写入localstorage
 */
export function setLangTypeToLocalstorage(lang): any {
  localStorage.setItem('langType', lang)
}

/**
 * 从localstorage读取
 */
export function getLocalstorage(name): any {
  const _storageVal = localStorage.getItem(name)
  try {
    return _storageVal ? JSON.parse(_storageVal) : ''
  } catch {
    return _storageVal || ''
  }
}

/**
 * 删除localstorage的值
 */
export function deleteLocalstorage(name): any {
  localStorage.removeItem(name)
}