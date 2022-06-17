import {memo, useState} from "react"
import styles from './index.module.css'
import PeopleIcon from '@mui/icons-material/People'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ArticleIcon from '@mui/icons-material/Article'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import Update from "../items/Update/Update"



export default memo( function Header () {

    const [modalСounterparty, setСounterparty] = useState(false)
    const [modalRecord, setRecordModal] = useState(false)
    const [modalAccount, setAccountModal] = useState(false)

    const navData = [
        {icon: PeopleIcon, title: 'Контрагенты', order: modalСounterparty, callback: setСounterparty, component: Update},
        {icon: MenuBookIcon, title: 'Записная', order: modalRecord, callback: setRecordModal, component: Update},
        {icon: ArticleIcon, title: 'Счета', order: modalAccount, callback: setAccountModal, component: Update},
        {icon: DocumentScannerIcon, title: 'Договоры', order: modalAccount, callback: setAccountModal, component: Update},
    ]

 return <nav className={styles.wrapper}>
    {navData.map((item, index) => <div className={styles.item} key={index} onClick={() => item.callback(!item.order)}>
            <item.icon sx={{fontSize: '50px'}}  />
            <span>{item.title}</span>
            <item.component order={item.order} callback={item.callback} />
        </div>)}
 </nav>
})