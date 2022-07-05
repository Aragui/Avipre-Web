import styles from './pagination.module.css';

import type { Dispatch } from "redux";
import type { PayloadAction } from '@reduxjs/toolkit';

type props = {
    page: number;
    prevPage: () => PayloadAction<number>;
    nextPage: () => PayloadAction<number>;
}

const Pagination = ({ page, prevPage, nextPage }: props) => {
    return (
        <div className="row justify-content-center mb-2">
            <button className={styles.button} onClick={prevPage}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <span className={styles.page}>{page}</span>
            <button className={styles.button} onClick={nextPage}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default Pagination;