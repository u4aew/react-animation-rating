import cn from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { ReactComponent as IconStar } from '@/assets/icons/star.svg';
import styles from './RatingAnimation.module.scss';

export interface PropsRating {
  sizeStar?: number;
  countItem?: number;
  value: number;
  colorStar?: string;
  colorInactiveStar?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  className?: string;
}

export const RatingAnimation = ({
  countItem = 5,
  colorInactiveStar = '#9e9e9e',
  colorStar = '#ffc107',
  sizeStar = 24,
  value,
  onChange,
  disabled,
  className,
}: PropsRating): JSX.Element => {
  const [animatePosStar, setAnimatePosStar] = React.useState<number>(0);
  const [hoverPosStar, setHoverPosStar] = React.useState<number>(value);

  const countRating = useMemo(() => {
    return Array.from({ length: countItem }, (_, index) => index + 1);
  }, [countItem]);

  const handleMouseActiveOver = (idx: number) => {
    setHoverPosStar(idx);
  };

  const handleClick = useCallback(
    (idx: number) => {
      if (!disabled && onChange) {
        setAnimatePosStar(idx);
        onChange(idx);
      }
    },
    [disabled, onChange],
  );

  const hasHighlightStar = useCallback(
    (idx: number) => {
      if (idx <= value || idx <= hoverPosStar) {
        return true;
      }
    },
    [value, hoverPosStar],
  );

  return (
    <div className={cn(styles.rating, disabled && styles.ratingDisabled, className)}>
      <div className={styles.ratingWrapper}>
        {countRating.map((idx) => {
          return (
            <button
              onMouseOver={() => {
                handleMouseActiveOver(idx);
              }}
              onMouseLeave={() => {
                setHoverPosStar(0);
              }}
              onClick={() => {
                handleClick(idx);
              }}
              key={idx}
              style={{
                color: hasHighlightStar(idx) ? colorStar : colorInactiveStar,
                width: sizeStar,
                height: sizeStar,
                fontSize: sizeStar,
              }}
              className={cn(styles.ratingItem, idx === animatePosStar && styles.ratingItemAnimate)}
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
