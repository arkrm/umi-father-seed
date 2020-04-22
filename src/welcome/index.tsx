import React, { FC, useState, useRef, MutableRefObject, useCallback, useEffect } from 'react';
import classnames from 'classnames';
import { getRandomRound } from '../util';

const getTagText = (tags: string[]): string => tags[getRandomRound(0, tags.length - 1)];

type IWelcomeProps = {
  ds: string[];
  btnText?: string;
  onBtnClick?: () => void;
};

export const prefixCls = 'ufs-welcome';

const Welcome: FC<IWelcomeProps> = ({ ds, btnText = 'ENTER', onBtnClick }) => {
  const timer: MutableRefObject<any> = useRef(null);
  const [tagText, setTagText] = useState(getTagText(ds));

  const clearTimer = () => {
    if (timer && timer.current) {
      clearTimeout(timer.current);
    }
  };

  const animate = useCallback(() => {
    clearTimer();
    timer.current = setTimeout(() => {
      setTagText(getTagText(ds));
      animate();
    }, Math.random() * 300 + 200);
  }, [ds]);

  useEffect(() => {
    animate();
    return () => {
      clearTimer();
    };
  }, [animate]);

  return (
    <div className={classnames(`${prefixCls}-wrapper`)}>
      <div className={classnames(`${prefixCls}-tag`)}>{tagText}</div>
      <div className={classnames(`${prefixCls}-link`)} onClick={onBtnClick}>
        {btnText}
      </div>
    </div>
  );
};

export default Welcome;
