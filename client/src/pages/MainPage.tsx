import { memo, useEffect, useState } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import Modal from '../components/Modal/Modal';
import { useInput } from '../hooks/useInputs';
import MainLoyaut from '../loyauts/MainLoyaut';
import '../index.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getData } from '../redux/reducer/appReducer';

function MainPage() {

  const { request } = useHttp()
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.app.data)


  const sendData = async () => {
    try {
         request('http://localhost:5000/all', 'get').then((res) => {
            if(res.status === 200  && res.values.length > 0) {
               dispatch(getData(res.values))
            }
         })
    } catch (e) {
        console.error(e)
    }
  }

useEffect(() => {
  sendData()
}, [])



  /*   const sendData = () => {
      try {
        request('http://localhost:5000/send', 'POST', { datePush: new Date() })
      } catch (e) {
        console.error(e)
      }
    } */


  return <MainLoyaut>

      <button onClick={() => setModal(!modal)}>Новая запись</button>
      {modal &&
        <Modal callback={() => setModal(false)}>

        </Modal>
      }

      {data && data.map((item: any) => <h1 key={item.id}>{item.id}</h1>)}
    </MainLoyaut>
}

export default memo(MainPage)
