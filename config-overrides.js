import { override, addWebpackAlias } from 'customize-cra';
import { resolve } from 'path';

const rootImport = {
  '@': resolve(__dirname, 'src'),
};

export default override(addWebpackAlias(rootImport));
