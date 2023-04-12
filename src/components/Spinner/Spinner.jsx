import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RotatingLines
        height="80"
        width="80"
        radius="9"
        color={(prop)=> prop.theme.header}
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};