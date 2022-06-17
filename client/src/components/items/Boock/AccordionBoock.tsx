import { memo } from "react";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch } from "react-redux";
import { useInput } from "../../../hooks/useInputs";
import { IconButton, TextField, Tooltip } from "@mui/material";
import { add } from "../../../redux/reducer/boockReducer";

export default memo(function AccordionBoock () {

    const dispatch = useDispatch()


    const name = useInput('')
    const email = useInput('')
    const comment = useInput('')


    const hundleSubmit = () => {
        if(name.value === '' || email.value === '') {
            return alert('Заполните обязательные поля')
        } else {
            dispatch(add({
                name: name.value,
                email: email.value,
                comment: comment.value
            }))
        }
    }

    const inputs = [
        {inputParams: name, label: 'ФИО:*', type: 'text'},
        {inputParams: email, label: 'Контакты*:', type: 'text'},
        {inputParams: comment, label: 'Комментарий:*', type: 'text'}
    ]

    return  <Accordion>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <Typography>Создать</Typography>
    </AccordionSummary>
    <AccordionDetails>

        {inputs.map((item, index) => <div key={index}><TextField type={item.type} {...item.inputParams} id="standard-basic" label={item.type !== 'date' ? item.label : '' } variant="standard" /></div>)}

        <Tooltip title="Записать">
            <IconButton sx={{ color: '#000' }} onClick={hundleSubmit}>
                <Typography sx={{ fontSize: '17px', backgroundColor: 'greenyellow', padding: '5px 1em' }} variant="h6" component="div">Записать</Typography>
            </IconButton>
        </Tooltip>
    </AccordionDetails>
</Accordion>
})