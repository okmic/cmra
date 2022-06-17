import { IconButton, Tooltip, Typography } from "@mui/material"
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../../redux/reducer/boockReducer"
import { RootState } from "../../../redux/store"
import Modal from "../../Modal/Modal"
import AccordionBoock from "./AccordionBoock"
import styles from './index.module.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

type ModalType = {
    order: any
    callback: (o: boolean) => void
}

export default memo(function Boock({ order, callback }: ModalType) {

    const boock = useSelector((state: RootState) => state.boock.list)
    const dispatch = useDispatch()

    return order && <Modal callback={callback}>
        <div className={styles.wrapper}>
        <AccordionBoock />
            {boock.map((item: any, index: number) => <div className={styles.item} key={item.id}>
                <Typography variant="h6" component="span">
                    {index + 1 + ')'}
                </Typography>
                <Typography variant="h6" component="span">
                        {item.name}
                </Typography>
                <a href={`mailto:${item.email}`}>
                    <Typography variant="h6" component="span">
                        {item.email}
                    </Typography>
                </a>
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