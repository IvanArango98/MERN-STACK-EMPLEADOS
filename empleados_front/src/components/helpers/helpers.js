import { isUndefined }  from 'util'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export function calculaExpiracionSesion()
{
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000
    return new Date(newDate)
}

export function getSession()
{
    return isUndefined(cookies.get("_s")) ? false : cookies.get("_s")
}

