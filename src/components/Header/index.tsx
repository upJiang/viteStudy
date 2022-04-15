import './index.scss';
import styles from './index.module.scss';
import { ReactComponent as ReactLogo } from '@/assets/icons/radio.svg';
import SvgIcon from '@/components/SvgIcon';

// worker使用
// import Worker from './workerExample.js?worker';
// 1. 初始化 Worker 实例
// const worker = new Worker();
// 2. 主线程监听 worker 的信息
// worker.addEventListener('message', (e) => {
//   console.log(e);
// });

// Web Assembly 文件 使用
// import init from './fib.wasm';
// type FibFunc = (num: number) => number;
// init({}).then((exports) => {
//   const fibFunc = exports.fib as FibFunc;
//   console.log('Fib result:', fibFunc(10));
// });

// 雪碧图处理
const icons = import.meta.globEager('@/assets/icons/logo-*.svg');
const iconUrls = Object.values(icons).map((mod) => {
  // 如 ../../assets/icons/logo-1.svg -> logo-1
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  return svgName;
});

export function Header() {
  console.log('iconUrls', iconUrls);

  return (
    <div>
      <p className="header">CSS 预处理器变量</p>
      <p className={styles.header}>CSS Modules变量</p>
      <ReactLogo />
      {iconUrls.map((item) => (
        <SvgIcon name={item} key={item} width="50" height="50" />
      ))}
    </div>
  );
}
