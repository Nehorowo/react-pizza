import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <circle cx="20" cy="20" r="20" />
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="295" rx="6" ry="6" width="280" height="26" />
    <rect x="0" y="335" rx="6" ry="6" width="280" height="84" />
    <rect x="0" y="427" rx="6" ry="6" width="63" height="25" />
    <rect x="188" y="427" rx="6" ry="6" width="87" height="25" />
  </ContentLoader>
);

export default MyLoader;
