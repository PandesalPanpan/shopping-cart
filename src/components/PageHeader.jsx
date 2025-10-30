import styles from './PageHeader.module.css';

export default function PageHeader({children}) {

    return <h1 className={styles.header}>{children}</h1>
}