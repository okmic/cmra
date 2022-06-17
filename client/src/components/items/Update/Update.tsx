import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../../hooks/useInputs";
import { RootState } from "../../../redux/store"
import styles from '../index.module.css'
import Modal from "../../Modal/Modal";
import { updateName, updateCounterparty, updateCity, updateAdress, updateDescription, updateEmail, updateSite } from "../../../redux/reducer/updateReducer"
import BorderColorIcon from '@mui/icons-material/BorderColor'

type ModalType = {
    order: boolean
    callback: (o: boolean) => void
}

export default memo(function Update({ order, callback }: ModalType) {

    const data = useSelector((state: RootState) => state.update.update)

    const dispatch = useDispatch() 

    const name = useInput(data.name)
    const [nameOr, setName] = useState(false)

    const counterparty = useInput(data.counterparty)
    const [countOr, setCount] = useState(false)

    
    const city = useInput(data.city)
    const [cityOr, setCity] = useState(false)

    const adress = useInput(data.adress)
    const [adressOr, setAdress] = useState(false)

    const email = useInput(data.email)
    const [emailOr, setEmail] = useState(false)

    const site = useInput(data.site)
    const [siteOr, setSite] = useState(false)

    const description = useInput(data.description)
    const [descriptionOr, setDescription] = useState(false)


    const hundleSubmit = (params: any) => {
        params.callback(false)
        dispatch(params.redux(params.input.value))
        
    }

    const items = [
        { title: 'ФИО или произвольное название:', value: data.name, paramsInput: name, order: nameOr, callback: setName, redux: updateName },
        { title: 'Контрагент:', value: data.counterparty, paramsInput: counterparty, order: countOr, callback: setCount, redux: updateCounterparty },
        { title: 'Город/населенный пункт:', value: data.city, paramsInput: city, order: cityOr, callback: setCity, redux: updateCity },
        { title: 'Адресс:', value: data.adress, paramsInput: adress, order: adressOr, callback: setAdress, redux: updateAdress },
        { title: 'Email:', value: data.email, paramsInput: email, order: emailOr, callback: setEmail, redux: updateEmail },
        { title: 'Сайт:', value: data.site, paramsInput: site, order: siteOr, callback: setSite, redux: updateSite },
        { title: 'Особый список:', value: data.description, paramsInput: description, order: descriptionOr, callback: setDescription, redux: updateDescription }

    ]

    return order ? <Modal callback={callback}>
        <div className={styles.wrapper}>
        <h1>Изменить</h1>
            {items.map((item, index) => <div className={styles.item} key={index}>
                <h5>{item.title}</h5>
                {!item.order
                    ? <div>
                        <span onDoubleClick={() => item.callback(true)}>{item.value}</span>
                        <button onClick={() => item.callback(true)} className={styles.update}>
                            <BorderColorIcon sx={{fontSize: '15px', color: 'red'}} />
                        </button>
                    </div>
                    : <div>
                        {item.title !== 'Особый список:' 
                        ? <div>
                            <input className="m1" type="text" {...item.paramsInput} />
                            <button onClick={() => hundleSubmit({callback: item.callback, redux: item.redux, input: item.paramsInput})}>Изменить</button>
                        </div>
                        : <div className={styles.item}>
                                <textarea className="m1" {...item.paramsInput}></textarea>
                                <button onClick={() => hundleSubmit({callback: item.callback, redux: item.redux, input: item.paramsInput})}>Изменить</button>
                        </div>
                        
                        }
                        
                        
                    </div>}
            </div>)}
        </div>
    </Modal>
        : <></>
})