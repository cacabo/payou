/* globals localStorage */

const APPLICATION_ID = 'APPLICATION_ID'

export const clearAppId = () => localStorage.setItem(APPLICATION_ID, undefined)

export const setAppId = id => localStorage.setItem(APPLICATION_ID, id)

export const getAppId = () => localStorage.getItem(APPLICATION_ID)
