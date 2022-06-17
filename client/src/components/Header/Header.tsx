import {memo, useState} from "react"
import styles from './index.module.css'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import FolderDeleteIcon from '@mui/icons-material/FolderDelete'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ArticleIcon from '@mui/icons-material/Article'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import Update from "../items/Update/Update"
import Add from "../items/Add/Add"



export default memo( function Header () {

    const [modalAdd, setAddModal] = useState(false)
    const [modalRemove, setRemoveModal] = useState(false)
    const [modalUpdate, setUpdateModal] = useState(false)
    const [modalRecord, setRecordModal] = useState(false)
    const [modalAccount, setAccountModal] = useState(false)

    const navData = [
        {icon: CreateNewFolderIcon, title: 'Добавить', order: modalAdd, callback: setAddModal, component: Add},
        {icon: FolderDeleteIcon, title: 'Удалить', order: modalRemove, callback: setRemoveModal, component: Update},
        {icon: DriveFolderUploadIcon, title: 'Изменить', order: modalUpdate, callback: setUpdateModal, component: Update},
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