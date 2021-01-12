import { IApi } from 'dumi';
import { AtomAsset } from 'dumi-assets-types';

export  default (api:IApi) => {
  // console.log('api---->',api)
  api.register({
    key: 'dumi.detectAtomAsset',
    fn(atom: AtomAsset) {
      // 可以对 atom 做统计、存储等
      console.log('atom--->',atom)
    },
  });
}
