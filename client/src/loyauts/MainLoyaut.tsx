import { memo } from "react"
import styles from './index.module.css' 

export type MainLoyautType = {
    children: React.ReactNode
}

export default memo(function MainLoyauts({children}: MainLoyautType) {


    return <div className={styles.wrapper}>
            {children}
    </div>
 }) 