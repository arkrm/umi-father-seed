const common = {
  runtimeHelpers: true,
};

// 开发环境
const dev = {
  entry: ['src/index.ts', 'src/style/entry.ts'],
  autoprefixer: {
    flexbox: 'no-2009',
  },
  esm: 'rollup',
  overridesByEntry: {
    'src/index.ts': {
      esm: { file: 'index' },
    },
    'src/style/entry.ts': {
      esm: { file: 'entry' },
    },
  },
};

const esm = {
  entry: 'src/index.ts',
  esm: {
    type: 'babel',
  },
  lessInBabelMode: false,
};

const cjs = {
  entry: 'src/index.ts',
  cjs: {
    type: 'babel',
  },
  lessInBabelMode: false,
};

const umd = {
  entry: ['src/index.ts', 'src/style/entry.ts'],
  autoprefixer: {
    flexbox: 'no-2009',
  },
  extractCSS: true,
  umd: {
    globals: {
      react: 'React',
    },
    minFile: true,
  },
  overridesByEntry: {
    'src/index.ts': {
      umd: { name: 'ufs', file: 'index' },
    },
    'src/style/entry.ts': {
      umd: { file: 'entry' },
    },
  },
};

const configMap = {
  dev,
  esm,
  cjs,
  umd,
};

const buildType = process.env.NODE_ENV === 'development' ? 'dev' : process.env.BUILD_TYPE;

export default {
  ...common,
  ...configMap[buildType],
};
