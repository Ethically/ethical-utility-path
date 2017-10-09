import { join, basename } from 'path'

export const isFile = (path) => ( basename(path).includes('.') )

export const resolveDestPath = (path, dest, base) => {
    if (typeof dest !== 'string') return absolute(path)
    if (isFile(dest)) return absolute(dest)
    return join(absolute(dest), absolute(path).replace(absolute(base), ''))
}

export const isRelative = (path) => {
    if (path.charAt(0) === '.' && (
        path.charAt(1) === '.' || path.charAt(1) === '/'))
        return true
    return false
}

export const isAbsolute = (path) => {
    if (path.charAt(0) === '/') return true
    return false
}

export const absolute = (path) => {
    if (isAbsolute(path)) return path
    return join(getRootPath(), path)
}

export const relative = (path) => {
    if (!isAbsolute(path)) return path
    return path.replace(getRootPath() + '/' , '')
}

export const getRootPath = () => process.cwd()
