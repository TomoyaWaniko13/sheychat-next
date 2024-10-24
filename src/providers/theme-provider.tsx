'use client';

import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

// 4. Overriding Ant-D Components

// https://ant.design/docs/react/customize-theme

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#00b96b',
            borderRadius: 2,

            // Alias Token
            colorBgContainer: '#f6ffed',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
};

export default ThemeProvider;
