import React, { FC } from 'react';
import classnames from 'classnames';

export const prefixCls = 'ufs-hello';

const Hello: FC = () => (
  <div className={classnames(`${prefixCls}-wrapper`)}>
    <div className={classnames(`${prefixCls}-title`)}>Hello, umi-seed-father</div>
    <div className={classnames(`${prefixCls}-content`)}>这是 umi-father-seed 示例工程的 Hello 组件</div>
  </div>
);

export default Hello;
