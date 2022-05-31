import styles from "./Breadcrumb.module.scss";

const Breadcrumb = () => {

    return (       
        <ul className={styles.breadcrumb}>
            <li className={styles.breadcrumb_item}>املاک</li>
            <li className={styles.breadcrumb_item}>اجاره مسکونی</li>
            <li className={styles.breadcrumb_item}>آپارتمان</li>
        </ul>
    );
};


export default Breadcrumb;