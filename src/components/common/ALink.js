import { useRouter } from 'next/router';

const ALink = ({ children, href, classNames, styles }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={classNames ? classNames : ''} style={styles ? styles : {}}>
      {children}
    </a>
  );
};

export default ALink;
