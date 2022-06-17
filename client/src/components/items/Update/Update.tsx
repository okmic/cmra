import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store"
import styles from '../index.module.css'
import Modal from "../../Modal/Modal";
import { IconButton, Tooltip, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { CounterpartyType, remove } from "../../../redux/reducer/counterpartysReducer";
import UpdateItem from "./UpdateItem";
import AccordionCount from './Accordion'

type ModalType = {
    order: any
    callback: (o: boolean) => void
}


export default memo(function Update({ order, callback }: ModalType) {

    const data = useSelector((state: RootState) => state.counterpartys.counterpartys)

    const [id, setId] = useState<number | null>(null)

    const [check, setCheck] = useState(false)

    useEffect(() => {
        if(id) {
            setCheck(true)
        }
    }, [id])

    const dispatch = useDispatch()


    return order && <Modal callback={callback}>
        <div className={styles.wrapper}>
            {!check
                ? <>
                    <AccordionCount />

                    {data.map((item: CounterpartyType, index) => <div className="dfsb p1 bb mb " key={item.id}>
                        <Tooltip title={index + 1}>
                            <IconButton sx={{ color: 'black' }}>
                                <Typography sx={{ fontSize: '17px' }} variant="h6" component="div">{index + 1 + '.'}</Typography>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title={item.name}>
                            <IconButton sx={{ color: 'black' }}>
                                <Typography sx={{ fontSize: '17px' }} variant="h6" component="div">{item.name}</Typography>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title={item.counterparty}>
                            <IconButton sx={{ color: 'black' }}>
                                <Typography sx={{ fontSize: '17px' }} variant="h6" component="div">{item.counterparty.slice(0, 15) + '...'}</Typography>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Редактировать">
                            <IconButton onClick={() => setId(item.id)}>
                                <Typography
                                    sx={{ fontSize: '17px', border: 'none', cursor: 'pointer' }} variant="h6" gutterBottom component="div">
                                    <ModeEditIcon sx={{ color: 'green' }} />
                                </Typography>
                            </IconButton>
                        </Tooltip>

                        {!item.main && <Tooltip title="Удалить">
                            <IconButton onClick={() => dispatch(remove(item.id))}>
                                <Typography sx={{ fontSize: '17px', border: 'none', cursor: 'pointer' }} variant="h6" gutterBottom component="div">
                                    <DeleteForeverIcon sx={{ color: 'red' }} /></Typography>
                            </IconButton>
                        </Tooltip>
                        }
                    </div>)}
                </>
                : <UpdateItem setCheck={setCheck} setId={setId} id={id!} />
            }

        </div>
    </Modal>
})
