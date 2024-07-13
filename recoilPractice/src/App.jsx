import { useMemo } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import {networkAtom, jobAtom, notificationAtom, messageAtom,totalNotificationSelector} from '../store/atoms'


function App() {
   return (
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
   )

}

function Main() {


  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobNotificationCount = useRecoilValue(jobAtom)
  const messageNotificationCount = useRecoilValue(messageAtom)
  const notificationCount = useRecoilValue(notificationAtom)

  const totalNotification = useRecoilValue(totalNotificationSelector)

  //useMemo is one way to do so but as we are onlt finding the totalNotification count which is totally depedent only on the 
  // atoms so we can also use selectors lets explore that 

  // const totalNotification = useMemo(() => {
  //   return networkNotificationCount + jobNotificationCount + messageNotificationCount + notificationCount;
  // }, [networkNotificationCount, jobNotificationCount, messageNotificationCount, notificationCount]);
  

  return (
    
    <>
    <button style={{ padding: '20px', margin: '10px' , background: 'black', color: 'white', boxShadow: 'high' }}>Home</button>
 
    <button style={{ padding: '20px', margin: '1rem' , background: 'black', color: 'white', boxShadow: 'high' }}>My Network ({networkNotificationCount >= 100 ? "99+": networkNotificationCount}) </button>
    <button style={{ padding: '20px', margin: '10px' , background: 'black', color: 'white' }}>Jobs ({jobNotificationCount})</button> 
    <button style={{ padding: '20px', margin: '10px' , background: 'black', color: 'white' }}>Messaging ({messageNotificationCount})</button>
    <button style={{ padding: '20px', margin: '10px' , background: 'black', color: 'white'}}>Notification ({notificationCount}) </button>

 <button style={{ padding: '20px', margin: '10px' , background: 'black', color: 'white', boxShadow: 'high' }}>Me({totalNotification})</button>
 </>

       
    
  )
}

export default App
