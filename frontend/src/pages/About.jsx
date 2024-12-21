import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Digi-bread CRM'}
      // subTitle={translate('')}
      extra={
        <>
          <p>
            Website : <a href="">soon will be live on digibread </a>{' '}
          </p>
          {/* <p>
            GitHub :{' '}
            <a href="https://github.com/idurar/idurar-erp-crm">
              https://github.com/idurar/idurar-erp-crm
            </a>
          </p> */}
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://digibreadindia.com/contact-us/`);
            }}
            
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
