import { useState } from 'react'
import { AppStatus } from './AppStatus'
import { createContainer } from 'unstated-next'


function useAppStatus(initialState: AppStatus) {
  let [appStatus, setAppStatus] = useState(initialState)
  let isDesktop = (status: AppStatus) => setAppStatus(status)
  let isHiddenSideBar = (status: AppStatus) => setAppStatus(status)

  return { appStatus, isDesktop, isHiddenSideBar }
}

let appStatusContainer = createContainer(useAppStatus)

export default appStatusContainer