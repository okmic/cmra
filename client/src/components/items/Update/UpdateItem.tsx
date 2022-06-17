import { memo, useState } from "react";
import { useInput } from "../../../hooks/useInputs";
import { PropsUpdateItemType } from "./types"
import { updateName, updateCounterparty, updateCity, updateAdress, updateDescription, updateEmail, updateSite } from "../../../redux/reducer/counterpartysReducer"
import BorderColorIcon from '@mui/icons-material/BorderColor'
import styles from '../index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Button } from "@mui/material";

export default memo(function UpdateItem({ id, setId, setCheck}: PropsUpdateItemType) {

    const data = useSelector((state: RootState) => state.counterpartys.counterpartys).filter((item) => item.id === id)


    const name = useInput(data[0]['name'])
    const [nameOr, setName] = useState(false)

    const counterparty = useInput(data[0]['counterparty'])
    const [countOr, setCount] = useState(false)


    const city = useInput(data[0]['city'])
    const [cityOr, setCity] = useState(false)

    const adress = useInput(data[0]['adress'])
    const [adressOr, setAdress] = useState(false)

    const email = useInput(data[0]['email'])
    const [emailOr, setEmail] = useState(false)

    const site = useInput(data[0]['site'])
    const [siteOr, setSite] = useState(false)

    const description = useInput(data[0]['description'])
    const [descriptionOr, setDescription] = useState(false)

    const dispatch = useDispatch()

    const hundleSubmit = (params: any) => {
        params.callback(false)
        dispatch(params.redux({id: params.id, value: params.input.value}))

    }

    const items = [
        { title: 'ФИО или произвольное название:', value: data[0]['name'], paramsInput: name, order: nameOr, callback: setName, redux: updateName },
        { title: 'Контрагент:', value: data[0]['counterparty'], paramsInput: counterparty, order: countOr, callback: setCount, redux: updateCounterparty },
        { title: 'Город/населенный пункт:', value: data[0]['city'], paramsInput: city, order: cityOr, callback: setCity, redux: updateCity },
        { title: 'Адрес:', value: data[0]['adress'], paramsInput: adress, order: adressOr, callback: setAdress, redux: updateAdress },
        { title: 'Email:', value: data[0]['email'], paramsInput: email, order: emailOr, callback: setEmail, redux: updateEmail },
        { title: 'Сайт:', value: data[0]['site'], paramsInput: site, order: siteOr, callback: setSite, redux: updateSite },
        { title: 'Особый список:', value: data[0]['description'], paramsInput: description, order: descriptionOr, callback: setDescription, redux: updateDescription }
    ]

    return <>
        <Button onClick={() => {
            setId(null)
            setCheck(false)
        }} sx={{marginTop: '1em'}} variant="contained">Записать и закрыть</Button>
        {items.map((item, index) => <div className={styles.item} key={index} >
            <h5>{item.title}</h5>
            {!item.order
                ? <div>
                    <span onDoubleClick={() => item.callback(true)}>{item.value}</span>
                    <button onClick={() => item.callback(true)} className={styles.update}>
                        <BorderColorIcon sx={{ fontSize: '15px', color: 'red' }} />
                    </button>
                </div>
                : <div>
                    {item.title !== 'Особый список:'
                        ? <div>
                            <input className="m1" type="text" {...item.paramsInput} />
                            <button onClick={() => hundleSubmit({id: data[0]['id'], callback: item.callback, redux: item.redux, input: item.paramsInput })}>Изменить</button>
                        </div>
                        : <div className={styles.item}>
                            <textarea className="m1" {...item.paramsInput}></textarea>
                            <button onClick={() => hundleSubmit({id: data[0]['id'], callback: item.callback, redux: item.redux, input: item.paramsInput })}>Изменить</button>
                        </div>}
                </div>}
        </div>
        )}
    </>
})
