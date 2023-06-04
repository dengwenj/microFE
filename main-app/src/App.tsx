import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProLayout,
} from '@ant-design/pro-components';

import defaultProps from './_defaultProps';
import RoutesConf from './router';
import logo from './assets/logo.png'

export default () => {
  const location = useLocation()

  const [pathname, setPathname] = useState(location.pathname);
  const navigate = useNavigate()

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        title="海川"
        logo={logo}
        layout='side'
        siderWidth={216}
        {...defaultProps}
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '邓文杰',
          size: 'small',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path!)
              navigate(item.path!)
            }}
          >
            {dom}
          </div>
        )}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <RoutesConf />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};