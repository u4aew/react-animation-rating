import React, { useMemo } from 'react';
import { ReactComponent as IconStar } from '@/assets/icons/star.svg';
import styles from './RatingAnimation.module.scss';

export interface PropsRating {
  sizeStar?: number;
  countItem?: number;
  value?: number;
  onChange?: (value: number) => void;
  colorStar?: string;
  disabled?: boolean;
  colorInactiveStar?: string;
}

export const RatingAnimation = ({
  countItem = 5,
  colorInactiveStar = '#9e9e9e',
  colorStar = '#ffc107',
  sizeStar = 24,
}: PropsRating): JSX.Element => {
  const countRating = useMemo(() => {
    return Array.from({ length: countItem }, (_, index) => index + 1);
  }, [countItem]);
  return (
    <div className={styles.rating}>
      <div className={styles.ratingBack}>
        {countRating.map(() => {
          return (
            <button
              style={{ color: colorInactiveStar, width: sizeStar, height: sizeStar, fontSize: sizeStar }}
              className={styles.ratingItem}
              type="button"
            >
              <IconStar className={styles.ratingIcon} />
            </button>
          );
        })}
      </div>
      <div className={styles.ratingFront}>
        {countRating.map(() => {
          return (
            <button
              style={{ color: colorStar, width: sizeStar, height: sizeStar, fontSize: sizeStar }}
              className={styles.ratingItem}
              type="button"
            >
              <IconStar className={styles.ratingIcon} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
