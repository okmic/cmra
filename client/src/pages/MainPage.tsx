import { memo } from 'react';
import '../index.css';
import Header from '../components/Header/Header'
import MainLoyaut from '../loyauts/MainLoyaut';
import '../index.css'


function MainPage() {

  /*   const sendData = async () => {
      try {
           request('http://localhost:5000/all', 'get').then((res) => {
              if(res.status === 200  && res.values.length > 0) {
                 dispatch(getData(res.values))
              }
           })
      } catch (e) {
          console.error(e)
      }
    } */

  /* useEffect(() => {
    sendData()
  }, []) */



  /*   const sendData = () => {
      try {
        request('http://localhost:5000/send', 'POST', { datePush: new Date() })
      } catch (e) {
        console.error(e)
      }
    } */


  return <MainLoyaut>
    <Header />
  </MainLoyaut>
}

export default memo(MainPage)
