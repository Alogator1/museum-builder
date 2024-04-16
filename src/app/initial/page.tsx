import styles from './initial.module.scss';

interface InitialProps {

}

const Initial = ({}: InitialProps) => {
  return (
    <div className={styles.buttomLink}>
      Hello initial
    </div>
  );
};

export default Initial;
