import styles from "./category.module.scss";
const ListItem=()=>{
    return (
        <>
        <h5 className={styles.title__sm}>دسته ها</h5>
        <h4 className={styles.title__light}><span className={`${styles.icon__right} icon-arrow-right`}></span>همه آگهی ها</h4>
            <ul className={styles.list_category}>
            <li className={styles.list_category_item}>
              <a href='' className='color_dark'><span class={`${styles.icon} color_dark icon-home`}></span><span>املاک</span></a>
              <ul className={`${styles.list_category} pr__55 pt__20`}>
                  <li className={`${styles.list_category_item}`}><span>اجاره مسکونی</span>
                  <ul className={`${styles.list_category} pr__15 pt__20`}>
                    <li className={`${styles.list_category_item_child} ${styles.active}`}>آپارتمان</li>
                    <li className={`${styles.list_category_item_child}`}>آپارتمان</li>
                  </ul>
                  </li>                    
                </ul>
              </li>
            </ul>
        </>
    );
}

export default ListItem;