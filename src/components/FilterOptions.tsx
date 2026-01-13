import React from 'react';
import styles from '../styles/FilterOptions.module.css';

interface FilterOptionsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <button
        className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`${styles.filterButton} ${filter === 'completed' ? styles.active : ''}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterOptions;