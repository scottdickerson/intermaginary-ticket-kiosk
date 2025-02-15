import styles from '../src/App.module.css';
import '../src/index.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <div className={styles.app}>
      <Story />
    </div>
  ),
];
