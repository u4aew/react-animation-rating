import React, { useEffect, useMemo } from 'react';
import { ReactComponent as IconStar } from '@/assets/icons/star.svg';
import styles from './RatingAnimation.module.scss';

export interface PropsRating {
  sizeStar?: number;
  countItem?: number;
  value: number;
  colorStar?: string;
  offset?: number;
  colorInactiveStar?: string;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const RatingAnimation = ({
  countItem = 5,
  colorInactiveStar = '#9e9e9e',
  colorStar = '#ffc107',
  sizeStar = 24,
  value = 0,
  offset = 5,
}: PropsRating): JSX.Element => {
  const [delta, setDelta] = React.useState<number>(0);
  const [deltaActive, setDeltaActive] = React.useState<number>(0);

  const countRating = useMemo(() => {
    return Array.from({ length: countItem + delta }, (_, index) => index + 1);
  }, [countItem, delta]);

  const countRatingActive = useMemo(() => {
    return Array.from({ length: value + deltaActive }, (_, index) => index + 1);
  }, [value, deltaActive]);

  const handleMouseOver = (idx) => {
    setDeltaActive(idx - value);
  };

  const handleMouseActiveOver = (idx) => {
    console.log(idx);
  };

  return (
    <div className={styles.rating}>
      <div className={styles.ratingBack}>
        {countRating.map((i) => {
          return (
            <button
              onMouseOut={() => setDeltaActive(0)}
              onMouseOver={() => {
                handleMouseOver(i);
              }}
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
              onMouseOver={() => {
                handleMouseActiveOver(i);
              }}
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
