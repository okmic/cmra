import { memo } from "react";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch } from "react-redux";
import { useInput } from "../../../hooks/useInputs";
import { IconButton, TextField, Tooltip } from "@mui/material";
import { add } from "../../../redux/reducer/counterpartysReducer";

export default memo(function AccordionCount () {

    const dispatch = useDispatch()

    const name = useInput('')
    const counterparty = useInput('')
    const city = useInput('')
    const adress = useInput('')
    const email = useInput('')
    const site = useInput('')
    const description = useInput('')

    const hundleSubmit = () => {
        if(name.value === '' || counterparty.value === '' || email.value === '') {
            return alert('Заполните обязательные поля')
        } else {
            dispatch(add({
                name: name.value,
                counterparty: counterparty.value,
                city: city.value,
                adress: adress.value,
                email: email.value,
                site: site.value,
                description: description.value
            }))
        }
    }

    const inputs = [
        {inputParams: name, label: 'ФИО или произвольное название:*'},
        {inputParams: counterparty, label: 'Контрагент:*'},
        {inputParams: city, label: 'Город/населенный пункт:'},
        {inputParams: adress, label: 'Адрес:'},
        {inputParams: email, label: 'Email:*'},
        {inputParams: site, label: 'Сайт:'},
        {inputParams: description, label: 'Особый список:'}
    ]

    return  <Accordion>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <Typography>Добавить контрагента</Typography>
    </AccordionSummary>
    <AccordionDetails>

        {inputs.map((item, index) => <div key={index}><TextField {...item.inputParams} id="standard-basic" label={item.label} variant="standard" /></div>)}

        <Tooltip title="Записать">
            <IconButton sx={{ color: '#000' }} onClick={hundleSubmit}>
                <Typography sx={{ fontSize: '17px', backgroundColor: 'greenyellow', padding: '5px 1em' }} variant="h6" component="div">Записать</Typography>
            </IconButton>
        </Tooltip>
    </AccordionDetails>
</Accordion>
})