import { IconButton, Tooltip, Typography } from "@mui/material"
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { remove } from "../../../redux/reducer/dogsReducer"
import { RootState } from "../../../redux/store"
import Modal from "../../Modal/Modal"
import Accordion from "./Accordion"
import styles from './index.module.css'
import { DogsType } from "../../../redux/reducer/dogsReducer"


type ModalType = {
    order: any
    callback: (o: boolean) => void
}

export default memo(function Dogs({ order, callback }: ModalType) {
    
    const dispatch = useDispatch()

    const accounts = useSelector((state: RootState) => state.dogs.dogs)

    return order && <Modal callback={callback}>
        <div className={styles.wrapper}>
            <Accordion />
            {accounts.map((item: DogsType) => <div className={styles.item} key={item.id}>
                <Typography variant="h6" component="span">
                    {"№" + item.id}
                </Typography>
                <Typography variant="h6" component="span">
                    {item.name}
                </Typography>
                <Typography variant="h6" component="span">
                    {'Дата подписания*: ' + item.date}
                </Typography>
                <Typography variant="h6" component="span">
                    {item.comment}
                </Typography>
                <Tooltip title="Удалить">
                            <IconButton onClick={() => dispatch(remove(item.id))}>
                                <Typography sx={{ fontSize: '17px', border: 'none', cursor: 'pointer' }} variant="h6" gutterBottom component="div">
                                    <DeleteForeverIcon sx={{ color: 'red' }} /></Typography>
                            </IconButton>
                </Tooltip>
            </div>
            )}
        </div>
    </Modal>
})