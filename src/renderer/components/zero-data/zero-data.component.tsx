import {
  Image,
  makeStyles,
  typographyStyles,
} from '@fluentui/react-components';
import './zero.data.scss';

type Props = {
  primaryText: string;
  secondaryText?: string;
  imagePath?: string;
};

const useStyles = makeStyles({
  primary: typographyStyles.title3,
  secondary: typographyStyles.body1,
  image: {
    height: '150px',
  },
});

export default function ZeroData(props: Props) {
  const { primaryText, secondaryText, imagePath } = props;
  const styles = useStyles();

  return (
    <div className="zero-data flex-row justify-center">
      <div className="flex-column flex-center">
        <Image className={styles.image} src={imagePath} />
        <div className={styles.primary}>{primaryText}</div>
        <div className={styles.secondary}>{secondaryText}</div>
      </div>
    </div>
  );
}

ZeroData.defaultProps = {
  secondaryText: '',
  imagePath: '',
};
