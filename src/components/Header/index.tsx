import './index.scss';
import styles from './index.module.scss';
export function Header() {
  return <div><p className="header">CSS 预处理器变量</p><p className={styles.header}>CSS Modules变量</p></div>
  
};

