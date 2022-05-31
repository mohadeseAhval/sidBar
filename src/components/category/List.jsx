import styles from "./category.module.scss";
const List=()=>{
    return (
        <>
        <h5 className={styles.title__small}>دسته ها</h5>
            <ul className={styles.list_category}>
                <li className={styles.list_category_item}><a href=''><span class={`${styles.icon} icon-home`}></span><span>املاک</span></a></li>
                <li className={styles.list_category_item}><a href=''><span class={`${styles.icon} icon-car`}></span><span>وسایل نقلبه</span></a></li>
                <li className={styles.list_category_item}><a href=''><span class={`${styles.icon} icon-home`}></span><span>کالای دیجیتال</span></a></li>
            </ul>
        </>
    );
}

export default List;