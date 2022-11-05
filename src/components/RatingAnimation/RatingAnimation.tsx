import React, { useEffect, useMemo } from 'react';
import { ReactComponent as IconStar } from '@/assets/icons/star.svg';
import styles from './RatingAnimation.module.scss';

export interface PropsRating {
  sizeStar?: number;
  countItem?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  colorStar?: string;
  offset?: number;
  colorInactiveStar?: string;
}

export const RatingAnimation = ({
  countItem = 5,
  colorInactiveStar = '#9e9e9e',
  colorStar = '#ffc107',
  sizeStar = 24,
  value = 0,
  offset = 5,
}: PropsRating): JSX.Element => {

  const countRating = useMemo(() => {
    return Array.from({ length: countItem }, (_, index) => index + 1);
  }, [countItem]);

  const countRatingActive = useMemo(() => {
    return Array.from({ length: value }, (_, index) => index + 1);
  }, [value]);

  return (
    <div className={styles.rating}>
      <div className={styles.ratingBack}>
        {countRating.map((i) => {
          return (
            <button
              key={i}
              style={{
                color: colorInactiveStar,
                width: sizeStar,
                height: sizeStar,
                fontSize: sizeStar,
                marginRight: i !== countItem ? offset : 0,
              }}
              className={styles.ratingItem}
              type="button"
            >
              <IconStar className={styles.ratingIcon} />
            </button>
          );
        })}
      </div>
      <div className={styles.ratingFront}>
        {countRatingActive.map((i) => {
          return (
            <button
              key={i}
              style={{
                color: colorStar,
                width: sizeStar,
                height: sizeStar,
                fontSize: sizeStar,
                marginRight: i !== countItem ? offset : 0,
              }}
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
